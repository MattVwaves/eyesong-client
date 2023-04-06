export default function YourScores({ handleClick }) {
  return (
    <div className="your-scores">
      <h2 id="login">YOUR SCORES</h2>
      <div className="scores-container">
        <p id="your-score">54</p>
        <p id="your-score">23rd Feb 2023</p>
        <p id="your-score"> view scoresheet</p>
      </div>
      <div className="scores-container">
        <p id="your-score">54</p>
        <p id="your-score">23rd Feb 2023</p>
        <p id="your-score"> view scoresheet</p>
      </div>
      <div className="scores-container">
        <p id="your-score">54</p>
        <p id="your-score">23rd Feb 2023</p>
        <p id="your-score"> view scoresheet</p>
      </div>
      <div className="scores-container">
        <p id="your-score">54</p>
        <p id="your-score">23rd Feb 2023</p>
        <p id="your-score"> view scoresheet</p>
      </div>
      <div className="scores-container">
        <p id="your-score">54</p>
        <p id="your-score">23rd Feb 2023</p>
        <p id="your-score"> view scoresheet</p>
      </div>
      <span id="close-window" onClick={handleClick}>
        X
      </span>
    </div>
  );
}
