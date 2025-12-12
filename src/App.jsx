import { useState } from "react"
import Header from "./component/Header"
import Search from "./component/search"
import Dropdown from "./component/Dropdown"
import CountryList from "./component/CountryList"
// import products from "../products.json"
import products from "./products.json"

function App() {
  const [isDark, setIsDark] = useState(false);
  const [query, setquery] = useState("");

  const filteredProducts = products.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  })

  return (
    <main className={`${isDark ? "dark" : "light"}`}>
      <div className="wrapper">
        <Header isDark={isDark} setIsDark={setIsDark}></Header>
        <section className="search-wrapper">
          <Search query={query} setquery={setquery} ></Search>
          <Dropdown></Dropdown>
        </section>
        {products.length === 0 ? "No found" : <CountryList data={filteredProducts} ></CountryList>}
      </div>

    </main>
  )
}

export default App
