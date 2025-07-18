import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo.jsx';
import ThemeToggle from '@/components/ui/ThemeToggle';

/***** MODULE STYLES *****/
import styles from '../../components/navigation/PrimaryNav.module.css';

export default function PrimaryNav() {
    const location = useLocation();

    const isActiveLink = (path) => {
        if (path === '/' && location.pathname === '/') return true;
        return path !== '/' && location.pathname.startsWith(path);
    };

    return (
        <nav className={styles.primaryNav}>
            <Link to="/" className={styles.navLogoLink}>
                <Logo />
            </Link>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link to="/activities" className={isActiveLink('/activities') ? styles.activeLink : ''}>
                        Activities
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/gear" className={isActiveLink('/gear') ? styles.activeLink : ''}>
                        Gear
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <ThemeToggle />
                </li>
            </ul>
        </nav>
    )
};