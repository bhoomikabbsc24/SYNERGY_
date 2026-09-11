function DashboardActionCard({
  icon,
  title,
  description,
  buttonText,
  onClick,
}) {
  return (
    <div className="action-card">
      <div className="action-icon">{icon}</div>

      <h2>{title}</h2>

      <p>{description}</p>

      <button onClick={onClick}>
        {buttonText} →
      </button>
    </div>
  );
}

export default DashboardActionCard;