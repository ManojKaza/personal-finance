import React from 'react';
import { ThemeSwitcher } from '../ui/ThemeSwitcher'; // Import the new component

export const Header = () => {
  return (
    <header className="p-4 border-b border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Dashboard
        </h1>
        <ThemeSwitcher /> {/* Use the new component here */}
      </div>
    </header>
  );
};