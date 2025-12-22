import { useContext } from "react";
import "./CountryDetails.css"
import { Contextprovider } from "../context/context";
import { useNavigate } from "react-router-dom";
const CountryDetails = () => {
  const { selected, setSelected } = useContext(Contextprovider);
  const Navigate = useNavigate()
  return <>
    {selected &&
      <div className="country-details-page">
        <button className="back-btn"
          onClick={() => {
            setSelected(null);
            Navigate(-1)
          }}>← Back</button>
        <div className="details-container">
          <div className="flag-section">
            <img
              src={selected.flags.png}
              alt="Country Flag"
            />
          </div>

          <div className="info-section">
            <h1>{selected.name.common}</h1>
            <div className="info-grid">
              <p><strong>Capital:</strong>{selected.capital[0]}</p>
              <p><strong>Region:</strong> {selected.region}</p>
              <p><strong>Sub Region:</strong>Southern Asia</p>
              <p><strong>Population:</strong> {selected.population.toLocaleString()}</p>
            </div>
            <div className="borders">
              <strong>Border Countries:</strong>
              <div className="border-list">
                <span>PAK</span>
                <span>CHN</span>
                <span>NPL</span>
                <span>BTN</span>
              </div>
            </div>
          </div>
        </div>
      </div>}
  </>
};

export default CountryDetails;
