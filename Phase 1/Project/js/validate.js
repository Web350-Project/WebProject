let students = localStorage.students ? JSON.parse(localStorage.students) : [];

if (students.length === 0) getStudents();

let classes = localStorage.classes ? JSON.parse(localStorage.classes) : [];
let courses = localStorage.courses ? JSON.parse(localStorage.courses) : [];

if (classes.length === 0) {
    if (courses.length === 0){
        loadClasses(1);       
    }
}
else {
    if (courses.length === 0){
        loadClasses(0);
        
    }
    displayCourses(courses);
}

const maincontent = document.querySelector("#main-content");

function showOnlyCourses() {
    const filteredCourses = courses.filter(course => course.CRN === undefined);
    displayCourses(filteredCourses);
}

function showOnlyClasses() {
    const filteredClasses = courses.filter(course => course.CRN !== undefined);
    displayCourses(filteredClasses);
}

loadCourseOptions();

async function loadClasses(type) {
    const response = await fetch("/json/courses.json");
    let cData = await response.json();
    if(type===1){
    const response2 = await fetch("/json/classes.json");
    classes = await response2.json();
    localStorage.classes = JSON.stringify(classes);
    }
    courses = [cData, classes].flat();
    localStorage.courses = JSON.stringify(courses);
    displayCourses(courses);
}

function displayCourses(courses) {
    const courseList = document.querySelector("#courseList");
    courseList.innerHTML = ""; 
    const courseB=` <div class="course-card" type="course-extra" data-cno="${course.CNo}" data-section="${course.Section}">
                    <div class="card-header">
                        <h2 class="course-name">${course.CName}</h2>
                        <span class="course-number">Course No: ${course.CNo}</span>
                    </div>
                    <div class="card-body">
                        <div class="details">
                            <p><strong>Category:</strong> ${course.Category}</p>
                            <p><strong>Credit Hours:</strong> ${course.CH}</p>`;

    const classB=`  <div class="course-card" data-cno="${course.CNo}" data-section="${course.Section}">
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
                            <p><strong>Available Seats:</strong> ${course.Seats}</p>`;

    courses.forEach(course => {
        if(course.status === "In-progress" && course.CRN===undefined){
            courseList.innerHTML += courseB+`
                            <p><strong>Status:</strong> <span class="status-open">In-progress</span></p>
                        </div>
                    </div>
                </div>
            `;
        }
        else if(course.status === "pending" && course.CRN===undefined){
            courseList.innerHTML += courseB+`
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
            courseList.innerHTML += classB+`
                            <p><strong>Status:</strong> <span class="status-open">In-progress</span></p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            courseList.innerHTML += classB+`
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
        ? courses 
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
async function getStudents() {
    const response = await fetch("/json/students.json");
    students = await response.json();
    localStorage.students = JSON.stringify(students);
}

function ValidateClass(Cno, Section) {
    const currentCourse = courses.find(e => (e.Section === Section && e.CNo === Cno));
    const currentCourse2 = classes.find(e => (e.Section === Section && e.CNo === Cno));
    console.log(currentCourse)
    currentCourse.status = "In-progress";
    currentCourse2.status = "In-progress";
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
    localStorage.courses = JSON.stringify(courses);
    localStorage.classes = JSON.stringify(classes);

    // Refresh UI
    displayCourses(courses);

}

function ValidateCourse(Cno, Section) {
    console.log(Cno);
    console.log(Section);
    const currentCourse = courses.find(e => (typeof e.Section === Section && e.CNo === Cno));
    console.log(currentCourse)
    currentCourse.status = "In-progress";
    localStorage.courses = JSON.stringify(courses);

    // Refresh UI
    displayCourses(courses);

}

function CancelCourse(Cno, Section) {
    let currentCourseIndex = courses.findIndex(e => (e.Section === Section && e.CNo === Cno));
      if( Section !== "undefined"){
      const currentCourseIndex2 = classes.findIndex(e => (e.Section === Section && e.CNo === Cno));
      classes.splice(currentCourseIndex2,1);
      }else{
          currentCourseIndex = courses.findIndex(e => (e.Section === undefined && e.CNo === Cno));
      }
      console.log(currentCourseIndex);
      courses.splice(currentCourseIndex, 1);
      localStorage.courses = JSON.stringify(courses);
      localStorage.classes = JSON.stringify(classes);
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
    
    let cData =courses.filter(course => course.CRN===undefined)
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
        "status": "pending",
        "CRN": classItem["CRN"],
        "students":[]
    });
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
    localStorage.courses = JSON.stringify(courses);
    localStorage.classes = JSON.stringify(classes);
    displayCourses(courses);
}

function handleCourseSubmit(e) {
    const data = new FormData(e.target);
    const course = Object.fromEntries(data);
    courses.push({
        "CName": course["CName"],
        "CNo": course["CNo"],
        "Category": course["Category"],
        "CH": course["CH"],
        "Prereq": course["Prereq"],
        "status": "pending"
        
    });
    localStorage.courses = JSON.stringify(courses);
    displayCourses(courses);
}