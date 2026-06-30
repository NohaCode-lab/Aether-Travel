import { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { PageHeader } from '../../components/PageHeader';
import { TripPlannerForm } from './TripPlannerForm';
import { TripResults } from './TripResults';
import { tripPlannerService } from './tripPlannerService';
import type { TripItinerary } from './tripTypes';

export default function TripPlannerPage() {
  const [itinerary, setItinerary] = useState<TripItinerary | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (destination: string, days: number) => {
    setIsLoading(true);
    setError(null);
    setItinerary(null);
    try {
      const generatedItinerary = await tripPlannerService.generateItinerary(
        destination,
        days
      );
      setItinerary(generatedItinerary);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to generate itinerary.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <PageHeader
        title="AI Trip Planner"
        subtitle="Let our AI craft the perfect itinerary for your next adventure."
      />
      <div className="w-full max-w-4xl mx-auto">
        <TripPlannerForm onGenerate={handleGenerate} isLoading={isLoading} />
        {error && <div className="text-red-500 text-center my-4">{error}</div>}
        {itinerary && <TripResults itinerary={itinerary} />}
      </div>
    </DashboardLayout>
  );
}
