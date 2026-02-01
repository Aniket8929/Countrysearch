
import CountryCardShimmer from "../components/CountryCardShimmer";
import Header from "../components/Header";
import Search from "../components/Search";
import Dropdown from "../components/Dropdown";
import CountryList from "../components/CountryList";
import { useAppContext } from "../context/AppContext";
const HomeLayout = () => {
  const { countries, loading } = useAppContext();
  return (
    <div className="bg-white dark:bg-black">

      <div className={`max-w-7xl w-full md:p-3 mx-auto`}>
        <Header />
        <section className="flex items-center justify-between my-4">
          <Search />
          <Dropdown />
        </section>
        <section
          className="mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
        >
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => <CountryCardShimmer key={index} />)
          ) : countries.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-300">
              No countries found
            </p>
          ) : (
            <CountryList data={countries} />
          )}
        </section>
      </div>
    </div>
  );
};

export default HomeLayout;
