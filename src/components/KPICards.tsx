import React from 'react';
import { TrendingUp, DollarSign, ShoppingCart, Users, Percent } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function KPICards() {
  const { darkMode, transactions } = useStore();

  // Task Requirement 2: Dynamically calculate aggregates from store data
  const totalRevenue = transactions.reduce((sum, tx) => sum + tx.revenue, 0);
  const totalOrders = transactions.reduce((sum, tx) => sum + tx.orders, 0);
  const totalCustomers = transactions.length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Revenue */}
      <div className={`p-6 rounded-2xl border shadow-sm flex items-center justify-between transition-all duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
        <div className="space-y-2">
          <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Revenue</span>
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>${totalRevenue.toLocaleString()}</h3>
          <span className="text-xs font-semibold text-emerald-500 flex items-center gap-1">
            <TrendingUp size={14} /> +12.5% MoM Growth
          </span>
        </div>
        <div className={`p-4 rounded-2xl ${darkMode ? 'bg-emerald-950/40 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
          <DollarSign size={24} />
        </div>
      </div>

      {/* Orders */}
      <div className={`p-6 rounded-2xl border shadow-sm flex items-center justify-between transition-all duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
        <div className="space-y-2">
          <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Orders</span>
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{totalOrders}</h3>
          <span className="text-xs font-semibold text-indigo-500 flex items-center gap-1">
            <TrendingUp size={14} /> +8.2% vs last week
          </span>
        </div>
        <div className={`p-4 rounded-2xl ${darkMode ? 'bg-indigo-950/40 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
          <ShoppingCart size={24} />
        </div>
      </div>

      {/* Customers */}
      <div className={`p-6 rounded-2xl border shadow-sm flex items-center justify-between transition-all duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
        <div className="space-y-2">
          <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Customers</span>
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{totalCustomers}</h3>
          <span className="text-xs font-semibold text-emerald-500 flex items-center gap-1">
            <TrendingUp size={14} /> Live Client Acquisition
          </span>
        </div>
        <div className={`p-4 rounded-2xl ${darkMode ? 'bg-sky-950/40 text-sky-400' : 'bg-sky-50 text-sky-600'}`}>
          <Users size={24} />
        </div>
      </div>

      {/* Conversion Rate */}
      <div className={`p-6 rounded-2xl border shadow-sm flex items-center justify-between transition-all duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
        <div className="space-y-2">
          <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Conversion Rate</span>
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>23.8%</h3>
          <span className="text-xs font-semibold text-indigo-500 flex items-center gap-1">
            <TrendingUp size={14} /> Optimised Workflow
          </span>
        </div>
        <div className={`p-4 rounded-2xl ${darkMode ? 'bg-purple-950/40 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
          <Percent size={24} />
        </div>
      </div>
    </div>
  );
}