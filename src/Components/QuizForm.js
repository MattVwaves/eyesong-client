import { useState, useEffect } from 'react';

const apiUrl = process.env.REACT_APP_SERVER_URL;

export default function QuizForm({
  score,
  setScore,
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
}) {
  const [guessItemInput, setGuessItemInput] = useState('');
  const [guessItem, setGuessItem] = useState('song');
  const [songOrArtist, setSongOrArtist] = useState('song');
  const [songNumber, setSongNumber] = useState(1);
  const [userId, setUserId] = useState(Number(localStorage.getItem('user-id')));
  const [videoId, setVideoId] = useState(localStorage.getItem('video-id'));
  const [token, setToken] = useState(localStorage.getItem('token'));

  const [scoredSong, setScoredSong] = useState({
    id: userId,
    videoId: videoId,
    songNumber: songNumber,
    artistName: artistName,
    songTitle: songTitle,
    decade: localStorage.getItem('decade'),
    score: score,
  });

  useEffect(() => {});

  const handleChange = (e) => {
    setGuessItemInput('');
    const guessItemInput = e.target.value;
    setGuessItemInput(guessItemInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (songPlaying === false) {
      setPlaySongFirst(true);
      return;
    }
    e.preventDefault();
    if (songOrArtist === 'song') {
      if (guessItemInput.toLowerCase() === songTitle.toLowerCase()) {
        if (roundDisplay === 1) setScore(score + 40);
        if (roundDisplay === 2) setScore(score + 20);
        if (roundDisplay === 3) setScore(score + 10);
        setGuessItemInput('');
        setGuessItem('artist');
        setRound(round + 1);
        setRoundDisplay(roundDisplay + 1);
        setSongOrArtist('artist');
        return;
      }
    }

    if (songOrArtist === 'artist') {
      if (guessItemInput.toLowerCase() === artistName.toLowerCase()) {
        setScore(score + 15);
        const finalScore = score + 15;
        setGuessItemInput('');
        // setScoredSong({ ...scoredSong, score: finalScore });
        const opts = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ ...scoredSong, score: finalScore }),
        };

        await fetch(`${apiUrl}/scoresheet`, opts)
          .then((res) => {
            if (res.ok !== true) {
              throw Error('Unauthorized action');
            }
            return res.json();
          })
          .then((data) => console.log(data))
          .catch((err) => {
            console.log(err.message);
          });
      }
    }
    if (hearts > 1) {
      setHearts(hearts - 1);
      return;
    }
    setGuessItemInput('');
    setHearts(3);
    setRound(round + 1);
    setRoundDisplay(roundDisplay + 1);
    setSongPlaying(false);
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
