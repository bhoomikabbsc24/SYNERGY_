import { useNavigate } from "react-router-dom";

function DashboardNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="dashboard-nav">
      <div className="dashboard-logo">
        SYNERGY
      </div>

      <div className="dashboard-nav-right">

        <button
          className="nav-icon"
          onClick={() => navigate("/notifications")}
          title="Notifications"
        >
          🔔
        </button>

        <button
          className="profile-button"
          onClick={() => navigate("/profile")}
          title="Profile"
        >
          <span className="profile-circle">B</span>
          <span>Profile</span>
        </button>

      </div>
    </nav>
  );
}

export default DashboardNavbar;