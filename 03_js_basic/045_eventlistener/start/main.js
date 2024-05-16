const h1Element = document.querySelector("h1"); //htmlからdom（HTMLのタグ）を取得する方法
console.dir(h1Element);
console.log(h1Element.textContent);
//h1タグの中を変更したい場合
h1Element.textContent = "変更後のタイトル";

//クリックするとコンソールにHelloと表示されるやり方
const btnEl = document.querySelector("button");
btnEl.addEventListener("click", (e) => {
  //括弧内に入れるのはアクションのタイプ,実行したい関数
  console.dir(e.target.textContent); //「dir」はDom要素が見れる（今回の場合<button>の要素）,

  console.log("hello");
});
