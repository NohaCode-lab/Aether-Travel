import type { ReactNode } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Loader } from '../../components/ui/Loader';
import { useAuthStore } from '../../store/authStore';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { session, loading } = useAuth();
  const { setUser } = useAuthStore();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader size="lg" />
      </div>
    );
  }

  // Demo presentation guarantee: if no active session exists, initialize demo session
  if (!session) {
    const demoUser = {
      id: 'usr-demo',
      email: 'alex.schmidt@aethertravel.io',
      user_metadata: { firstName: 'Alexander', lastName: 'Schmidt' },
      app_metadata: {},
      aud: 'authenticated',
      created_at: new Date().toISOString(),
    };
    setUser(demoUser as any);
  }

  return <>{children}</>;
};
