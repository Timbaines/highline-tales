import { supabase, supabaseEnabled } from '@/services/supabase/supabase.js';

// INCREMENT PAGE VIEWS IN SUPABASE ANALYTICS TABLE.
// USES LOCAL STORAGE TO AVOID DUPLICATE CALLS.

export async function trackPageViewOncePerSession(slug, storage = (typeof window !== 'undefined' ? window.localStorage : undefined)) {
  // SHORT CIRCUIT IF SSR/NO WINDOW OR SUPABASE NOT CONFIGURED
  if (!storage || !supabaseEnabled) return;
  const viewedPages = JSON.parse(storage.getItem('viewedPages') || '{}');
  if (!viewedPages[slug]) {
    await supabase.rpc('increment_page_view', { page_slug: slug });
    viewedPages[slug] = true;
    storage.setItem('viewedPages', JSON.stringify(viewedPages));
  }
}

export async function fetchPageViews(slug) {
  // If Supabase is not configured, report 0 views without error to avoid UI noise
  if (!supabaseEnabled) return { views: 0, error: null };
  const { data, error } = await supabase
    .from('analytics')
    .select('views')
    .eq('slug', slug)
    .single();
  return { views: data?.views ?? 0, error };
}
