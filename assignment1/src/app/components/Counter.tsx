"use client";
import { useState } from "react";

export const Component = () => {
  let [counter, setCounter] = useState<number>(0);

  const addValue = () => {
    setCounter((prev) => prev + 1);
  };

  const removeValue = () => {
    counter -= 1;
    setCounter((prev) => prev - 1);
  };

  return (
    <div>
      <h2>Counter Value : {counter}</h2>
      <br />
      <button onClick={addValue}>Increment</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrement</button>
    </div>
  );
};
