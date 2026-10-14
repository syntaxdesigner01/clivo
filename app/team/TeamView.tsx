"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ExchangeMarquee from "@/components/ExchangeMarquee";
import DownloadSection from "@/components/DownloadSection";
import Faq from "@/components/Faq";
import { people, socials } from "@/lib/team";

export default function TeamView() {
  const [center, setCenter] = useState(2);
  const [paused, setPaused] = useState(false);
  const dragX = useRef<number | null>(null);
  const N = people.length * 2;

  const go = useCallback((step: number) => setCenter((c) => (c + step + N) % N), [N]);

  useEffect(() => {
    let reduce = false;
    try {
      reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {}
    if (reduce || paused) return;
    const t = setInterval(() => go(1), 3600);
    return () => clearInterval(t);
  }, [go, paused]);

  const items = people.concat(people);
  const heroTeam = items.map((p, i) => {
    let d = (((i - center) % N) + N) % N;
    if (d > N / 2) d -= N;
    const a = Math.abs(d);
    const s = d < 0 ? -1 : 1;
    const slot =
      a === 0
        ? { w: 380, h: 610, x: 0, y: 0, op: 1, z: 5 }
        : a === 1
          ? { w: 280, h: 500, x: 348 * s, y: 40, op: 1, z: 4 }
          : a === 2
            ? { w: 280, h: 470, x: 646 * s, y: 72, op: 1, z: 3 }
            : { w: 280, h: 470, x: 944 * s, y: 72, op: 0, z: 1 };
    return {
      ...slot,
      name: p.name,
      role: p.role,
      img: p.img,
      nameSize: a === 0 ? 28 : 20,
      roleSize: a === 0 ? 16 : 14,
      shadow:
        a === 0
          ? "0 30px 80px rgba(16,185,97,0.32), 0 12px 34px rgba(29,30,36,0.18)"
          : "0 12px 28px rgba(29,30,36,0.10)",
      label: p.name + ", " + p.role + (a === 0 ? " (in focus)" : " — bring to centre"),
      tab: a <= 2 ? 0 : -1,
      pe: (a <= 2 ? "auto" : "none") as "auto" | "none",
      pick: () => setCenter(i),
    };
  });

  const half = people.length;
  const dots = people.map((_, k) => {
    const on = center % half === k;
    return {
      w: on ? 26 : 8,
      bg: on ? "#1d1e24" : "#cfd0d8",
      label: "Show team member " + (k + 1),
      pick: () => {
        const d1 = (((k - center) % N) + N) % N;
        const d2 = (((k + half - center) % N) + N) % N;
        const near = (x: number) => Math.min(x, N - x);
        setCenter(near(d1) <= near(d2) ? k : k + half);
      },
    };
  });

  const prev = () => go(-1);
  const next = () => go(1);
  const pause = () => setPaused(true);
  const resume = () => setPaused(false);
  const dragStart = (e: React.PointerEvent) => {
    dragX.current = e.clientX;
  };
  const dragEnd = (e: React.PointerEvent) => {
    if (dragX.current === null) return;
    const dx = e.clientX - dragX.current;
    dragX.current = null;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  };

  return (
    <div id="top" className="page page-team" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", color: "#1d1e24", background: "#f1f1f4", minHeight: "100vh" }}>

    <div style={{ padding: "20px 20px 0" }}>
    <div style={{ position: "relative", zIndex: "20", overflow: "hidden", isolation: "isolate", background: "#f8f8fa", border: "1px solid #e4e4e9", borderRadius: "32px", paddingTop: "88px" }}>
    <svg aria-hidden="true" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMin slice" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", zIndex: "-1", pointerEvents: "none" }}><g fill="none" stroke="#e2e2e7" strokeWidth="1.5"><path d="M0 140H220L260 180V320H420M120 0V90L160 130H300M1440 180H1220L1180 220V360H1040M1320 0V100L1280 140H1120M560 0V60L600 100H700M880 0V70L840 110H760M60 300V420H200M1380 300V440H1240"></path><circle cx="420" cy="320" r="4"></circle><circle cx="300" cy="130" r="4"></circle><circle cx="1040" cy="360" r="4"></circle><circle cx="1120" cy="140" r="4"></circle><circle cx="700" cy="100" r="4"></circle><circle cx="760" cy="110" r="4"></circle><circle cx="200" cy="420" r="4"></circle><circle cx="1240" cy="440" r="4"></circle><rect x="239" y="239" width="22" height="22" rx="4" fill="#ffffff"></rect><rect x="1169" y="279" width="22" height="22" rx="4" fill="#ffffff"></rect></g><g fill="#ffffff" stroke="#e2e2e7" strokeWidth="1.5"><circle cx="300" cy="380" r="20"></circle><circle cx="1180" cy="300" r="22"></circle></g><g fill="#a9aab4" fontFamily="Outfit, sans-serif" fontWeight="600" textAnchor="middle"><text x="300" y="387" fontSize="18">₮</text><text x="1180" y="307" fontSize="18">₿</text></g></svg>

    <Header active="team" ctaHref="#download" />

    <section style={{ padding: "40px 0 72px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
    <Link href="/contact" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#1d1e24", fontSize: "13px", fontWeight: "500", background: "#ffffff", border: "1px solid #e1e1e7", borderRadius: "10px", padding: "5px 6px 5px 12px", boxShadow: "0 1px 2px rgba(29,30,36,0.05)" }}><span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b961" }}></span>Our team<span style={{ color: "#6b6d78", borderLeft: "1px solid #e4e4e9", padding: "2px 8px" }}>Join us →</span></Link>
    <h1 style={{ margin: "0", padding: "0 24px", fontSize: "60px", lineHeight: "1.12", fontWeight: "400", letterSpacing: "-1.5px", maxWidth: "820px" }}>The People Making<br />Crypto Spendable</h1>
    <p style={{ margin: "0", padding: "0 24px", fontSize: "18px", lineHeight: "1.6", color: "#6b6d78", maxWidth: "600px" }}>A small team of engineers, designers and finance people who got tired of juggling exchange apps ourselves.</p>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginTop: "6px" }}>
    <Link href="/contact" style={{ textDecoration: "none", background: "#1d1e24", color: "#ffffff", padding: "14px 22px", borderRadius: "999px", fontSize: "15px", fontWeight: "500", boxShadow: "0 10px 24px rgba(20,22,42,0.22)" }}>Get in touch</Link>
    </div>
    <div className="t-row" style={{ width: "100%", overflow: "hidden", marginTop: "44px", padding: "20px 0 0" }}>
    <div className="t-stage" role="region" aria-roledescription="carousel" aria-label="Clivo team" onPointerDown={dragStart} onPointerUp={dragEnd} onMouseEnter={pause} onMouseLeave={resume} style={{ position: "relative", height: "640px", touchAction: "pan-y", userSelect: "none" }}>
    {heroTeam.map((p, i0) => (
    <div key={i0} className="t-card" style={{ position: "absolute", left: "50%", top: "0", width: `${p.w}px`, height: `${p.h}px`, transform: `translate(calc(-50% + ${p.x}px), ${p.y}px)`, opacity: p.op, zIndex: p.z, pointerEvents: p.pe, overflow: "hidden", borderRadius: "22px", border: "1px solid rgba(255,255,255,0.7)", background: "#e6e6ea", boxShadow: p.shadow }}>
    <button type="button" onClick={p.pick} aria-label={p.label} tabIndex={p.tab} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", padding: "0", margin: "0", border: "0", background: "transparent", cursor: "pointer", fontFamily: "inherit", color: "#ffffff" }}>
    <img src={p.img} alt="" draggable="false" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 22%", display: "block" }} />
    <span style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "46%", background: "linear-gradient(180deg, rgba(10,11,15,0) 0%, rgba(10,11,15,0.55) 55%, rgba(10,11,15,0.85) 100%)" }}></span>
    <span style={{ position: "absolute", left: "24px", right: "24px", bottom: "58px", display: "flex", flexDirection: "column", gap: "4px", textAlign: "left" }}><span className="t-name" style={{ fontSize: `${p.nameSize}px`, fontWeight: "500", letterSpacing: "-0.3px", whiteSpace: "nowrap" }}>{p.name}</span><span className="t-name" style={{ fontSize: `${p.roleSize}px`, color: "rgba(255,255,255,0.82)" }}>{p.role}</span></span>
    </button>
    <div style={{ position: "absolute", right: "22px", bottom: "22px", display: "flex", gap: "6px" }}>
    <a className="t-soc" href={socials.linkedin} tabIndex={p.tab} aria-label={`${p.name} on LinkedIn`} style={{ width: "26px", height: "26px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", color: "#ffffff", fontSize: "11px", fontWeight: "700", letterSpacing: "-0.3px", background: "rgba(255,255,255,0.16)", border: "1px solid rgba(255,255,255,0.35)", WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)" }}>in</a>
    <a className="t-soc" href={socials.instagram} tabIndex={p.tab} aria-label={`${p.name} on Instagram`} style={{ width: "26px", height: "26px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", color: "#ffffff", fontSize: "10px", fontWeight: "700", background: "rgba(255,255,255,0.16)", border: "1px solid rgba(255,255,255,0.35)", WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)" }}>ig</a>
    <a className="t-soc" href={socials.x} tabIndex={p.tab} aria-label={`${p.name} on X`} style={{ width: "26px", height: "26px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", color: "#ffffff", fontSize: "12px", fontWeight: "700", background: "rgba(255,255,255,0.16)", border: "1px solid rgba(255,255,255,0.35)", WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)" }}>𝕏</a>
    </div>
    </div>
    ))}
    </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", padding: "18px 0 36px" }}>
    <button type="button" onClick={prev} aria-label="Previous team member" style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #e1e1e7", background: "#ffffff", color: "#1d1e24", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: "0" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button>
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
    {dots.map((dot, i0) => (
    <button key={i0} type="button" onClick={dot.pick} aria-label={dot.label} style={{ width: `${dot.w}px`, height: "8px", borderRadius: "999px", border: "0", padding: "0", background: dot.bg, cursor: "pointer", transition: "width .35s ease, background .35s ease" }}></button>
    ))}
    </div>
    <button type="button" onClick={next} aria-label="Next team member" style={{ width: "44px", height: "44px", borderRadius: "50%", border: "0", background: "#1d1e24", color: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: "0" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button>
    </div>
    </div>
    </section>
    </div>
    </div>

    <ExchangeMarquee />

    <DownloadSection />

    <Faq />

    <section style={{ padding: "0 20px 80px" }}>
    <div style={{ maxWidth: "1120px", margin: "0 auto", background: "#1d1e24", borderRadius: "32px", padding: "56px 48px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
    <div style={{ flex: "1 1 420px", display: "flex", flexDirection: "column", gap: "12px" }}>
    <h2 style={{ margin: "0", fontSize: "36px", fontWeight: "400", letterSpacing: "-0.5px", color: "#ffffff" }}>Want to Build With Us?</h2>
    <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#b9bac4" }}>{"We're always glad to hear from people who care about payments, crypto and great mobile products."}</p>
    </div>
    <Link href="/contact" style={{ textDecoration: "none", background: "#10b961", color: "#0b2a19", padding: "14px 22px", borderRadius: "10px", fontWeight: "500" }}>Get in touch</Link>
    </div>
    </section>

    <Footer />

    <BackToTop />

    </div>
  );
}
