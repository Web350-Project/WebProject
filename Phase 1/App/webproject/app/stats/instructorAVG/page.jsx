import { fetchBestCourseInEachCategory, fetchgetInstructorCourseAverageGrades, fetchTopCategoriesByGrade, fetchTopClassesByEnrollment, fetchTopCoursesByGrade, fetchTopStudentsByGPA } from "../../actions/serveractions"

export default async function topCoursesGrade() {
    const students = await fetchgetInstructorCourseAverageGrades()
    console.log(students)

    return (
        <div className="top-classes-container">
            <h1>Hieght average class in each category</h1>
            <div className="table-wrapper">
                <table className="enrollment-table">
                    <thead>
                        <tr>
                            <th>Instructor name</th>
                            <th>Course</th>
                            <th>AVG grade</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {students.map((item, index) => (
                           
                            <tr key={index}>

                                <td>{item.instructorName}</td>
                                <td>{item.courseName}</td>
                                <td>{item.averageGrade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
