export default function Faq() {
  return (
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
    <a href="/contact" style={{ alignSelf: "flex-start", textDecoration: "none", background: "#ffffff", color: "#1d1e24", padding: "12px 18px", borderRadius: "10px", fontSize: "15px", fontWeight: "500" }}>Contact support</a>
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
  );
}
