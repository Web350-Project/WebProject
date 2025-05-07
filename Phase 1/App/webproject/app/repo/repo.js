import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

class repo {
    // Top 10 Classes by Enrollment
    async getTopClassesByEnrollment() {
        return await prisma.classes.findMany({
            select: {
                CName: true,
                CRN: true,
                _count: {
                    select: { enrolledCourses: true }
                }
            },
            orderBy: {
                enrolledCourses: { _count: 'desc' }
            },
            take: 10
        })
    }

    // Top 10 Highest Average Grade Courses
    async getTopCoursesByGrade() {
        return await prisma.$queryRaw`
            SELECT 
                c.CName as courseName,
                cl.CRN as courseNumber,
                c.Category as category,
                AVG(
                    CASE ec.Grade
                        WHEN 'A' THEN 4.0
                        WHEN 'B+' THEN 3.5
                        WHEN 'B' THEN 3.0
                        WHEN 'C+' THEN 2.5
                        WHEN 'C' THEN 2.0
                        WHEN 'D+' THEN 1.5
                        WHEN 'D' THEN 1.0
                        WHEN 'F' THEN 0.0
                        ELSE NULL
                    END
                ) as averageGrade,
                COUNT(ec.CRN) as enrollmentCount
            FROM classes cl
            JOIN courses c ON cl.CNo = c.CNo
            JOIN enrolledCourses ec ON cl.CRN = ec.CRN
            WHERE ec.Grade IS NOT NULL
            GROUP BY c.CNo, c.CName, c.Category, cl.CRN
            HAVING COUNT(ec.CRN) >= 1
            ORDER BY averageGrade DESC
            LIMIT 10
        `;
    }

    // Top 10 Students by GPA
    async getTopStudentsByGPA() {
        return await prisma.students.findMany({
            select: {
                name: true,
                id: true,
                GPA: true
            },
            orderBy: {
                GPA: 'desc'
            },
            take: 10
        })
    }

