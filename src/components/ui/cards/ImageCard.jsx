import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaTachometerAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { createSlug } from '@/utils/stringUtils.js';
import LikeButton from '@/components/ui/buttons/LikeButton.jsx';

/***** MODULE STYLES *****/
import styles from '@/components/ui/cards/ImageCard.module.css';

export default function ContentCard({ item, contentType }) {
    const getPath = () => {
        if (contentType === 'activity') {
            return `/activities/${createSlug(item.title)}`;
        } else if (contentType === 'blog') {
            return `/blog/${item.slug}`;
        }
        return '#';
    };

    // Get description based on content type
    const getDescription = () => {
        if (contentType === 'activity') {
            return item.description;
        } else if (contentType === 'blog') {
            return item.excerpt;
        }
        return '';
    };

    // Handle difficulty color for activities
    const getDifficultyColor = (difficulty) => {
        if (!difficulty) return '#3DCF8E';

        const difficultyLevel = difficulty.toLowerCase().trim();
        switch (difficultyLevel) {
            case 'easy': return '#3DCF8E';
            case 'moderate': return '#FFBF00';
            case 'hard': return '#F75F5F';
            default: return '#3DCF8E';
        }
    };

    return (
        <article className={styles.activityCard}>
            <div className={styles.activityCardInner}>
                <div className={styles.activityCardImageContainer}>
                    <img
                        className={styles.activityCardImage}
                        src={item.image}
                        alt={item.title}
                    />
                </div>
                <div className={styles.activityCardContent}>
                    <div className={styles.activityCardHeader}>
                        <h3 className={styles.activityCardTitle}>
                            <Link to={getPath()}>
                                {item.title}
                            </Link>
                        </h3>
                        <span className={styles.activityDate}>
              <FaCalendarAlt className={styles.icon} /> {item.date}
            </span>
                    </div>

                    {/* Conditionally render activity stats */}
                    {contentType === 'activity' && (
                        <p className={styles.activityCardStats}>
              <span className={styles.statItem}>
                <FaTachometerAlt
                    className={styles.icon}
                    style={{color: getDifficultyColor(item.difficulty)}}
                />
                <span>{item.difficulty}</span>
              </span>
                            <span className={styles.statItem}>
                <FaMapMarkerAlt className={styles.icon} />
                <span>{item.miles} miles</span>
              </span>
                        </p>
                    )}

                    <p className={styles.activityCardDescription}>
                        {getDescription()}
                    </p>

                    <div className={styles.activityCardActions}>
                        <Link
                            className={styles.activityCardLink}
                            to={getPath()}
                        >
                            Read More →
                        </Link>

                        {/* Only show like button for activities */}
                        {contentType === 'activity' && <LikeButton />}
                    </div>
                </div>
            </div>
        </article>
    );
}