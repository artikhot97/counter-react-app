export default function Counter({ onOperation, warringMessage, counterValue }) {
  return (
    <div>
      {warringMessage && <p className="counter-warring">{warringMessage}</p>}
      {!warringMessage && (
        <p className="counter-value">Counter Value: {counterValue}</p>
      )}

      <p>
        <button
          style={{
            marginRight: "10px",
            border: "2px solid #05490f",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "all 0.2s, color 0.2s",
            boxShadow: "0 0 8px rgba(255, 187, 0, 0.4)",
            color: "rgb(12, 145, 5)",
            background: "none",
          }}
          onClick={() => onOperation("increment")}
          disabled={counterValue > 10}
        >
          Increment
        </button>
        <button
          className="decrement-button"
          onClick={() => onOperation("decrement")}
          disabled={counterValue < 0}
        >
          Decrement
        </button>
      </p>
      <p>
        <button className="counter-reset" onClick={() => onOperation("reset")}>
          Reset
        </button>
      </p>
    </div>
  );
}
