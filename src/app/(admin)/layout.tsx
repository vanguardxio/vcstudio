import type { Metadata, Viewport } from "next";
import { Syne } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// ─── FONTS ── loaded via next/font = zero render-blocking ────────────────────
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: false, // secondary font — defer
});

// ─── METADATA ── Next.js App Router SEO ─────────────────────────────────────
export const metadata: Metadata = {
  // ── Core ──
  title: {
    default: "Vaulltcore — Premium DFY Infrastructure Engineering",
    template: "%s | Vaulltcore",
  },
  description:
    "Vaulltcore engineers, deploys, and transfers complete sovereign digital infrastructure. Zero SaaS. Zero lock-in. Sub-500ms globally. You own 100% of every system we build.",

  // ── Keywords ──
  keywords: [
    "infrastructure engineering",
    "DFY infrastructure",
    "zero SaaS",
    "sovereign infrastructure",
    "Cloudflare deployment",
    "Next.js infrastructure",
    "digital sovereignty",
    "performance engineering",
    "AI chatbot deployment",
    "SEO authority engineering",
    "WhatsApp API automation",
    "edge deployment",
    "web infrastructure Zimbabwe",
  ],

  // ── Authorship ──
  authors: [{ name: "Vaulltcore", url: "https://vaulltcore.com" }],
  creator: "Vaulltcore",
  publisher: "Vaulltcore",

  // ── Canonical ──
  alternates: {
    canonical: "https://vaulltcore.com",
  },

  // ── Open Graph ──
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaulltcore.com",
    siteName: "Vaulltcore",
    title: "Vaulltcore — Premium DFY Infrastructure Engineering",
    description:
      "Stop renting. Start owning. Vaulltcore engineers complete sovereign digital infrastructure — edge-native, enterprise-secured, handed over in full. Sub-500ms. Lighthouse 100.",
    images: [
      {
        url: "https://vaulltcore.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vaulltcore — Engineering Digital Sovereignty",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X Card ──
  twitter: {
    card: "summary_large_image",
    title: "Vaulltcore — Premium DFY Infrastructure Engineering",
    description:
      "Zero SaaS. Zero lock-in. 100% ownership. Sub-500ms global load. Lighthouse 100/100. Infrastructure that prints revenue.",
    images: ["https://vaulltcore.com/og-image.png"],
    creator: "@vaulltcore",
  },

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Verification (add tokens when available) ──
  // verification: { google: "YOUR_TOKEN" },

  // ── App metadata ──
  applicationName: "Vaulltcore",
  category: "technology",
  classification: "Business/Technology",

  // ── Icons ──
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },

  // ── Manifest ──
  manifest: "/site.webmanifest",
};

// ─── VIEWPORT ── separate export per Next.js 14+ spec ────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F5EE" },
    { media: "(prefers-color-scheme: dark)",  color: "#07080F" },
  ],
};

// ─── JSON-LD STRUCTURED DATA ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vaulltcore",
  url: "https://vaulltcore.com",
  logo: "https://vaulltcore.com/logo.png",
  description:
    "Premium Done-For-You digital infrastructure engineering firm. Zero SaaS dependency. Full ownership transfer.",
  founder: { "@type": "Person", name: "Knowledge Rumhizha" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Harare",
    addressCountry: "ZW",
  },
  areaServed: "Worldwide",
  serviceType: [
    "Infrastructure Design",
    "Refactor & Migration",
    "AI Chatbot Systems",
    "SEO Authority Engineering",
    "WhatsApp API Automation",
  ],
  priceRange: "$1,200 – $25,000+",
  contactPoint: {
    "@type": "ContactPoint",
    email: "build@vaulltcore.com",
    contactType: "sales",
  },
  sameAs: ["https://vaulltcore.com"],
};

// ─── ROOT LAYOUT ─────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* ── Preconnect — eliminates render-blocking network round-trips ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cal.com" />
        <link rel="dns-prefetch" href="https://cal.com" />

        {/* ── JSON-LD Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ── Security Headers via meta (supplement server headers) ── */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body
        className={`
          ${syne.variable} ${jetbrainsMono.variable}
          font-sans antialiased
          bg-[#F8F5EE] dark:bg-[#07080F]
          text-neutral-900 dark:text-white
          min-h-screen
        `}
      >
        {children}
      </body>
    </html>
  );
}
