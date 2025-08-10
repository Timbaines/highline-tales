import { blogData } from '@/data/blogData';

export function getAllPosts() {
  return blogData;
}

export function getPostBySlug(slug) {
  return blogData.find(p => p.slug === slug) || null;
}

export function getRecentPosts(n = 5) {
  return blogData.slice(0, n);
}
