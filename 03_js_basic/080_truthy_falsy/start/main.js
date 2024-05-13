// falsy → 真偽値に変換した際に"偽(false)"とみなされる値のこと。
// truthy → それ以外

/* falsyな値の一覧
false
0 (数字)
0n (big int)
"" (空文字)
null
undefined
NaN (Not a Number)
*/

const a = 0; //falsyな値(取れるのは「－10」)ただし"0"はtruthy
let result = a ? 10 : -10;
console.log(result);

const falsy = 0;
const truthy = 1;
console.log(Boolean(truthy)); //確認するための書き方(どちらかわからなかったら[Boolean])
console.log(Boolean(falsy));

// 論理積 (&&) について(falsyが返される)
const resultA = "" && "foo";
const resultB = 2 && 1 && 0 && 3; //0がfolsyだから0が返される
const resultC = "foo" && 4;

console.log(resultA);
console.log(resultB); //falsyを出力させる構文
console.log(resultC);

// 理論和 (||) について(trusyが返される)
const resultD = "" || "foo";
const resultE = 0 || 2 || 0;
const resultF = "foo" || 4;

console.log(resultD);
console.log(resultE);
console.log(resultF);
