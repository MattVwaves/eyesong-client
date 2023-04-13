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
  const [animation, setAnimation] = useState(0);
  return (
    <>
      <div className="App">
        <div className="circle-container">
          <Eye animation={animation} />
        </div>
        {displayLogin && (
          <Login
            setDisplayLogin={setDisplayLogin}
            setDisplayRegister={setDisplayRegister}
            regSuccess={regSuccess}
            setRegSuccess={setRegSuccess}
            setToken={setToken}
            setLoggedInUser={setLoggedInUser}
            setAnimation={setAnimation}
          />
        )}
        {displayRegister && (
          <Register
            setDisplayLogin={setDisplayLogin}
            setDisplayRegister={setDisplayRegister}
            setRegSuccess={setRegSuccess}
            setAnimation={setAnimation}
          />
        )}

        <div className="title-container">
          <h1>EYESONG</h1>
        </div>
      </div>
    </>
  );
}
