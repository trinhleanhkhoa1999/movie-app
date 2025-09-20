import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { groupBy } from "lodash";
import CircularProgressBar from "../CircularProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageComponent from "@components/ImageComponent";

const Banner = ({
  title,
  backdropPath,
  posterPath,
  certification,
  crews,
  genres,
  point,
  releaseDate,
  overview,
}) => {
  const groundedCrews = groupBy(crews, "job");
  return (
    <div className="relative overflow-hidden text-white shadow-sm shadow-slate-800">
      <ImageComponent
        width={900}
        height={500}
        className="absolute inset-0 h-full w-full brightness-[.2] sm:h-auto"
        src={`https://media.themoviedb.org/t/p/original${backdropPath}`}
        alt=""
      />
      <div className="relative mx-auto flex max-w-4xl gap-6 px-6 py-10 lg:gap-8 xl:max-w-6xl">
        <div className="flex-1">
          <ImageComponent
            width={600}
            height={900}
            className=""
            src={`https://media.themoviedb.org/t/p/original${posterPath}`}
            alt=""
          />
        </div>
        <div className="flex-2 text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{title}</p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">
              {certification}
            </span>
            <p>{releaseDate}</p>
            <p>{(genres || []).map((genre) => genre.name).join(", ")}</p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.round(point * 10) || 0}
                size="3.5"
                strokeWidth="0.3"
                strokeColor="green"
              />
              Rating
            </div>
            <div>
              <FontAwesomeIcon icon={faPlay} className="mr-1" />
              Trailer
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>{overview}</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-6">
            {Object.keys(groundedCrews).map((job) => {
              return (
                <div key={job}>
                  <p className="font-bold">{job}</p>
                  <p>
                    {groundedCrews[job].map((crew) => crew.name).join(", ")}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
