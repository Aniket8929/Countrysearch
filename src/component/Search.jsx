import { FaSearch } from "react-icons/fa";

const Search = ({ query, setquery }) => {
  const Searchquery = (e) => {
    setquery(e.target.value)
  }
  return (
    <div className="search-box">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={query}
        onChange={Searchquery}
      />
    </div>
  )
}

export default Search;