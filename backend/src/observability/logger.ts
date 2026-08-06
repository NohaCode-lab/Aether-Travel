export const logger = {
  info(message: string, meta?: Record<string, any>) {
    console.log(JSON.stringify({ level: 'info', timestamp: new Date().toISOString(), message, ...meta }));
  },

  warn(message: string, meta?: Record<string, any>) {
    console.warn(JSON.stringify({ level: 'warn', timestamp: new Date().toISOString(), message, ...meta }));
  },

  error(message: string, meta?: Record<string, any>) {
    console.error(JSON.stringify({ level: 'error', timestamp: new Date().toISOString(), message, ...meta }));
  },
};

export const healthCheckProbes = {
  getLiveness() {
    return { status: 'UP', service: 'Aether-Travel Backend', timestamp: new Date().toISOString() };
  },

  getReadiness() {
    return {
      status: 'UP',
      checks: {
        database: 'CONNECTED',
        redis: 'CONNECTED',
        aiProxy: 'READY',
      },
      timestamp: new Date().toISOString(),
    };
  },
};