    // Top 10 Highest Average Grade Categories
    async getTopCategoriesByGrade() {
        return await prisma.$queryRaw`
            SELECT 
                c.Category as category,
                AVG(
                    CASE ec.Grade
                        WHEN 'A' THEN 4.0
                        WHEN 'B+' THEN 3.5
                        WHEN 'B' THEN 3.0
                        WHEN 'C+' THEN 2.5
                        WHEN 'C' THEN 2.0
                        WHEN 'D+' THEN 1.5
                        WHEN 'D' THEN 1.0
                        WHEN 'F' THEN 0.0
                        ELSE NULL
                    END
                ) as avgGrade,
                COUNT(ec.CRN) as enrollmentCount
            FROM courses c
            JOIN classes cl ON c.CNo = cl.CNo
            JOIN enrolledCourses ec ON cl.CRN = ec.CRN
            WHERE ec.Grade IS NOT NULL
            GROUP BY c.Category
            ORDER BY avgGrade DESC
            LIMIT 10
        `;
    }
    async getInstructorsPerCategory() {
        return await prisma.$queryRaw`
        SELECT 
            c.Category,
            COUNT(DISTINCT cl.instructorUsername) as instructorCount,
            GROUP_CONCAT(DISTINCT i.name) as instructorNames
        FROM courses c
        JOIN classes cl ON c.CNo = cl.CNo
        JOIN instructors i ON cl.instructorUsername = i.username
        GROUP BY c.Category
        ORDER BY instructorCount DESC
    `;
    }
    // Best course grade average in each category
    async getBestCourseInEachCategory() {
        return await prisma.$queryRaw`
            WITH CourseGrades AS (
                SELECT 
                    c.Category,
                    c.CName,
                    c.CNo,
                    AVG(
                        CASE ec.Grade
                            WHEN 'A' THEN 4.0
                            WHEN 'B+' THEN 3.5
                            WHEN 'B' THEN 3.0
                            WHEN 'C+' THEN 2.5
                            WHEN 'C' THEN 2.0
                            WHEN 'D+' THEN 1.5
                            WHEN 'D' THEN 1.0
                            WHEN 'F' THEN 0.0
                            ELSE NULL
                        END
                    ) as avgGrade,
                    COUNT(ec.CRN) as enrollmentCount
                FROM courses c
                JOIN classes cl ON c.CNo = cl.CNo
                JOIN enrolledCourses ec ON cl.CRN = ec.CRN
                WHERE ec.Grade IS NOT NULL
                GROUP BY c.Category, c.CNo, c.CName
                HAVING COUNT(ec.CRN) >= 1
            ),
            RankedCourses AS (
                SELECT 
                    *,
                    ROW_NUMBER() OVER (
                        PARTITION BY Category
                        ORDER BY avgGrade DESC
                    ) as rank
                FROM CourseGrades
            )
            SELECT 
                Category, 
                CName, 
                CNo, 
                avgGrade,
                enrollmentCount
            FROM RankedCourses
            WHERE rank = 1
            ORDER BY avgGrade DESC
        `;
    }
    async getStudentsInEachCategory() {
        return await prisma.$queryRaw`
            SELECT 
                c.Category,
                COUNT(DISTINCT s.id) as studentCount
            FROM students s
            JOIN enrolledCourses ec ON s.username = ec.username
            JOIN classes cl ON ec.CRN = cl.CRN
            JOIN courses c ON cl.CNo = c.CNo

            GROUP BY c.Category
            ORDER BY studentCount DESC
        `;
    }

   
async getStudentsWithCoursesAndInstructors() {
    return await prisma.$queryRaw`
        SELECT 
            s.id AS studentId,
            s.name AS studentName,
            c.CName AS courseName,
            c.CNo AS courseNumber,
            i.name AS instructorName,
            i.username AS instructorUsername,
            cl.Section AS classSection,
            ec.Grade    AS Grade
        FROM students s
        JOIN enrolledCourses ec ON s.username = ec.username
        JOIN classes cl ON ec.CRN = cl.CRN
        JOIN courses c ON cl.CNo = c.CNo
        JOIN instructors i ON cl.instructorUsername = i.username
        ORDER BY s.name, c.CName
    `;
}
async getLowestGradeForEachStudent() {
    return await prisma.$queryRaw`
        WITH GradeMapping AS (
            SELECT 
                s.name AS studentName,
                c.CName AS courseName,
                ec.Grade,
                CASE ec.Grade
                    WHEN 'A' THEN 4.0
                    WHEN 'B+' THEN 3.5
                    WHEN 'B' THEN 3.0
                    WHEN 'C+' THEN 2.5
                    WHEN 'C' THEN 2.0
                    WHEN 'D+' THEN 1.5
                    WHEN 'D' THEN 1.0
                    WHEN 'F' THEN 0.0
                    ELSE NULL
                END AS gradeValue
            FROM students s
            JOIN enrolledCourses ec ON s.username = ec.username
            JOIN classes cl ON ec.CRN = cl.CRN
            JOIN courses c ON cl.CNo = c.CNo
            WHERE ec.Grade IS NOT NULL
        ),
        RankedGrades AS (
            SELECT 
                *,
                ROW_NUMBER() OVER (PARTITION BY studentName ORDER BY gradeValue ASC) AS rank
            FROM GradeMapping
        )
        SELECT 
            studentName,
            courseName AS lowestCourseGrade,
            Grade AS letterGrade
        FROM RankedGrades
        WHERE rank = 1
    `;
}
async getInstructorCourseAverageGrades() {
    return await prisma.$queryRaw`
        SELECT 
            i.username AS instructorUsername,
            i.name AS instructorName,
            c.CNo AS courseNumber,
            c.CName AS courseName,
            AVG(
                CASE ec.Grade
                    WHEN 'A' THEN 4.0
                    WHEN 'B+' THEN 3.5
                    WHEN 'B' THEN 3.0
                    WHEN 'C+' THEN 2.5
                    WHEN 'C' THEN 2.0
                    WHEN 'D+' THEN 1.5
                    WHEN 'D' THEN 1.0
                    WHEN 'F' THEN 0.0
                    ELSE NULL
                END
            ) AS averageGrade,
            COUNT(ec.CRN) AS enrollmentCount
        FROM instructors i
        JOIN classes cl ON i.username = cl.instructorUsername
        JOIN courses c ON cl.CNo = c.CNo
        JOIN enrolledCourses ec ON cl.CRN = ec.CRN
        WHERE ec.Grade IS NOT NULL
        GROUP BY i.username, i.name, c.CNo, c.CName
        ORDER BY i.name, c.CName
    `;
}
async getDeansList(){
    return await prisma.students.findMany({
        where: { GPA: { gte: 3.5 } },
        select: { id: true, name: true, GPA: true },
        orderBy: { GPA: 'desc' }
    });
}
}

export default new repo();