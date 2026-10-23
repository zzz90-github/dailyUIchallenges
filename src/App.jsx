import "./App.css";

function App() {
  const booking = {
    id: "HTL-2026-58291",
    hotel: "The Grand Azure Hotel",
    location: "Karachi, Pakistan",
    checkIn: "Nov 18, 2026",
    checkOut: "Nov 21, 2026",
    guests: "2 Adults",
    room: "Deluxe King Room",
    total: "PKR 45,000",
  };

  return (
    <main className="page">
      <nav className="navbar">
        <a href="#" className="brand">
          stay<span>wise.</span>
        </a>
        <span className="secure">✓ Secure booking</span>
      </nav>

      <section className="confirmation">
        <div className="success-icon">
          <svg
            viewBox="0 0 24 24"
            width="38"
            height="38"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              d="M5 12.5l4.5 4.5L19 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="eyebrow">RESERVATION COMPLETE</p>
        <h1>You're all booked!</h1>
        <p className="subtitle">
          Your stay is confirmed. Get ready for a wonderful experience.
        </p>

        <div className="booking-id">
          <div>
            <span>CONFIRMATION NUMBER</span>
            <strong>{booking.id}</strong>
          </div>
          <button
            className="copy-button"
            onClick={() =>
              navigator.clipboard?.writeText(booking.id)
            }
          >
            Copy ID
          </button>
        </div>

        <article className="booking-card">
          <div className="hotel-banner">
            <div className="hotel-symbol">H</div>
            <div>
              <h2>{booking.hotel}</h2>
              <p>📍 {booking.location}</p>
            </div>
          </div>

          <div className="details-grid">
            <div className="detail">
              <span>CHECK-IN</span>
              <strong>{booking.checkIn}</strong>
              <small>From 2:00 PM</small>
            </div>
            <div className="detail">
              <span>CHECK-OUT</span>
              <strong>{booking.checkOut}</strong>
              <small>Until 11:00 AM</small>
            </div>
            <div className="detail">
              <span>GUESTS</span>
              <strong>{booking.guests}</strong>
            </div>
            <div className="detail">
              <span>ROOM TYPE</span>
              <strong>{booking.room}</strong>
            </div>
          </div>

          <div className="total-row">
            <div>
              <span>Total amount</span>
              <small>For 3 nights</small>
            </div>
            <strong>{booking.total}</strong>
          </div>
        </article>

        <div className="actions">
          <button
            className="primary-button"
            onClick={() => window.print()}
          >
            Print confirmation ↗
          </button>
          <button
            className="secondary-button"
            onClick={() => (window.location.href = "/")}
          >
            Back to home
          </button>
        </div>

        <p className="help-text">
          Need help with your booking?{" "}
          <a href="mailto:support@example.com">Contact support</a>
        </p>
      </section>

      <footer>© 2026 Staywise · Your journey, made simple.</footer>
    </main>
  );
}

export default App;