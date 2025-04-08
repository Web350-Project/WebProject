let students = localStorage.students ? JSON.parse(localStorage.students) : [];

if (students.length === 0) getStudents();
let classes = localStorage.classes ? JSON.parse(localStorage.classes) : [];
if (classes.length === 0) loadCourses();
else {
    displayCourses(classes);
}
const maincontent = document.querySelector("#main-content");

loadCourseOptions();

async function loadCourses() {
    const response2 = await fetch("/json/classes.json");
    let courses = await response2.json();
    const response = await fetch("/json/courses.json");
    let cData = await response.json();
    classes = [cData, courses].flat();
    localStorage.classes = JSON.stringify(classes);
    displayCourses(classes);
}

function displayCourses(classes) {
    const courseList = document.querySelector("#courseList");
    courseList.innerHTML = ""; 
    
    classes.forEach(course => {
        if(course.status === "In-progress" && course.CRN===undefined){
            courseList.innerHTML += `
                <div class="course-card" type="course-extra" data-cno="${course.CNo}" data-section="${course.Section}">
                    <div class="card-header">
                        <h2 class="course-name">${course.CName}</h2>
                        <span class="course-number">Course No: ${course.CNo}</span>
                    </div>
                    <div class="card-body">
                        <div class="details">
                            <p><strong>Category:</strong> ${course.Category}</p>
                            <p><strong>Credit Hours:</strong> ${course.CH}</p>
                            <p><strong>Status:</strong> <span class="status-open">In-progress</span></p>
                        </div>
                    </div>
                </div>
            `;
        }
        else if(course.status === "pending" && course.CRN===undefined){
            courseList.innerHTML += `
                <div class="course-card" type="course-extra"  data-cno="${course.CNo}" data-section="${course.Section}">
                    <div class="card-header">
                        <h2 class="course-name">${course.CName}</h2>
                        <span class="course-number">Course No: ${course.CNo}</span>
                    </div>
                    <div class="card-body">
                        <div class="details">
                            <p><strong>Category:</strong> ${course.Category}</p>
                            <p><strong>Credit Hours:</strong> ${course.CH}</p>
                            <div class="action-buttons">
                                <input type="button" value="Validate" class="validate-btn" onclick="ValidateCourse('${course.CNo}','${course.Section}')">
                                <input type="button" value="Cancel" class="cancel-btn" onclick="CancelCourse('${course.CNo}','${course.Section}')">
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        else if (course.status === "In-progress") {
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
                            <p><strong>Status:</strong> <span class="status-open">In-progress</span></p>
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
                                <input type="button" value="Validate" class="validate-btn" onclick="ValidateClass('${course.CNo}','${course.Section}')">
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
        ? classes 
        : classes.filter(course =>
            course.CNo.toLowerCase().includes(query) ||
            course.Category.toLowerCase().includes(query) ||
            course.CName.toLowerCase().includes(query)
        );
    
        displayCourses(filteredCourses);
    } catch (error) {
        console.error("Error searching courses:", error);
    }
}
async function getStudents() {
    const response = await fetch("/json/students.json");
    students = await response.json();
    localStorage.students = JSON.stringify(students);
}

function ValidateClass(Cno, Section) {
    const currentCourse = classes.find(e => (e.Section === Section && e.CNo === Cno));
    console.log(currentCourse)
    currentCourse.status = "In-progress";
    students.forEach(student => {
        console.log(student)
        student.courses.forEach(course => {

          if (course.Section === Section && course.CNo === Cno && course.status === "pending") {
            course.status = "in-progress"; 
          }
        });
      });
    
    // Update localStorage
    localStorage.students = JSON.stringify(students);
    localStorage.classes = JSON.stringify(classes);

    // Refresh UI
    displayCourses(classes);

}

function ValidateCourse(Cno, Section) {
    console.log(Cno);
    console.log(Section);
    const currentCourse = classes.find(e => (typeof e.Section === Section && e.CNo === Cno));
    console.log(currentCourse)
    currentCourse.status = "In-progress";
    localStorage.classes = JSON.stringify(classes);

    // Refresh UI
    displayCourses(classes);

}

function CancelCourse(Cno, Section) {
    const currentCourseIndex = classes.findIndex(e => (e.Section === Section && e.CNo === Cno));
    classes.splice(currentCourseIndex, 1);
    localStorage.classes = JSON.stringify(classes);
    displayCourses(classes);
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
    
    let cData =classes.filter(course => course.CRN===undefined)
    const courseOptions = cData
        .map(course => `<option value="${course.CNo}">${course.CName}</option>`);
    element.innerHTML = courseOptions.join(' ');
}

function handleClassSubmit(e) {
    const data = new FormData(e.target);
    const classItem = Object.fromEntries(data);
    let courseItem= null;
    for (const element of classes) {
       if(classItem["course"] === element.CNo){
        courseItem=element;
       }
      }
      classes.push({
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
        "status": "pending",
        "CRN": classItem["CRN"],
        "students":[]
    });
    localStorage.classes = JSON.stringify(classes);
    displayCourses(classes);
}

function handleCourseSubmit(e) {
    const data = new FormData(e.target);
    const course = Object.fromEntries(data);
    classes.push({
        "CName": course["CName"],
        "CNo": course["CNo"],
        "Category": course["Category"],
        "CH": course["CH"],
        "Prereq": course["Prereq"],
        "status": "pending"
        
    });
    localStorage.classes = JSON.stringify(classes);
    displayCourses(classes);
}