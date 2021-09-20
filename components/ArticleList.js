import React from "react";
import articleStyle from "../styles/Article.module.css";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyle.grid}>
      {
        // map data
        articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))
      }
    </div>
  );
};

export default ArticleList;
