let Allstudents = [];
let studentCourse = [];

students();

const search = document.querySelector("#searchbox");
const progress = document.querySelector('#in-progress');
const finished = document.querySelector('#finished');
const pending = document.querySelector('#pending');
const coursebox = document.querySelector('#coursesbox');
pendingCourses()
progress.addEventListener("click", (e) => loadcourses(e, "in-progress"));
finished.addEventListener("click", (e) => loadcourses(e, "finished"));
pending.addEventListener("click", (e) => loadcourses(e, "pending"));

async function students() {

    if (localStorage.students) {
        Allstudents = JSON.parse(localStorage.students);} 
    else {
        const response = await fetch("/json/students.json");
        Allstudents = await response.json();
        localStorage.students = JSON.stringify(Allstudents);
    }

    const current = Allstudents.find(e => e.username === localStorage.loggedStudent);
    if (current) {
        studentCourse = current.courses;
        coursebox.innerHTML = `<p id="choose">Choose one of the options above</p>`;
    }
}

function loadcourses(e, type) {
    e.preventDefault();
   
    [progress, finished, pending].forEach(link => {
        link.style.color = "white"; 
    });
    const id = `#${type}`;
    document.querySelector(id).style.color = "black";
    
    if (localStorage.students) {
        Allstudents = JSON.parse(localStorage.students);
        const current = Allstudents.find(e => e.username === localStorage.loggedStudent);
        if (current) {
            studentCourse = current.courses;
        }
    }
    
    const filtterCourse = studentCourse.filter(e => e.status == type);
    display(filtterCourse);

    search.addEventListener('input', (e) => searchCourses(e, filtterCourse));
}

function display(list) {
    coursebox.innerHTML = '';
    
    if (list.length === 0) {
        coursebox.innerHTML = `<p id="No-courses">No courses found in this category</p>`;
        return;
    }
    
    list.forEach(course => {
        coursebox.innerHTML += `<div class="course"> 
            <div class="course-img">
                <img src="${course.img}" alt="web">   
            </div>     
            <div class="course-text">
                <p id="course-name">${course.CName}</p>
                <p id="grade">${course.grade}</p>
            </div>
        </div>`;
    });
}
async function pendingCourses() {
    let Allstudents = localStorage.students ? JSON.parse(localStorage.students) : [];
    let classes = localStorage.classes ? JSON.parse(localStorage.classes) : [];
    if (Allstudents.length === 0) {
        const response = await fetch("/json/students.json");
        Allstudents = await response.json();
        localStorage.students = JSON.stringify(Allstudents);
    }
    if (classes.length === 0) {
        const response = await fetch("/json/classes.json");
        classes = await response.json();
        localStorage.classes = JSON.stringify(classes);
    }
    const student = Allstudents.find(s => s.username === localStorage.loggedStudent);
    if (!student) {
        alert("Logged-in student not found.");
        return;
    }
    const openClasses = classes.filter(classItem => {
        const [available] = classItem.Seats.split('/').map(Number);
        return classItem.status === "open" && available > 0;
    });

    const finishedCourses = student.courses
        .filter(e => e.status === "finished" && ["A", "B+", "B", "C+", "C", "D+", "D"].includes(e.grade))
        .map(e => e.CNo);

    const registeredCourses = student.courses.map(c => c.CNo);

    const eligible = openClasses.filter(classItem => {
        if (!classItem.Prereq || classItem.Prereq.length === 0) {
            return !registeredCourses.includes(classItem.CNo);
        }
        return (
            classItem.Prereq.every(pr => finishedCourses.includes(pr)) &&
            !registeredCourses.includes(classItem.CNo)
        );
    });
    eligible.forEach(e => {
        student.courses.push({
            CName: e.CName,
            CNo: e.CNo,
            img: e.img,
            status: "pending",
            grade: e.CRN
        });
    });

    localStorage.students = JSON.stringify(Allstudents);
}



function searchCourses(e, filteredCourse) {
    e.preventDefault();
    if (search.value) {
        const searchedCourses = filteredCourse.filter(e => e.CName.toLowerCase().includes(search.value.toLowerCase()));
        if (searchedCourses.length) {
            display(searchedCourses);
        } else {
            coursebox.innerHTML = '';
            coursebox.innerHTML = `<p id="No-courses">No Courses with that letters</p>`;
        }
    } else {
        display(filteredCourse);
    }
}