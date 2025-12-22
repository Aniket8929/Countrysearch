import Card from "./Card";
const CountryList = ({ data }) => {
  return (
    <>
      {data?.map((item, id) => (
        <Card key={id} data={item}/>
      ))}
    </>
  );
};

export default CountryList;
