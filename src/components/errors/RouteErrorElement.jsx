import { isRouteErrorResponse, useRouteError, Link } from 'react-router-dom';

/***** MODULE STYLES *****/
import styles from '@/components/errors/ErrorBoundary.module.css';

export default function RouteErrorElement() {
  const error = useRouteError();

  const heading = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : 'Something went wrong';

  const message = isRouteErrorResponse(error)
    ? error.data || 'An error occurred while loading this page.'
    : 'An unexpected error occurred. Please try again or return to the homepage.';

  return (
    <div className={styles.container} role="alert">
      <h2 className={styles.title}>{heading}</h2>
      <p className={styles.message}>{message}</p>
      <div className={styles.actions}>
        <Link to="/">Go to Home</Link>
      </div>
      {import.meta.env?.DEV && error && (
        <pre className={styles.devError}>
          {isRouteErrorResponse(error)
            ? JSON.stringify({ status: error.status, statusText: error.statusText, data: error.data }, null, 2)
            : String(error?.stack || error?.message || error)}
        </pre>
      )}
    </div>
  );
}
