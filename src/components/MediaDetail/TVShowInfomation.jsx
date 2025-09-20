// import { currencyFormatted } from "@libs/utils";

const TVShowInfomation = ({ tvInfo = {} }) => {
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4">
        <div className="mb-4">
          <p className="font-bold">Original Name</p>
          <p>{tvInfo.original_name}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Original Country</p>
          {(tvInfo.origin_country || []).map((countryCode) => (
            <img
              key={countryCode}
              src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
              className="mt-1 mr-1 inline-block w-[1.4vw]"
            />
          ))}
        </div>
        <div className="mb-4">
          <p className="font-bold">Status</p>
          <p>{tvInfo.status}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Network</p>
          <p>
            {(tvInfo.networks || []).map((network) => {
              return (
                <img
                  className="mt-1 invert"
                  key={network.id}
                  src={`https://media.themoviedb.org/t/p/h30${network.logo_path}`}
                />
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TVShowInfomation;
