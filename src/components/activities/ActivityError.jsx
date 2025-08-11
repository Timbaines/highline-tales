import { useRouteError } from "react-router-dom";
import BackLinkNav from '@/components/shared/BackLinkNav';

/***** MODULE STYLES *****/
import styles from '@/components/errors/ErrorBoundary.module.css';

export default function ActivityError() {
    const error = useRouteError();

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Activity Not Found</h2>
            <p className={styles.message}>Sorry, the activity you're looking for doesn't exist.</p>
            <nav className={styles.actions}>
                <BackLinkNav to="/activities">Back to Blog Page</BackLinkNav>
            </nav>
            {import.meta.env?.DEV && error?.statusText && (
                <pre className={styles.devError}>{error.statusText}</pre>
            )}
        </div>
    )
};