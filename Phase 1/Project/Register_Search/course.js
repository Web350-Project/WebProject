// async function fetchCourses() {
//     const response = await fetch('/courses.json');
//     const courses = await response.json();
//     displayCourses(courses);
// }

// function displayCourses(courses) {
//     // const list = document.querySelector("#courseList");
//     // list.innerHTML = ""; 

//     courses.forEach(course => {
//         if (course.available) {
//             const item = document.createElement("li");
//             item.textContent = `${course.name} - ${course.category}`;
//             list.appendChild(item);
//         }
//     });
// }

document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#coursesTable");

    async function loadCourses() {
        try {
            const response = await fetch("courses.json");
            const data = await response.json(); 

            tableBody.innerHTML = "";

            data.forEach(course => {
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
            });
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    }
loadCourses();
});


                        // <td><button id="btn"  style="padding: 10px;border-radius: 1rem; border-style: none;">Register</button></td>
                        // <td><button id="btn">Register</button></td>
                        //<td><input type="button" value="Register" id="btn" /></td>
                        // <input type="button" value="Register" " />