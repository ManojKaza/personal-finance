import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  // State to track the actual system theme
  const [systemTheme, setSystemTheme] = useState<Theme>(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  // State to track the user's temporary override. It's 'null' in automatic mode.
  const [userChoice, setUserChoice] = useState<Theme | null>(null);

  // The theme we actually show on the page. Prioritizes user choice.
  const effectiveTheme = userChoice || systemTheme;

  // This effect listens for OS theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const newSystemTheme = e.matches ? 'dark' : 'light';
      setSystemTheme(newSystemTheme);
      // CRUCIAL: Any change in the system theme resets the user's override.
      setUserChoice(null);
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []); // This effect runs only once to set up the listener.

  // This effect applies the final theme to the page
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(effectiveTheme);
  }, [effectiveTheme]);

  // This is the function the button will call to set the temporary override
  const toggleTheme = () => {
    setUserChoice(effectiveTheme === 'light' ? 'dark' : 'light');
  };

  return { theme: effectiveTheme, toggleTheme };
};