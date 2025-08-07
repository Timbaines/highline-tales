/***** MODULE STYLES *****/
import styles from '@/layouts/components/Container.module.css';

export default function Container({ children, variant = 'default', className = ''}) {
    return (
        <div className={`${styles.container} ${styles[variant] || ''} ${className}`}>
            {children}
        </div>
    )
}

