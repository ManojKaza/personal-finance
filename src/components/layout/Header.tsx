import React from 'react';
import { Button } from '../ui/Button';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';
import { Plus, Landmark } from 'lucide-react';

export const Header = () => {
  return (
    <header className="p-4 border-b border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800">
      <div className="flex items-center justify-between">
        {/* Left side of Header: Logo and Page Title */}
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Landmark className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold ml-2 text-slate-800 dark:text-slate-200">
              FinanceApp
            </span>
          </div>
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700"></div> {/* Vertical separator */}
          <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            Dashboard
          </h1>
        </div>

        {/* Right side of Header: Actions */}
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