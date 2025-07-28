'use client'

import { useState } from "react";

export const CounterWithStep = () => {
  let [count, setCount] = useState<number>(1);
  let [inputStep, setInputStep] = useState<string>("");

  const addValue = () => {
    setCount(count + Number(inputStep));
  };

  const reduceValue = () => {
    setCount(count - Number(inputStep));
  };

  return (
    <div>
      <input
        type="number"
        placeholder="enter step value :"
        value={inputStep}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputStep(e.target.value)
        }
      />

      <br />
      <br />

      <h2>Count : {count}</h2>
      <button onClick={addValue}>Increment</button>
      <br />
      <button onClick={reduceValue}>Decrement</button>
    </div>
  );
};