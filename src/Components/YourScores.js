import Scores from './Scores';

export default function YourScores({
  handleClick,
  setAnimation,
  setLoadingScores,
}) {
  return (
    <>
      <div className="your-scores">
        <h2 id="login">YOUR SCORES</h2>
        <Scores
          setAnimation={setAnimation}
          setLoadingScores={setLoadingScores}
        />
        <span id="close-window" onClick={handleClick}>
          X
        </span>
      </div>
    </>
  );
}
