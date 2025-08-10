import GearList from '@/components/essentials/EssentialsList.jsx';
import  Grid from '@/layouts/components/Grid';

/***** MODULE STYLES *****/
import styles from '@/pages/essentials/EssentialsPage.module.css';

export default function EssentialsPage() {
    return (
        <>
            <h2>Trail Gear</h2>
            <Grid variant="default" className={styles.gearMargin}>
                <GearList />
            </Grid>
        </>
    )
}
