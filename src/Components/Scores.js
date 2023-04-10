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

export default function Scores() {
  const [scoreSheets, setScoreSheets] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userId, setUserId] = useState(Number(localStorage.getItem('user-id')));
  const [scoresheetsDisplayed, setScoresheetsDisplayed] = useState([]);
  const [viewScoreStyle, setViewScoreStyle] = useState({
    backgroundColor: 'yellow',
  });

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
        const updatedScoresheets = scoreSheets
          .sort((a, b) => b.id - a.id)
          .map((sheet) => {
            let totalScore = 0;
            sheet.songs.forEach((song) => {
              totalScore += song.score;
            });
            return { ...sheet, totalScore: totalScore };
          });
        setScoreSheets(updatedScoresheets);
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
                <p id="your-score">{score.createdAt}</p>
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
                        <p id="your-score">{song.songNumber}</p>
                        <div>
                          <p id="your-score">
                            <Youtube videoId={song.videoId} />
                          </p>
                        </div>
                        <p id="your-score">{song.artistName}</p>
                        <p id="your-score">{song.songTitle}</p>
                        <p id="your-score">{song.decade}</p>
                        <p id="your-score">{song.score}</p>
                      </div>
                    );
                  })}
                </>
              )}
            </>
          );
        })}
    </>
  );
}
