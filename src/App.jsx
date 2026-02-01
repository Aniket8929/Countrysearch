import { Routes, Route } from "react-router-dom";
import CountryDetails from "./pages/CountryDetails"
import HomeLayout from "./pages/HomeLayout";
import ErrorPage from "./pages/ErrorPage"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/detail/:id" element={<CountryDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
