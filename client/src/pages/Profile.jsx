import "./profile.css";

function Profile() {
  return (
    <div className="profile-page">

      {/* NAVBAR */}
      <nav className="profile-nav">
        <div className="profile-logo">
          SYNERGY
        </div>

        <div className="profile-nav-right">
          <button className="profile-nav-button">
            🔔
          </button>

          <button className="profile-nav-profile">
            <span className="profile-nav-circle">B</span>
            <span>Profile</span>
          </button>
        </div>
      </nav>


      {/* MAIN CONTENT */}
      <main className="profile-content">

        {/* HEADER */}
        <section className="profile-header">

          <div>
            <p className="profile-label">
              YOUR COMMUNITY PROFILE
            </p>

            <h1>
              Your <span>profile</span>
            </h1>

            <p className="profile-subtitle">
              See your contribution to the SYNERGY community.
            </p>
          </div>

          <button className="edit-profile-btn">
            Edit profile →
          </button>

        </section>


        {/* PROFILE OVERVIEW */}
        <section className="profile-overview">

          <div className="profile-avatar">
            B
          </div>

          <div className="profile-info">

            <h2>Bhoomika</h2>

            <p>
              BSc (Hons) Cloud Computing
            </p>

            <span>
              RV University
            </span>

          </div>

          <div className="profile-member">
            <span>MEMBER SINCE</span>
            <strong>2026</strong>
          </div>

        </section>


        {/* TRUST SCORE */}
        <section className="trust-section">

          <div className="trust-header">

            <div>
              <p className="profile-label">
                COMMUNITY TRUST
              </p>

              <h2>
                Trust score
              </h2>

              <p>
                Your trust score reflects how actively and
                positively you participate in the community.
              </p>
            </div>

            <div className="trust-score">
              <strong>92</strong>
              <span>/100</span>
            </div>

          </div>


          <div className="trust-bar">
            <div className="trust-progress"></div>
          </div>

          <div className="trust-level">
            <span>Excellent community standing</span>
            <span>92%</span>
          </div>

        </section>


        {/* ACTIVITY STATS */}
        <section className="stats-section">

          <div className="stat-card">
            <div className="stat-icon">
              🤝
            </div>

            <h3>12</h3>

            <p>
              Requests helped
            </p>
          </div>


          <div className="stat-card">
            <div className="stat-icon">
              📚
            </div>

            <h3>8</h3>

            <p>
              Resources shared
            </p>
          </div>


          <div className="stat-card">
            <div className="stat-icon">
              🙋
            </div>

            <h3>5</h3>

            <p>
              Requests posted
            </p>
          </div>


          <div className="stat-card">
            <div className="stat-icon">
              📦
            </div>

            <h3>7</h3>

            <p>
              Successful returns
            </p>
          </div>

        </section>


        {/* COMMUNITY REPUTATION */}
        <section className="reputation-section">

          <div className="reputation-header">

            <div>
              <p className="profile-label">
                YOUR IMPACT
              </p>

              <h2>
                Community reputation
              </h2>
            </div>

            <span className="reputation-badge">
              ⭐ Trusted member
            </span>

          </div>


          <div className="reputation-list">

            <div className="reputation-item">
              <span className="reputation-icon">🤝</span>

              <div>
                <h3>Helpful contributor</h3>
                <p>
                  You've helped other students with
                  their requests.
                </p>
              </div>
            </div>


            <div className="reputation-item">
              <span className="reputation-icon">📚</span>

              <div>
                <h3>Resource sharer</h3>
                <p>
                  You've made useful study material
                  available to your campus.
                </p>
              </div>
            </div>


            <div className="reputation-item">
              <span className="reputation-icon">📦</span>

              <div>
                <h3>Reliable borrower</h3>
                <p>
                  You've successfully returned items
                  borrowed from the community.
                </p>
              </div>
            </div>

          </div>

        </section>


        {/* FOOTER MESSAGE */}
        <section className="profile-footer-message">

          <div>
            <p className="profile-label">
              KEEP BUILDING TRUST
            </p>

            <h2>
              Small acts make a stronger campus.
            </h2>

            <p>
              Keep helping, sharing and supporting
              your community.
            </p>
          </div>

        </section>

      </main>

    </div>
  );
}

export default Profile;