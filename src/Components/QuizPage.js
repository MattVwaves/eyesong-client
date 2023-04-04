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
  const [songTitle, setSongTitle] = useState('');
  const [artistName, setArtistName] = useState('');
  const [songPlaying, setSongPlaying] = useState(false);
  const [playSongFirst, setPlaySongFirst] = useState(false);

  const decadeTag = localStorage.getItem('decade');
  const lastFmApiKey = process.env.REACT_APP_LAST_FM_API_KEY;
  const lastFmBaseUrl =
    'http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=';
  const youtubeApiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const youtubeBaseUrl = 'https://youtube.googleapis.com/youtube/v3/search?q=';

  const createRandomSong = () => {
    return Math.floor(Math.random() * 100);
  };

  useEffect(() => {
    setArtistName(localStorage.getItem('artist-name'));
    setSongTitle(localStorage.getItem('song-name'));
    console.log(artistName);
    console.log(songTitle);
    // fetch(
    //   `${lastFmBaseUrl}${decadeTag}&limit=200&api_key=${lastFmApiKey}&format=json`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const songs = data.tracks.track;
    //     const randomSong = songs[createRandomSong()];
    //     const artistName = randomSong.artist.name;
    //     const songTitle = randomSong.name;
    //     setArtistName(artistName);
    //     setSongTitle(songTitle);
    //     localStorage.setItem('artist-name', artistName);
    //     localStorage.setItem('song-name', songTitle);
    //     const artistArr = artistName.split(' ');
    //     const songArr = songTitle.split(' ');
    //     let artistQuery = '';
    //     let songQuery = '';
    //     artistArr.forEach((word) => (artistQuery += `${word}%20`));
    //     songArr.forEach((word) => (songQuery += `${word}%20`));
    //     const youtubeQuery = artistQuery + songQuery;
    //     fetch(`${youtubeBaseUrl}${youtubeQuery})single&key=${youtubeApiKey}`)
    //       .then((res) => res.json())
    //       .then((data) => {
    //         const videoId = data.items[0].id.videoId;
    //         localStorage.setItem('video-id', videoId);
    //       });
    //   });
  }, []);

  const handleReady = (e) => {
    const playVideo = e.target;
    setPlayVideo(playVideo.clearVideo());
    setPlayVideo(playVideo);
  };

  const handlePlay = () => {
    setPlaySongFirst(false);
    setSongPlaying(!songPlaying);
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
              videoId={localStorage.getItem('video-id')}
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
            artistName={artistName}
            songTitle={songTitle}
            setArtistName={setArtistName}
            setSongTitle={setSongTitle}
            songPlaying={songPlaying}
            setSongPlaying={setSongPlaying}
            playSongFirst={playSongFirst}
            setPlaySongFirst={setPlaySongFirst}
          />
        </div>
      </div>
    </>
  );
}
