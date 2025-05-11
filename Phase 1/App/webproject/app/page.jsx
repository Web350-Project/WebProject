'use client';

import React from "react";
import Card from "./components/Card";
import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Qatar University Statistics Dashboard</h1>
        {session ? (
          <div style={{ marginTop: "1rem" }}>
            <p>Welcome, {session.user.name}!</p>
            <button
              onClick={() => signOut({ callbackUrl: "/auth/signin" })}
              style={{
                padding: "8px 16px",
                backgroundColor: "#8A1739",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <p>Please sign in to access the dashboard.</p>
        )}
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