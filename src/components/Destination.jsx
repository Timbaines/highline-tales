import WeatherCard from '@/components/ui/WeatherCard';

/***** MODULE STYLES *****/
import styles from '@/components/Destination.module.css';

export default function Destination() {
    return (
        <div className={styles.destinationGridContainer}>
            <div>
                <h2>Our Destination</h2>
                <div className={styles.destinationRow}>
                    <p>This years upcoming vacation destination is Montana, where Sarah and I will be staying in Whitefish and exploring the Glacier National Park. Spanning over more than 1 million acres, Glacier is the crown jewel of a vast protected wilderness shared by the U.S. and Canada.</p>
                </div>
                <div>
                    <p>With more than 700 miles of hiking trails, the park offers endless opportunities for adventure, from scenic hikes and boating on alpine lakes to wildlife viewing and relaxing drives. We’re excited to experience its iconic glaciers, rugged peaks, and crystal-clear lakes during the summer months, which are the ideal time to visit.</p>
                </div>
            </div>
            <div className={styles.weatherContainer}>
                <WeatherCard />
            </div>
        </div>
    )
}