import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaTachometerAlt, FaMapMarkerAlt } from 'react-icons/fa';
import LikeButton from '@/components/ui/LikeButton';

/***** MODULE STYLES *****/
import styles from '@/components/activity/ActivityCard.module.css';

export default function ActivityCard({ activity })  {

    const getDifficultyColor = (difficulty) => {
        const difficultyLevel = difficulty.toLowerCase().trim();

        switch (difficultyLevel) {
            case 'easy': return '#3DCF8E';
            case 'moderate': return '#FFBF00';
            case 'hard': return '#F75F5F';
            default: return '#3DCF8E';
        }
    };

    const difficultyColor = getDifficultyColor(activity.difficulty);

    const createSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .trim();
    };

    const activitySlug = createSlug(activity.title);

    return (
        <article className={styles.activityCard}>
            <div className={styles.activityCardImageContainer}>
                <img
                    className={styles.activityCardImage}
                    src={activity.image}
                    alt={activity.title}
                />
            </div>
            <div className={styles.activityCardContent}>
                <div className={styles.activityCardHeader}>
                    <h3 className={styles.activityCardTitle}>
                        <Link to={`/activities/${activitySlug}`}>
                            {activity.title}
                        </Link>
                    </h3>
                    <span className={styles.activityDate}>
                        <FaCalendarAlt className={styles.icon} /> {activity.date}
                    </span>
                </div>
                <p className={styles.activityCardStats}>
                    <span className={styles.statItem}>
                        <FaTachometerAlt className={styles.icon} style={{color: difficultyColor}} />
                        <span>{activity.difficulty}</span>
                    </span>

                    <span className={styles.statItem}>
                        <FaMapMarkerAlt className={styles.icon} />
                        <span>{activity.miles} miles</span>
                    </span>
                </p>

                <p className={styles.activityCardDescription}>
                    {activity.description}
                </p>
                <div className={styles.activityCardActions}>
                    <Link
                        className={styles.activityCardLink}
                        to={`/activities/${activitySlug}`}
                    >
                        Read More →
                    </Link>
                    <div>
                        <LikeButton />
                    </div>
                </div>
            </div>
        </article>
    )
};