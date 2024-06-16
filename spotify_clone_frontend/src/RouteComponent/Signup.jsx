import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';
import {unAuthenticatedPostRequest} from "../Utils/routeHelper.jsx"
function Signup(){
    const [email,setEmail]=useState("")
    const [firstName,setfirstName]=useState("")
    const [username,setusername]=useState("")
    const [lastName,setLastName]=useState("")
    const [password,setPassword]=useState("")
    
    const navigate = useNavigate()

    function updateEmail(e){
        setEmail(e.target.value)
        console.log(email)
    }
    function updateFirstName(e){
        setfirstName(e.target.value)
        console.log(firstName)
    }
    function updateLastName(e){
        setLastName(e.target.value)
        console.log(lastName)
    }
    function updateusername(e){
        setusername(e.target.value)
        console.log(username)
    }
    function updatePassword(e){
        setPassword(e.target.value)
        console.log(password)
    }

    async function register(){
        // const data = {firstName,lastName,username,password,email}
        const data = {email,password,firstName,lastName,username}
        console.log(data)
        const user = await unAuthenticatedPostRequest("/auth/register",data)
        if(user && !user.error){
            // const token = user.token
            // const date = new Date()
            // date.setFullYear(date.getFullYear()+1)
            // setCookie("token",token,{path:"/" ,expires:date,sameSite: "Strict" }) //send the date object not the real date
            alert("succes")
            navigate("/login")
        }
        else{
            console.log(user)
            alert(`${user.error}`)
        }
    }

    return(
        <>
            <div className="outerDivSignUp">
                <div className="signUpBox">
                    <Icon icon="logos:spotify" width="10rem" height="7rem" />
                    <h1>Sign up to start listening</h1>
                {/* <Icon icon={spotifyIcon} width="1rem" height="1rem" /> */}
                    <div className='loginField'>
                        <p>Email address</p>
                        <input type='text' required className='emailInput firstName' placeholder='Enter your first name' value={email} onChange={updateEmail} ></input>
                        <p>first Name</p>
                        <input type='text' required className='emailInput firstName' placeholder='Enter your first name' value={firstName} onChange={updateFirstName} ></input>
                        <p>Last Name</p>
                        <input type='text' required className='emailInput lastName' placeholder='Enter your last name' value={lastName} onChange={updateLastName} ></input>
                        <p>User Name</p>
                        <input type='text' required className='emailInput username' placeholder='Enter your user name'  value={username} onChange={updateusername}></input>
                        <p>Password</p>
                        <input type='password' required className='passwordInput' placeholder='Password' value={password} onChange={updatePassword}></input>
                        {/* <Icon icon="el:eye-close" width="1rem" height="1rem" /> */}
                    </div>
                    <div className='loginButtonDiv' onClick={register}>
                        <button className='loginButton'><p> Sign Up</p></button>
                    </div>
                    {/* <div className='forgotPassword'>
                        <p>Forgot your password?</p>
                    </div> */}
                    <hr className='registerHr'></hr>
                    <div>
                        <Link className='loginLink' to="/login"><p>Already have an account? Log in here</p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup


