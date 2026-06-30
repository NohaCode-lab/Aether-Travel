export interface Trip {
  id: string;
  user_id: string;
  destination: string;
  start_date: string;
  end_date: string;
  budget: "Backpacker" | "Budget" | "Moderate" | "Luxury";
  travelers: number;
  style: string;
  status: "planned" | "completed" | "cancelled";
  created_at: string;
}

export interface Itinerary {
  id: string;
  trip_id: string;
  daily_plan: ItineraryDay[];
  total_cost_estimate: number;
  currency: string;
}

export interface ItineraryDay {
  day: number;
  date: string;
  activities: {
    time: string;
    title: string;
    description: string;
    cost_estimate: number;
  }[];
}
