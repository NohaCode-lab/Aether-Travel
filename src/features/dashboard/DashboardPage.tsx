import React from "react";
import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { PageHeader } from "../../components/PageHeader";
import { DashboardStats } from "./DashboardStats";
import { QuickActions } from "./QuickActions";
import { RecentTrips } from "./RecentTrips";

export const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <PageHeader
          title="Welcome back, Traveler!"
          subtitle="Here is what's happening with your trips."
        />
        <DashboardStats />
        <QuickActions />
        <RecentTrips />
      </div>
    </DashboardLayout>
  );
};
