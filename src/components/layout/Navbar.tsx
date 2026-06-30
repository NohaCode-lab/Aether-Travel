import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold tracking-wide">AI Travel Planner</div>
      <div>
        <button className="text-sm bg-indigo-700 hover:bg-indigo-800 px-4 py-2 rounded-md transition-colors">
          Sign In
        </button>
      </div>
    </nav>
  );
};
