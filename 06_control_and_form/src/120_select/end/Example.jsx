import { useState } from "react";

// POINT プルダウンの実装
const Example = () => {
  const [selected, setSelected] = useState("Banana");

  const OPTIONS = ["Apple", "Banana", "Cherry"];

  return (
    <>
      <select
        //ここに選択したいvalueの設定を記述
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {/* optionをmapで書いた場合の書き方 */}
        {OPTIONS.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
        {/* <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Cherry">Cherry</option> */}
      </select>
      <div>選択された果物：{selected}</div>
    </>
  );
};

export default Example;
