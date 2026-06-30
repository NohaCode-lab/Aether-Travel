import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden
        ${hoverable ? 'transition-all duration-200 ease-in-out hover:shadow-md hover:border-gray-300' : ''}
        ${className}`}
    >
      {children}
    </div>
  );
};
