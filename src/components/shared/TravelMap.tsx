import React, { useEffect, useRef } from 'react';
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
  center = [48.1351, 11.5820],
  zoom = 12,
  markers = [],
  routePath = [],
  travelTime = '25 mins',
  distanceKm = 4.2,
  className = 'h-96 w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Destroy existing Leaflet map instance if present
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Reset leftover _leaflet_id DOM property to prevent "Map container is already initialized"
    if ((containerRef.current as any)._leaflet_id) {
      (containerRef.current as any)._leaflet_id = null;
    }

    const map = L.map(containerRef.current, {
      center,
      zoom,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    markers.forEach((m) => {
      const marker = L.marker([m.lat, m.lng]).addTo(map);
      marker.bindPopup(`
        <div class="p-1 space-y-1">
          <span class="inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-indigo-100 text-indigo-800">
            ${m.category}
          </span>
          <h4 class="font-bold text-gray-900 text-sm">${m.title}</h4>
          ${m.description ? `<p class="text-xs text-gray-600 leading-tight">${m.description}</p>` : ''}
        </div>
      `);
    });

    if (routePath.length > 1) {
      L.polyline(routePath, {
        color: '#6366f1',
        weight: 5,
        opacity: 0.8,
        dashArray: '8, 8',
      }).addTo(map);
    }

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center, zoom, markers, routePath]);

  return (
    <div className="relative group">
      <div className={className}>
        <div ref={containerRef} className="h-full w-full z-10" />
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
