import { useCounter, useCounterDispatch } from "../context/CounterContext";

const CounterButton = ({ calcType, step }) => {
  const dispatch = useCounterDispatch();

  const clickHandler = () => {
    dispatchEvent({ type: calcType, step: step });
  };

  return (
    <button onClick={clickHandler}>
      {calcType}
      {step}
    </button>
  );
};
export default CounterButton;
