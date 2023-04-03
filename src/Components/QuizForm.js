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
  const [artistName, setArtistName] = useState('the doors');
  const [guessItemInput, setGuessItemInput] = useState('');
  const [guessItem, setGuessItem] = useState('song');

  const handleChange = (e) => {
    setGuessItemInput('');
    const guessItemInput = e.target.value;
    setGuessItemInput(guessItemInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guessItemInput.toLowerCase() === songTitle) {
      if (roundDisplay === 1) setScore(score + 40);
      if (roundDisplay === 2) setScore(score + 20);
      if (roundDisplay === 3) setScore(score + 10);
      setSongTitle('');
      setGuessItemInput('');
      setGuessItem('artist');
      return;
    }
    if (guessItemInput.toLowerCase() === artistName) {
      setScore(score + 15);
      setArtistName('');
      setGuessItemInput('');
      return;
    }
    if (hearts > 1) {
      setHearts(hearts - 1);
      return;
    }
    setGuessItemInput('');
    setHearts(3);
    setRound(round + 1);
    setRoundDisplay(roundDisplay + 1);
  };

  return (
    <>
      <form className="quiz-sheet" onSubmit={handleSubmit}>
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
