// 関数型（純粋関数【Part.2】）
// POINT 引数で渡された値を変更しない。（Immutabilityの保持）
// 上記の要件を満たさない操作は「副作用」と呼ぶ。
const Example = () => {
  const num = { val: 2 };
  const double = (num) => {
    //オブジェクトの定義
    const newNum = { val: num.val * 2 };
    // newNum.val = num.val * 2;
    return newNum;
  };

  const newNum = double(num);
  console.log("newNum", newNum, "num", num);
  //false(上のreturnがnumならtrue)
  console.log(newNum === num);
  return (
    <>
      <div>Immutability</div>
    </>
  );
};

export default Example;
