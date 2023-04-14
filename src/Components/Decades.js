import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Vinyl from './Vinyl';

export default function Decades({
  correct,
  incorrect,
  setCorrect,
  setIncorrect,
}) {
  const [songNumber, setSongNumber] = useState(1);
  const [finalScore, setFinalScore] = useState(null);

  const Navi = useNavigate();
  const handleDecadeSelection = (e) => {
    const decade = e.target.name;
    localStorage.setItem('decade', decade);
    setCorrect(false);
    setIncorrect(false);
    Navi('/quiz');
  };

  useEffect(() => {
    const storedSongNumber = Number(localStorage.getItem('song-number'));
    if (storedSongNumber) setSongNumber(storedSongNumber);
    const finalScore = Number(localStorage.getItem('final-score'));
    if (finalScore) setFinalScore(finalScore);
  });

  useEffect(() => {
    const resetDecades = () => {
      setCorrect(false);
      setIncorrect(false);
    };
    setTimeout(resetDecades, 5000);
  });

  const handleClick = (e) => {
    if (e.target.innerHTML === 'Dashboard') Navi('/dashboard');
    if (e.target.innerHTML === 'Logout') {
      localStorage.setItem('token', null);
      Navi('/');
    }
  };

  return (
    <>
      <div className="App">
        <div className="nav-container">
          <h3 className="decades-nav" onClick={handleClick}>
            Dashboard
          </h3>
          <h3 className="decades-nav" onClick={handleClick}>
            Logout
          </h3>
        </div>
        <Vinyl songNumber={songNumber} />
        <div className="circle-container">{/* <Eye /> */}</div>
        <div className="login-container" id="decades"></div>

        <div className="login-container-text" id="decades">
          <h2 id="decades-title">choose decade</h2>

          <div className="decades-container">
            {correct && (
              <div id="correct-score-container">
                <div id="correct-score-inner-container"></div>
              </div>
            )}
            <div>
              {correct && <p id="error">CORRECT</p>}
              <img
                className="decade-image"
                onClick={handleDecadeSelection}
                name="1940s"
                id="billie"
                src={require('../Assets/billie-h.webp')}
                alt="billie "
              />
            </div>
            <div>
              {correct && <p id="error">CORRECT</p>}
              <img
                className="decade-image"
                onClick={handleDecadeSelection}
                id="elvis"
                name="1950s"
                src={require('../Assets/elvis.jpeg')}
                alt="elvis presley"
              />
            </div>
            <div>
              {correct && <p id="error">CORRECT</p>}
              <img
                className="decade-image"
                onClick={handleDecadeSelection}
                id="jimi"
                name="1960s"
                src={require('../Assets/hendrix.jpeg')}
                alt="jimi hendrix"
              />
            </div>
            <div>
              {correct && <p id="error">CORRECT</p>}
              <img
                className="decade-image"
                onClick={handleDecadeSelection}
                id="pink"
                name="1970s"
                src={require('../Assets/thewall.jpeg')}
                alt="the wall"
              />
            </div>
            <div>
              <div>
                {correct && (
                  <p id="points-scored">{`YOU SCORED ${finalScore} points!!`}</p>
                )}
                {incorrect && <p id="points-scored">You got nothing kid</p>}
                {!correct && !incorrect && (
                  <img
                    className="decade-image"
                    onClick={handleDecadeSelection}
                    id="prince"
                    name="1980s"
                    src={require('../Assets/prince.webp')}
                    alt="prince"
                  />
                )}
              </div>
            </div>
            <div>
              {correct && <p id="error">CORRECT</p>}
              <img
                className="decade-image"
                onClick={handleDecadeSelection}
                id="kurt"
                name="1990s"
                src={require('../Assets/kurt2.webp')}
                alt="kurt"
              />
            </div>
            <div>
              {correct && <p id="error">CORRECT</p>}
              <img
                className="decade-image"
                onClick={handleDecadeSelection}
                id="amy"
                name="2000s"
                src={require('../Assets/amy.jpeg')}
                alt="amy"
              />
            </div>
            <div>
              {correct && <p id="error">CORRECT</p>}
              <img
                className="decade-image"
                onClick={handleDecadeSelection}
                id="lana"
                name="2010s"
                src={require('../Assets/lana.jpeg')}
                alt="lana"
              />
            </div>
            <div>
              {correct && <p id="error">CORRECT</p>}
              <img
                className="decade-image"
                onClick={handleDecadeSelection}
                id="abel"
                name="2020s"
                src={require('../Assets/abel.jpeg')}
                alt="abel"
              />
            </div>
          </div>
        </div>
        <div className="title-container">
          <h1>EYESONG</h1>
        </div>
      </div>
    </>
  );
}
