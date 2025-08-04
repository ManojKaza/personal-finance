import React from 'react';
import { LayoutDashboard, PlusCircle } from 'lucide-react';

export const SideNav = () => {
  return (
    <aside className="w-64 h-screen bg-slate-100 p-4 border-r border-slate-200 dark:bg-slate-900 dark:border-slate-800">
      <div className="mb-8 text-2xl font-bold text-slate-800 dark:text-slate-200">
        FinanceApp
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 rounded-lg text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800">
              <LayoutDashboard className="w-6 h-6" />
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 rounded-lg text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800">
              <PlusCircle className="w-6 h-6" />
              <span className="ml-3">Add Transaction</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};