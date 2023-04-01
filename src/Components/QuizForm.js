import { useState } from 'react';

export default function QuizForm({
  score,
  setScore,
  hearts,
  setHearts,
  round,
  setRound,
  roundDisplay,
  setRoundDisplay,
}) {
  const [songTitle, setSongTitle] = useState('hey joe');
  const [artistName, setArtistName] = useState('The Doors');
  const [songTitleInput, setSongTitleInput] = useState('');
  const [artistInput, setArtistInput] = useState('');

  const handleChange = (e) => {
    if (e.target.id === 'song') {
      const songInput = e.target.value;
      setSongTitleInput(songInput);
    }
    if (e.target.id === 'artist') {
      const artistInput = e.target.value;
      setArtistInput(artistInput);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (songTitleInput.toLowerCase() === songTitle) {
      setScore(40);
      setSongTitle('');
      setSongTitleInput('');
      // setCorrectAnswer(true);
      return;
    }
    setSongTitleInput('');
    if (hearts > 1) {
      setHearts(hearts - 1);
      return;
    }
    setHearts(3);
    setRound(round + 1);
    setRoundDisplay(roundDisplay + 1);
  };

  return (
    <>
      <form className="quiz-sheet" onSubmit={handleSubmit}>
        <div className="labels">
          <h2>song</h2>
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
            value={songTitleInput}
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
