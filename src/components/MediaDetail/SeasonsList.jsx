import CircularProgressBar from "@components/CircularProgressBar";
import ImageComponent from "@components/ImageComponent";
import { useState } from "react";

const SeasonsList = ({ seasons = [] }) => {
  console.log("🚀 ~ SeasonsList ~ seasons:", seasons);
  const [isShowMore, setIsShowMore] = useState(false);
  const currentSeasons = isShowMore ? seasons.slice(0) : seasons.slice(0, 2);

  return (
    <div className="mt-8 text-[1.3vw]">
      <p className="mb-4 text-[1.4vw] font-bold">Seasons</p>
      <div className="space-y-4">
        {currentSeasons.map((season) => (
          <div
            key={season.id}
            className="flex gap-4 rounded-lg border border-slate-200 p-3 shadow-md"
          >
            <div>
              <ImageComponent
                width={130}
                height={195}
                src={
                  season.poster_path &&
                  `https://media.themoviedb.org/t/p/w130_and_h195_face${season.poster_path}`
                }
                className="h-[195px] max-w-[300px] rounded-lg"
              />
            </div>
            <div className="space-y-1">
              <p className="text-[1.4vw] font-bold">Season {season.name}</p>
              <div className="flex items-center gap-2">
                <p className="font-bold">Rating</p>
                <CircularProgressBar
                  percent={Math.round(season.vote_average * 10)}
                  size={2.5}
                  strokeWidth={0.2}
                />
              </div>
              <p>
                <span className="font-bold">Release Date:</span>{" "}
                {season.air_date}
              </p>
              <p>{season.episode_count} Episodes</p>
              <p>{season.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <p
        className="mt-4 inline-block cursor-pointer rounded-lg bg-slate-600 px-3 py-2 text-[1.3vw]"
        onClick={() => {
          setIsShowMore(!isShowMore);
        }}
      >
        {isShowMore ? "Show Less" : "Show More Seasons"}
      </p>
    </div>
  );
};

export default SeasonsList;
