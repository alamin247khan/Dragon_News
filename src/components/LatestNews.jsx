import React, { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

export default function LatestNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
      .then(res => res.json())
      .then(data => setNews(data.data.slice(0, 4)));
  }, []);

  return (
    <div className='flex gap-2 items-center p-2 bg-gray-200'>
      <p className='bg-[#D72050] text-white px-4 py-2 rounded-[2px]'>Latest</p>
      <Marquee pauseOnHover={true} className='space-x-10'>
        {news.map((item, index) => (
          <Link key={index} to={`/news/${item._id}`} className='mr-5 font-semibold text-gray-800 hover:text-blue-600 transition-colors'>
            {item.title}
          </Link>
        ))}
      </Marquee>
    </div>
  )
}