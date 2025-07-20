import Logo from '@/components/Logo';
import { Link } from 'react-router-dom';
import { FaReact } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";

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
                    <a href="https://react.dev/" target="_blank">
                        <FaReact
                            className={styles.footerTechIcons}
                            color={'#61DAFB'}
                            size={24}
                        />
                    </a>
                    <a href="https://vite.dev" target="_blank">
                        <img src="/vite.svg"
                             className={styles.footerTechIcons}
                             alt="Vite logo"
                        />
                    </a>
                    <a href="https://supabase.com/" target="_blank">
                        <RiSupabaseFill
                            className={styles.footerTechIcons}
                            color={'#3DCF8E'}
                            size={24}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}