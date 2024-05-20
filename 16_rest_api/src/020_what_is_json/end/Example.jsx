const Example = () => {
  const usersData = [
    {
      id: 1,
      username: "hoge太郎",
      age: 20,
      hobbies: ["soccer"],
      premiumAccount: true,
    },
    {
      id: 2,
      username: "fuga太郎",
      age: 17,
      hobbies: ["カメラ"],
      premiumAccount: false,
    },
    {
      id: 3,
      username: "piyo太郎",
      age: 20,
      hobbies: ["筋トレ"],
      premiumAccount: true,
    },
  ];

  // JSON.stringify = オブジェクトや配列をJSON形式の文字列に変換する（上のコードがJSON形式へ）
  const usersDataString = JSON.stringify(usersData);

  // JSON形式の文字列が出力される（文字列かの確認）
  console.log(typeof usersDataString === "string");

  // JSON形式の文字列をJavaScriptが認識できる形に変換する（JSON.parse）
  console.log(JSON.parse(usersDataString));
};

export default Example;
