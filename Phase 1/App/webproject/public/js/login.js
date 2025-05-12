let user=[];
Users();
const loginform = document.querySelector('#login-form');
loginform.addEventListener('submit',check);

async function Users() {
    const response = await fetch("/public/json/usernames.json");
    user = await response.json();
}
function check(e){
    e.preventDefault();
    const data = new FormData(loginform);
    const info = Object.fromEntries(data);
    const current= user.find(e=> e.username == info.username);

    if (current){
        
        if (current.password == info.password)
        switch(current.type){
        case "student":
            localStorage.loggedStudent=current.username;
            window.location.href = "search_register.html";
            break;
        case "admin":
            localStorage.loggedAdmin=current.username;
            window.location.href = "validatecourses.html";
            break;
        case "instructor":
            localStorage.loggedInstructor=current.username;
            window.location.href = "current.html";
            break;
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