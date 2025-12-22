import Header from "../components/Header"
import Search from "../components/Search"
import Dropdown from "../components/Dropdown"
import CountryList from "../components/CountryList"
import { useContext } from "react"
import { Contextprovider } from "../context/context"
import CountryCardShimmer from "../components/CountryCardShimmer"

function Home() {
  const { dark, ApiData, loader } = useContext(Contextprovider)
  return (
    <main className={`${dark ? "dark" : "light"}`}>
      <div className="wrapper">
        <Header></Header>
        <section className="search-wrapper">
          <Search></Search>
          <Dropdown></Dropdown>
        </section>
        <div className="card-wrapper">

          {
            !loader && new Array(8).fill(0).map((_, index) => <CountryCardShimmer key={index} />)
          }

          {loader && ApiData.length === 0 ? "No found" : <CountryList data={ApiData} ></CountryList>}
        </div>
      </div>
    </main>
  )
}
export default Home