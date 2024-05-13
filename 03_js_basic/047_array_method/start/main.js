//配列のmap,filterメソッドについて学ぼう

const arry = [10, 20, 30, 40];
const newArry = [];

for (let i = 0; i < arry.length; i++) {
  const val = arry[i] * 2;
  if (val > 50) {
    newArry.push(arry[i] * 2);
  }
}

console.log(newArry);

console.log(newArry);
//上の部分を「map」を使うと下のようになる
const newArry2 = arry.map((val) => {
  return val * 2;
});
const newArry3 = newArry.filter((val) => val > 50);
console.log(newArry2);
console.log(newArry3);
