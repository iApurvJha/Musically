import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
function Signup(){
    return(
        <>
            <div className="outerDivSignUp">
                <div className="signUpBox">
                    <Icon icon="logos:spotify" width="10rem" height="7rem" />
                    <h1>Sign up to start listening</h1>
                {/* <Icon icon={spotifyIcon} width="1rem" height="1rem" /> */}
                    <div className='loginField'>
                        <p>Email address</p>
                        <input type='text' className='emailInput' placeholder='Email or username'></input>
                        <p>first Name</p>
                        <input type='text' className='emailInput firstName' placeholder='Enter your first name'></input>
                        <p>Last Name</p>
                        <input type='text' className='emailInput lastName' placeholder='Enter your last name'></input>
                        <p>User Name</p>
                        <input type='text' className='emailInput userName' placeholder='Enter your user name'></input>
                        <p>Password</p>
                        <input type='password' className='passwordInput' placeholder='Password'></input>
                        {/* <Icon icon="el:eye-close" width="1rem" height="1rem" /> */}
                    </div>
                    <div className='loginButtonDiv'>
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


