import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = { title: "Privacy Policy — Clivo" };

export default function PrivacyPage() {
  return (
    <div id="top" className="page page-privacy" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", color: "#1d1e24", background: "#f1f1f4", minHeight: "100vh" }}>

    <div style={{ padding: "20px 20px 0" }}>
    <div style={{ position: "relative", zIndex: "20", overflow: "hidden", isolation: "isolate", background: "#f8f8fa", border: "1px solid #e4e4e9", borderRadius: "32px", paddingTop: "88px" }}>
    <svg aria-hidden="true" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMin slice" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", zIndex: "-1", pointerEvents: "none" }}><g fill="none" stroke="#e2e2e7" strokeWidth="1.5"><path d="M0 140H220L260 180V320H420M120 0V90L160 130H300M1440 180H1220L1180 220V360H1040M1320 0V100L1280 140H1120M560 0V60L600 100H700M880 0V70L840 110H760"></path><circle cx="420" cy="320" r="4"></circle><circle cx="300" cy="130" r="4"></circle><circle cx="1040" cy="360" r="4"></circle><circle cx="1120" cy="140" r="4"></circle><circle cx="700" cy="100" r="4"></circle><circle cx="760" cy="110" r="4"></circle><rect x="239" y="239" width="22" height="22" rx="4" fill="#ffffff"></rect><rect x="1169" y="279" width="22" height="22" rx="4" fill="#ffffff"></rect></g></svg>

    <Header active="" ctaHref="/#download" />

    <section style={{ padding: "48px 24px 72px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px" }}>
    <span style={{ fontSize: "14px", color: "#6b6d78", border: "1px solid #e1e1e7", background: "#ffffff", padding: "6px 14px", borderRadius: "999px" }}>Legal</span>
    <h1 style={{ margin: "0", fontSize: "56px", lineHeight: "1.12", fontWeight: "400", letterSpacing: "-1.5px" }}>Privacy Policy</h1>
    <p style={{ margin: "0", fontSize: "16px", color: "#6b6d78" }}>Last updated: [DATE]</p>
    </section>
    </div>
    </div>

    <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "48px 24px 80px", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
    <nav aria-label="On this page" style={{ flex: "1 1 240px", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "20px", padding: "24px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px" }}>
    <span style={{ fontWeight: "500", marginBottom: "4px" }}>On this page</span>
    <a href="#p1" style={{ textDecoration: "none", color: "#6b6d78" }}>1. Who we are</a>
    <a href="#p2" style={{ textDecoration: "none", color: "#6b6d78" }}>2. Information we collect</a>
    <a href="#p3" style={{ textDecoration: "none", color: "#6b6d78" }}>3. How we use it</a>
    <a href="#p4" style={{ textDecoration: "none", color: "#6b6d78" }}>4. Who we share it with</a>
    <a href="#p5" style={{ textDecoration: "none", color: "#6b6d78" }}>5. International transfers</a>
    <a href="#p6" style={{ textDecoration: "none", color: "#6b6d78" }}>6. How long we keep it</a>
    <a href="#p7" style={{ textDecoration: "none", color: "#6b6d78" }}>7. Security</a>
    <a href="#p8" style={{ textDecoration: "none", color: "#6b6d78" }}>8. Your rights</a>
    <a href="#p9" style={{ textDecoration: "none", color: "#6b6d78" }}>9. Children</a>
    <a href="#p10" style={{ textDecoration: "none", color: "#6b6d78" }}>10. Changes and contact</a>
    </nav>

    <article style={{ flex: "999 1 560px", minWidth: "0", background: "#ffffff", border: "1px solid #e4e4e9", borderRadius: "24px", padding: "44px", display: "flex", flexDirection: "column", gap: "36px", fontSize: "16px", lineHeight: "1.75", color: "#5d5f6b" }}>
    <p style={{ margin: "0", background: "#f8f8fa", border: "1px solid #e4e4e9", borderRadius: "12px", padding: "14px 18px", fontSize: "14px", color: "#1d1e24" }}>Draft template — confirm it matches what the app actually collects and have it reviewed for NDPA compliance before publishing.</p>

    <section id="p1" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>1. Who we are</h2>
    <p style={{ margin: "0" }}>Clivo is operated by [LEGAL COMPANY NAME], [REGISTERED ADDRESS]. We are the data controller for personal information collected through the Clivo app and website. This policy explains what we collect, why, and the choices you have, in line with the Nigeria Data Protection Act 2023 and other applicable laws.</p>
    </section>

    <section id="p2" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>2. Information we collect</h2>
    <ul style={{ margin: "0", paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "8px" }}>
    <li><strong style={{ color: "#1d1e24", fontWeight: "500" }}>Account details:</strong> name, email, phone number, date of birth and password or PIN (stored securely).</li>
    <li><strong style={{ color: "#1d1e24", fontWeight: "500" }}>Identity verification:</strong> BVN or NIN, ID documents and selfie images where required for KYC.</li>
    <li><strong style={{ color: "#1d1e24", fontWeight: "500" }}>Exchange connections:</strong> the exchanges you link, connection credentials [E.G. API KEYS] and your balances on them.</li>
    <li><strong style={{ color: "#1d1e24", fontWeight: "500" }}>Transactions:</strong> conversions, amounts, rates, and recipient bank names, account numbers and account names.</li>
    <li><strong style={{ color: "#1d1e24", fontWeight: "500" }}>Device and usage:</strong> device type, OS, IP address, app version, crash logs and how you use the app.</li>
    <li><strong style={{ color: "#1d1e24", fontWeight: "500" }}>Support:</strong> messages you send us and any details you include.</li>
    </ul>
    </section>

    <section id="p3" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>3. How we use it</h2>
    <p style={{ margin: "0" }}>We use your information to create and secure your account, verify your identity, show your balances, carry out conversions and payouts, prevent fraud and money laundering, meet our legal and regulatory obligations, answer support requests, and improve the Service. We rely on performance of our contract with you, legal obligations, our legitimate interests in running a safe service, and your consent where required (for example, marketing messages, which you can switch off at any time).</p>
    </section>

    <section id="p4" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>4. Who we share it with</h2>
    <p style={{ margin: "0" }}>We do not sell your personal information. We share it only with: the exchanges you connect, to carry out your instructions; banks and payment partners that process payouts; identity verification providers; cloud hosting, analytics and support tools that work on our behalf [LIST PROVIDERS]; and regulators, law enforcement or courts when the law requires it.</p>
    </section>

    <section id="p5" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>5. International transfers</h2>
    <p style={{ margin: "0" }}>Some of our providers may process data outside Nigeria. When that happens we use safeguards recognised under Nigerian data protection law to keep your information protected.</p>
    </section>

    <section id="p6" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>6. How long we keep it</h2>
    <p style={{ margin: "0" }}>{"We keep your information while your account is open and afterwards for as long as the law requires — for example, transaction and KYC records for [RETENTION PERIOD]. When it's no longer needed we delete or anonymise it."}</p>
    </section>

    <section id="p7" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>7. Security</h2>
    <p style={{ margin: "0" }}>We protect your data with [SECURITY MEASURES, E.G. ENCRYPTION IN TRANSIT AND AT REST, ACCESS CONTROLS, ENCRYPTED STORAGE OF EXCHANGE CREDENTIALS]. No system is perfectly secure, so please keep your device and PIN safe and never share your login details.</p>
    </section>

    <section id="p8" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>8. Your rights</h2>
    <p style={{ margin: "0" }}>{"You can ask to access, correct or delete your information, object to or restrict certain processing, withdraw consent, or receive a copy of your data. Email [PRIVACY EMAIL] and we'll respond within the time the law requires. Some data we must keep for legal reasons even after you close your account. If you're unhappy with how we handle your data, you can complain to the Nigeria Data Protection Commission."}</p>
    </section>

    <section id="p9" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>9. Children</h2>
    <p style={{ margin: "0" }}>{"Clivo is not for anyone under 18, and we don't knowingly collect information from children."}</p>
    </section>

    <section id="p10" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "500", color: "#1d1e24" }}>10. Changes and contact</h2>
    <p style={{ margin: "0" }}>{"We'll post any updates here and tell you in the app if the changes are significant. For privacy questions, contact our Data Protection Officer at [PRIVACY EMAIL], or reach us through our "}<Link href="/contact" style={{ color: "#0a7d42" }}>contact page</Link>.</p>
    </section>
    </article>
    </div>

    <Footer />

    <BackToTop />

    </div>
  );
}
