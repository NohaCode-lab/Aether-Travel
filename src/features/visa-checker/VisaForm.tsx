import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

interface VisaFormProps {
  onCheck: (nationality: string, destination: string) => void;
  isLoading: boolean;
}

export default function VisaForm({ onCheck, isLoading }: VisaFormProps) {
  const [nationality, setNationality] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nationality.trim() || !destination.trim()) return;
    onCheck(nationality.trim(), destination.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/70 dark:bg-gray-800/70 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Your Nationality (Passport)"
          placeholder="e.g., Canadian, Egyptian"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          required
        />
        <Input
          label="Destination Country"
          placeholder="e.g., Japan, France"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full mt-2" isLoading={isLoading}>
        Check Visa Requirements 🛂
      </Button>
    </form>
  );
}
