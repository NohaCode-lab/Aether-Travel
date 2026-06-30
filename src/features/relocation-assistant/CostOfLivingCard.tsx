import React from "react";
import { Card } from "../../components/ui/Card";

interface CostProps {
  category: string;
  amount: string;
  trend?: "up" | "down" | "neutral";
}

export const CostOfLivingCard: React.FC<CostProps> = ({
  category,
  amount,
  trend = "neutral",
}) => {
  return (
    <Card className="p-5 flex justify-between items-center">
      <div>
        <h4 className="text-sm font-medium text-gray-500 mb-1">{category}</h4>
        <span className="text-2xl font-bold text-gray-900">{amount}</span>
        <span className="text-sm text-gray-500 ml-1">/ month</span>
      </div>
      <div>
        {trend === "up" && <span className="text-red-500 text-lg">↑</span>}
        {trend === "down" && <span className="text-green-500 text-lg">↓</span>}
        {trend === "neutral" && (
          <span className="text-gray-400 text-lg">-</span>
        )}
      </div>
    </Card>
  );
};
