import { getActivityBySlug } from '@/services/activitiesService';


 // COMPUTE BANNER CONTENT BASED ON ROUTE AND ACTIVITY SLUG
 // RETURN OBJECT WITH BACKGROUND IMAGE, SUBTITLE, TITLE, AND HEIGHT

export function getSubpageHeaderContent(pathname = '/', slug = '') {
  // DEFAULT HEIGHT FOR ALL SUBPAGES
  const defaultHeight = '45vh';

  switch (pathname) {
    case '/hiking-checklist':
      return {
        backgroundImage: '/banner-trail-gear-page.webp',
        subtitle: 'GLACIER NATIONAL PARK',
        title: 'Hiking Essentials',
        height: defaultHeight,
      };
    case '/activities':
      return {
        backgroundImage: '/banner-activities-page.webp',
        subtitle: 'GLACIER NATIONAL PARK',
        title: 'Big Sky Highlights',
        height: defaultHeight,
      };
    case '/blog':
      return {
        backgroundImage: '/banner-blog-page.webp',
        subtitle: 'GLACIER NATIONAL PARK',
        title: 'Trailing Tales',
        height: defaultHeight,
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
          };
        }
      }
      // FALLBACK TO DEFAULT
      return {
        backgroundImage: '/banner-activities-page.webp',
        subtitle: 'GLACIER NATIONAL PARK',
        title: 'Highline Tales',
        height: defaultHeight,
      };
  }
}