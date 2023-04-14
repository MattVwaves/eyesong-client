import Youtube from 'react-youtube';

export default function Score({ song }) {
  return (
    <>
      <div className="scores-container" id="scoresheet-container">
        <div>
          <p id="your-score">
            <Youtube videoId={song.videoId} />
          </p>
        </div>
        <p id="your-score">{song.artistName}</p>
        <p id="your-score">{song.songTitle}</p>
        <p id="your-score">{song.decade}</p>
        <p id="your-score">SCORE: {song.score}</p>
      </div>
    </>
  );
}
