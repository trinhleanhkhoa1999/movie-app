import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Banner from "../components/MediaDetail/Banner";

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

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner mediaInfo={movieInfo} />
    </div>
  );
};

export default MovieDetail;
