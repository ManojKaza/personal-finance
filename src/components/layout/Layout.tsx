import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { SideNav } from './SideNav';
import { Header } from './Header';
import { ChevronsRight,ChevronsLeft } from 'lucide-react';

export const Layout = () => {
  const [open, setOpen] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-slate-900">
      <Header />

      <div className="flex flex-1 overflow-y-auto">
        <SideNav isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
          <button 
            onClick={toggleSidebar}
            className={`absolute top-1/2 p-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full transition-all duration-300 ease-in-out -translate-x-1/2 -translate-y-1/2 hover:bg-slate-100 dark:hover:bg-slate-700 ${isSidebarCollapsed ? 'left-20' : 'left-64'}`}
          >
            {isSidebarCollapsed ? <ChevronsRight className="w-5 h-5" /> : <ChevronsLeft className="w-5 h-5" />}
          </button>
        <main className="p-8">
          <Outlet />
        </main>
      </div>
      
    </div>
  );
};