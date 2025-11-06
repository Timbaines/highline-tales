import { getActivityBySlug } from '@/services/activitiesService';


 // COMPUTE BANNER CONTENT BASED ON ROUTE AND ACTIVITY SLUG
 // RETURN OBJECT WITH BACKGROUND IMAGE, SUBTITLE, TITLE, AND HEIGHT

export function getSubpageHeaderContent(pathname = '/', slug = '') {
  // DEFAULT HEIGHT FOR ALL SUBPAGES
  const defaultHeight = '45vh';
  const minHeight = '300px';

  switch (pathname) {
    case '/hiking-checklist':
      return {
        backgroundImage: '/banner-trail-gear-page.webp',
        subtitle: 'GLACIER NATIONAL PARK',
        title: 'Hiking Essentials',
        height: defaultHeight,
        minHeight: minHeight,
      };
    case '/activities':
      return {
        backgroundImage: '/banner-activities-page.webp',
        subtitle: 'GLACIER NATIONAL PARK',
        title: 'Travel Experiences',
        height: defaultHeight,
        minHeight: minHeight,
      };
    case '/blog':
      return {
        backgroundImage: '/banner-blog-page.webp',
        subtitle: 'GLACIER NATIONAL PARK',
        title: 'Trailing Tales',
        height: defaultHeight,
        minHeight: minHeight,
      };
    default:
      // HANDLE ACTIVITY DETAILS PAGE
      if (pathname.startsWith('/activities/') && slug) {
        const activity = getActivityBySlug(slug);
        if (activity) {
          return {
            backgroundImage: activity.image || '/highline-tales-hero-banner.webp',
            subtitle: `${activity.subtitle}`,
            title: activity.title,
            height: defaultHeight,
            minHeight: minHeight,
          };
        }
      }
      // FALLBACK TO DEFAULT
      return {
        backgroundImage: '/banner-activities-page.webp',
        subtitle: 'GLACIER NATIONAL PARK',
        title: 'Highline Tales',
        height: defaultHeight,
        minHeight: minHeight,
      };
  }
}