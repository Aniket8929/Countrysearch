
const Card = ({data}) => {
  return (
    <div className="country-card">
      <img src={data.flag} alt="" className="country-flag" />
      <div className="country-info">
        <h2 className="country-name"><strong>Country Name:</strong> {data.name}</h2>
        <p><strong>Population:</strong>{data.population ? new Intl.NumberFormat("en-IN").format(Number(data.population.replace(/,/g, ""))) : "Not Available "}</p>
        <p><strong>Region:</strong> {data.region}</p>
        <p><strong>Capital:</strong> {data.capital}</p>
      </div>
    </div>
  )
}

export default Card;