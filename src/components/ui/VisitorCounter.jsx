/***** MODULE STYLES *****/
import styles from '@/components/ui/VisitorCounter.module.css';

export default function VisitorCounter() {
    return (
        <div className={styles.visitorContainer}>
            <div className={styles.visitorCounter}>
                <p>0</p>
                <p>Visits</p>
            </div>
        </div>
    )
}