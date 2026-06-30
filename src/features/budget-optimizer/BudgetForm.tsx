import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

interface BudgetFormProps {
  onOptimize: (data: {
    destination: string;
    duration: number;
    currentBudget: number;
    currency: string;
  }) => void;
  isLoading: boolean;
}

export default function BudgetForm({ onOptimize, isLoading }: BudgetFormProps) {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("7");
  const [currentBudget, setCurrentBudget] = useState("");
  const [currency, setCurrency] = useState("USD");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination || !duration || !currentBudget) return;

    onOptimize({
      destination,
      duration: parseInt(duration, 10),
      currentBudget: parseFloat(currentBudget),
      currency,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white/70 dark:bg-gray-800/70 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <Input
        label="Destination"
        placeholder="e.g. Paris, France"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        required
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input label="Duration (Days)" type="number" min="1" value={duration} onChange={(e) => setDuration(e.target.value)} required />
        <Input label="Current Budget" type="number" min="1" step="0.01" value={currentBudget} onChange={(e) => setCurrentBudget(e.target.value)} required />
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="AED">AED (د.إ)</option>
          </select>
        </div>
      </div>
      <Button type="submit" className="w-full mt-2" isLoading={isLoading}>
        Optimize My Budget 🪄
      </Button>
    </form>
  );
}