# Business Intelligence Analytics Dashboard (TEYZIX CORE)

An interactive, responsive Business Intelligence (BI) Dashboard designed for corporate leadership to monitor revenue trajectory, operational sales KPIs, department trends, and enterprise customer acquisition patterns in real-time. This application simulates advanced analytical environments like Power BI, Tableau, Zoho Analytics, and Google Looker Studio.

## 🚀 Live Deployment & Source Code
- **Deployment URL:** [https://teyzix-bi-analytics-dashboard-rr5h.vercel.app/]
- **GitHub Repository:** [https://github.com/AbdulRaziqG0812/teyzix-bi-analytics-dashboard]

## 🛠️ Core Engineering Features
- **Global State Management:** Orchestrated via `Zustand` to manage theme synchronization, interactive viewport toggles, and unified client cache streams across various independent nodes.
- **Asynchronous Telemetry:** Simulated network endpoints utilizing JavaScript Promise delays to accurately render loading, error catchers, and clear data states.
- **Interactive Data Engineering:** Built using `Recharts` providing four distinct diagnostic layers:
  1. *Revenue Trend Chart* (Area Layer with custom linear opacity)
  2. *Sales Volume Comparison Chart* (Multi-metric stacked Bar Node)
  3. *Total Customer Acquisition Chart* (Monotone structural Line Node)
  4. *Global Regional Split Chart* (Granular donut Pie layout)
- **Advanced Telemetry Matrix (Data Table):** Supports instant regex text search query matching, explicit client-side sorting algorithms (A-Z/numerical indexes), and strict component pagination dividers.
- **Theme Persistency Architecture:** Fully fluid Light and Dark mode variations that dynamically respect user layout boundaries.
- **Responsive Adaptability:** Clean fluid design supporting large format Desktops, operational Tablets, and Mobile screens.

## 🏗️ Structural Component Map
```text
src/
├── components/
│   ├── Sidebar.tsx         # Context-aware structural app navigation maps
│   ├── Header.tsx          # Session banners containing dark mode triggers
│   ├── KPICards.tsx        # Dynamic data aggregate counters
│   ├── ChartsSection.tsx   # Reusable operational Recharts components
│   └── DataTable.tsx       # Search, sort, and paginated client database
├── store/
│   └── useStore.ts         # Unified Zustand store for asynchronous pipeline actions
├── App.tsx                 # Root orchestrator managing conditional view state engines
└── main.tsx                # Client environment initialization node