import ImageComponent from "@components/ImageComponent";
import { Link } from "react-router-dom";

const ActorInfo = ({ id, name, profilePath, character, episodeCount }) => {
  return (
    <Link
      to={`/people/${id}`}
      className="rounded-lg border border-slate-300 shadow-2xl"
    >
      <ImageComponent
        className="rounded-md"
        src={
          profilePath &&
          `https://media.themoviedb.org/t/p/w276_and_h350_face/${profilePath}`
        }
        alt=""
        width={276}
        height={350}
      />

      <div className="rounded-lg bg-black p-2">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        {episodeCount && <p>{episodeCount} Episodes</p>}
      </div>
    </Link>
  );
};

export default ActorInfo;
