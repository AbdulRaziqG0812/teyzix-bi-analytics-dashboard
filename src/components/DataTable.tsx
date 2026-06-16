import React, { useState } from 'react';
import { Search, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function DataTable() {
  const { darkMode, transactions } = useStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortField, setSortField] = useState<'client' | 'revenue' | 'orders' | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Sorting Handler
  const handleSort = (field: 'client' | 'revenue' | 'orders') => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);
  };

  // Filter Logic
  const filtered = transactions.filter(tx => {
    const matchesSearch = tx.client.toLowerCase().includes(searchTerm.toLowerCase()) || tx.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = statusFilter === "All" || tx.status === statusFilter;
    return matchesSearch && matchesFilter;
  });

  // Sorting Logic
  const sortedTransactions = [...filtered].sort((a, b) => {
    if (!sortField) return 0;
    if (sortOrder === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    } else {
      return a[sortField] < b[sortField] ? 1 : -1;
    }
  });

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedTransactions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedTransactions.length / itemsPerPage);

  return (
    <div className={`p-6 rounded-2xl border shadow-sm space-y-4 transition-all duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Recent Enterprise Invoices</h3>
          <p className="text-xs text-gray-400">Granular log supporting active query searching, multidirectional sorting and strict pagination indices.</p>
        </div>
        
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text"
              placeholder="Search Client Name..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              className={`pl-9 pr-4 py-2 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${darkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
            />
          </div>
          <select 
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
            className={`px-3 py-2 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${darkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
          >
            <option value="All">All Status</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-700">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className={`${darkMode ? 'bg-gray-900/50 text-gray-400' : 'bg-gray-50 text-gray-500'} text-xs font-semibold uppercase tracking-wider border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
              <th className="p-4 cursor-pointer" onClick={() => handleSort('client')}>
                <div className="flex items-center gap-1">Client <ArrowUpDown size={14}/></div>
              </th>
              <th className="p-4">Region</th>
              <th className="p-4 cursor-pointer" onClick={() => handleSort('orders')}>
                <div className="flex items-center gap-1">Orders <ArrowUpDown size={14}/></div>
              </th>
              <th className="p-4 cursor-pointer" onClick={() => handleSort('revenue')}>
                <div className="flex items-center gap-1">Revenue <ArrowUpDown size={14}/></div>
              </th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className={`divide-y text-sm ${darkMode ? 'divide-gray-700' : 'divide-gray-100'}`}>
            {currentItems.length > 0 ? (
              currentItems.map((tx) => (
                <tr key={tx.id} className={`transition-colors ${darkMode ? 'hover:bg-gray-700/30' : 'hover:bg-gray-50/50'}`}>
                  <td className="p-4">
                    <div className="font-semibold">{tx.client}</div>
                    <div className="text-xs text-indigo-400 font-mono">{tx.id}</div>
                  </td>
                  <td className="p-4 text-gray-400">{tx.region}</td>
                  <td className="p-4 font-medium">{tx.orders}</td>
                  <td className="p-4 font-bold">${tx.revenue.toLocaleString()}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${
                      tx.status === 'Paid' ? (darkMode ? 'bg-emerald-950/60 text-emerald-400' : 'bg-emerald-50 text-emerald-700') :
                      tx.status === 'Pending' ? (darkMode ? 'bg-amber-950/60 text-amber-400' : 'bg-amber-50 text-amber-700') :
                      (darkMode ? 'bg-rose-950/60 text-rose-400' : 'bg-rose-50 text-rose-700')
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-8 text-center text-gray-500">No telemetry matches available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Actions Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-gray-400">Page {currentPage} of {totalPages}</span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`p-1.5 rounded-lg border text-gray-400 disabled:opacity-40 ${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'}`}
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-1.5 rounded-lg border text-gray-400 disabled:opacity-40 ${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'}`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}