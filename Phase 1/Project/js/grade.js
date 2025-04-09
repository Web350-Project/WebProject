let Allstudents = localStorage.students ? JSON.parse(localStorage.students) : [];
let Cstudents = [];
let classes = localStorage.classes ? JSON.parse(localStorage.classes) : [];

const table = document.querySelector("#maintable");
const submit = document.querySelector(".submit");

if (Allstudents.length === 0) loadAllstudents();
if (classes.length === 0) loadClasses();

submit.addEventListener("click", handleSubmit);

async function loadAllstudents() {
    const response = await fetch("/json/students.json");
    Allstudents = await response.json();
    localStorage.students = JSON.stringify(Allstudents);
}

async function loadClasses() {
    const response = await fetch("/json/classes.json");
    classes = await response.json();
    localStorage.classes = JSON.stringify(classes);
}


info();

function info() {
    const currentCRN = Number(localStorage.currentCRN);
    const course = classes.find(c => c.CRN === currentCRN);
    if (!course) return;

    course.students.forEach(username => {
        const student = Allstudents.find(s => s.username === username);
        if (student) {
            Cstudents.push(student);
        }
    });

    display();
}

function display() {
    table.innerHTML = "";
    Cstudents.forEach(student => {
        table.innerHTML += `
        <tr class='student-row' data-id='${student.id}'>
            <td>${student.name}</td>
            <td>${student.id}</td>
            <td>${localStorage.currentCRN}</td>
            <td><input type="number" min="0" max="100" name="Quizzes" class="Quizzes grade"></td>
            <td><input type="number" min="0" max="100" name="HWs" class="HWs grade"></td>
            <td><input type="number" min="0" max="100" name="Projet" class="Projet grade"></td>
            <td><input type="number" min="0" max="100" name="Midterm_Exam" class="Midterm_Exam grade"></td>
            <td><input type="number" min="0" max="100" name="Final_Exam" class="Final_Exam grade"></td>
            <td><input type="number" min="0" max="100" name="Total" class="Total" readonly></td>
         </tr>
        `;
    });
    displayGrade();
}


function displayGrade(){
    const rows = document.querySelectorAll('.student-row');
    
    rows.forEach(row => {
        const gradeInputs = row.querySelectorAll('.grade');
        
        gradeInputs.forEach(input => {
            input.addEventListener('input', () => {
                // Validate input on entry
                if (input.value !== '') {
                    const value = parseFloat(input.value);
                    if (value < 0) input.value = 0;
                    if (value > 100) input.value = 100;
                }
                calculateGrade(row);
            });
        });
    });
}

function calculateGrade(row) {
    const weights = {
        'Quizzes': 0.15,
        'HWs': 0.15,
        'Projet': 0.20,
        'Midterm_Exam': 0.20,
        'Final_Exam': 0.30
    };
    
    let total = 0;
    let allFilled = true;
    
    for (const [component, weight] of Object.entries(weights)) {
        const input = row.querySelector(`.${component}`);
        if (input && input.value !== '') {
            const value = parseFloat(input.value);
            if (!isNaN(value)) {
                total += value * weight;
            } else {
                allFilled = false;
            }
        } 
        else {
            allFilled = false;
        }
    }
    
    const totalInput = row.querySelector('.Total');
    if (allFilled) {
        totalInput.value = Math.round(total * 100) / 100;
    } else {
        totalInput.value = '';
    }
}

function validateAllInputs() {
    const inputs = document.querySelectorAll('.grade');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.value !== '') {
            const value = parseFloat(input.value);
            if (isNaN(value) || value < 0 || value > 100) {
                isValid = false;
            }
        }
    });
    
    return isValid;
}

function handleSubmit() {
    if (!validateAllInputs()) {
        alert("All grades must be between 0 and 100.");
        return;
    }
    
    const rows = document.querySelectorAll(".student-row");
    const currentCRN = Number(localStorage.currentCRN);

    classes = classes.map(course => {
        if (course.CRN === currentCRN) {
            return {
                ...course,
                status: "finished" 
            };
        }
        return course;
    });

    rows.forEach(row => {
        const grade = Number(row.querySelector(".Total").value);
        const studentId = row.dataset.id;
        const CRN = Number(row.cells[2].textContent);

        classes = classes.map(course => {
            if (course.CRN === CRN) {
                return {
                    ...course,
                    students: course.students.filter(id => id !== studentId)
                };
            }
            return course;
        });

        changeStudentData(grade, CRN, studentId);
    });

    localStorage.setItem("classes", JSON.stringify(classes));
    localStorage.setItem("students", JSON.stringify(Allstudents));
    
    location.reload();
}

function changeStudentData(grade, CRN, studentId) {
    const newGrade = numericToLetter(grade);
    const newStatus = "finished";
    const courseCNo = findCno(CRN);
    const courseImg = findImg(CRN);

    Allstudents = Allstudents.map(student => {
        if (student.id === studentId) {
            const updatedCourses = student.courses.map(course => {
                if (course.CNo === courseCNo) {
                    return { ...course, grade: newGrade, img: courseImg, status: newStatus };
                }
                return course;
            });

            const updatedGPA = calculateGPA(updatedCourses);

            return {
                ...student,
                courses: updatedCourses,
                GPA: updatedGPA.toFixed(2)
            };
        }
        return student;
    });
}

function findCno(CRN) {
    const course = classes.find(c => c.CRN === CRN);
    return course ? course.CNo : "";
}

function findImg(CRN) {
    const course = classes.find(c => c.CRN === CRN);
    return course ? course.img : "";
}

function numericToLetter(grade) {
    if (grade >= 90) return "A";
    if (grade >= 85) return "B+";
    if (grade >= 80) return "B";
    if (grade >= 75) return "C+";
    if (grade >= 70) return "C";
    if (grade >= 65) return "D+";
    if (grade >= 60) return "D";
    return "F";
}

function calculateGPA(courses) {
    const points = {
        "A": 4.0, "B+": 3.5, "B": 3.0,
        "C+": 2.5, "C": 2.0, "D+": 1.5,
        "D": 1.0, "F": 0.0
    };

    let totalPoints = 0;
    let count = 0;

    courses.forEach(course => {
        if (course.grade && points[course.grade] !== undefined) {
            totalPoints += points[course.grade];
            count++;
        }
    });

    return count > 0 ? totalPoints / count : 0;
}