import { useAppContext } from "../context/AppContext";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Dropdown = () => {
  const { filterByRegion } = useAppContext();

  return (
    <select
      onChange={(e) => filterByRegion(e.target.value)}
      className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm hover:shadow-md transition-shadow duration-200"
      aria-label="Filter by region"
    >
      <option value="">Filter by Region</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
