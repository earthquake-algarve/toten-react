import React from 'react'
import './signup.css'


export default function SignUp() {

    return (
        <>
            <div className='signup-container'>
                <div className="signup-title">Sign up</div>

                <div className='signup-logo'>
                    <img src="img/logoEnterTours.jfif" alt='logo'></img>
                </div>

                <div className='signup-data'>
                    <form>
                        <label htmlFor="name-input">Name</label>
                        <input type="text" name="name" className='name-input' id="name-input"/>

                        <label htmlFor="nationality-input">Nationality</label>
                        <input type="text" name="nationality" className='nationality-input' id="nationality-input"/>

                        <label htmlFor="email-input">E-mail</label>
                        <input type="text" name="email" id="email-input " placeholder="example@example.com" className='email-input'/>

                        <label htmlFor="password-input">Password</label>
                        <input type="password" name="password" className='password-input' id="password-input"/>
                        

                        <div className="button-div">
                            <input type="submit"  value="Sign up" className='button-submit'/>
                        </div>                        
                    </form>
                </div>

                <div className='signup-redirect'>
                    Already registered? <a href='/login'>Login</a>
                </div>

            </div>
        </>
    )
}
