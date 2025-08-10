import { useLoaderData } from 'react-router-dom';
import PostMeta from '@/components/common/PostMeta';
import BackLinkNav from '@/components/common/BackLinkNav';
import { parseContent } from '@/utils/contentParserUtils.jsx';


/***** MODULE STYLES *****/
import styles from '@/pages/blog/BlogPostPage.module.css';

export default function BlogPostPage() {
    const { post } = useLoaderData();

    return (
        <div className={styles.blogPostContainer}>
                <article>
                    <header className={styles.postHeader}>
                        <h1>{post.title}</h1>
                        <PostMeta date={post.date} author={post.author} className={styles.postMetaContainer} />
                    </header>

                    <figure className={styles.contentFigure}>
                        <img
                            src={post.image}
                            alt={post.title}
                            className={styles.postImage}
                        />
                    </figure>

                    <div>
                        {parseContent(post.content, styles)}
                    </div>
                </article>

                <nav className={styles.postNav}>
                    <BackLinkNav to="/blog" className={styles.backLink}>Back to Blog Page</BackLinkNav>
                </nav>
            </div>
    );
}