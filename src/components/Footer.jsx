import Logo from '@/components/Logo';
import { Link } from 'react-router-dom';

/***** MODULE STYLES *****/
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <Link to="/" className={styles.footerLogoLink}>
                    <Logo />
                </Link>
                <div className={styles.footerTechStack}>
                    <a href="https://vite.dev" target="_blank">
                        <img src="/src/assets/vite.svg"
                             className={styles.footerTechIcons}
                             alt="Vite logo"
                        />
                    </a>
                    <a href="https://react.dev/" target="_blank">
                        <img src="/src/assets/react_dark.svg"
                            className={styles.footerTechIcons}
                             alt="React logo"
                        />
                    </a>
                    <a href="https://supabase.com/" target="_blank">
                        <img src="/src/assets/supabase.svg"
                            className={styles.footerTechIcons}
                             alt="Supabase logo"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}