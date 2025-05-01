import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise=fetch('/categories.json')
.then((res)=>res.json())
const CategoryNews = () => {
    // console.log(categoryPromise);
    const categories=use(categoryPromise)
    
    return (
        <div className='grid grid-cols-1'>
          <h1 className='font-bold '>  All Categories-({categories.length} )</h1>
          {
            categories.map((category)=>(<NavLink>{category.name}</NavLink>))
          }
        </div>
    );
};

export default CategoryNews;