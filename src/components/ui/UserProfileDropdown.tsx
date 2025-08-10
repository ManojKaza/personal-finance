import React from 'react';
import { User, Settings, LogOut } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const UserProfileDropdown = () => {
  const location = useLocation();
  const isActive = location.pathname === '/profile';
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={`p-3 rounded-full transition-colors duration-200 ${
            isActive
              ? 'bg-muted text-foreground'
              : 'text-muted-foreground hover:bg-muted'
          }`}
        >
          <User className={`w-6 h-6 flex-shrink-0 ${isActive ? 'text-primary' : ''}`} />
        </button>
      </DropdownMenu.Trigger>


      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          align="end"
          className="z-50 w-48 overflow-hidden rounded-md border border-border bg-card shadow-lg animate-in fade-in-0 zoom-in-95 duration-150"
        >
          <DropdownMenu.Item asChild>
            <NavLink
              to="/profile"
              className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted focus:outline-none"
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </NavLink>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <NavLink
              to="/settings"
              className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted focus:outline-none"
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </NavLink>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="h-[1px] bg-border my-1" />
          <DropdownMenu.Item asChild>
            <NavLink
              to="/logout"
              className="flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-muted focus:outline-none"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </NavLink>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};