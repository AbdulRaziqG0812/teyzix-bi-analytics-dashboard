import React from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Header() {
  const { darkMode, toggleDarkMode, toggleSidebar } = useStore();

  return (
    <header className={`h-16 border-b flex items-center justify-between px-6 z-10 transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <button 
        onClick={toggleSidebar}
        className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}
      >
        <Menu size={22} />
      </button>

      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleDarkMode}
          className={`p-2 rounded-lg transition-all ${darkMode ? 'hover:bg-gray-700 text-amber-400' : 'hover:bg-gray-100 text-gray-600'}`}
        >
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold shadow-sm">
            AR
          </div>
          <span className={`text-sm font-semibold hidden md:inline ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            Abdul Raziq
          </span>
        </div>
      </div>
    </header>
  );
}