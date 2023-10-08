import React from 'react';

const Signup = () => (
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

export default Signup;
