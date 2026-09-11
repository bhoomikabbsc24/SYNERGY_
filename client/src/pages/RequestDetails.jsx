import "./requestDetails.css";

function RequestDetails() {
  return (
    <div className="request-details-page">

      {/* NAVBAR */}
      <nav className="request-details-nav">

        <div className="request-details-logo">
          SYNERGY
        </div>

        <div className="request-details-nav-right">

          <button className="request-details-nav-button">
            🔔
          </button>

          <button className="request-details-profile-button">
            <span className="request-details-profile-circle">
              B
            </span>

            <span>Profile</span>
          </button>

        </div>

      </nav>

      {/* PAGE CONTENT */}
      <main className="request-details-content">

        {/* BACK */}
        <button className="back-to-requests">
          ← Back to requests
        </button>

        {/* REQUEST */}
        <article className="request-details-card">

          {/* CATEGORY */}
          <div className="request-details-category-row">

            <div className="request-details-icon">
              📚
            </div>

            <span className="request-details-category">
              STUDY RESOURCES
            </span>

          </div>

          {/* TITLE */}
          <h1>
            Need Unit 3 Data Structures notes
          </h1>

          {/* DESCRIPTION */}
          <p className="request-details-description">
            Looking for notes or study material before tomorrow's test.
            Any detailed notes or previous question papers would help.
          </p>

          {/* META */}
          <div className="request-details-meta">

            <div className="details-meta-item">
              <span>📍</span>
              <span>Block C</span>
            </div>

            <div className="details-meta-item">
              <span>👤</span>
              <span>Student</span>
            </div>

            <div className="details-meta-item">
              <span>🕐</span>
              <span>2 hours ago</span>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="request-details-divider"></div>

          {/* HELP SECTION */}
          <section className="help-section">

            <div>
              <h2>
                Can you help with this?
              </h2>

              <p>
                Offer your help and connect with the student.
              </p>
            </div>

            <button className="details-help-button">
              I can help →
            </button>

          </section>

        </article>

      </main>

    </div>
  );
}

export default RequestDetails;