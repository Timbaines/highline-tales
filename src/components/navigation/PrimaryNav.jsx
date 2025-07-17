import Logo from '../Logo.jsx';

/***** STYLES MODULE *****/
import styles from '../../components/navigation/PrimaryNav.module.css';

export default function PrimaryNav() {

    return (
        <nav className={styles.primaryNav}>
                <Logo />
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <a href="/explore">Explore</a>
                </li>
                <li className={styles.navItem}>
                    <a href="/trails">Trails</a>
                </li>
                <li className={styles.navItem}>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    )
};