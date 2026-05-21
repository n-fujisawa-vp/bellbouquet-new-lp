export default function NotFound() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        color: "#1a1a1a",
      }}
    >
      <p style={{ fontSize: "80px", margin: 0, opacity: 0.15 }}>404</p>
      <p style={{ marginTop: "1rem", letterSpacing: "0.1em" }}>
        ページが見つかりません
      </p>
      <a
        href="/"
        style={{
          marginTop: "2rem",
          fontSize: "13px",
          color: "#C8A876",
          letterSpacing: "0.1em",
        }}
      >
        ← トップへ戻る
      </a>
    </main>
  );
}
