import { useContext } from "react";
import { Link } from "react-router-dom";
import { Contextprovider } from "../context/context";

const Card = ({ data }) => {

  const { setSelected } = useContext(Contextprovider)
  return <>
    <Link to={`/detail/:${data.name.common}`}> <div className="country-card" onClick={() => {
      setSelected(data)
    }} >
      <img src={data.flags.png} alt="" className="country-flag" />
      <div className="country-info">
        <h2 className="country-name"><strong>Country Name:</strong> {data.name.common}</h2>
        <p><strong>Population:</strong>{data.population ? data.population.toLocaleString() : "Not Available "}</p>
        <p><strong>Region:</strong> {data.region}</p>
        <p><strong>Capital:</strong> {data.capital.map(item => item)}</p>
      </div>
    </div>
    </Link>
  </>

}

export default Card;