import { FaRegHeart } from 'react-icons/fa';

import styles from './Card.module.css';

export default function Card({ activity }) {
    return (
        <article className={styles.card}>
            <div className={styles.cardImageContainer}>
                <img
                    className={styles.cardImage}
                    src={activity.image}
                    alt={activity.title}
                />
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                    <a>{activity.title}</a>
                </h3>
                <p className={styles.cardStats}>
                    Date: {activity.date} | Difficulty: {activity.difficulty} | Miles: {activity.miles}
                </p>
                <p className={styles.cardDescription}>
                    {activity.description}
                </p>
                <div className={styles.cardActions}>
                    <a className={styles.cardLink} href="/">Read More →</a>
                    <span className={styles.cardLikes}><FaRegHeart /></span>
                </div>
            </div>
        </article>
    )
};