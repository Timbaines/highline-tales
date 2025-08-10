import { Link } from 'react-router-dom';

/***** MODULE STYLES *****/
import styles from '@/components/errors/ErrorBoundary.module.css';

export default function ActivityError() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Activity Not Found</h2>
            <p className={styles.message}>Sorry, the activity you're looking for doesn't exist.</p>
            <div className={styles.actions}>
                <Link to="/activities">Back to Activities</Link>
            </div>
        </div>
    )
};