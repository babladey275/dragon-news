import { AiFillStar, AiOutlineEye } from "react-icons/ai";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  return (
    <div className="card w-full bg-base-100 shadow-lg p-4 mb-6">
      <div className="flex items-center space-x-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">{news.author.name}</h2>
          <p className="text-sm text-gray-500">{news.published_date}</p>
        </div>
      </div>
      <h3 className="text-xl font-bold mt-4">{news.title}</h3>
      <img src={news.image_url} alt="" className="w-full mt-4 rounded-lg" />
      <p className="text-sm text-gray-700 mt-4">
        {news.details.slice(0, 150)}...
      </p>
      <button className="text-blue-600 font-semibold mt-2">Read More</button>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={
                i < Math.round(news.rating.number)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="ml-1 font-medium text-gray-800">
            {news.rating.number}
          </span>
          <span className="ml-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
            {news.rating.badge}
          </span>
        </div>
        <div className="flex items-center text-gray-500">
          <AiOutlineEye />
          <span className="ml-1">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
