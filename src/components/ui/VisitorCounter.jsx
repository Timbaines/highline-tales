import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/supabase/supabase.js";

/***** MODULE STYLES *****/
import styles from '@/components/ui/VisitorCounter.module.css';

export default function VisitorCounter() {
    const [views, setViews] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const slug = location.pathname;

    // DEVELOPMENT ONLY TOGGLE WITH LOCALSTORAGE PERSISTENCE
    const [analyticsEnabled, setAnalyticsEnabled] = useState(() => {
        // CHECK TO SEE IF IN DEV MODE
        if (import.meta.env.DEV) {
            const savedState = localStorage.getItem('analyticsEnabled');
            // IF SAVED STATE, USE IT, OTHERWISE USE THE ENV VARIABLE DEFAULT
            if (savedState !== null) {
                return savedState === 'true';
            }
        }
        // DEFAULT TO ENV VARIABLE
        return import.meta.env.VITE_ENABLE_ANALYTICS === 'true';
    });

    // ONLY SHOW TOGGLE IN DEVELOPMENT
    const isDev = import.meta.env.DEV;

    useEffect(() => {
        // SKIP IF ANALYTICS ARE DISABLED
        if (!analyticsEnabled) {
            setIsLoading(false);
            return;
        }

        // Function to increment page view
        const incrementPageView = async () => {
            setIsLoading(true);
            setError(null);

            try {
                // CHECKS SINGLE PAGE VIEW SESSION
                const viewedPages = JSON.parse(localStorage.getItem('viewedPages') || '{}');

                // FIRST TIME VISIT - INCREMENT
                if (!viewedPages[slug]) {
                    try {
                        await supabase.rpc('increment_page_view', {
                            page_slug: slug
                        });

                        // MARK PAGE AS VIEWED IN SESSION
                        viewedPages[slug] = true;
                        localStorage.setItem('viewedPages', JSON.stringify(viewedPages));
                    } catch (error) {
                        console.error('Error tracking page view:', error);
                        setError('Failed to increment view count');
                    }
                }

                // FETCH VIEW COUNT REGARDLESS
                const { data, error: fetchError } = await supabase
                    .from('analytics')
                    .select('views')
                    .eq('slug', slug)
                    .single();

                if (fetchError && fetchError.code !== 'PGRST116') { // ROW NOT FOUND ERROR
                    console.error('Error fetching page views:', fetchError);
                    setError('Failed to fetch view count');
                    return;
                }

                if (data) {
                    setViews(data.views);
                }
            } catch (err) {
                console.error('Unexpected error:', err);
                setError('An unexpected error occurred');
            } finally {
                setIsLoading(false);
            }
        };

        incrementPageView();
    }, [slug, analyticsEnabled]);

    // ANALYTICS INDICATOR DOT
    const indicatorStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        marginRight: '5px',
        backgroundColor: analyticsEnabled ? '#4CAF50' : '#F44336'
        // GREEN ENABLED | RED DISABLED
    };

    // RENDER IN VISITOR COUNTER IF IN DEV MODE
    if (isDev) {
        return (
            <div className={styles.visitorContainer}>
                <div className={styles.visitorCounter}>
                    <label>
                        <input
                            type="checkbox"
                            checked={analyticsEnabled}
                            onChange={() => setAnalyticsEnabled(!analyticsEnabled)}
                        />
                        Enable
                    </label>
                    {analyticsEnabled ? (
                        isLoading ? (
                            <p>...</p>
                        ) : (
                            <p>{views} Visitors</p>
                        )
                    ) : (
                        <p>Analytics Disabled</p>
                    )}
                </div>
            </div>
        );
    }

    // LOADER FUNCTION
    if (isLoading) {
        return (
            <div className={styles.visitorContainer}>
                <div className={styles.visitorCounter}>
                    <p>...</p>
                    <p>Visitors</p>
                </div>
            </div>
        );
    }

    // ERROR FUNCTION
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
                    {import.meta.env.MODE === 'staging' && (
                        <span style={{ ...indicatorStyle, width: '6px', height: '6px' }}></span>
                    )}
                    <p>{views} Page Views</p>
                </div>

            </div>
        </div>
    );
};