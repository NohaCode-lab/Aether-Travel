import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { PageHeader } from '../../components/PageHeader';
import { DestinationCard } from './DestinationCard';
import { DestinationFilters } from './DestinationFilters';
import { getDestinations } from './destinationService';
import { Loader } from '../../components/ui/Loader';

export const DestinationsPage: React.FC = () => {
  const [destinations, setDestinations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      const data = await getDestinations();
      setDestinations(data as any[]);
      setLoading(false);
    };
    fetchDestinations();
  }, []);

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <PageHeader title="Discover Destinations" subtitle="Find your next perfect getaway." />
        <DestinationFilters />
        
        {loading ? (
          <div className="py-12"><Loader size="lg" className="mx-auto" /></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map(dest => (
              <DestinationCard key={dest.id} {...dest} />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};