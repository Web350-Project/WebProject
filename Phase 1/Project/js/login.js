let user=[];
Users();
const loginform = document.querySelector('#login-form');
loginform.addEventListener('submit',check);

async function Users() {
    const response = await fetch("/json/usernames.json");
    user = await response.json();
}
function check(e){
    e.preventDefault();
    const data = new FormData(loginform);
    const info = Object.fromEntries(data);
    const current= user.find(e=> e.username == info.username);

    if (current){
        localStorage.loggedStudent=current.username;
        if (current.password == info.password)
            switch(current.type){
        case "student":
            window.location.href = "search_register.html";
        case "admin":
            window.location.href = "validatecourses.html";
        case "instructor":
            indow.location.href = "grade.html";
            }
        else
        alert("Wrong password")
        loginform.reset();
    }
    else{
        loginform.reset();
        alert("Wrong username")
       
    }
}