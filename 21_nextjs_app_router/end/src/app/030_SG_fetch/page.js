import { ENDPOINT } from "@/constants";
import ArticleList from "../../components/articleList";

export async function generateMetadata({ params }) {
  const articles = await fetch(ENDPOINT, { cache: "no-store" }).then((res) =>
    res.json()
  );
  return {
    title: articles.title,
    description: article.text,
  };
}

export const metadata = {
  title: "ページ一覧",
  description: "記事ページの一覧を表示します。",
};

export default async function Page() {
  const articles = await fetch(ENDPOINT, { cache: "no-store" }).then((res) =>
    res.json()
  );

  if (!articles) {
    return <div>データがありません。</div>;
  }

  return (
    <>
      <h3>フェッチ&SG</h3>
      <ArticleList basePath="/030_SG_fetch" list={articles} />
    </>
  );
}
