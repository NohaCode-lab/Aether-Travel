import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
      <div className="p-4 flex flex-col space-y-2">
        <a
          href="#"
          className="p-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors font-medium"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="p-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors font-medium"
        >
          My Trips
        </a>
        <a
          href="#"
          className="p-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors font-medium"
        >
          Settings
        </a>
      </div>
    </aside>
  );
};
