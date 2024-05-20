import { add } from "./add";

const Example = () => {
  //関数を定義してその中でダイナミックインポートをやるとき
  const dynamickImport = async () => {
    await import("./add");
  };
  //ダイナミックインポート(基本)
  import("./add").then((module) => {
    console.log(module);
  });
  console.log(add(1, 2));
};

export default Example;
