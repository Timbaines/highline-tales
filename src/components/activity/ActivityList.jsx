import ActivityCard from '@/components/activity/ActivityCard';
import { activitiesData } from '@/data/activitiesData.js';

export default function ActivityList() {
    return (
        <>
            {activitiesData.map(activity => (
                <ActivityCard key={activity.id} activity={activity} />
            ))}
        </>
    )
}