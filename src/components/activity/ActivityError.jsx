import { Link } from 'react-router-dom';

export default function ActivityError() {
    return (
        <div>
            <h2>Activity Not Found</h2>
            <p>Sorry, the activity you're looking for doesn't exist.</p>
            <Link to="/activities">Back to Activities</Link>
        </div>
    )
}