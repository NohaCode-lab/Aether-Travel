import { describe, it, expect } from 'vitest';
import { coordinatorAgent } from '../../src/services/ai/multiAgentEngine';
import { ragService } from '../../src/services/ai/ragService';
import { mcpClient } from '../../src/services/mcp/mcpClient';

describe('Multi-Agent AI & RAG & MCP Integration', () => {
  it('should orchestrate multi-agent pipeline with RAG search and MCP tools', async () => {
    // 1. RAG Semantic Retrieval
    const ragResult = await ragService.searchKnowledgeBase('Schengen visa rules for Munich');
    expect(ragResult.documents.length).toBeGreaterThan(0);
    expect(ragResult.citations.length).toBeGreaterThan(0);

    // 2. MCP Tool Execution
    const mcpResult = await mcpClient.executeTool('get_forecast', { destination: 'Munich', days: 5 });
    expect(mcpResult.success).toBe(true);
    expect(mcpResult.data).toHaveProperty('temperature');

    // 3. Coordinator Agent Orchestration
    const orchestrationResult = await coordinatorAgent.orchestrate(
      'Munich, Germany',
      5,
      2500,
      'EUR',
      'United States'
    );

    expect(orchestrationResult.planner.agentName).toBe('Planner Agent');
    expect(orchestrationResult.budget.agentName).toBe('Budget Agent');
    expect(orchestrationResult.visa.agentName).toBe('Visa Agent');
    expect(orchestrationResult.weather.agentName).toBe('Weather Agent');
    expect(orchestrationResult.coordinatorSummary).toBeDefined();
  });
});
