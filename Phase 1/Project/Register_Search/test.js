let courses=[];
document.addEventListener("DOMContentLoaded",  () => {
    const tableBody = document.querySelector("#coursesTable");
    async function loadCourses() {
        try {
            const response = await fetch("courses.json");
            courses = await response.json(); 
            displayCourses(courses);}
        catch (error) {
            console.error("Error fetching courses:", error);
        }
    }
     function displayCourses(courses) {
            tableBody.innerHTML = ""; 
            courses.forEach(course => {
                if (course.Open) {
                    tableBody.innerHTML += `
                    <tr>
                        <td>${course.CNo}</td>
                        <td>${course.CName}</td>
                        <td>${course.Section}</td>
                        <td>${course.CH}</td>
                        <td>${course.Instructor}</td>
                        <td>${course.Campus}</td>
                        <td>${course.Category}</td>
                        <td>${course.Seats}</td>
                        <td> <input type="submit" value="Register"> </td>
                    </tr>
                    `;
                }
            });
    }
loadCourses();
});
function searchCourses() {
    try {
        const query = document.querySelector("#search").value.toLowerCase();
        const filteredCourses = query ==='' 
        ? courses       // Display all courses if query is empty
        : courses.filter(course =>
            course.CNo.toLowerCase().includes(query) ||
            course.Category.toLowerCase().includes(query)
        );
        displayCourses(filteredCourses);
    } catch (error) {
        console.error("Error searching courses:", error);
    }
}
