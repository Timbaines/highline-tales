/***** MODULE STYLES *****/
import styles from '@/layouts/components/Grid.module.css';

export default function Grid({ children, variant = 'default', className = ''}) {
    return (
        <div className={`${styles.grid} ${styles[variant] || ''} ${className}`}>
            {children}
        </div>
    )
}

