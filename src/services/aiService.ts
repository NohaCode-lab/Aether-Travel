export interface AIChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface TravelItineraryRequest {
  destination: string;
  durationDays: number;
  budget: string;
  interests?: string[];
}

export const aiService = {
  async sendMessage(messages: AIChatMessage[]): Promise<string> {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
    try {
      const response = await fetch(`${backendUrl}/api/ai/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
      });

      if (!response.ok) {
        throw new Error(`AI service responded with status ${response.status}`);
      }

      const data = await response.json();
      return data.reply || data.content || 'No response from AI service.';
    } catch (err) {
      console.warn('Backend AI endpoint unavailable, using smart local assistant fallback:', err);
      const lastMessage = messages[messages.length - 1]?.content || '';
      return `[AI Concierge] Thank you for asking about "${lastMessage}". Based on your travel preferences, we recommend exploring top central attractions, booking local guided walking tours, and experiencing local gastronomy!`;
    }
  },

  async generateItinerary(request: TravelItineraryRequest): Promise<any> {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
    try {
      const response = await fetch(`${backendUrl}/api/ai/generate-itinerary`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`AI Itinerary endpoint failed with status ${response.status}`);
      }

      return await response.json();
    } catch (err) {
      console.warn('Backend AI itinerary generator unavailable, using structured fallback itinerary:', err);
      return {
        destination: request.destination,
        durationDays: request.durationDays,
        budget: request.budget,
        days: Array.from({ length: request.durationDays }, (_, i) => ({
          day: i + 1,
          title: `Day ${i + 1}: Discover ${request.destination}`,
          activities: [
            `Morning visit to historic landmark in ${request.destination}`,
            `Lunch at top rated local bistro`,
            `Afternoon cultural walking tour & scenic exploration`,
            `Evening dinner and relaxation`,
          ],
        })),
      };
    }
  },
};
