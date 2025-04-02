
let Allstudents = localStorage.students ? JSON.parse(localStorage.students) : [];
if (Allstudents.length === 0)
    loadAllstudents();
async function loadAllstudents() {
    const response2 = await fetch("/json/students.json");
    Allstudents = await response2.json();
}
let Cstudents = []
let classes = localStorage.classes ? JSON.parse(localStorage.classes) : [];
if (classes.length === 0)
    loadclasses();
async function loadclasses() {
    const response2 = await fetch("/json/classes.json");
    classes = await response2.json();
}
const table = document.querySelector("#maintable");
info()
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
        <tr>
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