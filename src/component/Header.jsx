
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
const Header = ({isDark, setIsDark}) => {
  const toggle = () => {
    setIsDark(!isDark)
  }
  return (
    <header>
      <h2 className="logo-title">Where in the world?</h2>
      <div className="dark-toggle"  onClick={toggle}>{isDark ? <FaMoon size={28} /> : <FiSun size={28} color="orange" />}
      <span>{`${isDark ? "Dark": "Light"} Mode`}  </span></div>
    </header>
  )
}

export default Header;