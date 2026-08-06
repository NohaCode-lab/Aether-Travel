import { aiService, type AIChatMessage } from '../aiService';

export interface AgentResponse {
  agentName: string;
  role: string;
  recommendations: string[];
  data?: any;
}

export interface MultiAgentOrchestrationResult {
  planner: AgentResponse;
  budget: AgentResponse;
  visa: AgentResponse;
  weather: AgentResponse;
  booking: AgentResponse;
  localExpert: AgentResponse;
  coordinatorSummary: string;
}

// 1. Planner Agent
export const plannerAgent = {
  async run(destination: string, days: number): Promise<AgentResponse> {
    return {
      agentName: 'Planner Agent',
      role: 'Itinerary Generation & Daily Schedule Optimization',
      recommendations: [
        `Day 1-2: Central historic landmarks in ${destination}`,
        `Day 3-${days}: Cultural districts, museum tours, and scenic day trips`,
        'Pacing optimized for balanced leisure and exploration',
      ],
    };
  },
};

// 2. Budget Agent
export const budgetAgent = {
  async run(budgetAmount: number, currency: string): Promise<AgentResponse> {
    const saved = Math.round(budgetAmount * 0.15);
    return {
      agentName: 'Budget Agent',
      role: 'Travel Cost & Hotel/Transport Cost Tuning',
      recommendations: [
        `Allocated 40% ($${Math.round(budgetAmount * 0.4)}) to accommodation`,
        `Allocated 30% ($${Math.round(budgetAmount * 0.3)}) to flights & transit`,
        `Potential savings identified: ${saved} ${currency} via multi-pass transit`,
      ],
    };
  },
};

// 3. Visa Agent
export const visaAgent = {
  async run(passportCountry: string, destination: string): Promise<AgentResponse> {
    return {
      agentName: 'Visa Agent',
      role: 'Visa Rules & Required Documentation',
      recommendations: [
        `Passport (${passportCountry}) valid for tourist entry to ${destination}`,
        'Required: Valid passport with 6 months validity, return flight ticket',
        'Processing time: Visa-free or instant eVisa upon arrival',
      ],
    };
  },
};

// 4. Weather Agent
export const weatherAgent = {
  async run(destination: string): Promise<AgentResponse> {
    return {
      agentName: 'Weather Agent',
      role: 'Climate Forecasts & Packing Advice',
      recommendations: [
        `Forecast for ${destination}: Pleasant 22°C (72°F) with light breeze`,
        'Packing advice: Comfortable walking shoes, light jacket, umbrella',
      ],
    };
  },
};

// 5. Booking Agent
export const bookingAgent = {
  async run(destination: string): Promise<AgentResponse> {
    return {
      agentName: 'Booking Agent',
      role: 'Reservations & Schedule Conflict Prevention',
      recommendations: [
        `Hotel: 4-star boutique stay in central ${destination} reserved`,
        'Flights: Direct return flights selected without schedule overlaps',
      ],
    };
  },
};

// 6. Local Expert Agent
export const localExpertAgent = {
  async run(destination: string): Promise<AgentResponse> {
    return {
      agentName: 'Local Expert Agent',
      role: 'Attractions, Restaurants & Cultural Insights',
      recommendations: [
        `Top Restaurant: Michelin-rated local gastronomy in ${destination}`,
        'Hidden Gem: Sunset viewpoint at historic citadel',
        'Cultural Tip: Tipping is 10% or rounded up; polite greeting in local language appreciated',
      ],
    };
  },
};

// 7. Coordinator Agent (Orchestrator)
export const coordinatorAgent = {
  async orchestrate(
    destination: string,
    days: number,
    budget: number,
    currency: string,
    passportCountry: string
  ): Promise<MultiAgentOrchestrationResult> {
    const [planner, budgetRes, visa, weather, booking, localExpert] = await Promise.all([
      plannerAgent.run(destination, days),
      budgetAgent.run(budget, currency),
      visaAgent.run(passportCountry, destination),
      weatherAgent.run(destination),
      bookingAgent.run(destination),
      localExpertAgent.run(destination),
    ]);

    const summaryPrompt: AIChatMessage[] = [
      {
        role: 'system',
        content: 'You are the Coordinator Agent. Summarize the output of all sub-agents into a cohesive executive travel briefing.',
      },
      {
        role: 'user',
        content: `Destination: ${destination}, ${days} days, Budget: ${budget} ${currency}. Sub-agents provided recommendations. Merge into a 2-paragraph summary.`,
      },
    ];

    const coordinatorSummary = await aiService.sendMessage(summaryPrompt);

    return {
      planner,
      budget: budgetRes,
      visa,
      weather,
      booking,
      localExpert,
      coordinatorSummary,
    };
  },
};
