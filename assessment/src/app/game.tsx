"use client";
import { useState, useEffect } from "react";

export const Board = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [userSymbol, setUserSymbol] = useState<"x" | "o" | null>(null);
  const [computer, setComputer] = useState<"x" | "o" | null>(null);
  const [turn, setTurn] = useState<"player" | "computer">("player");
  const [end , setEnd] = useState<boolean>(false);

  const chooseSymbol = (symbol: "x" | "o") => {
    setUserSymbol(symbol);
    setComputer(symbol === "x" ? "o" : "x");
  };

  const handleClick = (i : number) => {
    if (board[i] || end || !userSymbol) return;

    const newBoard = [...board];
    newBoard[i] = userSymbol;
    setBoard(newBoard);
    setTurn("computer");

    if(checkWinner(newBoard, userSymbol)){
        alert("you win");
        setEnd(true);
        return ; 
    }
  };
  useEffect(() => {
    if (turn === "computer" && !end && computer != null) {
      const timeout = setTimeout(() => {
        const empty = board
          .map((val, index) => (val === "" ? index : null))
          .filter((val) => val !== null);
        if (empty.length === 0) return;

        const randomIndex = empty[Math.floor(Math.random() * empty.length)];

        const newBoard = [...board];
        newBoard[randomIndex] = computer;
        setBoard(newBoard);
        setTurn("player");

        if(checkWinner(newBoard, computer)){
            alert('computer won');
            setEnd(true);
            return ; 
        }
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [turn, board, computer]);

  const checkWinner = (board : string[], symbol: string) : boolean=>{

    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,7],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ];

    return wins.some((pattern) => 
    pattern.every((index) => board[index] == symbol));
    
  }
  const squareStyle = {
    width: "100px",
    height: "100px",
    border: "2px solid white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "48px",
    cursor: "pointer",
  };

  const boardStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 100px)",
    gridTemplateRows: "repeat(3, 100px)",
    gap: "5px",
    justifyContent: "center",
    marginTop: "20px",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Tic-Tac-Toe</h2>
      {!userSymbol ? (
        <>
          <h2>Select a symbol</h2>
          <button onClick={() => chooseSymbol("x")}>X</button>
          <button onClick={() => chooseSymbol("o")}>O</button>
        </>
      ) : (
        <div style={boardStyle}>
          {board.map((cell, index) => (
            <div
              key={index}
              style={squareStyle}
              onClick={() => {
                handleClick(index);
              }}
            >
              {cell}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
