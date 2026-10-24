import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./requestDetails.css";

function RequestDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showOffer, setShowOffer] = useState(false);
  const [offerSent, setOfferSent] = useState(false);

  const request = location.state?.request;

  const handleSendOffer = () => {
    setOfferSent(true);
    setShowOffer(false);
  };

  if (!request) {
    return (
      <div className="request-details-page">
        <nav className="request-details-nav">
          <div className="request-details-logo">SYNERGY</div>

          <div className="request-details-nav-right">
            <button
              className="request-details-nav-button"
              onClick={() => navigate("/notifications")}
            >
              🔔
            </button>

            <button
              className="request-details-profile-button"
              onClick={() => navigate("/profile")}
            >
              <span className="request-details-profile-circle">
                B
              </span>
              <span>Profile</span>
            </button>
          </div>
        </nav>

        <main className="request-details-content">
          <button
            className="back-to-requests"
            onClick={() => navigate("/requests")}
          >
            ← Back to requests
          </button>

          <article className="request-details-card">
            <div className="request-details-category-row">
              <div className="request-details-icon">📋</div>

              <span className="request-details-category">
                REQUEST
              </span>
            </div>

            <h1>Request not found</h1>

            <p className="request-details-description">
              Please select a request from the Explore Requests
              page to view its details.
            </p>

            <button
              className="details-help-button"
              onClick={() => navigate("/requests")}
            >
              Explore requests →
            </button>
          </article>
        </main>
      </div>
    );
  }

  return (
    <div className="request-details-page">

      {/* ================= NAVBAR ================= */}

      <nav className="request-details-nav">
        <div className="request-details-logo">
          SYNERGY
        </div>

        <div className="request-details-nav-right">
          <button
            className="request-details-nav-button"
            onClick={() => navigate("/notifications")}
            title="Notifications"
          >
            🔔
          </button>

          <button
            className="request-details-profile-button"
            onClick={() => navigate("/profile")}
            title="Profile"
          >
            <span className="request-details-profile-circle">
              B
            </span>

            <span>Profile</span>
          </button>
        </div>
      </nav>

      {/* ================= CONTENT ================= */}

      <main className="request-details-content">

        <button
          className="back-to-requests"
          onClick={() => navigate("/requests")}
        >
          ← Back to requests
        </button>

        {/* ================= MAIN REQUEST CARD ================= */}

        <article className="request-details-card">

          <div className="request-details-category-row">

            <div className="request-details-icon">
              {request.icon}
            </div>

            <span className="request-details-category">
              {request.category}
            </span>

          </div>

          <h1>{request.title}</h1>

          <p className="request-details-description">
            {request.description}
          </p>

          <div className="request-details-meta">

            <div className="details-meta-item">
              <span>📍</span>
              <span>{request.location}</span>
            </div>

            <div className="details-meta-item">
              <span>👤</span>
              <span>Student</span>
            </div>

            <div className="details-meta-item">
              <span>🕐</span>
              <span>{request.time}</span>
            </div>

          </div>

        </article>

        {/* ================= HELP SECTION ================= */}

        {!offerSent ? (
          <section className="help-section">

            <div className="help-section-text">
              <p className="help-section-label">
                WANT TO HELP?
              </p>

              <h2>
                Can you help with this?
              </h2>

              <p className="help-section-description">
                Offer your help and connect with the student.
              </p>
            </div>

            <button
              className="details-help-button"
              onClick={() => setShowOffer(true)}
            >
              I can help →
            </button>

          </section>
        ) : (
          <section className="help-section offer-success">

            <div className="help-section-text">

              <p className="help-section-label">
                OFFER SENT
              </p>

              <h2>
                ✅ Your offer has been sent!
              </h2>

              <p className="help-section-description">
                The requester has been notified that you can help.
              </p>

            </div>

            <button
              className="details-help-button"
              onClick={() => navigate("/requests")}
            >
              Explore more requests →
            </button>

          </section>
        )}

      </main>

      {/* ================= OFFER MODAL ================= */}

      {showOffer && (
        <div
          className="offer-modal-overlay"
          onClick={() => setShowOffer(false)}
        >

          <div
            className="offer-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="offer-modal-close"
              onClick={() => setShowOffer(false)}
              aria-label="Close"
            >
              ×
            </button>

            <p className="offer-modal-label">
              OFFER TO HELP
            </p>

            <h2>
              Can you help with this request?
            </h2>

            <div className="offer-modal-request">
              {request.title}
            </div>

            <p className="offer-modal-description">
              You're offering to help with this request.
              The student will be notified and can accept
              or decline your offer.
            </p>

            <div className="offer-modal-actions">

              <button
                className="offer-cancel-button"
                onClick={() => setShowOffer(false)}
              >
                Cancel
              </button>

              <button
                className="details-help-button"
                onClick={handleSendOffer}
              >
                Send offer →
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default RequestDetails;