import React from 'react'

const Signup = () => {
  return (
    <form id="sign_up_form">
      <h3>Sign up</h3>
      <input type="text" id="sign_up_email" placeholder="Email" />
      <input type="password" id="sign_up_password" placeholder="Password" />
      <input type="password" id="sign_up_password_confirm" placeholder="Confirm password" />
      <button type="submit" id="sign_up_button">Submit</button>
    </form>
  )
}

export default Signup