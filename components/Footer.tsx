import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ padding: "0 20px 20px" }}>
    <div style={{ background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "32px", padding: "48px 40px 28px", display: "flex", flexDirection: "column", gap: "40px" }}>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "32px" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "320px" }}>
    <span style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px", fontWeight: "500" }}><span className="logo-mark" style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#1d1e24" }}></span>Clivo</span>
    <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#6b6d78" }}>Your crypto from every exchange, turned into money you can use.</span>
    </div>
    <nav aria-label="Footer" style={{ display: "flex", flexWrap: "wrap", gap: "56px", fontSize: "15px" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontWeight: "500" }}>Company</span><Link href="/about" style={{ color: "#6b6d78", textDecoration: "none" }}>About</Link><Link href="/team" style={{ color: "#6b6d78", textDecoration: "none" }}>Team</Link><Link href="/contact" style={{ color: "#6b6d78", textDecoration: "none" }}>Contact us</Link></div>
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontWeight: "500" }}>Legal</span><Link href="/terms" style={{ color: "#6b6d78", textDecoration: "none" }}>Terms of Service</Link><Link href="/privacy" style={{ color: "#6b6d78", textDecoration: "none" }}>Privacy Policy</Link></div>
    </nav>
    </div>
    <div style={{ borderTop: "1px solid #efeff3", paddingTop: "22px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", fontSize: "13px", color: "#6b6d78" }}>
    <span>© 2026 Clivo. All rights reserved.</span>
    <span>Crypto prices are volatile. [REGULATORY / LICENSING STATEMENT]</span>
    </div>
    </div>
    </footer>
  );
}
