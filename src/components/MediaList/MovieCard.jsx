import CircularProgressBar from "./CircularProgressBar";

const MovieCard = () => {
  return (
    <div className="rounded-lg border border-slate-800">
      <img
        className="rounded-lg"
        src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/kOzwIr0R7WhaFgoYUZFLPZA2RBZ.jpg "
        alt=""
      />
      <div className="relative -top-[1.2vw] px-4">
        <CircularProgressBar />
        <p className="mt-2 font-bold">title</p>
        <p className="text-slate-300">ngay thang</p>
      </div>
    </div>
  );
};

export default MovieCard;
