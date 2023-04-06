import Scores from './Scores';

export default function YourScores({ handleClick }) {
  return (
    <>
      <div className="your-scores">
        <h2 id="login">YOUR SCORES</h2>
        <Scores />
        <span id="close-window" onClick={handleClick}>
          X
        </span>
      </div>
    </>
  );
}
