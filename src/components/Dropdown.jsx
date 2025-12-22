import { useContext } from "react";
import { useState } from "react";
import { Contextprovider } from "../context/context";

const Dropdown = () => {
  const [selected, setSelected] = useState("");
  const { dropdownHandles } = useContext(Contextprovider)

  const selectedquery = (e) => {
    setSelected(e.target.value);
    dropdownHandles(e.target.value)
  }


  return (
    <select value={selected} className="region-dropdown" onChange={selectedquery} >
      <option value="">Select Region</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}

export default Dropdown;