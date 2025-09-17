import { useEffect, useState } from "react";
import useFetch from "@hooks/useFetch";
import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";

const FeatureMovie = () => {
  // const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();

  const { data: popularMoviesResponse } = useFetch({
    url: "/movie/popular",
  });
  const movies = (popularMoviesResponse.results || []).slice(0, 4);

  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieId(movies[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(movies)]);

  // Auto next movie every 5s
  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setActiveMovieId((prevId) => {
        const currentIndex = movies.findIndex((m) => m.id === prevId);
        const nextIndex = (currentIndex + 1) % movies.length;
        return movies[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval); // cleanup
  }, [movies]);

  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => {
          return <Movie key={movie.id} data={movie} />;
        })}

      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};

export default FeatureMovie;
