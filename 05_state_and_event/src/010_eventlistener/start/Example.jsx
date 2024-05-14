//イベントリスナー

const Example = () => {
  const clickHandler = () => {
    alert("ボタンがクリックされました");
  };
  const clickHandler2 = () => {
    alert("ボタンをクリックしました");
  };
  return (
    <>
      {/* 大文字注意&関数を実行しないように注意「()を末尾につけない」 */}
      <button onClick={clickHandler}>クリックしてね</button>

      <button onClick={clickHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;
