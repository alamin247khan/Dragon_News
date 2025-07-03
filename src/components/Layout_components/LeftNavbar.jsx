import React, { useEffect, useState } from 'react'

export default function LeftNavbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
      .then(res => res.json())
      .then(data => {
        if (data.data && data.data.news_category) {
          setCategories(data.data.news_category);
        }
      });
  }, []);

  return (
    <div>
      <h2 className='font-bold'>All Caterogy ({categories.length})</h2>
      <div className='flex flex-col gap-2'>
        {categories.map(category => (
          <button className='bg-gray-50 hover:bg-gray-300 p-2 rounded' key={category.category_id}>
            {category.category_name}
          </button>
        ))}
      </div>
    </div>
  );
}
