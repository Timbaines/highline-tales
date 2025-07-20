import { useLocation, useMatch } from 'react-router-dom';
import PrimaryNav from './navigation/PrimaryNav';
import { activitiesData } from '@/data/activitiesData.js';

/***** MODULE STYLES *****/
import styles from '../components/Header.module.css';

export default function Header() {
    const location = useLocation();
    const match = useMatch('/activities/:slug');

    // GET SLUG FROM MATCH OBJECT IF USER IS ON AN INDIVIDUAL ACTIVITY PAGE
    const slug = match?.params?.slug;

    const createSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .trim();
    };

    // DEFINE PAGE SPECIFIC CONTENT
    const getPageContent = () => {
        switch (location.pathname) {
            case '/':
                return {
                    backgroundImage: '/highline-trail-hero.webp',
                    subtitle: 'Glacier National Park',
                    title: 'Highline Tales',
                    height: '45vh'
                };
            case '/gear':
                return {
                    backgroundImage: '/ht-banner2.webp',
                    subtitle: 'Trail Hiking',
                    title: 'Checklist',
                    height: '45vh'
                };
            case '/activities':
                return {
                    backgroundImage: '/highline-trail-hero-banner.webp',
                    subtitle: 'Exploring Montana',
                    title: 'Big Sky Adventures',
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
                    backgroundImage: '/highline-tales-hero-banner.webp',
                    subtitle: 'Glacier National Park',
                    title: 'Highline Tales',
                    height: '55vh'
                };
        }
    };

    const pageContent = getPageContent();

    // INLINE STYLES FOR DYNAMIC IMAGES AND GRADIENT OVERLAY
    const headerStyle = {
        backgroundImage: `var(--color-gradient-primary), url(${pageContent.backgroundImage})`,
        minHeight: pageContent.height,
    }

    return (
        <div className={styles.header} style={headerStyle}>
            <div className={styles.headerNavContainer}>
                <PrimaryNav />
            </div>
            <div className={styles.headerTitle}>
                <p>{pageContent.subtitle}</p>
                <h1>{pageContent.title}</h1>
            </div>
        </div>
    )
};