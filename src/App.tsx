import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import KPICards from './components/KPICards';
import ChartsSection from './components/ChartsSection';
import DataTable from './components/DataTable';
import { useStore } from './store/useStore';
import { Loader2, AlertCircle, Wrench } from 'lucide-react';

export default function App() {
  const { darkMode, activeTab, fetchDashboardData, loading, error } = useStore();

  // Task Requirement 7: Trigger Simulated Live Mock API on Component Mount
  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} min-h-screen flex transition-colors duration-300 font-sans`}>
      
      {/* 1. GLOBAL SIDEBAR */}
      <Sidebar />

      {/* MAIN APPLICATION CONTAINER */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* 2. GLOBAL HEADER */}
        <Header />

        {/* 3. CONDITIONAL MAIN VIEWPORT */}
        <main className={`flex-1 p-6 overflow-y-auto transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          
          {/* STATE A: API LOADING STATE */}
          {loading && (
            <div className="h-full flex flex-col items-center justify-center space-y-3 min-h-[400px]">
              <Loader2 className="w-10 h-10 animate-spin text-indigo-600" />
              <p className="text-sm font-medium text-gray-400">Fetching live analytical enterprise telemetry...</p>
            </div>
          )}

          {/* STATE B: API ERROR STATE */}
          {error && !loading && (
            <div className="h-full flex flex-col items-center justify-center space-y-3 min-h-[400px]">
              <AlertCircle className="w-12 h-12 text-rose-500" />
              <p className="text-sm font-semibold text-rose-400">{error}</p>
            </div>
          )}

          {/* STATE C: CONDITIONAL RENDERING ONCE DATA IS LOADED SUCCESSFUL */}
          {!loading && !error && (
            <>
              {/* TAB 1: DASHBOARD VIEW */}
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  <div>
                    <h1 className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Business Intelligence Dashboard
                    </h1>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Welcome back! Simulated engine real-time department matrices.
                    </p>
                  </div>

                  {/* Component Architecture Inclusions */}
                  <KPICards />
                  <ChartsSection />
                  <DataTable />
                </div>
              )}

              {/* TAB 2: ANALYTICS VIEW */}
              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  <div>
                    <h1 className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Advanced Business Analytics
                    </h1>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Deep-dive diagnostic data visualization layers.
                    </p>
                  </div>
                  
                  {/* Reuse charts architecture for unified matrix */}
                  <ChartsSection />
                </div>
              )}

              {/* TAB 3: SETTINGS VIEW */}
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <div>
                    <h1 className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Profile Settings
                    </h1>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Manage your Teyzix BI platform configurations.
                    </p>
                  </div>

                  <div className={`p-8 rounded-2xl border text-center space-y-3 max-w-md mx-auto ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
                    <Wrench className="mx-auto text-indigo-500" size={40} />
                    <h3 className="text-md font-bold">Preferences Workflow</h3>
                    <p className="text-xs text-gray-400">User session tokens, layout themes persistent options, and system caching profiles are automatically adjusted via Zustand store structures.</p>
                  </div>
                </div>
              )}
            </>
          )}

        </main>
      </div>
    </div>
  );
}