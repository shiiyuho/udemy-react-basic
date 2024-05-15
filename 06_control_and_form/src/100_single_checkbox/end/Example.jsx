import { useState } from "react";

// POINT チェックボックスの実装
const Example = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div>
      <label htmlFor="my-check">チェック：</label>
      <input
        type="checkbox"
        //IDはなくてもOK
        id="my-check"
        checked={isChecked}
        //上の配列を読んでいる
        onChange={() => setIsChecked((prevState) => !prevState)}
      />
      <div>{isChecked ? "ON!" : "OFF!"}</div>
    </div>
  );
};

export default Example;
