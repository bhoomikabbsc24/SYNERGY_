function DashboardNavbar() {
  return (
    <nav className="dashboard-nav">
      <div className="dashboard-logo">
        SYNERGY
      </div>

      <div className="dashboard-nav-right">
        <button className="nav-icon">🔔</button>

        <button className="profile-button">
          <span className="profile-circle">B</span>
          <span>Profile</span>
        </button>
      </div>
    </nav>
  );
}

export default DashboardNavbar;