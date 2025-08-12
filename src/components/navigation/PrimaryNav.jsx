import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ui/ThemeToggle';
import MobileNav from '@/components/navigation/MobileNav';
import { useNavigation } from '@/hooks/useNavigation';


/***** MODULE STYLES *****/
import styles from './PrimaryNav.module.css';

export default function PrimaryNav() {
    const { filteredNavItems, isActiveLink } = useNavigation();

    return (
        <nav className={styles.primaryNav}>
            <Link to="/" className={styles.navLogoLink} aria-label="Go to homepage">
                <Logo />
            </Link>
            <ul className={styles.navList}>
                {filteredNavItems.map((item) => (
                    <li key={item.id} className={styles.navItem}>
                        <Link
                            to={item.href}
                            className={isActiveLink(item.href) ? styles.activeLink : ''}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
                <li className={styles.navItemToggle}>
                    <ThemeToggle />
                </li>
                <li className={styles.navItemMobile}>
                    <MobileNav />
                </li>
            </ul>
        </nav>
    );
};