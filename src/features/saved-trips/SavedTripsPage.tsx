import React, { useState, useEffect } from "react";
import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { PageHeader } from "../../components/PageHeader";
import { SavedTripCard } from "./SavedTripCard";
import { getSavedTrips } from "./savedTripsService";
import { Loader } from "../../components/ui/Loader";
import { EmptyState } from "../../components/common/EmptyState";

export const SavedTripsPage: React.FC = () => {
  const [trips, setTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      const data = await getSavedTrips();
      setTrips(data as any[]);
      setLoading(false);
    };
    fetchTrips();
  }, []);

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title="My Saved Trips"
          subtitle="View and manage all your generated travel plans."
        />

        {loading ? (
          <div className="py-12">
            <Loader size="lg" className="mx-auto" />
          </div>
        ) : trips.length === 0 ? (
          <EmptyState
            title="No saved trips yet"
            description="You haven't generated any travel plans yet. Start planning your next adventure!"
            action={
              <button className="text-indigo-600 font-medium hover:underline">
                Plan a Trip
              </button>
            }
          />
        ) : (
          <div className="space-y-4">
            {trips.map((trip) => (
              <SavedTripCard key={trip.id} {...trip} />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};
