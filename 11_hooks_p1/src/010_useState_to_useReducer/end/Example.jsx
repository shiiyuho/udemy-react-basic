/*useReducerの使い方(useStateの書き換え)*/
import { useReducer, useState } from "react";
/*
const [state, dispatch] = useReducer(reducer, initialArg, init)
reducer(state, action)
*/
const Example = () => {
  const [state, setState] = useState(0);
  //reducer（引数の1番目にstateが来る）
  const [rstate, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error("不明なactionです。");
    }
  }, 0);

  const countUp = () => {
    setState((prev) => ++prev);
  };
  const rcountUp = () => {
    dispatch({ type: "+", step: 2 });
  };
  const rcountDown = () => {
    dispatch({ type: "-", step: 3 });
  };
  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
      </div>
      <div>
        reducerの実行文
        <h3>{rstate}</h3>
        <button onClick={rcountUp}>+</button>
        <button onClick={rcountDown}>-</button>
      </div>
    </>
  );
};

export default Example;
