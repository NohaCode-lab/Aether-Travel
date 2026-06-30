import type { ReactNode } from 'react';

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action,
}) => {
  return (
    <div className="text-center py-12 px-6 bg-white rounded-lg border-2 border-dashed border-gray-300">
      {icon && <div className="mb-4 text-5xl text-gray-400">{icon}</div>}
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      {description && (
        <p className="mt-2 text-gray-500 max-w-md mx-auto">{description}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};