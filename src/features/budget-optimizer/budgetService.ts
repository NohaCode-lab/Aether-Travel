import { openai } from "../../services/openai";

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
    const systemPrompt = `You are an expert AI travel budget optimizer.
Analyze the user's travel plan and current budget. Suggest practical ways to save money without ruining the experience.
Respond ONLY with a valid JSON object matching this structure:
{"original_budget": number, "optimized_budget": number, "potential_savings": number, "currency": "string", "recommendations": [{"category": "string (e.g., Accommodation, Food, Transport)", "original_cost": number, "optimized_cost": number, "tip": "string (practical advice)"}]}`;

    const userPrompt = `Destination: ${destination}\nDuration: ${duration} days\nCurrent Budget: ${currentBudget} ${currency}`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106", // Using JSON-compatible model
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" },
    });

    const responseContent = response.choices[0].message.content;
    if (!responseContent) throw new Error("Failed to optimize budget.");

    return JSON.parse(responseContent) as BudgetOptimizationResult;
  },
};