export default function BackToTop() {
  return (
    <a href="#top" className="to-top" aria-label="Back to top" title="Back to top" style={{ position: "fixed", right: "28px", bottom: "28px", zIndex: "60", width: "52px", height: "52px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 30px rgba(29,30,36,0.25)", textDecoration: "none" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"></path></svg></a>
  );
}
