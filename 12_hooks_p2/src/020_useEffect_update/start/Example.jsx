import { useEffect, useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);

  //依存配列が空の場合
  useEffect(() => {
    console.log("useEffect is called");
    window.setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, []);

  //依存配列と呼ばれる
  useEffect(() => {
    //コールバック関数(この中で更新してはいけない)
    document.title = "counter:" + title;
    window.localStorage.setItem("time-key", time);
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
  );
};

export default Example;
