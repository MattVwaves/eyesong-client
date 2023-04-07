import { useState } from 'react';
import { useNavigate } from 'react-router';
import Eye from './Eye';
import YourScores from './YourScores';

export default function Dashboard() {
  const [displayScores, setDisplayScores] = useState(false);

  const Navi = useNavigate();

  const handleClick = async (e) => {
    if (e.target.innerHTML === 'YOUR SCORES') setDisplayScores(true);
    if (e.target.innerHTML === 'X') setDisplayScores(false);
    if (e.target.innerHTML === 'PLAY') Navi('/quiz');
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
          <h2 id="login">LEADERBOARD</h2>
          {displayScores && <YourScores handleClick={handleClick} />}
        </div>

        <div className="title-container">
          <h1>EYESONG</h1>
        </div>
      </div>
    </>
  );
}
