import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMedia from "@components/MediaDetail/RelatedMedia";
import useFetch from "@hooks/useFetch";
import TVShowInfomation from "@components/MediaDetail/TVShowInfomation";
import SeasonsList from "@components/MediaDetail/SeasonsList";

const TVShowDetail = () => {
  const { id } = useParams();

  const { data: tvInfo, isLoading } = useFetch({
    url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits,videos`,
  });
  console.log("🚀 ~ TVShowDetail ~ tvInfo:", tvInfo);

  const {
    data: recommandationsRelatedMovie,
    isLoading: isRecommandationLoading,
  } = useFetch({
    url: `/tv/${id}/recommendations`,
  });

  const relatedTVShow = recommandationsRelatedMovie.results || [];

  const certification = (tvInfo.content_ratings?.results || []).find(
    (result) => result.iso_3166_1 === "US",
  )?.rating;

  const crews = (tvInfo.aggregate_credits?.crew || [])
    .filter((crew) => {
      const jobs = (crew.jobs || []).map((j) => j.job);
      return ["Director", "Writer"].some((job) => jobs.find((j) => j === job));
    })
    .slice(0, 5)
    .map((crew) => ({ id: crew.id, job: crew.jobs[0].job, name: crew.name }));
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner
        title={tvInfo.name}
        backdropPath={tvInfo.backdrop_path}
        posterPath={tvInfo.poster_path}
        certification={certification}
        crews={crews}
        genres={tvInfo.genres}
        point={tvInfo.vote_average}
        releaseDate={tvInfo.first_air_date}
        overview={tvInfo.overview}
        trailerVideoKey={
          (tvInfo.videos?.results || []).find(
            (video) => video.type === "Trailer",
          )?.key
        }
      />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-4xl gap-6 px-6 py-10 xl:max-w-6xl">
          <div className="flex-2">
            <ActorList
              actors={(tvInfo.aggregate_credits?.cast || []).map((cast) => ({
                ...cast,
                character: cast.roles[0]?.character,
                episodeCount: cast.roles[0]?.episode_count,
              }))}
            />
            <SeasonsList seasons={tvInfo?.seasons || []} />
            <RelatedMedia
              mediaList={relatedTVShow}
              isLoading={isRecommandationLoading}
            />
          </div>
          <div className="flex-1">
            <TVShowInfomation tvInfo={tvInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShowDetail;
