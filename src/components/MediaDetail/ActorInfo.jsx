import ImageComponent from "@components/ImageComponent";

const ActorInfo = ({ name, profilePath, character, episodeCount }) => {
  return (
    <div className="rounded-lg border border-slate-300 shadow-2xl">
      <ImageComponent
        className="rounded-md"
        src={
          profilePath
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face/${profilePath}`
            : `/noImage.svg`
        }
        alt=""
        width={276}
        height={350}
      />

      <div className="rounded-lg bg-black p-2">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        {episodeCount && <p>{episodeCount} Episodes</p>}
      </div>
    </div>
  );
};

export default ActorInfo;
