import { activitiesData } from '@/data/activitiesData';
import ImageCardList from '@/components/ui/cards/ImageCardList';
import Grid from '@/layouts/components/Grid.jsx';


/***** MODULE STYLES *****/
import styles from '@/pages/activities/ActivityPage.module.css';

export default function ActivityPage() {
    return (
        <>
            <h2>Activities</h2>
            <Grid variant="twoColumn" className={styles.activitiesMargin}>
                <ImageCardList
                    items={activitiesData}
                    contentType="activity"
                    layout="grid"
                />
            </Grid>
        </>
    );
}


