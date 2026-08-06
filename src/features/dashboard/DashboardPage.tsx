import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';
import { useTrips } from '../../hooks/useTrips';
import { Card } from '../../components/ui/Card';
import { Loader } from '../../components/ui/Loader';
import { EmptyState } from '../../components/common/EmptyState';
import { Button } from '../../components/ui/Button';

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const { trips, loading: tripsLoading } = useTrips(user?.id ?? null);

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {t('dashboard.title')}, {user?.user_metadata?.firstName || t('common.traveler')}!
        </h1>
        <p className="mt-1 text-base text-gray-600 dark:text-gray-400">
          {t('dashboard.subtitle')}
        </p>
      </div>

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
