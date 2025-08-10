import { activitiesData } from '@/data/activitiesData';
import { createSlug } from '@/utils/stringUtils';

export function getAllActivities() {
  return activitiesData;
}

export function getActivityBySlug(slug) {
  return activitiesData.find(a => createSlug(a.title) === slug) || null;
}

export function searchActivities(query) {
  const q = String(query).toLowerCase();
  return activitiesData.filter(a => a.title.toLowerCase().includes(q));
}
