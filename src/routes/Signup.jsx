import React from 'react';

const Signup = () => {
  // I started the signup logic here
  // I need to review the video from to 6.39 to 13.30
  // I need to translate the Vanilla code to React
  const API_URL = 'http://localhost:3000/users/tokens';
  let access_token;
  const refresh_token = localStorage.getItem('refresh_token');
  let resource_owner;

  return (
    <section id="login">
      <div className="login--container">
        <main>
          <form id="sign_up_form">
            <header>
              <h2 className="text-center fs-2 text-secondary">Sign up</h2>
            </header>
            <div className="mb-3">
              <label htmlFor="name">
                <input type="text" id="sign_up_email" placeholder="Email" className="form-control" />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="name">
                <input type="password" id="sign_up_password" placeholder="Password" className="form-control" />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="name">
                <input type="password" id="sign_up_password_confirm" placeholder="Confirm password" className="form-control" />
              </label>
            </div>
            <div className="d-grid mt-5">
              <input
                type="submit"
                value="Submit"
                className="btn btn-success btn-radius"
              />
            </div>
          </form>
        </main>
      </div>
    </section>
  );
};

export default Signup;
