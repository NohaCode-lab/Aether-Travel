import React from 'react';

interface EmptyStateProps {
  title: string;

  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action,
}) => {
  return (
    <div className="text-center py-12 px-4 sm:px-6 lg:px-8 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 my-6">
      {icon ? (
        <div className="mx-auto h-12 w-12 text-gray-400 flex justify-center items-center">
          {icon}
        </div>
      ) : (
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M14 4v6h6M9 14h6M9 18h3"
          />
        </svg>
      )}

      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      {description && (
        <p className="mt-2 text-sm text-gray-500 max-w-sm mx-auto">
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};
