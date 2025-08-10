import React from 'react';
import { LayoutDashboard, PlusCircle, List, User, Settings, LogOut } from 'lucide-react';
import { Tooltip } from '../ui/Tooltip';

type SideNavProps = {
  isCollapsed: boolean;
  onToggle: () => void;
};

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: PlusCircle, label: 'Add Transaction' },
  { icon: List, label: 'Transactions' },
];

const bottomItems = [
  { icon: User, label: 'Profile' },
  { icon: Settings, label: 'Settings' },
  { icon: LogOut, label: 'Log Out', danger: true },
];

export const SideNav = ({ isCollapsed }: SideNavProps) => {
  return (
    <aside
      className={`transition-all duration-200 ease-in-out p-4 flex flex-col border-r bg-card border-border ${
        isCollapsed ? 'w-20 items-center' : 'w-64'
      }`}
    >
      <nav className="flex-1 overflow-y-auto">
        <ul>
          {navItems.map(({ icon: Icon, label }) => (
            <li key={label} className="mb-4">
              <Tooltip content={label}>
                <a
                  href="#"
                  className="flex items-center p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <Icon className="w-6 h-6 flex-shrink-0" />
                  {!isCollapsed && <span className="ml-3 whitespace-nowrap">{label}</span>}
                </a>
              </Tooltip>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex-shrink-0">
        <ul>
          {bottomItems.map(({ icon: Icon, label, danger }) => (
            <li key={label} className={label === 'Log Out' ? 'border-t border-border pt-4' : 'mb-4'}>
              <Tooltip content={label}>
                <a
                  href="#"
                  className={`flex items-center p-2 rounded-lg ${
                    danger
                      ? 'text-red-500 hover:text-red-600'
                      : 'text-muted-foreground hover:text-foreground'
                  } hover:bg-muted`}
                >
                  <Icon className="w-6 h-6 flex-shrink-0" />
                  {!isCollapsed && <span className="ml-3 whitespace-nowrap">{label}</span>}
                </a>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
