import { useLoaderData } from 'react-router-dom';
import PostMeta from '@/components/common/PostMeta.jsx';
import BackLinkNav from '@/components/common/BackLinkNav.jsx';
import { parseContent } from '@/utils/contentParserUtils.jsx';

/***** MODULE STYLES *****/
import styles from '@/components/blog/posts/BlogPost.module.css';

export default function BlogPost() {
    const { post } = useLoaderData();

    return (
        <div className={styles.blogPostContainer}>
                <article>
                    <header className={styles.postHeader}>
                        <h1>{post.title}</h1>
                        <PostMeta date={post.date} author={post.author} className={styles.postMetaContainer} />
                    </header>

                    <figure>
                        <img
                            src={post.image}
                            alt={post.title}
                            className={styles.postImage}
                        />
                    </figure>

                    <div className="prose">
                        {parseContent(post.content)}
                    </div>
                </article>

                <nav className={styles.postNav}>
                    <BackLinkNav to="/blog">Back to Blog Page</BackLinkNav>
                </nav>
            </div>
    );
}