import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setupCounter } from '@/utils/counter';
import { FaCalendarAlt, FaTachometerAlt, FaMapMarkerAlt, FaRegHeart } from 'react-icons/fa';

/***** MODULE STYLES *****/
import styles from '@/components/blog/ActivityCard.module.css';

export default function ActivityCard({ activity })  {
    const likeCounterRef = useRef(null);

    useEffect(() => {
        if (likeCounterRef.current) {
            setupCounter(likeCounterRef.current);
        }
    }, []);

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
                        <FaCalendarAlt size={14} /> {activity.date}
                    </span>
                </div>
                <p className={styles.activityCardStats}>
                    <span className={styles.statItem}>
                        <FaTachometerAlt size={14} color={difficultyColor} />{activity.difficulty}
                    </span>

                    <span className={styles.statItem}>
                        <FaMapMarkerAlt size={16} /> {activity.miles} miles
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
                    <div className={styles.activityCardLikes}>
                        <FaRegHeart />
                        <span ref={likeCounterRef} className={styles.likeCounter} aria-label="like this activity"></span>
                    </div>
                </div>
            </div>
        </article>
    )
};