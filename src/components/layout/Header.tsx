import React from 'react';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';

export const Header = () => {
  return (
    <header className="p-4 border-b bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Dashboard
        </h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
};