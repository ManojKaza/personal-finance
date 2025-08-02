import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'system'
  );

  useEffect(() => {
    const root = document.documentElement;
    let effectiveTheme = theme;

    // If theme is 'system', determine the actual theme from the OS
    if (theme === 'system') {
      effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches ? 'dark' : 'light';
    }

    // Apply the effective theme to the <html> element
    root.classList.remove('dark', 'light');
    root.classList.add(effectiveTheme);

    // Save the user's preference (not the effective theme)
    localStorage.setItem('theme', theme);
  }, [theme]); // Rerun this effect whenever the user's preference changes

  return { theme, setTheme };
};