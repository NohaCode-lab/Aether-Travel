import { useAuthStore } from "../store/authStore";
import { authService } from "../features/auth/authService";

export const useAuth = () => {
  const { user, isLoading: loading, isAuthenticated } = useAuthStore();

  const signOut = async () => {
    await authService.logout();
  };

  return { session: user, user, loading, isAuthenticated, signOut };
};

