import { useState } from "react";

const NumberGenerator = () => {
  const [number, setNumber] = useState();

  function randomNumberInRange(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNumber(randomNumberInRange(1, 20));
  }

  return (
    <div className="entertainment">
      <p>Have fun until other player joins and generate a random number!</p>
      <p>Your number is: {number} </p>
      <button onClick={handleClick}> Generate a random number between 1 and 20 </button>
    </div>
  );
};

export default NumberGenerator;