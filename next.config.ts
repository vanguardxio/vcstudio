import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ─── SVG HARDWARE ACCELERATION ──────────────────────────────────────────
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // ─── ENTERPRISE SECURITY HEADERS (THE SHIELD) ───────────────────────────
  async headers() {
    return [
      {
        // Apply these headers to ALL routes in the application
        source: '/(.*)',
        headers: [
          // 1. HSTS (Strict-Transport-Security) - Forces HTTPS for 2 years, includes subdomains, and preloads.
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          // 2. Clickjacking Protection - Completely prevents any other site from putting Vaulltcore in an iframe.
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // 3. COOP (Cross-Origin-Opener-Policy) - Isolates your app's memory from malicious pop-ups.
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          // 4. MIME Type Sniffing Protection - Stops browsers from misinterpreting files as executable scripts.
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // 5. Referrer Policy - Prevents leaking your URLs/Tokens to external sites when clicking links.
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // 6. Content Security Policy (CSP) - The ultimate XSS shield.
          // Note: 'unsafe-inline' is required for Next.js hydration and Framer Motion animations.
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https:; font-src 'self' data: https:; frame-ancestors 'none';",
          }
        ],
      },
    ];
  },
};

export default nextConfig;
