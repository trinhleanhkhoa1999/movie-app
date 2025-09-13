import MovieCard from "@components/MovieCard";

const RelatedMedia = ({ mediaList = [] }) => {
  return (
    <div>
      <p className="mt-4 mb-4 text-[1.4vw] font-bold">Related Movie</p>
      <div className="grid grid-cols-3 gap-6 sm:grid-cols-4">
        {mediaList.map((media) => {
          return (
            <MovieCard
              key={media.id}
              title={media.title}
              releaseDate={media.release_date}
              poster={media.poster_path}
              point={media.vote_average}
              mediaType={media.media_type}
              id={media.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedMedia;
