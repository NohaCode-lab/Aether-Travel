import React, { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
}) => {
  const baseStyles =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";

  const variants = {
    primary: "bg-indigo-100 text-indigo-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-800",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]}`}>{children}</span>
  );
};
