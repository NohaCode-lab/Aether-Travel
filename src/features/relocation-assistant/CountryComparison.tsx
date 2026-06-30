import React from "react";
import { Card } from "../../components/ui/Card";

export const CountryComparison: React.FC = () => {
  return (
    <Card className="p-6 mt-8 overflow-x-auto">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        Comparison vs Current Location
      </h3>
      <table className="w-full min-w-[500px] text-left">
        <thead>
          <tr className="border-b border-gray-200 text-sm text-gray-500">
            <th className="pb-3 font-medium">Metric</th>
            <th className="pb-3 font-medium">Your City (New York)</th>
            <th className="pb-3 font-medium">Target City (Lisbon)</th>
            <th className="pb-3 font-medium">Difference</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          <tr className="border-b border-gray-100">
            <td className="py-4 text-gray-800">Rent (1 Bedroom)</td>
            <td className="py-4">$3,500</td>
            <td className="py-4">$1,200</td>
            <td className="py-4 text-green-600">-65%</td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="py-4 text-gray-800">Groceries</td>
            <td className="py-4">$500</td>
            <td className="py-4">$250</td>
            <td className="py-4 text-green-600">-50%</td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="py-4 text-gray-800">Internet/Utilities</td>
            <td className="py-4">$120</td>
            <td className="py-4">$60</td>
            <td className="py-4 text-green-600">-50%</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};
