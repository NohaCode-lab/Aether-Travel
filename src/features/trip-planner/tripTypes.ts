export interface TripActivity {
  id: number;
  time: string;
  title: string;
  description: string;
}

export interface TripDay {
  date: string;
  activities: TripActivity[];
}

export interface TripItinerary {
  destination: string;
  days: TripDay[];
}

export interface Trip {
  id: number;
  destination: string;
  country: string;
  image: string;
  startDate: string;
  endDate: string;
}
