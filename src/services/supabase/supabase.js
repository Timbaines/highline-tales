import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

// FLAG TO INDICATE SUPABASE IS CONFIGURED PROPERLY
export const supabaseEnabled = Boolean(supabaseUrl && supabaseKey);

if (!supabaseEnabled) {
  // PROVIDE A WARNING ONLY IN DEV MODE
  if (import.meta?.env?.DEV) {
    // eslint-disable-next-line no-console
    console.warn('[Supabase] Missing VITE_PUBLIC_SUPABASE_URL or VITE_PUBLIC_SUPABASE_ANON_KEY. Supabase features are disabled.');
  }
}

// EXPORT A REAL SUPABASE CLIENT IF ENABLED, OR A MOCKED CLIENT IF DISABLED
export const supabase = supabaseEnabled
  ? createClient(supabaseUrl, supabaseKey)
  : {
      rpc: async () => ({ data: null, error: new Error('Supabase disabled') }),
      from: () => ({
        select: () => ({
          eq: () => ({
            single: () => Promise.resolve({ data: null, error: new Error('Supabase disabled') })
          })
        })
      })
    };