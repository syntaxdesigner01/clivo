import { exchanges } from "@/lib/data";

export default function ExchangeMarquee() {
  return (
    <section aria-labelledby="ex-h" style={{ padding: "56px 0 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "22px" }}>
    <h2 id="ex-h" style={{ margin: "0", padding: "0 24px", fontSize: "15px", fontWeight: "400", color: "#6b6d78", textAlign: "center" }}>Connect the exchanges you already use</h2>
    <div className="ex-wrap" style={{ width: "100%", overflow: "hidden", WebkitMaskImage: "linear-gradient(to right, transparent 0, #000 12%, #000 88%, transparent 100%)", maskImage: "linear-gradient(to right, transparent 0, #000 12%, #000 88%, transparent 100%)" }}>
    <div className="ex-track" style={{ display: "flex", width: "max-content", gap: "12px", padding: "4px 0" }}>
    {exchanges.map((ex, i0) => (
    <span key={i0} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 20px 10px 10px", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "999px", fontSize: "16px", fontWeight: "500", whiteSpace: "nowrap", boxShadow: "0 1px 2px rgba(29,30,36,0.04)" }}>
    <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: ex.bg, color: ex.fg, fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", letterSpacing: "-0.3px" }}>{ex.mono}</span>{ex.name}</span>
    ))}
    </div>
    </div>
    </section>
  );
}
