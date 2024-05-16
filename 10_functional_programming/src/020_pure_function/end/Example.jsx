const Example = () => {
  // 関数型（純粋関数）
  //  fn(決まった引数) -> 決まった戻り値
  //  関数外の状態（データ）は参照・変更しない。
  //  関数外に影響を及ぼさない。
  // ・引数で渡された値を変更しない。
  // 上記の要件を満たさない操作は「副作用」と呼ぶ。

  //valの設定（決まった引数）
  const val1 = 3,
    val2 = 9;
  let result;
  const add = (val1) => {
    console.log(val1);
    result = val1 + val2;
    return val1 + val2;
  };

  return (
    <>
      （決まった戻り値）
      <div>純粋関数:{add(val1)}</div>
    </>
  );
};

export default Example;
