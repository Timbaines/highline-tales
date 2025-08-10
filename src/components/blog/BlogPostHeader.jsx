import PrimaryNav from '@/components/navigation/PrimaryNav';

/***** MODULE STYLES *****/
import styles from '@/components/blog/BlogPostHeader.module.css';

export default function BlogPostHeader() {
    return (
        <div className={styles.blogPostHeader}>
            <div className={styles.headerNavContainer}>
                <PrimaryNav />
            </div>
        </div>
    );
}
