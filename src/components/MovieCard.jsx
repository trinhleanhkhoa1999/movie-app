import CircularProgressBar from "./CircularProgressBar";
import { Link } from "react-router-dom";

const MovieCard = ({ title, releaseDate, poster, point, mediaType, id }) => {
  return (
    <Link to={`movie/${id}`} className="rounded-lg border border-slate-800">
      <div className="relative">
        {mediaType === "tv" && (
          <p className="absolute top-1 right-1 rounded bg-black p-1 text-sm text-white">
            TV Show
          </p>
        )}
        <img
          className="rounded-lg"
          src={
            poster
              ? `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${poster}`
              : "/noImage.svg"
          }
          alt=""
        />
        <div className="relative -top-[1.2vw] px-4">
          <CircularProgressBar
            percent={Math.round(point * 10) || 0}
            strokeColor={point > 7 ? "green" : point > 5 ? "orange" : " red"}
          />
          <p className="mt-2 font-bold">{title}</p>
          <p className="text-slate-300">{releaseDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
