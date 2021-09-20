import React from "react";
import ArticleStyle from "../styles/Article.module.css";
import Link from "next/link";

const ArticleCard = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={ArticleStyle.card}>
        <h2>{article.title} &rarr;</h2>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleCard;
