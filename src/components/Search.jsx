import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { Contextprovider } from "../context/context";

const Search = () => {
  const { setquery, query, searchHandles } = useContext(Contextprovider)
  const Searchquery = (e) => {
    setquery(e.target.value)
  }
  return (
    <form className="search-box" onSubmit={(e) => {
      e.preventDefault()
      searchHandles(query)
    }}>
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={query}
        onChange={Searchquery}
      />
    </form>
  )
}

export default Search;