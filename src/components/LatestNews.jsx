import React from "react";
import "./LatestNews.css";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <div className="marquee-container flex-1">
        <p className="marquee-text font-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, harum.
        </p>
        
        
      </div>
      
    </div>
  );
};

export default LatestNews;
