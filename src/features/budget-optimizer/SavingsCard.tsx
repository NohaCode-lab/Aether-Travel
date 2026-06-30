import { Card } from "../../components/ui/Card";
import type { BudgetOptimizationResult } from "./budgetService";

interface SavingsCardProps {
  result: BudgetOptimizationResult;
}

export default function SavingsCard({ result }: SavingsCardProps) {
  return (
    <div className="space-y-6 animate-fade-in mt-8">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="text-center bg-gray-50/50 dark:bg-gray-800/50">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Original Budget</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {result.original_budget} {result.currency}
          </p>
        </Card>
        <Card className="text-center bg-blue-50/50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/50">
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">Optimized Budget</p>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
            {result.optimized_budget} {result.currency}
          </p>
        </Card>
        <Card className="text-center bg-green-50/50 dark:bg-green-900/20 border-green-100 dark:border-green-800/50">
          <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-1">Potential Savings 💰</p>
          <p className="text-2xl font-bold text-green-700 dark:text-green-300">
            {result.potential_savings} {result.currency}
          </p>
        </Card>
      </div>

      {/* AI Recommendations */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How to save money:</h3>
        {result.recommendations.map((rec, idx) => (
          <Card key={idx} hoverable className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="md:w-56 flex-shrink-0">
              <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-lg mb-2">{rec.category}</span>
              <div className="text-sm"><span className="text-gray-500 line-through mr-2">{rec.original_cost}</span><span className="font-bold text-green-600 dark:text-green-400">→ {rec.optimized_cost} {result.currency}</span></div>
            </div>
            <p className="flex-1 text-gray-700 dark:text-gray-300">{rec.tip}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}