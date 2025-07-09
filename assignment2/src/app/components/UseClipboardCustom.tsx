"use client";
import { useState } from "react";

const useClipboard = (text: string) => {
  const [copy, setCopy] = useState<boolean>(false);

  const copyToClipboard = (text: string) => {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();

    try {
      const success = document.execCommand("copy");
      setCopy(success);
    } catch (err) {
      setCopy(false);
    }

    document.body.removeChild(input);
    setTimeout(() => setCopy(false), 2000);
  };

  return { copy, copyToClipboard };
};

export const ClipboardText = () => {
  const text = "Lets copy This Text ";
  const { copy, copyToClipboard } = useClipboard(text);

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => copyToClipboard(text)}>
        {copy ? "Copied" : "Copy"}
      </button>
    </div>
  );
};
