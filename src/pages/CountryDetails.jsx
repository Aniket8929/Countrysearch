import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const CountryDetails = () => {
  const { selectedCountry, setSelectedCountry } = useAppContext();
  const navigate = useNavigate();
  return (
    <>
      {selectedCountry && (
        <div className="min-h-screen p-10 bg-gray-100">
          {/* Back Button */}
          <button
            className="px-4 py-2 mb-8 rounded-lg bg-white shadow hover:shadow-md transition cursor-pointer"
            onClick={() => {
              setSelectedCountry(null);
              navigate(-1);
            }}
          >
            ← Back
          </button>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Flag Section */}
            <div className="shrink-0">
              <img
                src={selectedCountry?.flags.png}
                alt={selectedCountry?.flags.alt || "flag image"}
                className="w-full max-w-105 rounded-lg shadow-lg"
              />

            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-5">{selectedCountry?.name.common}</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mb-8 text-base">
                <p>
                  <strong>Capital:</strong> {selectedCountry.capital[0]}
                </p>
                <p>
                  <strong>Region:</strong> {selectedCountry.region}
                </p>
                <p>
                  <strong>Sub Region:</strong> Southern Asia
                </p>
                <p>
                  <strong>Population:</strong>{" "}
                  {selectedCountry.population.toLocaleString()}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <strong>Border Countries:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {!selectedCountry.borders || selectedCountry.borders.length === 0
                    ? <span>No border</span>
                    : selectedCountry.borders.map((e, id) => (
                      <button className="cursor-pointer">
                        <span 
                        key={id} 
                        className="px-3 py-1 bg-gray-100 rounded shadow text-sm">
                          {e}
                        </span>
                      </button>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryDetails;
