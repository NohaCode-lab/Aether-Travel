import { create } from "zustand";
import { supabase } from "../services/supabase";

// In a real app, this would likely be in a shared `types` directory.
export interface Trip {
  id: string;
  created_at: string;
  user_id: string;
  destination: string;
  start_date: string;
  end_date: string;
  notes?: string;
}

interface TripState {
  trips: Trip[];
  loading: boolean;
  error: Error | null;
  fetchTrips: (userId: string) => Promise<void>;
  addTrip: (
    trip: Omit<Trip, "id" | "created_at" | "user_id">,
    userId: string,
  ) => Promise<void>;
  updateTrip: (tripId: string, updates: Partial<Trip>) => Promise<void>;
  deleteTrip: (tripId: string) => Promise<void>;
  clearTrips: () => void;
}

export const useTripStore = create<TripState>((set) => ({
  trips: [],
  loading: false,
  error: null,

  fetchTrips: async (userId: string) => {
    if (!userId) {
      set({ trips: [], loading: false, error: null });
      return;
    }
    try {
      set({ loading: true, error: null });
      const { data, error } = await supabase
        .from("trips")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (error) throw error;

      set({ trips: data || [], loading: false });
    } catch (err: any) {
      console.error("Error fetching trips:", err);
      set({ error: err, loading: false });
    }
  },

  addTrip: async (trip, userId) => {
    try {
      const { data, error } = await supabase
        .from("trips")
        .insert([{ ...trip, user_id: userId }])
        .select();

      if (error) throw error;

      if (data) {
        set((state) => ({
          trips: [data[0], ...state.trips],
        }));
      }
    } catch (err: any) {
      console.error("Error adding trip:", err);
      set({ error: err });
    }
  },

  updateTrip: async (tripId, updates) => {
    try {
      const { data, error } = await supabase
        .from("trips")
        .update(updates)
        .eq("id", tripId)
        .select();

      if (error) throw error;

      if (data) {
        set((state) => ({
          trips: state.trips.map((trip) =>
            trip.id === tripId ? { ...trip, ...data[0] } : trip,
          ),
        }));
      }
    } catch (err: any) {
      console.error("Error updating trip:", err);
      set({ error: err });
    }
  },

  deleteTrip: async (tripId: string) => {
    try {
      const { error } = await supabase.from("trips").delete().eq("id", tripId);

      if (error) throw error;

      set((state) => ({
        trips: state.trips.filter((trip) => trip.id !== tripId),
      }));
    } catch (err: any) {
      console.error("Error deleting trip:", err);
      set({ error: err });
    }
  },

  clearTrips: () => set({ trips: [], loading: false, error: null }),
}));
