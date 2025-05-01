

import { FaRegShareSquare, FaStar, FaEye } from "react-icons/fa";
import { format } from "date-fns";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";

export default function NewsCard({ news }) {
  return (
    <div className="card border-1 border-gray-400 p-3 bg-base-100 shadow-md max-w-md mx-auto">
      {/* Card Header */}
      <div className="flex bg-gray-100 rounded-2xl items-center justify-between  p-4">
        <div className="flex items-center gap-2">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-sm">{news.author.name}</div>
            <div className="text-xs text-gray-400">
              {format(new Date(news.author.published_date), "yyyy-MM-dd")}
            </div>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm">
          <CiBookmark className="text-lg text-gray-500" />
          <CiShare2 className="text-lg text-gray-500" />
        </button>
      </div>

      {/* Title */}
      <div className="px-4 pt-4 pb-1">
        <h2 className="card-title text-base leading-tight">{news.title}</h2>
      </div>

      {/* Image */}
      <figure>
        <img
          src={news.thumbnail_url}
          alt={news.title}
          className="w-full h-48 object-cover rounded-xl"
        />
      </figure>

      {/* Details */}
      <div className="p-4 pb-1 ">
        <div className="text-xs text-gray-500 mb-3  ">
          {format(new Date(news.author.published_date), "EEEE, MMMM d, yyyy")} | Tag Cloud:{" "}
          {news.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 text-gray-600 rounded px-2 py-0.5 mr-2 mt-2 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-700 line-clamp-2">{news.details.slice(0, 160)}...</p>
        <a href="#" className="text-orange-500 text-sm font-semibold block mt-1">
          Read More
        </a>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 pb-3 pt-2 border-t-1 border-gray-400">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`text-orange-400 ${
                i < Math.round(news.rating.number) ? "" : "opacity-30"
              }`}
            />
          ))}
          <span className="ml-1 text-sm font-semibold">{news.rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span className="text-sm">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
}

