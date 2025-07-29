import { Link } from 'react-router-dom';
import ActivityCard from '@/components/activity/ActivityCard';
import { createSlug } from '@/utils/stringUtils';
import { activitiesData } from '@/data/activitiesData.js';

export default function ActivityList() {
    return (
        <>
            {activitiesData.map(activity => (
               <Link key={activity.id}
                 to={`/activities/${createSlug(activity.title)}`}
                 style={{ textDecoration: 'none' }}
               >
                   <ActivityCard activity={activity} />
               </Link>
            ))}
        </>
    )
}