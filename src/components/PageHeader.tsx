import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};
