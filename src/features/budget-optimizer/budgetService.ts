import { aiService } from "../../services/aiService";

export interface BudgetOptimizationResult {
  original_budget: number;
  optimized_budget: number;
  potential_savings: number;
  currency: string;
  recommendations: {
    category: string;
    original_cost: number;
    optimized_cost: number;
    tip: string;
  }[];
}

export const budgetService = {
  async optimizeBudget(
    destination: string,
    duration: number,
    currentBudget: number,
    currency: string,
  ): Promise<BudgetOptimizationResult> {
    try {
      const prompt = `Destination: ${destination}, Duration: ${duration} days, Current Budget: ${currentBudget} ${currency}`;
      const responseText = await aiService.sendMessage([{ role: 'user', content: prompt }]);
      return JSON.parse(responseText);
    } catch {
      const saved = Math.round(currentBudget * 0.15);
      return {
        original_budget: currentBudget,
        optimized_budget: currentBudget - saved,
        potential_savings: saved,
        currency: currency || 'USD',
        recommendations: [
          {
            category: 'Accommodation',
            original_cost: Math.round(currentBudget * 0.4),
            optimized_cost: Math.round(currentBudget * 0.3),
            tip: 'Book boutique guesthouses or apartments slightly outside city center',
          },
          {
            category: 'Transport',
            original_cost: Math.round(currentBudget * 0.2),
            optimized_cost: Math.round(currentBudget * 0.15),
            tip: 'Use multi-day public transport passes',
          },
        ],
      };
    }
  },
};