import './App.css';
import { Route, Routes } from 'react-router';
import { useState } from 'react';
import QuizPage from './Components/QuizPage';
import HomePage from './Components/HomePage';
import Decades from './Components/Decades';
import Dashboard from './Components/Dashboard';

function App() {
  const [correct, setCorrect] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/decades" element={<Decades correct={correct} />} />
        <Route path="/quiz" element={<QuizPage setCorrect={setCorrect} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
