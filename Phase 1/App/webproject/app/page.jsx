import Link from "next/link";
import React from "react";


export default function Home() {
  return (
    <>
    <div className="stats-grid">
      <Link href={`/stats/topClassesEnrollment`} className="stat-card">
        <div>Top 10 Classes by Enrollment</div>
      </Link>
      <Link href={`/stats/topCoursesGrade`} className="stat-card">
        <div>Top 10 Highest Average Grade Courses</div>
      </Link>
      <Link href={`/stats/topStudentsGpa`} className="stat-card">
        <div>Top 10 Students by GPA</div>
      </Link>
      <Link href={`/stats/topCategoriesGrade`} className="stat-card">
        <div>Top 10 Highest Average Grade Categories</div>
      </Link>
      <Link href={`/stats/bestCourseinCategory`} className="stat-card">
        <div>Best course grade average in each category </div>
      </Link>
      <Link href={`/stats/studentsPerCategory`} className="stat-card">
        <div>Number of students in each category </div>
      </Link>
      <Link href={`/stats/instructorsPerCategory`} className="stat-card">
        <div>Number of Instructors in each category </div>
      </Link>
      <Link href={`/stats/StudentCourseInstructorANDgrade`} className="stat-card">
        <div>Student & course & Instructor & grade</div>
        </Link>
    </div>
  </>
  );
}
