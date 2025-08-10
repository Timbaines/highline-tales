import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@/components/errors/ErrorBoundary.module.css';

export default class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('GlobalErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const err = this.state.error;
      return (
        <div className={styles.container} role="alert">
          <h2 className={styles.title}>Something went wrong</h2>
          <p className={styles.message}>An unexpected error occurred. Please try again or return to the homepage.</p>
          <div className={styles.actions}>
            <Link to="/">Go to Home</Link>
          </div>
          {process.env.NODE_ENV !== 'production' && err && (
            <pre className={styles.devError}>{String(err?.stack || err?.message || err)}</pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
