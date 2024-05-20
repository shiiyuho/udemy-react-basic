import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);

  //アロー関数
  const countUp = () => setCount((state) => state + 1);

  return { count, countUp };
};
