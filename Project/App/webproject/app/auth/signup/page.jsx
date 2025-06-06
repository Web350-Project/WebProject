'use client';

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Card from "./components/Card";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin?callbackUrl=/");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="page-container">
        <header className="page-header">
          <h1>Qatar University Statistics Dashboard</h1>
          <p>Loading session...</p>
        </header>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Qatar University Statistics Dashboard</h1>
        <div style={{ marginTop: "1rem" }}>
          <p>Welcome, {session.user.username}!</p>
          <button
            onClick={() => signOut({ callbackUrl: "/auth/signin" })}
            style={{
              padding: "8px 16px",
              backgroundColor: "#8A1739",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "0.5rem",
            }}
          >
            Logout
          </button>
        </div>
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