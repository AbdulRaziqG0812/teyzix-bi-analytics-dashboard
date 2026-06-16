import React from 'react';
import { LayoutDashboard, BarChart3, Settings } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Sidebar() {
  const { sidebarOpen, activeTab, setActiveTab, darkMode } = useStore();

  return (
    <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r flex flex-col transition-all duration-300`}>
      <div className={`h-16 flex items-center justify-between px-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <span className={`text-xl font-bold truncate ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
          {sidebarOpen ? 'Teyzix BI' : 'T'}
        </span>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <button 
          onClick={() => setActiveTab("dashboard")}
          className={`w-full flex items-center space-x-3 p-3 rounded-xl font-medium transition-all ${
            activeTab === 'dashboard' 
              ? (darkMode ? 'bg-indigo-900/40 text-indigo-400' : 'bg-indigo-50 text-indigo-600') 
              : (darkMode ? 'text-gray-400 hover:bg-gray-700/50' : 'text-gray-600 hover:bg-gray-100')
          }`}
        >
          <LayoutDashboard size={22} />
          {sidebarOpen && <span>Dashboard</span>}
        </button>

        <button 
          onClick={() => setActiveTab("analytics")}
          className={`w-full flex items-center space-x-3 p-3 rounded-xl font-medium transition-all ${
            activeTab === 'analytics' 
              ? (darkMode ? 'bg-indigo-900/40 text-indigo-400' : 'bg-indigo-50 text-indigo-600') 
              : (darkMode ? 'text-gray-400 hover:bg-gray-700/50' : 'text-gray-600 hover:bg-gray-100')
          }`}
        >
          <BarChart3 size={22} />
          {sidebarOpen && <span>Analytics</span>}
        </button>

        <button 
          onClick={() => setActiveTab("settings")}
          className={`w-full flex items-center space-x-3 p-3 rounded-xl font-medium transition-all ${
            activeTab === 'settings' 
              ? (darkMode ? 'bg-indigo-900/40 text-indigo-400' : 'bg-indigo-50 text-indigo-600') 
              : (darkMode ? 'text-gray-400 hover:bg-gray-700/50' : 'text-gray-600 hover:bg-gray-100')
          }`}
        >
          <Settings size={22} />
          {sidebarOpen && <span>Settings</span>}
        </button>
      </nav>
    </aside>
  );
}