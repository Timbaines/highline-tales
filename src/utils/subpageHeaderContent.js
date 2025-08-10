import { getActivityBySlug } from '@/services/activitiesService';

/**
 * Compute banner content for SubpageHeader based on the current pathname and optional slug.
 * Returns an object with: { backgroundImage, subtitle, title, height }
 */
export function getSubpageHeaderContent(pathname = '/', slug = '') {
  // Common default height for subpage headers
  const defaultHeight = '45vh';

  switch (pathname) {
    case '/hiking-checklist':
      return {
        backgroundImage: '/ht-banner2.webp',
        subtitle: 'GLACIER NATIONAL PARK',
        title: 'Hiking Essentials',
        height: defaultHeight,
      };
    case '/activities':
      return {
        backgroundImage: '/highline-trail-hero-banner.webp',
        subtitle: 'GLACIER NATIONAL PARK',
        title: 'Big Sky Highlights',
        height: defaultHeight,
      };
    case '/blog':
      return {
        backgroundImage: '/highline-trail-hero-banner.webp',
        subtitle: 'GLACIER NATIONAL PARK',
        title: 'Trailing Tales',
        height: defaultHeight,
      };
    default:
      // Handle dynamic activity pages
      if (pathname.startsWith('/activities/') && slug) {
        const activity = getActivityBySlug(slug);
        if (activity) {
          return {
            backgroundImage: activity.image || '/highline-tales-hero-banner.webp',
            subtitle: `${activity.subtitle}`,
            title: activity.title,
            height: defaultHeight,
          };
        }
      }
      // Fallback for all other routes
      return {
        backgroundImage: '/gallery-banner1.webp',
        subtitle: 'GLACIER NATIONAL PARK',
        title: 'Highline Tales',
        height: defaultHeight,
      };
  }
}
