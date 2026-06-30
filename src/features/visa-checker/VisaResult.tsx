import { Card } from "../../components/ui/Card";
import type { VisaInfo } from "./visaService";

interface VisaResultProps {
  result: VisaInfo;
}

export default function VisaResult({ result }: VisaResultProps) {
  const getRequirementColor = (req: string) => {
    switch (req) {
      case "Visa Free":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800";
      case "eVisa":
      case "Visa on Arrival":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800";
      case "Visa Required":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400 border-gray-200 dark:border-gray-800";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in mt-8">
      <Card className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-l-4 border-l-blue-500">
        <div>
          <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-1">
            Status
          </h3>
          <div className="flex items-center flex-wrap gap-3">
            <span
              className={`px-4 py-1.5 rounded-full font-bold border ${getRequirementColor(result.requirement)}`}
            >
              {result.requirement}
            </span>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Duration: {result.duration}
            </span>
          </div>
        </div>
      </Card>

      {result.documents && result.documents.length > 0 && (
        <Card>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span>📄</span> Required Documents
          </h3>
          <ul className="space-y-2">
            {result.documents.map((doc, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
              >
                <span className="text-blue-500 mt-0.5">•</span>
                {doc}
              </li>
            ))}
          </ul>
        </Card>
      )}

      {result.notes && (
        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800/50">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-500 mb-1 flex items-center gap-2">
            <span>⚠️</span> Important Notes
          </h4>
          <p className="text-yellow-700 dark:text-yellow-400/90 text-sm leading-relaxed">
            {result.notes}
          </p>
        </div>
      )}
    </div>
  );
}
