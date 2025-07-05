import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { FaStar, FaEye } from "react-icons/fa";
export default function CategoryNews() {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <div>
      <h2 className="font-bold text-lg my-5">Dragon News Home</h2>
      <p className="text-gray-500 mb-6">
        {news.length} news found in this category.
      </p>
      <div className="space-y-6">
        {news.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden"
          >
            {/* Author and Date */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center space-x-3">
                <img
                  src={item.author.img}
                  alt={item.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-gray-800 font-semibold text-sm">
                    {item.author.name}
                  </h4>
                  <p className="text-gray-500 text-xs">
                    {item.author.published_date}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <button className="hover:text-gray-700">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
                <button className="hover:text-gray-700">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2h-2M7 8H5a2 2 0 00-2 2v10a2 2 0 002 2h2m5-12v12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* News Content */}
            <img
              src={item.image_url}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                {item.details}
              </p>

              {/* Read More */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link 
                  to={`/news/${item._id}`} 
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center text-gray-600 text-sm mt-4">
                <div className="flex items-center gap-1 text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                  <span className="text-gray-700 ml-2">
                    {item.rating?.number || "4.9"}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <FaEye size={16} />
                  <span>{item.total_view || "499"}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
