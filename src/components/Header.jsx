import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { darkMode, setDarkMode } = useAppContext();
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <header className="flex items-center justify-between px-6 py-8 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Where in the world?
      </h1>
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle Dark Mode"
        disabled={true}

        className="flex items-center gap-2 text-gray-800 dark:text-white"
      >
        {darkMode ? <FaMoon size={24} className="text-gray-800 dark:text-white cursor-not-allowed" /> : <FiSun size={24} className="text-yellow-400" />}
      </button>
    </header>
  );
};

export default Header;
