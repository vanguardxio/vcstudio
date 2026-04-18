import type { Metadata } from "next";
import LandingClient from "./LandingClient"; 

// ─── UNSTOPPABLE SOVEREIGN METADATA ─────────────────────────────────────────
// This file runs on the server, so metadata works perfectly here.
export const metadata: Metadata = {
  title: "Vaulltcore | Sovereign Digital Infrastructure",
  description: "Elite Done-For-You infrastructure firm. Zero bloat, zero SaaS dependency, and unstoppable E2E encrypted performance.",
  keywords: ["sovereign web", "infrastructure firm", "zero saas", "high performance web", "enterprise architecture"],
  openGraph: {
    title: "Vaulltcore | Sovereign Digital Infrastructure",
    description: "Elite Done-For-You infrastructure firm. Zero SaaS dependency, 100% ownership.",
    url: "https://vaulltcore.com",
    siteName: "Vaulltcore",
    images: [
      {
        url: "/images/og-image.jpg", // Make sure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: "Vaulltcore Command Center",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaulltcore | Sovereign Digital Infrastructure",
    description: "Zero SaaS. Zero lock-in. 100% ownership.",
    images: ["/images/og-image.jpg"],
  },
};

// ─── THE SERVER RENDERER ────────────────────────────────────────────────────
export default function HomePage() {
  // We pass your heavy, animated client file through this lightweight server shell.
  return <LandingClient />;
}
