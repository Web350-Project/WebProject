'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation';
export async function ServerLogin(formData) {
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