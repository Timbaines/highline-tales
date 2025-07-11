import PrimaryNav from './navigation/PrimaryNav';

import styles from '../components/Header.module.css';

export default function Header() {
    return (
        <>
        <div className={styles.header}>
            <PrimaryNav />
        </div>
        </>
    )
}