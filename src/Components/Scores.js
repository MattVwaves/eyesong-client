import { useState, useEffect } from 'react';

const apiUrl = process.env.REACT_APP_SERVER_URL;

export default function Scores() {
  const [scoreSheets, setScoreSheets] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userId, setUserId] = useState(Number(localStorage.getItem('user-id')));

  const handleTotalScore = () => {
    '10';
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
        const updatedScoresheets = scoreSheets.map((sheet) => {
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
            <div className="scores-container">
              <p id="your-score">{score.totalScore}</p>
              <p id="your-score">{score.createdAt}</p>
              <p id="your-score"> view scoresheet</p>
            </div>
          );
        })}
    </>
  );
}
