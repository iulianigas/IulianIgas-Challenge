import { useState } from "react";

let randomNumber = Math.round(Math.random() * 10);

const NumberGenerator = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState("");

  const handleClick = () => {
    const userGuess = parseInt(value, setValue);

    setResults(<p className="alert-danger">Enter a number!</p>);

    if (userGuess === randomNumber) {
      setResults(<p className="alert-success">Correct!</p>);
    }

    if (userGuess > randomNumber) {
      setResults(<p className="alert-warning">Too high, guess again!</p>);

    }

    if (userGuess < randomNumber) {
      setResults(<p className="alert-warning">Too low, guess again!</p>);  
    }
  }

  return (
    <div className="entertainment">
      <p>Have fun until other player joins and guess a number between 1 and 10!</p>
      <input
        value={value}
        type="number"
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit" onClick={handleClick}>
        Guess the number
      </button>
      <br />
      <br />
      {results}
    </div>
  );
};

export default NumberGenerator;