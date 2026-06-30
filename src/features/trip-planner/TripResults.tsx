import type { TripItinerary } from './tripTypes';
import { TripCard } from './TripCard';

interface TripResultsProps {
  itinerary: TripItinerary;
}

export const TripResults: React.FC<TripResultsProps> = ({ itinerary }) => {
  return (
    <div>
      {itinerary.days.map((day, index) => (
        <TripCard key={index} day={day} />
      ))}
    </div>
  );
};
