import React from 'react';
import { Card } from '../../components/ui/Card';

interface SchengenResultProps {
  usedDays: number;
  remainingDays: number;
  overstay: boolean;
}

export const SchengenResult: React.FC<SchengenResultProps> = ({ usedDays, remainingDays, overstay }) => {
  return (
    <Card className="p-6 text-center">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Schengen 90/180 Rule Status</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">Days Used</p>
          <p className="text-3xl font-bold text-indigo-600">{usedDays} / 90</p>
        </div>
        <div className={`p-4 rounded-lg ${overstay ? 'bg-red-50' : 'bg-green-50'}`}>
          <p className={`text-sm mb-1 ${overstay ? 'text-red-600' : 'text-green-600'}`}>Days Remaining</p>
          <p className={`text-3xl font-bold ${overstay ? 'text-red-700' : 'text-green-700'}`}>{remainingDays}</p>
        </div>
      </div>
    </Card>
  );
};