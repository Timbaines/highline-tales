import { FaCalendarAlt } from 'react-icons/fa';

export default function PostMeta({ date, author, className = '' }) {
  return (
    <div className={className} style={{ marginTop: '.75rem', marginBottom: '2rem', fontSize: '0.875rem' }}>
      {author && <span>By: {author}</span>}
      {date && <span> | <FaCalendarAlt size={12} /> {date}</span>}
    </div>
  );
}
