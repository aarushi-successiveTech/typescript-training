"use client";
import { useState } from "react";

export const RandomNumberGenerator = () => {
  let [randomNumber, setRandomNumber] = useState<number>(10);

  return (
    <div>
      <h1>Random Number = {randomNumber}</h1>
      <button
        onClick={() => setRandomNumber(Math.floor(Math.random() * 100) + 1)}
      >
        Generate New
      </button>
    </div>
  );
};
