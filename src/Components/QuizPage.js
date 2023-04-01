import Hearts from './Hearts';
import Eye from './Eye';
import QuizForm from './QuizForm';

export default function QuizPage() {
  return (
    <>
      <div className="main-container">
        <div className="title-container-l">
          <Hearts />
          <h1>EYE POP</h1>
        </div>

        <div className="circle-container">
          {/* <img src={require('../dino-horiz.jpg')} id="test-image" /> */}
          <Eye />
        </div>
        <div id="container-r">
          <h2 id="points-available">
            Points Available: <span id="points">40</span>
          </h2>
        </div>
      </div>
      <div className="play-container">
        <img src={require('../play01.png')} id="play" />
      </div>

      <div className="form-container">
        <QuizForm />
      </div>
      <h2 id="score">
        SCORE: <span id="points">0</span>
      </h2>
    </>
  );
}
