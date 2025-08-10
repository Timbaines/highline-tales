import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import styles from './BackLinkNav.module.css';

export default function BackLinkNav({ to, children, className = '' }) {
  const linkClass = `${styles.backLink} ${className}`.trim();
  return (
    <Link to={to} className={linkClass}>
      <IoIosArrowRoundBack className={styles.backIcon} size={30} />
      <span>{children}</span>
    </Link>
  );
}
