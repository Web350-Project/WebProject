import { fetchBestCourseInEachCategory, fetchInstructorsPerCategory, fetchLowestGradeForEachStudent, fetchTopCategoriesByGrade, fetchTopClassesByEnrollment, fetchTopCoursesByGrade, fetchTopStudentsByGPA } from "../../actions/serveractions"

export default async function topCoursesGrade() {
    const students = await fetchLowestGradeForEachStudent()
    console.log(students)

    return (
        <div className="top-classes-container">
            <h1>Lowest grade for each student</h1>
            <div className="table-wrapper">
                <table className="enrollment-table">
                    <thead>
                        <tr>
                            <th>Student name</th>
                            <th>course</th>
                            <th>grade</th>

                        </tr>
                        
                    </thead>
                    <tbody>
                        {students.map((item, index) => (
                           
                            <tr key={index}>

                                <td>{item.studentName}</td>
                                <td>{item.lowestCourseGrade}</td>
                                <td>{item.letterGrade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
