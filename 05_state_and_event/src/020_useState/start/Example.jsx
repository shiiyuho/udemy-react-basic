//入力された値を画面上に出力(useState)
import { useState } from "react";

const Example = () => {
  let valArry = useState(); //初期値セット
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          const setFn = valArry[1];
          setFn(e.target.value);
        }}
      />
      ={valArry[0]}
    </>
  );
};

export default Example;

//分割代入の場合(useState)
import { useState } from "react";

const Example2 = () => {
  let [val, setVal] = useState(); //初期値セット
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      ={val}
    </>
  );
};
