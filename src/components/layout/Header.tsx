import React from 'react';
import { Button } from '../ui/Button';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';
import { Plus } from 'lucide-react';

export const Header = () => {
  return (
    // Add dark mode classes for background, border, and text
    <header className="p-4 border-b border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
          Dashboard
        </h1>
        <div className="flex items-center gap-4">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Transaction
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};