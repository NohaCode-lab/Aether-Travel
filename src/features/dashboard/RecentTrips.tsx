import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

export const RecentTrips: React.FC = () => {
  const trips = [
    {
      id: 1,
      destination: 'Tokyo, Japan',
      date: 'Oct 10 - Oct 24, 2024',
      status: 'Upcoming',
    },
    {
      id: 2,
      destination: 'Paris, France',
      date: 'Jul 1 - Jul 10, 2024',
      status: 'Completed',
    },
    {
      id: 3,
      destination: 'Bali, Indonesia',
      date: 'Dec 5 - Dec 15, 2024',
      status: 'Draft',
    },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Trips</h2>
      <div className="space-y-4">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div>
              <h3 className="font-semibold text-gray-800">
                {trip.destination}
              </h3>
              <p className="text-sm text-gray-500">{trip.date}</p>
            </div>
            <Badge
              variant={
                trip.status === 'Upcoming'
                  ? 'primary'
                  : trip.status === 'Completed'
                    ? 'success'
                    : 'secondary'
              }
            >
              {trip.status}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
};
