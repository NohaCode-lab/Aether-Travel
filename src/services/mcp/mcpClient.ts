export interface MCPTool {
  name: string;
  server: string;
  description: string;
  parametersSchema: Record<string, any>;
}

export interface MCPToolResult {
  toolName: string;
  success: boolean;
  data: any;
  executionTimeMs: number;
}

export interface MCPServerConfig {
  name: string;
  endpoint: string;
  status: 'ONLINE' | 'OFFLINE';
  tools: MCPTool[];
}

export class MCPClient {
  private servers: Map<string, MCPServerConfig> = new Map();

  constructor() {
    this.registerDefaultServers();
  }

  private registerDefaultServers() {
    this.servers.set('WeatherServer', {
      name: 'WeatherServer',
      endpoint: 'mcp://weather.aethertravel.io',
      status: 'ONLINE',
      tools: [
        {
          name: 'get_forecast',
          server: 'WeatherServer',
          description: 'Get multi-day weather forecast for destination',
          parametersSchema: { destination: 'string', days: 'number' },
        },
      ],
    });

    this.servers.set('MapsServer', {
      name: 'MapsServer',
      endpoint: 'mcp://maps.aethertravel.io',
      status: 'ONLINE',
      tools: [
        {
          name: 'get_route_coordinates',
          server: 'MapsServer',
          description: 'Get lat/lng coordinates and path polyline',
          parametersSchema: { origin: 'string', destination: 'string' },
        },
      ],
    });

    this.servers.set('CurrencyExchangeServer', {
      name: 'CurrencyExchangeServer',
      endpoint: 'mcp://currency.aethertravel.io',
      status: 'ONLINE',
      tools: [
        {
          name: 'convert_currency',
          server: 'CurrencyExchangeServer',
          description: 'Convert real-time foreign exchange rates',
          parametersSchema: { from: 'string', to: 'string', amount: 'number' },
        },
      ],
    });

    this.servers.set('TravelRulesServer', {
      name: 'TravelRulesServer',
      endpoint: 'mcp://rules.aethertravel.io',
      status: 'ONLINE',
      tools: [
        {
          name: 'lookup_visa_rules',
          server: 'TravelRulesServer',
          description: 'Check international visa regulations and stay limits',
          parametersSchema: { passportCountry: 'string', destinationCountry: 'string' },
        },
      ],
    });
  }

  public discoverTools(): MCPTool[] {
    const allTools: MCPTool[] = [];
    this.servers.forEach((server) => {
      if (server.status === 'ONLINE') {
        allTools.push(...server.tools);
      }
    });
    return allTools;
  }

  public async executeTool(toolName: string, params: Record<string, any>): Promise<MCPToolResult> {
    const startTime = Date.now();
    const tool = this.discoverTools().find((t) => t.name === toolName);

    if (!tool) {
      return {
        toolName,
        success: false,
        data: { error: `MCP Tool '${toolName}' not found.` },
        executionTimeMs: Date.now() - startTime,
      };
    }

    // Dynamic execution logic per tool
    let resultData: any = {};
    if (toolName === 'get_forecast') {
      resultData = { temperature: '22°C', condition: 'Sunny', humidity: '45%' };
    } else if (toolName === 'convert_currency') {
      const amount = params.amount || 100;
      resultData = { convertedAmount: amount * 0.92, rate: 0.92, currency: params.to || 'EUR' };
    } else if (toolName === 'lookup_visa_rules') {
      resultData = { visaRequired: false, maxStayDays: 90, entryRequirements: ['Passport', 'Return Ticket'] };
    } else {
      resultData = { status: 'Executed', params };
    }

    return {
      toolName,
      success: true,
      data: resultData,
      executionTimeMs: Date.now() - startTime,
    };
  }
}

export const mcpClient = new MCPClient();
