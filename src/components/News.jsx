import { useState, useEffect } from "react";
import axios from "axios";

export const NewsData = () => {
  const [newsData, setNewsData] = useState();

  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=1`
      );

      setNewsData(res?.data?.articles[[0]]);
    };

    fetchNews();
  }, []);

  return (
    <div className="">
      <img
        src={newsData?.urlToImage}
        alt="newsImg"
        className="rounded-t-3xl h-80"
      />

      <div className="px-10 py-3 space-y-2">
        <h4 className="line-clamp-1 text-2xl">{newsData?.title}</h4>

        <p>Published at: {newsData?.publishedAt.slice(0, 10)}</p>
      </div>

      <div className="bg-white text-black h-52">
        <p className="px-10 py-4 line-clamp-6">{newsData?.description}</p>
      </div>
    </div>
  );
};
