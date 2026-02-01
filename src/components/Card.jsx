import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Card = ({ data }) => {
  const { setSelectedCountry } = useAppContext();
  return (
    <Link
      to={`/detail/${data.name.common}`}
      onClick={() => setSelectedCountry(data)}
      aria-label={`View details for ${data.name.common}`}
    >
      <div className="w-[260px] rounded-xl overflow-hidden cursor-pointer bg-white shadow-sm transition-transform duration-200 hover:scale-105 transition-colors">
        <img
          src={data.flags.png}
          alt={data.name.common}
          className="w-full h-[150px] object-cover"
        />
        <div className="p-4 text-gray-800 dark:text-white">
          <h2 className="text-lg font-bold mb-2">{data.name?.common}</h2>
          <p className="text-sm my-1 ">
            <strong>Population:</strong> {data.population?.toLocaleString() || "N/A"}
          </p>
          <p className="text-sm my-1">
            <strong>Region:</strong> {data.region || "N/A"}
          </p>
          <p className="text-sm my-1">
            <strong>Capital:</strong> {data.capital?.join(", ") || "N/A"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
