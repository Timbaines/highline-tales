import { Link } from 'react-router-dom';

/***** MODULE STYLES *****/
import styles from '@/components/ui/cards/InfoCard.module.css';

export default function InfoCard() {

    const topCardData = {
        title: "Our Glacier Experience",
        date: "July 30, 2025",
        description: "Check out the highlights and photos from our recent adventure on the Highline Trail.",
        url: "/blog"
    };

    const bottomCardData = {
        title: "Trail Hiking Essentials",
        date: "July 28, 2025",
        description: "Explore our list of hiking essentials to stay safe, comfortable, and ready for Glacier’s terrain.",
        url: "/hiking-checklist"
    };

    const renderCard = (data) => (
        <article className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>
                        <Link to={data.url}>{data.title}</Link>
                    </h3>
                </div>
                <div className={styles.cardDetails}>
                    <p className={styles.cardDescription}>
                        {data.description}
                    </p>
                    <div className={styles.cardActions}>
                        <Link
                            className={styles.cardLink}
                            to={data.url}
                        >
                            Read More →
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );

    return (
        <div className={styles.container}>
            <div className={styles.topCard}>
                {renderCard(topCardData)}
            </div>
            <div className={styles.bottomCard}>
                {renderCard(bottomCardData)}
            </div>
        </div>
    );
}