import { useEffect } from 'react';
import { useLoaderData, Link, Navigate } from 'react-router-dom';
import {FaCalendarAlt, FaTachometerAlt, FaMapMarkerAlt  } from 'react-icons/fa';
import { IoIosArrowRoundBack } from "react-icons/io";

import styles from '@/pages/ActivityPage.module.css';

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
        <>
            <div className={styles.activityContainer}>
                <div>
                    <div>
                        <h2>{activity.heading}</h2>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '2rem', fontSize: '0.875rem' }}>
                        <div className={styles.statItem}>
                            <FaCalendarAlt className={styles.icon} /> {activity.date}
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

                    {/* ADD MORE STRUCTURED CONTENT HERE */}
                    {activity.content && (
                        <div dangerouslySetInnerHTML={{ __html: activity.description }} />
                    )}
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <h3>Details</h3>
                    <div className={styles.tagContainer}>
                        {Array.isArray(activity.tag) && activity.tag.map((tag, index) => (
                            <span key={index} className={styles.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className={styles.contentContainer}>
                        <p>{activity.content}</p>
                    </div>
                </div>
                <nav style={{ marginBottom: '2rem' }}>
                    <Link
                        to="/activities"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            textDecoration: 'none',
                            color: 'var(--primary-color)',
                            fontSize: '1rem'
                        }}
                    >
                        <IoIosArrowRoundBack
                            className={styles.activityBackButton}
                            size={30}
                        />
                        Back to Activities
                    </Link>
                </nav>
            </div>
        </>
      )
    }