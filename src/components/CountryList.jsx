import Card from "./Card";

const CountryList = ({ data = [] }) => {
  return (
    <>
      {data.map((country) => (
        <Card key={country.name.common} data={country} />
      ))}
    </>
  );
};

export default CountryList;
