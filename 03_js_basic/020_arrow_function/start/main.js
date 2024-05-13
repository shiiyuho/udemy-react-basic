function fn(number) {
  return number * 2;
}

// const fn = function (number) {  //これより下、追加部分
//   //無名関数
//   return number * 2;
// };

console.log(fn(2));
console.log(fn(4));

const fnArrow = (number) => {
  //アロー関数
  console.log(number);
  return number * 2;
};

const fnArrowObj = (number) => ({ result: number * 2 });

console.log(fnArrowObj(2));
konnnitiha;
