/***** MODULE STYLES *****/
import styles from '@/layouts/HomePageLayout.module.css';

export default function HomePageLayout({
      leftTopContent,
      leftBottomContent = null,
      rightTopContent = null,
      rightBottomContent = null,
      fullWidth = false
  }) {

    return (
        <section>
            <div className={`${styles.gridContainer} ${fullWidth ? styles.fullWidth : ''}`}>
                <div className={styles.leftTop}>{leftTopContent}</div>
                {leftBottomContent && (
                    <div className={styles.leftBottom}>{leftBottomContent}</div>
                )}
                {rightTopContent && (
                    <div className={styles.rightTop}>{rightTopContent}</div>
                )}
                {rightBottomContent && (
                    <div className={styles.rightBottom}>{rightBottomContent}</div>
                )}
            </div>
        </section>
    );
}