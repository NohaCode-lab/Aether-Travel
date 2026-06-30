import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useTrips } from '../../hooks/useTrips';
import { Card } from '../../components/ui/Card';
import { Loader } from '../../components/ui/Loader';
import { EmptyState } from '../../components/common/EmptyState';
import { Button } from '../../components/ui/Button';

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { trips, loading: tripsLoading } = useTrips(user?.id ?? null);

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome back, {user?.user_metadata?.firstName || 'Traveler'}!
      </h1>
      <p className="mt-2 text-lg text-gray-600">
        Here's a look at your upcoming adventures.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Trips</h2>
        {tripsLoading ? (
          <Loader />
        ) : trips.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip) => (
              <Card key={trip.id} className="p-4" hoverable>
                <img
                  src={trip.image}
                  alt={trip.destination}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold">{trip.destination}</h3>
                <p className="text-gray-500">{trip.country}</p>
                <p className="text-sm text-gray-600 mt-2">
                  {trip.startDate} - {trip.endDate}
                </p>
              </Card>
            ))}
          </div>
        ) : (
          <EmptyState
            title="No Trips Planned"
            description="You haven't planned any trips yet. Let's change that!"
            action={
              <Link to="/trip-planner">
                <Button>Plan a New Trip</Button>
              </Link>
            }
          />
        )}
      </div>
    </div>
  );
};
