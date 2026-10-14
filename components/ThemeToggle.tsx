"use client";

import { useEffect, useState } from "react";

const KEY = "clivo-theme";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem(KEY);
    } catch {}
    setDark(saved === "dark");
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    try {
      window.localStorage.setItem(KEY, next ? "dark" : "light");
    } catch {}
  };

  const isDark = dark;
  const isLight = !dark;
  const themeLabel = dark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button type="button" onClick={toggleTheme} aria-label={themeLabel} title={themeLabel} style={{ width: "44px", height: "44px", padding: "0", borderRadius: "12px", border: "1px solid #e4e4e9", background: "#ffffff", color: "#1d1e24", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
    {isLight && (<><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path></svg></>)}
    {isDark && (<><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg></>)}
    </button>
  );
}
