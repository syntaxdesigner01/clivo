import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ExchangeMarquee from "@/components/ExchangeMarquee";
import Testimonials from "@/components/Testimonials";
import DownloadSection from "@/components/DownloadSection";
import Faq from "@/components/Faq";

export default function HomePage() {
  return (
    <div id="top" className="page page-home" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", color: "#1d1e24", background: "#f1f1f4", minHeight: "100vh" }}>

    <div style={{ padding: "20px 20px 0" }}>
    <div style={{ position: "relative", zIndex: "20", overflow: "hidden", isolation: "isolate", background: "#f8f8fa", border: "1px solid #e4e4e9", borderRadius: "32px", paddingTop: "88px", boxShadow: "0 1px 2px rgba(29,30,36,0.04)" }}>
    <svg aria-hidden="true" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMin slice" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", zIndex: "-1", pointerEvents: "none" }}><g fill="none" stroke="#e2e2e7" strokeWidth="1.5"><path d="M0 140H220L260 180V320H420M120 0V90L160 130H300M1440 180H1220L1180 220V360H1040M1320 0V100L1280 140H1120M0 520H140L180 560V700H320M1440 600H1300L1260 640V820M560 0V60L600 100H700M880 0V70L840 110H760M60 300V420H200M1380 300V440H1240"></path><circle cx="420" cy="320" r="4"></circle><circle cx="300" cy="130" r="4"></circle><circle cx="1040" cy="360" r="4"></circle><circle cx="1120" cy="140" r="4"></circle><circle cx="320" cy="700" r="4"></circle><circle cx="1260" cy="820" r="4"></circle><circle cx="700" cy="100" r="4"></circle><circle cx="760" cy="110" r="4"></circle><circle cx="200" cy="420" r="4"></circle><circle cx="1240" cy="440" r="4"></circle><rect x="239" y="239" width="22" height="22" rx="4" fill="#ffffff"></rect><rect x="1169" y="279" width="22" height="22" rx="4" fill="#ffffff"></rect><rect x="169" y="619" width="22" height="22" rx="4" fill="#ffffff"></rect><rect x="1249" y="709" width="22" height="22" rx="4" fill="#ffffff"></rect></g><g fill="#ffffff" stroke="#e2e2e7" strokeWidth="1.5"><circle cx="300" cy="360" r="20"></circle><circle cx="200" cy="480" r="28"></circle><circle cx="1180" cy="300" r="22"></circle><circle cx="1290" cy="470" r="18"></circle><circle cx="150" cy="400" r="18"></circle></g><g fill="#a9aab4" fontFamily="Outfit, sans-serif" fontWeight="600" textAnchor="middle"><text x="300" y="367" fontSize="18">₿</text><text x="200" y="489" fontSize="26">₮</text><text x="1180" y="307" fontSize="18">Ξ</text><text x="1290" y="476" fontSize="16">₦</text><text x="150" y="406" fontSize="16">◎</text></g></svg>

    <Header active="home" ctaHref="#download" />

    <section style={{ padding: "56px 24px 0", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "22px" }}>
    <div aria-hidden="true" style={{ display: "flex", gap: "8px" }}>
    <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#ffffff", boxShadow: "0 2px 8px rgba(29,30,36,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600" }}>₿</span>
    <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#ffffff", boxShadow: "0 2px 8px rgba(29,30,36,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600" }}>₮</span>
    <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#ffffff", boxShadow: "0 2px 8px rgba(29,30,36,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600" }}>Ξ</span>
    <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#1d1e24", color: "#10b961", boxShadow: "0 2px 8px rgba(29,30,36,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600" }}>₦</span>
    </div>
    <h1 style={{ margin: "0", fontSize: "64px", lineHeight: "1.12", fontWeight: "400", letterSpacing: "-1.5px", maxWidth: "900px" }}>All Your Exchanges,<br />One Balance You Can Spend</h1>
    <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#6b6d78", maxWidth: "620px" }}>Link Binance, Bybit and more. Clivo converts your coins to Naira at the live rate and sends the money to any bank account.</p>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginTop: "4px" }}>
    <a href="#download" style={{ textDecoration: "none", background: "#1d1e24", color: "#ffffff", padding: "14px 22px", borderRadius: "10px", fontSize: "15px", fontWeight: "500" }}>Download the app</a>
    <a href="#how-h" style={{ textDecoration: "none", background: "#ffffff", color: "#1d1e24", border: "1px solid #e1e1e7", padding: "13px 22px", borderRadius: "10px", fontSize: "15px", fontWeight: "500", boxShadow: "0 1px 2px rgba(29,30,36,0.05)" }}>How it works</a>
    </div>

    <div className="tilt-in" aria-hidden="true" style={{ width: "100%", maxWidth: "1080px", marginTop: "48px", height: "440px", overflow: "hidden", background: "#ffffff", border: "1px solid #e4e4e9", borderBottom: "0", borderRadius: "24px 24px 0 0", boxShadow: "0 -8px 40px rgba(29,30,36,0.07)", display: "flex", textAlign: "left", padding: "8px 8px 0", boxSizing: "border-box" }}>

    <div style={{ flex: "0 0 200px", padding: "16px 12px", display: "flex", flexDirection: "column", gap: "2px", fontSize: "13px", color: "#4a4b55" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "16px", fontWeight: "500", color: "#1d1e24", margin: "0 6px 22px" }}>
    <span style={{ width: "30px", height: "30px", borderRadius: "9px", background: "#1d1e24", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 34 34"><path d="M24 9.5a10 10 0 1 0 0 15" fill="none" stroke="#ffffff" strokeWidth="3.8" strokeLinecap="round"></path><circle cx="24.5" cy="17" r="3.2" fill="#10b961"></circle></svg></span>Clivo</div>
    <div style={{ fontSize: "11px", color: "#9a9ba5", margin: "0 0 6px 10px", letterSpacing: "0.4px" }}>MENU</div>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 10px", background: "#ffffff", border: "1px solid #e6e6eb", borderRadius: "10px", color: "#1d1e24", fontWeight: "500", boxShadow: "0 1px 3px rgba(29,30,36,0.06)" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"></rect><rect x="14" y="3" width="7" height="5" rx="1.5"></rect><rect x="14" y="12" width="7" height="9" rx="1.5"></rect><rect x="3" y="16" width="7" height="5" rx="1.5"></rect></svg>Dashboard</div>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 10px" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="14" rx="3"></rect><path d="M3 10h18M16 15h2"></path></svg>Wallet</div>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 10px" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 4v16M3 8l4-4 4 4M17 20V4M21 16l-4 4-4-4"></path></svg>Convert</div>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 10px" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2 15 22l-4-9-9-4z"></path></svg>Send</div>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 10px" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.5"></circle><path d="M2.5 20a6.5 6.5 0 0 1 13 0M17.5 6.5a3 3 0 0 1 0 5M21.5 20a6 6 0 0 0-3-5"></path></svg>Beneficiaries</div>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 10px" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>History</div>
    <div style={{ fontSize: "11px", color: "#9a9ba5", margin: "14px 0 6px 10px", letterSpacing: "0.4px" }}>EXCHANGES</div>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "7px 10px" }}><span style={{ width: "18px", height: "18px", borderRadius: "6px", background: "#f0b90b" }}></span>Binance<span style={{ marginLeft: "auto", width: "7px", height: "7px", borderRadius: "50%", background: "#10b961" }}></span></div>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "7px 10px" }}><span style={{ width: "18px", height: "18px", borderRadius: "6px", background: "#1d1e24" }}></span>Bybit<span style={{ marginLeft: "auto", width: "7px", height: "7px", borderRadius: "50%", background: "#10b961" }}></span></div>
    </div>

    <div style={{ flex: "1", minWidth: "0", background: "#f7f7f9", border: "1px solid #ededf1", borderBottom: "0", borderRadius: "18px 18px 0 0", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}><span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#10b961", color: "#0b2a19", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>AO</span><span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: "16px", fontWeight: "500" }}>Good morning, Ada</span><span style={{ fontSize: "12px", color: "#8b8c96" }}>Wednesday, 14 October</span></span></div>
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <span style={{ display: "flex", alignItems: "center", gap: "8px", border: "1px solid #e4e4e9", borderRadius: "9px", padding: "7px 10px", fontSize: "12px", color: "#8b8c96", background: "#ffffff", width: "150px" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>Search<span style={{ marginLeft: "auto", fontSize: "11px", border: "1px solid #e4e4e9", borderRadius: "5px", padding: "0 5px" }}>⌘K</span></span>
    <span style={{ width: "32px", height: "32px", borderRadius: "9px", border: "1px solid #e4e4e9", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1d1e24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0"></path></svg><span style={{ position: "absolute", top: "6px", right: "7px", width: "6px", height: "6px", borderRadius: "50%", background: "#10b961" }}></span></span>
    </div>
    </div>

    <div style={{ display: "flex", gap: "14px", minWidth: "0" }}>
    <div style={{ flex: "1 1 0", minWidth: "0", background: "#ffffff", border: "1px solid #ececf0", borderRadius: "16px", padding: "18px", display: "flex", flexDirection: "column", gap: "14px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontSize: "13px", color: "#6b6d78" }}>Total balance</span><span style={{ fontSize: "11px", border: "1px solid #e4e4e9", borderRadius: "6px", padding: "3px 8px", color: "#4a4b55" }}>NGN ▾</span></div>
    <div style={{ display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap" }}><span style={{ fontSize: "30px", fontWeight: "500", letterSpacing: "-0.5px" }}>₦8,145,300</span><span style={{ fontSize: "12px", fontWeight: "500", color: "#0a7d42", background: "#e9f8ef", padding: "3px 8px", borderRadius: "999px" }}>▲ 4.2% this week</span></div>
    <div style={{ display: "flex", height: "8px", borderRadius: "999px", overflow: "hidden", gap: "3px" }}><span style={{ flex: "52", background: "#1d1e24" }}></span><span style={{ flex: "31", background: "#10b961" }}></span><span style={{ flex: "17", background: "#d4d4db" }}></span></div>
    <div style={{ display: "flex", gap: "14px", fontSize: "11px", color: "#6b6d78" }}><span style={{ display: "flex", alignItems: "center", gap: "5px" }}><span style={{ width: "7px", height: "7px", borderRadius: "2px", background: "#1d1e24" }}></span>BTC 52%</span><span style={{ display: "flex", alignItems: "center", gap: "5px" }}><span style={{ width: "7px", height: "7px", borderRadius: "2px", background: "#10b961" }}></span>USDT 31%</span><span style={{ display: "flex", alignItems: "center", gap: "5px" }}><span style={{ width: "7px", height: "7px", borderRadius: "2px", background: "#d4d4db" }}></span>ETH 17%</span></div>
    <div style={{ display: "flex", gap: "8px", marginTop: "2px" }}>
    <span style={{ flex: "1", textAlign: "center", background: "#1d1e24", color: "#ffffff", fontSize: "12px", fontWeight: "500", padding: "9px", borderRadius: "9px" }}>Convert</span>
    <span style={{ flex: "1", textAlign: "center", border: "1px solid #e4e4e9", fontSize: "12px", fontWeight: "500", padding: "8px", borderRadius: "9px" }}>Send</span>
    <span style={{ flex: "1", textAlign: "center", border: "1px solid #e4e4e9", fontSize: "12px", fontWeight: "500", padding: "8px", borderRadius: "9px" }}>+ Exchange</span>
    </div>
    </div>

    <div style={{ flex: "1.45 1 0", minWidth: "0", background: "#ffffff", border: "1px solid #ececf0", borderRadius: "16px", padding: "18px", display: "flex", flexDirection: "column", gap: "8px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span style={{ fontSize: "13px", color: "#6b6d78" }}>Portfolio value</span><span style={{ fontSize: "18px", fontWeight: "500" }}>₦8.1m</span></span>
    <span style={{ display: "flex", gap: "2px", background: "#f4f4f7", borderRadius: "8px", padding: "3px", fontSize: "11px" }}><span style={{ padding: "4px 8px", color: "#6b6d78" }}>1D</span><span style={{ padding: "4px 8px", background: "#ffffff", borderRadius: "6px", boxShadow: "0 1px 2px rgba(29,30,36,0.08)", fontWeight: "500" }}>1W</span><span style={{ padding: "4px 8px", color: "#6b6d78" }}>1M</span><span style={{ padding: "4px 8px", color: "#6b6d78" }}>1Y</span></span></div>
    <svg viewBox="0 0 420 150" width="100%" height="150" preserveAspectRatio="none" style={{ display: "block", overflow: "visible" }}>
    <defs><linearGradient id="pvfill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#10b961" stopOpacity="0.22"></stop><stop offset="1" stopColor="#10b961" stopOpacity="0"></stop></linearGradient></defs>
    <g stroke="#efeff3" strokeWidth="1"><path d="M0 30H420M0 70H420M0 110H420"></path></g>
    <path d="M0 110 C30 104 45 92 70 96 S115 118 140 100 S185 60 210 70 S255 98 280 80 S325 34 350 40 S395 30 420 18 V150 H0Z" fill="url(#pvfill)"></path>
    <path d="M0 110 C30 104 45 92 70 96 S115 118 140 100 S185 60 210 70 S255 98 280 80 S325 34 350 40 S395 30 420 18" fill="none" stroke="#10b961" strokeWidth="2.5" strokeLinecap="round"></path>
    <path d="M350 40V150" stroke="#1d1e24" strokeWidth="1" strokeDasharray="3 3"></path>
    <circle cx="350" cy="40" r="5" fill="#ffffff" stroke="#1d1e24" strokeWidth="2.5"></circle>
    </svg>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#9a9ba5" }}><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span><span>Mon</span><span style={{ color: "#1d1e24", fontWeight: "500" }}>Tue</span><span>Wed</span></div>
    </div>
    </div>

    <div style={{ background: "#ffffff", border: "1px solid #ececf0", borderRadius: "16px", padding: "14px 18px", display: "flex", flexDirection: "column", gap: "4px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "4px" }}><span style={{ fontWeight: "500" }}>Your assets</span><span style={{ color: "#6b6d78" }}>See all</span></div>
    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 0.8fr", alignItems: "center", gap: "12px", fontSize: "13px", padding: "8px 0", borderTop: "1px solid #f2f2f5" }}>
    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}><span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#1d1e24", color: "#ffffff", fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center" }}>₿</span><span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontWeight: "500" }}>Bitcoin</span><span style={{ fontSize: "11px", color: "#8b8c96" }}>Binance</span></span></span>
    <span>0.0895 BTC</span><span style={{ fontWeight: "500" }}>₦4,235,000</span>
    <svg viewBox="0 0 60 20" width="60" height="20"><path d="M0 15 L10 12 L20 14 L30 8 L40 9 L50 4 L60 5" fill="none" stroke="#10b961" strokeWidth="1.8"></path></svg>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 0.8fr", alignItems: "center", gap: "12px", fontSize: "13px", padding: "8px 0", borderTop: "1px solid #f2f2f5" }}>
    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}><span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#10b961", color: "#0b2a19", fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center" }}>₮</span><span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontWeight: "500" }}>Tether</span><span style={{ fontSize: "11px", color: "#8b8c96" }}>Bybit</span></span></span>
    <span>1,250 USDT</span><span style={{ fontWeight: "500" }}>₦2,525,000</span>
    <svg viewBox="0 0 60 20" width="60" height="20"><path d="M0 10 L10 10 L20 11 L30 10 L40 10 L50 9 L60 10" fill="none" stroke="#9a9ba5" strokeWidth="1.8"></path></svg>
    </div>
    </div>
    </div>
    </div>
    </section>
    </div>
    </div>

    <ExchangeMarquee />

    <section aria-labelledby="how-h" style={{ maxWidth: "1120px", margin: "0 auto", padding: "80px 24px 40px" }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "14px", marginBottom: "48px" }}>
    <span style={{ fontSize: "14px", color: "#6b6d78", border: "1px solid #e1e1e7", background: "#ffffff", padding: "6px 14px", borderRadius: "999px" }}>How it works</span>
    <h2 id="how-h" style={{ margin: "0", fontSize: "46px", lineHeight: "1.15", fontWeight: "400", letterSpacing: "-1px" }}>From Scattered Coins to Cash</h2>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
    <div style={{ background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "14px" }}>
    <span style={{ width: "44px", height: "44px", borderRadius: "12px", border: "1px solid #e4e4e9", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "500" }}>01</span>
    <h3 style={{ margin: "0", fontSize: "22px", fontWeight: "500" }}>Add your exchanges</h3>
    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#6b6d78" }}>Pick your favourite exchanges — Binance, Bybit and others — and link them to Clivo once.</p>
    </div>
    <div style={{ background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "14px" }}>
    <span style={{ width: "44px", height: "44px", borderRadius: "12px", border: "1px solid #e4e4e9", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "500" }}>02</span>
    <h3 style={{ margin: "0", fontSize: "22px", fontWeight: "500" }}>See one balance</h3>
    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#6b6d78" }}>Every coin on every exchange shows up in one wallet, so you always know what you actually have.</p>
    </div>
    <div style={{ background: "#1d1e24", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "14px", color: "#ffffff" }}>
    <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#10b961", color: "#0b2a19", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600" }}>03</span>
    <h3 style={{ margin: "0", fontSize: "22px", fontWeight: "500" }}>Convert and spend</h3>
    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#b9bac4" }}>Turn any coin into Naira at the live rate and send it straight to a bank or wallet in a few taps.</p>
    </div>
    </div>
    </section>

    <section aria-labelledby="feat-h" style={{ maxWidth: "1120px", margin: "0 auto", padding: "80px 24px" }}>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "40px" }}>
    <h2 id="feat-h" style={{ margin: "0", fontSize: "46px", lineHeight: "1.15", fontWeight: "400", letterSpacing: "-1px", maxWidth: "560px" }}>Built for Money That Needs to Move</h2>
    <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#6b6d78", maxWidth: "420px" }}>No more logging into three apps or waiting on P2P strangers. Clivo handles the conversion end to end.</p>
    </div>
    <div className="bento" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "14px" }}>

    <div className="feat-card" style={{ gridColumn: "span 2", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "24px", padding: "26px", display: "flex", flexWrap: "wrap", gap: "24px" }}>
    <div style={{ flex: "1 1 220px", display: "flex", flexDirection: "column", gap: "12px" }}>
    <span className="feat-icon" style={{ width: "44px", height: "44px", borderRadius: "12px", border: "1px solid #e4e4e9", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d1e24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="6" width="18" height="14" rx="3"></rect><path d="M3 10h18M16 15h2"></path></svg></span>
    <span style={{ fontSize: "12px", color: "#6b6d78", letterSpacing: "0.4px" }}>WALLET</span>
    <h3 style={{ margin: "0", fontSize: "22px", fontWeight: "500" }}>One unified wallet</h3>
    <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#6b6d78" }}>Every linked exchange and every coin, rolled into one live total you can spend.</p>
    <div style={{ display: "flex", gap: "18px", marginTop: "auto", paddingTop: "8px", fontSize: "13px", color: "#6b6d78" }}><span><strong style={{ display: "block", fontSize: "20px", fontWeight: "500", color: "#1d1e24" }}>2</strong>exchanges</span><span><strong style={{ display: "block", fontSize: "20px", fontWeight: "500", color: "#1d1e24" }}>3</strong>coins</span><span><strong style={{ display: "block", fontSize: "20px", fontWeight: "500", color: "#1d1e24" }}>1</strong>balance</span></div>
    </div>
    <div aria-hidden="true" style={{ flex: "1.3 1 280px", background: "#f8f8fa", border: "1px solid #efeff3", borderRadius: "18px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
    <div className="flow-row" style={{ display: "flex", alignItems: "center", gap: "10px", background: "#ffffff", border: "1px solid #ececf0", borderRadius: "12px", padding: "10px 12px", fontSize: "13px" }}><span style={{ width: "26px", height: "26px", borderRadius: "8px", background: "#f0b90b" }}></span><span style={{ flex: "1", fontWeight: "500" }}>Binance</span><span style={{ color: "#6b6d78" }}>0.0895 BTC</span><span style={{ fontWeight: "500" }}>₦4.24m</span></div>
    <div className="flow-row" style={{ display: "flex", alignItems: "center", gap: "10px", background: "#ffffff", border: "1px solid #ececf0", borderRadius: "12px", padding: "10px 12px", fontSize: "13px", animationDelay: ".4s" }}><span style={{ width: "26px", height: "26px", borderRadius: "8px", background: "#17181e" }}></span><span style={{ flex: "1", fontWeight: "500" }}>Bybit</span><span style={{ color: "#6b6d78" }}>1,250 USDT</span><span style={{ fontWeight: "500" }}>₦2.53m</span></div>
    <div className="flow-row" style={{ display: "flex", alignItems: "center", gap: "10px", background: "#ffffff", border: "1px solid #ececf0", borderRadius: "12px", padding: "10px 12px", fontSize: "13px", animationDelay: ".8s" }}><span style={{ width: "26px", height: "26px", borderRadius: "8px", background: "#627eea" }}></span><span style={{ flex: "1", fontWeight: "500" }}>Binance</span><span style={{ color: "#6b6d78" }}>0.42 ETH</span><span style={{ fontWeight: "500" }}>₦1.38m</span></div>
    <div style={{ display: "flex", justifyContent: "center", color: "#9a9ba5", fontSize: "14px", lineHeight: "1" }}>↓</div>
    <div className="shimmer" style={{ position: "relative", overflow: "hidden", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#1d1e24", color: "#ffffff", borderRadius: "12px", padding: "14px 16px" }}><span style={{ fontSize: "13px", color: "#b9bac4" }}>Total balance</span><span style={{ fontSize: "20px", fontWeight: "500" }}>₦8,145,300</span></div>
    </div>
    </div>

    <div className="feat-card" style={{ background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "24px", padding: "26px", display: "flex", flexDirection: "column", gap: "12px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <span className="feat-icon" style={{ width: "44px", height: "44px", borderRadius: "12px", border: "1px solid #e4e4e9", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d1e24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 4v16M3 8l4-4 4 4M17 20V4M21 16l-4 4-4-4"></path></svg></span>
    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "500", color: "#0a7d42", background: "#e9f8ef", padding: "5px 10px", borderRadius: "999px" }}><span className="live-dot" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b961" }}></span>Live</span>
    </div>
    <h3 style={{ margin: "4px 0 0", fontSize: "20px", fontWeight: "500" }}>Live conversion rates</h3>
    <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#6b6d78" }}>{"See exactly how much Naira you'll get before you confirm."}</p>
    <div aria-hidden="true" style={{ marginTop: "auto", background: "#f8f8fa", border: "1px solid #efeff3", borderRadius: "16px", padding: "14px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#6b6d78" }}><span>BTC / NGN</span><span style={{ color: "#0a7d42" }}>▲ 1.8%</span></div>
    <svg viewBox="0 0 200 60" width="100%" height="60" preserveAspectRatio="none" style={{ display: "block", marginTop: "6px" }}><path className="draw-line" d="M0 48 L20 44 L40 46 L60 36 L80 38 L100 28 L120 31 L140 20 L160 24 L180 12 L200 14" fill="none" stroke="#10b961" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" pathLength="300"></path></svg>
    </div>
    </div>

    <div className="feat-card" style={{ background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "24px", padding: "26px", display: "flex", flexDirection: "column", gap: "12px" }}>
    <span className="feat-icon" style={{ width: "44px", height: "44px", borderRadius: "12px", border: "1px solid #e4e4e9", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d1e24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 2 11 13M22 2 15 22l-4-9-9-4z"></path></svg></span>
    <h3 style={{ margin: "4px 0 0", fontSize: "20px", fontWeight: "500" }}>Send to any bank</h3>
    <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#6b6d78" }}>Pay out to Nigerian banks and mobile wallets in a few taps.</p>
    <div aria-hidden="true" style={{ position: "relative", marginTop: "auto", background: "#f8f8fa", border: "1px solid #efeff3", borderRadius: "16px", padding: "14px", display: "flex", flexWrap: "wrap", gap: "6px", fontSize: "12px", fontWeight: "500" }}>
    <span style={{ background: "#ffffff", border: "1px solid #ececf0", borderRadius: "999px", padding: "6px 10px" }}>GT Bank</span><span style={{ background: "#ffffff", border: "1px solid #ececf0", borderRadius: "999px", padding: "6px 10px" }}>Opay</span><span style={{ background: "#ffffff", border: "1px solid #ececf0", borderRadius: "999px", padding: "6px 10px" }}>Access</span><span style={{ background: "#ffffff", border: "1px solid #ececf0", borderRadius: "999px", padding: "6px 10px" }}>Kuda</span><span style={{ background: "#ffffff", border: "1px solid #ececf0", borderRadius: "999px", padding: "6px 10px" }}>Zenith</span><span style={{ color: "#6b6d78", padding: "6px 4px" }}>+ more</span>
    <span className="plane" style={{ position: "absolute", right: "14px", top: "-16px", width: "34px", height: "34px", borderRadius: "50%", background: "#1d1e24", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b961" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2 15 22l-4-9-9-4z"></path></svg></span>
    </div>
    </div>

    <div className="feat-card" style={{ background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "24px", padding: "26px", display: "flex", flexDirection: "column", gap: "12px" }}>
    <span className="feat-icon" style={{ width: "44px", height: "44px", borderRadius: "12px", border: "1px solid #e4e4e9", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d1e24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="m8 12 3 3 5-6"></path></svg></span>
    <h3 style={{ margin: "4px 0 0", fontSize: "20px", fontWeight: "500" }}>Verified recipients</h3>
    <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#6b6d78" }}>Account names are checked as you type, so money lands where you meant.</p>
    <div aria-hidden="true" style={{ marginTop: "auto", background: "#f8f8fa", border: "1px solid #efeff3", borderRadius: "16px", padding: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#ffffff", border: "1px solid #ececf0", borderRadius: "10px", padding: "10px 12px", fontSize: "14px", fontWeight: "500" }}><span>0123456789<span className="caret" style={{ display: "inline-block", width: "1.5px", height: "15px", background: "#1d1e24", marginLeft: "2px", verticalAlign: "-2px" }}></span></span><span style={{ fontSize: "12px", color: "#6b6d78" }}>GT Bank</span></div>
    <div className="pop" style={{ display: "flex", alignItems: "center", gap: "6px", background: "#e9f8ef", color: "#0a6b39", fontSize: "12px", fontWeight: "500", padding: "8px 10px", borderRadius: "8px" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="m8 12 3 3 5-6"></path></svg>Ada Okafor · verified</div>
    </div>
    </div>

    <div className="feat-card" style={{ background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "24px", padding: "26px", display: "flex", flexDirection: "column", gap: "12px" }}>
    <span className="feat-icon" style={{ width: "44px", height: "44px", borderRadius: "12px", border: "1px solid #e4e4e9", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d1e24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5"></circle><path d="M2.5 20a6.5 6.5 0 0 1 13 0"></path><circle cx="17.5" cy="9" r="2.5"></circle><path d="M17 14.5a5 5 0 0 1 4.5 5"></path></svg></span>
    <h3 style={{ margin: "4px 0 0", fontSize: "20px", fontWeight: "500" }}>Saved beneficiaries</h3>
    <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#6b6d78" }}>Pay the people and businesses you send to often in one tap.</p>
    <div aria-hidden="true" style={{ marginTop: "auto", background: "#f8f8fa", border: "1px solid #efeff3", borderRadius: "16px", padding: "14px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
    <div className="avatars" style={{ display: "flex" }}>
    <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#10b961", color: "#0b2a19", border: "2px solid #f8f8fa", fontSize: "12px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>AO</span>
    <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#1d1e24", color: "#ffffff", border: "2px solid #f8f8fa", fontSize: "12px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "-10px" }}>PT</span>
    <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#ececf1", color: "#1d1e24", border: "2px solid #f8f8fa", fontSize: "12px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "-10px" }}>SG</span>
    <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#ffffff", color: "#6b6d78", border: "1.5px dashed #c9cad2", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "-6px" }}>+</span>
    </div>
    <span style={{ background: "#1d1e24", color: "#ffffff", fontSize: "12px", fontWeight: "500", padding: "8px 12px", borderRadius: "9px" }}>Send again</span>
    </div>
    </div>

    <div className="feat-card" style={{ gridColumn: "1 / -1", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "24px", padding: "26px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px" }}>
    <div style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "12px" }}>
    <span className="feat-icon" style={{ width: "44px", height: "44px", borderRadius: "12px", border: "1px solid #e4e4e9", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d1e24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h10"></path></svg></span>
    <h3 style={{ margin: "4px 0 0", fontSize: "20px", fontWeight: "500" }}>Clear history</h3>
    <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#6b6d78" }}>Every conversion and payout, recorded with rates, fees and status — easy to look back on or share as a receipt.</p>
    </div>
    <div aria-hidden="true" style={{ flex: "2 1 480px", minWidth: "0", background: "#f8f8fa", border: "1px solid #efeff3", borderRadius: "16px", padding: "8px 14px" }}>
    <div className="feed-row" style={{ display: "grid", gridTemplateColumns: "30px 1.6fr 1fr 1fr auto", alignItems: "center", gap: "12px", padding: "10px 0", fontSize: "13px", borderBottom: "1px solid #ececf0" }}><span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#1d1e24", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>₿</span><span style={{ fontWeight: "500" }}>0.02 BTC → GT Bank</span><span style={{ color: "#6b6d78" }}>Today, 09:41</span><span style={{ fontWeight: "500" }}>₦946,200</span><span style={{ fontSize: "12px", color: "#0a7d42", background: "#e9f8ef", padding: "4px 10px", borderRadius: "999px" }}>Completed</span></div>
    <div className="feed-row" style={{ display: "grid", gridTemplateColumns: "30px 1.6fr 1fr 1fr auto", alignItems: "center", gap: "12px", padding: "10px 0", fontSize: "13px", borderBottom: "1px solid #ececf0", animationDelay: ".3s" }}><span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#10b961", color: "#0b2a19", display: "flex", alignItems: "center", justifyContent: "center" }}>₮</span><span style={{ fontWeight: "500" }}>300 USDT → Opay</span><span style={{ color: "#6b6d78" }}>Today, 08:15</span><span style={{ fontWeight: "500" }}>₦606,000</span><span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#1d1e24", border: "1px solid #d9d9e0", padding: "3px 10px", borderRadius: "999px" }}><span className="live-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f5a524" }}></span>Processing</span></div>
    <div className="feed-row" style={{ display: "grid", gridTemplateColumns: "30px 1.6fr 1fr 1fr auto", alignItems: "center", gap: "12px", padding: "10px 0", fontSize: "13px", animationDelay: ".6s" }}><span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#627eea", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>Ξ</span><span style={{ fontWeight: "500" }}>0.5 ETH → Access Bank</span><span style={{ color: "#6b6d78" }}>Yesterday</span><span style={{ fontWeight: "500" }}>₦1,640,000</span><span style={{ fontSize: "12px", color: "#0a7d42", background: "#e9f8ef", padding: "4px 10px", borderRadius: "999px" }}>Completed</span></div>
    </div>
    </div>

    </div>
    </section>

    <Testimonials />

    <DownloadSection />

    <Faq />

    <Footer />

    <BackToTop />

    </div>
  );
}
