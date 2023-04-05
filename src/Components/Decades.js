import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Decades() {
  const Navi = useNavigate();
  const handleDecadeSelection = (e) => {
    const decade = e.target.name;
    localStorage.setItem('decade', decade);
    Navi('/quiz');
  };
  return (
    <>
      <div className="App">
        <div className="vinyl-container">
          <h3>Songs remaining</h3>
          <img id="vinyl" src={require('../Assets/vinyl2.png')}></img>
          <img id="vinyl" src={require('../Assets/vinyl2.png')}></img>
          <img id="vinyl" src={require('../Assets/vinyl2.png')}></img>
          <img id="vinyl" src={require('../Assets/vinyl2.png')}></img>
          <img id="vinyl" src={require('../Assets/vinyl2.png')}></img>
        </div>
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
              src={require('../Assets/elvis.jpeg')}
              alt="elvis presley"
            />
            <img
              className="decade-image"
              onClick={handleDecadeSelection}
              id="jimi"
              src={require('../Assets/hendrix.jpeg')}
              alt="jimi hendrix"
            />
            <img
              className="decade-image"
              onClick={handleDecadeSelection}
              id="pink"
              src={require('../Assets/thewall.jpeg')}
              alt="the wall"
            />
            <img
              className="decade-image"
              onClick={handleDecadeSelection}
              id="prince"
              src={require('../Assets/prince.webp')}
              alt="prince"
            />
            <img
              className="decade-image"
              onClick={handleDecadeSelection}
              id="kurt"
              src={require('../Assets/kurt2.webp')}
              alt="kurt"
            />
            <img
              className="decade-image"
              onClick={handleDecadeSelection}
              id="amy"
              src={require('../Assets/amy.jpeg')}
              alt="amy"
            />
            <img
              className="decade-image"
              onClick={handleDecadeSelection}
              id="lana"
              src={require('../Assets/lana.jpeg')}
              alt="lana"
            />
            <img
              className="decade-image"
              onClick={handleDecadeSelection}
              id="abel"
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
