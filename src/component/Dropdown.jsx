import { useState } from "react";

const Dropdown = () => {
  const [selected, setSelected] = useState("");
  const  selectedquery = (e)=>{
    setSelected(e.target.value)
  }
  return (
    <select value={selected} className="region-dropdown"  onChange={selectedquery}>
      <option value="">Select Region</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="australia">Australia</option>
    </select>
  )
}

export default Dropdown;