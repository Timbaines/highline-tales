import { FaRegHeart } from 'react-icons/fa';
import { useRef, useEffect } from 'react';
import { setupCounter } from '@/utils/counter';

/***** MODULE STYLES *****/
import styles from './Card.module.css';

export default function Card({ adventure })  {
    const likeCounterRef = useRef(null);

    useEffect(() => {
        if (likeCounterRef.current) {
            setupCounter(likeCounterRef.current);
        }
    }, []);

    return (
        <article className={styles.card}>
            <div className={styles.cardImageContainer}>
                <img
                    className={styles.cardImage}
                    src={adventure.image}
                    alt={adventure.title}
                />
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                    <a>{adventure.title}</a>
                </h3>
                <p className={styles.cardStats}>
                    Date: {adventure.date} | Difficulty: {adventure.difficulty} | Miles: {adventure.miles}
                </p>
                <p className={styles.cardDescription}>
                    {adventure.description}
                </p>
                <div className={styles.cardActions}>
                    <a className={styles.cardLink} href="/public">Read More →</a>
                    <div className={styles.cardLikes}>
                        <FaRegHeart />
                        <span ref={likeCounterRef} className={styles.likeCounter}></span>
                    </div>
                </div>
            </div>
        </article>
    )
};