import { useNavigate } from "react-router-dom";
import "./dashboard.css";

import DashboardNavbar from "../components/layout/DashboardNavbar";
import DashboardActionCard from "../components/common/DashboardActionCard";
import CommunityRequest from "../components/community/CommunityRequest";

function Dashboard() {
  const navigate = useNavigate();

  const dataStructuresRequest = {
    id: 1,
    icon: "📚",
    category: "Study Resources",
    time: "2 hours ago",
    title: "Need Unit 3 Data Structures notes",
    description:
      "Looking for notes or study material before tomorrow's test.",
    location: "Block C",
  };

  const laptopChargerRequest = {
    id: 2,
    icon: "🔌",
    category: "Borrow & Return",
    time: "4 hours ago",
    title: "Anyone has a spare laptop charger?",
    description:
      "Need one for a few hours this evening.",
    location: "Library",
  };

  const handleRequestDetails = (request) => {
    navigate("/request-details", {
      state: {
        request,
      },
    });
  };

  return (
    <div className="dashboard">

      {/* NAVBAR */}
      <DashboardNavbar />

      {/* MAIN CONTENT */}
      <main className="dashboard-content">

        {/* WELCOME */}
        <section className="welcome-section">

          <p className="small-heading">
            YOUR CAMPUS COMMUNITY
          </p>

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
            onClick={() => navigate("/create-request")}
          />

          <DashboardActionCard
            icon="📚"
            title="Study Resources"
            description="Find notes, books, question papers and useful study material."
            buttonText="Explore resources"
            onClick={() => navigate("/resources")}
          />

          <DashboardActionCard
            icon="📦"
            title="Borrow & Return"
            description="Borrow calculators, chargers, equipment and other essentials."
            buttonText="Browse items"
            onClick={() => navigate("/borrow-return")}
          />

          <DashboardActionCard
            icon="📤"
            title="Share a Resource"
            description="Have something useful? Share it with someone on campus."
            buttonText="Share now"
            onClick={() => navigate("/share-resource")}
          />

        </section>


        {/* COMMUNITY REQUESTS */}
        <section className="community-section">

          <div className="community-heading">

            <div>

              <p className="small-heading">
                CAMPUS ACTIVITY
              </p>

              <h2>
                Community requests
              </h2>

            </div>

            <button
              className="view-all-btn"
              onClick={() => navigate("/requests")}
            >
              View all →
            </button>

          </div>


          {/* DATA STRUCTURES REQUEST */}
          <CommunityRequest
            icon={dataStructuresRequest.icon}
            title={dataStructuresRequest.title}
            description={dataStructuresRequest.description}
            category={dataStructuresRequest.category}
            location={dataStructuresRequest.location}
            onHelp={() =>
              handleRequestDetails(dataStructuresRequest)
            }
          />


          {/* LAPTOP CHARGER REQUEST */}
          <CommunityRequest
            icon={laptopChargerRequest.icon}
            title={laptopChargerRequest.title}
            description={laptopChargerRequest.description}
            category={laptopChargerRequest.category}
            location={laptopChargerRequest.location}
            onHelp={() =>
              handleRequestDetails(laptopChargerRequest)
            }
          />

        </section>

      </main>

    </div>
  );
}

export default Dashboard;