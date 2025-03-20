let user=[];
Users();
const loginform = document.querySelector('#login-form');
loginform.addEventListener('submit',check);
export let studentID;
async function Users() {
    const response = await fetch("/json/usernames.json");
    user = await response.json();
}
function check(e){
    e.preventDefault();
    const data = new FormData(loginform);
    const info = Object.fromEntries(data);
    const current= user.find(e=> e.username == info.username);
    studentID=current.username;
    if (current){
        if (current.password == info.password)
            
            window.location.href = "search_register.html";
            
        else
        alert("Wrong password")
        loginform.reset();
    }
    else{
        alert("Wrong username")
        loginform.reset();
    }
}