import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./listItem.css";

function ListItem() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    location: "",
    availability: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.title ||
      !formData.category ||
      !formData.description ||
      !formData.location ||
      !formData.availability
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="list-item-page">

      {/* ================= NAVBAR ================= */}

      <nav className="list-item-nav">

        <div className="list-item-logo">
          SYNERGY
        </div>

        <div className="list-item-nav-right">

          <button
            className="list-item-nav-button"
            onClick={() => navigate("/notifications")}
            title="Notifications"
          >
            🔔
          </button>

          <button
            className="list-item-profile-button"
            onClick={() => navigate("/profile")}
            title="Profile"
          >
            <span className="list-item-profile-circle">
              B
            </span>

            <span>Profile</span>
          </button>

        </div>

      </nav>

      {/* ================= CONTENT ================= */}

      <main className="list-item-content">

        <button
          className="list-item-back-button"
          onClick={() => navigate("/borrow-return")}
        >
          ← Back to Borrow & Return
        </button>

        <section className="list-item-header">

          <p className="small-heading">
            SHARE WITH YOUR CAMPUS
          </p>

          <h1>
            List an item
          </h1>

          <p>
            Have something useful that someone else could borrow?
            Add it to the campus exchange.
          </p>

        </section>

        {/* ================= FORM ================= */}

        {!submitted ? (
          <form
            className="list-item-card"
            onSubmit={handleSubmit}
          >

            {/* ITEM NAME */}

            <div className="list-item-form-group">

              <label htmlFor="title">
                Item name
              </label>

              <input
                id="title"
                name="title"
                type="text"
                placeholder="e.g. Laptop Charger"
                value={formData.title}
                onChange={handleChange}
              />

            </div>

            {/* CATEGORY */}

            <div className="list-item-form-group">

              <label htmlFor="category">
                Category
              </label>

              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">
                  Select a category
                </option>

                <option value="Electronics">
                  Electronics
                </option>

                <option value="Study">
                  Study
                </option>

                <option value="Other">
                  Other
                </option>
              </select>

            </div>

            {/* DESCRIPTION */}

            <div className="list-item-form-group">

              <label htmlFor="description">
                Description
              </label>

              <textarea
                id="description"
                name="description"
                rows="5"
                placeholder="Describe the item and its condition..."
                value={formData.description}
                onChange={handleChange}
              />

            </div>

            {/* LOCATION */}

            <div className="list-item-form-group">

              <label htmlFor="location">
                Pickup / location
              </label>

              <input
                id="location"
                name="location"
                type="text"
                placeholder="e.g. Library, Block B"
                value={formData.location}
                onChange={handleChange}
              />

            </div>

            {/* AVAILABILITY */}

            <div className="list-item-form-group">

              <label htmlFor="availability">
                Availability
              </label>

              <select
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
              >
                <option value="">
                  Select availability
                </option>

                <option value="A few hours">
                  A few hours
                </option>

                <option value="Today">
                  Today
                </option>

                <option value="This week">
                  This week
                </option>

                <option value="Flexible">
                  Flexible
                </option>
              </select>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="list-item-submit-button"
            >
              List item →
            </button>

          </form>
        ) : (

          /* ================= SUCCESS ================= */

          <section className="list-item-success">

            <div className="list-item-success-icon">
              ✓
            </div>

            <p className="small-heading">
              ITEM LISTED
            </p>

            <h2>
              Your item is ready to be shared!
            </h2>

            <p>
              Students in your campus community can now see
              that this item is available to borrow.
            </p>

            <div className="list-item-success-actions">

              <button
                className="list-item-primary-button"
                onClick={() => navigate("/borrow-return")}
              >
                Browse items →
              </button>

              <button
                className="list-item-secondary-button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    title: "",
                    category: "",
                    description: "",
                    location: "",
                    availability: "",
                  });
                }}
              >
                List another item
              </button>

            </div>

          </section>

        )}

      </main>

    </div>
  );
}

export default ListItem;