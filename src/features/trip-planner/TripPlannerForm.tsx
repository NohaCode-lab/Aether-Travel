import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

interface TripPlannerFormProps {
  onGenerate: (destination: string, days: number) => void;
  isLoading: boolean;
}

export const TripPlannerForm: React.FC<TripPlannerFormProps> = ({
  onGenerate,
  isLoading,
}) => {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState(3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Use a default destination if the input is empty
    onGenerate(destination || 'Paris, France', days);
  };

  return (
    <Card className="p-6 mb-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 items-end"
      >
        <Input
          label="Where to?"
          placeholder="e.g., Tokyo, Japan"
          className="flex-1"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <Input
          label="Number of Days"
          type="number"
          value={days}
          onChange={(e) => setDays(parseInt(e.target.value, 10) || 1)}
          min={1}
          max={14}
          className="w-full md:w-32"
          required
        />
        <Input label="Budget" placeholder="Moderate" className="flex-1" />
        <Button type="submit" isLoading={isLoading}>
          {isLoading ? 'Generating...' : 'Generate Plan'}
        </Button>
      </form>
    </Card>
  );
};
