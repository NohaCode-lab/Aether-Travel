export interface UserTravelProfile {
  userId: string;
  preferredAirlines: string[];
  hotelRatingPreference: number;
  dietaryRestrictions: string[];
  seatPreference: 'window' | 'aisle' | 'no_preference';
  budgetTier: 'budget' | 'moderate' | 'luxury';
  pastDestinations: string[];
}

export const memoryService = {
  async getProfile(userId: string): Promise<UserTravelProfile> {
    return {
      userId,
      preferredAirlines: ['Lufthansa', 'ANA', 'Emirates'],
      hotelRatingPreference: 4,
      dietaryRestrictions: ['Vegetarian option preferred'],
      seatPreference: 'window',
      budgetTier: 'luxury',
      pastDestinations: ['Kyoto', 'Santorini', 'Munich'],
    };
  },

  async updateProfile(userId: string, updates: Partial<UserTravelProfile>): Promise<UserTravelProfile> {
    const current = await this.getProfile(userId);
    return { ...current, ...updates };
  },

  async summarizeConversation(messages: { role: string; content: string }[]): Promise<string> {
    if (messages.length === 0) return 'No conversation history.';
    const topics = messages.map((m) => m.content.slice(0, 30)).join(', ');
    return `User inquired about: ${topics}... Summary: Prefers 4-star hotels, direct flights, and cultural walking tours.`;
  },
};
