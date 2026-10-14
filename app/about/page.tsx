import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ExchangeMarquee from "@/components/ExchangeMarquee";
import Testimonials from "@/components/Testimonials";
import DownloadSection from "@/components/DownloadSection";
import Faq from "@/components/Faq";

export const metadata: Metadata = { title: "About — Clivo" };

export default function AboutPage() {
  return (
    <div id="top" className="page page-about" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", color: "#1d1e24", background: "#f1f1f4", minHeight: "100vh" }}>

    <div style={{ padding: "20px 20px 0" }}>
    <div style={{ position: "relative", zIndex: "20", overflow: "hidden", isolation: "isolate", background: "#f8f8fa", border: "1px solid #e4e4e9", borderRadius: "32px", paddingTop: "88px" }}>
    <svg aria-hidden="true" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMin slice" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", zIndex: "-1", pointerEvents: "none" }}><g fill="none" stroke="#e2e2e7" strokeWidth="1.5"><path d="M0 140H220L260 180V320H420M120 0V90L160 130H300M1440 180H1220L1180 220V360H1040M1320 0V100L1280 140H1120M0 520H140L180 560V700H320M560 0V60L600 100H700M880 0V70L840 110H760M60 300V420H200M1380 300V440H1240"></path><circle cx="420" cy="320" r="4"></circle><circle cx="300" cy="130" r="4"></circle><circle cx="1040" cy="360" r="4"></circle><circle cx="1120" cy="140" r="4"></circle><circle cx="700" cy="100" r="4"></circle><circle cx="760" cy="110" r="4"></circle><circle cx="200" cy="420" r="4"></circle><circle cx="1240" cy="440" r="4"></circle><rect x="239" y="239" width="22" height="22" rx="4" fill="#ffffff"></rect><rect x="1169" y="279" width="22" height="22" rx="4" fill="#ffffff"></rect></g><g fill="#ffffff" stroke="#e2e2e7" strokeWidth="1.5"><circle cx="300" cy="380" r="20"></circle><circle cx="1180" cy="300" r="22"></circle></g><g fill="#a9aab4" fontFamily="Outfit, sans-serif" fontWeight="600" textAnchor="middle"><text x="300" y="387" fontSize="18">₿</text><text x="1180" y="307" fontSize="18">Ξ</text></g></svg>

    <Header active="about" ctaHref="#download" />

    <section style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px 0", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "40px" }}>
    <div style={{ flex: "1 1 460px", minWidth: "0", paddingTop: "16px", paddingBottom: "64px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px", alignSelf: "center" }}>
    <span style={{ fontSize: "14px", color: "#6b6d78", border: "1px solid #e1e1e7", background: "#ffffff", padding: "6px 14px", borderRadius: "999px" }}>About Clivo</span>
    <h1 style={{ margin: "0", fontSize: "60px", lineHeight: "1.12", fontWeight: "400", letterSpacing: "-1.5px" }}>Crypto Should Be as Easy to Spend as Cash</h1>
    <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#6b6d78", maxWidth: "520px" }}>Most people keep crypto spread across several exchanges. Turning it into money for rent or groceries means juggling apps, finding buyers and waiting. Clivo exists to remove all of that.</p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "6px" }}>
    <Link href="/" style={{ textDecoration: "none", background: "#1d1e24", color: "#ffffff", padding: "14px 22px", borderRadius: "10px", fontSize: "15px", fontWeight: "500" }}>Get the app</Link>
    <Link href="/team" style={{ textDecoration: "none", background: "#ffffff", color: "#1d1e24", border: "1px solid #e1e1e7", padding: "13px 22px", borderRadius: "10px", fontSize: "15px", fontWeight: "500" }}>Meet the team</Link>
    </div>
    </div>

    <div className="phone-in" aria-hidden="true" style={{ flex: "0 1 420px", display: "flex", justifyContent: "center", position: "relative", marginTop: "-90px" }}>
    <div className="phone-float" style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
    <div style={{ position: "absolute", left: "-40px", top: "150px", zIndex: "2", transform: "rotate(20deg)", transformOrigin: "50% 50%", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "18px", padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 18px 36px rgba(29,30,36,0.12)", fontSize: "15px" }}><span className="pay-badge" style={{ width: "38px", height: "38px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0a7d42" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle className="pay-ring" cx="12" cy="12" r="9" pathLength="60"></circle><path className="pay-check" d="M8 12.3l2.7 2.7L16.2 9.4" pathLength="1"></path></svg></span><span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontWeight: "500" }}>Payout sent</span><span style={{ color: "#6b6d78", fontSize: "13px", marginTop: "2px" }}>₦946,200 · GT Bank</span></span></div>
    <div style={{ position: "absolute", right: "-90px", top: "330px", zIndex: "2", transform: "rotate(20deg)", transformOrigin: "50% 50%", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "18px", padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 18px 36px rgba(29,30,36,0.12)", fontSize: "15px" }}><span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#e9f8ef", color: "#0a7d42", display: "flex", alignItems: "center", justifyContent: "center" }}><svg className="sync-spin" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M3 21v-5h5"></path></svg></span><span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontWeight: "500" }}>2 exchanges synced</span><span style={{ color: "#6b6d78", fontSize: "13px", marginTop: "2px" }}>Binance · Bybit · just now</span></span></div>
    <div style={{ width: "310px", height: "560px", background: "#1d1e24", borderRadius: "52px 52px 0 0", padding: "12px 12px 0", boxShadow: "0 30px 80px rgba(0,0,0,0.25), 0 -20px 60px rgba(16,185,97,0.12)", transform: "translate(-110px, 60px) rotate(20deg)", transformOrigin: "50% 100%", zoom: "1.32", WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 58%, transparent 100%)", maskImage: "linear-gradient(to bottom, #000 0%, #000 58%, transparent 100%)" }}>
    <div style={{ height: "100%", background: "#f8f8fa", borderRadius: "42px 42px 0 0", padding: "16px 16px 0", display: "flex", flexDirection: "column", gap: "12px", overflow: "hidden", color: "#1d1e24" }}>
    <div style={{ alignSelf: "center", width: "86px", height: "24px", borderRadius: "999px", background: "#1d1e24", marginBottom: "4px" }}></div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}><span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#10b961", color: "#0b2a19", fontSize: "12px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>AO</span><span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: "11px", color: "#6b6d78" }}>Welcome back</span><span style={{ fontSize: "15px", fontWeight: "500" }}>Ada</span></span></span>
    <span style={{ width: "32px", height: "32px", borderRadius: "10px", border: "1px solid #e4e4e9", background: "#ffffff" }}></span>
    </div>
    <div style={{ background: "#1d1e24", color: "#ffffff", borderRadius: "20px", padding: "18px", display: "flex", flexDirection: "column", gap: "6px" }}>
    <span style={{ fontSize: "12px", color: "#b9bac4" }}>Total balance</span>
    <span style={{ fontSize: "28px", fontWeight: "500", letterSpacing: "-0.5px" }}>₦8,145,300</span>
    <span style={{ alignSelf: "flex-start", fontSize: "11px", color: "#0b2a19", background: "#10b961", padding: "3px 8px", borderRadius: "999px", fontWeight: "500" }}>▲ 4.2% this week</span>
    <div style={{ display: "flex", gap: "8px", marginTop: "10px", fontSize: "12px", fontWeight: "500" }}>
    <span style={{ flex: "1", textAlign: "center", background: "#ffffff", color: "#1d1e24", borderRadius: "10px", padding: "9px" }}>Convert</span>
    <span style={{ flex: "1", textAlign: "center", background: "#2c2d36", borderRadius: "10px", padding: "9px" }}>Send</span>
    </div>
    </div>
    <span style={{ fontSize: "13px", fontWeight: "500", marginTop: "4px" }}>Connected exchanges</span>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#ffffff", border: "1px solid #ececf0", borderRadius: "14px", padding: "10px 12px", fontSize: "13px" }}><span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#f0b90b" }}></span><span style={{ flex: "1", display: "flex", flexDirection: "column" }}><span style={{ fontWeight: "500" }}>Binance</span><span style={{ fontSize: "11px", color: "#0a7d42" }}>Connected</span></span><span style={{ fontWeight: "500" }}>₦5.62m</span></div>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#ffffff", border: "1px solid #ececf0", borderRadius: "14px", padding: "10px 12px", fontSize: "13px" }}><span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#17181e" }}></span><span style={{ flex: "1", display: "flex", flexDirection: "column" }}><span style={{ fontWeight: "500" }}>Bybit</span><span style={{ fontSize: "11px", color: "#0a7d42" }}>Connected</span></span><span style={{ fontWeight: "500" }}>₦2.53m</span></div>
    <span style={{ fontSize: "13px", fontWeight: "500", marginTop: "4px" }}>Recent</span>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px" }}><span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#1d1e24", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px" }}>₿</span><span style={{ flex: "1" }}>0.02 BTC → GT Bank</span><span style={{ color: "#0a7d42" }}>Completed</span></div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </div>
    </div>

    <ExchangeMarquee />

    <section style={{ maxWidth: "1120px", margin: "0 auto", padding: "80px 24px" }}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "16px" }}>
    <div style={{ background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "24px", padding: "40px", display: "flex", flexDirection: "column", gap: "16px" }}>
    <span style={{ alignSelf: "flex-start", fontSize: "13px", color: "#6b6d78", border: "1px solid #e1e1e7", padding: "5px 12px", borderRadius: "999px" }}>The problem</span>
    <h2 style={{ margin: "0", fontSize: "30px", lineHeight: "1.2", fontWeight: "400", letterSpacing: "-0.5px" }}>Balances scattered across apps</h2>
    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#6b6d78" }}>{"A little BTC on Binance, some USDT on Bybit, a few altcoins somewhere else. Each one too small to bother with alone, but together a real amount of money you can't easily use."}</p>
    </div>
    <div style={{ background: "#1d1e24", borderRadius: "24px", padding: "40px", display: "flex", flexDirection: "column", gap: "16px" }}>
    <span style={{ alignSelf: "flex-start", fontSize: "13px", fontWeight: "500", color: "#0b2a19", background: "#10b961", padding: "5px 12px", borderRadius: "999px" }}>What we do</span>
    <h2 style={{ margin: "0", fontSize: "30px", lineHeight: "1.2", fontWeight: "400", letterSpacing: "-0.5px", color: "#ffffff" }}>One balance, ready to spend</h2>
    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#b9bac4" }}>Clivo connects to the exchanges you already use, brings your coins into one view and converts them to Naira at the live rate — then sends the money to any bank account you choose.</p>
    </div>
    </div>
    </section>

    <section aria-labelledby="val-h" style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px 80px" }}>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "40px" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "560px" }}>
    <span style={{ alignSelf: "flex-start", fontSize: "14px", color: "#6b6d78", border: "1px solid #e1e1e7", background: "#ffffff", padding: "6px 14px", borderRadius: "999px" }}>Our values</span>
    <h2 id="val-h" style={{ margin: "0", fontSize: "46px", lineHeight: "1.15", fontWeight: "400", letterSpacing: "-1px" }}>What We Care About</h2>
    </div>
    <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#6b6d78", maxWidth: "420px" }}>The principles behind every screen in Clivo — and the promises we make every time your money moves.</p>
    </div>

    <div className="v-bento" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "14px" }}>

    <div className="v-card" style={{ gridColumn: "span 2", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "24px", padding: "26px", display: "flex", flexWrap: "wrap", gap: "24px" }}>
    <div style={{ flex: "1 1 220px", display: "flex", flexDirection: "column", gap: "12px" }}>
    <span className="v-icon" style={{ width: "44px", height: "44px", borderRadius: "12px", border: "1px solid #e4e4e9", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d1e24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg></span>
    <span style={{ fontSize: "12px", color: "#6b6d78", letterSpacing: "0.4px" }}>01 · SIMPLICITY</span>
    <h3 style={{ margin: "0", fontSize: "22px", fontWeight: "500" }}>Simplicity first</h3>
    <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#6b6d78" }}>{"If converting your crypto takes more than a few taps, we haven't finished the job."}</p>
    <div style={{ marginTop: "auto", paddingTop: "8px", display: "flex", alignItems: "baseline", gap: "8px" }}><strong style={{ fontSize: "40px", fontWeight: "500", letterSpacing: "-1px" }}>3</strong><span style={{ fontSize: "14px", color: "#6b6d78" }}>taps from crypto to cash</span></div>
    </div>
    <div aria-hidden="true" style={{ flex: "1.3 1 280px", background: "#f8f8fa", border: "1px solid #efeff3", borderRadius: "18px", padding: "18px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "12px" }}>
    <div className="v-step" style={{ display: "flex", alignItems: "center", gap: "12px", background: "#ffffff", border: "1px solid #ececf0", borderRadius: "14px", padding: "12px 14px", fontSize: "14px" }}><span style={{ width: "30px", height: "30px", borderRadius: "9px", background: "#1d1e24", color: "#ffffff", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>1</span><span style={{ flex: "1", fontWeight: "500" }}>Link your exchange</span><span style={{ fontSize: "12px", color: "#0a7d42" }}>Done</span></div>
    <div className="v-step" style={{ display: "flex", alignItems: "center", gap: "12px", background: "#ffffff", border: "1px solid #ececf0", borderRadius: "14px", padding: "12px 14px", fontSize: "14px", animationDelay: ".5s" }}><span style={{ width: "30px", height: "30px", borderRadius: "9px", background: "#1d1e24", color: "#ffffff", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>2</span><span style={{ flex: "1", fontWeight: "500" }}>Choose an amount</span><span style={{ fontSize: "12px", color: "#0a7d42" }}>Done</span></div>
    <div className="v-step" style={{ display: "flex", alignItems: "center", gap: "12px", background: "#1d1e24", color: "#ffffff", borderRadius: "14px", padding: "12px 14px", fontSize: "14px", animationDelay: "1s" }}><span style={{ width: "30px", height: "30px", borderRadius: "9px", background: "#10b961", color: "#0b2a19", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>3</span><span style={{ flex: "1", fontWeight: "500" }}>Cash lands in your bank</span><span style={{ fontSize: "12px", color: "#10b961" }}>₦ Paid</span></div>
    <div style={{ height: "6px", borderRadius: "999px", background: "#ececf1", overflow: "hidden" }}><span className="v-fill" style={{ display: "block", height: "100%", width: "100%", background: "#10b961", borderRadius: "999px" }}></span></div>
    </div>
    </div>

    <div className="v-card" style={{ background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "24px", padding: "26px", display: "flex", flexDirection: "column", gap: "12px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <span className="v-icon" style={{ width: "44px", height: "44px", borderRadius: "12px", border: "1px solid #e4e4e9", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d1e24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"></path><circle cx="12" cy="12" r="3"></circle></svg></span>
    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "500", color: "#0a7d42", background: "#e9f8ef", padding: "5px 10px", borderRadius: "999px" }}><span className="v-pulse" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b961" }}></span>Rate shown</span>
    </div>
    <span style={{ fontSize: "12px", color: "#6b6d78", letterSpacing: "0.4px", marginTop: "4px" }}>02 · TRANSPARENCY</span>
    <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "500" }}>No surprises</h3>
    <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#6b6d78" }}>{"You see the rate, the fee and the amount you'll receive before anything moves."}</p>
    <div aria-hidden="true" style={{ marginTop: "auto", background: "#f8f8fa", border: "1px solid #efeff3", borderRadius: "16px", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "9px", fontSize: "13px" }}>
    <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "#6b6d78" }}>You convert</span><span style={{ fontWeight: "500" }}>0.02 BTC</span></div>
    <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "#6b6d78" }}>Rate</span><span style={{ fontWeight: "500" }}>Live, locked at confirm</span></div>
    <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "#6b6d78" }}>Fee</span><span style={{ fontWeight: "500" }}>[YOUR FEE]</span></div>
    <div style={{ height: "1px", background: "#e4e4e9" }}></div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}><span style={{ fontWeight: "500" }}>You receive</span><span className="v-glow" style={{ fontSize: "18px", fontWeight: "600", color: "#0a7d42" }}>₦946,200</span></div>
    </div>
    </div>

    <div className="v-card" style={{ background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "24px", padding: "26px", display: "flex", flexDirection: "column", gap: "12px" }}>
    <span className="v-icon" style={{ width: "44px", height: "44px", borderRadius: "12px", border: "1px solid #e4e4e9", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d1e24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"></path></svg></span>
    <span style={{ fontSize: "12px", color: "#6b6d78", letterSpacing: "0.4px", marginTop: "4px" }}>03 · LOCAL FIRST</span>
    <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "500" }}>Made for how Nigeria pays</h3>
    <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#6b6d78" }}>Naira payouts to the banks and wallets you already use every day.</p>
    <div aria-hidden="true" style={{ position: "relative", marginTop: "auto", background: "#f8f8fa", border: "1px solid #efeff3", borderRadius: "16px", padding: "16px 14px 14px", display: "flex", flexWrap: "wrap", gap: "6px", fontSize: "12px", fontWeight: "500" }}>
    <span style={{ background: "#ffffff", border: "1px solid #ececf0", borderRadius: "999px", padding: "6px 10px" }}>Any Nigerian bank</span><span style={{ background: "#ffffff", border: "1px solid #ececf0", borderRadius: "999px", padding: "6px 10px" }}>Opay</span><span style={{ background: "#ffffff", border: "1px solid #ececf0", borderRadius: "999px", padding: "6px 10px" }}>Naira payouts</span><span style={{ background: "#ffffff", border: "1px solid #ececf0", borderRadius: "999px", padding: "6px 10px" }}>Saved beneficiaries</span>
    <span className="v-float" style={{ position: "absolute", right: "14px", top: "-20px", width: "40px", height: "40px", borderRadius: "50%", background: "#10b961", color: "#0b2a19", fontSize: "19px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 18px rgba(16,185,97,0.35)" }}>₦</span>
    </div>
    </div>

    <div className="v-card" style={{ gridColumn: "span 2", background: "#1d1e24", color: "#ffffff", borderRadius: "24px", padding: "26px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "28px" }}>
    <div style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", gap: "12px" }}>
    <span className="v-icon" style={{ width: "44px", height: "44px", borderRadius: "12px", border: "1px solid #3a3b45", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"></path></svg></span>
    <span style={{ fontSize: "12px", color: "#8b8c96", letterSpacing: "0.4px", marginTop: "4px" }}>04 · TRUST</span>
    <h3 style={{ margin: "0", fontSize: "22px", fontWeight: "500" }}>Your money, protected</h3>
    <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#b9bac4" }}>{"We treat every connection and every naira with the care we'd want for our own."}</p>
    </div>
    <div aria-hidden="true" style={{ flex: "1.4 1 320px", display: "flex", alignItems: "center", gap: "22px" }}>
    <div style={{ position: "relative", flex: "none", width: "96px", height: "96px", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <span className="v-ring" style={{ position: "absolute", inset: "0", borderRadius: "50%", border: "1.5px solid rgba(16,185,97,0.5)" }}></span>
    <span className="v-ring" style={{ position: "absolute", inset: "0", borderRadius: "50%", border: "1.5px solid rgba(16,185,97,0.5)", animationDelay: "1.2s" }}></span>
    <span style={{ width: "64px", height: "64px", borderRadius: "20px", background: "#10b961", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0b2a19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"></path><path d="m8.5 12 2.5 2.5 4.5-5"></path></svg></span>
    </div>
    <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px" }}>
    <div className="v-check" style={{ display: "flex", alignItems: "center", gap: "10px", background: "#26272f", borderRadius: "12px", padding: "10px 12px" }}><span style={{ width: "22px", height: "22px", flex: "none", borderRadius: "50%", background: "#10b961", color: "#0b2a19", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>✓</span>Account name verified before every payout</div>
    <div className="v-check" style={{ display: "flex", alignItems: "center", gap: "10px", background: "#26272f", borderRadius: "12px", padding: "10px 12px", animationDelay: ".4s" }}><span style={{ width: "22px", height: "22px", flex: "none", borderRadius: "50%", background: "#10b961", color: "#0b2a19", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>✓</span>[SECURITY MEASURE, E.G. HOW EXCHANGE KEYS ARE STORED]</div>
    <div className="v-check" style={{ display: "flex", alignItems: "center", gap: "10px", background: "#26272f", borderRadius: "12px", padding: "10px 12px", animationDelay: ".8s" }}><span style={{ width: "22px", height: "22px", flex: "none", borderRadius: "50%", background: "#10b961", color: "#0b2a19", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>✓</span>[SECURITY MEASURE, E.G. PIN OR 2FA ON PAYOUTS]</div>
    </div>
    </div>
    </div>

    </div>
    </section>

    <section aria-labelledby="story-h" style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px 40px", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "48px" }}>
    <div style={{ flex: "1 1 340px", position: "sticky", top: "140px", display: "flex", flexDirection: "column", gap: "18px" }}>
    <span style={{ alignSelf: "flex-start", fontSize: "14px", color: "#6b6d78", border: "1px solid #e1e1e7", background: "#ffffff", padding: "6px 14px", borderRadius: "999px" }}>Our story</span>
    <h2 id="story-h" style={{ margin: "0", fontSize: "46px", lineHeight: "1.12", fontWeight: "400", letterSpacing: "-1px" }}>From a Frustrating Cash-Out to a Better Way</h2>
    <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#6b6d78", maxWidth: "420px" }}>Clivo started with a simple frustration: crypto spread across Binance, Bybit and a handful of other apps, and turning it into Naira for everyday bills took hours. We built Clivo so anyone can do it in a few taps.</p>
    <figure style={{ margin: "10px 0 0", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "22px", padding: "24px", display: "flex", flexDirection: "column", gap: "16px", maxWidth: "420px" }}>
    <svg width="28" height="22" viewBox="0 0 28 22" aria-hidden="true"><path d="M0 22V12.5C0 5.6 3.6 1.4 10.8 0l1.4 3.2C8.5 4.4 6.6 6.8 6.3 10H11v12zm16 0V12.5C16 5.6 19.6 1.4 26.8 0l1.4 3.2c-3.7 1.2-5.6 3.6-5.9 6.8H27v12z" fill="#10b961"></path></svg>
    <blockquote style={{ margin: "0", fontSize: "17px", lineHeight: "1.6" }}>{"\"We kept asking why spending our own money felt so hard. Clivo is our answer — one balance, a few taps, and the cash lands exactly where you need it.\""}</blockquote>
    <figcaption style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "14px", borderTop: "1px solid #efeff3" }}>
    <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#1d1e24", color: "#ffffff", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }} aria-hidden="true">CE</span>
    <span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: "15px", fontWeight: "500" }}>[Founder name]</span><span style={{ fontSize: "13px", color: "#6b6d78" }}>Co-founder & CEO</span></span>
    </figcaption>
    </figure>
    </div>

    <ol className="story-line" style={{ flex: "1.4 1 480px", minWidth: "0", listStyle: "none", margin: "0", padding: "0 0 0 36px", position: "relative", display: "flex", flexDirection: "column", gap: "16px" }}>
    <li className="story-step" style={{ position: "relative", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "22px", padding: "26px 28px", display: "flex", flexDirection: "column", gap: "10px" }}>
    <span className="story-dot" aria-hidden="true" style={{ position: "absolute", left: "-45px", top: "30px", width: "18px", height: "18px", borderRadius: "50%", background: "#10b961", border: "4px solid #f1f1f4" }}></span>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}><span style={{ fontSize: "13px", fontWeight: "500", color: "#0a6b39", background: "#e9f8ef", padding: "4px 12px", borderRadius: "999px" }}>[YEAR]</span><span style={{ fontSize: "13px", color: "#9a9ba5" }}>01</span></div>
    <h3 style={{ margin: "0", fontSize: "22px", fontWeight: "500" }}>The spark</h3>
    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#6b6d78" }}>Like many people holding crypto in Nigeria, we had small balances on several exchanges. Cashing out meant logging into one app after another, haggling on P2P and hoping the transfer actually arrived. There had to be a better way.</p>
    </li>
    <li className="story-step" style={{ position: "relative", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "22px", padding: "26px 28px", display: "flex", flexDirection: "column", gap: "10px" }}>
    <span className="story-dot" aria-hidden="true" style={{ position: "absolute", left: "-45px", top: "30px", width: "18px", height: "18px", borderRadius: "50%", background: "#10b961", border: "4px solid #f1f1f4" }}></span>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}><span style={{ fontSize: "13px", fontWeight: "500", color: "#0a6b39", background: "#e9f8ef", padding: "4px 12px", borderRadius: "999px" }}>[YEAR]</span><span style={{ fontSize: "13px", color: "#9a9ba5" }}>02</span></div>
    <h3 style={{ margin: "0", fontSize: "22px", fontWeight: "500" }}>Building Clivo</h3>
    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#6b6d78" }}>We set out to bring every exchange into one place, show a single live balance and convert to Naira at a clear, upfront rate. Then we tested it with friends, family and early users who shared the same headache — and kept simplifying until it took just a few taps.</p>
    </li>
    <li className="story-step" style={{ position: "relative", background: "#1d1e24", color: "#ffffff", borderRadius: "22px", padding: "26px 28px", display: "flex", flexDirection: "column", gap: "10px" }}>
    <span className="story-dot now" aria-hidden="true" style={{ position: "absolute", left: "-45px", top: "30px", width: "18px", height: "18px", borderRadius: "50%", background: "#10b961", border: "4px solid #f1f1f4" }}></span>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}><span style={{ fontSize: "13px", fontWeight: "500", color: "#0b2a19", background: "#10b961", padding: "4px 12px", borderRadius: "999px" }}>[YEAR] · Today</span><span style={{ fontSize: "13px", color: "#8b8c96" }}>03</span></div>
    <h3 style={{ margin: "0", fontSize: "22px", fontWeight: "500" }}>Live and growing</h3>
    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#b9bac4" }}>Today, Clivo lets you link Binance and Bybit, see everything in one balance and send cash to any Nigerian bank or wallet — with the account name verified before a single naira moves.</p>
    </li>
    <li className="story-step" style={{ position: "relative", border: "1.5px dashed #cfd0d8", borderRadius: "22px", padding: "26px 28px", display: "flex", flexDirection: "column", gap: "10px" }}>
    <span aria-hidden="true" style={{ position: "absolute", left: "-45px", top: "30px", width: "18px", height: "18px", borderRadius: "50%", background: "#f1f1f4", border: "2px dashed #b9bac4", boxSizing: "border-box" }}></span>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}><span style={{ fontSize: "13px", fontWeight: "500", color: "#6b6d78", border: "1px solid #e1e1e7", padding: "3px 12px", borderRadius: "999px" }}>{"What's next"}</span><span style={{ fontSize: "13px", color: "#9a9ba5" }}>04</span></div>
    <h3 style={{ margin: "0", fontSize: "22px", fontWeight: "500" }}>More exchanges, more places</h3>
    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#6b6d78" }}>More exchanges, more coins and more ways to spend — all with the same promise: clear rates, fast payouts and no surprises.</p>
    </li>
    </ol>
    </section>

    <Testimonials />

    <DownloadSection />

    <Faq />

    <Footer />

    <BackToTop />

    </div>
  );
}
