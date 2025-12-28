import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCategoryNews(data);
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      console.log(filterNews);

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCategoryNews(filterNews);
    }
  }, [data, id]);
  return (
    <div className="">
      <h3 className="font-bold">
        Total CategoryNews-{" "}
        <span className="text-secondary">{categoryNews.length}</span> found
      </h3>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
