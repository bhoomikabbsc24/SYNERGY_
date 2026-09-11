import { useState } from "react";
import "./createRequest.css";

function CreateRequest() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [urgency, setUrgency] = useState("Not urgent");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category || !description || !location) {
      setMessage("Please fill in all required fields.");
      return;
    }

    setMessage("✅ Request posted successfully!");

    console.log({
      title,
      category,
      description,
      location,
      urgency,
    });
  };

  return (
    <div className="request-page">

      <div className="request-header">
        <p className="request-label">ASK YOUR CAMPUS</p>

        <h1>
          What do you need
          <span> help with?</span>
        </h1>

        <p className="request-subtitle">
          Post a request and let someone from your campus community help.
        </p>
      </div>

      <form className="request-card" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Request title</label>

          <input
            type="text"
            placeholder="e.g. Need help carrying boxes"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Category</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option>Micro Help</option>
            <option>Study Resources</option>
            <option>Borrow & Return</option>
            <option>Community Alerts</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description</label>

          <textarea
            placeholder="Tell your campus community what you need..."
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form-row">

          <div className="form-group">
            <label>Location</label>

            <input
              type="text"
              placeholder="e.g. Block C"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Urgency</label>

            <select
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
            >
              <option>Not urgent</option>
              <option>Today</option>
              <option>Within a few hours</option>
              <option>Urgent</option>
            </select>
          </div>

        </div>

        <button type="submit" className="post-request-btn">
          Post request →
        </button>

        {message && (
          <p className="request-message">
            {message}
          </p>
        )}

      </form>

    </div>
  );
}

export default CreateRequest;