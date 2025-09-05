import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PaginateIndicator from "./PaginateIndicator";

const Movie = () => {
  return (
    <div>
      <img
        src="https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/qg8Gv2w0dDL8cMsG2QO2hWp58wy.jpg"
        alt=""
        className="aspect-video brightness-50"
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">ten phim</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG 13
          </p>
          <p className="text-[1.2vw]">22-02-19</p>
        </div>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Over view</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quas
              dolorem ab aut veniam fuga ullam sapiente dolorum dicta
              dignissimos reprehenderit eum sed, vitae veritatis voluptate
              repudiandae qui vel molestiae!
            </p>
          </div>
          <div className="mt-2">
            <button className="text-10 mr-2 rounded bg-white px-4 py-2 text-black lg:text-lg">
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </button>
            <button className="text-10 rounded bg-slate-300/35 px-4 py-2 lg:text-lg">
              View detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
