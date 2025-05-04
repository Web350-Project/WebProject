'use client'
import React from 'react'
import { ServerLogin } from '../actions/serveractions.js'
export default function loginPage() {
  return (
    <div id='All'>
    <img src="/html/imgs/logo1.png" alt="Qu logo" id="qulogo"/>
    <div className="login-class">
        <h2 id="h2login">
            Login
        </h2>
        <form action="" id="login-form" onSubmit={ServerLogin(e.target.value)} >
          
            <div className="input-class">
           
            <input type="username" required id="username" name="username"/>
            <span className="icon"><ion-icon name="Person"></ion-icon></span>
            <label>
                Username
            </label>
        </div>
            <div className="input-class">
                
                <input type="password" required name="password" id="password"/>
                <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <label>
                    Password
                </label>
            </div>
            <button type="submit" id="loginid" className='buttons'>Login</button>
        </form>
    </div>
<script src="/js/login.js" type="module"></script>
    </div>
  )
}
