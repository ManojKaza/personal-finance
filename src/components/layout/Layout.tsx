import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideNav } from './SideNav';
import { Header } from './Header';

export const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900"> {/* <-- Add dark background here */}
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