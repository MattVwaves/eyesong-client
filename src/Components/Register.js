import { useState } from 'react';

export default function Register({
  setDisplayLogin,
  setDisplayRegister,
  setRegSuccess,
}) {
  const apiUrl = process.env.REACT_APP_SERVER_URL;

  const [regError, setRegError] = useState(null);
  const [user, setUser] = useState({
    username: '',
    password: '',
    starSign: '',
    favouriteAnimal: '',
  });

  const handleDisplayLogin = () => {
    setDisplayLogin(true);
    setDisplayRegister(false);
  };

  const handleChange = (e) => {
    setRegError(null);
    const input = e.target.placeholder;
    const value = e.target.value;
    if (input === 'username') setUser({ ...user, username: value });
    if (input === 'password') setUser({ ...user, password: value });
    if (input === 'star sign') setUser({ ...user, starSign: value });
    if (input === 'favourite animal')
      setUser({ ...user, favouriteAnimal: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const opts = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
        starSign: user.starSign,
        favouriteAnimal: user.favouriteAnimal,
      }),
    };

    await fetch(`${apiUrl}/user/register`, opts)
      .then((res) => {
        if (res.ok !== true) {
          throw Error(`The username ${user.username} is already taken!`);
        }
        return res.json();
      })
      .then((data) => {
        setDisplayRegister(false);
        setDisplayLogin(true);
        setRegSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        return setRegError(err.message);
      });
  };

  return (
    <>
      <div className="login-container" id="register-container"></div>
      <div className="login-container-text" id="register-container">
        {regError && <p id="error">{regError}</p>}
        <h2 id="login">REGISTER</h2>
        <form onSubmit={handleSubmit}>
          <label className="required">username</label>
          <input
            className="required"
            id="login-input"
            placeholder="username"
            value={user.username}
            onChange={handleChange}
            required
          ></input>
          <label className="required">password</label>

          <input
            required
            id="login-input"
            placeholder="password"
            value={user.password}
            onChange={handleChange}
          ></input>
          <input
            id="login-input"
            placeholder="star sign"
            value={user.starSign}
            onChange={handleChange}
          ></input>
          <input
            id="login-input"
            placeholder="favourite animal"
            value={user.favouriteAnimal}
            onChange={handleChange}
          ></input>
          <div className="button-container">
            <button type="submit">
              <h2>Submit</h2>
            </button>
          </div>
        </form>
        <h2 id="login-register" onClick={handleDisplayLogin}>
          {' '}
          Login
        </h2>
      </div>
    </>
  );
}
