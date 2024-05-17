"use Client";
import ArticleList from "@/components/articleList";
import "./lib";
import { ENDPOINT } from "@/constants";
import ArticleList from "@/components/articleList";

export default async function SSR() {
  const article = await featch(ENDPOINT, {
    cache: "force-cache",
  }).them((res) => res.json());
  return (
    <>
      <div>SSR Page</div>
      <div>{state}</div>
      <ClientComp />
      <ArticleList list={articles} basePath="/010_SSR" />
    </>
  );
}
