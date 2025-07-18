import { useLocation, useMatch } from 'react-router-dom';
import PrimaryNav from './navigation/PrimaryNav';
import { activitiesData } from '@/data/activities-data.js';

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
                    backgroundImage: '/highline-tales-hero-banner-2.jpg',
                    subtitle: 'Glacier National Park',
                    title: 'Highline Tales',
                    height: '45vh'
                };
            case '/activities':
                return {
                    backgroundImage: '/highlinetales-hero-banner.jpg',
                    subtitle: 'Big Sky',
                    title: 'Our Activities',
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
                            backgroundImage: activity.image || '/highline-tales-hero-banner.jpg',
                            subtitle: `${activity.difficulty} • ${activity.miles} miles`,
                            title: activity.title,
                            height: '45vh'
                        };
                    }
                }
                return {
                    backgroundImage: '/highline-tales-hero-banner-2.jpg',
                    subtitle: 'Glacier National Park',
                    title: 'Highline Tales',
                    height: '45vh'
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