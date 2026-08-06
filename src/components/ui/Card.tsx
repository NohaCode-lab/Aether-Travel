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
      className={`bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-sm border border-gray-200/80 dark:border-slate-800/80 overflow-hidden
        ${hoverable ? 'transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-500/40 dark:hover:border-teal-500/40 hover:-translate-y-0.5' : ''}
        ${className}`}
    >
      {children}
    </div>
  );
};
