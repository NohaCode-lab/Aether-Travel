import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';
import { useTrips } from '../../hooks/useTrips';
import { Card } from '../../components/ui/Card';
import { Loader } from '../../components/ui/Loader';
import { EmptyState } from '../../components/common/EmptyState';
import { Button } from '../../components/ui/Button';
import { TravelMap } from '../../components/shared/TravelMap';
import { MapPin, Sparkles } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const { trips, loading: tripsLoading } = useTrips(user?.id ?? null);

  const mapMarkers = [
    { id: 'm1', lat: 35.0116, lng: 135.7681, title: 'Kyoto Historic Tour', category: 'attraction' as const, description: 'Fushimi Inari Shrine & Bamboo Grove' },
    { id: 'm2', lat: 35.0037, lng: 135.7772, title: 'Gion Ryokan Hotel', category: 'hotel' as const, description: 'Traditional Japanese Luxury Stay' },
    { id: 'm3', lat: 35.0040, lng: 135.7700, title: 'Kaisou Gastronomy', category: 'restaurant' as const, description: 'Michelin Star Kaiseki Dining' },
  ];

  const mapRoute: [number, number][] = [
    [35.0116, 135.7681],
    [35.0037, 135.7772],
    [35.0040, 135.7700],
  ];

  const firstName = (user as any)?.user_metadata?.firstName || (user as any)?.firstName || t('common.traveler');

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t('dashboard.title')}, {firstName}!
          </h1>
          <p className="mt-1 text-base text-gray-600 dark:text-gray-400">
            {t('dashboard.subtitle')}
          </p>
        </div>
        <Link to="/ai-chat">
          <Button className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Consult AI Concierge
          </Button>
        </Link>
      </div>

      <Card className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-900 dark:text-white text-lg flex items-center gap-2">
            <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Interactive Route Map & Attractions
          </h3>
          <span className="text-xs text-gray-400 font-mono">OpenStreetMap + Leaflet</span>
        </div>
        <TravelMap
          center={[35.0116, 135.7681]}
          zoom={13}
          markers={mapMarkers}
          routePath={mapRoute}
          travelTime="18 mins walk"
          distanceKm={3.4}
        />
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          {t('dashboard.myTrips')}
        </h2>
        {tripsLoading ? (
          <Loader />
        ) : trips.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip) => (
              <Card key={trip.id} className="p-4" hoverable>
                <img
                  src={trip.image}
                  alt={trip.destination}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{trip.destination}</h3>
                <p className="text-gray-500 dark:text-gray-400">{trip.country}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-mono">
                  {trip.startDate} - {trip.endDate}
                </p>
              </Card>
            ))}
          </div>
        ) : (
          <EmptyState
            title={t('dashboard.noTripsTitle')}
            description={t('dashboard.noTripsDesc')}
            action={
              <Link to="/trip-planner">
                <Button>{t('dashboard.planTrip')}</Button>
              </Link>
            }
          />
        )}
      </div>
    </div>
  );
};
