import { rowA, rowB } from "@/lib/data";

export default function Testimonials() {
  return (
    <section aria-labelledby="t-h" style={{ padding: "40px 0 0", display: "flex", flexDirection: "column", alignItems: "center", gap: "40px" }}>
    <div style={{ padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "14px" }}>
    <span style={{ fontSize: "14px", color: "#6b6d78", border: "1px solid #e1e1e7", background: "#ffffff", padding: "6px 14px", borderRadius: "999px" }}>Testimonials</span>
    <h2 id="t-h" style={{ margin: "0", fontSize: "46px", lineHeight: "1.15", fontWeight: "400", letterSpacing: "-1px" }}>Loved by People Who<br />Move Money Daily</h2>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "10px 18px", marginTop: "4px", fontSize: "15px", color: "#6b6d78" }}>
    <span role="img" aria-label="Rated [RATING] out of 5" style={{ display: "flex", gap: "3px" }}>
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3 6.5 7 .8-5.2 4.8 1.4 7L12 17.6 5.8 21.1l1.4-7L2 9.3l7-.8z" fill="#f5b70a"></path></svg><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3 6.5 7 .8-5.2 4.8 1.4 7L12 17.6 5.8 21.1l1.4-7L2 9.3l7-.8z" fill="#f5b70a"></path></svg><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3 6.5 7 .8-5.2 4.8 1.4 7L12 17.6 5.8 21.1l1.4-7L2 9.3l7-.8z" fill="#f5b70a"></path></svg><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3 6.5 7 .8-5.2 4.8 1.4 7L12 17.6 5.8 21.1l1.4-7L2 9.3l7-.8z" fill="#f5b70a"></path></svg><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3 6.5 7 .8-5.2 4.8 1.4 7L12 17.6 5.8 21.1l1.4-7L2 9.3l7-.8z" fill="#f5b70a"></path></svg>
    </span>
    <span><strong style={{ color: "#1d1e24", fontWeight: "500" }}>[RATING]</strong> on the App Store</span>
    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#c9cad2" }}></span>
    <span><strong style={{ color: "#1d1e24", fontWeight: "500" }}>[RATING]</strong> on Google Play</span>
    </div>
    <span style={{ marginTop: "6px", fontSize: "13px", fontWeight: "500", color: "#7a4b00", background: "#fff4dc", border: "1px solid #f3dca6", padding: "6px 14px", borderRadius: "999px" }}>Sample reviews — replace with real customer feedback before launch</span>
    </div>

    <div className="t-wrap" style={{ width: "100%", display: "flex", flexDirection: "column", gap: "14px", overflow: "hidden", WebkitMaskImage: "linear-gradient(to right, transparent 0, #000 10%, #000 90%, transparent 100%)", maskImage: "linear-gradient(to right, transparent 0, #000 10%, #000 90%, transparent 100%)" }}>
    <div className="t-track" style={{ display: "flex", width: "max-content", gap: "14px", padding: "4px 0" }}>
    {rowA.map((t, i0) => (
    <figure key={i0} style={{ margin: "0", width: "340px", flex: "none", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "22px", padding: "22px", display: "flex", flexDirection: "column", gap: "16px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ color: "#f5b70a", fontSize: "15px", letterSpacing: "2px" }} aria-hidden="true">★★★★★</span><span style={{ fontSize: "12px", color: "#6b6d78", border: "1px solid #e4e4e9", borderRadius: "999px", padding: "3px 10px" }}>{t.tag}</span></div>
    <blockquote style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#1d1e24" }}>{t.quote}</blockquote>
    <figcaption style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "auto", paddingTop: "14px", borderTop: "1px solid #efeff3" }}>
    <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "50%", background: t.bg, color: t.fg, overflow: "hidden", display: "flex", alignItems: "flex-end", justifyContent: "center" }} aria-hidden="true"><svg width="44" height="44" viewBox="0 0 44 44"><circle cx="22" cy="17" r="8" fill="currentColor" opacity="0.92"></circle><path d="M6 46c0-9.5 7.2-16 16-16s16 6.5 16 16z" fill="currentColor" opacity="0.92"></path></svg></span>
    <span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: "15px", fontWeight: "500" }}>{t.name}</span><span style={{ fontSize: "13px", color: "#6b6d78" }}>{t.role}</span></span>
    </figcaption>
    </figure>
    ))}
    </div>
    <div className="t-track rev" style={{ display: "flex", width: "max-content", gap: "14px", padding: "4px 0" }}>
    {rowB.map((t, i0) => (
    <figure key={i0} style={{ margin: "0", width: "340px", flex: "none", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "22px", padding: "22px", display: "flex", flexDirection: "column", gap: "16px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ color: "#f5b70a", fontSize: "15px", letterSpacing: "2px" }} aria-hidden="true">★★★★★</span><span style={{ fontSize: "12px", color: "#6b6d78", border: "1px solid #e4e4e9", borderRadius: "999px", padding: "3px 10px" }}>{t.tag}</span></div>
    <blockquote style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#1d1e24" }}>{t.quote}</blockquote>
    <figcaption style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "auto", paddingTop: "14px", borderTop: "1px solid #efeff3" }}>
    <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "50%", background: t.bg, color: t.fg, overflow: "hidden", display: "flex", alignItems: "flex-end", justifyContent: "center" }} aria-hidden="true"><svg width="44" height="44" viewBox="0 0 44 44"><circle cx="22" cy="17" r="8" fill="currentColor" opacity="0.92"></circle><path d="M6 46c0-9.5 7.2-16 16-16s16 6.5 16 16z" fill="currentColor" opacity="0.92"></path></svg></span>
    <span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: "15px", fontWeight: "500" }}>{t.name}</span><span style={{ fontSize: "13px", color: "#6b6d78" }}>{t.role}</span></span>
    </figcaption>
    </figure>
    ))}
    </div>
    </div>
    </section>
  );
}
