export default function Vinyl({ songNumber }) {
  return (
    <>
      {songNumber === 1 && (
        <div className="vinyl-container">
          <h3 id="songs-remaining">Songs remaining</h3>
          <img
            id="vinyl"
            src={require('../Assets/vinyl2.png')}
            alt="viynl"
          ></img>
          <img
            id="vinyl"
            src={require('../Assets/vinyl2.png')}
            alt="viynl"
          ></img>
          <img
            id="vinyl"
            src={require('../Assets/vinyl2.png')}
            alt="viynl"
          ></img>
          <img
            id="vinyl"
            src={require('../Assets/vinyl2.png')}
            alt="viynl"
          ></img>
          <img
            id="vinyl"
            src={require('../Assets/vinyl2.png')}
            alt="viynl"
          ></img>
        </div>
      )}
      {songNumber === 2 && (
        <div className="vinyl-container">
          <h3 id="songs-remaining">Songs remaining</h3>
          <img
            id="vinyl"
            src={require('../Assets/vinyl2.png')}
            alt="viynl"
          ></img>
          <img
            id="vinyl"
            src={require('../Assets/vinyl2.png')}
            alt="viynl"
          ></img>
          <img
            id="vinyl"
            src={require('../Assets/vinyl2.png')}
            alt="viynl"
          ></img>
          <img
            id="vinyl"
            src={require('../Assets/vinyl2.png')}
            alt="viynl"
          ></img>
        </div>
      )}
      {songNumber === 3 && (
        <div className="vinyl-container">
          <h3 id="songs-remaining">Songs remaining</h3>
          <img
            id="vinyl"
            src={require('../Assets/vinyl2.png')}
            alt="viynl"
          ></img>
          <img
            id="vinyl"
            src={require('../Assets/vinyl2.png')}
            alt="viynl"
          ></img>
          <img
            id="vinyl"
            src={require('../Assets/vinyl2.png')}
            alt="viynl"
          ></img>
        </div>
      )}
      {songNumber === 4 && (
        <div className="vinyl-container">
          <h3 id="songs-remaining">Songs remaining</h3>
          <img
            id="vinyl"
            src={require('../Assets/vinyl2.png')}
            alt="viynl"
          ></img>
          <img
            id="vinyl"
            src={require('../Assets/vinyl2.png')}
            alt="viynl"
          ></img>
        </div>
      )}
      {songNumber === 5 && (
        <div className="vinyl-container">
          <h3 id="songs-remaining">Songs remaining</h3>
          <img
            id="vinyl"
            src={require('../Assets/vinyl2.png')}
            alt="viynl"
          ></img>
        </div>
      )}
    </>
  );
}
