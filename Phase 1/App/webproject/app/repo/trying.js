// Course Generator in JavaScript
function generateCourses(numCourses) {
    const categories = ["AI", "Machine Learning", "Data Science", "Cybersecurity", 
                       "Cloud Computing", "Software Engineering", "Database Systems", 
                       "Networking", "Algorithms", "Web Development"];
    const statuses = ["inprogress", "completed", "upcoming", "archived"];
    const creditHours = [1, 2, 3, 4];
    const departments = ["CMPS","CMPE"];
    
    const courses = [];
    
    for (let i = 0; i < numCourses; i++) {
      const dept = departments[Math.floor(Math.random() * departments.length)];
      const courseNum = `${dept}${Math.floor(Math.random() * 400) + 100}`;
      
      // Generate 0-3 random prerequisites
      const prereq = [];
      const numPrereq = Math.floor(Math.random() * 4);
      for (let j = 0; j < numPrereq; j++) {
        const prereqDept = departments[Math.floor(Math.random() * departments.length)];
        prereq.push(`${prereqDept}${Math.floor(Math.random() * 200) + 100}`);
      }
      
      courses.push({
        CName: `Course ${i + 1}: ${categories[Math.floor(Math.random() * categories.length)]} Concepts`,
        CNo: courseNum,
        Category: categories[Math.floor(Math.random() * categories.length)],
        CH: creditHours[Math.floor(Math.random() * creditHours.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],
        Prereq: prereq
      });
    }
    
    return courses;
  }
  
  // Generate 500 courses
  const coursesData = generateCourses(500);
  
  // Convert to JSON string with 2-space indentation
  const jsonData = JSON.stringify(coursesData, null, 2);
  
  // Output options:
  // 1. Console log a sample
  console.log("Sample of 5 courses:");
  console.log(JSON.stringify(coursesData.slice(0, 500), null, 2));
  
  // 2. Download as file (works in browser environment)
  function downloadJSON() {
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'courses.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  // Uncomment to enable download button in HTML:
  // <button onclick="downloadJSON()">Download courses.json</button>