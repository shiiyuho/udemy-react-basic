import { useState } from "react";

// POINT ラジオボタンの実装
const Example = () => {
  const [fruit, setFruit] = useState("Apple");
  const onChange = (e) => setFruit(e.target.value); //更新用関数

  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"]; //選択肢

  return (
    <>
      {/* ラジオボタン */}
      {RADIO_COLLECTION.map((value) => {
        return (
          //lavelのkeyを忘れずに
          <label key={value}>
            {" "}
            <input
              type="radio"
              value={value}
              checked={fruit === value}
              onChange={onChange}
            />
            {value}
          </label>
        );
      })}
      {/* <label>
        <input
          type="radio"
          value="Banana"
          checked={fruit === "Banana"}
          onChange={onChange}
        />
        Banana
      </label>
      <label>
        <input
          type="radio"
          value="Cherry"
          checked={fruit === "Cherry"}
          onChange={onChange}
        />
        Cherry
      </label> */}
      <h3>私は{fruit}がたべたい</h3>
    </>
  );
};

export default Example;
