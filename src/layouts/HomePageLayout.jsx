import { Grid } from '@/layouts/components';

/***** MODULE STYLES *****/
import styles from '@/layouts/components/Grid.module.css';

export default function HomePageLayout({
       leftGrid = null,
       rightGrid = null,
   }) {
    return (
        <Grid variant="homePageGrid">
            {leftGrid && (
                <div className={styles.leftCol}>{leftGrid}</div>
            )}
            {rightGrid && (
                <div className={styles.rightCol}>{rightGrid}</div>
            )}
        </Grid>
    );
};