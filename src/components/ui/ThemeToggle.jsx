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
            {...props}
        >
            {isDarkMode ? <FiSun size={14} className={styles.toggleSun} /> : <FiMoon size={14} />}
        </button>
    )
}

export default ThemeToggle;