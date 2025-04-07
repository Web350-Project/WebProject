let classes = localStorage.classes ? JSON.parse(localStorage.classes) : [];
if (classes.length === 0)
    loadClasses();
else
    displayClasses(classes);

async function loadClasses() {
    const response = await fetch("/json/classes.json");
    classes = await response.json();
    localStorage.classes = JSON.stringify(classes);
    displayClasses(classes);
}

function displayClasses(classes) {
    const tableBody = document.querySelector("#courseList");
    tableBody.innerHTML = ""; 
    classes.forEach(classItem => {
        if (classItem.status === "open") {
            tableBody.innerHTML += `
                <div class="course-card" data-crn="${classItem.CRN}">
                    <div class="card-header">
                        <h2 class="course-name">${classItem.CName}</h2>
                        <span class="course-number">Course No: ${classItem.CNo}</span>
                    </div>
                    <div class="card-body">
                        <div class="details">
                            <p><strong>Category:</strong> ${classItem.Category}</p>
                            <p><strong>Section:</strong> ${classItem.Section}</p>
                            <p><strong>CRN:</strong> ${classItem.CRN}</p>
                            <p><strong>Instructor:</strong> ${classItem.Instructor}</p>
                            <p><strong>Credit Hours:</strong> ${classItem.CH}</p>
                            <p><strong>Campus:</strong> ${classItem.Campus}</p>
                            <p><strong>Available Seats:</strong> ${classItem.Seats}</p>
                            <input type="submit" value="Register" class="register-btn">
                        </div>
                    </div>
                </div>`;
        }
    });

    document.querySelectorAll('.register-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            registerCourse(localStorage.loggedStudent, event);
        });
    });
}

function searchCourses() {
    try {
        const query = document.querySelector("#search").value.toLowerCase();
        const filteredClasses = query === '' 
            ? classes // Display all classes if query is empty
            : classes.filter(classItem =>
                classItem.CNo.toLowerCase().includes(query) ||
                classItem.Category.toLowerCase().includes(query) ||
                classItem.CName.toLowerCase().includes(query)
            );
        displayClasses(filteredClasses);
    } catch (error) {
        console.error("Error searching classes:", error);
    }
}
function registerCourse(studentUsername, event) {
    let students = localStorage.students ? JSON.parse(localStorage.students) : [];
    let classes = localStorage.classes ? JSON.parse(localStorage.classes) : [];

    async function getStudent() {
        if (students.length === 0) {
            const response = await fetch("/json/students.json");
            students = await response.json();
            localStorage.students = JSON.stringify(students);
        }
        if (classes.length === 0) {
            const response = await fetch("/json/classes.json");
            classes = await response.json();
            localStorage.classes = JSON.stringify(classes);
        }
        processRegistration(event);
    }

    function    processRegistration(event) {
        const student = students.find(s => s.username === studentUsername);
        if (!student) {
            alert("Student information not found.");
            return;
        }

        const courseCard = event.target.closest('.course-card');
        const crn = parseInt(courseCard.getAttribute('data-crn'));
        let classItem = classes.find(c => c.CRN === crn);

        if (!classItem) {
            alert("Course information not found.");
            return;
        }

        const alreadyRegistered = student.courses.some(c => 
            c.CNo === classItem.CNo && 
            (c.status === "in-progress" || c.status === "finished")
        );

        if (alreadyRegistered) {
            alert("You have already registered for this course or have completed it.");
            return;
        }

        const [available, total] = classItem.Seats.split('/').map(Number);
        if (available <= 0) { 
            alert("No seats available for this course.");
            return;
        }

        if (classItem.Prereq && classItem.Prereq.length > 0) {
            const missingPrereqs = classItem.Prereq.filter(prereq => {
                const completed = student.courses.some(c => 
                    c.CNo === prereq && 
                    c.status === "finished" && 
                    ["A", "B+", "B", "C+", "C", "D+", "D"].includes(c.grade)
                );
                return !completed;
            });

            if (missingPrereqs.length > 0) {
                alert(`You haven't completed all prerequisites: ${missingPrereqs.join(", ")}`);
                return;
            }
        }

        classItem.Seats = `${available - 1}/${total}`;
        
        // Add student to the class's students array if not already there
        if (!classItem.students.includes(studentUsername)) {
            classItem.students.push(studentUsername);
        }
        student.courses = student.courses.filter(course => {
            return !(course.status === "pending" && course.CName === classItem.CName);
        });
        student.courses.push({
            CName: classItem.CName,
            CNo: classItem.CNo,
            img: classItem.img,
            status: "in-progress",
            grade: "N/A"
        });

        localStorage.classes = JSON.stringify(classes);
        localStorage.students = JSON.stringify(students);

        alert(`Successfully registered for ${classItem.CName} (${classItem.CNo}).`);
        displayClasses(classes);
    }

    if (students.length === 0 || classes.length === 0) {
        getStudent();
    } else {
        processRegistration(event);
    }
}