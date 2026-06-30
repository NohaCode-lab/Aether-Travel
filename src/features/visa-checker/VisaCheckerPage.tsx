import { useState } from "react";
import VisaForm from "./VisaForm";
import VisaResult from "./VisaResult";
import { visaService, type VisaInfo } from "./visaService";

export default function VisaCheckerPage() {
  const [result, setResult] = useState<VisaInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheck = async (nationality: string, destination: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const visaInfo = await visaService.checkVisa(nationality, destination);
      setResult(visaInfo);
    } catch (err) {
      console.error(err);
      setError("Failed to check visa requirements. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <span className="text-4xl">🛂</span> Visa Checker
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Verify travel visa requirements and required documents for your destination instantly.
        </p>
      </div>

      <VisaForm onCheck={handleCheck} isLoading={isLoading} />
      {error && <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl border border-red-200 dark:border-red-800">{error}</div>}
      {result && <VisaResult result={result} />}
    </div>
  );
}