
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
    const grade =Number(total.value);
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
    location.reload();
    changeStudentData(grade,CCRN,SId)

}

function changeStudentData(grade,CCRN,SId){
    const storedData = localStorage.getItem('students'); 
    let students = JSON.parse(storedData) || [];

    const studentIdToUpdate = SId;
    const courseToUpdate =  findCno(CCRN) ; 
    const newGrade = numaricToLetter(grade); 
    const newIMG = findimg(CCRN)
    const newStatus = "finished";
    console.log(studentIdToUpdate);
    console.log(courseToUpdate);
    console.log(newGrade);
    console.log(newStatus);

    students = students.map(student => {
    if (student.id === studentIdToUpdate) {
   
        const updatedCourses = student.courses.map(course => {
        if (course.CNo === courseToUpdate) {
            return { ...course, grade: newGrade,img : newIMG, status: newStatus };
        }
        return course;
        });

    
        const gpa = calculateGPA(updatedCourses);
    
        return { ...student, courses: updatedCourses, GPA: gpa.toFixed(2) };
    }
    return student;
    });
    localStorage.setItem('students', JSON.stringify(students));
}

function findCno(CCRN){

    for (const element of classes) {
        if(CCRN === element.CRN){
         return element.CNo;
        }
       }

       
}
function findimg(CCRN){

    for (const element of classes) {
        if(CCRN === element.CRN){
         return element.img;
        }
       }

       
}
function numaricToLetter(grade){

    if (grade >= 90) return 'A';
    
    if (grade >= 85) return 'B+';
    if (grade >= 80) return 'B';

    if (grade >= 75) return 'C+';
    if (grade >= 70) return 'C';

    if (grade >= 65) return 'D';
    if (grade >= 60) return 'D+';

    return 'F';

}

function calculateGPA(courses) {
    const gradePoints = {
      "A": 4.0,
      "B+": 3.5,
      "B": 3.0,
      "C+": 2.5,
      "C": 2.0,
      "D+": 1.5,
      "D": 1.0,
      "F": 0.0
    };
  
    let totalPoints = 0;
    let totalCourses = 0;
  
    courses.forEach(course => {
      if (course.grade !== "N/A" && gradePoints[course.grade] !== undefined) {
        totalPoints += gradePoints[course.grade];
        totalCourses++;
      }
    });
  
    return totalCourses > 0 ? totalPoints / totalCourses : 0;
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