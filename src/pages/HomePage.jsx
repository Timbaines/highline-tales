import WeatherCard from '@/components/ui/WeatherCard.jsx';
import ActivityList from '@/components/activity/ActivityList';
import HomePageLayout from '@/layouts/HomePageLayout.jsx';
import DemoComponent from "@/components/DemoComponent.jsx";

/***** MODULE STYLES *****/
import styles from '@/pages/HomePage.module.css';


export default function HomePage() {
    return (
        <>
            <section className={styles.homePageContainer}>
                <div className={styles.homePageContent}>
                    <h2>Destination</h2>
                    <p>This years upcoming vacation destination is Montana, where Sarah and I will be staying in Whitefish and exploring the Glacier National Park. Spanning over more than 1 million acres, Glacier is the crown jewel of a vast protected wilderness shared by the U.S. and Canada.With more than 700 miles of hiking trails, the park offers endless opportunities for adventure, from scenic hikes and boating on alpine lakes to wildlife viewing and relaxing drives.</p>
                    <p>This years upcoming vacation destination is Montana, where Sarah and I will be staying in Whitefish and exploring the Glacier National Park. Spanning over more than 1 million acres, Glacier is the crown jewel of a vast protected wilderness shared by the U.S. and Canada.</p>
                </div>
                <div className={styles.homePageForecast}>
                    <WeatherCard />
                </div>
            </section>

            <section>
                <h2>Activities</h2>
                <HomePageLayout
                    leftGrid={<ActivityList />}
                    rightGrid={<DemoComponent />}
                />
            </section>

        </>
    );
};