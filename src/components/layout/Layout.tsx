import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SideNav } from './SideNav';
import { Header } from './Header';

export const Layout = () => {
  // Add state to track the collapsed status
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Function to toggle the state
  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-white dark:bg-slate-900">
      {/* Pass the state and toggle function as props */}
      <SideNav isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
      
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};