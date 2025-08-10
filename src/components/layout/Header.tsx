import React from 'react';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';
import { Landmark, PlusCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { UserProfileDropdown } from '../ui/UserProfileDropdown';

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
          <NavLink
            to="/add"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Add Transaction</span>
          </NavLink>
          <ThemeSwitcher />
          <UserProfileDropdown />
        </div>
      </div>
    </header>
  );
};