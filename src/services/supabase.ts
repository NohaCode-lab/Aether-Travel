import { createClient, SupabaseClient } from "@supabase/supabase-js";

const rawUrl = import.meta.env.VITE_SUPABASE_URL;
const rawKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isConfigured = Boolean(rawUrl && rawUrl.trim() !== "" && rawKey && rawKey.trim() !== "");

if (!isConfigured) {
  console.warn(
    "[Aether-Travel] Supabase environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) are not set. Auth running in Local/Mock Mode."
  );
}

// Create real client if configured, otherwise create graceful fallback mock client
export const supabase: SupabaseClient = isConfigured
  ? createClient(rawUrl!, rawKey!)
  : ({
      auth: {
        getSession: async () => ({ data: { session: null }, error: null }),
        onAuthStateChange: (_callback: any) => ({
          data: { subscription: { unsubscribe: () => {} } },
        }),
        signInWithPassword: async () => ({ data: { user: null, session: null }, error: null }),
        signUp: async () => ({ data: { user: null, session: null }, error: null }),
        signOut: async () => ({ error: null }),
      },
    } as unknown as SupabaseClient);