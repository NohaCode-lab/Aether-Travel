import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { PageHeader } from '../../components/PageHeader';
import { SchengenForm } from './SchengenForm';
import { SchengenResult } from './SchengenResult';
import { calculateSchengenDays } from './schengenUtils';

export const SchengenPage: React.FC = () => {
  const [result, setResult] = useState<{ usedDays: number; remainingDays: number; overstay: boolean } | null>(null);

  const handleCalculate = (entryDate: string, exitDate: string) => {
    const calcResult = calculateSchengenDays(entryDate, exitDate);
    setResult(calcResult);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <PageHeader 
          title="Schengen Visa Calculator" 
          subtitle="Ensure you comply with the 90/180 day rule for the Schengen area." 
        />
        <SchengenForm onCalculate={handleCalculate} />
        {result && (
          <SchengenResult {...result} />
        )}
      </div>
    </DashboardLayout>
  );
};