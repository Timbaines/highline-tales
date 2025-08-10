import { useLocation, useMatch } from 'react-router-dom';
import PrimaryNav from '@/components/navigation/PrimaryNav';
import { activitiesData } from '@/data/activitiesData';
import { createSlug } from '@/utils/stringUtils';

/***** MODULE STYLES *****/
import styles from '@/components/SubpageHeader.module.css';

export default function SubpageHeader() {
    const location = useLocation();
    const match = useMatch('/activities/:slug');

    // GET SLUG FROM MATCH OBJECT IF USER IS ON AN INDIVIDUAL ACTIVITY PAGE
    const slug = match?.params?.slug;


    // DEFINE PAGE SPECIFIC CONTENT
    const getPageContent = () => {
        switch (location.pathname) {
            case '/hiking-checklist':
                return {
                    backgroundImage: '/ht-banner2.webp',
                    subtitle: 'GLACIER NATIONAL PARK',
                    title: 'Hiking Essentials',
                    height: '45vh'
                };
            case '/activities':
                return {
                    backgroundImage: '/highline-trail-hero-banner.webp',
                    subtitle: 'GLACIER NATIONAL PARK',
                    title: 'Big Sky Highlights',
                    height: '45vh'
                };
            case '/blog':
                return {
                    backgroundImage: '/highline-trail-hero-banner.webp',
                    subtitle: 'GLACIER NATIONAL PARK',
                    title: 'Trailing Tales',
                    height: '45vh'
                };
            default:
                if (location.pathname.startsWith('/activities/') && slug) {
                    // FIND THE ACTIVITY BY THE SLUG
                    const activity = activitiesData.find(
                        activity => createSlug(activity.title) === slug
                    );

                    if (activity) {
                        return {
                            backgroundImage: activity.image || '/highline-tales-hero-banner.webp',
                            subtitle: `${activity.subtitle}`,
                            title: activity.title,
                            height: '45vh'
                        };
                    }
                }
                return {
                    backgroundImage: '/gallery-banner1.webp',
                    subtitle: 'GLACIER NATIONAL PARK',
                    title: 'Highline Tales',
                    height: '45vh'
                };
        }
    };

    const pageContent = getPageContent();

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