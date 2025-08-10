// Error helpers and re-exports for HTTP/service layer
// Provides classification utilities and user-facing message mapping.

export { default as ApiError } from './ApiError.js';

export function isNetworkError(err) {
  return (
    (err && typeof err === 'object' && err.code === 'NETWORK') ||
    err?.name === 'AbortError' ||
    err instanceof TypeError
  );
}

export function classifyStatus(status) {
  if (typeof status !== 'number') return 'UNKNOWN';
  if (status >= 500) return 'SERVER';
  if (status >= 400) return 'CLIENT';
  if (status >= 200) return 'SUCCESS';
  return 'UNKNOWN';
}

export function toUserMessage(error) {
  if (!error) return 'An unexpected error occurred.';
  if (isNetworkError(error)) return 'Network issue — please check your connection and try again.';
  const status = error.status;
  const category = classifyStatus(status);
  switch (category) {
    case 'CLIENT':
      return 'We had trouble with the request. Please verify your input and try again.';
    case 'SERVER':
      return 'The service is having issues right now. Please try again later.';
    default:
      return 'Something went wrong. Please try again.';
  }
}