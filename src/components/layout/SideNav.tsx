import React from 'react';

// A simple placeholder for an icon
const PlaceholderIcon = () => <div className="w-6 h-6 bg-gray-600 rounded-md" />;

export const SideNav = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
      <div className="mb-8 text-2xl font-bold">FinanceApp</div>
      <nav>
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
              <PlaceholderIcon />
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
              <PlaceholderIcon />
              <span className="ml-3">Add Transaction</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};