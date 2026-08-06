export interface SDKConfig {
  baseUrl?: string;
  apiKey?: string;
}

export class AetherSDK {
  private baseUrl: string;
  private apiKey?: string;

  constructor(config?: SDKConfig) {
    this.baseUrl = config?.baseUrl || 'http://localhost:4000';
    this.apiKey = config?.apiKey;
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const headers = {
      'Content-Type': 'application/json',
      ...(this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {}),
      ...options?.headers,
    };

    const res = await fetch(`${this.baseUrl}${endpoint}`, { ...options, headers });
    if (!res.ok) {
      throw new Error(`AetherSDK Error [${res.status}]: ${res.statusText}`);
    }
    return res.json();
  }

  public async getDestinations(): Promise<any> {
    return this.request('/api/destinations');
  }

  public async createBooking(data: { destinationId: string; startDate: string; endDate: string; guests: number }): Promise<any> {
    return this.request('/api/bookings', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  public async askAIConcierge(messages: { role: string; content: string }[]): Promise<any> {
    return this.request('/api/ai/chat', {
      method: 'POST',
      body: JSON.stringify({ messages }),
    });
  }
}

export const aetherSDK = new AetherSDK();
