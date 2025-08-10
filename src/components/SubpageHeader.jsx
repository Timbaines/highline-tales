import { useLocation, useMatch } from 'react-router-dom';
import PrimaryNav from '@/components/navigation/PrimaryNav';
import { getSubpageHeaderContent } from '@/utils/subpageHeaderContent';

/***** MODULE STYLES *****/
import styles from '@/components/SubpageHeader.module.css';

export default function SubpageHeader() {
    const location = useLocation();
    const match = useMatch('/activities/:slug');

    // GET SLUG FROM MATCH OBJECT IF USER IS ON AN INDIVIDUAL ACTIVITY PAGE
    const slug = match?.params?.slug;

    // GET PAGE-SPECIFIC CONTENT VIA UTILITY (decoupled from component)
    const pageContent = getSubpageHeaderContent(location.pathname, slug);

    // INLINE STYLES FOR DYNAMIC IMAGES AND GRADIENT OVERLAY
    const subHeaderStyle = {
        backgroundImage: `var(--color-gradient-secondary), url(${pageContent.backgroundImage})`,
        minHeight: pageContent.height,
    }

    return (
        <div className={styles.subpageHeader} style={subHeaderStyle}>
            <div className={styles.headerNavContainer}>
                <PrimaryNav />
            </div>
            <div className={styles.subpageHeaderTitle}>
                <p>{pageContent.subtitle}</p>
                <h1>{pageContent.title}</h1>
            </div>
        </div>
    )
};