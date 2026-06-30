import { useState } from "react";
import BudgetForm from "./BudgetForm";
import SavingsCard from "./SavingsCard";
import { budgetService, type BudgetOptimizationResult } from "./budgetService";

export default function BudgetOptimizerPage() {
  const [result, setResult] = useState<BudgetOptimizationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleOptimize = async (data: {
    destination: string;
    duration: number;
    currentBudget: number;
    currency: string;
  }) => {
    setIsLoading(true);
    setError(null);
    try {
      const optimization = await budgetService.optimizeBudget(
        data.destination,
        data.duration,
        data.currentBudget,
        data.currency
      );
      setResult(optimization);
    } catch (err) {
      console.error(err);
      setError("Failed to generate optimization. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <span className="text-4xl">💰</span> Budget Optimizer
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Enter your trip details and current budget, and let AI find ways to save you money without compromising the experience.
        </p>
      </div>
      <BudgetForm onOptimize={handleOptimize} isLoading={isLoading} />
      {error && <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl border border-red-200 dark:border-red-800">{error}</div>}
      {result && <SavingsCard result={result} />}
    </div>
  );
}