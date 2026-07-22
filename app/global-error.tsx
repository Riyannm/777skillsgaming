"use client";

import Link from "next/link";

export default function GlobalError({
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
          background: "#020617",
          color: "#E5E7EB",
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "480px" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "rgba(239,68,68,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
              fontSize: "1.75rem",
            }}
          >
            ⚠️
          </div>
          <h1
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              color: "#9CA3AF",
              marginBottom: "2rem",
              lineHeight: 1.6,
              fontSize: "0.95rem",
            }}
          >
            A critical error occurred. Please try again or contact us at{" "}
            <a
              href="tel:+17267773595"
              style={{ color: "#00B4D8", textDecoration: "none" }}
            >
              726-777-3595
            </a>{" "}
            if the problem persists.
          </p>
          <div
            style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}
          >
            <button
              onClick={reset}
              style={{
                padding: "0.75rem 1.75rem",
                borderRadius: "0.75rem",
                background: "#00B4D8",
                color: "#020617",
                border: "none",
                fontWeight: 700,
                cursor: "pointer",
                fontSize: "0.875rem",
              }}
            >
              Try Again
            </button>
            <Link
              href="/"
              style={{
                padding: "0.75rem 1.75rem",
                borderRadius: "0.75rem",
                border: "1px solid #1E293B",
                color: "#9CA3AF",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "none",
                fontSize: "0.875rem",
              }}
            >
              Go Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
