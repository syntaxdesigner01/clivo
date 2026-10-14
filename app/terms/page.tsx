import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = { title: "Terms of Service — Clivo" };

export default function TermsPage() {
  return (
    <div id="top" className="page page-terms" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", color: "#1d1e24", background: "#f1f1f4", minHeight: "100vh" }}>

    <div style={{ padding: "20px 20px 0" }}>
    <div style={{ position: "relative", zIndex: "20", overflow: "hidden", isolation: "isolate", background: "#f8f8fa", border: "1px solid #e4e4e9", borderRadius: "32px", paddingTop: "88px" }}>
    <svg aria-hidden="true" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMin slice" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", zIndex: "-1", pointerEvents: "none" }}><g fill="none" stroke="#e2e2e7" strokeWidth="1.5"><path d="M0 140H220L260 180V320H420M120 0V90L160 130H300M1440 180H1220L1180 220V360H1040M1320 0V100L1280 140H1120M560 0V60L600 100H700M880 0V70L840 110H760"></path><circle cx="420" cy="320" r="4"></circle><circle cx="300" cy="130" r="4"></circle><circle cx="1040" cy="360" r="4"></circle><circle cx="1120" cy="140" r="4"></circle><circle cx="700" cy="100" r="4"></circle><circle cx="760" cy="110" r="4"></circle><rect x="239" y="239" width="22" height="22" rx="4" fill="#ffffff"></rect><rect x="1169" y="279" width="22" height="22" rx="4" fill="#ffffff"></rect></g></svg>

    <Header active="" ctaHref="/#download" />

    <section style={{ padding: "48px 24px 72px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px" }}>
    <span style={{ fontSize: "14px", color: "#6b6d78", border: "1px solid #e1e1e7", background: "#ffffff", padding: "6px 14px", borderRadius: "999px" }}>Legal</span>
    <h1 style={{ margin: "0", fontSize: "56px", lineHeight: "1.12", fontWeight: "400", letterSpacing: "-1.5px" }}>Terms of Service</h1>
    <p style={{ margin: "0", fontSize: "16px", color: "#6b6d78" }}>Last updated: [DATE]</p>
    </section>
    </div>
    </div>

    <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "48px 24px 80px", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
    <nav aria-label="On this page" style={{ flex: "1 1 240px", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "20px", padding: "24px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px" }}>
    <span style={{ fontWeight: "500", marginBottom: "4px" }}>On this page</span>
    <a href="#t1" style={{ textDecoration: "none", color: "#6b6d78" }}>1. Agreement</a>
    <a href="#t2" style={{ textDecoration: "none", color: "#6b6d78" }}>2. Eligibility</a>
    <a href="#t3" style={{ textDecoration: "none", color: "#6b6d78" }}>3. Your account</a>
    <a href="#t4" style={{ textDecoration: "none", color: "#6b6d78" }}>4. Connecting exchanges</a>
    <a href="#t5" style={{ textDecoration: "none", color: "#6b6d78" }}>5. Conversions and payouts</a>
    <a href="#t6" style={{ textDecoration: "none", color: "#6b6d78" }}>6. Fees</a>
    <a href="#t7" style={{ textDecoration: "none", color: "#6b6d78" }}>7. Prohibited use</a>
    <a href="#t8" style={{ textDecoration: "none", color: "#6b6d78" }}>8. Risks</a>
    <a href="#t9" style={{ textDecoration: "none", color: "#6b6d78" }}>9. Suspension and termination</a>
    <a href="#t10" style={{ textDecoration: "none", color: "#6b6d78" }}>10. Limitation of liability</a>
    <a href="#t11" style={{ textDecoration: "none", color: "#6b6d78" }}>11. Governing law</a>
    <a href="#t12" style={{ textDecoration: "none", color: "#6b6d78" }}>12. Changes and contact</a>
    </nav>

    <article style={{ flex: "999 1 560px", minWidth: "0", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "24px", padding: "44px", display: "flex", flexDirection: "column", gap: "36px", fontSize: "16px", lineHeight: "1.75", color: "#5d5f6b" }}>
    <p style={{ margin: "0", background: "#f8f8fa", border: "1px solid #e4e4e9", borderRadius: "12px", padding: "14px 18px", fontSize: "14px", color: "#1d1e24" }}>Draft template — have a qualified lawyer review and complete these terms before publishing.</p>

    <section id="t1" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>1. Agreement</h2>
    <p style={{ margin: "0" }}>{"These Terms of Service (\"Terms\") govern your use of the Clivo mobile app and website (the \"Service\"), operated by [LEGAL COMPANY NAME], registered in Nigeria under RC [NUMBER] (\"Clivo\", \"we\", \"us\"). By creating an account or using the Service, you agree to these Terms. If you don't agree, please don't use the Service."}</p>
    </section>

    <section id="t2" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>2. Eligibility</h2>
    <p style={{ margin: "0" }}>You must be at least 18 years old, able to enter into a binding contract, and not barred from using financial services under any applicable law. You may only use the Service in countries where we offer it.</p>
    </section>

    <section id="t3" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>3. Your account</h2>
    <p style={{ margin: "0" }}>You agree to give accurate information and to complete any identity verification (KYC) we request. You are responsible for keeping your login details, PIN and devices secure, and for all activity on your account. Tell us immediately at [SUPPORT EMAIL] if you suspect unauthorised access.</p>
    </section>

    <section id="t4" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>4. Connecting exchanges</h2>
    <p style={{ margin: "0" }}>The Service lets you link accounts you hold with third-party exchanges such as Binance and Bybit. You authorise Clivo to access those accounts to the extent needed to show your balances and carry out conversions you request. [DESCRIBE THE CONNECTION METHOD AND PERMISSIONS, E.G. API KEYS WITH WITHDRAWAL LIMITS.] Those exchanges are independent of Clivo and their own terms continue to apply. We are not responsible for their availability, fees or actions.</p>
    </section>

    <section id="t5" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>5. Conversions and payouts</h2>
    <p style={{ margin: "0" }}>Before each conversion we show you the exchange rate, any fees and the amount the recipient will receive. A conversion is final once you confirm it. Rates are quoted live and may change until you confirm. You are responsible for entering correct recipient details; we display the verified account name where available, but we cannot always recover funds sent to the wrong account. Payout times depend on banks and payment partners and are not guaranteed.</p>
    </section>

    <section id="t6" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>6. Fees</h2>
    <p style={{ margin: "0" }}>Clivo charges [FEE DESCRIPTION]. Exchanges, blockchain networks and banks may charge their own fees, which we pass through where they apply. Current fees are always shown in the app before you confirm a transaction.</p>
    </section>

    <section id="t7" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>7. Prohibited use</h2>
    <p style={{ margin: "0" }}>You may not use the Service for fraud, money laundering, terrorist financing, sanctions evasion, or any other unlawful purpose; to receive proceeds of crime; on behalf of another person without our approval; or to interfere with or reverse-engineer the Service. We may report suspicious activity to the relevant authorities as required by law.</p>
    </section>

    <section id="t8" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>8. Risks</h2>
    <p style={{ margin: "0" }}>Crypto assets are highly volatile and their value can fall sharply. Clivo does not give investment, tax or legal advice. You are solely responsible for deciding whether and when to convert your assets, and for any taxes that apply to you.</p>
    </section>

    <section id="t9" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>9. Suspension and termination</h2>
    <p style={{ margin: "0" }}>We may suspend or close your account, or delay or refuse a transaction, if we reasonably believe you have broken these Terms, if required by law or a regulator, or to protect you or other users. You may close your account at any time from the app or by contacting us; any pending transactions will be completed or reversed first.</p>
    </section>

    <section id="t10" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>10. Limitation of liability</h2>
    <p style={{ margin: "0" }}>{"To the extent permitted by law, the Service is provided \"as is\" and Clivo is not liable for indirect or consequential losses, losses caused by third-party exchanges, banks or networks, or losses from market movements. Our total liability to you is limited to [LIABILITY CAP]. Nothing in these Terms limits liability that cannot be limited by law."}</p>
    </section>

    <section id="t11" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>11. Governing law</h2>
    <p style={{ margin: "0" }}>These Terms are governed by the laws of the Federal Republic of Nigeria. Disputes will be resolved by [DISPUTE PROCESS, E.G. ARBITRATION IN LAGOS / THE COURTS OF LAGOS STATE].</p>
    </section>

    <section id="t12" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>12. Changes and contact</h2>
    <p style={{ margin: "0" }}>{"We may update these Terms from time to time. If changes are significant, we'll let you know in the app or by email before they take effect. Questions? Email [SUPPORT EMAIL] or visit our "}<Link href="/contact" style={{ color: "#0a7d42" }}>contact page</Link>.</p>
    </section>
    </article>
    </div>

    <Footer />

    <BackToTop />

    </div>
  );
}
