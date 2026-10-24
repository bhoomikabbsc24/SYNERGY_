import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./requests.css";

function Requests() {
  const [activeFilter, setActiveFilter] = useState("All requests");

  const navigate = useNavigate();

  const requests = [
    {
      id: 1,
      icon: "📚",
      category: "Study Resources",
      time: "2 hours ago",
      title: "Need Unit 3 Data Structures notes",
      description:
        "Looking for notes or study material before tomorrow's test. Any detailed notes or previous question papers would help.",
      location: "Block C",
    },
    {
      id: 2,
      icon: "🔌",
      category: "Borrow & Return",
      time: "4 hours ago",
      title: "Anyone has a spare laptop charger?",
      description:
        "Need one for a few hours this evening. It would be really helpful if someone nearby could lend one.",
      location: "Library",
    },
    {
      id: 3,
      icon: "🧮",
      category: "Borrow & Return",
      time: "Yesterday",
      title: "Need a calculator for tomorrow's exam",
      description:
        "Looking to borrow a scientific calculator for my numerical methods exam tomorrow.",
      location: "Block B",
    },
    {
      id: 4,
      icon: "🎨",
      category: "Other",
      time: "Yesterday",
      title: "Need help designing a presentation",
      description:
        "Looking for someone who can help me improve the design of my project presentation.",
      location: "Block A",
    },
  ];

  const filters = [
    "All requests",
    "Study Resources",
    "Borrow & Return",
    "Other",
  ];

  const filteredRequests =
    activeFilter === "All requests"
      ? requests
      : requests.filter(
          (request) => request.category === activeFilter
        );

  const handleViewRequest = (request) => {
    navigate("/request-details", {
      state: {
        request,
      },
    });
  };

  return (
    <div className="requests-page">

      {/* NAVBAR */}
      <nav className="requests-nav">

        <div className="requests-logo">
          SYNERGY
        </div>

        <div className="requests-nav-right">

          <button
            className="requests-nav-button"
            onClick={() => navigate("/notifications")}
          >
            🔔
          </button>

          <button
            className="requests-profile-button"
            onClick={() => navigate("/profile")}
          >
            <span className="requests-profile-circle">
              B
            </span>

            <span>Profile</span>
          </button>

        </div>

      </nav>


      {/* PAGE CONTENT */}
      <main className="requests-content">

        {/* HEADER */}
        <section className="requests-header">

          <p className="small-heading">
            CAMPUS COMMUNITY
          </p>

          <h1>
            Explore requests
          </h1>

          <p>
            See what students in your campus community need help with.
          </p>

        </section>


        {/* FILTERS */}
        <section className="requests-filters">

          {filters.map((filter) => (

            <button
              key={filter}
              className={`filter-button ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>

          ))}

        </section>


        {/* REQUEST LIST */}
        <section className="requests-list">

          {filteredRequests.map((request) => (

            <article
              className="request-card"
              key={request.id}
            >

              <div className="request-card-icon">
                {request.icon}
              </div>


              <div className="request-card-content">

                <div className="request-card-top">

                  <span className="request-category">
                    {request.category}
                  </span>

                  <span className="request-time">
                    {request.time}
                  </span>

                </div>


                <h2>
                  {request.title}
                </h2>


                <p>
                  {request.description}
                </p>


                <div className="request-card-meta">

                  <span>
                    📍 {request.location}
                  </span>

                  <span>
                    👤 Student
                  </span>

                </div>

              </div>


              <button
                className="offer-button"
                onClick={() => handleViewRequest(request)}
              >
                I can help →
              </button>

            </article>

          ))}


          {filteredRequests.length === 0 && (

            <div className="no-requests">

              <h2>
                No requests found
              </h2>

              <p>
                There are no requests in this category yet.
              </p>

            </div>

          )}

        </section>

      </main>

    </div>
  );
}

export default Requests;