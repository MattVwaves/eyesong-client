import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({
  setDisplayLogin,
  setDisplayRegister,
  regSuccess,
  setRegSuccess,
  setToken,
  setLoggedInUser,
}) {
  const apiUrl = process.env.REACT_APP_SERVER_URL;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const Navi = useNavigate();

  const handleDisplayRegister = () => {
    setDisplayLogin(false);
    setDisplayRegister(true);
    setRegSuccess(false);
  };

  const handleChange = (e) => {
    setLoginError(false);
    setRegSuccess(false);
    const input = e.target.placeholder;
    const value = e.target.value;
    if (input === 'username') setUsername(value);
    if (input === 'password') setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const opts = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };
    await fetch(`${apiUrl}/user/login`, opts)
      .then((res) => {
        if (res.ok !== true) {
          throw Error('username or password incorrect. Remember thyself.');
        }
        return res.json();
      })
      .then((data) => {
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('loggedInUser', data.user);
        setToken(localStorage.token);
        setLoggedInUser(data.user);
        Navi('/decades');
      })
      .catch((err) => {
        setLoginError(err.message);
        return setLoginError(err.message);
      });
  };

  return (
    <>
      <div className="login-container"></div>
      <div className="login-container-text">
        {loginError && (
          <p id="error">username or password incorrect. Remember thyself.</p>
        )}
        {regSuccess && (
          <p id="error">Registration successful! Please login...</p>
        )}
        <h2 id="login">LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <input
            id="login-input"
            placeholder="username"
            required
            onChange={handleChange}
            value={username}
          ></input>
          <input
            id="login-input"
            placeholder="password"
            required
            onChange={handleChange}
            value={password}
          ></input>
          <div className="button-container">
            <button type="submit">
              <h2>Submit</h2>
            </button>
          </div>
        </form>
        <h2 id="login-register" onClick={handleDisplayRegister}>
          {' '}
          Register
        </h2>
      </div>
    </>
  );
}
