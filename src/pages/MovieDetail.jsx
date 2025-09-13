import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMedia from "@components/MediaDetail/RelatedMedia";

const MovieDetail = () => {
  const { id } = useParams();
  // console.log("🚀 ~ MovieDetail ~ id:", id);
  const [movieInfo, setmovieInfo] = useState([]);
  const [relatedMovie, setRelatedMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoadingRelatedMovie, setIsLoadingRelatedMovie] = useState(false);
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
  useEffect(() => {
    setIsLoadingRelatedMovie(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDA5YTE3OGM2OWIyZTljY2ViYTZjZGU4YWJiNWFkMiIsIm5iZiI6MTczMTQwNTgxMC45MjcsInN1YiI6IjY3MzMyN2YyMDQwNTRkMzFkNGFjZWJkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NJ6lk6gTF2S8fOS8MeqSW4jberkXPPpscOQ5huKGZt4",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        // console.log("🚀 ~ MovieDetail ~ data:", data);
        const currentRelatedMovie = (data.results || []).slice(0, 12);
        setRelatedMovie(currentRelatedMovie);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoadingRelatedMovie(false);
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-4xl gap-6 px-6 py-10 xl:max-w-6xl">
          <div className="flex-2">
            <ActorList actors={movieInfo.credits?.cast} />
            <RelatedMedia
              mediaList={relatedMovie}
              setIsLoadingRelatedMovie={setIsLoadingRelatedMovie}
              isLoadingRelatedMovie={isLoadingRelatedMovie}
            />
          </div>
          <div className="flex-1">
            <p className="mb-4 text-[1.4vw] font-bold">information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
