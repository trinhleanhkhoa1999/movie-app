import ImageComponent from "@components/ImageComponent";
import { useModalContext } from "@context/ModalProvider";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Movie = (props) => {
  const {
    data: { backdrop_path, title, release_date, overview },
    trailerVideoKey,
  } = props;
  const { setContent, setIsShowing } = useModalContext();
  return (
    <div>
      <ImageComponent
        width={900}
        height={500}
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt=""
        className="aspect-video w-full brightness-50"
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{title}</p>
        <div>
          {/* <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG 13
          </p> */}
          <p className="text-[1.2vw]">{release_date}</p>
        </div>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Over view</p>
            <p>{overview}</p>
          </div>
          <div className="mt-2">
            <button
              className="text-10 mr-2 rounded bg-white px-4 py-2 text-black lg:text-lg"
              onClick={() => {
                (setContent(
                  <iframe
                    title="Trailer"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                    className="w-[50vw]"
                  />,
                ),
                  setIsShowing(true));
              }}
            >
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
