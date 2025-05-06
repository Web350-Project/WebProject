import { fetchTopClassesByEnrollment, fetchTopStudentsByGPA } from "../../actions/serveractions"

export default async function topStudentsGpa() {
    const students = await fetchTopStudentsByGPA()

    return (
        <div className="top-classes-container">
            <h1>Top 10 Student by GPA</h1>
            <div className="table-wrapper">
                <table className="enrollment-table">
                    <thead>
                        <tr>
                            <th>Student name</th>
                            <th>id</th>
                            <th>GPA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.id}</td>
                                <td>{item.GPA}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
