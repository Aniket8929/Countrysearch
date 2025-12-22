import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import CountryDetails from "./pages/CountryDetails"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<CountryDetails />} />
      </Routes>
    </>
  )
}

export default App
