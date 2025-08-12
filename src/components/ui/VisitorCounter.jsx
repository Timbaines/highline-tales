import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageViewOncePerSession, fetchPageViews } from "@/services/analytics/visitorAnalytics.js";

/***** MODULE STYLES *****/
import styles from '@/components/ui/VisitorCounter.module.css';

export default function VisitorCounter({ env = import.meta.env, storage = (typeof window !== 'undefined' ? window.localStorage : undefined) } = {}) {
    const [views, setViews] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const slug = location.pathname;

    // DETERMINE ANALYTICS ENABLED FROM ENVIRONMENT ONLY (NO DEV TOGGLE/PERSISTENCE)
    const analyticsEnabled = env?.VITE_ENABLE_ANALYTICS === 'true';

    useEffect(() => {
        // SKIP IF ANALYTICS ARE DISABLED
        if (!analyticsEnabled) {
            setIsLoading(false);
            return;
        }

        // FUNCTION TO INCREMENT PAGE VIEW COUNT
        const incrementPageView = async () => {
            setIsLoading(true);
            setError(null);

            try {
                // INCREMENT ONCE PER SESSION
                try {
                    await trackPageViewOncePerSession(slug, storage);
                } catch (error) {
                    if (import.meta.env.DEV) {
                        // AVOID LOGS IN PRODUCTION
                        console.error('Error tracking page view:', error);
                    }
                    setError('Failed to increment view count');
                }

                // FETCH VIEW COUNT
                const { views, error: fetchError } = await fetchPageViews(slug);
                if (fetchError && fetchError.code !== 'PGRST116') { // ROW NOT FOUND ERROR
                    if (import.meta.env.DEV) {
                        console.error('Error fetching page views:', fetchError);
                    }
                    setError('Failed to fetch view count');
                    return;
                }

                setViews(views);
            } catch (err) {
                if (import.meta.env.DEV) {
                    console.error('Unexpected error:', err);
                }
                setError('An unexpected error occurred');
            } finally {
                setIsLoading(false);
            }
        };

        incrementPageView();
    }, [slug, analyticsEnabled, storage]);

    // ANALYTICS INDICATOR DOT (shown in staging)
    const indicatorStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        marginRight: '5px',
        backgroundColor: analyticsEnabled ? '#4CAF50' : '#F44336'
        // GREEN ENABLED | RED DISABLED
    };

    // LOADER STATE
    if (isLoading) {
        return (
            <div className={styles.visitorContainer}>
                <div className={styles.visitorCounter}>
                    <p>...</p>
                    <p>Page Views</p>
                </div>
            </div>
        );
    }

    // ERROR STATE
    if (error) {
        return (
            <div className={styles.visitorContainer}>
                <div className={styles.visitorCounter}>
                    <p>-</p>
                    <p>Page Views</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.visitorContainer}>
            <div className={styles.visitorCounter}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* INDICATOR DOT VISIBLE FOR STAGING/TESTING IN PROD */}
                    {env?.MODE === 'staging' && (
                        <span style={{ ...indicatorStyle, width: '6px', height: '6px' }}></span>
                    )}
                    <p>{views} Page Views</p>
                </div>
            </div>
        </div>
    );
};