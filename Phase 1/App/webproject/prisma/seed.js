import fse from 'fs-extra';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const basePath = path.join(process.cwd(), 'app/data');
const usersPath = path.join(basePath, 'usernames.json');
const studentsPath = path.join(basePath, 'students.json');
const instructorsPath = path.join(basePath, 'instructor.json');
const coursesPath = path.join(basePath, 'courses.json');
const classesPath = path.join(basePath, 'classes.json');
const enrolledCoursesPath = path.join(basePath, 'enrolledCourses.json');

async function seed() {
  // Load JSON files
  const users = await fse.readJson(usersPath);
  const students = await fse.readJson(studentsPath);
  const instructors = await fse.readJson(instructorsPath);
  const courses = await fse.readJson(coursesPath);
  const classes = await fse.readJson(classesPath);
  const enrolledCourses = await fse.readJson(enrolledCoursesPath);

  // Clear previous data in reverse dependency order
  await prisma.enrolledCourses.deleteMany();
  await prisma.classes.deleteMany();
  await prisma.students.deleteMany();
  await prisma.instructors.deleteMany();
  await prisma.courses.deleteMany();
  await prisma.user.deleteMany();

  // 1. Seed Users
  for (const user of users) {
    await prisma.user.create({ data: user });
  }

  // 2. Seed Courses (without prereqs first)
  for (const course of courses) {
    const { Prereq, ...courseData } = course;
    await prisma.courses.create({
      data: courseData,
    });
  }

  // 3. Connect Course Prerequisites
  for (const course of courses) {
    if (course.Prereq.length > 0) {
      await prisma.courses.update({
        where: { CNo: course.CNo },
        data: {
          prereqs: {
            connect: course.Prereq.map(pr => ({ CNo: pr })),
          },
        },
      });
    }
  }

  // 4. Seed Students
  for (const student of students) {
    const { username, ...studentData } = student;
    await prisma.students.create({
      data: {
        ...studentData,
        user: { connect: { username } },
      },
    });
  }

  // 5. Seed Instructors
  for (const instructor of instructors) {
    const { username, crns, ...instructorData } = instructor;
    await prisma.instructors.create({
      data: {
        ...instructorData,
        user: { connect: { username } },
      },
    });
  }

  // 6. Seed Classes
  for (const cls of classes) {
    await prisma.classes.create({
      data: {
        CName: cls.CName,
        img: cls.img,
        CNo: cls.CNo,
        Category: cls.Category,
        Section: cls.Section,
        CH: cls.CH,
        instructorUsername: cls.instructorUsername,
        Campus: cls.Campus,
        Seats: cls.Seats,
        status: cls.status,
        CRN: cls.CRN,
      },
    });
  }

  // 7. Seed Enrolled Courses
  for (const enrollment of enrolledCourses) {
    await prisma.enrolledCourses.create({
      data: {
        username: enrollment.username,
        CRN: enrollment.CRN,
        Grade: enrollment.Grade,
      },
    });
  }

  console.log('✅ Database seeded successfully!');
}

await seed()
  .catch((e) => {
    console.error('❌ Error while seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });