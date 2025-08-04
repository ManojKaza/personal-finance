import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideNav } from './SideNav';
import { Header } from './Header';

export const Layout = () => {
  return (
    // Add dark:bg-slate-900
    <div className="flex h-screen bg-white dark:bg-slate-900">
      <SideNav />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};