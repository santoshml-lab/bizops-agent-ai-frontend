import { Bell, Search, Sparkles } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <div className="header-icon">
          <Sparkles size={20} />
        </div>

        <div>
          <h1>Business Intelligence</h1>
          <p>AI-powered operational analysis</p>
        </div>
      </div>

      <div className="header-actions">
        <div className="search-box">
          <Search size={17} />
          <input
            type="text"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>

        <button className="icon-button" aria-label="Notifications">
          <Bell size={19} />
          <span className="notification-dot"></span>
        </button>

        <div className="profile">
          <div className="profile-avatar">BA</div>

          <div className="profile-info">
            <strong>BizOps Admin</strong>
            <span>AI Workspace</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
