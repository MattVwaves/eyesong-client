import { useState, useEffect } from 'react';
import Youtube from 'react-youtube';

const apiUrl = process.env.REACT_APP_SERVER_URL;

const opts = {
  height: '100%',
  width: '100%',
  playerVars: {
    autoplay: 0,
    modestbranding: 1,
  },
};

export default function Scores({ setAnimation, setLoadingScores }) {
  const [scoreSheets, setScoreSheets] = useState(null);
  const [noScores, setNoScores] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userId, setUserId] = useState(Number(localStorage.getItem('user-id')));
  const [scoresheetsDisplayed, setScoresheetsDisplayed] = useState([]);

  const handleScoreSheet = (score) => {
    if (!scoresheetsDisplayed.includes(score.id))
      setScoresheetsDisplayed([...scoresheetsDisplayed, score.id]);
    if (scoresheetsDisplayed.includes(score.id)) {
      const updatedScoresheetsDisplayed = scoresheetsDisplayed.filter(
        (sheet) => {
          return sheet !== score.id;
        }
      );
      setScoresheetsDisplayed(updatedScoresheetsDisplayed);
    }
  };

  const formatDate = (date) => {
    const formattedDate = new Date(date);
    const year = formattedDate.getFullYear();
    const month = formattedDate.getMonth() + 1;
    const day = formattedDate.getDate();
    const dateWithHyphens = [year, month, day].join('-');
    return dateWithHyphens;
  };

  useEffect(() => {
    const opts = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(`${apiUrl}/scoresheet/${userId}`, opts)
      .then((res) => {
        if (res.ok !== true) {
          throw Error('Unauthorized action');
        }
        return res.json();
      })
      .then((data) => {
        const scoreSheets = data.scoreSheets;
        if (scoreSheets.length === 0) {
          setLoadingScores(false);
          setAnimation(0);
          setNoScores(true);
          return;
        }
        const updatedScoresheets = scoreSheets
          .sort((a, b) => b.id - a.id)
          .map((sheet) => {
            let totalScore = 0;
            sheet.songs.forEach((song) => {
              totalScore += song.score;
            });
            return { ...sheet, totalScore: totalScore };
          });
        setLoadingScores(false);
        setScoreSheets(updatedScoresheets);
        setAnimation(0);
      })
      .catch((e) => {
        console.log(e.message);
      });
  });
  return (
    <>
      {scoreSheets &&
        scoreSheets.map((score) => {
          return (
            <>
              <div className="scores-container">
                <p id="your-score">{score.totalScore}</p>
                <p id="your-score">{formatDate(score.createdAt)}</p>
                <p
                  id="your-score"
                  className="view-scoresheet"
                  name={score.id}
                  onClick={() => handleScoreSheet(score)}
                  style={{
                    backgroundColor: scoresheetsDisplayed.includes(score.id)
                      ? 'rgb(238, 238, 81)'
                      : 'white',
                  }}
                >
                  {!scoresheetsDisplayed.includes(score.id) &&
                    'view scoresheet'}
                  {scoresheetsDisplayed.includes(score.id) && 'X'}
                </p>
              </div>
              {scoresheetsDisplayed.includes(score.id) && (
                <>
                  {score.songs.map((song) => {
                    return (
                      <div
                        className="scores-container"
                        id="scoresheet-container"
                      >
                        <div id="your-score">
                          <p id="score-txt">{song.songNumber}</p>
                        </div>
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
                    );
                  })}
                </>
              )}
            </>
          );
        })}
      {noScores && (
        <p id="error">
          No scores yet hombre....
          <br />
          ....Hmmm............
          <br />
          what to do...
        </p>
      )}
    </>
  );
}
