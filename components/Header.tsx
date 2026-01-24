import React from 'react';
import { Snowflake, Menu } from 'lucide-react';
import { SendingStatus } from '../types';

interface HeaderProps {
    onToggleSidebar: () => void;
    status?: SendingStatus; // We pass the status to react to errors
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar, status }) => {
  // Determine if we are offline/error based on the passed status
  const isError = status === SendingStatus.ERROR;

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 sticky top-0 z-10 flex items-center justify-between shadow-sm flex-shrink-0 transition-colors duration-300">
      <div className="flex items-center space-x-3">
        {/* Menu Button */}
        <button 
            onClick={onToggleSidebar}
            className="p-2 -ml-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
            title="Toggle Sidebar"
        >
            <Menu size={24} />
        </button>

        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="bg-reefer-blue p-2 rounded-lg shadow-md text-white">
            <Snowflake size={24} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight leading-none">
              Reefer<span className="text-reefer-blue">Guru</span>
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">AI Technician Assistant</p>
          </div>
        </div>
      </div>
      
      {/* Status Indicator Area */}
      <div className="flex items-center space-x-2">
         <div className="flex items-center px-3 py-1.5 bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
             <div className="relative flex h-2.5 w-2.5 mr-2">
               {/* Ping animation wrapper */}
               <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isError ? 'bg-red-400' : 'bg-reefer-green'}`}></span>
               {/* Actual dot */}
               <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isError ? 'bg-red-500' : 'bg-reefer-green'}`}></span>
             </div>
             <span className={`text-xs font-bold ${isError ? 'text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-200'}`}>
                {isError ? 'Offline' : 'Online'}
             </span>
         </div>
      </div>
    </header>
  );
};
