import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Vinyl from './Vinyl';

export default function Decades() {
  const [songNumber, setSongNumber] = useState(1);

  const Navi = useNavigate();
  const handleDecadeSelection = (e) => {
    const decade = e.target.name;
    localStorage.setItem('decade', decade);
    Navi('/quiz');
  };

  useEffect(() => {
    const storedSongNumber = Number(localStorage.getItem('song-number'));
    if (storedSongNumber) setSongNumber(storedSongNumber);
  });

  return (
    <>
      <div className="App">
        <Vinyl songNumber={songNumber} />
        <div className="circle-container">{/* <Eye /> */}</div>
        <div className="login-container" id="decades"></div>

        <div className="login-container-text" id="decades">
          <h2 id="decades-title">choose decade</h2>
          <div className="decades-container">
            <img
              className="decade-image"
              onClick={handleDecadeSelection}
              name="1940s"
              id="billie"
              src={require('../Assets/billie-h.webp')}
              alt="billie "
            />
            <img
              className="decade-image"
              onClick={handleDecadeSelection}
              id="elvis"
              name="1950s"
              src={require('../Assets/elvis.jpeg')}
              alt="elvis presley"
            />
            <img
              className="decade-image"
              onClick={handleDecadeSelection}
              id="jimi"
              name="1960s"
              src={require('../Assets/hendrix.jpeg')}
              alt="jimi hendrix"
            />
            <img
              className="decade-image"
              onClick={handleDecadeSelection}
              id="pink"
              name="1970s"
              src={require('../Assets/thewall.jpeg')}
              alt="the wall"
            />
            <img
              className="decade-image"
              onClick={handleDecadeSelection}
              id="prince"
              name="1980s"
              src={require('../Assets/prince.webp')}
              alt="prince"
            />
            <img
              className="decade-image"
              onClick={handleDecadeSelection}
              id="kurt"
              name="1990s"
              src={require('../Assets/kurt2.webp')}
              alt="kurt"
            />
            <img
              className="decade-image"
              onClick={handleDecadeSelection}
              id="amy"
              name="2000s"
              src={require('../Assets/amy.jpeg')}
              alt="amy"
            />
            <img
              className="decade-image"
              onClick={handleDecadeSelection}
              id="lana"
              name="2010s"
              src={require('../Assets/lana.jpeg')}
              alt="lana"
            />
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
        <div className="title-container">
          <h1>EYESONG</h1>
        </div>
      </div>
    </>
  );
}
