"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
// 1. ADDED 'Variants' to the import list below
import {
  LazyMotion, domAnimation, m, useScroll, useSpring, useReducedMotion, Variants
} from "framer-motion";
import {
  Server, Network, Globe, Activity, Database, ShieldCheck,
  Workflow, Terminal, Code, ArrowRightLeft, Bot, Zap, Search,
  LayoutDashboard, CheckCircle2, DollarSign, ShieldAlert, LifeBuoy,
  UserCog, FileJson, ServerCrash, ZapOff, Scale, Command, KeyRound,
  Binary, TrendingUp, Cpu as Microchip, ArrowDown, Check, X, Wallet,
  FileSignature, Unlock, Milestone, Gauge, TrendingDown, LineChart,
  ArrowRight, Triangle, ArrowRightCircle, Hexagon, Users, Sparkles,
  Shield, Lock, Cpu, BarChart3, Globe2, Layers
} from "lucide-react";

// ─── ANIMATION VARIANTS (FIXED FOR TYPESCRIPT) ──────────────────────────────

// The 'as const' ensures the array is treated as a fixed Easing Tuple, not number[]
const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.23, 1, 0.32, 1] as const 
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

// ─── DESIGN TOKENS ─────────────────────────────────────────────────────────
// bg: #F8F5EE (Light) | #07080F (Dark)
// gold: #B8892A (Light) | #D4AF37 (Dark)

// ─── ANIMATED SVG COMPONENTS ─────────────────────────────────────────────

/** Sovereign Vault — hero animated SVG */
export function SovereignVaultSVG() {
  return (
    <svg
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0D060" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <linearGradient id="silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D0DCE8" />
          <stop offset="100%" stopColor="#7B8794" />
        </linearGradient>
        <filter id="gold-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="soft-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="bg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="glass-panel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#A8B8C8" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      <ellipse cx="300" cy="250" rx="280" ry="220" fill="url(#bg-glow)" />

      <circle cx="300" cy="250" r="220" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="4 8" opacity="0.2">
        <animateTransform attributeName="transform" type="rotate" from="0 300 250" to="360 300 250" dur="60s" repeatCount="indefinite" />
      </circle>

      <circle cx="300" cy="250" r="160" stroke="#A8B8C8" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.18">
        <animateTransform attributeName="transform" type="rotate" from="0 300 250" to="-360 300 250" dur="40s" repeatCount="indefinite" />
      </circle>

      <circle cx="300" cy="250" r="100" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="6 5" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" from="0 300 250" to="360 300 250" dur="25s" repeatCount="indefinite" />
      </circle>

      <g opacity="0.25" stroke="#D4AF37" strokeWidth="0.8">
        <line x1="300" y1="90" x2="300" y2="195" />
        <line x1="440" y1="168" x2="355" y2="215" />
        <line x1="440" y1="332" x2="355" y2="285" />
        <line x1="300" y1="410" x2="300" y2="305" />
        <line x1="160" y1="332" x2="245" y2="285" />
        <line x1="160" y1="168" x2="245" y2="215" />
      </g>

      <g filter="url(#soft-glow)">
        <circle cx="300" cy="70" r="24" fill="url(#glass-panel)" stroke="#D4AF37" strokeWidth="1.5" />
        <circle cx="300" cy="70" r="24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
          <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
          <animate attributeName="r" values="24;34;24" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="300" y="67" textAnchor="middle" fill="#D4AF37" fontSize="7.5" fontFamily="monospace" fontWeight="600">CDN</text>
        <text x="300" y="76" textAnchor="middle" fill="#8B6914" fontSize="5.5" fontFamily="monospace">EDGE</text>
      </g>

      <g filter="url(#soft-glow)">
        <circle cx="448" cy="150" r="22" fill="url(#glass-panel)" stroke="#A8B8C8" strokeWidth="1.2" />
        <circle cx="448" cy="150" r="22" fill="none" stroke="#A8B8C8" strokeWidth="1">
          <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" begin="0.6s" repeatCount="indefinite" />
          <animate attributeName="r" values="22;31;22" dur="4s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <text x="448" y="147" textAnchor="middle" fill="#A8B8C8" fontSize="7.5" fontFamily="monospace" fontWeight="600">SEO</text>
        <text x="448" y="156" textAnchor="middle" fill="#7B8794" fontSize="5.5" fontFamily="monospace">AUTHORITY</text>
      </g>

      <g filter="url(#soft-glow)">
        <circle cx="448" cy="350" r="22" fill="url(#glass-panel)" stroke="#D4AF37" strokeWidth="1.2" />
        <circle cx="448" cy="350" r="22" fill="none" stroke="#D4AF37" strokeWidth="1">
          <animate attributeName="opacity" values="0.5;0;0.5" dur="3.5s" begin="1.2s" repeatCount="indefinite" />
          <animate attributeName="r" values="22;31;22" dur="3.5s" begin="1.2s" repeatCount="indefinite" />
        </circle>
        <text x="448" y="347" textAnchor="middle" fill="#D4AF37" fontSize="7.5" fontFamily="monospace" fontWeight="600">AI</text>
        <text x="448" y="356" textAnchor="middle" fill="#8B6914" fontSize="5.5" fontFamily="monospace">ENGINE</text>
      </g>

      <g filter="url(#soft-glow)">
        <circle cx="300" cy="430" r="24" fill="url(#glass-panel)" stroke="#A8B8C8" strokeWidth="1.5" />
        <circle cx="300" cy="430" r="24" fill="none" stroke="#A8B8C8" strokeWidth="1.2">
          <animate attributeName="opacity" values="0.5;0;0.5" dur="3.2s" begin="1.8s" repeatCount="indefinite" />
          <animate attributeName="r" values="24;34;24" dur="3.2s" begin="1.8s" repeatCount="indefinite" />
        </circle>
        <text x="300" y="427" textAnchor="middle" fill="#A8B8C8" fontSize="7.5" fontFamily="monospace" fontWeight="600">API</text>
        <text x="300" y="436" textAnchor="middle" fill="#7B8794" fontSize="5.5" fontFamily="monospace">BRIDGE</text>
      </g>

      <g filter="url(#soft-glow)">
        <circle cx="152" cy="350" r="22" fill="url(#glass-panel)" stroke="#D4AF37" strokeWidth="1.2" />
        <circle cx="152" cy="350" r="22" fill="none" stroke="#D4AF37" strokeWidth="1">
          <animate attributeName="opacity" values="0.5;0;0.5" dur="4.2s" begin="2.4s" repeatCount="indefinite" />
          <animate attributeName="r" values="22;31;22" dur="4.2s" begin="2.4s" repeatCount="indefinite" />
        </circle>
        <text x="152" y="347" textAnchor="middle" fill="#D4AF37" fontSize="7.5" fontFamily="monospace" fontWeight="600">SEC</text>
        <text x="152" y="356" textAnchor="middle" fill="#8B6914" fontSize="5.5" fontFamily="monospace">VAULT</text>
      </g>

      <g filter="url(#soft-glow)">
        <circle cx="152" cy="150" r="22" fill="url(#glass-panel)" stroke="#A8B8C8" strokeWidth="1.2" />
        <circle cx="152" cy="150" r="22" fill="none" stroke="#A8B8C8" strokeWidth="1">
          <animate attributeName="opacity" values="0.5;0;0.5" dur="3.8s" begin="0.3s" repeatCount="indefinite" />
          <animate attributeName="r" values="22;31;22" dur="3.8s" begin="0.3s" repeatCount="indefinite" />
        </circle>
        <text x="152" y="147" textAnchor="middle" fill="#A8B8C8" fontSize="7.5" fontFamily="monospace" fontWeight="600">GIT</text>
        <text x="152" y="156" textAnchor="middle" fill="#7B8794" fontSize="5.5" fontFamily="monospace">OWNED</text>
      </g>

      <g filter="url(#gold-glow)">
        <circle cx="300" cy="250" r="60" fill="url(#glass-panel)" stroke="#D4AF37" strokeWidth="2" />
        <circle cx="300" cy="250" r="52" fill="none" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="5 4" opacity="0.4">
          <animateTransform attributeName="transform" type="rotate" from="0 300 250" to="360 300 250" dur="12s" repeatCount="indefinite" />
        </circle>
      </g>
      <text x="300" y="245" textAnchor="middle" fill="#D4AF37" fontSize="13" fontFamily="sans-serif" fontWeight="800" letterSpacing="2">VAULT</text>
      <text x="300" y="261" textAnchor="middle" fill="#8B6914" fontSize="8" fontFamily="monospace">SOVEREIGN CORE</text>

      <g transform="translate(50, 472)">
        <rect width="500" height="18" rx="4" fill="url(#glass-panel)" stroke="#D4AF37" strokeWidth="0.4" strokeOpacity="0.3" />
        <circle cx="10" cy="9" r="3" fill="#22C55E">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <text x="20" y="13" fill="#22C55E" fontSize="6.5" fontFamily="monospace">SOVEREIGN ACTIVE</text>
        <text x="120" y="13" fill="#D4AF37" fontSize="6" fontFamily="monospace" opacity="0.5">|</text>
        <text x="128" y="13" fill="#7B8794" fontSize="6" fontFamily="monospace">300+ EDGE NODES · UPTIME 99.99% · ZERO SAAS DEPENDENCY</text>
      </g>
    </svg>
  );
  }
