import React from "react";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

export const QuickActions: React.FC = () => {
  return (
    <Card className="p-6 mb-8">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Button variant="primary" className="w-full">
          Plan a Trip
        </Button>
        <Button variant="secondary" className="w-full">
          Check Visa
        </Button>
        <Button variant="outline" className="w-full">
          Budget Optimizer
        </Button>
        <Button variant="outline" className="w-full">
          Relocation Assistant
        </Button>
      </div>
    </Card>
  );
};
