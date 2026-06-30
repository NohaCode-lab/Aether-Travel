import React, { useState } from "react";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

interface SchengenFormProps {
  onCalculate: (entryDate: string, exitDate: string) => void;
}

export const SchengenForm: React.FC<SchengenFormProps> = ({ onCalculate }) => {
  const [entryDate, setEntryDate] = useState("");
  const [exitDate, setExitDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (entryDate && exitDate) {
      onCalculate(entryDate, exitDate);
    }
  };

  return (
    <Card className="p-6 mb-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 items-end"
      >
        <Input
          label="Entry Date"
          type="date"
          className="flex-1"
          value={entryDate}
          onChange={(e) => setEntryDate(e.target.value)}
          required
        />
        <Input
          label="Exit Date"
          type="date"
          className="flex-1"
          value={exitDate}
          onChange={(e) => setExitDate(e.target.value)}
          required
        />
        <Button type="submit">Calculate Days</Button>
      </form>
    </Card>
  );
};
