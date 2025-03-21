let Allstudents=[];
let studentCourse=[];
students();
const search = document.querySelector("#searchbox");
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
    
}
function loadcourses(e,type){
    e.preventDefault();
   
    [progress, finished, pending].forEach(link => {
        link.style.color = "white"; 
    });
    const id = `#${type}`;
    document.querySelector(id).style.color = "black";
    const filtterCourse = studentCourse.filter(e=> e.status==type);
    display(filtterCourse);

search.addEventListener('input', (e) => searchCourses(e, filtterCourse))
}
function display(list) {
    coursebox.innerHTML = '';
    list.forEach(course=>{
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
function searchCourses(e,filteredCourse){
    e.preventDefault();
    if(search.value){
    const searchedCourses = filteredCourse.filter(e=> e.CName.toLowerCase().includes(search.value.toLowerCase()))
    if (searchedCourses.length){
    display(searchedCourses);
    }
    else{
        coursebox.innerHTML = '';
        coursebox.innerHTML = `<p id="No-courses">No Courses with that letters</p>`;
    }
    }
    else{
        display(filteredCourse);
     }
}
