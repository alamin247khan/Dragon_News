import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function LeftNavbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
      .then(res => res.json())
      .then(data => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h2 className='font-bold'>All Category ({categories.length})</h2>
      <div className='flex flex-col gap-2'>
        {categories.map((category) => (
          <NavLink to={`/category/${category.category_id}`} className='bg-gray-50 hover:bg-gray-300 p-2 rounded' key={category.category_id}>
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
