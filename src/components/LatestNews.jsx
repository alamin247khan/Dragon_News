import React from 'react'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

export default function LatestNews() {
  return (
    <div className='flex gap-2 items-center p-2 bg-gray-200'>
      <p className='bg-[#D72050] text-white px-4 py-2 rounded-[2px]'>Latest</p>
      <Marquee pauseOnHover={true} className='space-x-10'>
        <Link to="/news">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, ducimus!</Link>
        <Link to="/news">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, ducimus!</Link>
        <Link to="/news">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, ducimus!</Link>
        <Link to="/news">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, ducimus!</Link>
      </Marquee>
      <p></p>      
    </div>
  )
}