import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet marker icon asset paths
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

export interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  title: string;
  category: 'attraction' | 'hotel' | 'restaurant' | 'airport' | 'station';
  description?: string;
}

interface TravelMapProps {
  center?: [number, number];
  zoom?: number;
  markers?: MapMarker[];
  routePath?: [number, number][];
  travelTime?: string;
  distanceKm?: number;
  className?: string;
}

export const TravelMap: React.FC<TravelMapProps> = ({
  center = [48.1351, 11.5820], // Default Munich
  zoom = 12,
  markers = [],
  routePath = [],
  travelTime = '25 mins',
  distanceKm = 4.2,
  className = 'h-96 w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md',
}) => {
  const getBadgeColor = (category: MapMarker['category']) => {
    switch (category) {
      case 'hotel':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300';
      case 'restaurant':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300';
      case 'airport':
      case 'station':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300';
      default:
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300';
    }
  };

  return (
    <div className="relative group">
      <div className={className}>
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="h-full w-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((marker) => (
            <Marker key={marker.id} position={[marker.lat, marker.lng]}>
              <Popup>
                <div className="p-1 space-y-1">
                  <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider ${getBadgeColor(marker.category)}`}>
                    {marker.category}
                  </span>
                  <h4 className="font-bold text-gray-900 text-sm">{marker.title}</h4>
                  {marker.description && <p className="text-xs text-gray-600 leading-tight">{marker.description}</p>}
                </div>
              </Popup>
            </Marker>
          ))}
          {routePath.length > 1 && (
            <Polyline positions={routePath} color="#6366f1" weight={5} opacity={0.8} dashArray="8, 8" />
          )}
        </MapContainer>
      </div>

      {/* Map overlay metrics card */}
      <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-[400] bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg flex items-center gap-4 text-xs">
        <div>
          <span className="text-gray-500 dark:text-gray-400 block text-[10px] font-medium uppercase">Est. Time</span>
          <span className="font-bold text-indigo-600 dark:text-indigo-400 text-sm">{travelTime}</span>
        </div>
        <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-700" />
        <div>
          <span className="text-gray-500 dark:text-gray-400 block text-[10px] font-medium uppercase">Distance</span>
          <span className="font-bold text-gray-900 dark:text-white text-sm">{distanceKm} km</span>
        </div>
      </div>
    </div>
  );
};
