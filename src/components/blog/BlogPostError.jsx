import { useRouteError } from "react-router-dom";
import BackLinkNav from '@/components/common/BackLinkNav';

/***** MODULE STYLES *****/
import styles from '@/components/errors/ErrorBoundary.module.css';

export default function BlogPostError() {
    const error = useRouteError();

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Blog Post Not Found</h2>
            <p className={styles.message}>Sorry, we couldn't find the blog post you're looking for.</p>
            <nav className={styles.actions}>
                <BackLinkNav to="/blog">Back to Blog Page</BackLinkNav>
            </nav>
            {process.env.NODE_ENV !== 'production' && error?.statusText && (
                <pre className={styles.devError}>{error.statusText}</pre>
            )}
        </div>
    );
};