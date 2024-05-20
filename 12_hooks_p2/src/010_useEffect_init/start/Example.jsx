import { useEffect, useState } from "react";

const Example = () => {
  //配列でtimeを設定
  const [time, setTime] = useState(0);

  //useEffect(引数の実行が行われたとき1度だけ呼び出される)
  useEffect(() => {
    //下記によりコールバック関数が実行
    window.setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <>
      <h3>
        <time datetime="">{time}</time>
        <span>秒経過</span>
      </h3>
    </>
  );
};

export default Example;
