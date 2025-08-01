import { useEffect } from 'react';
import { useLoaderData, Link, Navigate } from 'react-router-dom';
import {FaCalendarAlt, FaTachometerAlt, FaMapMarkerAlt  } from 'react-icons/fa';
import { IoIosArrowRoundBack } from "react-icons/io";

import styles from '@/pages/Activity/ActivityPage.module.css';

export default function ActivityPage() {
    const { activity } = useLoaderData();

    if (!activity) {
        return <Navigate to="/activities" replace />
    }

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

    useEffect(() => {
        document.title = `${activity.title} - Highline Tales`;
    }, [activity.title]);


    return (
        <div className={styles.activityContainer}>
            <div>
                <h2>{activity.heading}</h2>

                <div className={styles.activityStats}>
                    <div className={styles.statItem}>
                        <FaCalendarAlt className={styles.icon} />{activity.date}
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.divider}>|</span>
                        <FaTachometerAlt className={styles.icon} style={{color: difficultyColor}} />
                        {activity.difficulty}
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.divider}>|</span>
                        <FaMapMarkerAlt className={styles.icon} /> {activity.miles} miles
                    </div>
                </div>

                {activity.content && (
                    <div dangerouslySetInnerHTML={{ __html: activity.description }} />
                )}

                <div className={styles.detailsSection}>
                    <h3>Details</h3>
                    <div className={styles.tagContainer}>
                        {Array.isArray(activity.tag) && activity.tag.map((tag, index) => (
                            <span key={index} className={styles.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className={styles.contentContainer}>
                        <div dangerouslySetInnerHTML={{ __html: activity.content }} />
                    </div>
                </div>

                <nav className={styles.activityNav}>
                    <Link to="/activities" className={styles.activityBackLink}>
                        <IoIosArrowRoundBack className={styles.activityBackButton} size={30} />
                        Back to Activities
                    </Link>
                </nav>
            </div>
        </div>

    )
    }