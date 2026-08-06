import React, { useState } from 'react';
import { Plane, Search } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

export interface FlightStatus {
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  gate: string;
  terminal: string;
  status: 'ON_TIME' | 'DELAYED' | 'CANCELLED' | 'BOARDING';
  delayMinutes?: number;
}

export const FlightTrackerPage: React.FC = () => {
  const [flightNumber, setFlightNumber] = useState('LH458');
  const [flightData, setFlightData] = useState<FlightStatus | null>({
    flightNumber: 'LH458',
    airline: 'Lufthansa',
    origin: 'MUC (Munich Airport)',
    destination: 'SFO (San Francisco Intl)',
    departureTime: '16:25 CET',
    arrivalTime: '19:10 PST',
    gate: 'Gate H14',
    terminal: 'Terminal 2',
    status: 'ON_TIME',
  });

  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setFlightData({
        flightNumber: flightNumber.toUpperCase(),
        airline: 'Aether Airlines',
        origin: 'MUC (Munich Airport)',
        destination: 'JFK (New York Intl)',
        departureTime: '11:40 CET',
        arrivalTime: '14:20 EST',
        gate: 'Gate G08',
        terminal: 'Terminal 1',
        status: 'ON_TIME',
      });
      setIsSearching(false);
    }, 600);
  };

  const getStatusBadge = (status: FlightStatus['status']) => {
    switch (status) {
      case 'DELAYED':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">Delayed</span>;
      case 'CANCELLED':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300">Cancelled</span>;
      case 'BOARDING':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">Boarding</span>;
      default:
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">On Time</span>;
    }
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Plane className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
          Real-Time Flight Tracker
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
          Track departures, arrivals, gate assignments, and live flight status notifications.
        </p>
      </div>

      <Card>
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="flex-1">
            <Input
              label="Flight Code / Number"
              placeholder="e.g. LH458, BA117, AA100"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
              required
            />
          </div>
          <Button type="submit" isLoading={isSearching} className="w-full sm:w-auto">
            <Search className="w-4 h-4 mr-2" /> Track Flight
          </Button>
        </form>
      </Card>

      {flightData && (
        <Card className="p-6 space-y-6" hoverable>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                {flightData.airline}
              </span>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white">{flightData.flightNumber}</h2>
            </div>
            {getStatusBadge(flightData.status)}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-1">
              <span className="text-xs text-gray-400 uppercase font-semibold">Origin</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{flightData.origin}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">{flightData.departureTime}</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <Plane className="w-8 h-8 text-indigo-600 dark:text-indigo-400 rotate-90 my-1" />
              <div className="w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
              <span className="text-[10px] text-gray-400 mt-1 uppercase font-semibold">Non-stop Direct</span>
            </div>

            <div className="space-y-1 text-left md:text-right">
              <span className="text-xs text-gray-400 uppercase font-semibold">Destination</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{flightData.destination}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">{flightData.arrivalTime}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl text-xs font-mono">
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-sans">Terminal</span>
              <span className="font-bold text-gray-900 dark:text-white">{flightData.terminal}</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-sans">Gate</span>
              <span className="font-bold text-indigo-600 dark:text-indigo-400">{flightData.gate}</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-sans">Baggage Claim</span>
              <span className="font-bold text-gray-900 dark:text-white">Belt 04</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-sans">Aircraft</span>
              <span className="font-bold text-gray-900 dark:text-white">Airbus A350-900</span>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default FlightTrackerPage;
