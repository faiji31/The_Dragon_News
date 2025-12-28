import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';


const CategoryNews = () => {
      const {id} = useParams()
      const data = useLoaderData();

      const [categoryNews,setCategoryNews]=useState([]);

      useEffect(()=>{
            if(id== "0"){
                  // eslint-disable-next-line react-hooks/set-state-in-effect
                  setCategoryNews(data)
            }
            else if(id =="1"){
                  const filterNews = data.filter(news=>news.others.is_today_pick== true);
                  setCategoryNews(filterNews);
            
            }
            else{
                 const filterNews = data.filter(news=>news.category_id==id);
            console.log(filterNews);

            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCategoryNews(filterNews);
            }
           
      },[data,id])
      return (
            <div>
                  Total CategoryNews-{categoryNews.length} found
            </div>
      );
};

export default CategoryNews;