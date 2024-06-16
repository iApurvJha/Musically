import { Icon } from '@iconify/react';
import { Link,Navigate } from 'react-router-dom';
import {useCookies} from 'react-cookie'
import { useState } from 'react';
import {unAuthenticatedPostRequest} from "../Utils/routeHelper.jsx"
function Login(){
    const [cookie,setCookie]=useCookies(["token"])
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    function updateEmail(e){
        setEmail(e.target.value)
        console.log(email)
    }

    function updatePassword(e){
        setPassword(e.target.value)
        console.log(password)
    }

    async function logIn(){
        const data = {email,password}
        const user = await unAuthenticatedPostRequest("/auth/login",data)
        if(user && !user.error){
            const token = user.token
            const date = new Date()
            date.setFullYear(date.getFullYear()+1)
            setCookie("token",token,{path:"/" ,expires:date,sameSite: "Strict" }) //send the date object not the real date
            alert("succes")
            navigate("/")
        }
        else{
            console.log(user)
            alert(`${user.error}`)
        }
    }
    return(
        <>
            <div className="outerDivLogin">
                <div className="loginBox">
                    <Icon icon="logos:spotify" width="10rem" height="7rem" />
                    <h1>Login To Spotify</h1>
                {/* <Icon icon={spotifyIcon} width="1rem" height="1rem" /> */}
                    <div className='loginField'>
                    {/* or username */}
                        <p>Email </p>
                        <input type='text' className='emailInput' placeholder='Email or username' required value={email} onChange={updateEmail}></input>
                        <p>Password</p>
                        <input type='password' className='passwordInput' placeholder='Password' required value={password} onChange={updatePassword}></input>
                        {/* <Icon icon="el:eye-close" width="1rem" height="1rem" /> */}
                    </div>
                    <div className='loginButtonDiv' onClick={logIn}>
                        <button className='loginButton'><p>Login In</p></button>
                    </div>
                    <div className='forgotPassword'>
                        <p>Forgot your password?</p>
                    </div>
                    <hr></hr>
                    <div >
                        <Link className='register' to="/signup"><p>Dont have an account? sign up for Spotify</p></Link>
                    </div>
                        
                </div>
            </div>
        </>
    )
}

export default Login


