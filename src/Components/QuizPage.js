import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

import Hearts from './Hearts';
import Eye from './Eye';
import QuizForm from './QuizForm';

const opts = {
  height: '177',
  width: '175',
  playerVars: {
    autoplay: 0,
    modestbranding: 1,
  },
};

export default function QuizPage() {
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [round, setRound] = useState(0);
  const [roundDisplay, setRoundDisplay] = useState(1);
  const [playVideo, setPlayVideo] = useState(undefined);
  const [animation, setAnimation] = useState(0);

  const decadeTag = localStorage.getItem('decade');
  const lastFmApiKey = process.env.REACT_APP_LAST_FM_API_KEY;
  const baseUrl =
    'http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=';

  const createRandomTrack = () => {
    return Math.floor(Math.random() * 100);
  };

  useEffect(() => {
    fetch(
      `${baseUrl}${decadeTag}&limit=200&api_key=${lastFmApiKey}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        const tracks = data.tracks.track;
        const randomTrack = tracks[createRandomTrack()];
        const artistName = randomTrack.artist.name;
        const trackName = randomTrack.name;
        const artistArr = artistName.split(' ');
        const trackArr = trackName.split(' ');
        let artistQuery = '';
        let trackQuery = '';
        artistArr.forEach((word) => (artistQuery += `${word}%20`));
        trackArr.forEach((word) => (trackQuery += `${word}%20`));
        const youtubeQuery = artistQuery + trackQuery;
      });
  }, []);

  const handleReady = (e) => {
    const playVideo = e.target;
    setPlayVideo(playVideo.clearVideo());
    setPlayVideo(playVideo);
  };

  const handlePlay = () => {
    playVideo.seekTo(0);
    if (round === 0) {
      playVideo.playVideo();
      const pauseVideo = () => {
        playVideo.pauseVideo();
      };
      setTimeout(pauseVideo, 5000);
      setRound(round + 1);
    }
    if (round === 2) {
      playVideo.playVideo();
      const pauseVideo = () => {
        playVideo.pauseVideo();
      };
      setTimeout(pauseVideo, 20000);
      setRound(round + 1);
    }
    if (round === 4) {
      playVideo.playVideo();
      setAnimation(1);
      setRound(round + 1);
    }
  };

  return (
    <>
      <div className="App">
        <div className="main-container">
          <div className="title-container-l">
            <Hearts hearts={hearts} />
            <h1>EYESONG</h1>
          </div>

          <div className="circle-container">
            <YouTube
              videoId={'AmOgpoCKYoM'}
              opts={opts}
              // onPlay={(e) => setPlayVideo(e)}
              onReady={handleReady}
            />
            <Eye animation={animation} setAnimation={setAnimation} />
          </div>
          <div id="container-r">
            <h2 id="points-available">
              Round: <span id="points">{roundDisplay}</span>
            </h2>
          </div>
        </div>
        <div className="play-container">
          {round % 2 === 0 && (
            <img
              src={require('../play01.png')}
              id="play"
              onClick={handlePlay}
              alt="play"
            />
          )}
        </div>

        <div className="form-container">
          <QuizForm
            score={score}
            setScore={setScore}
            hearts={hearts}
            setHearts={setHearts}
            round={round}
            setRound={setRound}
            roundDisplay={roundDisplay}
            setRoundDisplay={setRoundDisplay}
          />
        </div>
      </div>
    </>
  );
}
