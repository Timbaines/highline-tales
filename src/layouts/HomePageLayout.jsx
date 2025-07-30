/***** MODULE STYLES *****/
import styles from '@/layouts/HomePageLayout.module.css';

export default function HomePageLayout({
    leftGrid= null,
    rightGrid = null,
  }) {

    return (
        <section>
            <div className={styles.gridContainer}>
                {leftGrid && (
                    <div className={styles.leftGrid}>{leftGrid}</div>
                )}

                {rightGrid && (
                    <div className={styles.rightGrid}>{rightGrid}</div>
                )}
            </div>
        </section>
    );
};