import CircularProgressBar from "../CircularProgressBar";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ title, releaseDate, poster, point, mediaType, id }) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative rounded-lg border border-slate-800"
      onClick={() => navigate(`/movie/${id}`)}
    >
      {mediaType === "tv" && (
        <p className="absolute top-1 right-1 rounded bg-black p-1 text-sm text-white">
          TV Show
        </p>
      )}
      <img
        className="rounded-lg"
        src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${poster}`}
        alt=""
      />
      <div className="relative -top-[1.2vw] px-4">
        <CircularProgressBar
          percent={Math.round(point * 10)}
          strokeColor={point > 7 ? "green" : point > 5 ? "orange" : " red"}
        />
        <p className="mt-2 font-bold">{title}</p>
        <p className="text-slate-300">{releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
