import { useState } from "react";
import "./shareResource.css";

function ShareResource() {
  const [resourceType, setResourceType] = useState("Notes");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Resource ready to be shared! 📚");
  };

  return (
    <div className="share-resource-page">

      {/* NAVBAR */}
      <nav className="share-resource-nav">

        <div className="share-resource-logo">
          SYNERGY
        </div>

        <div className="share-resource-nav-right">

          <button className="share-resource-nav-button">
            🔔
          </button>

          <button className="share-resource-profile-button">
            <span className="share-resource-profile-circle">
              B
            </span>

            <span>Profile</span>
          </button>

        </div>

      </nav>

      {/* PAGE CONTENT */}
      <main className="share-resource-content">

        {/* HEADER */}
        <section className="share-resource-header">

          <p className="small-heading">
            GIVE BACK TO CAMPUS
          </p>

          <h1>
            Share a Resource
          </h1>

          <p>
            Have something useful? Share it with someone in your campus
            community.
          </p>

        </section>

        {/* FORM */}
        <form
          className="share-resource-form"
          onSubmit={handleSubmit}
        >

          {/* RESOURCE TITLE */}
          <div className="share-form-group">

            <label htmlFor="resource-title">
              Resource title
            </label>

            <input
              id="resource-title"
              type="text"
              placeholder="e.g. DBMS Unit 3 Notes"
              required
            />

          </div>

          {/* RESOURCE TYPE */}
          <div className="share-form-group">

            <label htmlFor="resource-type">
              Resource type
            </label>

            <select
              id="resource-type"
              value={resourceType}
              onChange={(event) =>
                setResourceType(event.target.value)
              }
            >
              <option>Notes</option>
              <option>Question Paper</option>
              <option>Book</option>
              <option>Study Material</option>
              <option>Other</option>
            </select>

          </div>

          {/* SUBJECT */}
          <div className="share-form-group">

            <label htmlFor="resource-subject">
              Subject / Course
            </label>

            <input
              id="resource-subject"
              type="text"
              placeholder="e.g. CS2201 — DBMS"
              required
            />

          </div>

          {/* DESCRIPTION */}
          <div className="share-form-group">

            <label htmlFor="resource-description">
              Description
            </label>

            <textarea
              id="resource-description"
              rows="5"
              placeholder="Tell students what this resource contains..."
              required
            ></textarea>

          </div>

          {/* RESOURCE LINK */}
          <div className="share-form-group">

            <label htmlFor="resource-link">
              Resource link
            </label>

            <input
              id="resource-link"
              type="url"
              placeholder="https://..."
            />

            <small>
              You can add a Google Drive, OneDrive or other resource link.
            </small>

          </div>

          {/* SHARE BUTTON */}
          <button
            type="submit"
            className="share-resource-submit"
          >
            Share Resource →
          </button>

        </form>

      </main>

    </div>
  );
}

export default ShareResource;