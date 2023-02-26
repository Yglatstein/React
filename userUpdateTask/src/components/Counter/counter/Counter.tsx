import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  function handleAddtoCounter() {
    setCounter(counter + 1)
  }
  function handleDecreseFromCounter() {
    setCounter(counter - 1)
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleAddtoCounter}>+</button>
      <button onClick={handleDecreseFromCounter}>-</button>
    </div>
  );
};

export default Counter;