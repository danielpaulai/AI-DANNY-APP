"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f0f10",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: "28rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
            AI Danny hit a wall
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
            {error.message || "Something broke while loading the app."}
          </p>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", marginTop: "1rem" }}>
            Try restarting dev:{" "}
            <code style={{ color: "#e90d41" }}>npm run dev:clean</code>
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              marginTop: "1.5rem",
              background: "#e90d41",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "0.75rem 1.25rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
