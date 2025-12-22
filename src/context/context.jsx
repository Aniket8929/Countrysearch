import { createContext, useEffect, useState } from "react";

export const Contextprovider = createContext()


const Userprovider = ({ children }) => {
  const [dark, setDark] = useState(false)
  const [query, setquery] = useState("");
  const [ApiData, setApiData] = useState([])
  const [loader, setloader] = useState(false);
  const [selected, setSelected] = useState(null)
  useEffect(() => {
    const baseUrl = `https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital`;
    fetch(baseUrl).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
      .then((data) => {
        setApiData(data);
        setloader(true);
      })
      .catch(err => {
        console.error("API error", err.message);
      })
  }, [])

  const searchHandles = (value) => {
    if (value?.length < 0) return ""
    setloader(false)
    const baseUrl = `https://restcountries.com/v3.1/name/${value}?fields=name,flags,population,region,capital`;
    fetch(baseUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setApiData(data);
        setloader(true)
      })
      .catch(err => {
        console.error("API error", err.message);
      })
  }

  const dropdownHandles = (region) => {
    if (region?.length < 0) return
    setloader(false)
    const baseUrl = `https://restcountries.com/v3.1/region/${region}?fields=name,flags,population,region,capital`; fetch(baseUrl)
    fetch(baseUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`"No data from server": ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setApiData(data);
        setloader(true)
      })
      .catch(err => {
        console.error("API error", err.message);
      })
  }
  const data = {
    dark,
    selected,
    setSelected,
    setDark,
    query,
    setquery,
    ApiData,
    loader,
    searchHandles,
    dropdownHandles
  }
  return <Contextprovider.Provider value={data}>
    {
      children
    }
  </Contextprovider.Provider>
}
export default Userprovider;
