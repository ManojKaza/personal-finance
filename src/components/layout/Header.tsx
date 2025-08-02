import React from 'react';

export const Header = () => {
  return (
    <header className="p-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        {/* Theme switcher will go here */}
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Theme
        </button>
      </div>
    </header>
  );
};