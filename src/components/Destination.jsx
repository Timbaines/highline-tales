/***** MODULE STYLES *****/
import styles from '@/components/Destination.module.css';

export default function Destination() {
    return (
        <div>
            <h2>Destination</h2>
            <div className={styles.destinationRow}>
                <p>This years upcoming vacation destination is Montana, where Sarah and I will be staying in Whitefish and exploring the Glacier National Park. Spanning over more than 1 million acres, Glacier is the crown jewel of a vast protected wilderness shared by the U.S. and Canada.</p>
            </div>
            <div className={styles.destinationRow}>
                <p>With more than 700 miles of hiking trails, the park offers endless opportunities for adventure, from scenic hikes and boating on alpine lakes to wildlife viewing and relaxing drives. We're excited to experience its iconic glaciers, rugged peaks, and crystal-clear lakes.</p>
            </div>
        </div>
    );
}

