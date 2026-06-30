import React, { useState } from "react";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

interface TripPlannerFormProps {
  onGenerate: (destination: string, days: number) => void;
  isLoading: boolean;
}

export const TripPlannerForm: React.FC<TripPlannerFormProps> = ({
  onGenerate,
  isLoading,
}) => {
  const [destination, setDestination] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(destination || "Paris, France", 3);
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
          defaultValue={3}
          min={1}
          max={14}
          className="w-full md:w-32"
          required
        />
        <Input label="Budget" placeholder="Moderate" className="flex-1" />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Generating..." : "Generate Plan"}
        </Button>
      </form>
    </Card>
  );
};
