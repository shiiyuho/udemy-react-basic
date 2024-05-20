//useContextの基礎
//useContextをインポート➀
import { createContext } from "react";
import Child from "./components/Child";
//コンテキストを定義➁
export const MyContext = createContext("hello");

const Example = () => {
  return <Child />;
};

export default Example;
