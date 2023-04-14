import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_SERVER_URL;

export default function QuizForm({
  hearts,
  setHearts,
  round,
  setRound,
  roundDisplay,
  setRoundDisplay,
  artistName,
  songTitle,
  setArtistName,
  setSongTitle,
  songPlaying,
  setSongPlaying,
  playSongFirst,
  setPlaySongFirst,
  setCorrect,
  setIncorrect,
}) {
  const [guessItemInput, setGuessItemInput] = useState('');
  const [guessItem, setGuessItem] = useState('song');
  const [songOrArtist, setSongOrArtist] = useState('song');
  const [decade, setDecade] = useState(null);
  const [songNumber, setSongNumber] = useState(null);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);
  const [score, setScore] = useState(0);
  const [scoresheetId, setScoresheetId] = useState(null);
  const [videoId, setVideoId] = useState(null);

  const Navi = useNavigate();

  useEffect(() => {
    const storedSongNumber = Number(localStorage.getItem('song-number'));
    if (storedSongNumber) setSongNumber(storedSongNumber);
    if (!songNumber) setSongNumber(1);
    const artistName = localStorage.getItem('artist-name');
    setArtistName(artistName);
    const songTitle = localStorage.getItem('song-name');
    setSongTitle(songTitle);
    const score = Number(localStorage.getItem('score'));
    if (score) setScore(score);
    const token = localStorage.getItem('token');
    setToken(token);
    const userId = Number(localStorage.getItem('user-id'));
    setUserId(userId);
    const scoresheetId = Number(localStorage.getItem('scoresheet-id'));
    setScoresheetId(scoresheetId);
    const decade = localStorage.getItem('decade');
    setDecade(decade);
    const videoId = localStorage.getItem('video-id');
    setVideoId(videoId);
  });

  const handleChange = (e) => {
    setGuessItemInput('');
    const guessItemInput = e.target.value;
    setGuessItemInput(guessItemInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (songPlaying === false) {
      setPlaySongFirst(true);
      return;
    }
    e.preventDefault();
    if (songOrArtist === 'song') {
      if (songTitle.toLowerCase().includes(guessItemInput.toLowerCase())) {
        if (roundDisplay === 1) {
          const updatedScore = score + 40;
          setScore(updatedScore);
          localStorage.setItem('score', updatedScore);
        }
        if (roundDisplay === 2) {
          const updatedScore = score + 20;
          setScore(updatedScore);
          localStorage.setItem('score', updatedScore);
        }
        if (roundDisplay === 3) {
          const updatedScore = score + 10;
          setScore(updatedScore);
          localStorage.setItem('score', updatedScore);
        }
        setGuessItemInput('');
        setGuessItem('artist');
        setSongOrArtist('artist');
        return;
      }
    }

    if (songOrArtist === 'artist') {
      if (artistName.toLowerCase().includes(guessItemInput.toLowerCase())) {
        const updatedScore = score + 15;
        setScore(updatedScore);
        localStorage.setItem('final-score', updatedScore);
        localStorage.setItem('score', updatedScore);
        setGuessItemInput('');

        if (!scoresheetId) {
          const opts = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              id: userId,
              videoId: videoId,
              songNumber: songNumber,
              artistName: artistName,
              songTitle: songTitle,
              decade: decade,
              score: score,
            }),
          };

          fetch(`${apiUrl}/scoresheet`, opts)
            .then((res) => {
              if (res.ok !== true) {
                throw Error('Unauthorized action');
              }
              return res.json();
            })
            .then((data) => {
              localStorage.setItem('scoresheet-id', data.scoreSheet.id);
              localStorage.setItem('song-number', songNumber + 1);
              if (songNumber < 5) {
                localStorage.setItem('score', null);
                setCorrect(true);
                Navi('/decades');
              }
              if (songNumber === 5) {
                localStorage.setItem('song-number', null);
                localStorage.setItem('scoresheet-id', null);
                localStorage.setItem('score', null);
                Navi('/dashboard');
              }
            })
            .catch((err) => {
              console.log(err.message);
            });
          return;
        }
        if (scoresheetId) {
          const opts = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              id: userId,
              videoId: videoId,
              songNumber: songNumber,
              artistName: artistName,
              songTitle: songTitle,
              decade: decade,
              score: score,
            }),
          };

          fetch(`${apiUrl}/scoresheet/${scoresheetId}`, opts)
            .then((res) => {
              if (res.ok !== true) {
                throw Error('Unauthorized action');
              }
              return res.json();
            })
            .then((data) => {
              console.log(data);
              localStorage.setItem('song-number', songNumber + 1);
              if (songNumber < 5) {
                localStorage.setItem('score', null);
                Navi('/decades');
              }
              if (songNumber === 5) {
                localStorage.setItem('song-number', null);
                localStorage.setItem('scoresheet-id', null);
                localStorage.setItem('score', null);
                Navi('/dashboard');
              }
            })
            .catch((err) => {
              console.log(err.message);
            });
          return;
        }
      }
    }
    if (hearts > 1) {
      setHearts(hearts - 1);
      return;
    }
    if (roundDisplay < 3) {
      setGuessItemInput('');
      setHearts(3);
      setRound(round + 1);
      setRoundDisplay(roundDisplay + 1);
      setSongPlaying(false);
      return;
    }

    if (!scoresheetId) {
      const opts = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: userId,
          videoId: videoId,
          songNumber: songNumber,
          artistName: artistName,
          songTitle: songTitle,
          decade: decade,
          score: score,
        }),
      };
      fetch(`${apiUrl}/scoresheet`, opts)
        .then((res) => {
          if (res.ok !== true) {
            throw Error('Unauthorized action');
          }
          return res.json();
        })
        .then((data) => {
          localStorage.setItem('song-number', songNumber + 1);
          if (songNumber < 5) {
            localStorage.setItem('score', null);
            if (score !== 0) setCorrect(true);
            if (score === 0) setIncorrect(true);
            Navi('/decades');
          }
          if (songNumber === 5) {
            localStorage.setItem('song-number', null);
            localStorage.setItem('scoresheet-id', null);
            localStorage.setItem('score', null);
            Navi('/dashboard');
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
      return;
    }
    if (scoresheetId) {
      const opts = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: userId,
          videoId: videoId,
          songNumber: songNumber,
          artistName: artistName,
          songTitle: songTitle,
          decade: decade,
          score: score,
        }),
      };
      fetch(`${apiUrl}/scoresheet/${scoresheetId}`, opts)
        .then((res) => {
          if (res.ok !== true) {
            throw Error('Unauthorized action');
          }
          return res.json();
        })
        .then((data) => {
          localStorage.setItem('song-number', songNumber + 1);
          if (songNumber < 5) {
            localStorage.setItem('score', null);
            if (score !== 0) setCorrect(true);
            if (score === 0) setIncorrect(true);
            Navi('/decades');
          }

          if (songNumber === 5) {
            localStorage.setItem('song-number', null);
            localStorage.setItem('scoresheet-id', null);
            localStorage.setItem('score', null);
            Navi('/dashboard');
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
      return;
    }
  };

  return (
    <>
      <form className="quiz-sheet" onSubmit={handleSubmit}>
        {playSongFirst && <p id="error">Please play song first!!! </p>}
        <div className="labels">
          <h2>{guessItem}</h2>
        </div>
        <div className="inputs">
          <input
            required
            onInvalid={(F) =>
              F.target.setCustomValidity('Type sumthin damnit!!')
            }
            onInput={(F) => F.target.setCustomValidity('')}
            type="text"
            id="song"
            value={guessItemInput}
            placeholder="...."
            onChange={handleChange}
          ></input>
        </div>
        <div className="submit-buttons">
          <button type="submit">
            <h2>submit</h2>
          </button>
        </div>
      </form>
      <h2 id="score">
        SCORE: <span id="points">{score}</span>
      </h2>
    </>
  );
}
