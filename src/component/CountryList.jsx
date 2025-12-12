
import Card from "./Card";

const CountryList = ({ data }) => {
  return (
    <section className="card-wrapper">
      {data.map((item, id) => (
        <Card key={id} data={item} />
      ))}
    </section>
  );
};

export default CountryList;
