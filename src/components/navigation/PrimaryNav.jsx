import styles from '../../components/navigation/PrimaryNav.module.css';
import Logo from '../Logo.jsx';

export default function PrimaryNav() {

    return (
        <nav className={styles.primaryNav}>
                <Logo />
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <a href="/explore" className={styles.navLink}>Explore</a>
                </li>
                <li className={styles.navItem}>
                    <a href="/trails" className={styles.navLink}>Trails</a>
                </li>
                <li className={styles.navItem}>
                    <a href="/about" className={styles.navLink}>About</a>
                </li>
            </ul>
        </nav>
    )
};