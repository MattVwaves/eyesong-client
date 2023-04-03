export default function Hearts({ hearts }) {
  return (
    <>
      {hearts === 3 && (
        <div className="hearts">
          <img src={require('../Assets/life-3.png')} id="heart" alt="heart" />
          <img src={require('../Assets/life-3.png')} id="heart" alt="heart" />
          <img src={require('../Assets/life-3.png')} id="heart" alt="heart" />
        </div>
      )}
      {hearts === 2 && (
        <div className="hearts">
          <img src={require('../Assets/life-3.png')} id="heart" alt="heart" />
          <img src={require('../Assets/life-3.png')} id="heart" alt="heart" />
        </div>
      )}
      {hearts === 1 && (
        <div className="hearts">
          <img src={require('../Assets/life-3.png')} id="heart" alt="heart" />
        </div>
      )}
    </>
  );
}
