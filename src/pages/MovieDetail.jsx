import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMedia from "@components/MediaDetail/RelatedMedia";
import MovieInfomation from "@components/MediaDetail/MovieInfomation";
import useFetch from "@hooks/useFetch";

const MovieDetail = () => {
  const { id } = useParams();

  const { data: movieInfo, isLoading } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits`,
  });

  const {
    data: recommandationsRelatedMovie,
    isLoading: isRelatedMoviesLoading,
  } = useFetch({
    url: `/movie/${id}/recommendations`,
  });
  console.log(
    "🚀 ~ MovieDetail ~ recommandationsRelatedMovie:",
    recommandationsRelatedMovie,
  );
  const relatedMovie = recommandationsRelatedMovie.results || [];

  if (isLoading) {
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
              isLoading={isRelatedMoviesLoading}
            />
          </div>
          <div className="flex-1">
            <MovieInfomation movieInfo={movieInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
