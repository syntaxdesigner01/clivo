import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export type NavKey = "home" | "about" | "team" | "contact" | "";

const NAV: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "team", label: "Team", href: "/team" },
  { key: "contact", label: "Contact", href: "/contact" },
];

export default function Header({
  active = "",
  ctaHref = "#download",
}: {
  active?: NavKey;
  ctaHref?: string;
}) {
  const links = NAV.map((n) => {
    const on = n.key === active;
    return {
      ...n,
      current: on ? ("page" as const) : undefined,
      weight: on ? 500 : undefined,
      color: on ? undefined : "#5d5f6b",
    };
  });
  return (
    <header style={{ position: "fixed", top: "20px", left: "20px", right: "20px", zIndex: "50", padding: "21px 31px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", background: "rgba(255,255,255,0.62)", WebkitBackdropFilter: "blur(18px) saturate(160%)", backdropFilter: "blur(18px) saturate(160%)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 6px 24px rgba(29,30,36,0.06)", borderRadius: "32px" }}>
    <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#1d1e24", fontSize: "21px", fontWeight: "500" }}>
    <span className="logo-mark" style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#1d1e24", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="20" height="20" viewBox="0 0 34 34" aria-hidden="true"><path d="M24 9.5a10 10 0 1 0 0 15" fill="none" stroke="#ffffff" strokeWidth="3.6" strokeLinecap="round"></path><circle cx="24.5" cy="17" r="3" fill="#10b961"></circle></svg></span>
    Clivo</Link>
    <nav aria-label="Main" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 32px", fontSize: "15px", borderRadius: "999px", padding: "11px 28px" }}>{links.map((l) => (<Link key={l.href} href={l.href} aria-current={l.current} style={{ textDecoration: "none", fontWeight: l.weight, color: l.color }}>{l.label}</Link>))}</nav>
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <ThemeToggle />
    <a href={ctaHref} style={{ textDecoration: "none", background: "#1d1e24", color: "#ffffff", padding: "12px 20px", borderRadius: "10px", fontSize: "15px", fontWeight: "500" }}>Get the app</a>
    </div>
    </header>
  );
}
