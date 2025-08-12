import Logo from '@/components/Logo';
import { Link } from 'react-router-dom';
import viteLogo from '../assets/vite.svg';
import reactLogo from '../assets/react_dark.svg';
import supabaseLogo from '../assets/supabase.svg';

/***** MODULE STYLES *****/
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <Link to="/" className={styles.footerLogoLink} aria-label="Go to homepage">
                    <Logo />
                </Link>
                <div className={styles.footerTechStack}>
                    <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" aria-label="Visit Vite website">
                        <img src={viteLogo}
                             className={styles.footerTechIcons}
                             alt="Vite logo"
                        />
                    </a>
                    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" aria-label="Visit React website">
                        <img src={reactLogo}
                             className={styles.footerTechIcons}
                             alt="React logo"
                        />
                    </a>
                    <a href="https://supabase.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Supabase website">
                        <img src={supabaseLogo}
                             className={styles.footerTechIcons}
                             alt="Supabase logo"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}