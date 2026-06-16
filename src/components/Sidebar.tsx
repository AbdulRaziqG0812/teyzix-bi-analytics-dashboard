import React from 'react';
import { LayoutDashboard, BarChart3, Settings, X } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Sidebar() {
  const { sidebarOpen, toggleSidebar, activeTab, setActiveTab, darkMode } = useStore();

  // Agar mobile screen ho aur sidebar closed ho, toh bilkul mat dikhao
  if (!sidebarOpen) return null;

  return (
    <>
      {/* MOBILE OVERLAY: Jab mobile par sidebar khule toh baqi screen par click karke band ho sake */}
      <div 
        onClick={toggleSidebar} 
        className="fixed inset-0 bg-black/40 z-40 md:hidden"
      />

      <aside className={`fixed md:relative inset-y-0 left-0 z-50 ${sidebarOpen ? 'w-64' : 'w-20'} ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r flex flex-col transition-all duration-300 h-full`}>
        <div className={`h-16 flex items-center justify-between px-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <span className={`text-xl font-bold truncate ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
            Teyzix BI
          </span>
          {/* Mobile par Close Button */}
          <button onClick={toggleSidebar} className="p-1 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => { setActiveTab("dashboard"); if(window.innerWidth < 768) toggleSidebar(); }}
            className={`w-full flex items-center space-x-3 p-3 rounded-xl font-medium transition-all ${
              activeTab === 'dashboard' 
                ? (darkMode ? 'bg-indigo-900/40 text-indigo-400' : 'bg-indigo-50 text-indigo-600') 
                : (darkMode ? 'text-gray-400 hover:bg-gray-700/50' : 'text-gray-600 hover:bg-gray-100')
            }`}
          >
            <LayoutDashboard size={22} />
            <span>Dashboard</span>
          </button>

          <button 
            onClick={() => { setActiveTab("analytics"); if(window.innerWidth < 768) toggleSidebar(); }}
            className={`w-full flex items-center space-x-3 p-3 rounded-xl font-medium transition-all ${
              activeTab === 'analytics' 
                ? (darkMode ? 'bg-indigo-900/40 text-indigo-400' : 'bg-indigo-50 text-indigo-600') 
                : (darkMode ? 'text-gray-400 hover:bg-gray-700/50' : 'text-gray-600 hover:bg-gray-100')
            }`}
          >
            <BarChart3 size={22} />
            <span>Analytics</span>
          </button>

          <button 
            onClick={() => { setActiveTab("settings"); if(window.innerWidth < 768) toggleSidebar(); }}
            className={`w-full flex items-center space-x-3 p-3 rounded-xl font-medium transition-all ${
              activeTab === 'settings' 
                ? (darkMode ? 'bg-indigo-900/40 text-indigo-400' : 'bg-indigo-50 text-indigo-600') 
                : (darkMode ? 'text-gray-400 hover:bg-gray-700/50' : 'text-gray-600 hover:bg-gray-100')
            }`}
          >
            <Settings size={22} />
            <span>Settings</span>
          </button>
        </nav>
      </aside>
    </>
  );
}