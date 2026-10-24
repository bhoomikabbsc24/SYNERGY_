import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./borrowReturn.css";

function BorrowReturn() {
  const [activeFilter, setActiveFilter] = useState("All items");
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      icon: "🔌",
      type: "Electronics",
      title: "Laptop Charger",
      description:
        "Universal laptop charger available to borrow for a few hours.",
      location: "Library",
      owner: "Student",
      status: "Available",
    },
    {
      id: 2,
      icon: "🧮",
      type: "Study",
      title: "Scientific Calculator",
      description:
        "Scientific calculator available for exam preparation and short-term use.",
      location: "Block B",
      owner: "Student",
      status: "Available",
    },
    {
      id: 3,
      icon: "🎧",
      type: "Electronics",
      title: "Headphones",
      description:
        "Over-ear headphones available to borrow for study sessions.",
      location: "Block C",
      owner: "Student",
      status: "Available",
    },
    {
      id: 4,
      icon: "📚",
      type: "Study",
      title: "Reference Book — Distributed Computing",
      description:
        "Reference book available for students studying distributed computing.",
      location: "Library",
      owner: "Student",
      status: "Available",
    },
    {
      id: 5,
      icon: "🔋",
      type: "Other",
      title: "Power Bank",
      description:
        "Power bank available to borrow when you need some extra battery.",
      location: "Block A",
      owner: "Student",
      status: "Available",
    },
  ];

  const filters = [
    "All items",
    "Electronics",
    "Study",
    "Other",
  ];

  const filteredItems =
    activeFilter === "All items"
      ? items
      : items.filter((item) => item.type === activeFilter);

  return (
    <div className="borrow-return-page">

      {/* NAVBAR */}

      <nav className="borrow-return-nav">

        <div className="borrow-return-logo">
          SYNERGY
        </div>

        <div className="borrow-return-nav-right">

          <button
            className="borrow-return-nav-button"
            onClick={() => navigate("/notifications")}
            title="Notifications"
          >
            🔔
          </button>

          <button
            className="borrow-return-profile-button"
            onClick={() => navigate("/profile")}
            title="Profile"
          >
            <span className="borrow-return-profile-circle">
              B
            </span>

            <span>Profile</span>
          </button>

        </div>

      </nav>

      {/* PAGE CONTENT */}

      <main className="borrow-return-content">

        {/* HEADER */}

        <section className="borrow-return-header">

          <p className="small-heading">
            CAMPUS EXCHANGE
          </p>

          <h1>
            Borrow & Return
          </h1>

          <p>
            Borrow useful things from your campus community and return them
            when you're done.
          </p>

        </section>

        {/* FILTERS */}

        <section className="borrow-return-filters">

          {filters.map((filter) => (
            <button
              key={filter}
              className={`borrow-filter ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}

        </section>

        {/* ITEMS */}

        <section className="borrow-items-list">

          {filteredItems.map((item) => (
            <article
              className="borrow-item-card"
              key={item.id}
            >

              <div className="borrow-item-icon">
                {item.icon}
              </div>

              <div className="borrow-item-info">

                <div className="borrow-item-top">

                  <span className="borrow-item-type">
                    {item.type}
                  </span>

                  <span className="borrow-item-status">
                    ● {item.status}
                  </span>

                </div>

                <h2>
                  {item.title}
                </h2>

                <p>
                  {item.description}
                </p>

                <div className="borrow-item-meta">

                  <span>
                    📍 {item.location}
                  </span>

                  <span>
                    👤 {item.owner}
                  </span>

                </div>

              </div>

              <button
                className="borrow-button"
                onClick={() =>
                  alert(`Borrow request started for ${item.title}!`)
                }
              >
                Borrow →
              </button>

            </article>
          ))}

          {filteredItems.length === 0 && (
            <div className="no-borrow-items">
              <h2>No items found</h2>

              <p>
                There are no items in this category yet.
              </p>
            </div>
          )}

        </section>

        {/* LEND CTA */}

        <section className="lend-section">

          <div>
            <p className="small-heading">
              HAVE SOMETHING USEFUL?
            </p>

            <h2>
              Share an item with your campus.
            </h2>

            <p>
              Let someone borrow something you aren't using right now.
            </p>
          </div>

          <button
            className="lend-button"
            onClick={() => navigate("/list-item")}
          >
            List an item →
          </button>

        </section>

      </main>

    </div>
  );
}

export default BorrowReturn;