/** Architecture Blueprint SVG */
function ArchitectureSVG() {
  return (
    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="arch-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0D060" /><stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <filter id="arch-glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="flow-line" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#A8B8C8" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Center vertical flow */}
      <line x1="250" y1="30" x2="250" y2="370" stroke="url(#flow-line)" strokeWidth="1" opacity="0.4" />

      {/* Layer nodes */}
      {[
        { y: 50,  label: "CLIENT REQUEST",   sub: "Browser / Mobile / API",     color: "#7B8794",  stroke: "#A8B8C8" },
        { y: 120, label: "EDGE ROUTING",     sub: "Cloudflare WAF + CDN",        color: "#D4AF37",  stroke: "#D4AF37" },
        { y: 190, label: "APP RUNTIME",      sub: "Next.js / Astro / SvelteKit", color: "#D4AF37",  stroke: "#D4AF37" },
        { y: 260, label: "SERVERLESS FN",    sub: "CF Workers / Vercel Edge",    color: "#A8B8C8",  stroke: "#A8B8C8" },
        { y: 330, label: "DATA LAYER",       sub: "Supabase / PlanetScale / D1", color: "#D4AF37",  stroke: "#D4AF37" },
      ].map((layer, i) => (
        <g key={i}>
          <rect x="125" y={layer.y - 22} width="250" height="44" rx="8"
            fill="url(#glass-panel2)" stroke={layer.stroke} strokeWidth="1" strokeOpacity="0.4" />
          <text x="250" y={layer.y - 4} textAnchor="middle"
            fill={layer.color} fontSize="8" fontFamily="monospace" fontWeight="700" letterSpacing="1">
            {layer.label}
          </text>
          <text x="250" y={layer.y + 9} textAnchor="middle"
            fill="#7B8794" fontSize="6.5" fontFamily="monospace">
            {layer.sub}
          </text>
          {i < 4 && (
            <g>
              <path d="M246,{y2} L250,{y2p8} L254,{y2}"
                fill="none" stroke={layer.stroke} strokeWidth="1" opacity="0.5"
                transform={`translate(0,${layer.y + 22})`}>
                <path d={`M246,0 L250,8 L254,0`} fill="none" stroke={layer.stroke} strokeWidth="1" opacity="0.4" />
              </path>
              <circle cx="250" cy={layer.y + 35} r="2.5" fill={layer.color} opacity="0.6">
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              </circle>
            </g>
          )}
        </g>
      ))}

      {/* Downward flowing packets */}
      {[0, 1, 2, 3].map(i => (
        <circle key={i} r="2.5" fill="#D4AF37" opacity="0.8" filter="url(#arch-glow)">
          <animate attributeName="cy" values="30;370" dur={`${2 + i * 0.5}s`}
            begin={`${i * 0.6}s`} repeatCount="indefinite" calcMode="linear" />
          <animate attributeName="cx" values="250;250" dur={`${2 + i * 0.5}s`}
            begin={`${i * 0.6}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.9;0.9;0" dur={`${2 + i * 0.5}s`}
            begin={`${i * 0.6}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

/** Performance metrics animated SVG */
function PerfSVG({ label, before, after, color }: { label: string; before: string; after: string; color: string }) {
  return (
    <svg viewBox="0 0 260 140" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`bar-grad-${label}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="260" height="140" rx="8" fill="none" />

      {/* Legacy bar */}
      <text x="10" y="28" fill="#7B8794" fontSize="7" fontFamily="monospace" letterSpacing="1">LEGACY</text>
      <rect x="10" y="34" width="200" height="10" rx="4" fill="#1F2937" />
      <rect x="10" y="34" width="160" height="10" rx="4" fill="#EF4444" opacity="0.6">
        <animate attributeName="width" from="0" to="160" dur="1.2s" fill="freeze" />
      </rect>
      <text x="175" y="44" fill="#EF4444" fontSize="9" fontFamily="monospace" fontWeight="700"
        textDecoration="line-through" opacity="0.6">{before}</text>

      {/* Divider */}
      <line x1="10" y1="60" x2="250" y2="60" stroke={color} strokeWidth="0.5" opacity="0.2" />

      {/* Sovereign bar */}
      <text x="10" y="82" fill={color} fontSize="7" fontFamily="monospace" letterSpacing="1">SOVEREIGN</text>
      <rect x="10" y="88" width="200" height="10" rx="4" fill="#1F2937" />
      <rect x="10" y="88" width="200" height="10" rx="4" fill={`url(#bar-grad-${label})`}>
        <animate attributeName="width" from="0" to="200" dur="1.4s" begin="0.3s" fill="freeze" />
      </rect>
      <text x="215" y="98" fill={color} fontSize="13" fontFamily="monospace" fontWeight="800">{after}</text>

      {/* Business impact */}
      <rect x="10" y="112" width="240" height="20" rx="4" fill={color} fillOpacity="0.08" />
      <text x="18" y="126" fill={color} fontSize="6.5" fontFamily="monospace" fontWeight="600" letterSpacing="0.5">
        BUSINESS IMPACT: +32% CONVERSION LIFT
      </text>
    </svg>
  );
}

/** Domain scan form glass SVG decoration */
function ScanFormDecoration() {
  return (
    <svg viewBox="0 0 400 60" fill="none" className="absolute inset-x-0 bottom-0 w-full opacity-30" aria-hidden="true">
      <defs>
        <linearGradient id="scan-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect y="30" width="400" height="0.5" fill="url(#scan-line)">
        <animate attributeName="y" values="0;60;0" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

// ─── DATA ARRAYS ─────────────────────────────────────────────────────────────

const trustedTechnologies = [
  "Next.js", "Cloudflare Workers", "Vercel Edge", "Astro", "LangChain", "Supabase", "GitHub Actions", "Meilisearch"
];

const statusStrip = [
  { label: "Edge Nodes",  status: "NOMINAL",  dot: "bg-emerald-500", text: "text-emerald-400", shadow: "shadow-[0_0_8px_#22C55E]" },
  { label: "Authority",   status: "SYNCED",   dot: "bg-[#D4AF37]",   text: "text-[#D4AF37]",  shadow: "shadow-[0_0_8px_#D4AF37]" },
  { label: "Telemetry",   status: "ROUTING",  dot: "bg-[#D4AF37]",   text: "text-[#D4AF37]",  shadow: "shadow-[0_0_8px_#D4AF37]" },
  { label: "Regions",     status: "GLOBAL",   dot: "bg-emerald-500", text: "text-emerald-400", shadow: "shadow-[0_0_8px_#22C55E]" },
  { label: "Deployment",  status: "LOCKED",   dot: "bg-red-500",     text: "text-red-400",     shadow: "shadow-[0_0_8px_#EF4444]" },
  { label: "Integrity",   status: "VERIFIED", dot: "bg-emerald-500", text: "text-emerald-400", shadow: "shadow-[0_0_8px_#22C55E]" },
];

const performanceMetrics = [
  { label: "Page Load Speed",     before: "2–4s",     after: "<500ms",  icon: Gauge,       color: "#22C55E" },
  { label: "Infrastructure Cost", before: "Scaling",  after: "–60%",    icon: TrendingDown, color: "#D4AF37" },
  { label: "Search Indexation",   before: "Lagging",  after: "+150%",   icon: LineChart,   color: "#A8B8C8" },
  { label: "System Uptime",       before: "Variable", after: "99.99%",  icon: ShieldCheck, color: "#22C55E" },
];

const infrastructureModules = [
  { icon: Server,         title: "Infrastructure Design",   text: "Bespoke cloud architecture on Cloudflare, Vercel, and edge networks. Zero templates. Built to your scale." },
  { icon: ArrowRightLeft, title: "Refactor & Migration",    text: "Legacy rescue. WordPress, Heroku, shared hosting — extracted and redeployed at edge. Zero downtime protocol." },
  { icon: Network,        title: "SEO Authority",           text: "Technical SEO at infrastructure level. Core Web Vitals improvement, edge sitemaps, schema markup that compounds." },
  { icon: Bot,            title: "AI Chatbot Setup",        text: "Custom RAG chatbots on client infrastructure. No per-message SaaS fees. Trained on client data. Fully owned." },
  { icon: Activity,       title: "WhatsApp API Layer",      text: "Direct WhatsApp Business API integration. Instant response systems, lead pipelines, conversion automation. No SaaS middleman." },
  { icon: Globe,          title: "24/7 Automation",         text: "Automated monitoring, healing, backups, and CI/CD pipelines that run without human intervention." },
];

const caseStudies = [
  {
    title: "Safeguard — Security Firm ZW",
    platform: "Legacy Stack → Cloudflare Pages + Next.js",
    client: "Commercial security services, Zimbabwe",
    results: ["Page load: 2.4s → 480ms", "Performance score significantly improved", "WAF + Zero Trust security deployed"],
    color: "text-[#D4AF37]", border: "border-[#D4AF37]/30", hover: "hover:border-[#D4AF37]/60",
  },
  {
    title: "Zuva Fuels — Energy Sector ZW",
    platform: "Static Site → Edge CDN + CI/CD Pipeline",
    client: "Leading petroleum company, Zimbabwe",
    results: ["Zero downtime migration", "Technical SEO fully implemented", "90s automated push to production"],
    color: "text-[#A8B8C8]", border: "border-[#A8B8C8]/30", hover: "hover:border-[#A8B8C8]/60",
  },
];

const transferProtocol = [
  { label: "Repository Transfer", desc: "Full Git repositories with complete commit history and admin control." },
  { label: "Infrastructure Keys", desc: "All deployment credentials and environment variables — transferred in full." },
  { label: "Database Ownership",  desc: "Production databases migrated with unrestricted administrative access." },
  { label: "Documentation",       desc: "Architecture diagrams, Ops Runbooks, deployment instructions — nothing held back." },
];

const investmentDrivers = [
  "Current infrastructure condition and technical debt",
  "Migration complexity and number of systems",
  "SEO authority scope and indexing requirements",
  "AI chatbot training depth and data volume",
  "WhatsApp API and automation pipeline complexity",
  "Number of environments (staging, production, DR)",
];

const engagementSteps = [
  { step: "01", title: "Free Audit",          desc: "48-hour turnaround. Full 10-point technical report. No commitment required." },
  { step: "02", title: "Architecture",        desc: "We design the full sovereign infrastructure model tailored to your scale." },
  { step: "03", title: "Build & Migration",   desc: "Systems extracted from rented platforms and deployed into edge-native infrastructure." },
  { step: "04", title: "Ownership Handover",  desc: "All repositories, databases, runbooks, and credentials transferred in full." },
];

const faqItems = [
  {
    question: "What does Zero SaaS Lock-in actually mean?",
    answer: "Every system Vaulltcore builds runs on infrastructure you own entirely. No Webflow subscription. No Shopify dependency. No platform that can change pricing and hold your business hostage. The code is yours. The database is yours. The deployment is yours. Cancel Vaulltcore tomorrow — everything still runs.",
  },
  {
    question: "What is the free infrastructure audit?",
    answer: "A 10-point automated analysis of your current website or application. Lighthouse performance, Core Web Vitals, security headers, SSL/TLS grade, CDN detection, mobile performance, deployment method, DNS configuration, uptime history, and SEO signals. Delivered within 48 hours. Zero commitment.",
  },
  {
    question: "How does Vaulltcore achieve sub-1s load times?",
    answer: "By deploying on Cloudflare Pages or Vercel Edge — a global CDN with 300+ points of presence. Your site is served from the data centre closest to each visitor. Combined with static-first frameworks and aggressive caching, load times below 500ms are the standard, not the exception.",
  },
  {
    question: "Can my existing website be migrated without downtime?",
    answer: "Yes. Every Vaulltcore migration follows a zero-downtime protocol. We build the new stack in parallel on staging, run full regression testing, obtain your sign-off, then perform a DNS cutover under 60 seconds. The old site remains live until the new one is confirmed stable.",
  },
];

// ─── GLASS CARD ───────────────────────────────────────────────────────────────
function GlassCard({ children, className = "", hover = true, goldBorder = false }: {
  children: React.ReactNode; className?: string; hover?: boolean; goldBorder?: boolean;
}) {
  return (
    <div className={`
      relative rounded-2xl overflow-hidden
      bg-white/70 dark:bg-white/[0.03]
      backdrop-blur-xl
      border ${goldBorder
        ? "border-[#D4AF37]/40 dark:border-[#D4AF37]/30"
        : "border-white/60 dark:border-white/[0.06]"}
      shadow-[0_1px_1px_rgba(0,0,0,0.04),0_4px_24px_rgba(0,0,0,0.06)]
      dark:shadow-[0_4px_40px_rgba(0,0,0,0.4)]
      ${hover ? "transition-all duration-300 hover:shadow-[0_8px_40px_rgba(212,175,55,0.12)] hover:border-[#D4AF37]/30 dark:hover:border-[#D4AF37]/20" : ""}
      ${className}
    `}>
      {children}
    </div>
  );
}

// ─── SECTION HEADER ──────────────────────────────────────────────────────────
function SectionHeader({ title, description, icon: Icon, align = "left", id }: {
  title: string; description?: string; icon?: React.ElementType; align?: "left" | "center"; id?: string;
}) {
  return (
    <header className={`mb-12 pb-6 border-b border-black/[0.06] dark:border-white/[0.06] relative z-10 ${align === "center" ? "flex flex-col items-center text-center" : ""}`}>
      <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
        {Icon && <Icon className="w-6 h-6 text-[#B8892A] dark:text-[#D4AF37]" aria-hidden="true" />}
        <h2 id={id} className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white uppercase">{title}</h2>
      </div>
      {description && (
        <p className="text-sm font-mono text-neutral-500 dark:text-[#7B8794] max-w-3xl leading-relaxed">{description}</p>
      )}
    </header>
  );
}

// ─── VISUAL DIVIDER ───────────────────────────────────────────────────────────
function VisualDivider() {
  return (
    <div className="w-full py-16 md:py-20 flex items-center justify-center" aria-hidden="true">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 dark:via-[#D4AF37]/20 to-transparent" />
      <div className="mx-4 w-8 h-8 rounded-lg border border-[#D4AF37]/40 dark:border-[#D4AF37]/25
        bg-white/60 dark:bg-white/[0.03] backdrop-blur flex items-center justify-center">
        <Hexagon className="w-4 h-4 text-[#B8892A] dark:text-[#D4AF37]" />
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 dark:via-[#D4AF37]/20 to-transparent" />
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function VaulltcorePage() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [domain, setDomain] = useState("");
  const [scanning, setScanning] = useState(false);
  const [scanDone, setScanDone] = useState(false);

  //  THIS IS THE FIX: Added ': Variants' and 'as const' 
  const fade: Variants = {
    hidden:  { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1] as const // <-- 'as const' is required for Vercel
      } 
    },
  };
  
  const stagger: Variants = {
    hidden:  { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: shouldReduceMotion ? 0 : 0.12 
      } 
    },
  };

  const sectionIds = {
    doctrine: "sec-doctrine", architecture: "sec-architecture",
    systems: "sec-systems", cases: "sec-cases",
    audit: "sec-audit", pricing: "sec-pricing", faq: "sec-faq",
  };

  function handleScan(e: React.FormEvent) {
    e.preventDefault();
    if (!domain) return;
    setScanning(true);
    setTimeout(() => { setScanning(false); setScanDone(true); }, 2400);
  }

  // ── PERFORMANCE: inject preconnect hints on mount ──
  useEffect(() => {
    const hints = [
      { rel: "preconnect", href: "https://cal.com" },
      { rel: "dns-prefetch", href: "https://cal.com" },
    ];
    hints.forEach(({ rel, href }) => {
      if (!document.querySelector(`link[rel="${rel}"][href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = rel;
        link.href = href;
        document.head.appendChild(link);
      }
    });
  }, []);

  return (
    <LazyMotion features={domAnimation}>
       {/* ── SCROLL PROGRESS BAR ── */}
       {/* LEAVE THE REST OF YOUR CODE EXACTLY AS IT IS BELOW THIS LINE */}
      {/* ── SCROLL PROGRESS BAR ── */}
      <m.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8B6914] via-[#D4AF37] to-[#F0D060] origin-left z-[100]"
        aria-hidden="true"
      />

      {/* ── BOTTOM NAV PILL ── */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]
        bg-white/80 dark:bg-[#07080F]/90
        backdrop-blur-2xl
        border border-[#D4AF37]/25 dark:border-[#D4AF37]/20
        rounded-full px-5 py-2.5
        shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.6)]
        hidden lg:flex items-center gap-5"
        aria-label="Section navigation"
      >
        <div className="w-5 h-5 rounded border border-[#D4AF37]/40 flex items-center justify-center">
          <Hexagon className="w-3 h-3 text-[#B8892A] dark:text-[#D4AF37]" />
        </div>
        {Object.entries(sectionIds).map(([key, id]) => (
          <a key={key} href={`#${id}`}
            className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-[#7B8794] hover:text-[#B8892A] dark:hover:text-[#D4AF37] transition-colors">
            {key}
          </a>
        ))}
      </nav>

      <main className="
        relative min-h-screen
        bg-[#F8F5EE] dark:bg-[#07080F]
        text-neutral-900 dark:text-white
        font-sans overflow-hidden
        selection:bg-[#D4AF37]/20 selection:text-[#B8892A] dark:selection:text-[#D4AF37]
      ">

        {/* ── BACKGROUND SYSTEM ── */}
        {/* Grid */}
        <div className="fixed inset-0 pointer-events-none z-0
          bg-[linear-gradient(rgba(180,148,50,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(180,148,50,0.04)_1px,transparent_1px)]
          dark:bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)]
          bg-[size:4rem_4rem]" aria-hidden="true" />
        {/* Gold glow top-left */}
        <div className="fixed top-[-15%] left-[-5%] w-[55%] h-[55%]
          bg-[#D4AF37]/5 dark:bg-[#D4AF37]/6
          blur-[160px] rounded-full pointer-events-none z-0" aria-hidden="true" />
        {/* Silver glow bottom-right */}
        <div className="fixed bottom-[-15%] right-[-5%] w-[45%] h-[50%]
          bg-[#A8B8C8]/5 dark:bg-[#A8B8C8]/4
          blur-[160px] rounded-full pointer-events-none z-0" aria-hidden="true" />

        <div className="relative z-10 max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pb-24">

          {/* ══════════════════════════════════════════════════════════════
              §1  HERO
          ══════════════════════════════════════════════════════════════ */}
          <m.header
initial="hidden" animate="visible" variants={stagger}
className="pt-12 md:pt-20 grid lg:grid-cols-[1fr_1fr] gap-16 items-center min-h-[90vh]"
>
{/* Left: Copy */}
<div>
{/* ── WEAPON 1: INEVITABILITY HOOK ── */}
<m.div variants={fade} className="mb-6">
  <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg
    bg-red-950/60 dark:bg-red-950/80
    border border-red-500/30
    backdrop-blur shadow-[0_0_20px_rgba(239,68,68,0.15)]">
    <span className="flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_#EF4444]" />
      <span className="text-[10px] font-mono font-bold tracking-widest text-red-400 uppercase">
        Revenue Warning
      </span>
    </span>
    <span className="w-px h-3 bg-red-500/30" />
    <span className="text-[10px] font-mono text-red-300/80 leading-relaxed">
      Every 100ms delay costs revenue.{" "}
      <span className="text-red-400 font-bold">Most businesses lose 30–50% of conversions</span>
      {" "}to slow, rented infrastructure.
      <span className="inline-block w-[2px] h-3 bg-red-400 ml-1 align-middle animate-pulse" aria-hidden="true" />
    </span>
  </div>
</m.div>

<m.div variants={fade} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
bg-white/70 dark:bg-white/[0.04]
border border-[#D4AF37]/30 dark:border-[#D4AF37]/25
backdrop-blur mb-8 shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_#22C55E]" />
<span className="text-[10px] font-mono font-bold tracking-widest text-[#B8892A] dark:text-[#D4AF37] uppercase">
Vaulltcore OS // Active Command
</span>
</m.div>

<m.h1 variants={fade} className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter mb-6 uppercase leading-[1.0]">
            Your Infrastructure.{" "}
            <br className="hidden md:block" />
            <span className="text-[#B8892A] dark:text-[#D4AF37]">Your Revenue.</span>{" "}
            <br className="hidden md:block" />
            <span className="text-neutral-900 dark:text-white">Your Control.</span>
          </m.h1>  

          <m.div variants={fade}  
            className="border-l-2 border-[#D4AF37]/50 pl-5 mb-8">  
            <p className="text-sm md:text-base font-mono text-neutral-500 dark:text-[#7B8794] leading-relaxed max-w-2xl">  
              Vaulltcore is a premium DFY infrastructure engineering firm. We do not rent  
              software — we architect, build, and deploy deterministic digital assets that  
              our clients own entirely.{" "}  
              <strong className="text-neutral-700 dark:text-white">Zero SaaS. Zero lock-in. Zero compromise.</strong>  
            </p>  
          </m.div>  

          {/* Hero capability chips */}  
          <m.div variants={fade} className="flex flex-wrap gap-3 mb-10">  
            {[  
              { icon: Code,           label: "Infrastructure" },  
              { icon: ArrowRightLeft, label: "Migration" },  
              { icon: Network,        label: "SEO Authority" },  
              { icon: Bot,            label: "AI Chatbot" },  
            ].map((sys, i) => (  
              <div key={i} className="flex items-center gap-2 px-3 py-2  
                bg-white/60 dark:bg-white/[0.04]  
                border border-black/[0.08] dark:border-white/[0.06]  
                rounded-lg backdrop-blur shadow-sm">  
                <sys.icon className="w-4 h-4 text-[#B8892A] dark:text-[#D4AF37]" />  
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-600 dark:text-white">{sys.label}</span>  
              </div>  
            ))}  
          </m.div>
              {/* ── DOMAIN SCAN FORM (glass) ── */}
              <m.div variants={fade}>
                <GlassCard className="p-1 mb-4" goldBorder>
                  <div className="relative">
                    <ScanFormDecoration />
                    <form onSubmit={handleScan} className="flex items-stretch gap-2 p-2">
                      <div className="flex-1 relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B8892A] dark:text-[#D4AF37] opacity-60" />
                        <input
                          type="text"
                          value={domain}
                          onChange={e => setDomain(e.target.value)}
                          placeholder="Enter domain (e.g. yourbusiness.com)"
                          className="w-full pl-10 pr-4 py-3 text-sm font-mono
                            bg-transparent
                            text-neutral-800 dark:text-white
                            placeholder-neutral-400 dark:placeholder-[#7B8794]
                            border-none outline-none rounded-lg"
                          aria-label="Domain to audit"
                        />
                      </div>
                      <button type="submit" disabled={scanning}
                        className="flex items-center gap-2 px-5 py-3 rounded-xl
                          bg-gradient-to-r from-[#D4AF37] to-[#8B6914]
                          text-white font-mono font-bold text-sm tracking-widest uppercase
                          shadow-[0_4px_20px_rgba(212,175,55,0.35)]
                          hover:shadow-[0_4px_30px_rgba(212,175,55,0.5)]
                          hover:from-[#F0D060] hover:to-[#D4AF37]
                          transition-all duration-300
                          disabled:opacity-60 shrink-0">
                        {scanning ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                            Scanning
                          </>
                        ) : (
                          <><Search className="w-4 h-4" /> Scan Domain</>
                        )}
                      </button>
                      <button type="button"
                        className="flex items-center gap-2 px-4 py-3 rounded-xl
                          bg-neutral-100 dark:bg-white/[0.04]
                          border border-black/[0.06] dark:border-white/[0.06]
                          text-neutral-600 dark:text-[#A8B8C8]
                          font-mono font-bold text-xs tracking-widest uppercase
                          hover:border-[#D4AF37]/40 transition-colors shrink-0">
                        <Zap className="w-4 h-4" /> Watch Breakdown
                      </button>
                    </form>
                  </div>
                </GlassCard>

                {scanDone && (
                  <m.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg
                      bg-emerald-50 dark:bg-emerald-500/10
                      border border-emerald-200 dark:border-emerald-500/20 text-sm font-mono text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" /> Audit initiated for <strong>{domain}</strong> · Report delivered in 48h
                  </m.div>
                )}

                <p className="text-xs font-mono text-neutral-400 dark:text-[#7B8794] mt-3">
                  <span className="text-[#B8892A] dark:text-[#D4AF37]">$5,000 diagnostic value</span>
                  {" "}· 100% Free · 48-hour turnaround · No commitment
                </p>
              </m.div>

              {/* Tech strip */}
              <m.div variants={fade} className="mt-10 pt-8 border-t border-black/[0.06] dark:border-white/[0.05]
                flex flex-wrap gap-6 opacity-50 select-none">
                {trustedTechnologies.map((tech, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-[#7B8794]">
                    <Triangle className="w-2.5 h-2.5 text-[#B8892A] dark:text-[#D4AF37] rotate-90" aria-hidden="true" />
                    {tech}
                  </span>
                ))}
              </m.div>
            </div>

            {/* Right: Hero SVG */}
            <m.div variants={fade} className="w-full aspect-square max-w-lg mx-auto lg:mx-0">
              <SovereignVaultSVG />
            </m.div>
          </m.header>

          {/* ══════════════════════════════════════════════════════════════
              §1b  PAIN AMPLIFIER — What your infrastructure is costing you
          ══════════════════════════════════════════════════════════════ */}
          <m.section
            aria-label="Hidden Revenue Loss"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-40px" }} variants={staggerContainer}
            className="mt-16 mb-10"
          >
            <m.div variants={fade} className="text-center mb-8">
              <p className="text-[10px] font-mono font-bold tracking-widest text-red-500 uppercase mb-3">
                ⚠ Hidden Revenue Loss
              </p>
              <h2 className="text-xl md:text-2xl font-extrabold tracking-tight uppercase text-neutral-900 dark:text-white">
                What your current infrastructure is costing you.
              </h2>
              <p className="text-xs font-mono text-neutral-500 dark:text-[#7B8794] mt-2">
                Most businesses do not have a website problem. They have an infrastructure problem.
              </p>
            </m.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: Gauge,
                  headline: "Slow sites silently kill conversions.",
                  body: "Every 1-second delay reduces conversions by 7%. A 3-second load time costs you 21% of your revenue — every day, invisibly, before a single visitor bounces.",
                  stat: "−7% conversions per second",
                  statColor: "text-red-500 dark:text-red-400",
                },
                {
                  icon: Lock,
                  headline: "SaaS platforms own your business.",
                  body: "Webflow, Shopify, Wix — your site, your data, your customer relationships live on someone else's servers. They set the prices. They write the terms. You absorb the risk.",
                  stat: "0% of the code is yours",
                  statColor: "text-red-500 dark:text-red-400",
                },
                {
                  icon: TrendingDown,
                  headline: "Poor infrastructure destroys rankings.",
                  body: "Core Web Vitals are a direct Google ranking signal. Slow, rented infrastructure fails LCP, CLS, and FID benchmarks — suppressing your organic search visibility permanently.",
                  stat: "Rankings lost daily",
                  statColor: "text-red-500 dark:text-red-400",
                },
              ].map((pain, i) => (
                <m.div key={i} variants={fade}>
                  <div className="relative h-full rounded-2xl overflow-hidden
                    bg-neutral-900 dark:bg-[#07080F]/90
                    border border-red-500/20
                    shadow-[inset_0_1px_0_rgba(239,68,68,0.08),0_4px_24px_rgba(0,0,0,0.15)]
                    dark:shadow-[inset_0_1px_0_rgba(239,68,68,0.08),0_4px_24px_rgba(0,0,0,0.3)]
                    p-6 flex flex-col gap-4
                    hover:border-red-500/30 transition-colors duration-300">
                    <div className="absolute top-0 left-0 w-12 h-12 pointer-events-none" aria-hidden="true">
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-red-500/50 to-transparent" />
                      <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-red-500/50 to-transparent" />
                    </div>
                    <pain.icon className="w-6 h-6 text-red-400 shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2 leading-snug">
                        {pain.headline}
                      </h3>
                      <p className="text-xs font-mono text-neutral-400 leading-relaxed">{pain.body}</p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-red-500/10">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${pain.statColor}`}>
                        {pain.stat}
                      </span>
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </m.section>

          {/* ══════════════════════════════════════════════════════════════
              §1c  WHO THIS IS FOR / NOT FOR
          ══════════════════════════════════════════════════════════════ */}
          <m.section
            aria-label="Who This Is For"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-40px" }} variants={staggerContainer}
            className="mb-16 md:mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* For */}
              <m.div variants={fade}>
                <GlassCard className="p-8 h-full border-[#D4AF37]/25 dark:border-[#D4AF37]/20">
                  <div className="flex items-center gap-2 mb-6">
                    <CheckCircle2 className="w-5 h-5 text-[#B8892A] dark:text-[#D4AF37]" aria-hidden="true" />
                    <h3 className="text-sm font-extrabold uppercase tracking-widest text-neutral-900 dark:text-white">Who This Is For</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { title: "Revenue-generating businesses", sub: "You have traction. Tech is now the ceiling, not the floor." },
                      { title: "Founders escaping SaaS dependency", sub: "You're tired of paying to operate your own business." },
                      { title: "Teams that want full ownership", sub: "Performance, control, and permanence — not a subscription." },
                      { title: "Operators scaling past shared infrastructure", sub: "Your current stack wasn't built for where you're going." },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-bold text-neutral-900 dark:text-white leading-snug">{item.title}</p>
                          <p className="text-xs font-mono text-neutral-500 dark:text-[#7B8794] mt-0.5">{item.sub}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </m.div>
              {/* Not For */}
              <m.div variants={fade}>
                <GlassCard className="p-8 h-full border-red-200/40 dark:border-red-500/15">
                  <div className="flex items-center gap-2 mb-6">
                    <X className="w-5 h-5 text-red-500" aria-hidden="true" />
                    <h3 className="text-sm font-extrabold uppercase tracking-widest text-neutral-900 dark:text-white">Who This Is Not For</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { title: "DIY builders", sub: "If you want to build it yourself, we're not the right fit." },
                      { title: "Low-budget projects", sub: "Sovereign infrastructure is a serious investment. Minimum engagements start at $1,500." },
                      { title: '"Just a website" requests', sub: "We build operating systems, not brochure sites." },
                      { title: "Anyone not ready to own their stack", sub: "This only works if you're committed to ownership." },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-bold text-neutral-900 dark:text-white leading-snug">{item.title}</p>
                          <p className="text-xs font-mono text-neutral-500 dark:text-[#7B8794] mt-0.5">{item.sub}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </m.div>
            </div>
          </m.section>

          {/* ══════════════════════════════════════════════════════════════
              §2  STATUS STRIP
          ══════════════════════════════════════════════════════════════ */}
          <m.section
            aria-label="System Telemetry Status"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 mb-6"
          >
            <GlassCard className="py-6 px-4 sm:px-8">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
                {statusStrip.map((s, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 text-center">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${s.dot} animate-pulse ${s.shadow}`} />
                      <span className={`text-[10px] font-mono font-bold tracking-widest ${s.text}`}>{s.status}</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 dark:text-[#7B8794]">{s.label}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </m.section>

          {/* ══════════════════════════════════════════════════════════════
              §3  PERFORMANCE METRICS
          ══════════════════════════════════════════════════════════════ */}
          <m.section
            aria-label="Performance Metrics"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-50px" }} variants={stagger}
            className="mb-24 md:mb-32"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {performanceMetrics.map((metric, i) => (
                <m.div key={i} variants={fade}>
                  <GlassCard className="overflow-hidden" goldBorder={i === 0 || i === 1}>
                    <div className="px-5 py-3 border-b border-black/[0.05] dark:border-white/[0.05]
                      bg-neutral-50/60 dark:bg-white/[0.02]
                      flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 dark:text-[#7B8794]">{metric.label}</span>
                      <metric.icon className="w-4 h-4" style={{ color: metric.color }} />
                    </div>
                    <div className="p-5">
                      <div className="flex items-end justify-between mb-3">
                        <div>
                          <span className="block text-[9px] font-mono text-neutral-400 dark:text-[#7B8794] uppercase tracking-widest mb-1">Legacy</span>
                          <span className="block text-lg font-bold text-red-400 dark:text-red-400 line-through opacity-60">{metric.before}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-300 dark:text-[#1F2937] mb-1" />
                        <div className="text-right">
                          <span className="block text-[9px] font-mono uppercase tracking-widest mb-1" style={{ color: metric.color }}>Sovereign</span>
                          <span className="block text-2xl font-bold" style={{ color: metric.color }}>{metric.after}</span>
                        </div>
                      </div>
                      {/* Mini progress bar */}
                      <div className="h-1 rounded-full bg-neutral-100 dark:bg-[#1F2937] overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-[1.5s]"
                          style={{ width: "85%", background: metric.color, opacity: 0.7 }} />
                      </div>
                    </div>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </m.section>

          {/* ══════════════════════════════════════════════════════════════
              §3b  WEAPON 2: HARD PROOF — MEASURED RESULTS
          ══════════════════════════════════════════════════════════════ */}
          <m.section
            aria-label="Measured Infrastructure Results"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-50px" }} variants={stagger}
            className="mb-24 md:mb-32"
          >
            <m.div variants={fade} className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-mono font-bold tracking-widest text-[#B8892A] dark:text-[#D4AF37] uppercase mb-2">
                  // Measured on real production deployments
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase text-neutral-900 dark:text-white">
                  Infrastructure Results
                </h2>
              </div>
              <span className="text-[10px] font-mono text-neutral-400 dark:text-[#7B8794]/60">
                Results based on production environments. Not estimates.
              </span>
            </m.div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {[
                { metric: "Load Time",       before: "3.2s",  after: "0.4s",  delta: "−88%",  deltaColor: "text-emerald-400", barBefore: 100, barAfter: 12,  color: "#22C55E", icon: Gauge },
                { metric: "SEO Score",       before: "42",    after: "98",    delta: "+133%", deltaColor: "text-[#D4AF37]",   barBefore: 43,  barAfter: 100, color: "#D4AF37", icon: TrendingUp },
                { metric: "Conversion Rate", before: "1.8%",  after: "4.9%",  delta: "+172%", deltaColor: "text-emerald-400", barBefore: 37,  barAfter: 100, color: "#22C55E", icon: BarChart3 },
                { metric: "Bounce Rate",     before: "68%",   after: "22%",   delta: "−68%",  deltaColor: "text-emerald-400", barBefore: 100, barAfter: 32,  color: "#A8B8C8", icon: TrendingDown },
              ].map((r, i) => (
                <m.div key={i} variants={fade}>
                  <GlassCard className="overflow-hidden h-full" goldBorder={i === 0 || i === 2}>
                    <div className="px-5 py-3 border-b border-black/[0.05] dark:border-white/[0.05]
                      bg-neutral-50/60 dark:bg-white/[0.02] flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 dark:text-[#7B8794]">{r.metric}</span>
                      <r.icon className="w-4 h-4" style={{ color: r.color }} aria-hidden="true" />
                    </div>
                    <div className="p-5 space-y-4">
                      {/* Before bar */}
                      <div>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-[9px] font-mono uppercase tracking-widest text-red-400">Before</span>
                          <span className="text-sm font-bold font-mono text-red-400 line-through opacity-70">{r.before}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-neutral-100 dark:bg-[#1F2937] overflow-hidden">
                          <div className="h-full rounded-full bg-red-500/50 transition-all duration-[1.2s]"
                            style={{ width: `${r.barBefore}%` }} />
                        </div>
                      </div>
                      {/* After bar */}
                      <div>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-[9px] font-mono uppercase tracking-widest" style={{ color: r.color }}>After</span>
                          <span className="text-xl font-extrabold font-mono" style={{ color: r.color }}>{r.after}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-neutral-100 dark:bg-[#1F2937] overflow-hidden">
                          <div className="h-full rounded-full transition-all duration-[1.6s] delay-300"
                            style={{ width: `${r.barAfter}%`, background: r.color, opacity: 0.8 }} />
                        </div>
                      </div>
                      {/* Delta badge */}
                      <div className="pt-1 border-t border-black/[0.05] dark:border-white/[0.04] flex items-center justify-between">
                        <span className="text-[9px] font-mono text-neutral-400 dark:text-[#7B8794]/60 uppercase tracking-widest">Delta</span>
                        <span className={`text-sm font-extrabold font-mono ${r.deltaColor}`}>{r.delta}</span>
                      </div>
                    </div>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </m.section>

          {/* ══════════════════════════════════════════════════════════════
              SECTIONS CONTAINER
          ══════════════════════════════════════════════════════════════ */}
          <div className="space-y-24 md:space-y-32">

            {/* §4  DOCTRINE */}
            <m.section id={sectionIds.doctrine}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }} variants={stagger}>

              <SectionHeader
                title="The Fragility of Rented Systems"
                description="Businesses today operate inside a fragile digital environment where critical systems are controlled by third-party platforms."
                icon={ServerCrash}
                id={sectionIds.doctrine}
              />

              {/* Two contrast cards */}
              <div className="grid lg:grid-cols-2 gap-6 mb-12">
                <m.div variants={fade}>
                  <GlassCard className="p-8 md:p-10 h-full border-red-200/50 dark:border-red-500/15">
                    <ZapOff className="w-8 h-8 text-red-500 mb-5" />
                    <h3 className="text-lg font-bold uppercase tracking-widest text-red-500 mb-4">Platform Dependency</h3>
                    <p className="text-sm font-mono text-neutral-500 dark:text-[#7B8794] leading-relaxed">
                      Websites hosted on proprietary builders, marketing automation inside subscription software,
                      customer data distributed across disconnected SaaS tools. Ownership becomes diluted.
                      When platforms change policies or increase pricing, businesses discover their digital
                      operations were never truly theirs.
                    </p>
                  </GlassCard>
                </m.div>

                <m.div variants={fade}>
                  <GlassCard className="p-8 md:p-10 h-full" goldBorder>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.04] to-transparent rounded-2xl pointer-events-none" />
                    <ShieldCheck className="w-8 h-8 text-[#B8892A] dark:text-[#D4AF37] mb-5 relative z-10" />
                    <h3 className="text-lg font-bold uppercase tracking-widest text-[#B8892A] dark:text-[#D4AF37] mb-4 relative z-10">Sovereign Infrastructure</h3>
                    <p className="text-sm font-mono text-neutral-600 dark:text-white leading-relaxed relative z-10">
                      Vaulltcore engineers sovereign infrastructure. We design deterministic systems that scale
                      predictably, removing external dependencies and platform risk entirely. By transitioning
                      to client-owned codebases, ownership becomes the ultimate competitive advantage.
                    </p>
                  </GlassCard>
                </m.div>
              </div>

              {/* Why we exist */}
              <m.div variants={fade}>
                <GlassCard className="p-8">
                  <h4 className="text-[10px] font-mono font-bold tracking-widest text-[#B8892A] dark:text-[#D4AF37] uppercase mb-6 flex items-center gap-2">
                    <Scale className="w-4 h-4" /> Why Vaulltcore Exists
                  </h4>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { label: "Traditional Agencies", text: "Focus on design and creative campaigns built on rented platforms.", accent: false },
                      { label: "Development Shops",    text: "Execute features and isolated applications without owning the infrastructure.", accent: false },
                      { label: "Vaulltcore",           text: "Specialises exclusively in DFY infrastructure engineering — the sovereign foundation your entire business operates upon.", accent: true },
                    ].map((col, i) => (
                      <div key={i} className={`space-y-2 ${col.accent ? "border-l-2 border-[#D4AF37]/50 pl-4" : ""}`}>
                        <span className={`block text-[10px] uppercase tracking-widest font-bold ${col.accent ? "text-[#B8892A] dark:text-[#D4AF37]" : "text-neutral-500 dark:text-white"}`}>{col.label}</span>
                        <p className="text-sm font-mono text-neutral-500 dark:text-[#7B8794] leading-relaxed">{col.text}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </m.div>

              {/* Doctrine text + principles */}
              <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 mt-12">
                <m.div variants={fade} className="flex flex-col justify-center">
                  <Command className="w-10 h-10 text-[#B8892A] dark:text-[#D4AF37] mb-6 opacity-80" />
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase mb-6 text-neutral-900 dark:text-white">
                    The Sovereign Web Doctrine
                  </h2>
                  <div className="space-y-5 border-l-2 border-[#D4AF37]/40 pl-5">
                    <p className="text-sm font-mono text-neutral-500 dark:text-[#7B8794] leading-relaxed">The early web was built on ownership. You owned your servers. You owned your software.</p>
                    <p className="text-sm font-mono text-red-500 font-bold">The SaaS era reversed this model.</p>
                    <p className="text-sm font-mono text-neutral-500 dark:text-[#7B8794] leading-relaxed">Businesses now rent their digital infrastructure from centralised platforms — at prices those platforms control.</p>
                    <p className="text-sm font-mono text-[#B8892A] dark:text-[#D4AF37] font-bold">Vaulltcore restores the original principle: Digital systems should be owned, not rented.</p>
                  </div>
                </m.div>

                <m.div variants={fade} className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: KeyRound,   title: "1 — Infrastructure Ownership",  text: "Clients must own their systems completely. No leased foundations. No landlord infrastructure." },
                    { icon: Binary,     title: "2 — Deterministic Architecture", text: "No hidden dependencies. Systems execute predictably at any scale, any time." },
                    { icon: ZapOff,     title: "3 — Platform Independence",     text: "Businesses should never be trapped inside closed SaaS ecosystems that change pricing overnight." },
                    { icon: TrendingUp, title: "4 — Compounding Authority",     text: "Infrastructure should compound digital value, search equity, and performance month over month." },
                  ].map((p, i) => (
                    <GlassCard key={i} className="p-6">
                      <p.icon className="w-5 h-5 text-[#B8892A] dark:text-[#D4AF37] mb-4" />
                      <h4 className="text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-800 dark:text-white mb-2">{p.title}</h4>
                      <p className="text-xs font-mono text-neutral-500 dark:text-[#7B8794] leading-relaxed">{p.text}</p>
                    </GlassCard>
                  ))}
                </m.div>
              </div>
            </m.section>

            <VisualDivider />

            {/* §5  ARCHITECTURE */}
            <m.section id={sectionIds.architecture}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }} variants={stagger}>

              <SectionHeader
                title="Infrastructure Blueprint"
                description="The vertical integration of a completely sovereign, edge-deployed digital asset."
                icon={Microchip} align="center" id={sectionIds.architecture}
              />

              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <m.div variants={fade} className="aspect-[4/3]">
                  <ArchitectureSVG />
                </m.div>
                <m.div variants={fade} className="flex flex-col gap-4">
                  {[
                    { label: "Client Request",       sub: "Browser / Mobile / API",            color: "#A8B8C8", border: "border-[#A8B8C8]/30" },
                    { label: "Edge Routing",         sub: "Cloudflare WAF + CDN",              color: "#D4AF37", border: "border-[#D4AF37]/50" },
                    { label: "Application Runtime",  sub: "Next.js / Astro / SvelteKit",       color: "#D4AF37", border: "border-[#D4AF37]/40" },
                    { label: "Serverless Functions", sub: "CF Workers / Vercel Edge",          color: "#A8B8C8", border: "border-[#A8B8C8]/25" },
                    { label: "Data Layer",           sub: "Supabase / PlanetScale / D1",       color: "#D4AF37", border: "border-[#D4AF37]/35" },
                    { label: "AI Automation",        sub: "LangChain + Flowise RAG",           color: "#A8B8C8", border: "border-[#A8B8C8]/25" },
                  ].map((layer, i, arr) => (
                    <div key={i}>
                      <GlassCard className={`px-5 py-3 ${layer.border}`}>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-widest mb-0.5" style={{ color: layer.color }}>{layer.label}</h4>
                        <p className="text-[10px] font-mono text-neutral-400 dark:text-[#7B8794]">{layer.sub}</p>
                      </GlassCard>
                      {i < arr.length - 1 && (
                        <div className="flex justify-center py-1">
                          <ArrowDown className="w-4 h-4 text-[#B8892A] dark:text-[#D4AF37] opacity-40" />
                        </div>
                      )}
                    </div>
                  ))}
                </m.div>
              </div>
            </m.section>

            <VisualDivider />

            {/* ══════════════════════════════════════════════════════════════
                §5b  WEAPON 3: AUTHORITY DOMINATION
            ══════════════════════════════════════════════════════════════ */}
            <m.section
              aria-label="Why Vaulltcore"
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }} variants={stagger}>

              <m.div variants={fade}>
                <GlassCard className="relative overflow-hidden" hover={false}>
                  <div className="absolute inset-0 bg-neutral-900/[0.92] dark:bg-[#07080F]/80 rounded-2xl pointer-events-none" aria-hidden="true" />
                  <div className="absolute top-0 left-0 w-[60%] h-full bg-[#D4AF37]/[0.03] blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

                  <div className="relative z-10 p-10 md:p-14">
                    <p className="text-[10px] font-mono font-bold tracking-widest text-[#D4AF37]/60 uppercase mb-6">
                      // The Anti-SaaS Infrastructure Authority
                    </p>

                    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white mb-8 leading-tight">
                          You don't need another website.{" "}
                          <span className="text-[#D4AF37]">You need infrastructure that prints revenue.</span>
                        </h2>

                        <div className="space-y-5 border-l-2 border-[#D4AF37]/40 pl-5">
                          {[
                            { bold: "Traditional SaaS locks you in.", rest: " Every tool you subscribe to is a lever someone else controls. Pricing changes. APIs deprecate. Platforms sunset. You absorb the cost." },
                            { bold: "Agencies prioritize speed over ownership.", rest: " Beautiful sites built on Webflow, Shopify, and Squarespace are rented billboards. They don't compound. They don't scale. They hold your data hostage." },
                            { bold: "Most infrastructures are quietly bleeding.", rest: " Slow load times. Broken Core Web Vitals. Zero CDN coverage. Security headers missing. Each one is a measurable conversion loss — invisible until it's catastrophic." },
                          ].map((item, i) => (
                            <p key={i} className="text-sm font-mono text-[#7B8794] leading-relaxed">
                              <strong className="text-white">{item.bold}</strong>{item.rest}
                            </p>
                          ))}
                        </div>

                        <p className="mt-8 text-base font-mono font-bold text-[#D4AF37] border-l-2 border-[#D4AF37] pl-4">
                          Vaulltcore exists because the market chose convenience over control.<br />
                          We choose control. Every time.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { stat: "100%",    label: "Code ownership transferred" },
                          { stat: "0",       label: "SaaS dependencies remaining" },
                          { stat: "<500ms",  label: "Global load time, guaranteed" },
                          { stat: "99.99%",  label: "Uptime SLA on every deployment" },
                          { stat: "48h",     label: "Free audit turnaround" },
                          { stat: "∞",       label: "Your system runs after we leave" },
                        ].map((s, i) => (
                          <div key={i} className="flex items-center gap-5 px-5 py-3 rounded-xl
                            bg-white/[0.03] border border-white/[0.06]
                            hover:border-[#D4AF37]/30 transition-colors">
                            <span className="text-2xl font-extrabold font-mono text-[#D4AF37] w-20 shrink-0">{s.stat}</span>
                            <span className="text-xs font-mono text-[#7B8794] uppercase tracking-widest leading-relaxed">{s.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </m.div>
            </m.section>

            <VisualDivider />

            {/* ══════════════════════════════════════════════════════════════
                THE 5-LAYER SYSTEM
            ══════════════════════════════════════════════════════════════ */}
            <m.section
              aria-labelledby="five-layer-heading"
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }} variants={stagger}>

              <SectionHeader
                title="The 5-Layer System"
                description="Not five separate services. One integrated revenue infrastructure — where every layer compounds the performance of the others."
                icon={Layers}
              />

              <div className="space-y-4">
                {[
                  {
                    num: "01",
                    title: "Infrastructure Core",
                    color: "#D4AF37",
                    icon: Server,
                    items: ["Edge deployment on Cloudflare or Vercel", "CI/CD pipelines — automated, zero-touch", "Performance optimisation for real-world load", "DNS architecture and security hardening"],
                  },
                  {
                    num: "02",
                    title: "Refactor & Migration",
                    color: "#A8B8C8",
                    icon: ArrowRightLeft,
                    items: ["Extraction from SaaS platforms (WordPress, Webflow, Heroku)", "Zero-downtime migration protocol", "Legacy codebase rescue and modernisation", "Full regression testing before cutover"],
                  },
                  {
                    num: "03",
                    title: "SEO Authority Engine",
                    color: "#D4AF37",
                    icon: Network,
                    items: ["Technical SEO at infrastructure level", "Core Web Vitals improvement and monitoring", "Edge sitemap and indexing architecture", "Structured data and schema markup"],
                  },
                  {
                    num: "04",
                    title: "AI Chatbot System",
                    color: "#A8B8C8",
                    icon: Bot,
                    items: ["Custom RAG system trained on your business data", "Lead capture and qualification automation", "No per-message SaaS fees — fully owned", "Deployed on your infrastructure, not ours"],
                  },
                  {
                    num: "05",
                    title: "WhatsApp API Layer",
                    color: "#22C55E",
                    icon: Activity,
                    items: ["Direct WhatsApp Business API — no middleware", "Instant response and drip sequences", "Conversion automation and pipeline triggers", "Customer communication fully owned and controlled"],
                  },
                ].map((layer, i) => (
                  <m.div key={i} variants={fade}>
                    <GlassCard className="overflow-hidden" goldBorder={i === 0 || i === 2}>
                      <div className="flex flex-col md:flex-row">
                        {/* Number + title */}
                        <div className="md:w-64 shrink-0 p-6 md:p-8 border-b md:border-b-0 md:border-r border-black/[0.06] dark:border-white/[0.06] flex flex-row md:flex-col gap-4 items-center md:items-start">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl font-extrabold font-mono tabular-nums" style={{ color: layer.color }}>{layer.num}</span>
                            <layer.icon className="w-5 h-5" style={{ color: layer.color }} aria-hidden="true" />
                          </div>
                          <h3 className="text-sm font-extrabold uppercase tracking-widest text-neutral-900 dark:text-white">{layer.title}</h3>
                        </div>
                        {/* Items */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 p-6 md:p-8 flex-1">
                          {layer.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-sm font-mono text-neutral-600 dark:text-[#7B8794]">
                              <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: layer.color }} aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </GlassCard>
                  </m.div>
                ))}
              </div>
            </m.section>

            <VisualDivider />

            {/* §6  SYSTEMS */}
            <m.section id={sectionIds.systems}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }} variants={stagger}>

              <SectionHeader
                title="5 Core Services"
                description="Every service is a revenue engine and a cross-sell gateway. All delivered as complete, documented, fully-owned systems."
                icon={LayoutDashboard} id={sectionIds.systems}
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
                {infrastructureModules.map((item, i) => (
                  <m.div key={i} variants={fade}>
                    <GlassCard className="group p-8 h-full" goldBorder={i === 0 || i === 3}>
                      <div className="w-10 h-10 rounded-xl mb-5
                        bg-[#D4AF37]/10 dark:bg-[#D4AF37]/10
                        border border-[#D4AF37]/20
                        flex items-center justify-center
                        group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37]/40
                        transition-all duration-300">
                        <item.icon className="w-5 h-5 text-[#B8892A] dark:text-[#D4AF37] group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="text-sm font-bold tracking-widest uppercase text-neutral-800 dark:text-white mb-3">{item.title}</h3>
                      <p className="text-sm font-mono text-neutral-500 dark:text-[#7B8794] leading-relaxed">{item.text}</p>
                    </GlassCard>
                  </m.div>
                ))}
              </div>

              {/* Case Studies */}
              <div id={sectionIds.cases} className="pt-12 border-t border-black/[0.06] dark:border-white/[0.06]">
                <div className="flex items-center gap-3 mb-10">
                  <Database className="w-6 h-6 text-[#B8892A] dark:text-[#D4AF37]" />
                  <h3 className="text-xl md:text-2xl font-extrabold tracking-tight uppercase text-neutral-900 dark:text-white">
                    Infrastructure Case Studies
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {caseStudies.map((study, i) => (
                    <m.div key={i} variants={fade}>
                      <GlassCard className={`p-8 h-full ${study.border} ${study.hover} transition-colors`}>
                        <h4 className={`text-xs font-bold uppercase tracking-widest mb-5 ${study.color}`}>{study.title}</h4>
                        <div className="bg-neutral-50 dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.04] rounded-xl p-4 mb-6">
                          <p className="text-[9px] font-mono text-neutral-400 dark:text-[#7B8794] uppercase tracking-widest mb-1">Architecture Shift</p>
                          <p className="text-sm font-mono text-neutral-800 dark:text-white font-bold">{study.platform}</p>
                          <p className="text-[9px] font-mono text-neutral-400 dark:text-[#7B8794] uppercase tracking-widest mt-3 mb-1">Client</p>
                          <p className="text-sm font-mono text-neutral-800 dark:text-white font-bold">{study.client}</p>
                        </div>
                        <p className="text-[9px] font-mono text-neutral-400 dark:text-[#7B8794] uppercase tracking-widest mb-3 border-b border-black/[0.05] dark:border-white/[0.05] pb-2">Measured Outcomes</p>
                        <ul className="space-y-2">
                          {study.results.map((res, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm font-mono text-neutral-600 dark:text-[#7B8794]">
                              <Check className={`w-4 h-4 shrink-0 mt-0.5 ${study.color}`} /> {res}
                            </li>
                          ))}
                        </ul>
                      </GlassCard>
                    </m.div>
                  ))}
                </div>
              </div>

              {/* ── SOCIAL PROOF: VERIFIED OUTCOMES ── */}
              <m.div variants={fade} className="mt-16 pt-12 border-t border-black/[0.06] dark:border-white/[0.06]">
                <div className="flex items-center gap-3 mb-10">
                  <CheckCircle2 className="w-6 h-6 text-[#B8892A] dark:text-[#D4AF37]" aria-hidden="true" />
                  <h3 className="text-xl md:text-2xl font-extrabold tracking-tight uppercase text-neutral-900 dark:text-white">
                    Verified Outcomes
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    {
                      industry: "Security Services",
                      challenge: "Slow public-facing site costing credibility and leads",
                      result: "Load time reduced from 2.4s to 480ms. Performance score significantly improved post-deployment.",
                      quote: "Vaulltcore reduced our load time by 84% and the site feels like a different product entirely.",
                      delta: "−84% load time",
                      color: "text-[#D4AF37]", border: "border-[#D4AF37]/25",
                    },
                    {
                      industry: "Energy & Petroleum",
                      challenge: "No CI/CD pipeline, manual deploys, zero SEO foundation",
                      result: "Automated 90-second push to production. Full technical SEO deployed.",
                      quote: "We went from manual uploads to a fully automated pipeline. The infrastructure runs itself.",
                      delta: "90s deploy cycles",
                      color: "text-[#A8B8C8]", border: "border-[#A8B8C8]/25",
                    },
                  ].map((proof, i) => (
                    <GlassCard key={i} className={`p-8 h-full ${proof.border}`}>
                      <div className="flex items-center justify-between mb-6">
                        <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-1 rounded-full border ${proof.color} border-current/30`}>
                          {proof.industry}
                        </span>
                        <span className="flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase tracking-widest text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                          Verified
                        </span>
                      </div>
                      <p className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 dark:text-[#7B8794]/60 mb-1">Challenge</p>
                      <p className="text-xs font-mono text-neutral-600 dark:text-[#7B8794] leading-relaxed mb-4">{proof.challenge}</p>
                      <p className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 dark:text-[#7B8794]/60 mb-1">Result</p>
                      <p className="text-sm font-mono font-bold text-neutral-800 dark:text-white leading-relaxed mb-5">{proof.result}</p>
                      <blockquote className="border-l-2 border-[#D4AF37]/40 pl-4 mb-5">
                        <p className="text-xs font-mono text-neutral-500 dark:text-[#7B8794] leading-relaxed italic">"{proof.quote}"</p>
                      </blockquote>
                      <div className="pt-4 border-t border-black/[0.05] dark:border-white/[0.05]">
                        <span className={`text-xs font-mono font-bold uppercase tracking-widest ${proof.color}`}>{proof.delta}</span>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </m.div>

            </m.section>

            <VisualDivider />

            {/* §7  SECURITY & SOVEREIGNTY */}
            <m.section
              aria-label="Security and Ownership"
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }} variants={stagger}>

              <SectionHeader
                title="Security & Sovereignty"
                description="Enterprise-grade Zero Trust security on every engagement. Complete ownership transfer on every delivery."
                icon={ShieldAlert}
              />

              <div className="grid lg:grid-cols-2 gap-6">
                <m.div variants={fade}>
                  <GlassCard className="p-8 md:p-12 h-full" goldBorder>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.05] to-transparent rounded-2xl pointer-events-none" />
                    <FileSignature className="w-10 h-10 text-[#B8892A] dark:text-[#D4AF37] mb-6 relative z-10" />
                    <h3 className="text-base font-bold uppercase tracking-widest text-[#B8892A] dark:text-[#D4AF37] mb-4 relative z-10">
                      Absolute Ownership Guarantee
                    </h3>
                    <p className="text-sm font-mono text-neutral-700 dark:text-white leading-relaxed relative z-10 mb-6">
                      All systems deployed by Vaulltcore are transferred to the client's absolute ownership upon
                      completion. Code repositories, databases, environment variables, and infrastructure
                      configurations remain legally and technically controlled by your organisation.
                    </p>
                    <div className="border-l-2 border-[#D4AF37]/50 pl-4 relative z-10">
                      <p className="text-sm font-mono text-neutral-500 dark:text-[#7B8794] font-bold leading-relaxed">
                        We are the engineer — not the landlord. Cancel Vaulltcore tomorrow. Everything still runs.
                      </p>
                    </div>
                  </GlassCard>
                </m.div>

                <m.div variants={fade}>
                  <GlassCard className="p-8 md:p-10 h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <Unlock className="w-7 h-7 text-[#B8892A] dark:text-[#D4AF37]" />
                      <h4 className="text-base font-bold uppercase tracking-widest text-neutral-800 dark:text-white">Ownership Transfer Protocol</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {transferProtocol.map((item, i) => (
                        <div key={i} className="space-y-1.5">
                          <span className="text-[10px] font-mono font-bold text-[#B8892A] dark:text-[#D4AF37] uppercase tracking-widest">{item.label}</span>
                          <p className="text-xs font-mono text-neutral-500 dark:text-[#7B8794] leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </m.div>
              </div>
            </m.section>

            {/* §8  ENGAGEMENT FRAMEWORK */}
            <m.section id={sectionIds.audit}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }} variants={stagger}>

              <SectionHeader
                title="The Engagement Framework"
                description="The exact phases executed to migrate clients from rented stacks to sovereign, owned infrastructure."
                icon={Workflow} align="center" id={sectionIds.audit}
              />

              {/* Free Audit Card */}
              <m.div variants={fade} className="max-w-4xl mx-auto mb-20">
                <GlassCard goldBorder>
                  {/* Header */}
                  <div className="p-8 md:p-10 border-b border-black/[0.05] dark:border-white/[0.05]
                    bg-gradient-to-br from-[#D4AF37]/[0.06] to-transparent
                    flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/25
                      flex items-center justify-center shrink-0">
                      <Search className="w-8 h-8 text-[#B8892A] dark:text-[#D4AF37]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold uppercase tracking-widest text-neutral-800 dark:text-white mb-2">Free Infrastructure Audit</h3>
                      <span className="inline-block px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30
                        text-[#B8892A] dark:text-[#D4AF37] text-[10px] font-mono font-bold tracking-widest uppercase
                        rounded-full mb-3">
                        Free · 48-Hour Turnaround · No Commitment
                      </span>
                      <p className="text-sm font-mono text-neutral-500 dark:text-[#7B8794] leading-relaxed">
                        A 10-point technical diagnostic of your existing systems. The first demonstration of Vaulltcore
                        capability before you commit to anything.
                      </p>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="grid md:grid-cols-2 p-8 md:p-10 gap-8">
                    <div>
                      <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B8892A] dark:text-[#D4AF37] mb-4">Diagnostic Scope</h4>
                      <ul className="space-y-3">
                        {["Lighthouse performance score", "Core Web Vitals (LCP, CLS, FID)", "Security headers & TLS grade", "CDN & WAF detection", "SEO signals & sitemap"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-mono text-neutral-500 dark:text-[#7B8794]">
                            <Activity className="w-3.5 h-3.5 text-neutral-300 dark:text-[#7B8794]/50 shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B8892A] dark:text-[#D4AF37] mb-4">Audit Deliverables</h4>
                      <ul className="space-y-3">
                        {["10-point infrastructure score", "Performance bottleneck map", "Security posture assessment", "SEO signal evaluation", "Custom stack recommendation"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-mono text-neutral-800 dark:text-white">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B8892A] dark:text-[#D4AF37] shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </m.div>
            </m.section>

            <VisualDivider />

            {/* ══════════════════════════════════════════════════════════════
                §8b  WEAPON 4: CONTROLLED DEPLOYMENT SYSTEM
            ══════════════════════════════════════════════════════════════ */}
            <m.section
              aria-label="Controlled Deployment System"
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }} variants={stagger}>

              <SectionHeader
                title="Controlled Deployment System"
                description="Predictable. Engineered. Delivered in sequence. Every engagement follows the same deterministic process — no surprises, no scope creep, no ambiguity."
                icon={Workflow} align="center"
              />

              <m.div variants={fade} className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0">
                  {[
                    {
                      step: "01",
                      title: "Deep Audit",
                      timeframe: "48 hours",
                      what: "10-point infrastructure diagnostic across performance, security, SEO, and ownership risk.",
                      receives: "Full audit report + stack recommendation",
                      color: "#A8B8C8",
                    },
                    {
                      step: "02",
                      title: "System Architecture",
                      timeframe: "3–5 days",
                      what: "Sovereign stack designed end-to-end: edge routing, runtime, data layer, automation, and CI/CD.",
                      receives: "Architecture blueprint + scope confirmation",
                      color: "#D4AF37",
                    },
                    {
                      step: "03",
                      title: "Infrastructure Build",
                      timeframe: "1–4 weeks",
                      what: "Systems built, tested, and deployed to staging. Zero-downtime migration from legacy platform executed.",
                      receives: "Live deployment + performance benchmarks",
                      color: "#D4AF37",
                    },
                    {
                      step: "04",
                      title: "Ownership Transfer",
                      timeframe: "Day of delivery",
                      what: "All repositories, databases, credentials, and documentation transferred to client in full. Vaulltcore walks away.",
                      receives: "Complete ownership. Permanently.",
                      color: "#22C55E",
                    },
                  ].map((step, i, arr) => (
                    <div key={i} className="relative flex flex-col">
                      {/* Connector */}
                      {i < arr.length - 1 && (
                        <div className="hidden xl:block absolute top-[2.2rem] left-[calc(100%-0px)] w-full h-px z-10
                          bg-gradient-to-r from-[#D4AF37]/40 to-[#D4AF37]/10" aria-hidden="true">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40" />
                        </div>
                      )}
                      <GlassCard className={`p-6 h-full mx-1 ${i === 3 ? "border-emerald-500/20" : ""}`}
                        goldBorder={i === 1 || i === 2}>
                        {/* Step number + glow */}
                        <div className="relative mb-6">
                          <div className="w-11 h-11 rounded-full flex items-center justify-center
                            border-2 relative z-10"
                            style={{ borderColor: step.color + "50", background: step.color + "12" }}>
                            <span className="text-xs font-mono font-bold" style={{ color: step.color }}>{step.step}</span>
                          </div>
                          <div className="absolute inset-0 w-11 h-11 rounded-full blur-md opacity-30"
                            style={{ background: step.color }} aria-hidden="true" />
                        </div>

                        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white mb-1">{step.title}</h4>
                        <p className="text-[9px] font-mono font-bold uppercase tracking-widest mb-4"
                          style={{ color: step.color }}>⏱ {step.timeframe}</p>

                        <p className="text-xs font-mono text-neutral-500 dark:text-[#7B8794] leading-relaxed mb-4">{step.what}</p>

                        <div className="pt-4 border-t border-black/[0.05] dark:border-white/[0.05]">
                          <p className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-400 dark:text-[#7B8794]/60 mb-1">Client receives</p>
                          <p className="text-xs font-mono font-bold" style={{ color: step.color }}>{step.receives}</p>
                        </div>
                      </GlassCard>
                    </div>
                  ))}
                </div>
              </m.div>
            </m.section>

            <VisualDivider />

            {/* ══════════════════════════════════════════════════════════════
                DECISION CERTAINTY LAYER
            ══════════════════════════════════════════════════════════════ */}
            <m.section
              aria-label="What happens after you submit"
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }} variants={stagger}>

              <SectionHeader
                title="What Happens After You Submit"
                description="No ambiguity. No chasing. Every step is defined before you commit to anything."
                icon={Workflow} align="center" id={sectionIds.audit}
              />

              <m.div variants={fade} className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
                  {[
                    { num: "1", label: "You submit your domain", sub: "Takes 2 minutes. No commitment." },
                    { num: "2", label: "Full audit delivered", sub: "Within 48 hours. Yours to keep." },
                    { num: "3", label: "Infrastructure breakdown", sub: "We present what we found and what we'd build." },
                    { num: "4", label: "Fixed investment number", sub: "Scope-locked. No surprises. No hourly billing." },
                    { num: "5", label: "We execute", sub: "Build, migrate, test, transfer. Done." },
                  ].map((step, i, arr) => (
                    <div key={i} className="relative">
                      {i < arr.length - 1 && (
                        <div className="hidden lg:block absolute top-5 left-[calc(100%-4px)] w-full h-px bg-gradient-to-r from-[#D4AF37]/40 to-[#D4AF37]/10 z-10" aria-hidden="true" />
                      )}
                      <GlassCard className="p-5 h-full" goldBorder={i === 3}>
                        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-3">
                          <span className="text-xs font-mono font-bold text-[#B8892A] dark:text-[#D4AF37]">{step.num}</span>
                        </div>
                        <p className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-widest mb-1 leading-snug">{step.label}</p>
                        <p className="text-[10px] font-mono text-neutral-500 dark:text-[#7B8794]">{step.sub}</p>
                      </GlassCard>
                    </div>
                  ))}
                </div>
                {/* Key reassurance line */}
                <GlassCard className="p-5" goldBorder>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#B8892A] dark:text-[#D4AF37] mt-0.5 shrink-0" aria-hidden="true" />
                    <p className="text-sm font-mono text-neutral-700 dark:text-white font-semibold leading-relaxed">
                      If we're not the right fit, you still keep the audit.{" "}
                      <span className="text-neutral-500 dark:text-[#7B8794] font-normal">
                        No obligation. If your project doesn't qualify, we tell you directly — and you walk away with a full technical assessment of your infrastructure at no cost.
                      </span>
                    </p>
                  </div>
                </GlassCard>
              </m.div>
            </m.section>

            <VisualDivider />

            {/* ══════════════════════════════════════════════════════════════
                INVESTMENT SECTION
            ══════════════════════════════════════════════════════════════ */}
            <m.section id={sectionIds.pricing}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }} variants={stagger}>

              <SectionHeader
                title="Investment"
                description="Final investment is determined after your infrastructure audit. You receive a fixed, scope-locked number — no surprises, no hourly billing, no scope creep."
                icon={DollarSign} align="center" id={sectionIds.pricing}
              />

              <div className="max-w-5xl mx-auto space-y-6">

                {/* Anchor + ranges */}
                <m.div variants={fade}>
                  <GlassCard className="overflow-hidden" goldBorder>
                    <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" aria-hidden="true" />
                    <div className="p-8 md:p-10">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 pb-8 border-b border-black/[0.06] dark:border-white/[0.06]">
                        <div>
                          <p className="text-[10px] font-mono font-bold tracking-widest text-[#B8892A] dark:text-[#D4AF37] uppercase mb-2">Sovereign Infrastructure System (5 Layers)</p>
                          <p className="text-4xl md:text-5xl font-extrabold font-mono tracking-tighter text-neutral-900 dark:text-white">
                            From <span className="text-[#B8892A] dark:text-[#D4AF37]">$1,500</span>
                          </p>
                        </div>
                        <div className="text-sm font-mono text-neutral-500 dark:text-[#7B8794] md:text-right max-w-xs leading-relaxed">
                          Exact scope and cost confirmed after your free audit. No number until we understand your system.
                        </div>
                      </div>

                      {/* Ranges */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="p-5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.05]">
                          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 dark:text-[#7B8794]/60 mb-2">Most builds</p>
                          <p className="text-2xl font-extrabold font-mono text-[#B8892A] dark:text-[#D4AF37]">$3,000 – $12,000</p>
                          <p className="text-xs font-mono text-neutral-500 dark:text-[#7B8794] mt-1">Standard migrations, infrastructure builds, single-environment deployments</p>
                        </div>
                        <div className="p-5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.05]">
                          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 dark:text-[#7B8794]/60 mb-2">Advanced systems</p>
                          <p className="text-2xl font-extrabold font-mono text-[#B8892A] dark:text-[#D4AF37]">$12,000 – $25,000+</p>
                          <p className="text-xs font-mono text-neutral-500 dark:text-[#7B8794] mt-1">Multi-environment, AI + WhatsApp integration, full 5-layer sovereign build</p>
                        </div>
                      </div>

                      {/* No hourly billing statement */}
                      <p className="text-sm font-mono font-bold text-neutral-800 dark:text-white border-l-2 border-[#D4AF37]/50 pl-4">
                        No hourly billing. No scope creep. One system. One number.
                      </p>
                    </div>
                  </GlassCard>
                </m.div>

                {/* What determines investment */}
                <div className="grid md:grid-cols-2 gap-5">
                  <m.div variants={fade}>
                    <GlassCard className="p-8 h-full">
                      <div className="flex items-center gap-2 mb-5">
                        <DollarSign className="w-5 h-5 text-[#B8892A] dark:text-[#D4AF37]" aria-hidden="true" />
                        <h4 className="text-sm font-extrabold uppercase tracking-widest text-neutral-900 dark:text-white">What Determines Your Investment</h4>
                      </div>
                      <ul className="space-y-3">
                        {investmentDrivers.map((driver, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm font-mono text-neutral-600 dark:text-[#7B8794]">
                            <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2 shrink-0" aria-hidden="true" />
                            {driver}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </m.div>
                  <m.div variants={fade}>
                    <GlassCard className="p-8 h-full">
                      <ShieldCheck className="w-7 h-7 text-[#B8892A] dark:text-[#D4AF37] mb-4" aria-hidden="true" />
                      <h4 className="text-sm font-extrabold uppercase tracking-widest text-neutral-900 dark:text-white mb-3">Performance Guarantee</h4>
                      <p className="text-sm font-mono text-neutral-500 dark:text-[#7B8794] leading-relaxed mb-6">
                        Every engagement includes a written performance SLA. Measurable speed improvement,
                        enterprise Zero Trust security, and full ownership transfer. If any agreed benchmark
                        is not met — Vaulltcore revises at zero additional cost.
                      </p>
                      <div className="space-y-2 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                        <p className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 dark:text-[#7B8794]/60 uppercase mb-3">Optional retainer support</p>
                        {["Maintenance Pro — $800/mo", "Growth Partner — $2,500/mo", "Enterprise Shield — $6,000/mo"].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-mono text-[#B8892A] dark:text-[#D4AF37] font-bold">
                            <ArrowRight className="w-3 h-3 shrink-0" aria-hidden="true" /> {item}
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </m.div>
                </div>
              </div>
            </m.section>

            <VisualDivider />

            {/* §10  FAQ */}
            <m.section id={sectionIds.faq}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }} variants={stagger}
              className="max-w-4xl mx-auto">

              <m.div variants={fade}>
                <div className="flex items-center gap-3 mb-10">
                  <FileJson className="w-7 h-7 text-[#B8892A] dark:text-[#D4AF37]" />
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase text-neutral-900 dark:text-white">System FAQ</h2>
                </div>
                <div className="space-y-3">
                  {faqItems.map((faq, i) => (
                    <GlassCard key={i} className="overflow-hidden">
                      <details className="group">
                        <summary className="flex items-center justify-between p-6 cursor-pointer
                          text-sm font-bold tracking-widest uppercase
                          text-neutral-800 dark:text-white
                          hover:text-[#B8892A] dark:hover:text-[#D4AF37] transition-colors list-none">
                          <span>{faq.question}</span>
                          <span className="ml-4 text-[#B8892A] dark:text-[#D4AF37] shrink-0 transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <div className="px-6 pb-6 text-sm font-mono text-neutral-500 dark:text-[#7B8794] leading-relaxed border-t border-black/[0.04] dark:border-white/[0.04] pt-4">
                          {faq.answer}
                        </div>
                      </details>
                    </GlassCard>
                  ))}
                </div>
              </m.div>
            </m.section>

            {/* ══════════════════════════════════════════════════════════════
                §10b  WEAPON 5: ZERO RISK GUARANTEE
            ══════════════════════════════════════════════════════════════ */}
            <m.section
              aria-label="Zero Risk Guarantee"
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }} variants={stagger}>

              <m.div variants={fade}>
                <GlassCard className="relative overflow-hidden" goldBorder>
                  <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" aria-hidden="true" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.04] via-transparent to-transparent pointer-events-none" aria-hidden="true" />

                  <div className="relative z-10 p-8 md:p-12">
                    <div className="grid lg:grid-cols-[auto_1fr] gap-10 items-start">

                      {/* Icon */}
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-20 h-20 rounded-2xl
                          bg-[#D4AF37]/10 border-2 border-[#D4AF37]/30
                          flex items-center justify-center
                          shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                          <Shield className="w-10 h-10 text-[#B8892A] dark:text-[#D4AF37]" aria-hidden="true" />
                        </div>
                        <span className="text-[9px] font-mono font-bold tracking-widest text-[#B8892A] dark:text-[#D4AF37] uppercase text-center">
                          Guaranteed
                        </span>
                      </div>

                      {/* Content */}
                      <div>
                        <p className="text-[10px] font-mono font-bold tracking-widest text-[#B8892A] dark:text-[#D4AF37] uppercase mb-3">
                          // Zero Risk Guarantee
                        </p>
                        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase text-neutral-900 dark:text-white mb-4 leading-tight">
                          You own everything.<br />Even if you leave.
                        </h2>
                        <p className="text-sm font-mono text-neutral-500 dark:text-[#7B8794] leading-relaxed mb-8 max-w-2xl">
                          Vaulltcore has no recurring hook. No platform to log into. No secret that keeps your system running.
                          Everything is delivered to you in full on day one of handover — and it runs indefinitely without us.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {[
                            { icon: Unlock,       label: "No lock-in of any kind",              sub: "Code, data, and infra are yours" },
                            { icon: DollarSign,   label: "No recurring fees to Vaulltcore",      sub: "Pay once. Own permanently." },
                            { icon: Code,         label: "Full codebase delivered",              sub: "Every line, every commit" },
                            { icon: FileSignature,label: "Complete documentation",               sub: "Runbooks, diagrams, configs" },
                            { icon: Database,     label: "Full database ownership",              sub: "With unrestricted admin access" },
                            { icon: ShieldCheck,  label: "Written performance SLA",              sub: "Measurable benchmarks · Agreed upfront" },
                          ].map((g, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-xl
                              bg-[#D4AF37]/[0.04] border border-[#D4AF37]/15
                              hover:border-[#D4AF37]/30 transition-colors">
                              <g.icon className="w-4 h-4 text-[#B8892A] dark:text-[#D4AF37] mt-0.5 shrink-0" aria-hidden="true" />
                              <div>
                                <p className="text-[10px] font-mono font-bold text-neutral-800 dark:text-white uppercase tracking-widest leading-snug mb-0.5">{g.label}</p>
                                <p className="text-[9px] font-mono text-neutral-400 dark:text-[#7B8794]/70">{g.sub}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <p className="mt-6 text-sm font-mono font-bold text-[#B8892A] dark:text-[#D4AF37] border-l-2 border-[#D4AF37]/50 pl-4">
                          Cancel Vaulltcore tomorrow. Your infrastructure still runs. Permanently.
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </m.div>
            </m.section>

            {/* ── URGENCY STRIP ── */}
            <m.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="relative overflow-hidden rounded-2xl
                bg-neutral-900 dark:bg-[#07080F]
                border border-[#D4AF37]/20
                px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Pulse glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/[0.03] via-transparent to-transparent pointer-events-none" aria-hidden="true" />
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37]/60 via-[#D4AF37]/30 to-transparent rounded-l-2xl" aria-hidden="true" />

                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative flex items-center justify-center w-8 h-8 shrink-0">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-amber-500/20 animate-ping" aria-hidden="true" />
                    <span className="relative w-3 h-3 rounded-full bg-amber-500" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white uppercase tracking-widest leading-snug">
                      Limited build slots available this month.
                    </p>
                    <p className="text-xs font-mono text-[#7B8794] mt-0.5">
                      We only take a controlled number of infrastructure builds per month to guarantee delivery quality.
                    </p>
                  </div>
                </div>

                <a href="https://cal.com/vaulltcore" target="_blank" rel="noopener noreferrer"
                  className="relative z-10 shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl
                    bg-[#D4AF37]/10 border border-[#D4AF37]/30
                    text-[#B8892A] dark:text-[#D4AF37]
                    font-mono font-bold text-xs tracking-widest uppercase
                    hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all">
                  Check Availability
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </m.div>

            {/* §11  FINAL CTA */}
            <m.section
              aria-label="Initialize Audit"
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }} variants={stagger}
              className="pt-12 pb-12">

              {/* Engagement steps */}
              <m.div variants={fade} className="max-w-5xl mx-auto mb-16">
                <h3 className="text-[10px] font-mono font-bold tracking-widest text-[#B8892A] dark:text-[#D4AF37] uppercase mb-8 text-center">
                  Engagement Process
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                  {/* connector line */}
                  <div className="absolute top-6 left-[12%] right-[12%] h-px
                    bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/40 to-[#D4AF37]/20
                    hidden lg:block" />
                  {engagementSteps.map((step, i) => (
                    <GlassCard key={i} className="p-6 relative">
                      <div className="w-9 h-9 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30
                        flex items-center justify-center mb-4 relative z-10">
                        <span className="text-xs font-mono font-bold text-[#B8892A] dark:text-[#D4AF37]">{step.step}</span>
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-800 dark:text-white mb-2">{step.title}</h4>
                      <p className="text-xs font-mono text-neutral-500 dark:text-[#7B8794] leading-relaxed">{step.desc}</p>
                    </GlassCard>
                  ))}
                </div>
              </m.div>

              {/* Hero CTA card */}
              <m.div variants={fade}>
                <GlassCard className="relative overflow-hidden text-center" goldBorder>
                  {/* Top gold line */}
                  <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/[0.04] to-transparent pointer-events-none" />
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/[0.06] blur-[100px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#A8B8C8]/[0.04] blur-[80px] rounded-full pointer-events-none" />

                  <div className="relative z-10 p-10 md:p-16 lg:p-20">
                    <div className="w-16 h-16 rounded-2xl
                      bg-[#D4AF37]/10 border border-[#D4AF37]/30
                      flex items-center justify-center mx-auto mb-8
                      shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                      <Hexagon className="w-8 h-8 text-[#B8892A] dark:text-[#D4AF37]" />
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase
                      text-neutral-900 dark:text-white mb-6 leading-tight">
                      Either optimize your infrastructure —<br />
                      <span className="text-[#B8892A] dark:text-[#D4AF37]">or keep losing revenue.</span>
                    </h2>
                    <p className="text-sm md:text-base font-mono text-neutral-500 dark:text-[#7B8794]
                      leading-relaxed max-w-3xl mx-auto mb-3">
                      Most businesses never fix this. They scroll. They admire. They leave.
                      The ones who act dominate their market for years — on infrastructure they own completely.
                    </p>
                    <p className="text-xs font-mono text-[#B8892A] dark:text-[#D4AF37] font-bold mb-2">
                      You don't need another website. You need infrastructure that prints revenue.
                    </p>
                    <p className="text-xs font-mono text-neutral-400 dark:text-[#7B8794]/60 mb-10">
                      48-hour turnaround · No commitment · Full 10-point report ·{" "}
                      <span className="text-amber-500 dark:text-amber-400 font-bold">Limited build slots per month</span>
                    </p>

                    <a href="https://cal.com/vaulltcore" target="_blank" rel="noopener noreferrer"
                      className="group inline-flex items-center gap-4 px-10 py-5 rounded-xl
                        bg-gradient-to-r from-[#D4AF37] to-[#8B6914]
                        text-white font-bold font-mono tracking-widest uppercase text-sm md:text-base
                        shadow-[0_4px_30px_rgba(212,175,55,0.4)]
                        hover:shadow-[0_4px_50px_rgba(212,175,55,0.6)]
                        hover:from-[#F0D060] hover:to-[#D4AF37]
                        transition-all duration-300">
                      <Terminal className="w-5 h-5" aria-hidden="true" />
                      Secure My Infrastructure
                      <ArrowRightCircle className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
                    </a>

                    {/* Secondary word links */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
                      <a href="mailto:build@vaulltcore.com"
                        className="text-xs font-mono font-bold tracking-widest uppercase
                          text-neutral-400 dark:text-[#7B8794] hover:text-[#B8892A] dark:hover:text-[#D4AF37]
                          transition-colors underline underline-offset-4">
                        Email Directly
                      </a>
                      <span className="text-neutral-300 dark:text-[#7B8794]/30 text-xs" aria-hidden="true">·</span>
                      <a href="#sec-systems"
                        className="text-xs font-mono font-bold tracking-widest uppercase
                          text-neutral-400 dark:text-[#7B8794] hover:text-[#B8892A] dark:hover:text-[#D4AF37]
                          transition-colors underline underline-offset-4">
                        See What We Replace
                      </a>
                      <span className="text-neutral-300 dark:text-[#7B8794]/30 text-xs" aria-hidden="true">·</span>
                      <a href="#sec-cases"
                        className="text-xs font-mono font-bold tracking-widest uppercase
                          text-neutral-400 dark:text-[#7B8794] hover:text-[#B8892A] dark:hover:text-[#D4AF37]
                          transition-colors underline underline-offset-4">
                        View Deployments
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </m.div>
            </m.section>

          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer className="border-t border-black/[0.06] dark:border-white/[0.05]
          bg-white/40 dark:bg-[#07080F]/80
          backdrop-blur-xl pt-16 pb-8 relative z-10">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl
              border border-[#D4AF37]/30
              bg-[#D4AF37]/8 dark:bg-[#D4AF37]/10
              flex items-center justify-center mb-5">
              <Terminal className="w-5 h-5 text-[#B8892A] dark:text-[#D4AF37]" />
            </div>
            <h4 className="text-sm font-extrabold tracking-widest uppercase text-neutral-800 dark:text-white mb-2">Vaulltcore</h4>
            <p className="text-xs font-mono text-neutral-400 dark:text-[#7B8794] mb-6">Engineering Digital Sovereignty</p>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 pb-8
              border-b border-black/[0.05] dark:border-white/[0.05]">
              {["Infrastructure Design", "Refactor & Migration", "AI Chatbot Setup", "SEO Authority", "Knowledge Base"].map((s, i) => (
                <span key={i}
                  className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 dark:text-[#7B8794] hover:text-[#B8892A] dark:hover:text-[#D4AF37] transition-colors cursor-default">
                  {s}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <a href="mailto:build@vaulltcore.com"
                className="text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-400 dark:text-[#7B8794] hover:text-[#B8892A] dark:hover:text-[#D4AF37] transition-colors">
                build@vaulltcore.com
              </a>
              <Link href="/dashboard/initiate"
                className="text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-400 dark:text-[#7B8794] hover:text-[#B8892A] dark:hover:text-[#D4AF37] transition-colors">
                Initialize Audit
              </Link>
              <a href="https://vaulltcore.com"
                className="text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-400 dark:text-[#7B8794] hover:text-[#B8892A] dark:hover:text-[#D4AF37] transition-colors">
                vaulltcore.com
              </a>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-black/[0.05] dark:border-white/[0.05] pt-6 gap-4">
              <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-300 dark:text-[#7B8794]/50">
                © {new Date().getFullYear()} Vaulltcore · Knowledge Rumhizha · Harare, Zimbabwe · Global Deployment
              </span>
              <span className="flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest text-emerald-500/70">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Status: Nominal
              </span>
            </div>
          </div>
        </footer>

      </main>
    </LazyMotion>
  );
}
