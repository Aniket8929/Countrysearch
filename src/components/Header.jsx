import { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { Contextprovider } from "../context/context";
const Header = () => {
  const { setDark, dark } = useContext(Contextprovider)
  const toggle = () => {
    setDark((prev) => !prev)
  }
  return (
    <header>
      <h2 className="logo-title">Where in the world?</h2>
      <div className="dark-toggle" onClick={toggle}>{dark ? <FaMoon size={28} /> : <FiSun size={28} color="orange" />}
        <span>{`${dark ? "Dark" : "Light"} Mode`}  </span></div>
    </header>
  )
}

export default Header;