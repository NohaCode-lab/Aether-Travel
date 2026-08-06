import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { authService } from "../features/auth/authService";

export const useAuth = () => {
  const { user, isLoading: loading, setUser, setLoading } = useAuthStore();

  useEffect(() => {
    if (!user) {
      setUser({
        id: 'usr-demo',
        email: 'alex.schmidt@aethertravel.io',
        user_metadata: { firstName: 'Alexander', lastName: 'Schmidt' },
        app_metadata: {},
        aud: 'authenticated',
        created_at: new Date().toISOString(),
      } as any);
    }
    setLoading(false);
  }, [user, setUser, setLoading]);

  const signOut = async () => {
    await authService.logout();
  };

  return { session: user, user, loading, signOut };
};
