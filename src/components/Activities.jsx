import Card from '@/components/ui/Card.jsx';
import {adventureData} from '@/data/adventure-data.js';

/***** STYLES MODULE *****/
import styles from '@/components/Activities.module.css'

export default function Activities() {
    return (
        <div className={styles.activityGridContainer}>
            <div>
                <h3>Adventures</h3>
                {adventureData.map(adventure => (
                    <Card key={adventure.id} adventure={adventure} />
                ))}
            </div>
        </div>
    )
}