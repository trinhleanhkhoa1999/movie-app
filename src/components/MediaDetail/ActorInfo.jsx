const ActorInfo = ({ name, profilePath, character }) => {
  return (
    <div className="rounded-lg border border-slate-300 shadow-2xl">
      <img
        className="rounded-md"
        src={
          profilePath
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face/${profilePath}`
            : `/noImage.svg`
        }
        alt=""
      />

      <div className="rounded-lg bg-black p-2">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        {/* <p>16 ex</p> */}
      </div>
    </div>
  );
};

export default ActorInfo;
