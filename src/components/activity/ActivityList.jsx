import ActivityCard from '@/components/activity/ActivityCard';
import { activitiesData } from '@/data/activitiesData.js';

/***** MODULE STYLES *****/
import styles from '@/components/activity/ActivityList.module.css';

export default function ActivityList({ className, layout = 'column' }) {
    return (
        <div className={`${styles.activityListContainer} ${styles[layout]} ${className || ''}`}>
            {activitiesData.map(activity => (
                <ActivityCard key={activity.id} activity={activity} />
            ))}
        </div>
    );
}