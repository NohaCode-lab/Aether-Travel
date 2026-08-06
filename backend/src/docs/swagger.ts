export const openApiSpec = {
  openapi: '3.1.0',
  info: {
    title: 'Aether-Travel Enterprise+ API Platform',
    version: '1.0.0',
    description: 'Commercial AI Travel SaaS REST API Platform providing authentication, destination search, booking engine, multi-agent AI concierge, and MCP client services.',
  },
  servers: [
    {
      url: 'http://localhost:4000',
      description: 'Local Development Server',
    },
    {
      url: 'https://api.aethertravel.io',
      description: 'Production API Gateway',
    },
  ],
  paths: {
    '/health': {
      get: {
        summary: 'API Health Probe',
        responses: {
          '200': { description: 'Service Healthy' },
        },
      },
    },
    '/api/destinations': {
      get: {
        summary: 'List Curated Travel Destinations',
        responses: {
          '200': { description: 'Array of Destination Objects' },
        },
      },
    },
    '/api/bookings': {
      post: {
        summary: 'Create New Reservation',
        responses: {
          '201': { description: 'Reservation Created Successfully' },
        },
      },
    },
    '/api/ai/chat': {
      post: {
        summary: 'Secure AI Proxy Chat Completion',
        responses: {
          '200': { description: 'AI Assistant Response Object' },
        },
      },
    },
  },
};
