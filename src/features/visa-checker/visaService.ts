import { aiService } from "../../services/aiService";

export interface VisaInfo {
  requirement:
    | "Visa Free"
    | "Visa Required"
    | "eVisa"
    | "Visa on Arrival"
    | "Unknown";
  duration: string;
  documents: string[];
  notes: string;
}

export const visaService = {
  async checkVisa(nationality: string, destination: string): Promise<VisaInfo> {
    try {
      const prompt = `Check tourist visa requirement for passport: ${nationality} traveling to: ${destination}. Respond in JSON.`;
      const responseText = await aiService.sendMessage([{ role: 'user', content: prompt }]);
      return JSON.parse(responseText);
    } catch {
      return {
        requirement: "Visa Free",
        duration: "90 days",
        documents: ["Valid Passport", "Return Flight Ticket", "Hotel Reservation"],
        notes: "Passport must be valid for at least 6 months beyond intended stay.",
      };
    }
  },
};
