import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MediaList = ({ title, tabs }) => {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  useEffect(() => {
    const url = tabs.find((tab) => tab.id === activeTabId)?.url;
    if (url) {
      fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDA5YTE3OGM2OWIyZTljY2ViYTZjZGU4YWJiNWFkMiIsIm5iZiI6MTczMTQwNTgxMC45MjcsInN1YiI6IjY3MzMyN2YyMDQwNTRkMzFkNGFjZWJkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NJ6lk6gTF2S8fOS8MeqSW4jberkXPPpscOQ5huKGZt4",
        },
      }).then(async (res) => {
        const data = await res.json();
        console.log("🚀 ~ MediaList ~ data:", data);
        const trendingMediaList = data.results.slice(0, 12);
        setMediaList(trendingMediaList);
      });
    }
  }, [activeTabId, tabs]);
  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      {/* tabslist */}
      <div className="mb-4 flex items-center gap-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex items-center gap-4 rounded-md border border-white">
          {tabs.map((tab) => {
            return (
              <li
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`cursor-pointer rounded px-2 py-1 ${tab.id === activeTabId ? "bg-white text-black" : ""}`}
              >
                {tab.name}
              </li>
            );
          })}
          {/* <li className="cursor-pointer rounded bg-white px-2 py-1 text-black">
            All
          </li>
          <li className="cursor-pointer rounded px-2 py-1">Movie</li>
          <li className="cursor-pointer rounded px-2 py-1">TV Show</li> */}
        </ul>
      </div>
      {/* movie card */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-6">
        {mediaList.map((media) => {
          return (
            <MovieCard
              key={media.id}
              title={media.title || media.name}
              releaseDate={media.release_date || media.first_air_date}
              poster={media.poster_path}
              point={media.vote_average}
              mediaType={media.media_type || activeTabId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MediaList;
