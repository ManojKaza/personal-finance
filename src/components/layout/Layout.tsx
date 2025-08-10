import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { SideNav } from './SideNav';
import { Header } from './Header';
import { ChevronsRight, ChevronsLeft } from 'lucide-react';

export const Layout = () => {
  const [open, setOpen] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setSidebarCollapsed(!isSidebarCollapsed);

  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener('keydown', handleShortcut);
    return () => document.removeEventListener('keydown', handleShortcut);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <Header />

      <div className="flex flex-1 overflow-y-auto">
        <SideNav isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />

        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className={`absolute top-1/2 p-1.5 bg-card border border-border rounded-full transition-all duration-200 ease-in-out -translate-x-1/2 -translate-y-1/2 hover:bg-muted ${
            isSidebarCollapsed ? 'left-20' : 'left-64'
          }`}
        >
          {isSidebarCollapsed ? <ChevronsRight className="w-5 h-5" /> : <ChevronsLeft className="w-5 h-5" />}
        </button>

        <main className="p-8 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
