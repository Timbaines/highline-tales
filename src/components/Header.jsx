import PrimaryNav from './navigation/PrimaryNav';

/***** MODULE STYLES *****/
import styles from '../components/Header.module.css';

export default function Header() {

    const headerStyle = {
        backgroundImage: `var(--color-gradient-primary), url(/banner-home-page.webp)`,
        height: '50vh',
    }

    return (
        <div className={styles.header} style={headerStyle}>
            <div className={styles.homeHeaderNavContainer}>
                <PrimaryNav />
            </div>
            <div className={styles.homeHeaderTitle}>
                <p>GLACIER NATIONAL PARK</p>
                <h1>Discovering Montana</h1>
            </div>
        </div>
    )
}
