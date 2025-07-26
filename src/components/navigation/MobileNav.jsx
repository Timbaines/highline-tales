import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useNavigation } from '@/hooks/useNavigation';

/***** RENDER OVERLAY TO DOCUMENT BODY *****/
import { createPortal } from 'react-dom';

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

    const handleOverlayClick = () => {
        setIsOpen(false);
    }

    // CONTROL BODY SCROLL WHEN MENU IS OPEN
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        // CLEANUP FUNCTION TO ENSURE SCROLL IS RE-ENABLED WHEN COMPONENT UNMOUNTS
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // CLOSE MOBILE MENU ON WINDOW RESIZE
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // CLEAN UP EVENT LISTENER WHEN COMPONENT UNMOUNTS
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen]);


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
                <>
                    {createPortal(
                        <div className={styles.menuOverlay}
                            onClick={handleOverlayClick}
                            aria-label="Close menu overlay">
                        </div>,
                        document.body
                    )}
                    <div className={styles.menuOverlayMenuContainer}>
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
                </>
            )}
        </div>
    );
};