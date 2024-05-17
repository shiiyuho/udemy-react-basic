// useLayoutEffect
import { useEffect, useState, useLayoutEffect } from "react";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp((prev) => !prev)}>トグル</button>
    </>
  );
};

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId = null;
    intervalId = window.setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    //現在のカウントの時間を登録
    document.title = "counter:" + time;
    window.localStorage.setItem("time-key-end", time);

    return () => {
      // debugger
      // console.log('updated end');
    };
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem("time-key-end"));
    //数値でない場合の処理
    if (!isNaN(_time)) {
      setTime(_time);
    }
  }, []);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
  );
};

export default Example;
