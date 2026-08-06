import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_URL.trim() !== ""
    ? import.meta.env.VITE_SUPABASE_URL
    : "https://aether-travel.supabase.co";

const supabaseKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY && import.meta.env.VITE_SUPABASE_ANON_KEY.trim() !== ""
    ? import.meta.env.VITE_SUPABASE_ANON_KEY
    : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFldGhlciIsInJvbGUiOiJhbm9uIn0.mock-key-for-dev";

export const supabase = createClient(supabaseUrl, supabaseKey);