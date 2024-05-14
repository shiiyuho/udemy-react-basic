import { useState } from "react";

const Example = () => {
  const [toggle, setToggle] = useState(true);
  const toggleComponent = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {toggle ? (
        <Count title="A" />
      ) : (
        <div>
          {" "}
          <Count title="B" />
        </div>
      )}
    </>
  );
};
const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>カウント: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
