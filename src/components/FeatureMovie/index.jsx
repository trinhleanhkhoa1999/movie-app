import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

const FeatureMovie = () => {
  return (
    <div className="relative text-white">
      <Movie />
      <PaginateIndicator />
    </div>
  );
};

export default FeatureMovie;
