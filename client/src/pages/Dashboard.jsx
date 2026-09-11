import "./dashboard.css";
import DashboardNavbar from "../components/layout/DashboardNavbar";
import DashboardActionCard from "../components/common/DashboardActionCard";
import CommunityRequest from "../components/community/CommunityRequest";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* NAVBAR */}
      <DashboardNavbar />

      {/* MAIN CONTENT */}
      <main className="dashboard-content">

        {/* WELCOME */}
        <section className="welcome-section">
          <p className="small-heading">YOUR CAMPUS COMMUNITY</p>

          <h1>
            Good morning, <span>Bhoomika</span> 👋
          </h1>

          <p className="welcome-text">
            What do you need help with today?
          </p>
        </section>

        {/* ACTION CARDS */}
        <section className="action-grid">

          <DashboardActionCard
            icon="🤝"
            title="Ask for Help"
            description="Need a hand with something? Ask your campus community."
            buttonText="Post a request"
            onClick={() => window.location.href = "/create-request"}
          />

          <DashboardActionCard
            icon="📚"
            title="Study Resources"
            description="Find notes, books, question papers and useful study material."
            buttonText="Explore resources"
          />

          <DashboardActionCard
            icon="📦"
            title="Borrow & Return"
            description="Borrow calculators, chargers, equipment and other essentials."
            buttonText="Browse items"
          />

          <DashboardActionCard
            icon="📤"
            title="Share a Resource"
            description="Have something useful? Share it with someone on campus."
            buttonText="Share now"
          />

        </section>

        {/* COMMUNITY REQUESTS */}
        <section className="community-section">

          <div className="community-heading">
            <div>
              <p className="small-heading">CAMPUS ACTIVITY</p>
              <h2>Community requests</h2>
            </div>

            <button className="view-all-btn">
              View all →
            </button>
          </div>

          <CommunityRequest
            icon="📚"
            title="Need Unit 3 Data Structures notes"
            description="Looking for notes or study material before tomorrow's test."
            category="Study Resources"
            location="Block C"
          />

          <CommunityRequest
            icon="🔌"
            title="Anyone has a spare laptop charger?"
            description="Need one for a few hours this evening."
            category="Borrow & Return"
            location="Library"
          />

        </section>

      </main>

    </div>
  );
}

export default Dashboard;