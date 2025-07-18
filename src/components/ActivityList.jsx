import ActivityCard from '@/components/blog/ActivityCard.jsx';
import {activitiesData} from '@/data/activities-data.js';

/***** MODULE STYLES *****/
import styles from '@/components/ActivityList.module.css'

export default function ActivityList() {
    return (
        <div className={styles.activityGridContainer}>
            <div>
                <h3>Adventures</h3>
                {activitiesData.map(adventure => (
                    <ActivityCard key={adventure.id} adventure={adventure} />
                ))}
            </div>
        </div>
    )
}