import React, { use } from 'react';


const CategoryPromise = fetch("/public/categories.json").then((res)=>res.json());

const Categories = () => {
    const categories = use(CategoryPromise)
      return (
            <div>
                  <h2 className='font-bold'>All categories({categories.length})</h2>
            </div>
      );
};

export default Categories;