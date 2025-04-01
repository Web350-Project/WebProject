let courses = localStorage.courses ? JSON.parse(localStorage.courses) : [];
if (courses.length === 0) loadCourses();
else {
    displayCourses(courses);
}
const tableBody = document.querySelector("#coursesTable");
const maincontent= document.querySelector("#main-content")
   
async function loadCourses() {
            const response = await fetch("/json/courses.json");
            courses = await response.json();
            localStorage.courses=JSON.stringify(courses);
            displayCourses(courses);
    }

function displayCourses(courses) {
    const tableBody = document.querySelector("#coursesTable");
    tableBody.innerHTML = ""; 
    courses.forEach(course => {
        if (course.status==="open") {
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
                <td> <p> open</p>        </td>
            </tr>
            `;
        }
        else{
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
                <td> <input type="button" value="Validate" id="V" onclick="ValidateCourse('${course.CNo}','${course.Section}')"> <br> <input type="button" value="Cancel" id="C" onclick="CancelCourse('${course.CNo}','${course.Section}')"> </td>
            </tr>
            `;
        }
    }
 
);
}

function searchCourses() {
    try {
        const query = document.querySelector("#search").value.toLowerCase();
        const filteredCourses = query === '' 
            ? courses // Display all courses if query is empty
            : courses.filter(course =>
                course.CNo.toLowerCase().includes(query) ||
                course.Category.toLowerCase().includes(query)
            );
        displayCourses(filteredCourses);
    } catch (error) {
        console.error("Error searching courses:", error);
    }
}
function ValidateCourse(Cno ,Section){
    const currentCourse = courses.find(e=> (e.Section===Section && e.CNo===Cno));
    currentCourse.status="open";
    localStorage.courses=JSON.stringify(courses);
    displayCourses(courses);
    
}
function CancelCourse(Cno ,Section){
    const currentCourseIndex = courses.findIndex(e=> (e.Section===Section && e.CNo===Cno));
    courses.splice(currentCourseIndex,1)
    localStorage.courses=JSON.stringify(courses);
    displayCourses(courses);
}
async function loadForm(pageUrl){
    const page = await fetch(pageUrl)
    const pageHTMLContent = await page.text()
    maincontent.innerHTML = pageHTMLContent;
    const recipeData = document.querySelector("#add-recipe-form");
}

