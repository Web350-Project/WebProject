let courses = localStorage.courses ? JSON.parse(localStorage.courses) : [];
if (courses.length === 0) loadCourses();
else {
    displayCourses(courses);
}
const maincontent = document.querySelector("#main-content");

loadCourseOptions();

async function loadCourses() {
    const response = await fetch("/json/courses.json");
    let cData = await response.json();
    const response2 = await fetch("/json/classes.json");
    let classes = await response2.json();
    courses = [cData, classes].flat();
    localStorage.courses = JSON.stringify(courses);
    displayCourses(courses);
}

function displayCourses(courses) {
    const courseList = document.querySelector("#courseList");
    courseList.innerHTML = ""; 
    
    courses.forEach(course => {
        if (course.status === "open") {
            courseList.innerHTML += `
                <div class="course-card" data-cno="${course.CNo}" data-section="${course.Section}">
                    <div class="card-header">
                        <h2 class="course-name">${course.CName}</h2>
                        <span class="course-number">Course No: ${course.CNo}</span>
                    </div>
                    <div class="card-body">
                        <div class="details">
                            <p><strong>Category:</strong> ${course.Category}</p>
                            <p><strong>Section:</strong> ${course.Section}</p>
                            <p><strong>Credit Hours:</strong> ${course.CH}</p>
                            <p><strong>Instructor:</strong> ${course.Instructor}</p>
                            <p><strong>Campus:</strong> ${course.Campus}</p>
                            <p><strong>Available Seats:</strong> ${course.Seats}</p>
                            <p><strong>Status:</strong> <span class="status-open">Open</span></p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            courseList.innerHTML += `
                <div class="course-card" data-cno="${course.CNo}" data-section="${course.Section}">
                    <div class="card-header">
                        <h2 class="course-name">${course.CName}</h2>
                        <span class="course-number">Course No: ${course.CNo}</span>
                    </div>
                    <div class="card-body">
                        <div class="details">
                            <p><strong>Category:</strong> ${course.Category}</p>
                            <p><strong>Section:</strong> ${course.Section}</p>
                            <p><strong>Credit Hours:</strong> ${course.CH}</p>
                            <p><strong>Instructor:</strong> ${course.Instructor}</p>
                            <p><strong>Campus:</strong> ${course.Campus}</p>
                            <p><strong>Available Seats:</strong> ${course.Seats}</p>
                            <div class="action-buttons">
                                <input type="button" value="Validate" class="validate-btn" onclick="ValidateCourse('${course.CNo}','${course.Section}')">
                                <input type="button" value="Cancel" class="cancel-btn" onclick="CancelCourse('${course.CNo}','${course.Section}')">
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    });
}

function searchCourses() {
    try {
        const query = document.querySelector("#search").value.toLowerCase();
        const filteredCourses = query === '' 
            ? courses // Display all courses if query is empty
            : courses.filter(course =>
                course.CNo.toLowerCase().includes(query) ||
                course.Category.toLowerCase().includes(query) ||
                course.CName.toLowerCase().includes(query)
            );
        displayCourses(filteredCourses);
    } catch (error) {
        console.error("Error searching courses:", error);
    }
}

function ValidateCourse(Cno, Section) {
    const currentCourse = courses.find(e => (e.Section === Section && e.CNo === Cno));
    currentCourse.status = "open";
    localStorage.courses = JSON.stringify(courses);
    displayCourses(courses);
}

function CancelCourse(Cno, Section) {
    const currentCourseIndex = courses.findIndex(e => (e.Section === Section && e.CNo === Cno));
    courses.splice(currentCourseIndex, 1);
    localStorage.courses = JSON.stringify(courses);
    displayCourses(courses);
}

async function loadClassForm(pageUrl) {
    const page = await fetch(pageUrl);
    const pageHTMLContent = await page.text();
    maincontent.innerHTML = pageHTMLContent;
    const courseOptions = document.querySelector("#course");
    loadCourseOptions(courseOptions);
    const classData = document.querySelector("#add-class-form");
    classData.addEventListener('submit', handleClassSubmit);
}

async function loadCourseForm(pageUrl) {
    const page = await fetch(pageUrl);
    const pageHTMLContent = await page.text();
    maincontent.innerHTML = pageHTMLContent;
    const courseOptions = document.querySelector("#prerequisite");
    loadCourseOptions(courseOptions);
    const courseData = document.querySelector("#add-course-form");
    courseData.addEventListener('submit', handleCourseSubmit);
}

async function loadCourseOptions(element) {
    const response = await fetch("/json/courses.json");
    let cData = await response.json();
    const courseOptions = cData
        .map(course => `<option value="${course.CNo}">${course.CName}</option>`);
    element.innerHTML = courseOptions.join(' ');
}

function handleClassSubmit(e) {
    const data = new FormData(e.target);
    const classItem = Object.fromEntries(data);
    let courseItem= null;
    for (const element of courses) {
       if(classItem["course"] === element.CNo){
        courseItem=element;
       }
      }
    courses.push({
        "CName": courseItem.CName,
        "img": classItem["img"],
        "CNo": courseItem.CNo,
        "Category":courseItem.Category,
        "Section": classItem["Section"],
        "CH": courseItem.CH,
        "Instructor": classItem["Instructor"],
        "Campus": classItem["Campus"],
        "Prereq": courseItem.Prereq,
        "Seats": classItem["Seats"],
        "status": "Wapproval",
        "CRN": classItem["CRN"],
        "students":[]
    });
    localStorage.courses = JSON.stringify(courses);
    displayCourses(courses);
}

function handleCourseSubmit(e) {
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
        "status": "Wapproval",
        "CRN": course["CRN"]
    });
    localStorage.courses = JSON.stringify(courses);
    displayCourses(courses);
}