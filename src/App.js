import './App.css';
import { Route, Routes } from 'react-router';
import { useState } from 'react';
import QuizPage from './Components/QuizPage';
import HomePage from './Components/HomePage';
import Decades from './Components/Decades';
import Dashboard from './Components/Dashboard';

function App() {
  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [finishedPlay, setFinishedPlay] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/decades"
          element={
            <Decades
              correct={correct}
              incorrect={incorrect}
              setCorrect={setCorrect}
              setIncorrect={setIncorrect}
            />
          }
        />
        <Route
          path="/quiz"
          element={
            <QuizPage
              setCorrect={setCorrect}
              setIncorrect={setIncorrect}
              setFinishedPlay={setFinishedPlay}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              finishedPlay={finishedPlay}
              setFinishedPlay={setFinishedPlay}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
