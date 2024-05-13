//分割代入,

const [a, b, c] = ["配列1", "配列2", "配列3"];
console.log(a); //1つ目にアクセスする場合
console.log(arry[2]);

const { x, z } = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
console.log(x);
console.log(y);

//関数を使った分割代入

const arr = ["Japan", "Tokyo", "Shinjuku"]; //関数に対して
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" }; //オブジェクトに対して

//配列を受け取る関数
const fnArr = ([country, state, city]) => {
  console.log("---配列---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};
//オブジェクトを受け取る関数
const fnObj = ([country, state, city]) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

// fnArr(arr);
// fnObj(objAddress);
