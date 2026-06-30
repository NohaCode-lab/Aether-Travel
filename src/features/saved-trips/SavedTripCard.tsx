import React from "react";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";

interface SavedTripCardProps {
  destination: string;
  date: string;
  travelers: number;
  status: string;
}

export const SavedTripCard: React.FC<SavedTripCardProps> = ({
  destination,
  date,
  travelers,
  status,
}) => {
  return (
    <Card className="p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h3 className="text-lg font-bold text-gray-900">{destination}</h3>
        <p className="text-sm text-gray-500">
          {date} • {travelers} traveler(s)
        </p>
      </div>
      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
        <Badge variant={status === "Draft" ? "secondary" : "primary"}>
          {status}
        </Badge>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Edit
          </Button>
          <Button variant="primary" size="sm">
            View
          </Button>
        </div>
      </div>
    </Card>
  );
};
