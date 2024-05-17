// Reactと純粋関数

//外部スコープ(外部で設定したものを中で使ってはいけない)
let value = 0;

const Child = () => {
  value++;
  return <div>{value}</div>;
};
//上の機能を実行するときは下記のように新しく作る
const ChildPure = ({ value }) => {
  return <div>{value}</div>;
};
//関数コンポーネント
const Example = () => {
  let value = 0;

  return (
    <>
      <Child />
      <Child />
      <Child />
      <ChildPure value={++value} />
      <ChildPure value={++value} />
      <ChildPure value={++value} />
    </>
  );
};

export default Example;
