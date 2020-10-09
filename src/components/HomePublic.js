import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ArticleCard from "./ArticleCard";

export default function HomePublic() {
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://mighty-oasis-08080.herokuapp.com/api/tags")
      .then((res) => res.json())
      .then((data) => console.log(data));
    fetch("https://mighty-oasis-08080.herokuapp.com/api/articles")
      .then((res) => res.json())
      .then(({ articles }) => {
        console.log(articles);
        setArticles(articles);
      });
  }, []);
  return (
    <div className="flex">
      <div className="articles-list w-3/4 py-5 mx-auto">
        {articles.length ? (
          articles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <div className="sidebar w-1/4 flex flex-col">
        {["tag1", "tag1", "tag1"].map((tag) => (
          <h2 key={tag}>tag</h2>
        ))}
      </div>
    </div>
  );
}
