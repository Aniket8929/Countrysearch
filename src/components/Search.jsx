import { useAppContext } from "../context/AppContext";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

const Search = () => {
  const { searchQuery, searchCountries } = useAppContext();
  const [localQuery, setLocalQuery] = useState(searchQuery);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (localQuery.trim()) searchCountries(localQuery.trim());
    }, 500);

    return () => clearTimeout(timeout);
  }, [localQuery]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-4 px-5 py-3 w-full max-w-md rounded-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <FaSearch className="text-gray-400 dark:text-gray-300" />
      <input
        type="text"
        placeholder="Search for a country..."
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        aria-label="Search for a country"
        className="w-full bg-transparent py-2 outline-none text-base placeholder-gray-400 dark:placeholder-gray-500"
      />
    </form>
  );
};

export default Search;
