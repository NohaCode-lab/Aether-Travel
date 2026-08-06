import { describe, it, expect } from 'vitest';
import { plannerAgent } from '../../src/services/ai/multiAgentEngine';

describe('Travel Workflow Integration', () => {
  it('should generate, optimize, and retrieve trip itinerary for destination', async () => {
    const destination = 'Munich, Germany';
    const days = 5;

    const plannerRes = await plannerAgent.run(destination, days);

    expect(plannerRes.agentName).toBe('Planner Agent');
    expect(plannerRes.recommendations.length).toBeGreaterThan(0);
    expect(plannerRes.recommendations[0]).toContain('Munich, Germany');
  });
});
