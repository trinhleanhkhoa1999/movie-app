import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import CircularProgressBar from "../components/CircularProgressBar";
import { useParams } from "react-router-dom";
import { groupBy } from "lodash";
import Loading from "../components/Loading";

const MovieDetail = () => {
  const { id } = useParams();
  // console.log("🚀 ~ MovieDetail ~ id:", id);
  const [movieInfo, setmovieInfo] = useState([]);
  // console.log("🚀 ~ MovieDetail ~ movieInfo:", movieInfo);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDA5YTE3OGM2OWIyZTljY2ViYTZjZGU4YWJiNWFkMiIsIm5iZiI6MTczMTQwNTgxMC45MjcsInN1YiI6IjY3MzMyN2YyMDQwNTRkMzFkNGFjZWJkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NJ6lk6gTF2S8fOS8MeqSW4jberkXPPpscOQ5huKGZt4",
        },
      },
    )
      .then(async (res) => {
        const data = await res.json();
        // console.log("🚀 ~ MovieDetail ~ data:", data);
        setmovieInfo(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const certification = (
    (movieInfo.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((release_date) => release_date.certification)?.certification;

  const crews = (movieInfo?.credits?.crew || [])
    .filter((crew) => ["Director", "Writer", "Screenplay"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));
  console.log("🚀 ~ MovieDetail ~ crews:", crews);
  const groundedCrews = groupBy(crews, "job");
  console.log("🚀 ~ MovieDetail ~ groundedCrews:", groundedCrews);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="relative overflow-hidden text-white">
      <img
        className="absolute inset-0 brightness-[.2]"
        src={`https://media.themoviedb.org/t/p/original${movieInfo.backdrop_path}`}
        alt=""
      />
      <div className="relative mx-auto flex max-w-4xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          <img
            className=""
            src={`https://media.themoviedb.org/t/p/original${movieInfo.poster_path}`}
            alt=""
          />
        </div>
        <div className="flex-2 text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{movieInfo.title}</p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">
              {certification}
            </span>
            <p>{movieInfo.release_date}</p>
            <p>
              {(movieInfo?.genres || []).map((genre) => genre.name).join(", ")}
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
            <p>{movieInfo.overview}</p>
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

export default MovieDetail;
