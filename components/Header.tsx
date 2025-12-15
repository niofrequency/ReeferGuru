import React from 'react';
import { Snowflake, Activity, Zap, Menu } from 'lucide-react';

interface HeaderProps {
    onToggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 sticky top-0 z-10 flex items-center justify-between shadow-sm flex-shrink-0 transition-colors duration-300">
      <div className="flex items-center space-x-3">
        {/* Menu Button - Visible on all screens now */}
        <button 
            onClick={onToggleSidebar}
            className="p-2 -ml-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
            title="Toggle Sidebar"
        >
            <Menu size={24} />
        </button>

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
      
      <div className="flex space-x-3 text-gray-400">
         <div className="hidden md:flex items-center space-x-1">
             <Activity size={16} className="text-reefer-green" />
             <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Online</span>
         </div>
         <div className="hidden md:flex items-center space-x-1">
             <Zap size={16} className="text-amber-500" />
             <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">v2.5 Flash</span>
         </div>
      </div>
    </header>
  );
};