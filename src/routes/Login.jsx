import React from 'react'

const Login = () => {
  return (
    <>
      <h3>Sign up</h3>
      <form id="sign_up_form">
        <input type="text" id="sign_up_email" placeholder="Email" />
        <input type="password" id="sign_up_password" placeholder="Password" />
        <input type="password" id="sign_up_password_confirm" placeholder="Confirm password" />
        <button type="submit" id="sign_up_button">Submit</button>
      </form>

    </>
  )
}

export default Login
