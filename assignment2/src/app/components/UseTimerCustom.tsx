"use client";
import { useState, useRef } from "react";

const useTimer = (initialTime = 0) => {
  const [time, setTime] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;
    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          setIsRunning(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTime(initialTime);
  };

  return { time, isRunning, startTimer, pauseTimer, resetTimer };
};

export const Countdown = () => {
  const { time, startTimer, pauseTimer, resetTimer } = useTimer(10);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <h3>{time} seconds</h3>

      <button style={{ marginRight: "10px" }} onClick={startTimer}>
        start
      </button>
      <button style={{ marginRight: "10px" }} onClick={pauseTimer}>
        Pause
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};
