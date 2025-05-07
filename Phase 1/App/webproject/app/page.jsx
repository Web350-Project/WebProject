import React from "react";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Qatar University Statistics Dashboard</h1>
      </header>
      <div className="stats-grid">
        <Card href="/stats/topClassesEnrollment" title="Top 10 Classes by Enrollment" />
        <Card href="/stats/topCoursesGrade" title="Top 10 Highest Average Grade Courses" />
        <Card href="/stats/topStudentsGpa" title="Top 10 Students by GPA" />
        <Card href="/stats/topCategoriesGrade" title="Top 10 Highest Average Grade Categories" />
        <Card href="/stats/bestCourseinCategory" title="Best Course Grade Average in Each Category" />
        <Card href="/stats/studentsPerCategory" title="Number of Students in Each Category" />
        <Card href="/stats/instructorsPerCategory" title="Number of Instructors in Each Category" />
        <Card href="/stats/instructorAVG" title="Average Grade per Instructor" />
        <Card href="/stats/StudentCourseInstructorANDgrade" title="Student, Course, Instructor & Grade" />
        <Card href="/stats/LowestGradeForEachStudent" title="Lowest Grade For Each Student" />
        <Card href="/stats/DeansList" title="Dean's List" />
      </div>
    </div>
  );
}