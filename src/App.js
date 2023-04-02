import './App.css';
import { Route, Routes } from 'react-router';
import QuizPage from './Components/QuizPage';
import HomePage from './Components/HomePage';
import Decades from './Components/Decades';

function App() {
  return (
    <>
      {/* <div className="App"> */}
      {/* <QuizPage /> */}
      {/* <HomePage /> */}
      {/* </div> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/decades" element={<Decades />} />
      </Routes>
    </>
  );
}

export default App;
