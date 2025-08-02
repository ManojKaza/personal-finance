import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  // Type assertion is safe here as option values match the Theme type
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as 'light' | 'dark' | 'system');
  };

  return (
    <select
      value={theme}
      onChange={handleThemeChange}
      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  );
};