"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
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
  Shield, Lock, Cpu, BarChart3, Globe2, Layers, AlertCircle, Eye, EyeOff
} from "lucide-react";

// ─── ANIMATION VARIANTS ─────────────────────────────��────────────────────────
const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const }
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
// Light: #F8F5EE bg | #B8892A accent
// Dark: #07080F bg | #D4AF37 accent

// ─── SVG COMPONENTS ─────────────────────────────────────────────────────────

export function SovereignVaultSVG() {
  return (
    <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0D060" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <filter id="gold-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <circle cx="300" cy="250" r="220" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="4 8" opacity="0.2">
        <animateTransform attributeName="transform" type="rotate" from="0 300 250" to="360 300 250" dur="60s" repeatCount="indefinite" />
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

      <g filter="url(#gold-glow)">
        <circle cx="300" cy="250" r="60" fill="url(#gold-grad)" stroke="#D4AF37" strokeWidth="2" />
      </g>
      <text x="300" y="245" textAnchor="middle" fill="#D4AF37" fontSize="13" fontFamily="sans-serif" fontWeight="800" letterSpacing="2">VAULT</text>
      <text x="300" y="261" textAnchor="middle" fill="#8B6914" fontSize="8" fontFamily="monospace">SOVEREIGN</text>
    </svg>
  );
}

