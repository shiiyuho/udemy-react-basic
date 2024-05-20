//MyContextとuseContextを読み込む➂
import { useContext } from "react";
import { MyContext } from "../Example";

const GrandChild = () => {
  //useContextの引数として渡す➃
  const value = useContext(MyContext);
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>孫コンポーネント</h3>
      {value}
    </div>
  );
};
export default GrandChild;
