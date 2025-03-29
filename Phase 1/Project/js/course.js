let courses = localStorage.courses ? JSON.parse(localStorage.courses) : [];

if (courses.length === 0)
    loadCourses();
else
    displayCourses(courses);

async function loadCourses() {
    const response = await fetch("/json/courses.json");
    courses = await response.json();
    localStorage.courses = JSON.stringify(courses);
    displayCourses(courses);
}

function displayCourses(courses) {
    const tableBody = document.querySelector("#courseList");
    tableBody.innerHTML = ""; 
    courses.forEach(course => {
        if (course.status === "open") {
            tableBody.innerHTML += `
                <div class="course-card" data-crn="${course.CRN}">
                    <div class="card-header">
                        <h2 class="course-name">${course.CName}</h2>
                        <span class="course-number">Course No: ${course.CNo}</span>
                    </div>
                    <div class="card-body">
                        <div class="details">
                            <p><strong>Category:</strong> ${course.Category}</p>
                            <p><strong>Section:</strong> ${course.Section}</p>
                            <p><strong>CRN:</strong> ${course.CRN}</p>
                            <p><strong>Instructor:</strong> ${course.Instructor}</p>
                            <p><strong>Credit Hours:</strong> ${course.CH}</p>
                            <p><strong>Campus:</strong> ${course.Campus}</p>
                            <p><strong>Available Seats:</strong> ${course.Seats}</p>
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
        const filteredCourses = query === '' 
            ? courses // Display all courses if query is empty
            : courses.filter(course =>
                course.CNo.toLowerCase().includes(query) ||
                course.Category.toLowerCase().includes(query) ||
                course.CName.toLowerCase().includes(query)
            );
        displayCourses(filteredCourses);
    } catch (error) {
        console.error("Error searching courses:", error);
    }
}
function registerCourse(studentUsername, event) {
    let students = localStorage.students ? JSON.parse(localStorage.students) : [];
    let courses = localStorage.courses ? JSON.parse(localStorage.courses) : [];

    async function getStudent() {
        if (students.length === 0) {
            const response = await fetch("/json/students.json");
            students = await response.json();
            localStorage.students = JSON.stringify(students);
        }
        if (courses.length === 0) {
            const response = await fetch("/json/courses.json");
            courses = await response.json();
            localStorage.courses = JSON.stringify(courses);
        }
        processRegistration(event);
    }

    function processRegistration(event) {
        const student = students.find(s => s.username === studentUsername);
        if (!student) {
            alert("Student information not found.");
            return;
        }

        const courseCard = event.target.closest('.course-card');
        const crn = parseInt(courseCard.getAttribute('data-crn'));
        let course = courses.find(c => c.CRN === crn);

        if (!course) {
            alert("Course information not found.");
            return;
        }

        const alreadyRegistered = student.courses.some(c => 
            c.CNo === course.CNo && 
            (c.status === "in-progress" || c.status === "finished" || c.status === "pending")
        );

        if (alreadyRegistered) {
            alert("You have already registered for this course or have completed it.");
            return;
        }

        const [available, total] = course.Seats.split('/').map(Number);
        if (available <= 0) { 
            alert("No seats available for this course.");
            return;
        }

        if (course.Prereq && course.Prereq.length > 0) {
            const missingPrereqs = course.Prereq.filter(prereq => {
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

        course.Seats = `${available - 1}/${total}`;
        student.courses.push({
            CName: course.CName,
            CNo: course.CNo,
            img: course.img,
            status: "pending",
            grade: "N/A"
        });

        localStorage.courses = JSON.stringify(courses);
        localStorage.students = JSON.stringify(students);

        alert(`Successfully registered for ${course.CName} (${course.CNo}).`);
        displayCourses(courses);
    }

    if (students.length === 0 || courses.length === 0) {
        getStudent();
    } else {
        processRegistration(event);
    }
}