import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  // PROVIDE A WARNING IF ENV VARIABLES ARE MISSING
  if (import.meta?.env?.DEV) {
    // eslint-disable-next-line no-console
    console.warn('[Supabase] Missing VITE_PUBLIC_SUPABASE_URL or VITE_PUBLIC_SUPABASE_ANON_KEY. Visitor analytics will be disabled or fail.');
  }
}

export const supabase = createClient(supabaseUrl || 'https://invalid.local', supabaseKey || '');