"use client";
import { useReducer } from "react";

const initialStateA = { countA: 0, countB: 0 };

type State = {
    countA : number;
    countB : number;
}

type Action = 
| {type : "addA"}
| {type : "addB"};

const reducer = (state : State, action : Action) => {
  switch (action.type) {
    case "addA":
      return { ...state, countA: state.countA + 1 };

    case "addB":
      return { ...state, countB: state.countB + 1 };

    default:
      return state;
  }
};

export const Voter = () => {
  const [state, dispatch] = useReducer(reducer, initialStateA);

  return (
    <div>
      <p>votes for A : {state.countA}</p>
      <p>votes for B : {state.countB}</p>

      <button onClick={() => dispatch({ type: "addA" })}>Vote-A</button>
      <button onClick={() => dispatch({ type: "addB" })}>Vote-B</button>
    </div>
  );
};
