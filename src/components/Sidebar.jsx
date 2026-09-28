import {
  LayoutDashboard,
  BrainCircuit,
  History,
  Settings,
  Activity,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <BrainCircuit size={22} />
        </div>

        <div>
          <h2>BizOps</h2>
          <span>Agent AI</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <p className="nav-label">WORKSPACE</p>

        <button className="nav-item active">
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </button>

        <button className="nav-item">
          <Activity size={19} />
          <span>Run Analysis</span>
        </button>

        <p className="nav-label">SYSTEM</p>

        <button className="nav-item">
          <History size={19} />
          <span>History</span>
        </button>

        <button className="nav-item">
          <Settings size={19} />
          <span>Settings</span>
        </button>
      </nav>

      <div className="sidebar-status">
        <span className="status-dot"></span>

        <div>
          <strong>Agent Online</strong>
          <small>Backend connected</small>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
