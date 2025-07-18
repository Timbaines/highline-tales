import { useRef, useEffect } from 'react';
import { setupCounter } from '@/utils/counter.js';
import { FaCalendarAlt, FaTachometerAlt, FaMapMarkedAlt, FaRegHeart } from 'react-icons/fa';

/***** MODULE STYLES *****/
import styles from './ActivityCard.module.css';

export default function ActivityCard({ adventure })  {
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
            case 'moderate': return '#F7C23D';
            case 'hard': return '#F75F5F';
            default: return '#3DCF8E';
        }
    };

    const difficultyColor = getDifficultyColor(adventure.difficulty);

    return (
        <article className={styles.activityCard}>
            <div className={styles.activityCardImageContainer}>
                <img
                    className={styles.activityCardImage}
                    src={adventure.image}
                    alt={adventure.title}
                />
            </div>
            <div className={styles.activityCardContent}>
                <h3 className={styles.activityCardTitle}>
                    <a>{adventure.title}</a>
                </h3>

                <p className={styles.activityCardStats}>
                    <span className={styles.statItem}>
                        <FaCalendarAlt size={12} /> {adventure.date}
                    </span>
                    <span className={styles.statItem}>
                        <FaTachometerAlt size={14} color={difficultyColor} />{adventure.difficulty}
                    </span>

                    <span className={styles.statItem}>
                        <FaMapMarkedAlt size={14} /> {adventure.miles} miles
                    </span>
                </p>

                <p className={styles.activityCardDescription}>
                    {adventure.description}
                </p>
                <div className={styles.activityCardActions}>
                    <a className={styles.activityCardLink} href="/public">Read More →</a>
                    <div className={styles.activityCardLikes}>
                        <FaRegHeart />
                        <span ref={likeCounterRef} className={styles.likeCounter} aria-label="like this activity"></span>
                    </div>
                </div>
            </div>
        </article>
    )
};