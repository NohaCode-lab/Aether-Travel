import { Card } from '../../components/ui/Card';

export const DashboardStats: React.FC = () => {
  const stats = [
    { label: 'Total Trips Planned', value: '12' },
    { label: 'Countries Visited', value: '5' },
    { label: 'Estimated Savings', value: '$850' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6">
          <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
        </Card>
      ))}
    </div>
  );
};
