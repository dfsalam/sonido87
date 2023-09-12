import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <>
      <form id="sign_up_form">
        <h3>Sign up</h3>
        <input type="text" id="sign_up_email" placeholder="Email" />
        <input type="password" id="sign_up_password" placeholder="Password" />
        <input type="password" id="sign_up_password_confirm" placeholder="Confirm password" />
        <button type="submit" id="sign_up_button">Submit</button>
      </form>

      <form id="login_form">
        <h3>Login</h3>
        <input type="text" id="login_email" placeholder="Email" />
        <input type="password" id="login_password" placeholder="Password" />      
        <button type="submit" id="login_button">Submit</button>
      </form>

      <button type="button" id="logout_button">Logout</button>
    </>    
       
  )
}

export default Login
