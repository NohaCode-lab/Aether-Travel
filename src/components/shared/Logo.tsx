import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true }) => {
  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textClasses = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
  };

  return (
    <div className="flex items-center gap-2.5 group cursor-pointer select-none whitespace-nowrap flex-nowrap shrink-0">
      <div className="relative shrink-0">
        <img
          src="/favicon.svg"
          alt="Aether-Travel Unique Logo"
          className={`${sizeClasses[size]} rounded-2xl shadow-md shadow-teal-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-teal-500/40`}
        />
        <div className="absolute inset-0 rounded-2xl bg-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
      </div>

      {showText && (
        <div className={`flex items-center gap-1.5 font-sans ${textClasses[size]}`}>
          <span className="font-extrabold tracking-tight bg-gradient-to-r from-teal-600 via-emerald-500 to-cyan-500 dark:from-teal-300 dark:via-emerald-300 dark:to-cyan-200 bg-clip-text text-transparent">
            AETHER
          </span>
          <span className="font-black tracking-widest text-[10px] sm:text-xs px-2 py-0.5 rounded-lg bg-teal-500/10 text-teal-600 dark:bg-teal-400/15 dark:text-teal-300 border border-teal-500/20 dark:border-teal-400/30 uppercase">
            TRAVEL
          </span>
        </div>
      )}
    </div>
  );
};
