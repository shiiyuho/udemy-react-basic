// 非同期処理（Promise）
let a = 0;

//await
init();
async function init() {
  //asyncを付ける
  try {
    const rezult = await new Promise((resolve, reject) => {
      setTimeout(() => {
        a = 1;
        resolve(a); //例外処理
      }, 2000);
    });
    console.log(rezult);
  } catch (e) {}

  // }).catch((c) => {
  //     console.log('catchが実行', c)
  // })
  //  }
}
