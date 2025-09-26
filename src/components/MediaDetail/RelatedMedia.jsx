import Loading from "@components/Loading";
import MovieCard from "@components/MovieCard";

const RelatedMedia = ({ mediaList = [], isLoading = false, title }) => {
  return (
    <div>
      <p className="mt-4 mb-4 text-[1.4vw] font-bold">{title}</p>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {mediaList.map((media) => {
            return (
              <MovieCard
                key={`${media.media_type}-${media.id}`}
                title={media.title || media.name}
                releaseDate={media.release_date || media.first_air_date}
                poster={media.poster_path}
                point={media.vote_average}
                mediaType={media.media_type}
                id={media.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RelatedMedia;
