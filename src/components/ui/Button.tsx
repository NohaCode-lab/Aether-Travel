import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex justify-center items-center font-medium rounded-md focus:outline-none transition-colors";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed",
    outline:
      "bg-white text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
