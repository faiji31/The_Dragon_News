import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';


const CategoryNews = () => {
      const {id} = useParams()
      const data = useLoaderData();

      const [categoryNews,setCategoryNews]=useState([]);

      useEffect(()=>{
            const filterNews = data.filter(news=>news.category_id==id);
            console.log(filterNews);

            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCategoryNews(filterNews);
      },[data,id])
      return (
            <div>
                  Total CategoryNews-{categoryNews.length} found
            </div>
      );
};

export default CategoryNews;