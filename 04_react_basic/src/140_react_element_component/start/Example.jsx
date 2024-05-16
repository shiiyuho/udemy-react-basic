import React from "react";

const Bye = () => {
  return <h2>GoodBye!</h2>;
};

const Example = () => {
  return (
    <div>
      <Bye />
      {/*コンポーネントの中でコンポーネントを読み込んだ場合はType設定される */}
    </div>
  );
};

console.log(Example());

export default Example;