// ─── GLASS CARD COMPONENT ────────────────────────────────────────────────────
function GlassCard({ children, className = "", hover = true, goldBorder = false }: {
  children: React.ReactNode; className?: string; hover?: boolean; goldBorder?: boolean;
}) {
  return (
    <div className={`
      relative rounded-2xl overflow-hidden
      bg-white/70 dark:bg-white/[0.05]
      backdrop-blur-xl
      border ${goldBorder
        ? "border-[#D4AF37]/40 dark:border-[#D4AF37]/30"
        : "border-neutral-200 dark:border-white/[0.08]"}
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
    <header className={`mb-12 pb-6 border-b border-neutral-200 dark:border-white/[0.06] relative z-10 ${align === "center" ? "flex flex-col items-center text-center" : ""}`}>
      <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
        {Icon && <Icon className="w-6 h-6 text-[#B8892A] dark:text-[#D4AF37]" aria-hidden="true" />}
        <h2 id={id} className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white uppercase">{title}</h2>
      </div>
      {description && (
        <p className="text-sm font-mono text-neutral-600 dark:text-[#A8B8C8] max-w-3xl leading-relaxed">{description}</p>
      )}
    </header>
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

  const fade: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const
      }
    },
  };

  const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12
      }
    },
  };

  const sectionIds = {
    whofor: "sec-whofor",
    whatget: "sec-whatget",
    certainty: "sec-certainty",
    systems: "sec-systems",
    pricing: "sec-pricing",
    faq: "sec-faq",
  };

  function handleScan(e: React.FormEvent) {
    e.preventDefault();
    if (!domain) return;
    setScanning(true);
    setTimeout(() => { setScanning(false); setScanDone(true); }, 2400);
  }

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
      {/* SCROLL PROGRESS BAR */}
      <m.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8B6914] via-[#D4AF37] to-[#F0D060] origin-left z-[100]"
        aria-hidden="true"
      />

      <main className="relative min-h-screen bg-[#F8F5EE] dark:bg-[#07080F] text-neutral-900 dark:text-white font-sans overflow-hidden selection:bg-[#D4AF37]/20 selection:text-[#B8892A] dark:selection:text-[#D4AF37]">

        {/* BACKGROUND GRID */}
        <div className="fixed inset-0 pointer-events-none z-0
          bg-[linear-gradient(rgba(180,148,50,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(180,148,50,0.03)_1px,transparent_1px)]
          dark:bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)]
          bg-[size:4rem_4rem]" aria-hidden="true" />

        {/* SUBTLE GLOWS */}
        <div className="fixed top-[-15%] left-[-5%] w-[55%] h-[55%]
          bg-[#D4AF37]/3 dark:bg-[#D4AF37]/4
          blur-[160px] rounded-full pointer-events-none z-0" aria-hidden="true" />
        <div className="fixed bottom-[-15%] right-[-5%] w-[45%] h-[50%]
          bg-[#A8B8C8]/3 dark:bg-[#A8B8C8]/2
          blur-[160px] rounded-full pointer-events-none z-0" aria-hidden="true" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pb-24">

          {/* HERO SECTION */}
          <m.header
            initial="hidden" animate="visible" variants={stagger}
            className="pt-12 md:pt-20 grid lg:grid-cols-[1fr_1fr] gap-16 items-center min-h-[90vh]"
          >
            <div>
              {/* HEADLINE */}
              <m.div variants={fade} className="mb-6">
                <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg
                  bg-emerald-50 dark:bg-emerald-500/10
                  border border-emerald-200 dark:border-emerald-500/20
                  backdrop-blur">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase">
                    Vaulltcore Infrastructure
                  </span>
                </div>
              </m.div>

              <m.h1 variants={fade} className="text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-tighter mb-6 uppercase leading-[1.0]">
                Your Infrastructure.{" "}
                <br className="hidden md:block" />
                <span className="text-[#B8892A] dark:text-[#D4AF37]">Your Revenue.</span>{" "}
                <span className="text-neutral-900 dark:text-white">Your Control.</span>
              </m.h1>

              <m.div variants={fade} className="border-l-2 border-[#D4AF37]/50 pl-5 mb-8">
                <p className="text-sm md:text-base font-mono text-neutral-600 dark:text-[#A8B8C8] leading-relaxed max-w-2xl">
                  Vaulltcore engineers sovereign infrastructure. We build, deploy, and transfer ownership to you—permanently. 
                  <strong className="text-neutral-800 dark:text-white">Zero SaaS. Zero lock-in. Zero compromise.</strong>
                </p>
              </m.div>

              {/* CTA FORM */}
              <m.div variants={fade}>
                <GlassCard className="p-1 mb-4" goldBorder>
                  <form onSubmit={handleScan} className="flex items-stretch gap-2 p-2 flex-col sm:flex-row">
                    <div className="flex-1 relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B8892A] dark:text-[#D4AF37] opacity-60" />
                      <input
                        type="text"
                        value={domain}
                        onChange={e => setDomain(e.target.value)}
                        placeholder="Enter your domain"
                        className="w-full pl-10 pr-4 py-3 text-sm font-mono bg-transparent text-neutral-800 dark:text-white placeholder-neutral-500 dark:placeholder-[#7B8794] border-none outline-none rounded-lg"
                        aria-label="Domain to audit"
                      />
                    </div>
                    <button type="submit" disabled={scanning}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#8B6914] text-white font-mono font-bold text-sm tracking-widest uppercase shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.5)] transition-all disabled:opacity-60 shrink-0">
                      {scanning ? (
                        <><span className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" /> Scanning</>
                      ) : (
                        <><Search className="w-4 h-4" /> Scan</>
                      )}
                    </button>
                  </form>
                </GlassCard>

                {scanDone && (
                  <m.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-sm font-mono text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" /> Audit initiated · 48h turnaround
                  </m.div>
                )}

                <p className="text-xs font-mono text-neutral-500 dark:text-[#7B8794] mt-3">
                  <span className="text-[#B8892A] dark:text-[#D4AF37]">$5,000 diagnostic value</span> · 100% Free · No commitment
                </p>
              </m.div>
            </div>

            {/* HERO SVG */}
            <m.div variants={fade} className="w-full aspect-square max-w-lg mx-auto lg:mx-0">
              <SovereignVaultSVG />
            </m.div>
          </m.header>

          {/* WHO THIS IS FOR / NOT FOR */}
          <m.section id={sectionIds.whofor}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-40px" }} variants={staggerContainer}
            className="mt-32 mb-24"
          >
            <SectionHeader title="Who This Is For. Who It's Not." align="center" />

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <m.div variants={fade}>
                <GlassCard className="p-8 h-full border-emerald-200 dark:border-emerald-500/15">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-4" />
                  <h3 className="text-base font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 mb-4">We Build For</h3>
                  <ul className="space-y-3 text-sm font-mono text-neutral-700 dark:text-[#A8B8C8]">
                    {[
                      "Businesses generating real revenue",
                      "Teams ready to own their infrastructure",
                      "Founders tired of SaaS lock-in",
                      "Companies serious about control"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </m.div>

              <m.div variants={fade}>
                <GlassCard className="p-8 h-full border-red-200 dark:border-red-500/15">
                  <X className="w-8 h-8 text-red-600 dark:text-red-400 mb-4" />
                  <h3 className="text-base font-bold uppercase tracking-widest text-red-700 dark:text-red-400 mb-4">We Don't Work With</h3>
                  <ul className="space-y-3 text-sm font-mono text-neutral-700 dark:text-[#A8B8C8]">
                    {[
                      "DIY builders or $500 projects",
                      "\"Just a website\" requests",
                      "Businesses unwilling to commit",
                      "Projects requiring hourly billing"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </m.div>
            </div>
          </m.section>

          {/* WHAT HAPPENS NEXT — DECISION CERTAINTY */}
          <m.section id={sectionIds.certainty}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-40px" }} variants={staggerContainer}
            className="mb-24"
          >
            <SectionHeader 
              title="What Happens After You Submit"
              description="No surprises. No hidden steps. Transparent, deterministic process."
              align="center" 
            />

            <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { step: "1", title: "Domain Submitted", desc: "You enter your domain into our audit system." },
                { step: "2", title: "48h Turnaround", desc: "Full 10-point infrastructure report delivered." },
                { step: "3", title: "Fixed Investment Number", desc: "Transparent pricing with zero surprises." },
                { step: "4", title: "Execution Begins", desc: "Or keep the audit if we're not a fit." },
              ].map((item, i) => (
                <m.div key={i} variants={fade}>
                  <GlassCard className="p-6 h-full" goldBorder={i === 2}>
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 dark:bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-4">
                      <span className="text-sm font-mono font-bold text-[#B8892A] dark:text-[#D4AF37]">{item.step}</span>
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-800 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-xs font-mono text-neutral-600 dark:text-[#A8B8C8]">{item.desc}</p>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </m.section>

          {/* THE 5-LAYER SYSTEM */}
          <m.section id={sectionIds.whatget}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-40px" }} variants={staggerContainer}
            className="mb-24"
          >
            <SectionHeader 
              title="The 5-Layer Sovereign System"
              description="Everything you get. All delivered as one integrated machine."
              align="center" 
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {[
                { num: "1", title: "Infrastructure Core", icon: Server, desc: "Edge deployment, CI/CD, optimization" },
                { num: "2", title: "Refactor & Migration", icon: ArrowRightLeft, desc: "Zero-downtime extraction, SaaS rescue" },
                { num: "3", title: "SEO Authority Engine", icon: Network, desc: "Technical SEO, indexing, schema" },
                { num: "4", title: "AI Chatbot System", icon: Bot, desc: "Trained on your data, fully owned" },
                { num: "5", title: "WhatsApp/API Layer", icon: Zap, desc: "Instant response, automation" },
              ].map((layer, i) => (
                <m.div key={i} variants={fade}>
                  <GlassCard className="p-6 h-full" goldBorder={i % 2 === 0}>
                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-3">
                      <span className="text-xs font-mono font-bold text-[#B8892A] dark:text-[#D4AF37]">{layer.num}</span>
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-800 dark:text-white mb-2">{layer.title}</h4>
                    <p className="text-[11px] font-mono text-neutral-600 dark:text-[#A8B8C8]">{layer.desc}</p>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </m.section>

          {/* PRICING — REALISTIC & TRANSPARENT */}
          <m.section id={sectionIds.pricing}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-40px" }} variants={staggerContainer}
            className="mb-24"
          >
            <SectionHeader 
              title="Investment"
              description="No hourly billing. No scope creep. One system. One fixed number."
              align="center" 
            />

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {[
                { title: "Foundation", range: "$1,500–$3,500", desc: "Infrastructure design, DNS, CI/CD, Ops Runbook" },
                { title: "Standard Build", range: "$3,000–$12,000", desc: "Migration, SaaS rescue, zero downtime, benchmarks", featured: true },
                { title: "Enterprise", range: "$12,000–$25,000+", desc: "5-service deployment, multi-env, full ownership" },
              ].map((tier, i) => (
                <m.div key={i} variants={fade} className={tier.featured ? "md:-translate-y-4" : ""}>
                  <GlassCard className={`p-8 h-full ${tier.featured ? "border-[#D4AF37]/50 dark:border-[#D4AF37]/40" : "border-neutral-200 dark:border-white/[0.08]"}`}
                    goldBorder={tier.featured}>
                    {tier.featured && <div className="h-1 bg-gradient-to-r from-[#8B6914] via-[#D4AF37] to-[#F0D060] -mx-8 -mt-8 mb-6" />}
                    <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-700 dark:text-[#A8B8C8] mb-2">{tier.title}</h3>
                    <p className={`text-3xl font-extrabold font-mono mb-4 ${tier.featured ? "text-[#D4AF37]" : "text-[#B8892A] dark:text-neutral-400"}`}>{tier.range}</p>
                    <p className="text-sm font-mono text-neutral-600 dark:text-[#A8B8C8] mb-6">{tier.desc}</p>
                    <Link href="/dashboard/initiate" className={`block text-center py-3 px-4 rounded-lg font-mono font-bold text-sm tracking-widest uppercase transition-all ${
                      tier.featured 
                        ? "bg-[#D4AF37] text-white hover:shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
                        : "bg-neutral-100 dark:bg-white/[0.04] text-neutral-700 dark:text-[#A8B8C8] hover:border-[#D4AF37]/40"
                    }`}>
                      Initiate
                    </Link>
                  </GlassCard>
                </m.div>
              ))}
            </div>

            <m.div variants={fade} className="max-w-3xl mx-auto">
              <GlassCard className="p-8">
                <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-800 dark:text-white mb-4">What Determines Your Investment</h4>
                <ul className="space-y-2 text-sm font-mono text-neutral-600 dark:text-[#A8B8C8]">
                  {[
                    "Current infrastructure condition",
                    "Migration complexity",
                    "Number of systems being unified",
                    "SEO authority scope",
                    "Chatbot + automation depth"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </m.div>
          </m.section>

          {/* FAQ */}
          <m.section id={sectionIds.faq}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-40px" }} variants={staggerContainer}
            className="mb-24 max-w-3xl mx-auto"
          >
            <SectionHeader title="FAQ" align="center" />

            <div className="space-y-3">
              {[
                {
                  q: "What if we're not a fit?",
                  a: "You keep the $5,000 audit. No commitment, no pressure. We only work with businesses ready to own their infrastructure."
                },
                {
                  q: "How realistic is <500ms load time?",
                  a: "Typical for edge-deployed infrastructure with static-first strategies. Measured on real production deployments. Not estimates."
                },
                {
                  q: "Do you guarantee 100/100 Lighthouse?",
                  a: "No. We guarantee realistic performance (typically 90-98) within infrastructure constraints. 100/100 is impossible with real content."
                },
                {
                  q: "What happens after you deliver?",
                  a: "Complete ownership. No recurring fees. Your infrastructure runs forever. Optional support plans available ($800–$6,000/mo)."
                },
              ].map((item, i) => (
                <m.div key={i} variants={fade}>
                  <GlassCard>
                    <details className="group">
                      <summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-bold tracking-widest uppercase text-neutral-800 dark:text-white hover:text-[#B8892A] dark:hover:text-[#D4AF37] transition-colors list-none">
                        <span>{item.q}</span>
                        <span className="ml-4 text-[#B8892A] dark:text-[#D4AF37] shrink-0 transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <div className="px-5 pb-5 text-sm font-mono text-neutral-600 dark:text-[#A8B8C8] border-t border-neutral-200 dark:border-white/[0.06] pt-4">
                        {item.a}
                      </div>
                    </details>
                  </GlassCard>
                </m.div>
              ))}
            </div>
          </m.section>

          {/* FINAL CTA */}
          <m.section
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-40px" }} variants={staggerContainer}
            className="pt-12 pb-12"
          >
            <m.div variants={fade}>
              <GlassCard className="relative overflow-hidden text-center p-12 md:p-20" goldBorder>
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/[0.04] to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-neutral-900 dark:text-white mb-6">
                    Either optimize now—<br />
                    <span className="text-[#B8892A] dark:text-[#D4AF37]">or keep losing revenue.</span>
                  </h2>

                  <p className="text-base font-mono text-neutral-600 dark:text-[#A8B8C8] max-w-2xl mx-auto mb-8">
                    The ones who act dominate their market for years on infrastructure they own completely.
                  </p>

                  <a href="https://cal.com/vaulltcore" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 px-10 py-5 rounded-xl
                      bg-gradient-to-r from-[#D4AF37] to-[#8B6914]
                      text-white font-bold font-mono tracking-widest uppercase
                      shadow-[0_4px_30px_rgba(212,175,55,0.4)]
                      hover:shadow-[0_4px_50px_rgba(212,175,55,0.6)]
                      transition-all">
                    <Terminal className="w-5 h-5" aria-hidden="true" />
                    Secure Infrastructure Now
                  </a>

                  <p className="text-xs font-mono text-neutral-500 dark:text-[#7B8794] mt-6">
                    build@vaulltcore.com · 48h turnaround · Limited slots this month
                  </p>
                </div>
              </GlassCard>
            </m.div>
          </m.section>

        </div>

        {/* FOOTER */}
        <footer className="border-t border-neutral-200 dark:border-white/[0.05] bg-neutral-50 dark:bg-[#07080F]/50 backdrop-blur pt-12 pb-6 relative z-10">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center">
            <h4 className="text-sm font-extrabold tracking-widest uppercase text-neutral-900 dark:text-white mb-1">Vaulltcore</h4>
            <p className="text-xs font-mono text-neutral-600 dark:text-[#7B8794] mb-8">Your Infrastructure. Your Revenue. Your Control.</p>

            <div className="flex flex-wrap justify-center gap-6 mb-8 pb-8 border-b border-neutral-200 dark:border-white/[0.05]">
              {["Audit", "Design", "Migration", "SEO", "AI"].map((s, i) => (
                <span key={i} className="text-[9px] font-mono uppercase tracking-widest text-neutral-600 dark:text-[#7B8794]">{s}</span>
              ))}
            </div>

            <p className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 dark:text-[#7B8794]/50">
              © {new Date().getFullYear()} Vaulltcore · Harare, Zimbabwe · Global Deployment
            </p>
          </div>
        </footer>

      </main>
    </LazyMotion>
  );
}
