import { FaRegHeart } from 'react-icons/fa';

import styles from './Card.module.css';

export default function Card({ adventure }) {
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
                    <a className={styles.cardLink} href="/">Read More →</a>
                    <span className={styles.cardLikes}><FaRegHeart /></span>
                </div>
            </div>
        </article>
    )
};