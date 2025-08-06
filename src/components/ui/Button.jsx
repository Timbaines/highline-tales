/***** MODULE STYLES *****/
import styles from '@/components/ui/Button.module.css';

export default function Button({ children, onClick, type, size }) {
    return (
        <button onClick={onClick} className={`${styles.btn} ${styles[type]} ${styles[size]}`}>
            { children }
        </button>
    )
}