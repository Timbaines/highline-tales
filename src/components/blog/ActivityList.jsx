import ActivityCard from '@/components/blog/ActivityCard';
import { activitiesData } from '@/data/activitiesData.js';

export default function ActivityList() {
    return (
        <div>
            <h3>Activities</h3>
            {activitiesData.map(activity => (
                <ActivityCard key={activity.id} activity={activity} />
            ))}
        </div>
    )
}