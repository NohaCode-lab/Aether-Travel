import { useState, useEffect } from 'react';
import type { Trip } from '../features/trip-planner/tripTypes';

// This is a mock trip service. In a real app, this would be in its own file.
const tripService = {
  getTrips: async (userId: string): Promise<Trip[]> => {
    console.log(`Fetching trips for user ${userId}`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    // In a real app, you would fetch data from your backend.
    // Returning mock data for demonstration.
    return [
      {
        id: 1,
        destination: 'Kyoto',
        country: 'Japan',
        image:
          'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        startDate: '2024-10-15',
        endDate: '2024-10-22',
      },
      {
        id: 2,
        destination: 'Santorini',
        country: 'Greece',
        image:
          'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        startDate: '2024-09-05',
        endDate: '2024-09-12',
      },
    ];
  },
};

export const useTrips = (userId: string | null) => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTripsData = async () => {
      if (!userId) {
        setTrips([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const data = await tripService.getTrips(userId);
        setTrips(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch trips.');
      } finally {
        setLoading(false);
      }
    };

    fetchTripsData();
  }, [userId]); // Now userId is the direct dependency

  // Refetch function can be kept if needed, but it would need to be memoized with useCallback
  return { trips, loading, error };
};
