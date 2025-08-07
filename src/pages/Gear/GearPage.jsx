import GearList from '@/components/gear/GearList.jsx';

/***** MODULE STYLES *****/
import styles from '@/pages/Gear/GearPage.module.css';

export default function GearPage() {
    return (
        <div className={styles.gearContainer}>
            <h2>Hiking Checklist</h2>
            <GearList />
        </div>
    )
}