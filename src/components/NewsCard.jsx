import React from "react";
import { FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    image_url,
    details,
    total_view,
    rating,
    author,
  } = news;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border">
      
      {/* Header */}
      <div className="flex items-center gap-3 p-4">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">{author.name}</p>
          <p className="text-sm text-gray-500">
            {new Date(author.published_date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 text-xl font-bold leading-snug">
        {title}
      </h2>

      {/* Image */}
      <div className="p-4">
        <img
          src={image_url}
          alt={title}
          className="w-full h-64 object-cover rounded-md"
        />
      </div>

      {/* Description */}
      <p className="px-4 text-gray-600 text-sm">
        {details.slice(0, 180)}...
        <span className="text-red-500 font-semibold cursor-pointer ml-1">
          Read More
        </span>
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-4 mt-3 border-t">
        
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-600 ml-2">
            {rating.number}.0
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
