import { fetchTopCategoriesByGrade, fetchTopClassesByEnrollment, fetchTopCoursesByGrade, fetchTopStudentsByGPA } from "../../actions/serveractions"

export default async function topCoursesGrade() {
    const students = await fetchTopCategoriesByGrade()
    console.log(students)

    return (
        <div className="top-classes-container">
            <h1>Category AVG</h1>
            <div className="table-wrapper">
                <table className="enrollment-table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>AVG grades</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {students.map((item, index) => (
                           
                            <tr key={index}>

                                <td>{item.category}</td>
                                <td>{item.avgGrade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
