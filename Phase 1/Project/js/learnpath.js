let Allstudents=[];
let studentCourse=[];
students();
const progress = document.querySelector('#in-progress')
const finished = document.querySelector('#finished')
const pending = document.querySelector('#pending')
const coursebox= document.querySelector('#coursesbox');
progress.addEventListener("click", (e) => loadcourses(e, "in-progress"));
finished.addEventListener("click", (e) => loadcourses(e, "finished"));
pending.addEventListener("click", (e) => loadcourses(e, "pending"));
async function students() {
    const response = await fetch("/json/students.json");
    Allstudents = await response.json();
    const current= Allstudents.find(e=> e.username === localStorage.loggedStudent);
    if (current){
        studentCourse=current.courses;
        coursebox.innerHTML =`<p id="choose">Choose one of the options above</p>`
    }
    
    console.log(studentCourse)
}
function loadcourses(e,type){
    e.preventDefault();
    [progress, finished, pending].forEach(link => {
        link.style.color = "white"; 
    });
    const id = `#${type}`;
    document.querySelector(id).style.color = "black";
    coursebox.innerHTML = '';
    const filtterCourse = studentCourse.filter(e=> e.status==type);
    filtterCourse.forEach(course=>{
        coursebox.innerHTML+=`<div class="course"> 
            <div class="course-img">
        <img src="${course.img}" alt="web">   
      </div>     
          <div class="course-text">
            <p id="course-name">${course.CName}</p>
            <p id="grade">${course.grade}</p>
            </div>
        </div>
`;});
}
