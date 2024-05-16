//プリミティブ型：1,str,bool,10n,Symbol(),null,undefined
//オブジェクト型：{},[]などのプリミティブ型以外
import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState({ name: "Tom", age: 18 });
  //Name設定(スプレッド演算子)
  const changeName = (e) => {
    setPerson({ ...person, name: e.target.value });
  };

  //Age設定(スプレッド演算子)
  const changeAge = (e) => {
    setPerson({ ...person, age: e.target.value });
  };

  //リセット設定
  const reset = () => {
    setPerson({ name: "", age: "" });
  };

  return (
    <>
      <h3>Name:{person.name}</h3>
      <h3>Age:{person.name}</h3>
      <input type="text" value={person.name} onChange={changeName} />
      <input type="number" value={person.age} onChange={changeAge} />
      <div>
        <button onClick={reset}></button>
      </div>
    </>
  );
};

export default Example;
