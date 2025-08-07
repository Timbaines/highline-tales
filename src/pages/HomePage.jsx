import { Link } from "react-router-dom";
import WeatherCard from '@/components/ui/cards/WeatherCard.jsx';
import ImageCard from '@/components/ui/cards/ImageCard';
import HomePageLayout from '@/layouts/HomePageLayout.jsx';
import Button from '@/components/ui/buttons/Button.jsx';
import InfoCard from "@/components/ui/cards/InfoCard.jsx";
import { activitiesData } from '@/data/activitiesData';

/***** MODULE STYLES *****/
import styles from '@/pages/HomePage.module.css';

export default function HomePage() {
    return (
        <>
            <section>
                <HomePageLayout
                    leftGrid={
                        <div className={styles.homePageContent}>
                            <h2>Destination</h2>
                            <p>This years upcoming vacation destination is Montana, where Sarah and I will be staying in Whitefish and exploring the Glacier National Park. Spanning over more than 1 million acres, Glacier is the crown jewel of a vast protected wilderness shared by the U.S. and Canada.</p>
                            <p>With more than 700 miles of hiking trails, the park offers endless opportunities for adventure, from scenic hikes and boating on alpine lakes to wildlife viewing and relaxing drives.</p>
                            <div>
                                <Link to="/activities">
                                    <Button type="primary">
                                        View Activities
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    }
                    rightGrid={
                        <div className={styles.homePageForecast}>
                            <WeatherCard />
                        </div>
                    }
                />
            </section>

            <section>
                <h2 className={styles.mobileHeading}>Activities</h2>
                <HomePageLayout
                    leftGrid={
                        <div className={styles.homeActivities}>
                            {activitiesData.map(activity => (
                                <ImageCard
                                    key={activity.id}
                                    item={activity}
                                    contentType="activity"
                                />
                            ))}
                        </div>
                    }
                    rightGrid={<InfoCard />}
                />
            </section>
        </>
    );
};