import ActivityCard from '@/components/blog/ActivityCard.jsx';
import { activitiesData } from '@/data/activities-data.js';

/***** MODULE STYLES *****/
import styles from '@/components/blog/ActivityList.module.css'

export default function ActivityList() {
    return (
        <div className={styles.activityListGridContainer}>
            <div>
                <h3>Activities</h3>
                {activitiesData.map(activity => (
                    <ActivityCard key={activity.id} activity={activity} />
                ))}
            </div>
        </div>
    )
}