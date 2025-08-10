/**
 * String utilities
 *
 * Currently exported:
 * - createSlug(str): generates a URL-friendly slug from an arbitrary string.
 */

/**
 * Convert a string into a URL-friendly slug.
 * - Lowercases
 * - Trims whitespace
 * - Replaces any non-alphanumeric (a-z, 0-9) with hyphens
 * - Collapses multiple hyphens
 * - Trims leading/trailing hyphens
 *
 * @param {string} str
 * @returns {string}
 */
export function createSlug(str = '') {
  try {
    const s = String(str)
      .normalize('NFKD')                 // decompose accents
      .replace(/[\u0300-\u036f]/g, '') // remove diacritics
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')       // non-alphanumerics -> hyphen
      .replace(/-{2,}/g, '-')            // collapse hyphens
      .replace(/^-+|-+$/g, '');          // trim hyphens

    return s || 'n-a'; // fallback to a safe placeholder
  } catch (e) {
    // In case an unexpected value is passed
    return 'n-a';
  }
}
