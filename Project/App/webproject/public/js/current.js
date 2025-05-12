let classes = localStorage.classes ? JSON.parse(localStorage.classes) : [];
if (classes.length === 0)
    loadclasses();
let Instructor=[];
let currentCourses=[];
info()
async function loadclasses() {
    const response2 = await fetch("/public/json/classes.json");
    classes = await response2.json();
}
let Allclasses=[];
const search = document.querySelector("#searchbox");
const coursebox= document.querySelector('#coursesbox');
async function info() {
    const response = await fetch("/public/json/instructor.json");
    Instructor = await response.json();
   
    console.log(Allclasses)
    const current= Instructor.find(e=> e.username === localStorage.loggedInstructor);
    console.log(current)
    findcurrentcourses(current.CRNS)
    
}
function findcurrentcourses(CRNS){
    currentCourses = classes.filter(obj => CRNS.includes(obj.CRN) && obj.status=== "In-progress");
    console.log(currentCourses)
    display(currentCourses);
}
function display(list) {
    coursebox.innerHTML = '';
    list.forEach(course=>{
        coursebox.innerHTML+=`<div class="course"> 
            <div class="course-img">
        <img src="${course.img} " alt="">   
      </div>     
          <div class="course-text">
            <button id="course-button" onclick="directToGrade('${course.CRN}')">${course.CName}</button>
            <p id="section">${course.Section}</p>
            </div>
        </div>

`;});
search.addEventListener('input', (e) => searchCourses(e, list))
}
window.directToGrade = function(CRN) {
    localStorage.currentCRN=CRN;
    window.location.href = "grade.html";
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
        display(currentCourses);
     }
}
