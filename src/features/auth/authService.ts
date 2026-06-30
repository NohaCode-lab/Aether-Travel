import { supabase } from "../../services/supabase";
import { useAuthStore } from "../../store/authStore";

export const authService = {
  async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    
    useAuthStore.getState().setUser(data.user);
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
    
    useAuthStore.getState().setUser(data.user);
    return data;
  },

  async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    
    useAuthStore.getState().setUser(null);
    useAuthStore.getState().setProfile(null);
  },
};