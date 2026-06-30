import { Routes, Route } from "react-router-dom";

// Layouts
import DashboardLayout from "../components/layout/DashboardLayout";

// Feature Pages (To be created)
import ProtectedRoute from "../features/auth/ProtectedRoute";
import LoginPage from "../features/auth/LoginPage";
import RegisterPage from "../features/auth/RegisterPage";
import DashboardPage from "../features/dashboard/DashboardPage";
import TripPlannerPage from "../features/trip-planner/TripPlannerPage";
import TripResults from "../features/trip-planner/TripResults";
import AIChatPage from "../features/ai-chat/AIChatPage";
import BudgetOptimizerPage from "../features/budget-optimizer/BudgetOptimizerPage";
import VisaCheckerPage from "../features/visa-checker/VisaCheckerPage";
// import SchengenPage from "../features/schengen-calculator/SchengenPage";
// import DestinationsPage from "../features/destination-discovery/DestinationsPage";
// import RelocationPage from "../features/relocation-assistant/RelocationPage";
// import SavedTripsPage from "../features/saved-trips/SavedTripsPage";
// import ProfilePage from "../features/profile/ProfilePage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected Routes inside Dashboard Layout */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/planner" element={<TripPlannerPage />} />
          <Route path="/planner/results" element={<TripResults />} />
          <Route path="/ai-assistant" element={<AIChatPage />} />
          <Route path="/budget-optimizer" element={<BudgetOptimizerPage />} />
          <Route path="/visa-checker" element={<VisaCheckerPage />} />
          {/* <Route path="/schengen-calculator" element={<SchengenPage />} /> */}
          {/* <Route path="/destinations" element={<DestinationsPage />} /> */}
          {/* <Route path="/relocation" element={<RelocationPage />} /> */}
          {/* <Route path="/saved-trips" element={<SavedTripsPage />} /> */}
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
        </Route>
      </Route>

      <Route
        path="*"
        element={
          <div className="flex items-center justify-center min-h-screen text-2xl font-bold">
            404 - الصفحة غير موجودة
          </div>
        }
      />
    </Routes>
  );
}
