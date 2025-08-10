import React from 'react';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';
import { Landmark } from 'lucide-react';

// No props are needed anymore
export const Header = () => {
  return (
    <header className="p-4 border-b bg-card border-border">
      <div className="flex items-center justify-between">
        {/* Left side: Logo & App Name */}
        <div className="flex items-center gap-4">
          <Landmark className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold text-foreground">
            FinanceApp
          </span>
        </div>

        {/* Right side: Actions */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};