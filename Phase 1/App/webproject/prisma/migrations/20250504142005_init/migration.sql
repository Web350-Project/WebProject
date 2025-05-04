/*
  Warnings:

  - You are about to drop the `Usernames` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `enrolledCoursesCRN` on the `courses` table. All the data in the column will be lost.
  - You are about to drop the column `enrolledCoursesUsername` on the `courses` table. All the data in the column will be lost.
  - You are about to drop the column `instructorsUsername` on the `courses` table. All the data in the column will be lost.
  - Added the required column `instructorUsername` to the `classes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Usernames_type_key";

-- DropIndex
DROP INDEX "Usernames_password_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Usernames";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CoursePrereqs" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CoursePrereqs_A_fkey" FOREIGN KEY ("A") REFERENCES "courses" ("CNo") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CoursePrereqs_B_fkey" FOREIGN KEY ("B") REFERENCES "courses" ("CNo") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_classes" (
    "CName" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "CNo" TEXT NOT NULL,
    "Category" TEXT NOT NULL,
    "Section" TEXT NOT NULL,
    "CH" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "Campus" TEXT NOT NULL,
    "Seats" TEXT NOT NULL,
    "CRN" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "instructorUsername" TEXT NOT NULL,
    CONSTRAINT "classes_CNo_fkey" FOREIGN KEY ("CNo") REFERENCES "courses" ("CNo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "classes_instructorUsername_fkey" FOREIGN KEY ("instructorUsername") REFERENCES "instructors" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_classes" ("CH", "CName", "CNo", "CRN", "Campus", "Category", "Seats", "Section", "img", "status") SELECT "CH", "CName", "CNo", "CRN", "Campus", "Category", "Seats", "Section", "img", "status" FROM "classes";
DROP TABLE "classes";
ALTER TABLE "new_classes" RENAME TO "classes";
CREATE UNIQUE INDEX "classes_Section_CNo_key" ON "classes"("Section", "CNo");
CREATE TABLE "new_courses" (
    "CName" TEXT NOT NULL,
    "CNo" TEXT NOT NULL PRIMARY KEY,
    "Category" TEXT NOT NULL,
    "CH" INTEGER NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_courses" ("CH", "CName", "CNo", "Category", "status") SELECT "CH", "CName", "CNo", "Category", "status" FROM "courses";
DROP TABLE "courses";
ALTER TABLE "new_courses" RENAME TO "courses";
CREATE TABLE "new_enrolledCourses" (
    "username" TEXT NOT NULL,
    "CRN" INTEGER NOT NULL,
    "Grade" TEXT,

    PRIMARY KEY ("username", "CRN"),
    CONSTRAINT "enrolledCourses_username_fkey" FOREIGN KEY ("username") REFERENCES "students" ("username") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "enrolledCourses_CRN_fkey" FOREIGN KEY ("CRN") REFERENCES "classes" ("CRN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_enrolledCourses" ("CRN", "Grade", "username") SELECT "CRN", "Grade", "username" FROM "enrolledCourses";
DROP TABLE "enrolledCourses";
ALTER TABLE "new_enrolledCourses" RENAME TO "enrolledCourses";
CREATE TABLE "new_instructors" (
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL PRIMARY KEY,
    "expertise" TEXT NOT NULL,
    CONSTRAINT "instructors_username_fkey" FOREIGN KEY ("username") REFERENCES "User" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_instructors" ("expertise", "name", "username") SELECT "expertise", "name", "username" FROM "instructors";
DROP TABLE "instructors";
ALTER TABLE "new_instructors" RENAME TO "instructors";
CREATE TABLE "new_students" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "GPA" REAL NOT NULL,
    CONSTRAINT "students_username_fkey" FOREIGN KEY ("username") REFERENCES "User" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_students" ("GPA", "gender", "id", "name", "username") SELECT "GPA", "gender", "id", "name", "username" FROM "students";
DROP TABLE "students";
ALTER TABLE "new_students" RENAME TO "students";
CREATE UNIQUE INDEX "students_username_key" ON "students"("username");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_CoursePrereqs_AB_unique" ON "_CoursePrereqs"("A", "B");

-- CreateIndex
CREATE INDEX "_CoursePrereqs_B_index" ON "_CoursePrereqs"("B");
