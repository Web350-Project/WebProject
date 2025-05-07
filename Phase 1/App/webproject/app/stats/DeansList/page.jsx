import { fetchBestCourseInEachCategory, fetchgetDeansList, fetchTopCategoriesByGrade, fetchTopClassesByEnrollment, fetchTopCoursesByGrade, fetchTopStudentsByGPA } from "../../actions/serveractions"

export default async function topCoursesGrade() {
    const students = await fetchgetDeansList()
    console.log(students)

    return (
        <div className="top-classes-container">
            <h1>Dean's List</h1>
            <div className="table-wrapper">
                <table className="enrollment-table">
                    <thead>
                        <tr>
                            <th>Students</th>
                            <th>GPA</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {students.map((item, index) => (
                           
                            <tr key={index}>

                                <td>{item.name}</td>
                                <td>{item.GPA}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
