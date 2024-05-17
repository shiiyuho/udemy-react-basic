import CounterResult from "./CounterResult";
import CounterButton from "./CounterButton";

const Counter = () => {
  return (
    <>
      <CounterResult />
      {/* stepが2のバージョン（2ずつ増えるor減る */}
      <CounterButton step={2} calcType="+" />
      <CounterButton step={2} calcType="-" />
      {/* stepが10のバージョン（10ずつ増えるor減る */}
      <CounterButton step={10} calcType="+" />
      <CounterButton step={10} calcType="-" />
    </>
  );
};
export default Counter;
