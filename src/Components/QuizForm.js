export default function QuizForm() {
  return (
    <form className="quiz-sheet">
      {/* <label for="name">SONG:</label> */}
      {/* <br></br> */}
      <div className="labels">
        <h2>artist</h2>
        <h2>song</h2>
      </div>
      <div className="inputs">
        <input
          required
          onInvalid={(F) => F.target.setCustomValidity('Type sumthin damnit!!')}
          onInput={(F) => F.target.setCustomValidity('')}
          type="text"
          id="name"
          name="name"
          // value={songTitleInput}
          placeholder="...."
          // onChange={handleChange}
        ></input>
        {/* <button type="submit">Submit</button> */}
        <input
          required
          onInvalid={(F) => F.target.setCustomValidity('Type sumthin damnit!!')}
          onInput={(F) => F.target.setCustomValidity('')}
          type="text"
          id="name"
          name="name"
          // value={songTitleInput}
          placeholder="...."
          // onChange={handleChange}
        ></input>
      </div>
      <div className="submit-buttons">
        <h2>submit</h2>
        <h2>submit</h2>
      </div>
    </form>
  );
}
