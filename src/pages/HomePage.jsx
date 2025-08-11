import { Link } from 'react-router-dom';
import WeatherCard from '@/components/ui/cards/WeatherCard';
import ImageCard from '@/components/ui/cards/ImageCard';
import { Grid } from '@/components/layouts/index.js';
import Button from '@/components/ui/buttons/Button';
import InfoCard from '@/components/ui/cards/InfoCard';
import { activitiesData } from '@/data/activitiesData';

/***** MODULE STYLES *****/
import styles from '@/pages/HomePage.module.css';
import gridStyles from '@/components/layouts/Grid.module.css';


export default function HomePage() {
    return (
        <>
            <section>
                <Grid variant="homePageGrid">
                    <div className={gridStyles.leftCol}>
                        <div className={styles.homePageContent}>
                            <h2>Destination</h2>
                            <p>This years upcoming vacation destination is Montana, where Sarah and I will be staying in Whitefish and exploring the Glacier National Park. Spanning over more than 1 million acres, Glacier is the crown jewel of a vast protected wilderness shared by the U.S. and Canada.</p>
                            <p>With more than 700 miles of hiking trails, the park offers endless opportunities for adventure, from scenic hikes and boating on alpine lakes to wildlife viewing and relaxing drives.</p>
                            <div className={styles.row}>
                                <Link to="/activities">
                                    <Button type="primary">
                                        View Activities
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={gridStyles.rightCol}>
                        <div>
                            <WeatherCard />
                        </div>
                    </div>
                </Grid>
            </section>

            <section>
                <h2 className={styles.mobileHeading}>Activities</h2>
                <Grid variant="homePageGrid">
                    <div className={gridStyles.leftCol}>
                        <div className={styles.homeActivities}>
                            {activitiesData.map(activity => (
                                <ImageCard
                                    key={activity.id}
                                    item={activity}
                                    contentType="activity"
                                />
                            ))}
                        </div>
                    </div>
                    <div className={gridStyles.rightCol}>
                        <InfoCard />
                    </div>
                </Grid>
            </section>
        </>
    );
};