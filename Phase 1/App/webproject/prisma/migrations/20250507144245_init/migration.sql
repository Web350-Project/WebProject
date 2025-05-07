-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "students" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "GPA" REAL NOT NULL,
    CONSTRAINT "students_username_fkey" FOREIGN KEY ("username") REFERENCES "User" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "courses" (
    "CName" TEXT NOT NULL,
    "CNo" TEXT NOT NULL PRIMARY KEY,
    "Category" TEXT NOT NULL,
    "CH" INTEGER NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "instructors" (
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL PRIMARY KEY,
    "expertise" TEXT NOT NULL,
    CONSTRAINT "instructors_username_fkey" FOREIGN KEY ("username") REFERENCES "User" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "classes" (
    "CName" TEXT NOT NULL,
    "img" TEXT,
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

-- CreateTable
CREATE TABLE "enrolledCourses" (
    "username" TEXT NOT NULL,
    "CRN" INTEGER NOT NULL,
    "Grade" TEXT,

    PRIMARY KEY ("username", "CRN"),
    CONSTRAINT "enrolledCourses_username_fkey" FOREIGN KEY ("username") REFERENCES "students" ("username") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "enrolledCourses_CRN_fkey" FOREIGN KEY ("CRN") REFERENCES "classes" ("CRN") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CoursePrereqs" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CoursePrereqs_A_fkey" FOREIGN KEY ("A") REFERENCES "courses" ("CNo") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CoursePrereqs_B_fkey" FOREIGN KEY ("B") REFERENCES "courses" ("CNo") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "students_username_key" ON "students"("username");

-- CreateIndex
CREATE UNIQUE INDEX "classes_Section_CNo_key" ON "classes"("Section", "CNo");

-- CreateIndex
CREATE UNIQUE INDEX "_CoursePrereqs_AB_unique" ON "_CoursePrereqs"("A", "B");

-- CreateIndex
CREATE INDEX "_CoursePrereqs_B_index" ON "_CoursePrereqs"("B");
