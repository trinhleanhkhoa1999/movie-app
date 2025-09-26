import { useState } from "react";
import ActorInfo from "./ActorInfo";

const ActorList = ({ actors = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const currentActor = isShowMore ? actors.slice(0, 32) : actors.slice(0, 4);
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Actor</p>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {currentActor.map((actor) => {
          return (
            <ActorInfo
              key={actor.id}
              id={actor.id}
              name={actor.name}
              profilePath={actor.profile_path}
              character={actor.character}
              episodeCount={actor.episodeCount}
            />
          );
        })}
      </div>
      <p
        className="mt-4 inline-block cursor-pointer rounded-lg bg-slate-600 px-3 py-2 text-[1.3vw]"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? "Show Less" : "Show More Actors"}
      </p>
    </div>
  );
};

export default ActorList;
