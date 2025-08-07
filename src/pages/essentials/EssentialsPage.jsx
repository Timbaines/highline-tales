import GearList from '@/components/essentials/EssentialsList.jsx';
import  Grid from '@/layouts/components/Grid';

/***** MODULE STYLES *****/
import styles from '@/pages/essentials/EssentialsPage.module.css';

export default function EssentialsPage() {
    return (
        <Grid variant="default" className={styles.gearMargin}>
            <h2>Hiking Checklist</h2>
            <GearList />
        </Grid>
    )
}
