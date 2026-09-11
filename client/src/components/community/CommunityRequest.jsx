function CommunityRequest({
  icon,
  title,
  description,
  category,
  location,
  onHelp,
}) {
  return (
    <div className="request-preview">

      <div className="request-preview-icon">
        {icon}
      </div>

      <div className="request-preview-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <span>
          {category} • {location}
        </span>
      </div>

      <button
        className="help-btn"
        onClick={onHelp}
      >
        I can help →
      </button>

    </div>
  );
}

export default CommunityRequest;