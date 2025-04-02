let courses = localStorage.courses ? JSON.parse(localStorage.courses) : [];
if (courses.length === 0) loadCourses();
else {
    displayCourses(courses);
}
const tableBody = document.querySelector("#coursesTable");
const maincontent= document.querySelector("#main-content")

loadCourseOptions()

async function loadCourses() {
            const response = await fetch("/json/courses.json");
            let cData = await response.json();
            const response2 = await fetch("/json/classes.json");
            let classes = await response2.json();
            courses=[cData,classes].flat()
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
async function loadClassForm(pageUrl){
    const page = await fetch(pageUrl)
    const pageHTMLContent = await page.text()
    maincontent.innerHTML = pageHTMLContent;
    const classData = document.querySelector("#add-class-form");
}
async function loadCourseForm(pageUrl){
    const page = await fetch(pageUrl)
    const pageHTMLContent = await page.text()
    maincontent.innerHTML = pageHTMLContent;
    const courseOptions= document.querySelector("#prerequisite")
    loadCourseOptions(courseOptions);
    const courseData = document.querySelector("#add-course-form");
    courseData.addEventListener('submit', handleCourseSubmit)
}
async function loadCourseOptions(element){
    const response = await fetch("/json/courses.json");
    let cData = await response.json();
    const courseOptions = cData
    .map(course => `<option value="${course.CNo}">${course.CName}</option>`);
    element.innerHTML = courseOptions.join(' ');
}
function handleCourseSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const course = Object.fromEntries(data);
    courses.push({
        "CName": course["CName"],
        "img": course["img"],
        "CNo": course["CNo"],
        "Category": course["Category"],
        "Section": course["Section"],
        "CH": course["CH"],
        "Instructor": course["Instructor"],
        "Campus": course["Campus"],
        "Prereq": course["Prereq"],
        "Seats": course["Seats"],
        "status": course["status"],
        "CRN": course["CRN"]
    })
    localStorage.courses=JSON.stringify(courses);
    displayCourses(courses);
}
