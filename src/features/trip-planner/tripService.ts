import { supabase } from "../../services/supabase";

export const tripService = {
  async saveTrip(
    userId: string,
    tripDetails: {
      destination: string;
      startDate: string;
      endDate: string;
      budget: string;
      travelers: number;
      style: string;
    },
    itineraryData: unknown,
  ) {
    // 1. Create the Trip record
    const { data: trip, error: tripError } = await supabase
      .from("trips")
      .insert({
        user_id: userId,
        destination: tripDetails.destination,
        start_date: tripDetails.startDate,
        end_date: tripDetails.endDate,
        budget: tripDetails.budget,
        travelers: tripDetails.travelers,
        style: tripDetails.style,
        status: "planned",
      })
      .select()
      .single();

    if (tripError) throw tripError;

    // 2. Create the Itinerary record linked to the Trip
    const { data: itinerary, error: itineraryError } = await supabase
      .from("itineraries")
      .insert({
        trip_id: trip.id,
        daily_plan: itineraryData,
      })
      .select()
      .single();

    if (itineraryError) throw itineraryError;

    return { trip, itinerary };
  },
};
