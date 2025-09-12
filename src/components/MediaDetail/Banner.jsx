import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { groupBy } from "lodash";
import CircularProgressBar from "../CircularProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = ({ mediaInfo }) => {
  const certification = (
    (mediaInfo.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((release_date) => release_date.certification)?.certification;

  const crews = (mediaInfo?.credits?.crew || [])
    .filter((crew) => ["Director", "Writer", "Screenplay"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));
  const groundedCrews = groupBy(crews, "job");
  return (
    <div className="relative overflow-hidden text-white">
      <img
        className="absolute inset-0 brightness-[.2]"
        src={`https://media.themoviedb.org/t/p/original${mediaInfo.backdrop_path}`}
        alt=""
      />
      <div className="relative mx-auto flex max-w-4xl gap-6 px-6 py-10 lg:gap-8 xl:max-w-6xl">
        <div className="flex-1">
          <img
            className=""
            src={`https://media.themoviedb.org/t/p/original${mediaInfo.poster_path}`}
            alt=""
          />
        </div>
        <div className="flex-2 text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{mediaInfo.title}</p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">
              {certification}
            </span>
            <p>{mediaInfo.release_date}</p>
            <p>
              {(mediaInfo?.genres || []).map((genre) => genre.name).join(", ")}
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent="90"
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
            <p>{mediaInfo.overview}</p>
          </div>
          <div className="mt-4 grid grid-cols-2">
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
