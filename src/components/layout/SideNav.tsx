import React from 'react';
import { 
  LayoutDashboard, 
  PlusCircle, 
  List,
  User,
  Settings,
  LogOut,
} from 'lucide-react';
import { Tooltip } from '../ui/Tooltip';

type SideNavProps = {
  isCollapsed: boolean;
  onToggle: () => void;
};

export const SideNav = ({ isCollapsed, onToggle }: SideNavProps) => {
  return (
    <aside 
      className={`transition-all duration-200 ease-in-out p-4 flex flex-col border-r border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 ${isCollapsed ? 'w-20 items-center' : 'w-64'}`}
    >
      {/* This nav is the part that will grow and scroll */}
      <nav className="flex-1">
        <ul>
          {/* Your list of navigation links (Dashboard, Add Transaction, etc.) go here, using the pattern we developed */}
          <li className="mb-4">
            <Tooltip content="Dashboard">
              <a href="#" className={`flex items-center p-2 rounded-lg text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 ${isCollapsed ? 'justify-center' : ''}`}>
                <LayoutDashboard className="w-6 h-6 flex-shrink-0" />
                {!isCollapsed && <span className="ml-3 whitespace-nowrap">Dashboard</span>}
              </a>
            </Tooltip>
          </li>
          <li className="mb-4">
            <Tooltip content='Add Transaction'>
              <a href="#" className={`flex items-center p-2 rounded-lg text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 ${isCollapsed ? 'justify-center' : ''}`}>
              <PlusCircle className="w-6 h-6 flex-shrink-0" />
              {!isCollapsed && <span className="ml-3 whitespace-nowrap">Add Transaction</span>}
            </a>
            </Tooltip>
          </li>
          <li className="mb-4">
            <Tooltip content='Transactions'>
              <a href="#" className={`flex items-center p-2 rounded-lg text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 ${isCollapsed ? 'justify-center' : ''}`}>
                <List className="w-6 h-6 flex-shrink-0" />
                {!isCollapsed && <span className="ml-3 whitespace-nowrap">Transactions</span>}
              </a>
            </Tooltip>
          </li>
        </ul>
      </nav>

      {/* This div groups ALL bottom items and does not grow */}
      <div className="flex-shrink-0">
        <ul>
          {/* User/Settings Links go here */}
          <li className="mb-4">
            <Tooltip content='Profile'>
              <a href="#" className={`group relative flex items-center p-2 rounded-lg text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 ${isCollapsed ? 'justify-center' : ''}`}>
                <User className="w-6 h-6 flex-shrink-0" />
                {!isCollapsed && <span className="ml-3 whitespace-nowrap">Profile</span>}
              </a>
            </Tooltip>
          </li>
          <li className="mb-4">
            <Tooltip content='Settings'>
              <a href="#" className={`group relative flex items-center p-2 rounded-lg text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 ${isCollapsed ? 'justify-center' : ''}`}>
                <Settings className="w-6 h-6 flex-shrink-0" />
                {!isCollapsed && <span className="ml-3 whitespace-nowrap">Settings</span>}
              </a>
            </Tooltip>
          </li>
          <li className="border-t border-slate-200 dark:border-slate-700 pt-4">
            <Tooltip content='Log Out'>
              <a href="#" className={`group relative flex items-center p-2 rounded-lg text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 ${isCollapsed ? 'justify-center' : ''}`}>
                <LogOut className="w-6 h-6 flex-shrink-0 text-red-500" />
                {!isCollapsed && <span className="ml-3 whitespace-nowrap">Log Out</span>}
              </a>
            </Tooltip>
          </li>
        </ul>
      </div>
    </aside>
  );
};