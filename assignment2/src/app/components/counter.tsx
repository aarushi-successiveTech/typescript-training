"use client";
import { useState } from "react";

export const Counter = () => {
  let [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <p>Count value = {count}</p>
      <button onClick={increment}>Increment</button>
      <br />
      <br />
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
