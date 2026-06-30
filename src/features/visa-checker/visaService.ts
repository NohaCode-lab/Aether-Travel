import { openai } from "../../services/openai";

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
    const systemPrompt = `You are a highly accurate travel visa assistant.
Provide visa requirements for a citizen of the specified 'Nationality' traveling to the 'Destination' for tourism.
Respond ONLY with a valid JSON object matching this structure:
{
  "requirement": "Visa Free" | "Visa Required" | "eVisa" | "Visa on Arrival" | "Unknown",
  "duration": "string (e.g., '90 days', 'N/A')",
  "documents": ["string (e.g., 'Valid Passport', 'Return Ticket')"],
  "notes": "string (any additional crucial info, keep it brief)"
}`;

    const userPrompt = `Nationality: ${nationality}\nDestination: ${destination}`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106", // Using JSON-compatible model
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" },
    });

    const responseContent = response.choices[0].message.content;
    if (!responseContent)
      throw new Error("Failed to retrieve visa information.");

    return JSON.parse(responseContent) as VisaInfo;
  },
};
