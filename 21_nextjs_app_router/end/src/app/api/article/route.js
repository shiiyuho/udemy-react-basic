// API Routes
// https://nextjs.org/docs/app/api-reference/file-conventions/route
import { ENDPOINT } from "@/constants";

export async function GET() {
  const data = await fetch(ENDPOINT).then((res) => res.json());
  return Response.json(data);
}

export async function POST(request) {
  const formData = await request.formData();
  //idとtitleに記入された値の出力
  const id = formData.get("id");
  const title = formData.get("title");

  //idかtitleが空だった時にerrorを表示する（500番で）
  if (id === "" || title === "") {
    return Response.json({ msg: "入力フィールドが空です。" }, { status: 500 });
  }
  try {
    //データがJsonサーバーに対して登録されるコード
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title }),
    });
    //jsonサーバーからけってきたJsonをレスポンスとしてAPIの戻り値にする
    const data = await res.json();
    return Response.json(data);
    //エラーが起こったときに知らせる処理
  } catch (e) {
    return Response.json({ msg: "登録に失敗しました。" }, { status: 500 });
  }
}
