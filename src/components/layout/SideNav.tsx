import React from 'react';
import { LayoutDashboard, List, BarChart2, PiggyBank, Target } from 'lucide-react';
import { Tooltip } from '../ui/Tooltip';
import { NavLink, useLocation } from 'react-router-dom';

type SideNavProps = {
  isCollapsed: boolean;
  onToggle: () => void;
};

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: List, label: 'Transactions', path: '/transactions' },
  { icon: BarChart2, label: 'Reports', path: '/reports' },
  { icon: PiggyBank, label: 'Budgets', path: '/budgets' },
  { icon: Target, label: 'Goals', path: '/goals' },
];

export const SideNav = ({ isCollapsed }: SideNavProps) => {
  const location = useLocation();

  return (
    <aside
      className={`transition-all duration-200 ease-in-out p-4 flex flex-col border-r bg-card border-border ${
        isCollapsed ? 'w-20 items-center' : 'w-64'
      }`}
    >
      <nav className="flex-1 overflow-y-auto">
        <ul>
          {navItems.map(({ icon: Icon, label, path }) => {
            const isActive = location.pathname === path || location.pathname.startsWith(path + '/');;

            return (
              <li key={label} className="mb-4">
                <Tooltip content={label}>
                  <NavLink
                    to={path}
                    className={`flex items-center p-4 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-muted text-foreground'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 flex-shrink-0 ${
                        isActive ? 'text-primary' : ''
                      }`}
                    />
                    {!isCollapsed && (
                      <span className={`ml-3 whitespace-nowrap ${
                        isActive ? 'text-primary' : ''
                      }`}>{label}</span>
                    )}
                  </NavLink>
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
