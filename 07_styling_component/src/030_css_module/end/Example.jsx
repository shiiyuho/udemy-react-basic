/* css moduleのメリットとデメリット*/

import { useState } from "react";
import SubButton from "./components/SubButton";
//CSSModuleファイルのインポート
import styles from "./Example.module.css";

// console.log(styles);スタイルの確認

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      {/* 実行分 */}
      <button //Example.cssの.btn             .selectが呼び出される
        className={`${styles.btn} ${isSelected ? styles.selected : ""}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <SubButton />
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
