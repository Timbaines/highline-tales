import { blogData } from '@/data/blogData';
import ImageCardList from '@/components/ui/cards/ImageCardList';
import Grid from '@/layouts/components/Grid';

/***** MODULE STYLES *****/
import styles from '@/pages/blog/BlogPage.module.css';

export default function BlogPage() {
    return (
        <>
            <h2>Travel Log</h2>
            <Grid variant="twoColumn" className={styles.blogMargin}>
                <ImageCardList
                    items={blogData}
                    contentType="blog"
                    layout="grid"
                />
            </Grid>
        </>
    );
}

