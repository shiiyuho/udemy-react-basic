import { useContext } from "react";
import { MyContext } from "../Example";

const OtherChild = () => {
  //1番目が欲しいから引数1は「,」で省略
  const [, setState] = useContext(MyContext);

  const clickHandler = (e) => {
    setState((prev) => prev + 1);
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <h3>他の子コンポーネント</h3>
      <button onClick={clickHandler}>+</button>
    </div>
  );
};

export default OtherChild;
