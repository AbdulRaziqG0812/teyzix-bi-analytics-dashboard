import React from 'react';
import { 
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, BarChart, Bar, Legend, LineChart, Line, PieChart, Pie, Cell 
} from 'recharts';
import { useStore } from '../store/useStore';

const salesData = [
  { name: 'Jan', revenue: 4000, sales: 2400, customers: 110 },
  { name: 'Feb', revenue: 3000, sales: 1398, customers: 140 },
  { name: 'Mar', revenue: 2000, sales: 9800, customers: 210 },
  { name: 'Apr', revenue: 2780, sales: 3908, customers: 290 },
  { name: 'May', revenue: 1890, sales: 4800, customers: 310 },
  { name: 'Jun', revenue: 2390, sales: 3800, customers: 320 },
];

const regionDistribution = [
  { name: 'North America', value: 40 },
  { name: 'Europe', value: 25 },
  { name: 'Asia Pacific', value: 20 },
  { name: 'Middle East', value: 15 },
];

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444'];

export default function ChartsSection() {
  const { darkMode } = useStore();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* 1. Revenue Trend Chart */}
      <div className={`p-6 rounded-2xl border shadow-sm space-y-4 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
        <h3 className={`text-sm font-bold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>1. Revenue Trend</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="chartRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={darkMode ? "#374151" : "#e5e7eb"} />
              <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} />
              <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1f2937' : '#ffffff', borderColor: darkMode ? '#374151' : '#e5e7eb', color: darkMode ? '#ffffff' : '#000000' }} />
              <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2.5} fill="url(#chartRev)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 2. Sales Comparison Chart */}
      <div className={`p-6 rounded-2xl border shadow-sm space-y-4 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
        <h3 className={`text-sm font-bold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>2. Sales Volume Comparison</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={darkMode ? "#374151" : "#e5e7eb"} />
              <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} />
              <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1f2937' : '#ffffff', borderColor: darkMode ? '#374151' : '#e5e7eb', color: darkMode ? '#ffffff' : '#000000' }} />
              <Legend iconSize={10} wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="sales" fill="#818cf8" radius={[4, 4, 0, 0]} name="Orders Shipped" />
              <Bar dataKey="revenue" fill="#34d399" radius={[4, 4, 0, 0]} name="Gross Multiplier" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 3. Customer Growth Chart */}
      <div className={`p-6 rounded-2xl border shadow-sm space-y-4 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
        <h3 className={`text-sm font-bold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>3. Total Customer Acquisition</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={darkMode ? "#374151" : "#e5e7eb"} />
              <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} />
              <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1f2937' : '#ffffff', borderColor: darkMode ? '#374151' : '#e5e7eb', color: darkMode ? '#ffffff' : '#000000' }} />
              <Line type="monotone" dataKey="customers" stroke="#10b981" strokeWidth={3} activeDot={{ r: 6 }} name="Total Base Active" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 4. Category/Regional Distribution Chart */}
      <div className={`p-6 rounded-2xl border shadow-sm space-y-4 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
        <h3 className={`text-sm font-bold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>4. Global Regional Split</h3>
        <div className="h-64 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={regionDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                {regionDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} iconSize={8} wrapperStyle={{ fontSize: '11px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}