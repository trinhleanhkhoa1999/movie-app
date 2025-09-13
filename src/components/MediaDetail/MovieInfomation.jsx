import { currencyFormatted } from "@libs/utils";

const MovieInfomation = ({ movieInfo = {} }) => {
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4">
        <div className="mb-4">
          <p className="font-bold">Original Name</p>
          <p>{movieInfo.original_title}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Original Country</p>
          {(movieInfo.origin_country || []).map((countryCode) => (
            <img
              key={countryCode}
              src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
              className="mt-1 mr-1 w-[1.4vw]"
            />
          ))}
        </div>
        <div className="mb-4">
          <p className="font-bold">Status</p>
          <p>{movieInfo.status}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Budget</p>
          <p>{currencyFormatted(movieInfo.budget)}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">revenue</p>
          <p>{currencyFormatted(movieInfo.revenue)}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfomation;
