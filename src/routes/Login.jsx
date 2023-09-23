import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <>
      <form id="login_form">
        <h3>Login</h3>
        <input type="text" id="login_email" placeholder="Email" />
        <input type="password" id="login_password" placeholder="Password" />      
        <button type="submit" id="login_button">Submit</button>
      </form>
    </>    
       
  )
}

export default Login
