import { fetchTopClassesByEnrollment } from "../../actions/serveractions"

export default async function TopClassesEnrollment() {
    const classes = await fetchTopClassesByEnrollment()

    return (
        <div className="top-classes-container">
            <h1>Top 10 Classes by Enrollment</h1>
            <div className="table-wrapper">
                <table className="enrollment-table">
                    <thead>
                        <tr>
                            <th>Class Name</th>
                            <th>CRN</th>
                            <th>Number of Students</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((item, index) => (
                            <tr key={index}>
                                <td>{item.CName}</td>
                                <td>{item.CRN}</td>
                                <td>{item._count.enrolledCourses}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
