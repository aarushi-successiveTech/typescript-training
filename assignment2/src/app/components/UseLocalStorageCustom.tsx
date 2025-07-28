"use client";
import { useState } from "react";
type LocalProps<T> = {
  key: string;
  initialValue: T;
};

function useLocalStorage<T>({ key, initialValue }: LocalProps<T>) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  const setItem = (value: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (err) {
      console.log(err);
    }
  };

  const getItem = (): T | null => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (err) {
      return null;
    }
  };

  const removeItem = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (err) {
      console.log(err);
    }
  };

  return { storedValue, setItem, getItem, removeItem };
}

export const UserPreferences = () => {
  const [input, setInput] = useState("");
  const { storedValue, setItem, getItem, removeItem } = useLocalStorage<string>(
    {
      key: "userPre",
      initialValue: "",
    }
  );

  return (
    <div>
      <h2>User preferences</h2>
      <input
        type="text"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        placeholder="Enter your preference"
      />

      <button onClick={() => setItem(input)}>Save</button>
      <button onClick={removeItem}>Clear</button>
      <h3>Saved preferences: {storedValue}</h3>
    </div>
  );
};
