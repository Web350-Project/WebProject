import { studentID } from '/js/login.js';
let Allstudents=[];
let studentCourse=[];
students();
const progress = document.querySelector('#progress')
const finished = document.querySelector('#finished')
const pending = document.querySelector('#pending')
const coursebox= document.querySelector('#courses');
progress.addEventListener('onclick', loadcourses("in-progress"));
finished.addEventListener('onclick', loadcourses("finished"))
pending.addEventListener('onclick', loadcourses("pending"))
async function students() {
    const response = await fetch("/json/students.json");
    Allstudents = await response.json();
    const current= user.find(e=> e.username == studentID);
    studentCourse=current.courses;
}
function loadcourses(type){
    coursebox.innerHTML = '';
    studentCourse.forEach(course=>{
        coursebox.innerHTML+=`<div class="course"> 
            <div class="course-img">
        <img src="${course.img}" alt="web">   
      </div>     
          <div class="course-text">
            <p id="course-name">${course.name}/p>
            <p id="grade">${course.grade}</p>
            </div>
        </div>
`;});
}
