import { useEffect, useState, useLayoutEffect } from "react";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp((prev) => !prev)}>
        {isDisp ? "非表示" : "表示"}トグル
      </button>
    </>
  );
};

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIrsRunning] = useState(false);

  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      intervalId = window.setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    //クリーンアップ関数
    return () => {
      window.clearInterval(intervalId);
    };
  }, [isRunning]);

  useEffect(() => {
    document.title = "counter:" + time;
    window.localStorage.setItem("time-key", time);

    return () => {
      // debugger
      // console.log('updated end');
    };
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem("time-key"));
    if (!isNaN(_time)) {
      setTime(_time);
    }
  }, []);

  const toggle = () => {
    setIrsRunning((prev) => !prev);
  };

  const reset = () => {
    setTime(0);
    setIrsRunning(false);
  };

  return (
    <>
      <h3>
        <time>{time}</time>
        <span>秒経過</span>
      </h3>
      <div>
        <button onClick={toggle}>{isRunning ? "一時停止" : "スタート"}</button>
        <button onClick={reset}>リセット</button>
      </div>
    </>
  );
};

export default Example;
