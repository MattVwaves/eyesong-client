import { useState } from 'react';
import { useNavigate } from 'react-router';
import Eye from './Eye';
import YourScores from './YourScores';

export default function Dashboard() {
  const [displayScores, setDisplayScores] = useState(false);
  const [displayLeaderboard, setDisplayLeaderboard] = useState(false);

  const Navi = useNavigate();

  const handleClick = async (e) => {
    if (e.target.innerHTML === 'YOUR SCORES') setDisplayScores(true);
    if (e.target.innerHTML === 'LEADERBOARD') setDisplayLeaderboard(true);
    if (e.target.innerHTML === 'X') setDisplayLeaderboard(false);
    if (e.target.innerHTML === 'X') setDisplayScores(false);
    if (e.target.innerHTML === 'PLAY') Navi('/decades');
    if (e.target.innerHTML === 'Logout') {
      localStorage.setItem('token', null);
      Navi('/');
    }
  };

  return (
    <>
      <div className="App">
        <div className="circle-container">
          <Eye />
        </div>
        <div id="dashboard-nav" className="login-container"></div>
        <div id="dashboard-nav" className="login-container-text">
          <h2 id="login" className="dash-play" onClick={handleClick}>
            PLAY
          </h2>
          <h2 id="login" onClick={handleClick}>
            YOUR SCORES
          </h2>
          {displayLeaderboard && (
            <>
              <h2 id="leader-msg">COMING SOON!!!</h2>
              <span id="close-window" onClick={handleClick}>
                X
              </span>
            </>
          )}

          <h2 id="login" onClick={handleClick}>
            LEADERBOARD
          </h2>
          <h2 id="login" onClick={handleClick}>
            Logout
          </h2>

          {displayScores && <YourScores handleClick={handleClick} />}
        </div>

        {/* <div className="title-container">
          <h1>EYESONG</h1>
        </div> */}
      </div>
    </>
  );
}
