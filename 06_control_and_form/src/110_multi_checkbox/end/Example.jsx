import { useState } from "react";

// end用:startと値が被らないための接続詞
const prefix = "end-";
// POINT 複数チェックボックスの実装
const Example = () => {
  //配列の定義
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const newFruits = fruits.map((fruit) => {
      const newFruit = { ...fruit }; //スプレッド演算子によってコピー
      if (newFruit.label === e.target.value) {
        newFruit.checked = !fruit.checked;
      }

      return newFruit;
    });

    setFruits(newFruits);
    // forEachバージョン(合計値の計算)
    // let sumVal = 0;
    // newFruits.forEach(fruit => {
    //   if(fruit.checked) {//trueの時「sumVal」に値段を追加
    //     sumVal = sumVal + fruit.value;
    //   }
    // });

    // filter + forEachバージョン
    // let sumVal = 0;
    // newFruits
    //   .filter((fruit) => fruit.checked)
    //   .forEach((fruit) => (sumVal = sumVal + fruit.value));

    // filter + reduceバージョン
    let sumVal = newFruits
      //fruitのcheckedものだけを配列として取得
      .filter((fruit) => fruit.checked)
      //「reduce」は配列の要素を一つにまとめる
      .reduce((sumVal, fruit) => sumVal + fruit.value, 0);
    setSum(sumVal);
  };
  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.label}>
            <input
              // 接続詞追加
              id={prefix + fruit.label}
              type="checkbox"
              value={fruit.label}
              checked={fruit.checked}
              onChange={handleChange}
            />
            {/* 接続詞追加 */}
            <label htmlFor={prefix + fruit.label}>
              {fruit.label}:{fruit.value}
            </label>
          </div>
        );
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
