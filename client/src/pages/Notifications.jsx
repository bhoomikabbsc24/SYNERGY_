import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./notifications.css";

function Notifications() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "offer",
      icon: "🤝",
      title: "Someone offered to help with your request",
      description:
        "A student offered to share their Data Structures notes with you.",
      time: "5 minutes ago",
      unread: true,
      offerStatus: "pending",
    },
    {
      id: 2,
      type: "resource",
      icon: "📚",
      title: "Your resource was shared successfully",
      description:
        "Your DBMS Unit 3 notes are now available to the campus community.",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      type: "borrow",
      icon: "📦",
      title: "Your borrow request was accepted",
      description:
        "A student accepted your request to borrow a scientific calculator.",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 4,
      type: "welcome",
      icon: "🔔",
      title: "Welcome to the SYNERGY community",
      description:
        "Start by asking for help, sharing resources or helping another student.",
      time: "2 days ago",
      unread: false,
    },
  ]);

  const markAllAsRead = () => {
    setNotifications((currentNotifications) =>
      currentNotifications.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  const handleAccept = (id) => {
    setNotifications((currentNotifications) =>
      currentNotifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              unread: false,
              offerStatus: "accepted",
            }
          : notification
      )
    );
  };

  const handleReject = (id) => {
    setNotifications((currentNotifications) =>
      currentNotifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              unread: false,
              offerStatus: "rejected",
            }
          : notification
      )
    );
  };

  return (
    <div className="notifications-page">

      {/* ================= NAVBAR ================= */}

      <nav className="notifications-nav">

        <div className="notifications-logo">
          SYNERGY
        </div>

        <div className="notifications-nav-right">

          <button
            className="notifications-nav-button"
            onClick={() => navigate("/notifications")}
            title="Notifications"
          >
            🔔
          </button>

          <button
            className="notifications-profile-button"
            onClick={() => navigate("/profile")}
            title="Profile"
          >
            <span className="notifications-profile-circle">
              B
            </span>

            <span>Profile</span>
          </button>

        </div>

      </nav>

      {/* ================= CONTENT ================= */}

      <main className="notifications-content">

        {/* ================= HEADER ================= */}

        <section className="notifications-header">

          <div>

            <p className="small-heading">
              STAY CONNECTED
            </p>

            <h1>
              Notifications
            </h1>

            <p>
              Keep track of requests, offers and activity from your campus
              community.
            </p>

          </div>

          <button
            className="mark-all-button"
            onClick={markAllAsRead}
          >
            Mark all as read
          </button>

        </section>

        {/* ================= NOTIFICATIONS ================= */}

        <section className="notifications-list">

          {notifications.map((notification) => (

            <article
              className={`notification-card ${
                notification.unread ? "unread" : ""
              }`}
              key={notification.id}
            >

              <div className="notification-icon">
                {notification.icon}
              </div>

              <div className="notification-info">

                <div className="notification-top">

                  <h2>
                    {notification.title}
                  </h2>

                  {notification.unread && (
                    <span className="unread-dot"></span>
                  )}

                </div>

                <p>
                  {notification.description}
                </p>

                <span className="notification-time">
                  {notification.time}
                </span>

                {/* ================= OFFER ACTIONS ================= */}

                {notification.type === "offer" &&
                  notification.offerStatus === "pending" && (

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginTop: "18px",
                      }}
                    >

                      {/* ACCEPT */}

                      <button
                        onClick={() =>
                          handleAccept(notification.id)
                        }
                        style={{
                          padding: "11px 21px",
                          border: "none",
                          borderRadius: "999px",
                          background: "#123d32",
                          color: "#fffdf8",
                          fontFamily: "inherit",
                          fontSize: "13px",
                          fontWeight: "800",
                          cursor: "pointer",
                          boxShadow:
                            "0 6px 16px rgba(18, 61, 50, 0.18)",
                        }}
                      >
                        Accept offer ✓
                      </button>

                      {/* REJECT */}

                      <button
                        onClick={() =>
                          handleReject(notification.id)
                        }
                        style={{
                          padding: "11px 21px",
                          border: "1px solid #d8d1c4",
                          borderRadius: "999px",
                          background: "#fffdf8",
                          color: "#9b1c24",
                          fontFamily: "inherit",
                          fontSize: "13px",
                          fontWeight: "800",
                          cursor: "pointer",
                        }}
                      >
                        Reject
                      </button>

                    </div>

                  )}

                {/* ================= ACCEPTED ================= */}

                {notification.type === "offer" &&
                  notification.offerStatus === "accepted" && (

                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        marginTop: "18px",
                        padding: "9px 16px",
                        borderRadius: "999px",
                        background: "#e8f1eb",
                        color: "#123d32",
                        fontSize: "13px",
                        fontWeight: "800",
                      }}
                    >
                      ✓ Offer accepted
                    </div>

                  )}

                {/* ================= REJECTED ================= */}

                {notification.type === "offer" &&
                  notification.offerStatus === "rejected" && (

                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        marginTop: "18px",
                        padding: "9px 16px",
                        borderRadius: "999px",
                        background: "#f8eeee",
                        color: "#9b1c24",
                        fontSize: "13px",
                        fontWeight: "800",
                      }}
                    >
                      Offer declined
                    </div>

                  )}

              </div>

            </article>

          ))}

        </section>

      </main>

    </div>
  );
}

export default Notifications;