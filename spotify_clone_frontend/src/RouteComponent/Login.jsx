import { Icon } from '@iconify/react';
function Login(){
    return(
        <>
            <div className="outerDivLogin">
                <div className="loginBox">
                    <Icon icon="logos:spotify" width="10rem" height="7rem" />
                    <h1>Login To Spotify</h1>
                {/* <Icon icon={spotifyIcon} width="1rem" height="1rem" /> */}
                    <div className='loginField'>
                        <p>Email or username</p>
                        <input type='text' className='emailInput' placeholder='Email or username'></input>
                        <p>Password</p>
                        <input type='password' className='passwordInput' placeholder='Password'></input>
                        {/* <Icon icon="el:eye-close" width="1rem" height="1rem" /> */}
                    </div>
                    <div className='loginButtonDiv'>
                        <button className='loginButton'><p>Login In</p></button>
                    </div>
                    <div className='forgotPassword'>
                        <p>Forgot your password?</p>
                    </div>
                    <hr></hr>
                    <div className='register'>
                        <p>Dont have an account? sign up for Spotify</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login


