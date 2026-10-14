"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import DownloadSection from "@/components/DownloadSection";

export default function ContactView() {
  const [sent, setSent] = useState(false);
  const showForm = !sent;
  const send = () => setSent(true);
  const reset = () => setSent(false);

  return (
    <div id="top" className="page page-contact" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", color: "#1d1e24", background: "#f1f1f4", minHeight: "100vh" }}>

    <div style={{ padding: "20px 20px 0" }}>
    <div style={{ position: "relative", zIndex: "20", overflow: "hidden", isolation: "isolate", background: "#f8f8fa", border: "1px solid #e4e4e9", borderRadius: "32px", paddingTop: "88px" }}>
    <svg aria-hidden="true" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMin slice" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", zIndex: "-1", pointerEvents: "none" }}><g fill="none" stroke="#e2e2e7" strokeWidth="1.5"><path d="M0 140H220L260 180V320H420M120 0V90L160 130H300M1440 180H1220L1180 220V360H1040M1320 0V100L1280 140H1120M0 520H140L180 560V700H320M1440 600H1300L1260 640V820M560 0V60L600 100H700M880 0V70L840 110H760M60 300V420H200M1380 300V440H1240"></path><circle cx="420" cy="320" r="4"></circle><circle cx="300" cy="130" r="4"></circle><circle cx="1040" cy="360" r="4"></circle><circle cx="1120" cy="140" r="4"></circle><circle cx="320" cy="700" r="4"></circle><circle cx="1260" cy="820" r="4"></circle><circle cx="700" cy="100" r="4"></circle><circle cx="760" cy="110" r="4"></circle><circle cx="200" cy="420" r="4"></circle><circle cx="1240" cy="440" r="4"></circle><rect x="239" y="239" width="22" height="22" rx="4" fill="#ffffff"></rect><rect x="1169" y="279" width="22" height="22" rx="4" fill="#ffffff"></rect><rect x="169" y="619" width="22" height="22" rx="4" fill="#ffffff"></rect></g></svg>

    <Header active="contact" ctaHref="#download" />

    <section style={{ maxWidth: "1120px", margin: "0 auto", padding: "56px 24px 72px", display: "flex", flexWrap: "wrap", gap: "48px" }}>
    <div style={{ flex: "1 1 360px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
    <span style={{ alignSelf: "flex-start", fontSize: "14px", color: "#6b6d78", border: "1px solid #e1e1e7", background: "#ffffff", padding: "6px 14px", borderRadius: "999px" }}>Contact us</span>
    <h1 style={{ margin: "0", fontSize: "56px", lineHeight: "1.12", fontWeight: "400", letterSpacing: "-1.5px" }}>{"We're Here"}<br />to Help</h1>
    <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#6b6d78", maxWidth: "440px" }}>Questions about a conversion, a payout or your account? Send us a message and our support team will get back to you.</p>
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
    <div style={{ display: "flex", gap: "14px", alignItems: "center", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "16px", padding: "16px 18px" }}>
    <span style={{ width: "42px", height: "42px", borderRadius: "12px", border: "1px solid #e4e4e9", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d1e24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg></span>
    <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span style={{ fontSize: "13px", color: "#6b6d78" }}>Email</span><span style={{ fontSize: "16px", fontWeight: "500" }}>[support@yourdomain.com]</span></span>
    </div>
    <div style={{ display: "flex", gap: "14px", alignItems: "center", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "16px", padding: "16px 18px" }}>
    <span style={{ width: "42px", height: "42px", borderRadius: "12px", border: "1px solid #e4e4e9", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d1e24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></span>
    <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span style={{ fontSize: "13px", color: "#6b6d78" }}>In-app chat</span><span style={{ fontSize: "16px", fontWeight: "500" }}>Settings › Help & Support</span></span>
    </div>
    <div style={{ display: "flex", gap: "14px", alignItems: "center", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "16px", padding: "16px 18px" }}>
    <span style={{ width: "42px", height: "42px", borderRadius: "12px", border: "1px solid #e4e4e9", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d1e24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"></path><circle cx="12" cy="10" r="2.5"></circle></svg></span>
    <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span style={{ fontSize: "13px", color: "#6b6d78" }}>Office</span><span style={{ fontSize: "16px", fontWeight: "500" }}>[COMPANY ADDRESS]</span></span>
    </div>
    </div>
    <p style={{ margin: "0", fontSize: "14px", color: "#6b6d78" }}>Support hours: [DAYS AND HOURS, WAT]</p>
    </div>

    <div style={{ flex: "1 1 460px", minWidth: "0", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "24px", padding: "36px", boxShadow: "0 12px 40px rgba(29,30,36,0.06)" }}>
    {showForm && (<>
    <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
    <h2 style={{ margin: "0 0 4px", fontSize: "24px", fontWeight: "500" }}>Send us a message</h2>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
    <label style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "500" }}>Full name
    <input type="text" name="name" autoComplete="name" placeholder="Ada Okafor" style={{ fontFamily: "inherit", fontSize: "15px", padding: "13px 14px", borderRadius: "10px", border: "1px solid #e1e1e7", background: "#f8f8fa", color: "#1d1e24" }} /></label>
    <label style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "500" }}>Email
    <input type="email" name="email" autoComplete="email" placeholder="you@example.com" style={{ fontFamily: "inherit", fontSize: "15px", padding: "13px 14px", borderRadius: "10px", border: "1px solid #e1e1e7", background: "#f8f8fa", color: "#1d1e24" }} /></label>
    </div>
    <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "500" }}>{"What's this about?"}
    <select name="topic" style={{ fontFamily: "inherit", fontSize: "15px", padding: "13px 14px", borderRadius: "10px", border: "1px solid #e1e1e7", background: "#f8f8fa", color: "#1d1e24" }}>
    <option>A conversion or payout</option>
    <option>Connecting an exchange</option>
    <option>My account or verification</option>
    <option>Partnerships</option>
    <option>Something else</option>
    </select></label>
    <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "500" }}>Message
    <textarea name="message" rows={6} placeholder="Tell us what happened. Include a transaction ID if you have one." style={{ fontFamily: "inherit", fontSize: "15px", padding: "13px 14px", borderRadius: "10px", border: "1px solid #e1e1e7", background: "#f8f8fa", color: "#1d1e24", resize: "vertical" }}></textarea></label>
    <button type="button" onClick={send} style={{ fontFamily: "inherit", fontSize: "16px", fontWeight: "500", background: "#1d1e24", color: "#ffffff", border: "0", borderRadius: "10px", padding: "15px", cursor: "pointer" }}>Send message</button>
    <p style={{ margin: "0", fontSize: "13px", color: "#6b6d78" }}>Never share your exchange password, PIN or seed phrase. Clivo support will never ask for them.</p>
    </div>
    </>)}
    {sent && (<>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", padding: "48px 8px" }}>
    <div style={{ width: "64px", height: "64px", borderRadius: "18px", background: "#1d1e24", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#10b961" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"></path></svg></div>
    <h2 style={{ margin: "0", fontSize: "24px", fontWeight: "500" }}>Message sent</h2>
    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#6b6d78", maxWidth: "360px" }}>{"Thanks for reaching out. We'll reply to your email within [RESPONSE TIME]."}</p>
    <button type="button" onClick={reset} style={{ fontFamily: "inherit", fontSize: "15px", fontWeight: "500", background: "#ffffff", color: "#1d1e24", border: "1px solid #e1e1e7", borderRadius: "10px", padding: "12px 20px", cursor: "pointer" }}>Send another</button>
    </div>
    </>)}
    </div>
    </section>
    </div>
    </div>

    <DownloadSection />

    <section aria-labelledby="faq-h" style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px 96px", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "48px" }}>
    <div style={{ flex: "1 1 320px", position: "sticky", top: "140px", display: "flex", flexDirection: "column", gap: "18px" }}>
    <span style={{ alignSelf: "flex-start", fontSize: "14px", color: "#6b6d78", border: "1px solid #e1e1e7", background: "#ffffff", padding: "6px 14px", borderRadius: "999px" }}>FAQ</span>
    <h2 id="faq-h" style={{ margin: "0", fontSize: "46px", lineHeight: "1.12", fontWeight: "400", letterSpacing: "-1px" }}>Questions,<br />Answered</h2>
    <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#6b6d78", maxWidth: "380px" }}>Everything you need to know about connecting exchanges, converting and getting paid.</p>
    <div style={{ marginTop: "10px", background: "#1d1e24", borderRadius: "22px", padding: "26px", display: "flex", flexDirection: "column", gap: "14px", maxWidth: "380px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#10b961", border: "2px solid #1d1e24" }}></span>
    <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#ececf1", border: "2px solid #1d1e24", marginLeft: "-18px" }}></span>
    <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#6b6d78", border: "2px solid #1d1e24", marginLeft: "-18px" }}></span>
    </div>
    <span style={{ fontSize: "19px", fontWeight: "500", color: "#ffffff" }}>Still have questions?</span>
    <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#b9bac4" }}>Our support team usually replies within [RESPONSE TIME].</span>
    <a href="#top" style={{ alignSelf: "flex-start", textDecoration: "none", background: "#ffffff", color: "#1d1e24", padding: "12px 18px", borderRadius: "10px", fontSize: "15px", fontWeight: "500" }}>Send us a message</a>
    </div>
    </div>

    <div style={{ flex: "2 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
    <details className="faq-item" open style={{ background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "20px", padding: "22px 24px" }}>
    <summary style={{ display: "flex", alignItems: "center", gap: "18px" }}><span style={{ fontSize: "14px", color: "#9a9ba5", fontVariantNumeric: "tabular-nums" }}>01</span><span style={{ flex: "1", fontSize: "18px", fontWeight: "500" }}>Which exchanges can I connect?</span><span className="faq-icon" aria-hidden="true">+</span></summary>
    <p style={{ margin: "14px 0 0 38px", fontSize: "16px", lineHeight: "1.65", color: "#6b6d78" }}>Clivo currently supports Binance and Bybit, with more exchanges on the way. [UPDATE WITH YOUR CURRENT LIST]</p>
    </details>
    <details className="faq-item" style={{ background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "20px", padding: "22px 24px" }}>
    <summary style={{ display: "flex", alignItems: "center", gap: "18px" }}><span style={{ fontSize: "14px", color: "#9a9ba5", fontVariantNumeric: "tabular-nums" }}>02</span><span style={{ flex: "1", fontSize: "18px", fontWeight: "500" }}>How fast do I get my money?</span><span className="faq-icon" aria-hidden="true">+</span></summary>
    <p style={{ margin: "14px 0 0 38px", fontSize: "16px", lineHeight: "1.65", color: "#6b6d78" }}>Most payouts arrive [TYPICAL PAYOUT TIME] after you confirm the conversion.</p>
    </details>
    <details className="faq-item" style={{ background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "20px", padding: "22px 24px" }}>
    <summary style={{ display: "flex", alignItems: "center", gap: "18px" }}><span style={{ fontSize: "14px", color: "#9a9ba5", fontVariantNumeric: "tabular-nums" }}>03</span><span style={{ flex: "1", fontSize: "18px", fontWeight: "500" }}>What does it cost?</span><span className="faq-icon" aria-hidden="true">+</span></summary>
    <p style={{ margin: "14px 0 0 38px", fontSize: "16px", lineHeight: "1.65", color: "#6b6d78" }}>{"Clivo charges [YOUR FEE] per conversion. The exact amount you'll receive is always shown before you confirm."}</p>
    </details>
    <details className="faq-item" style={{ background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "20px", padding: "22px 24px" }}>
    <summary style={{ display: "flex", alignItems: "center", gap: "18px" }}><span style={{ fontSize: "14px", color: "#9a9ba5", fontVariantNumeric: "tabular-nums" }}>04</span><span style={{ flex: "1", fontSize: "18px", fontWeight: "500" }}>Which banks can I send money to?</span><span className="faq-icon" aria-hidden="true">+</span></summary>
    <p style={{ margin: "14px 0 0 38px", fontSize: "16px", lineHeight: "1.65", color: "#6b6d78" }}>Any Nigerian bank account, plus mobile wallets like Opay. The account name is verified before you confirm. [CONFIRM SUPPORTED BANKS AND WALLETS]</p>
    </details>
    <details className="faq-item" style={{ background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "20px", padding: "22px 24px" }}>
    <summary style={{ display: "flex", alignItems: "center", gap: "18px" }}><span style={{ fontSize: "14px", color: "#9a9ba5", fontVariantNumeric: "tabular-nums" }}>05</span><span style={{ flex: "1", fontSize: "18px", fontWeight: "500" }}>Do I need to verify my identity?</span><span className="faq-icon" aria-hidden="true">+</span></summary>
    <p style={{ margin: "14px 0 0 38px", fontSize: "16px", lineHeight: "1.65", color: "#6b6d78" }}>[DESCRIBE YOUR KYC STEPS, E.G. BVN OR NIN, AND ANY LIMITS BEFORE VERIFICATION]</p>
    </details>
    <details className="faq-item" style={{ background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "20px", padding: "22px 24px" }}>
    <summary style={{ display: "flex", alignItems: "center", gap: "18px" }}><span style={{ fontSize: "14px", color: "#9a9ba5", fontVariantNumeric: "tabular-nums" }}>06</span><span style={{ flex: "1", fontSize: "18px", fontWeight: "500" }}>Is my account safe?</span><span className="faq-icon" aria-hidden="true">+</span></summary>
    <p style={{ margin: "14px 0 0 38px", fontSize: "16px", lineHeight: "1.65", color: "#6b6d78" }}>[DESCRIBE HOW EXCHANGE CONNECTIONS, KEYS AND FUNDS ARE PROTECTED]</p>
    </details>
    </div>
    </section>

    <Footer />

    <BackToTop />

    </div>
  );
}
