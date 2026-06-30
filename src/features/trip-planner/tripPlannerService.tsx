import type { TripItinerary } from './tripTypes';

const generateItinerary = async (
  destination: string,
  days: number
): Promise<TripItinerary> => {
  console.log(`Generating itinerary for ${destination} for ${days} days.`);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // In a real app, this would be a call to an AI service.
  // This is a mock response.
  return {
    destination: destination,
    days: Array.from({ length: days }, (_, i) => ({
      date: `Day ${i + 1}`,
      activities: [
        {
          id: i * 10 + 1,
          time: '09:00 AM',
          title: `Morning Exploration in ${destination}`,
          description: 'Visit a local landmark or museum.',
        },
        {
          id: i * 10 + 2,
          time: '01:00 PM',
          title: 'Lunch at a Local Eatery',
          description: 'Experience authentic local cuisine.',
        },
        {
          id: i * 10 + 3,
          time: '07:00 PM',
          title: 'Evening Entertainment',
          description: `Enjoy a relaxing evening activity.`,
        },
      ],
    })),
  };
};

export const tripPlannerService = {
  generateItinerary,
};
