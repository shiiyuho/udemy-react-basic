//スプレッド演算子
//・Math.max・・・どれが一番大きいか

const nums = [3, 1, 4, 1, 5, 10, 2, 6];

const result = Math.max(...nums); //上の配列が引数として渡される
console.log(result);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1, ...arr2, 10];
let newArr1 = arr1;
newArr1.push(4); //newArr1に「４」を追加
console.log(newArr);

//オブジェクトに対してのスプレッド
const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj };

console.log(newObj);

//関数に対してのスプレッド
const restA = (...argA) => console.log(argA);
restA(1, 3, 4); //引数の個数は決まっていない

//特定の引き数だけ変数にして定義したい場合
const restB = (n, ...argB) => console.log(argB); //ｎに1だけ入って他はargBに入る
restB(1, 3, 4);
