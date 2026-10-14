import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Outfit (SIL OFL 1.1), self-hosted so builds don't depend on Google Fonts.
const outfit = localFont({
  src: "./fonts/Outfit-Variable.woff2",
  weight: "100 900",
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clivo — All your exchanges, one balance you can spend",
  description:
    "Clivo connects your crypto exchanges, shows one balance, and converts your coins to Naira paid straight to your bank.",
};

// Applies the saved theme before first paint so dark mode doesn't flash.
const themeInit = `try{var t=localStorage.getItem('clivo-theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
