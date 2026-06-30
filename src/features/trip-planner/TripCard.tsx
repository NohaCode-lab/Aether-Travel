import { Card } from '../../components/ui/Card';
import type { TripDay } from './tripTypes';

interface TripCardProps {
  day: TripDay;
}

export const TripCard: React.FC<TripCardProps> = ({ day }) => {
  return (
    <Card className="p-6 mb-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
        {day.date}
      </h3>
      <div className="space-y-4">
        {day.activities.map((activity) => (
          <div key={activity.id} className="flex gap-4">
            <div className="w-20 shrink-0 text-sm font-medium text-indigo-600">
              {activity.time}
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{activity.title}</h4>
              <p className="text-sm text-gray-500">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
