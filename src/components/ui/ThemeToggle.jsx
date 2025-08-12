import { useTheme } from "@/context/ThemeContext.jsx"
import { FiSun, FiMoon } from "react-icons/fi";

/***** MODULE STYLES *****/
import styles from "./ThemeToggle.module.css";

const ThemeToggle = ({ className, ...props }) => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className={`${styles.themeToggle} ${className || ''}`}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            {...props}
        >
            {isDarkMode ? <FiSun size={14} /> : <FiMoon size={14} />}
        </button>
    )
}

export default ThemeToggle;