import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const textClasses = {
    sm: 'text-base font-bold',
    md: 'text-xl font-extrabold',
    lg: 'text-3xl font-black',
  };

  return (
    <div className="flex items-center gap-2.5 group cursor-pointer select-none">
      <div className="relative">
        <img
          src="/favicon.svg"
          alt="Aether-Travel Logo"
          className={`${sizeClasses[size]} rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105`}
        />
        <div className="absolute inset-0 rounded-xl bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xs" />
      </div>
      {showText && (
        <span
          className={`${textClasses[size]} bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent tracking-tight font-sans`}
        >
          Aether-Travel
        </span>
      )}
    </div>
  );
};
