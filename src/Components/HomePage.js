import { useState } from 'react';
import Eye from './Eye';
import Login from './Login';
import Register from './Register';

export default function HomePage() {
  const [displayLogin, setDisplayLogin] = useState(true);
  const [displayRegister, setDisplayRegister] = useState(false);
  return (
    <>
      <div className="circle-container">
        <Eye />
      </div>
      {displayLogin && (
        <Login
          setDisplayLogin={setDisplayLogin}
          setDisplayRegister={setDisplayRegister}
        />
      )}
      {displayRegister && (
        <Register
          setDisplayLogin={setDisplayLogin}
          setDisplayRegister={setDisplayRegister}
        />
      )}

      <div className="title-container">
        <h1>EYESONG</h1>
      </div>
    </>
  );
}
