export default function Login({
  setDisplayLogin,
  setDisplayRegister,
  regSuccess,
}) {
  const handleDisplayRegister = () => {
    setDisplayLogin(false);
    setDisplayRegister(true);
  };
  return (
    <>
      <div className="login-container"></div>
      <div className="login-container-text">
        {regSuccess && (
          <p id="error">Registration successful! Please login...</p>
        )}
        <h2 id="login">LOGIN</h2>
        <form>
          <input id="login-input" placeholder="username"></input>
          <input id="login-input" placeholder="password"></input>
          <h2 id="login-submit">Submit</h2>
        </form>
        <h2 id="login-register" onClick={handleDisplayRegister}>
          {' '}
          Register
        </h2>
      </div>
    </>
  );
}
