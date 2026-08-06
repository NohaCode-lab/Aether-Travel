export interface UserPresence {
  userId: string;
  userName: string;
  avatarUrl: string;
  activeCursor?: { x: number; y: number };
  activeSection?: string;
}

export interface ActivityLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  timestamp: string;
}

export const collaborationService = {
  getMockPresence(): UserPresence[] {
    return [
      {
        userId: 'u-1',
        userName: 'Sophia Miller',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
        activeSection: 'Day 2 Itinerary',
      },
      {
        userId: 'u-2',
        userName: 'Alexander Schmidt',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        activeSection: 'Hotel Booking',
      },
    ];
  },

  getMockActivityTimeline(): ActivityLog[] {
    return [
      {
        id: 'act-1',
        userId: 'u-1',
        userName: 'Sophia Miller',
        action: 'added Michelin Dining to Day 3',
        timestamp: '5 mins ago',
      },
      {
        id: 'act-2',
        userId: 'u-2',
        userName: 'Alexander Schmidt',
        action: 'confirmed Lufthansa flight LH458 reservation',
        timestamp: '15 mins ago',
      },
    ];
  },
};
