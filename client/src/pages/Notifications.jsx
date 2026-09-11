import { useState } from "react";
import "./notifications.css";

function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: "🤝",
      title: "Someone offered to help with your request",
      description:
        "A student offered to share their Data Structures notes with you.",
      time: "5 minutes ago",
      unread: true,
    },
    {
      id: 2,
      icon: "📚",
      title: "Your resource was shared successfully",
      description:
        "Your DBMS Unit 3 notes are now available to the campus community.",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      icon: "📦",
      title: "Your borrow request was accepted",
      description:
        "A student accepted your request to borrow a scientific calculator.",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 4,
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

  return (
    <div className="notifications-page">

      {/* NAVBAR */}
      <nav className="notifications-nav">

        <div className="notifications-logo">
          SYNERGY
        </div>

        <div className="notifications-nav-right">

          <button className="notifications-nav-button">
            🔔
          </button>

          <button className="notifications-profile-button">
            <span className="notifications-profile-circle">
              B
            </span>

            <span>Profile</span>
          </button>

        </div>

      </nav>

      {/* PAGE CONTENT */}
      <main className="notifications-content">

        {/* HEADER */}
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

        {/* NOTIFICATIONS */}
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

              </div>

            </article>
          ))}

        </section>

      </main>

    </div>
  );
}

export default Notifications;