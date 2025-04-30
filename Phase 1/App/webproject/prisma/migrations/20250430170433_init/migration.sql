-- CreateTable
CREATE TABLE "Usernames" (
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
    CONSTRAINT "students_username_fkey" FOREIGN KEY ("username") REFERENCES "Usernames" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "courses" (
    "CName" TEXT NOT NULL,
    "CNo" TEXT NOT NULL PRIMARY KEY,
    "Category" TEXT NOT NULL,
    "CH" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "instructorsUsername" TEXT,
    "enrolledCoursesUsername" TEXT,
    "enrolledCoursesCRN" INTEGER,
    CONSTRAINT "courses_instructorsUsername_fkey" FOREIGN KEY ("instructorsUsername") REFERENCES "instructors" ("username") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "courses_enrolledCoursesUsername_enrolledCoursesCRN_fkey" FOREIGN KEY ("enrolledCoursesUsername", "enrolledCoursesCRN") REFERENCES "enrolledCourses" ("username", "CRN") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "classes" (
    "CName" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "CNo" TEXT NOT NULL,
    "Category" TEXT NOT NULL,
    "Section" TEXT NOT NULL,
    "CH" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "Campus" TEXT NOT NULL,
    "Seats" TEXT NOT NULL,
    "CRN" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "instructors" (
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL PRIMARY KEY,
    "expertise" TEXT NOT NULL,
    CONSTRAINT "instructors_username_fkey" FOREIGN KEY ("username") REFERENCES "Usernames" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "enrolledCourses" (
    "username" TEXT NOT NULL,
    "CRN" INTEGER NOT NULL,
    "Grade" TEXT NOT NULL,

    PRIMARY KEY ("username", "CRN")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usernames_password_key" ON "Usernames"("password");

-- CreateIndex
CREATE UNIQUE INDEX "Usernames_type_key" ON "Usernames"("type");

-- CreateIndex
CREATE UNIQUE INDEX "students_username_key" ON "students"("username");

-- CreateIndex
CREATE UNIQUE INDEX "classes_Section_CNo_key" ON "classes"("Section", "CNo");

-- CreateIndex
CREATE UNIQUE INDEX "enrolledCourses_username_key" ON "enrolledCourses"("username");

-- CreateIndex
CREATE UNIQUE INDEX "enrolledCourses_CRN_key" ON "enrolledCourses"("CRN");
