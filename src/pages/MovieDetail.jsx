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
    url: `/movie/${id}?append_to_response=release_dates,credits,videos`,
  });

  const {
    data: recommandationsRelatedMovie,
    isLoading: isRelatedMoviesLoading,
  } = useFetch({
    url: `/movie/${id}/recommendations`,
  });

  const relatedMovie = recommandationsRelatedMovie.results || [];

  if (isLoading) {
    return <Loading />;
  }
  const certification = (
    (movieInfo.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((release_date) => release_date.certification)?.certification;

  const crews = (movieInfo?.credits?.crew || [])
    .filter((crew) => ["Director", "Writer", "Screenplay"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

  return (
    <div>
      <Banner
        title={movieInfo.title}
        backdropPath={movieInfo.backdrop_path}
        posterPath={movieInfo.poster_path}
        certification={certification}
        crews={crews}
        genres={movieInfo.genres}
        point={movieInfo.vote_average}
        releaseDate={movieInfo.release_date}
        overview={movieInfo.overview}
        trailerVideoKey={
          (movieInfo.videos?.results || []).find(
            (video) => video.type === "Trailer",
          )?.key
        }
      />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="container">
          <div className="flex-2">
            <ActorList actors={movieInfo.credits?.cast} />
            <RelatedMedia
              mediaList={relatedMovie}
              isLoading={isRelatedMoviesLoading}
              title="More Like This"
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
