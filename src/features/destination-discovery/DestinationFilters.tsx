import React from "react";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Button } from "../../components/ui/Button";

export const DestinationFilters: React.FC = () => {
  return (
    <Card className="p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <Input label="Search" placeholder="Where do you want to go?" />
        <Select
          label="Region"
          options={[
            { value: "", label: "All Regions" },
            { value: "europe", label: "Europe" },
            { value: "asia", label: "Asia" },
            { value: "americas", label: "Americas" },
          ]}
        />
        <Select
          label="Vibe"
          options={[
            { value: "", label: "Any Vibe" },
            { value: "relaxing", label: "Relaxing" },
            { value: "adventure", label: "Adventure" },
            { value: "culture", label: "Culture & History" },
          ]}
        />
        <Button className="w-full">Apply Filters</Button>
      </div>
    </Card>
  );
};
