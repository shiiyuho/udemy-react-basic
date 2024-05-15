//配列内の要素をシャッフルする（配列にステートを使う）

import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);
  const shuffle = () => {
    const newNums = [...nums]; //「newNums」を新しい配列にする
    const value = newNums.pop(); //末尾
    newNums.unshift(value); //先頭に追加
    setNums(newNums);
    console.log(nums === newNums);
  };
  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}></button>
    </>
  );
};

export default Example;
