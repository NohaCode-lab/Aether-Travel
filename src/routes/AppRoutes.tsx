import { Routes, Route } from 'react-router-dom';
import LoginPage from '../features/auth/LoginPage';
import RegisterPage from '../features/auth/RegisterPage';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { useAuth } from '../hooks/useAuth';
import { Loader } from '../components/ui/Loader';
import { ProtectedRoute } from '../features/auth/ProtectedRoute';

import { DashboardPage } from '../features/dashboard/DashboardPage';
import { DestinationsPage } from '../features/destination-discovery/DestinationsPage';
import TripPlannerPage from '../features/trip-planner/TripPlannerPage';
import AIChatPage from '../features/ai-chat/AIChatPage';
import DocumentVaultPage from '../features/documents/DocumentVaultPage';
import FlightTrackerPage from '../features/flight-tracker/FlightTrackerPage';
import AnalyticsPage from '../features/analytics/AnalyticsPage';
import AdminPanelPage from '../features/admin/AdminPanelPage';
import { ProfilePage } from '../features/profile/ProfilePage';

export const AppRoutes = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader size="lg" />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/destinations"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <DestinationsPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/trip-planner"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <TripPlannerPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/ai-chat"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <AIChatPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/documents"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <DocumentVaultPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/flight-tracker"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <FlightTrackerPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <AnalyticsPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <AdminPanelPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <ProfilePage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;