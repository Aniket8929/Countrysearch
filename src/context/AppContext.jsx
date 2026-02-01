import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const BASE_URL = "https://restcountries.com/v3.1";

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/all?fields=name,flags,population,region,capital,borders`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      const randomCountries = data.sort(() => 0.5 - Math.random()).slice(0, 30);
      setCountries(randomCountries);
    } catch (err) {
      console.error("API error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  // Search countries by name
  const searchCountries = async (query) => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/name/${query}?fields=name,flags,population,region,capital`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setCountries(data);
    } catch (err) {
      console.error("API error:", err.message);
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  // Filter countries by region
  const filterByRegion = async (region) => {
    if (!region) return;
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/region/${region}?fields=name,flags,population,region,capital`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setCountries(data);
    } catch (err) {
      console.error("API error:", err.message);
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const contextValue = {
    darkMode,
    setDarkMode,
    searchQuery,
    setSearchQuery,
    countries,
    loading,
    selectedCountry,
    setSelectedCountry,
    searchCountries,
    filterByRegion,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
export default AppProvider;

export const useAppContext = () => useContext(AppContext);
