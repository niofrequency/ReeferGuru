import React from 'react';
import { MessageSquare, Plus, Trash2, X, Clock, PanelLeftClose, Moon, Sun } from 'lucide-react';
import { StoredChat } from '../types';

interface SidebarProps {
  chats: StoredChat[];
  currentChatId: string | null;
  onSelectChat: (id: string) => void;
  onNewChat: () => void;
  onDeleteChat: (e: React.MouseEvent, id: string) => void;
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  chats, 
  currentChatId, 
  onSelectChat, 
  onNewChat, 
  onDeleteChat,
  isOpen,
  onClose,
  isDarkMode,
  toggleTheme
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-40
        bg-reefer-dark text-gray-300 flex flex-col
        transform transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 
        ${isOpen ? 'md:w-[280px] border-r border-gray-800' : 'md:w-0 md:border-none overflow-hidden'}
      `}>
        {/* Inner Container to prevent content squashing during width transition */}
        <div className="w-[280px] flex flex-col h-full min-w-[280px]">
            
            {/* Header Area */}
            <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                <h2 className="text-sm font-bold text-gray-100 uppercase tracking-wider flex items-center gap-2">
                    <Clock size={16} className="text-reefer-blue"/> History
                </h2>
                <div className="flex items-center">
                    {/* Mobile Close */}
                    <button 
                        onClick={onClose} 
                        className="md:hidden p-1 hover:bg-gray-800 rounded-lg text-gray-400"
                    >
                        <X size={20} />
                    </button>
                    {/* Desktop Collapse */}
                    <button 
                        onClick={onClose} 
                        className="hidden md:block p-1 hover:bg-gray-800 rounded-lg text-gray-400"
                        title="Collapse Sidebar"
                    >
                        <PanelLeftClose size={20} />
                    </button>
                </div>
            </div>

            {/* New Chat Button */}
            <div className="p-4">
            <button
                onClick={() => {
                onNewChat();
                if (window.innerWidth < 768) onClose();
                }}
                className="w-full flex items-center justify-center gap-2 bg-reefer-blue hover:bg-blue-700 text-white py-3 px-4 rounded-xl transition-all shadow-md font-medium"
            >
                <Plus size={20} />
                <span>New Chat</span>
            </button>
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto px-2 space-y-1 pb-4 scrollbar-thin scrollbar-thumb-gray-700 overscroll-contain">
            {chats.length === 0 ? (
                <div className="text-center py-10 px-4">
                    <p className="text-sm text-gray-500">No history yet.</p>
                    <p className="text-xs text-gray-600 mt-1">Start a new chat to begin troubleshooting.</p>
                </div>
            ) : (
                chats.map((chat) => (
                <div 
                    key={chat.id}
                    className={`
                    group relative flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors
                    ${chat.id === currentChatId 
                        ? 'bg-gray-800 text-white' 
                        : 'hover:bg-gray-800/50 text-gray-400 hover:text-gray-200'}
                    `}
                    onClick={() => {
                        onSelectChat(chat.id);
                        if (window.innerWidth < 768) onClose();
                    }}
                >
                    <MessageSquare size={18} className="flex-shrink-0" />
                    
                    <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium truncate">
                        {chat.title || "New Chat"}
                    </h3>
                    <span className="text-[10px] text-gray-500">
                        {new Date(chat.updatedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                    </span>
                    </div>

                    <button
                    onClick={(e) => onDeleteChat(e, chat.id)}
                    className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-900/50 hover:text-red-400 rounded transition-all"
                    title="Delete chat"
                    >
                    <Trash2 size={14} />
                    </button>
                </div>
                ))
            )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-800 space-y-3">
                
                {/* Dark Mode Toggle */}
                <button 
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-800 transition-colors group"
                >
                   <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                      {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
                      <span className="text-sm font-medium">Dark Mode</span>
                   </div>
                   
                   <div className={`
                     w-9 h-5 rounded-full relative transition-colors duration-200
                     ${isDarkMode ? 'bg-reefer-blue' : 'bg-gray-600'}
                   `}>
                      <div className={`
                         absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-200
                         ${isDarkMode ? 'left-5' : 'left-1'}
                      `} />
                   </div>
                </button>

                <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 leading-relaxed">
                        Tip: Use specific alarm codes for faster diagnosis.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};