"use client";
import { useCallback, useState } from "react";

type ChildProps = {
  count: number;
  onIncrement: () => void;
  onReset: () => void;
};
const Child = ({ count, onIncrement, onReset }: ChildProps) => {
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
export const Parent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <Child count={count} onIncrement={increment} onReset={reset} />
    </div>
  );
};
