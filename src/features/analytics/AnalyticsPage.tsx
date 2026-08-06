import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { BarChart3, Globe, DollarSign, Bot, TrendingUp } from 'lucide-react';
import { Card } from '../../components/ui/Card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const AnalyticsPage: React.FC = () => {
  const tripsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Trips Taken',
        data: [2, 4, 3, 6, 5, 8, 7, 9],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.5)',
        tension: 0.4,
      },
    ],
  };

  const expenseData = {
    labels: ['Flights', 'Hotels', 'Dining', 'Activities', 'Transport'],
    datasets: [
      {
        data: [4200, 3100, 1800, 1200, 750],
        backgroundColor: ['#6366f1', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'],
      },
    ],
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
          SaaS Travel & AI Analytics
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
          Real-time metrics on trips booked, expenses incurred, AI Concierge usage, and geographical distribution.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-5 flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-gray-400 font-semibold uppercase block">Countries Visited</span>
            <span className="text-2xl font-black text-gray-900 dark:text-white">18 Countries</span>
          </div>
        </Card>

        <Card className="p-5 flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-gray-400 font-semibold uppercase block">Total Expenses</span>
            <span className="text-2xl font-black text-gray-900 dark:text-white">$11,050</span>
          </div>
        </Card>

        <Card className="p-5 flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-pink-50 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-gray-400 font-semibold uppercase block">AI Prompts Used</span>
            <span className="text-2xl font-black text-gray-900 dark:text-white">248 Queries</span>
          </div>
        </Card>

        <Card className="p-5 flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-gray-400 font-semibold uppercase block">Budget Saved</span>
            <span className="text-2xl font-black text-gray-900 dark:text-white">$1,620</span>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 space-y-4">
          <h3 className="font-bold text-gray-900 dark:text-white text-lg">Trips Booked Per Month</h3>
          <Line data={tripsData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </Card>

        <Card className="p-6 space-y-4">
          <h3 className="font-bold text-gray-900 dark:text-white text-lg">Travel Expenses Breakdown</h3>
          <div className="h-64 flex items-center justify-center">
            <Doughnut data={expenseData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsPage;
