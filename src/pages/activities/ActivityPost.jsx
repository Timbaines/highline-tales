import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCalendarAlt, FaTachometerAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Grid } from '@/layouts/components';
import { getDifficultyColor } from '@/utils/difficulty';
import BackLinkNav from "@/components/common/BackLinkNav";
import DOMPurify from 'dompurify';

/***** MODULE STYLES *****/
import styles from '@/pages/activities/ActivityPost.module.css';
import gridStyles from '@/layouts/components/Grid.module.css';

export default function ActivityPost() {
    const { activity } = useLoaderData();

    // GET DIFFICULTY COLOR
    const difficultyColor = getDifficultyColor(activity.difficulty);
    
    // MAP IMAGE FALLBACK
    const mapImageSrc = activity.mapImage;

    useEffect(() => {
        document.title = `${activity.title} - Highline Tales`;
    }, [activity.title]);

    return (
        <section>
            <Grid variant="grid">
                <div className={styles.activityContainer}>
                    <div className={styles.activityHeader}>
                        <h2>{activity.heading}</h2>

                        <div className={styles.activityStats}>
                            <div className={styles.statItem}>
                                <FaCalendarAlt />{activity.date}
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.divider}>|</span>
                                <FaTachometerAlt style={{color: difficultyColor}} />
                                {activity.difficulty}
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.divider}>|</span>
                                <FaMapMarkerAlt /> {activity.miles} miles
                            </div>
                        </div>
                    </div>

                    {/* MOBILE MAP IMAGE */}
                    <div className={styles.mobileMapWrapper}>
                        <div className={styles.mapImage}>
                            <img 
                                src={mapImageSrc} 
                                alt={`Map for ${activity.title}`} 
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <Grid variant="activityGrid">
                        <div className={gridStyles.leftCol}>
                            <div className={styles.activityContent}>
                                {activity.description && (
                                    <div className={styles.descriptionContainer} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(activity.description) }} />
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
                                        {activity.content && (
                                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(activity.content) }} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={gridStyles.rightCol}>
                            <div className={styles.mapWrapper}>
                                <div className={styles.mapImage}>
                                    <img 
                                        src={mapImageSrc} 
                                        alt={`Map for ${activity.title}`} 
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <nav className={styles.activityNav}>
                        <BackLinkNav to="/activities">Back to Activities Page</BackLinkNav>
                    </nav>
                </div>
            </Grid>
        </section>
    );
}