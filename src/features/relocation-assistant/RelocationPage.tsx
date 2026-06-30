import React, { useState } from "react";
import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { PageHeader } from "../../components/PageHeader";
import { CostOfLivingCard } from "./CostOfLivingCard";
import { CountryComparison } from "./CountryComparison";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

export const RelocationPage: React.FC = () => {
  const [searched, setSearched] = useState(false);

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title="Relocation Assistant"
          subtitle="Calculate the cost of living and compare cities for your next move."
        />

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <Input
                label="Current City"
                placeholder="e.g. New York, USA"
                defaultValue="New York, USA"
              />
            </div>
            <div className="flex-1">
              <Input label="Target City" placeholder="e.g. Lisbon, Portugal" />
            </div>
            <Button onClick={() => setSearched(true)}>Compare</Button>
          </div>
        </div>

        {searched && (
          <>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Estimated Monthly Costs (Target City)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <CostOfLivingCard
                category="Housing"
                amount="$1,200"
                trend="down"
              />
              <CostOfLivingCard category="Food" amount="$400" trend="down" />
              <CostOfLivingCard
                category="Transport"
                amount="$50"
                trend="down"
              />
              <CostOfLivingCard
                category="Utilities"
                amount="$100"
                trend="down"
              />
            </div>

            <CountryComparison />
          </>
        )}
      </div>
    </DashboardLayout>
  );
};
