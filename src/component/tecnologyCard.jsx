function TechnologyCard({ technology, onAdd, isAdded }) {
  return (
    <div className="tech-card">
      <div className="card-top">
        <img
          src={technology.icon}
          alt={technology.name}
          className="tech-icon"
        />

        <span className="badge">{technology.badge}</span>
      </div>

      <h2>{technology.name}</h2>

      <p>{technology.description}</p>

      <div className="info">
        <span className="category">{technology.category}</span>

        <span className="difficulty">
          {technology.difficulty}
        </span>
      </div>

      <div className="card-bottom">
        <span className="rating">
          ⭐ {technology.rating}
        </span>

        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={isAdded ? "added-btn" : ""}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}

export default TechnologyCard;