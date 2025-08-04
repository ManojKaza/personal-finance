import React from 'react';
import { 
  LayoutDashboard, 
  PlusCircle, 
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';

type SideNavProps = {
  isCollapsed: boolean;
  onToggle: () => void;
};

export const SideNav = ({ isCollapsed, onToggle }: SideNavProps) => {
  return (
    <aside 
      className={`h-screen p-4 flex flex-col border-r border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-64'}`}
    >
      {/* Navigation Links Area now starts at the top */}
      <nav className="flex-grow pt-4">
        <ul>
          <li className="mb-4">
            <a href="#" className={`flex items-center p-2 rounded-lg text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 ${isCollapsed ? 'justify-center' : ''}`}>
              <LayoutDashboard className="w-6 h-6 flex-shrink-0" />
              <span className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-200 ${isCollapsed ? 'w-0' : 'w-auto'}`}>
                Dashboard
              </span>
            </a>
          </li>
          <li>
            <a href="#" className={`flex items-center p-2 rounded-lg text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 ${isCollapsed ? 'justify-center' : ''}`}>
              <PlusCircle className="w-6 h-6 flex-shrink-0" />
              <span className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-200 ${isCollapsed ? 'w-0' : 'w-auto'}`}>
                Add Transaction
              </span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Collapse Button remains at the bottom */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
        <button 
          onClick={onToggle} 
          className={`flex items-center w-full p-2 rounded-lg text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 ${isCollapsed ? 'justify-center' : ''}`}
        >
          {isCollapsed ? <ChevronsRight className="w-6 h-6 flex-shrink-0" /> : <ChevronsLeft className="w-6 h-6 flex-shrink-0" />}
          <span className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-200 ${isCollapsed ? 'w-0' : 'w-auto'}`}>
            Collapse
          </span>
        </button>
      </div>
    </aside>
  );
};