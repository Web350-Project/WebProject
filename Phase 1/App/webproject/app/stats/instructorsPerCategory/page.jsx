import { fetchBestCourseInEachCategory, fetchInstructorsPerCategory, fetchTopCategoriesByGrade, fetchTopClassesByEnrollment, fetchTopCoursesByGrade, fetchTopStudentsByGPA } from "../../actions/serveractions"

export default async function topCoursesGrade() {
    const students = await fetchInstructorsPerCategory()
    console.log(students)

    return (
        <div className="top-classes-container">
            <h1>Number of Instructors teaching in a category</h1>
            <div className="table-wrapper">
                <table className="enrollment-table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Number of instructors</th>

                        </tr>
                        
                    </thead>
                    <tbody>
                        {students.map((item, index) => (
                           
                            <tr key={index}>

                                <td>{item.Category}</td>
                                <td>{item.instructorCount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
