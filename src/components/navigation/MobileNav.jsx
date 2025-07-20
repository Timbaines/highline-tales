import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useNavigation } from '@/hooks/useNavigation';

/***** MODULE STYLES *****/
import styles from './MobileNav.module.css';

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const { filteredNavItems, isActiveLinkWithStartsWith } = useNavigation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // CLOSE MOBILE MENU AFTER LINK IS CLICKED
    const handleNavClick = (href) => {
        navigate(href);
        setIsOpen(false);
    };

    return (
        <div className={styles.mobileMenuContainer}>
            <button
                type="button"
                className={styles.menuToggle}
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
            >
                {isOpen ? <FiX size={14} /> : <FiMenu size={14} />}
            </button>

            {isOpen && (
                <div className={styles.menuOverlay}>
                    <ul className={styles.mobileNavList}>
                        {filteredNavItems.map((item) => (
                            <li key={item.id} className={styles.mobileNavItem}>
                                <Link
                                    to={item.href}
                                    className={isActiveLinkWithStartsWith(item.href) ? styles.activeLink : ''}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
