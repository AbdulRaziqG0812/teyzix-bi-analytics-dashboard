import { create } from 'zustand';

interface Transaction {
  id: string;
  client: string;
  email: string;
  revenue: number; // Task requirement parameter
  orders: number;  // Task requirement parameter
  status: 'Paid' | 'Pending' | 'Failed';
  region: string;  // Task requirement parameter
  date: string;
}

interface DashboardState {
  darkMode: boolean;
  sidebarOpen: boolean;
  activeTab: string;
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
  toggleDarkMode: () => void;
  toggleSidebar: () => void;
  setActiveTab: (tab: string) => void;
  fetchDashboardData: () => Promise<void>;
}

export const useStore = create<DashboardState>((set) => ({
  darkMode: false,
  sidebarOpen: window.innerWidth > 768, // Agar screen 768px se badi hai toh open, warna closed
  activeTab: 'dashboard',
  transactions: [],
  loading: false,
  error: null,

  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setActiveTab: (tab) => set({ activeTab: tab }),

  // Task Requirements 7: Simulated Mock API Integration with Loading/Error states
  fetchDashboardData: async () => {
    set({ loading: true, error: null });
    try {
      // 1.5 seconds ka fake delay simulate kar rahe hain real API ki tarah
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      const mockData: Transaction[] = [
        { id: "TX1001", client: "Alpha Tech Solutions", email: "alpha@tech.com", revenue: 4500, orders: 12, status: "Paid", region: "North America", date: "June 15, 2026" },
        { id: "TX1002", client: "Zaman Marketing Agency", email: "info@zaman.com", revenue: 1200, orders: 4, status: "Pending", region: "Middle East", date: "June 14, 2026" },
        { id: "TX1003", client: "Apex Retailers Ltd", email: "billing@apex.co", revenue: 850, orders: 2, status: "Failed", region: "Europe", date: "June 12, 2026" },
        { id: "TX1004", client: "Matrix Cyber Security", email: "contact@matrix.io", revenue: 12300, orders: 35, status: "Paid", region: "Asia Pacific", date: "June 10, 2026" },
        { id: "TX1005", client: "Teyzix Logistics", email: "ops@teyzix.com", revenue: 5650, orders: 18, status: "Paid", region: "South Asia", date: "June 08, 2026" },
        { id: "TX1006", client: "Falcon E-Commerce", email: "sales@falcon.com", revenue: 3100, orders: 9, status: "Pending", region: "North America", date: "June 05, 2026" },
        { id: "TX1007", client: "Vortex Labs", email: "vortex@labs.io", revenue: 9500, orders: 22, status: "Paid", region: "Europe", date: "June 02, 2026" },
      ];

      set({ transactions: mockData, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch operational business data.", loading: false });
    }
  },
}));