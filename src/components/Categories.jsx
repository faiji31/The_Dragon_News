import React, { use } from 'react';
import { NavLink } from 'react-router';


const CategoryPromise = fetch("/public/categories.json").then((res)=>res.json());

const Categories = () => {
    const categories = use(CategoryPromise)
      return (
            <div className='grid grid-cols-1 mt-5'>
                  <h2 className='font-bold'>All categories({categories.length})</h2>
                  {
                        categories.map(category=><NavLink key={category.id} className={"btn"}>{category.name}</NavLink>)
                  }
            </div>
      );
};

export default Categories;