import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Header from "../Header";
import RightNavebar from "../Layout_components/RightNavebar";

export default function NewsDetails() {
  const { data } = useLoaderData();
  const news = data[0];

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-bold text-lg mb-5">Dragon News</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img 
              src={news.image_url} 
              alt={news.title} 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h1 className="text-2xl font-bold mb-4">{news.title}</h1>
            <p className="text-gray-600 mb-6">{news.details}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <img 
                  src={news.author.img} 
                  alt={news.author.name} 
                  className="w-8 h-8 rounded-full"
                />
                <span>{news.author.name}</span>
              </div>
              <span>{news.author.published_date}</span>
            </div>
            <Link 
              to={`/category/${news.category_id}`} 
              className="btn btn-error text-white mt-6"
            >
              ← All news in this category
            </Link>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavebar />
        </aside>
      </main>
    </div>
  );
}
