import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import './Login.scss';

const LogIn = () => {
  const [userName, setUserName] = useState('');
  const passWord = ''
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: userName,
    };
    dispatch(submitLoginForm(user));
    setUserName('');
    navigate('/');
  };

  return (
    <section id="login">
      <div className="login--container">
        <header>
          <h2 className="text-center fs-2 text-secondary">Login</h2>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-control"
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={passWord}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-control"
                />
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
          <div className="text-center mt-5">
            <div>
              <Link to="/signup" className="text-muted">
                Signup
              </Link>
            </div>           
          </div>
        </main>
      </div>
    </section>
  );
};

export default LogIn;
