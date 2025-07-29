import GearList from '@/components/gear/GearList';

/***** MODULE STYLES *****/
import styles from '@/pages/GearPage.module.css';

export default function GearPage() {
    return (
        <div className={styles.gearContainer}>
            <GearList />
        </div>
    )
}