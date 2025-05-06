import { fetchBestCourseInEachCategory, fetchInstructorsPerCategory, fetchInstructorsWithGradeAverages, fetchStudentsWithCoursesAndInstructors, fetchTopCategoriesByGrade, fetchTopClassesByEnrollment, fetchTopCoursesByGrade, fetchTopStudentsByGPA } from "../../actions/serveractions"

export default async function topCoursesGrade() {
    const students = await fetchStudentsWithCoursesAndInstructors()
    console.log(students)

    return (
        <div className="top-classes-container">
            <h1>Student name and course name and Instructor name and grade </h1>
            <div className="table-wrapper">
                <table className="enrollment-table">
                    <thead>
                        <tr>
                            <th>Student name</th>
                            <th>course name</th>
                            <th>Instructor name </th>
                            <th>grade</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {students.map((item, index) => (
                           
                            <tr key={index}>

                                <td>{item.studentName}</td>
                                <td>{item.courseName}</td>
                                <td>{item.instructorName}</td>
                                <td>{item.Grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
