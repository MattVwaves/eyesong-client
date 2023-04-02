import { useState } from 'react';
import Eye from './Eye';
import Login from './Login';
import Register from './Register';

export default function HomePage() {
  const [displayLogin, setDisplayLogin] = useState(true);
  const [displayRegister, setDisplayRegister] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);
  const [token, setToken] = useState('');
  const [loggedInUser, setLoggedInUser] = useState('');
  return (
    <>
      <div className="App">
        <div className="circle-container">
          <Eye />
        </div>
        {displayLogin && (
          <Login
            setDisplayLogin={setDisplayLogin}
            setDisplayRegister={setDisplayRegister}
            regSuccess={regSuccess}
            setRegSuccess={setRegSuccess}
            setToken={setToken}
            setLoggedInUser={setLoggedInUser}
          />
        )}
        {displayRegister && (
          <Register
            setDisplayLogin={setDisplayLogin}
            setDisplayRegister={setDisplayRegister}
            setRegSuccess={setRegSuccess}
          />
        )}

        <div className="title-container">
          <h1>EYESONG</h1>
        </div>
      </div>
    </>
  );
}
