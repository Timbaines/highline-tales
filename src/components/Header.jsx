import PrimaryNav from './navigation/PrimaryNav';

/***** STYLES MODULE *****/
import styles from '../components/Header.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerNavContainer}>
                <PrimaryNav />
            </div>
            <div className={styles.headerTitle}>
                <p>Glacier National Park</p>
                <h1>Highline Tales</h1>
            </div>
        </div>
    )
};
