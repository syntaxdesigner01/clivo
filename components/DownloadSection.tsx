export default function DownloadSection() {
  return (
    <section id="download" aria-labelledby="dl-h" style={{ padding: "200px 20px 80px", overflowX: "clip" }}>
    <div style={{ position: "relative", isolation: "isolate", maxWidth: "1120px", margin: "0 auto", background: "#1d1e24", borderRadius: "32px", padding: "0 56px", display: "flex", alignItems: "center", minHeight: "440px" }}>
    <div aria-hidden="true" style={{ position: "absolute", inset: "0", borderRadius: "32px", overflow: "hidden", zIndex: "-1", pointerEvents: "none" }}><svg viewBox="0 0 1120 480" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}><g fill="none" stroke="#2a2b33" strokeWidth="1.5"><path d="M0 90H160L200 130V260H320M1120 70H940L900 110V230H760M0 400H120L160 360H260M1120 420H980L940 380"></path><circle cx="320" cy="260" r="4"></circle><circle cx="760" cy="230" r="4"></circle><circle cx="260" cy="360" r="4"></circle></g></svg></div>
    <div style={{ position: "relative", zIndex: "1", flex: "0 1 540px", minWidth: "0", padding: "80px 0", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "18px" }}>
    <span style={{ fontSize: "14px", color: "#b9bac4", border: "1px solid #3a3b45", padding: "6px 14px", borderRadius: "999px" }}>Get the app</span>
    <h2 id="dl-h" style={{ margin: "0", fontSize: "46px", lineHeight: "1.15", fontWeight: "400", letterSpacing: "-1px", color: "#ffffff" }}>Stop Juggling Apps.<br />Start Spending Your Crypto.</h2>
    <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#b9bac4", maxWidth: "440px" }}>Download Clivo and link your first exchange in minutes. Your coins, one balance, cash in any bank account.</p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "8px" }}>
    <a href="[APP STORE LINK]" style={{ textDecoration: "none", background: "#ffffff", color: "#1d1e24", padding: "14px 22px", borderRadius: "10px", fontWeight: "500" }}>App Store</a>
    <a href="[GOOGLE PLAY LINK]" style={{ textDecoration: "none", background: "#10b961", color: "#0b2a19", padding: "14px 22px", borderRadius: "10px", fontWeight: "500" }}>Google Play</a>
    </div>
    </div>

    <div className="phone-rise" aria-hidden="true" style={{ position: "absolute", right: "-200px", bottom: "0", width: "1000px", height: "1000px", paddingRight: "390px", boxSizing: "border-box", display: "flex", justifyContent: "flex-end", alignItems: "flex-end", pointerEvents: "none", overflow: "hidden", WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 62%, transparent 96%)", maskImage: "linear-gradient(to bottom, #000 0%, #000 62%, transparent 96%)" }}>
    <div style={{ width: "370px", height: "640px", background: "#2c2d36", borderRadius: "58px 58px 0 0", padding: "14px 14px 0", boxShadow: "0 30px 80px rgba(0,0,0,0.35), 0 -20px 60px rgba(16,185,97,0.12)", transform: "translateY(30px) rotate(20deg)", transformOrigin: "50% 100%", zoom: "1.12" }}>
    <div style={{ height: "100%", background: "#f8f8fa", borderRadius: "38px 38px 0 0", padding: "18px 16px 0", display: "flex", flexDirection: "column", gap: "10px", overflow: "hidden", color: "#1d1e24" }}>
    <div style={{ alignSelf: "center", width: "84px", height: "22px", borderRadius: "999px", background: "#1d1e24", marginBottom: "8px" }}></div>
    <div style={{ fontSize: "20px", fontWeight: "500", lineHeight: "1.2", marginBottom: "4px" }}>Convert Crypto<br />to Fiat</div>
    <div style={{ background: "#ffffff", border: "1px solid #ececf1", borderRadius: "16px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "8px" }}>
    <span style={{ fontSize: "11px", color: "#6b6d78" }}>From</span>
    <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontSize: "19px", fontWeight: "500" }}>4.7643222</span><span style={{ display: "flex", alignItems: "center", gap: "6px", background: "#f1f1f4", borderRadius: "999px", padding: "3px 10px 3px 3px", fontSize: "12px", fontWeight: "500" }}><span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#1d1e24", color: "#ffffff", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>₿</span>BTC</span></span>
    <span style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}><span style={{ background: "#f1f1f4", borderRadius: "999px", padding: "3px 10px" }}>Binance</span><span style={{ display: "flex", gap: "5px" }}><span style={{ background: "#f1f1f4", borderRadius: "6px", padding: "3px 7px" }}>50%</span><span style={{ background: "#f1f1f4", borderRadius: "6px", padding: "3px 7px" }}>Max</span></span></span>
    </div>
    <div style={{ alignSelf: "center", width: "30px", height: "30px", borderRadius: "50%", background: "#ffffff", border: "1px solid #ececf1", margin: "-8px 0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", position: "relative" }}>⇅</div>
    <div style={{ background: "#ffffff", border: "1px solid #ececf1", borderRadius: "16px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "6px" }}>
    <span style={{ fontSize: "11px", color: "#6b6d78" }}>To</span>
    <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontSize: "19px", fontWeight: "500" }}>₦200,000</span><span style={{ background: "#f1f1f4", borderRadius: "999px", padding: "3px 10px", fontSize: "12px", fontWeight: "500" }}>Naira</span></span>
    </div>
    <div style={{ background: "#ffffff", border: "1px solid #ececf1", borderRadius: "16px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "6px" }}>
    <span style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}><span style={{ color: "#6b6d78" }}>Recipient</span><span style={{ color: "#0a7d42", fontWeight: "500" }}>Select beneficiary</span></span>
    <span style={{ fontSize: "15px", fontWeight: "500" }}>0123456789 · GT Bank</span>
    <span style={{ background: "#e9f8ef", color: "#0a6b39", fontSize: "11px", padding: "5px 8px", borderRadius: "6px" }}>✓ Account name verified</span>
    </div>
    <div style={{ background: "#10b961", color: "#0b2a19", textAlign: "center", fontWeight: "600", padding: "13px", borderRadius: "12px", fontSize: "14px" }}>Convert</div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
