
let Allstudents = localStorage.students ? JSON.parse(localStorage.students) : [];
if (Allstudents.length === 0)
    loadAllstudents();
async function loadAllstudents() {
    const response2 = await fetch("/json/students.json");
    Allstudents = await response2.json();
    localStorage.students = JSON.stringify(Allstudents);
}
let Cstudents = []
let classes = localStorage.classes ? JSON.parse(localStorage.classes) : [];
if (classes.length === 0)
    loadclasses();
async function loadclasses() {
    const response2 = await fetch("/json/classes.json");
    classes = await response2.json();
    localStorage.classes = JSON.stringify(classes);
}

const table = document.querySelector("#maintable");

info()

const submit = document.querySelector(".submit");
submit.addEventListener('click',handlesubmit);

function handlesubmit(){
   
    let total = document.querySelector("#Total");
    let row = document.querySelector("#alldata");
    const grade =total.value;
    const CCRN=Number(row.cells[2].textContent);
    const SId = row.cells[1].textContent;
  
    
    const storedData = localStorage.getItem('classes');
let courses = JSON.parse(storedData) || [];


courses = courses.map(course => {
  if ( course.CRN === CCRN) { 
    return {
      ...course,
      students: course.students.filter(student => student !== SId)
    };
  }
  return course;
});


localStorage.setItem('classes', JSON.stringify(courses));


}

async function info() {
    const response2 = await fetch("/json/students.json");
    Allstudents = await response2.json();
    const course= classes.find(e=> e.CRN==localStorage.currentCRN) 
    course.students.forEach(studentUsername => {
        const student = Allstudents.find(e => e.username === studentUsername);
        if (student) {
            Cstudents.push(student);
        }
    });
    display()
}
function display(){
    table.innerHTML=' ';
    Cstudents.forEach(student=>{
        table.innerHTML+= `
        <tr id='alldata'>
               <td>${student.name}</td>
               <td>${student.id}</td>
               <td>${localStorage.currentCRN}</td>
               <td><input type="number" name="Quizzes" id="Quizzes"></td>
               <td><input type="number" name="HWs" id="HWs"></td>
               <td><input type="number" name="Projet" id="Projet"></td>
               <td><input type="number" name="Midterm_Exam" id="Midterm_Exam"></td>
               <td><input type="number" name="Final_Exam" id="Final_Exam"></td>
               <td><input type="number" name="Total" id="Total"></td>
           </tr>
       `
   });
  
}