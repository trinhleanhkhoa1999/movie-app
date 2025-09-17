import { useState } from "react";
import useFetch from "@hooks/useFetch";
import MovieCard from "@components/MovieCard";

const MediaList = ({ title, tabs }) => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const url = tabs.find((tab) => tab.id === activeTabId)?.url;

  const { data } = useFetch({
    url,
  });
  const mediaList = (data.results || []).slice(0, 12);

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
              id={media.id}
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
