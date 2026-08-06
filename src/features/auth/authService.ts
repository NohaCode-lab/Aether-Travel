import { supabase } from "../../services/supabase";
import { useAuthStore } from "../../store/authStore";

export const authService = {
  async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    
    // In unconfigured mock mode, provide a valid fallback user session
    const user = data?.user ?? {
      id: 'usr-demo',
      email,
      user_metadata: { firstName: email.split('@')[0], lastName: 'Traveler' },
      app_metadata: {},
      aud: 'authenticated',
      created_at: new Date().toISOString(),
    };

    useAuthStore.getState().setUser(user as any);
    return data;
  },

  async register(email: string, password: string, firstName: string, lastName: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    });
    if (error) throw error;

    const user = data?.user ?? {
      id: 'usr-demo',
      email,
      user_metadata: { firstName, lastName },
      app_metadata: {},
      aud: 'authenticated',
      created_at: new Date().toISOString(),
    };

    useAuthStore.getState().setUser(user as any);
    return data;
  },

  async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    
    useAuthStore.getState().setUser(null);
    useAuthStore.getState().setProfile(null);
  },
};