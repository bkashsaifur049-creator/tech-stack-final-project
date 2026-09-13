function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="stack">
      <div className="stack-header">
        <div>
          <h2>Your Stack</h2>
          <p>{stack.length} Technology Selected</p>
        </div>

        {stack.length > 0 && (
          <button onClick={onRemoveAll} className="remove-all">
            Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="empty">
          <div className="empty-icon">🧰</div>
          <h3>Your stack is empty</h3>
          <p>
            Add technologies from the list to build your stack.
          </p>
        </div>
      ) : (
        <div className="stack-list">
          {stack.map((item) => (
            <div className="stack-item" key={item.id}>
              <img src={item.icon} alt={item.name} />

              <div className="stack-info">
                <h3>{item.name}</h3>
                <p>{item.category}</p>
              </div>

              <button
                onClick={() => onRemove(item.id)}
                className="remove-btn"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

export default YourStack;