import { fetchTopClassesByEnrollment, fetchTopCoursesByGrade, fetchTopStudentsByGPA } from "../../actions/serveractions"

export default async function topCoursesGrade() {
    const students = await fetchTopCoursesByGrade()
    console.log(students)

    return (
        <div className="top-classes-container">
            <h1>Highest Grade each course</h1>
            <div className="table-wrapper">
                <table className="enrollment-table">
                    <thead>
                        <tr>
                            <th>Class name</th>
                            <th>CRN</th>
                            <th>AVG grades</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {students.map((item, index) => (
                           
                            <tr key={index}>

                                <td>{item.courseName}</td>
                                <td>{item.courseNumber}</td>
                                <td>{item.averageGrade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
