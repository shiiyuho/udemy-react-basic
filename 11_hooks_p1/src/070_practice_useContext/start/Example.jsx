import { useReducer } from "react";
import Input from "./components/input";
import Select from "./components/Select";
import Result from "./components/Result";

const Example = () => {
  return (
    /* 完成系のJSX */
    // <CalcProvider>
    //   <Input name="a"/>
    //   <Input name="b" />
    //   <Select />
    //   <Result />
    // </CalcProvider>
    <CalcProvider>
      <h3>練習問題</h3>
      <p>
        Example内のコードをコンポーネントに分割してください。また、ステートはContext経由でやり取りしてください。
      </p>
      {/* JSXとして返す */}
      <Input name="a" />
      <Input name="b" />
      <Select />
      <Result />
    </CalcProvider>
  );
};

export default Example;
