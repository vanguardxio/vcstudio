"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LazyMotion, domAnimation, m, useScroll, useSpring, Variants, AnimatePresence, useTransform, useReducedMotion
} from "framer-motion";
import {
  Globe2, Server, Zap, Shield, Activity, MapPin, Radio, 
  ArrowRight, Power, Clock, Command, CheckCircle2, ChevronRight,
  Database, Network, Layers, Trophy, RefreshCw, PlayCircle, ShieldAlert,
  BrainCircuit, Target, Users, AlertTriangle, TrendingDown, X, Lock, Unplug, Focus, Calculator, Key
} from "lucide-react";

// --- Node Data for Intelligence Hover ---
type NodeData = { id: string; name: string; latency: string; load: string; status: string; cx: number; cy: number };
const GLOBAL_NODES: NodeData[] = [
  { id: "IAD", name: "US East (N. Virginia)", latency: "12ms", load: "42%", status: "Optimal", cx: 250, cy: 180 },
  { id: "FRA", name: "EU Central (Frankfurt)", latency: "14ms", load: "58%", status: "Optimal", cx: 550, cy: 150 },
  { id: "HND", name: "AP North (Tokyo)", latency: "18ms", load: "34%", status: "Optimal", cx: 850, cy: 180 },
  { id: "GRU", name: "SA East (São Paulo)", latency: "24ms", load: "61%", status: "Optimal", cx: 350, cy: 400 },
  { id: "SYD", name: "AP South (Sydney)", latency: "21ms", load: "28%", status: "Optimal", cx: 880, cy: 420 },
];

export default function GlobalNodesCommandCenter() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -60]);

  const [activeNode, setActiveNode] = useState<NodeData | null>(null);

  // === LIVE SYSTEM INTELLIGENCE STATE (Authentic Fluctuations) ===
  const [reqPerSec, setReqPerSec]     = useState(2847392);
  const [bandwidth, setBandwidth]     = useState(142.6);
  const [incidents, setIncidents]     = useState(0);
  const [threatsBlocked, setThreatsBlocked] = useState(1284);

  // === REVENUE CALCULATOR STATE ===
  const [monthlyTraffic, setMonthlyTraffic] = useState(50000);
  const [avgOrderValue, setAvgOrderValue] = useState(150);

  useEffect(() => {
    const ticker = setInterval(() => {
      // More realistic fluctuation: occasional sudden spikes, mostly steady growth
      const isSpike = Math.random() > 0.9;
      setReqPerSec(prev => prev + (isSpike ? Math.floor(Math.random() * 15000) : Math.floor(Math.random() * 4000 - 1800)));
      setBandwidth(prev => Math.max(120, Math.min(180, prev + (isSpike ? 8 : Math.random() * 4 - 2))));
      setThreatsBlocked(prev => prev + (Math.random() > 0.4 ? 1 : 0));
      
      // Simulate an occasional recovered incident for authenticity
      if (Math.random() > 0.98) {
        setIncidents(1);
        setTimeout(() => setIncidents(0), 4000);
      }
    }, 1800);
    return () => clearInterval(ticker);
  }, []);

  const logAreaRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fakeLogs = [
      ['ROUTE',  'Traffic spike from [AP-Tokyo] balanced to [AP-Seoul]'],
      ['SECURE', 'DDoS mitigation armed on [US-East-1] perimeter'],
      ['SYNC',   'Vector DB state replicated across 14 edge zones'],
      ['CACHE',  'Asset hit on [EU-Frankfurt] · TTFB: 8ms'],
      ['ROUTE',  'Failover protocol tested on [SA-São Paulo] · OK'],
      ['SECURE', 'SSL handshake verified globally in 1.2s'],
      ['RECOVER','Micro-outage in [EU-West] bypassed in 41ms'],
    ];
    let logIdx = 0;
    const interval = setInterval(() => {
      if (!logAreaRef.current) return;
      const items = logAreaRef.current.querySelectorAll('.dash-log-item');
      if (!items.length) return;
      const log = fakeLogs[logIdx % fakeLogs.length];
      const now = new Date().toISOString().replace('T',' ').slice(0,19);
      const last = items[items.length - 1] as HTMLElement;
      const b = last.querySelector('.dash-log-badge');
      if (b) {
        if (log[0] === 'ROUTE') b.className = 'dash-log-badge px-1.5 py-0.5 text-[9px] font-bold tracking-wider rounded border bg-amber-500/20 text-amber-600 dark:text-amber-500 border-amber-500/30';
        else if (log[0] === 'SECURE') b.className = 'dash-log-badge px-1.5 py-0.5 text-[9px] font-bold tracking-wider rounded border bg-slate-200 text-slate-900 dark:bg-white dark:text-[#050B14] border-slate-300 dark:border-white/20';
        else if (log[0] === 'RECOVER') b.className = 'dash-log-badge px-1.5 py-0.5 text-[9px] font-bold tracking-wider rounded border bg-emerald-500/20 text-emerald-600 dark:text-emerald-500 border-emerald-500/30';
        else b.className = 'dash-log-badge px-1.5 py-0.5 text-[9px] font-bold tracking-wider rounded border bg-slate-500/20 text-slate-700 dark:text-slate-300 border-slate-500/30';
        b.textContent = log[0];
      }
      const spans = last.querySelectorAll('span');
      if (spans[1]) spans[1].textContent = now.split(' ')[1];
      if (spans[2]) spans[2].textContent = log[1];
      logAreaRef.current.prepend(last);
      logIdx++;
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20, scale: prefersReducedMotion ? 1 : 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } }
  };
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } }
  };

  // Math for calculator: Assumes 2% standard CVR, +7% relative lift per 100ms saved. (Conservatively modelling a 15% relative CVR bump for edge delivery).
  const currentRevenue = monthlyTraffic * 0.02 * avgOrderValue;
  const recoveredRevenue = currentRevenue * 0.15; 

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-slate-50 dark:bg-[#050B14] text-slate-900 dark:text-slate-50 font-sans selection:bg-amber-500/30 selection:text-amber-700 dark:selection:text-amber-400 transition-colors duration-500 relative overflow-hidden pb-24 md:pb-32">
        
        {/* Top Progress Bar */}
        <m.div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-slate-400 via-amber-400 to-amber-500 origin-left z-50 shadow-[0_0_15px_rgba(245,158,11,0.6)] will-change-transform" style={{ scaleX }} aria-hidden="true" />

        {/* Global Noise Overlay */}
        <div className="fixed inset-0 z-0 pointer-events-none mix-blend-overlay opacity-[0.04] dark:opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }} aria-hidden="true" />

        {/* Ambient GPU Glows (Hidden on mobile for performance) */}
        <div className="hidden md:block fixed top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-slate-400/20 dark:bg-slate-500/10 blur-[150px] pointer-events-none -z-10 transform-gpu will-change-transform" aria-hidden="true" />
        <div className="hidden md:block fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-500/15 dark:bg-amber-600/10 blur-[150px] pointer-events-none -z-10 transform-gpu will-change-transform" aria-hidden="true" />
        
        {!prefersReducedMotion && (
          <>
            <div className="hidden md:block fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] rounded-full border border-amber-500/[0.03] dark:border-amber-500/[0.05] pointer-events-none -z-10 animate-[spin_120s_linear_infinite]" aria-hidden="true" />
            <div className="hidden md:block fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] rounded-full border border-slate-400/[0.04] dark:border-slate-500/[0.04] pointer-events-none -z-10 animate-[spin_90s_linear_infinite_reverse]" aria-hidden="true" />
          </>
        )}

        {/* === SCARCITY BAR === */}
        <div className="sticky top-0 z-40 w-full border-b border-amber-500/20 bg-amber-500/[0.06] dark:bg-amber-500/[0.04] backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 items-center justify-center rounded-full bg-amber-500/20" aria-hidden="true">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              </span>
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-amber-700 dark:text-amber-500" role="status">
                Private Builds: <span className="text-slate-900 dark:text-white">2 slots remaining this month</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="hidden sm:flex items-center gap-1.5 text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                {threatsBlocked.toLocaleString()} threats blocked today
              </span>
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500">
                Application only · No walk-ins
              </span>
            </div>
          </div>
        </div>

        <main className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-12 md:pt-20">
          
          {/* ========================================================================= */}
          {/* LAYER 1: IDENTITY & SCALE                                                  */}
          {/* ========================================================================= */}
          <m.header initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 md:mb-28 relative">
            <div className="flex-1">
              <m.div variants={fadeUp} className="inline-flex items-center gap-3 px-4 py-2 border border-slate-300 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-full mb-6 shadow-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" aria-hidden="true" />
                <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold">
                  Your Private Sovereign Edge Network
                </span>
              </m.div>
              
              <m.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-[5rem] font-black uppercase tracking-tighter drop-shadow-sm text-slate-900 dark:text-white leading-[0.95] mb-4">
                Planetary <br className="block sm:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400 dark:from-amber-400 dark:to-yellow-200">
                  Dominance
                </span>
              </m.h1>

              <m.p variants={fadeUp} className="text-sm md:text-base font-medium text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-6">
                Every 100ms of delay costs you revenue. Every outage loses trust. Every weak server leaks authority.
                <span className="text-slate-900 dark:text-white font-bold"> This infrastructure protects all three.</span>
              </m.p>

              {/* Silent Authority Banner */}
              <m.div variants={fadeUp} className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-slate-900/5 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 w-fit">
                 <Shield className="w-4 h-4 text-amber-600 dark:text-amber-500" aria-hidden="true" />
                 <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-slate-700 dark:text-slate-300">
                   Deployed across 4 continents. Protecting 7-figure operations.
                 </span>
              </m.div>

              {/* Trust Proof Strip */}
              <m.div variants={fadeUp} className="flex flex-wrap gap-4 md:gap-8 text-[9px] md:text-[10px] font-mono uppercase tracking-widest font-bold text-slate-600 dark:text-slate-400 mt-6 border-t border-slate-300 dark:border-white/10 pt-6">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" aria-hidden="true"/> 99.999% Uptime SLA</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" aria-hidden="true"/> 142 Global Edge PoPs</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" aria-hidden="true"/> Sub-20ms Avg Latency</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" aria-hidden="true"/> Zero SaaS Lock-in</span>
              </m.div>
            </div>
            
            <m.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link href="/dashboard/initiate" className="group relative flex items-center justify-between gap-6 px-6 py-4 bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 rounded-2xl transition-all shadow-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-[#050B14]">
                {/* CSS Sweep Animation (Lighter than JS) */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" aria-hidden="true" />
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest font-bold opacity-80 mb-1">Application Only</div>
                  <div className="text-sm font-black uppercase tracking-widest">Apply For Deployment</div>
                </div>
                <Power className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
              </Link>
            </m.div>
          </m.header>

          {/* ========================================================================= */}
          {/* LAYER 2: THE GLOBAL NODE RADAR                                             */}
          {/* ========================================================================= */}
          <m.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="mb-24 md:mb-32">
            <m.div variants={fadeUp} className="w-full h-[500px] md:h-[650px] rounded-[2rem] md:rounded-[3rem] bg-slate-100/60 dark:bg-[#0A0F1C]/60 border border-slate-300 dark:border-white/10 backdrop-blur-3xl shadow-2xl relative overflow-hidden flex items-center justify-center">
              
              {/* Boot Flash */}
              {!prefersReducedMotion && (
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-amber-500/10 dark:bg-amber-500/15 pointer-events-none z-50 mix-blend-overlay"
                  aria-hidden="true"
                />
              )}

              {/* === LIVE SYSTEM INTELLIGENCE PANEL (top-left) === */}
              <div className="absolute top-6 md:top-10 left-6 md:left-10 z-20 pointer-events-none" role="region" aria-label="System Metrics">
                <div className="text-[10px] md:text-xs font-mono uppercase tracking-widest font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                  <Activity className="w-4 h-4 text-amber-500" aria-hidden="true" /> Live Routing Matrix
                </div>
                <div className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tabular-nums">
                  {(reqPerSec / 1000000).toFixed(2)}M
                </div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold mb-4">Req / min</div>
                
                <div className="flex flex-col gap-1.5">
                  {[
                    { label: "Active regions", value: `38` },
                    { label: "Bandwidth", value: `${bandwidth.toFixed(1)} GB/s` },
                    { label: "Critical failures", value: `${incidents}`, highlight: incidents > 0 },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-3 text-[9px] font-mono font-bold uppercase tracking-widest">
                      <span className="text-slate-500">{stat.label}</span>
                      <span className={stat.highlight ? "text-red-500" : "text-slate-900 dark:text-white tabular-nums"}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Control Panel */}
              <div className="hidden sm:block absolute bottom-6 md:bottom-10 left-6 md:left-10 z-20 backdrop-blur-2xl bg-white/80 dark:bg-[#050B14]/80 border border-slate-300 dark:border-white/10 rounded-2xl p-5 shadow-xl w-[220px]">
                <div className="text-[9px] font-mono uppercase tracking-widest font-bold text-slate-500 mb-4 flex items-center gap-2">
                  <Command className="w-3 h-3 text-amber-500" aria-hidden="true" /> Node Controls
                </div>
                <div className="flex flex-col gap-2.5">
                  <button type="button" className="group flex items-center justify-between w-full text-[10px] font-bold uppercase tracking-widest px-3 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 rounded-lg border border-amber-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-amber-500">
                    Reroute Traffic <RefreshCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" aria-hidden="true" />
                  </button>
                  <button type="button" className="flex items-center justify-between w-full text-[10px] font-bold uppercase tracking-widest px-3 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 border border-transparent dark:border-white/5">
                    Simulate Failover <ShieldAlert className="w-3 h-3" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Live Hover Intelligence Panel */}
              <AnimatePresence>
                {activeNode && (
                  <m.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute top-6 md:top-10 right-6 md:right-10 z-30 bg-white/90 dark:bg-[#050B14]/90 backdrop-blur-xl p-5 rounded-2xl border border-slate-300 dark:border-white/10 shadow-2xl min-w-[200px] pointer-events-none"
                  >
                    <div className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-600 dark:text-amber-500 mb-3 flex items-center gap-2">
                      <MapPin className="w-3 h-3" aria-hidden="true" /> {activeNode.id}
                    </div>
                    <div className="text-sm font-black text-slate-900 dark:text-white mb-4">{activeNode.name}</div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest font-bold">
                        <span className="text-slate-500">Latency:</span>
                        <span className="text-slate-900 dark:text-white">{activeNode.latency}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest font-bold">
                        <span className="text-slate-500">Node Load:</span>
                        <span className="text-slate-900 dark:text-white">{activeNode.load}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest font-bold">
                        <span className="text-slate-500">Status:</span>
                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" /> {activeNode.status}
                        </span>
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>

              {/* ORBITAL MAP */}
              <m.div style={{ y: yParallax }} className="absolute inset-0 flex items-center justify-center opacity-90 scale-[1.5] sm:scale-[1.2] md:scale-[1.05]" aria-hidden="true">
                <svg viewBox="0 0 1000 500" className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                  <g className="stroke-slate-300 dark:stroke-slate-800" strokeWidth="1" strokeDasharray="4 8">
                    <line x1="100" y1="0" x2="100" y2="500" />
                    <line x1="300" y1="0" x2="300" y2="500" />
                    <line x1="500" y1="0" x2="500" y2="500" />
                    <line x1="700" y1="0" x2="700" y2="500" />
                    <line x1="900" y1="0" x2="900" y2="500" />
                    <line x1="0" y1="100" x2="1000" y2="100" />
                    <line x1="0" y1="250" x2="1000" y2="250" />
                    <line x1="0" y1="400" x2="1000" y2="400" />
                  </g>
                  {/* Connection Lines */}
                  {!prefersReducedMotion && (
                    <g fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6">
                      <path d="M 250 180 Q 400 50 550 150" strokeDasharray="15 30">
                        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="15s" calcMode="linear" repeatCount="indefinite" />
                      </path>
                      <path d="M 550 150 Q 700 200 850 180" strokeDasharray="10 40">
                        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="20s" calcMode="linear" repeatCount="indefinite" />
                      </path>
                      <path d="M 250 180 Q 200 300 350 400" strokeDasharray="20 40">
                        <animate attributeName="stroke-dashoffset" from="0" to="1000" dur="18s" calcMode="linear" repeatCount="indefinite" />
                      </path>
                      <path d="M 850 180 Q 950 300 880 420" strokeDasharray="10 20">
                        <animate attributeName="stroke-dashoffset" from="0" to="1000" dur="12s" calcMode="linear" repeatCount="indefinite" />
                      </path>
                    </g>
                  )}
                  {/* Interactive Nodes */}
                  {GLOBAL_NODES.map((node, i) => (
                    <g key={node.id} onMouseEnter={() => setActiveNode(node)} onMouseLeave={() => setActiveNode(null)} className="cursor-pointer group">
                      <circle cx={node.cx} cy={node.cy} r="30" fill="transparent" />
                      <circle cx={node.cx} cy={node.cy} r={i === 1 ? "8" : "6"} className="fill-slate-900 dark:fill-white group-hover:fill-amber-500 transition-colors duration-300" />
                      {!prefersReducedMotion && (
                        <circle cx={node.cx} cy={node.cy} r={i === 1 ? "30" : "25"} fill="none" className="stroke-slate-900 dark:stroke-white group-hover:stroke-amber-500 transition-colors duration-300" strokeWidth="1">
                          <animate attributeName="r" values={i === 1 ? "8;50" : "6;40"} dur={`${2 + (i * 0.2)}s`} repeatCount="indefinite"/>
                          <animate attributeName="opacity" values="0.8;0" dur={`${2 + (i * 0.2)}s`} repeatCount="indefinite"/>
                        </circle>
                      )}
                    </g>
                  ))}
                </svg>
              </m.div>
            </m.div>
          </m.section>

          {/* ========================================================================= */}
          {/* LAYER 3: THE DEPLOYMENT PROTOCOL (How It Works)                            */}
          {/* ========================================================================= */}
          <m.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="mb-24 md:mb-32">
             <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-4">The Deployment Protocol</h2>
                <p className="text-slate-600 dark:text-slate-400 font-medium text-sm md:text-base">We handle the architecture. You keep the ownership. A frictionless transfer of sovereign power.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" aria-hidden="true" />
                
                {[
                  { step: "01", title: "Audit & Architect", desc: "We analyze your current stack, identify latency bottlenecks, and design a custom edge-native architecture.", icon: Focus },
                  { step: "02", title: "Private Build", desc: "Our engineers construct your entire system on isolated infrastructure. Zero shared resources. Zero compromises.", icon: Layers },
                  { step: "03", title: "Deploy & Transfer", desc: "The system goes live sub-50ms globally. We hand over 100% of the cryptographic keys and source code.", icon: Key },
                ].map((item, idx) => (
                  <m.div key={idx} variants={fadeUp} className="relative p-8 rounded-[2rem] bg-white/60 dark:bg-slate-900/40 border border-slate-300 dark:border-white/10 backdrop-blur-xl text-center flex flex-col items-center group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                    <div className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-black font-mono text-lg mb-6 z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <item.icon className="w-6 h-6 text-amber-600 dark:text-amber-500 mb-4 z-10" aria-hidden="true" />
                    <h3 className="text-lg font-black uppercase text-slate-900 dark:text-white mb-3 z-10">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-medium z-10">{item.desc}</p>
                  </m.div>
                ))}
             </div>
          </m.section>

          {/* ========================================================================= */}
          {/* LAYER 4: SOVEREIGNTY VS RENTAL (The Comparison)                            */}
          {/* ========================================================================= */}
          <m.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="mb-24 md:mb-32">
            <m.div variants={fadeUp} className="p-1 rounded-[2.5rem] bg-gradient-to-b from-slate-300 to-slate-200 dark:from-white/10 dark:to-white/5 shadow-2xl">
              <div className="rounded-[2.4rem] bg-white dark:bg-[#0A0F1C] p-6 md:p-12">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-4">Why Vaulltcore?</h2>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">Stop renting your infrastructure. Start owning your digital real estate.</p>
                </div>

                <div className="overflow-x-auto pb-4">
                  <div className="min-w-[600px] w-full">
                    <div className="grid grid-cols-3 gap-4 border-b border-slate-200 dark:border-white/10 pb-4 mb-4 text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
                      <div>Feature</div>
                      <div>Standard SaaS (Rented)</div>
                      <div className="text-amber-600 dark:text-amber-500 flex items-center gap-2"><Shield className="w-3 h-3" /> Vaulltcore (Owned)</div>
                    </div>
                    
                    {[
                      { f: "Architecture", rented: "Shared / Multi-tenant", owned: "Isolated / Single-tenant" },
                      { f: "Code Ownership", rented: "Locked in platform", owned: "100% Handed to you" },
                      { f: "Pricing Model", rented: "Scales exponentially", owned: "Predictable flat compute" },
                      { f: "Global Edge", rented: "Premium add-on", owned: "Default across 142 PoPs" },
                      { f: "Security", rented: "Generic WAF", owned: "Custom E2E Encrypted" },
                    ].map((row, i) => (
                      <div key={i} className="grid grid-cols-3 gap-4 py-4 border-b border-slate-100 dark:border-white/5 last:border-0 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors rounded-xl px-2">
                        <div className="text-sm font-bold text-slate-900 dark:text-white">{row.f}</div>
                        <div className="text-sm font-medium text-slate-500 flex items-center gap-2"><X className="w-4 h-4 text-slate-400" /> {row.rented}</div>
                        <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> {row.owned}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <Link href="/dashboard/initiate" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 font-black uppercase tracking-widest text-xs rounded-xl hover:bg-slate-800 dark:hover:bg-amber-400 transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-[#0A0F1C]">
                    See My Infrastructure Plan <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </m.div>
          </m.section>

          {/* ========================================================================= */}
          {/* LAYER 5: PERSUASION & PROOF (With Calculator)                              */}
          {/* ========================================================================= */}
          <m.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 mb-24 md:mb-40">
             <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6">
                
                {/* The Speed-Revenue Link */}
                <m.div variants={fadeUp} className="p-8 rounded-[2rem] bg-white/60 dark:bg-slate-900/40 border border-slate-300 dark:border-white/10 backdrop-blur-xl shadow-sm relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true" />
                   <div className="relative z-10">
                     <div className="text-[10px] font-mono uppercase tracking-widest font-bold text-slate-500 mb-6 flex items-center gap-2">
                       <Trophy className="w-4 h-4 text-amber-500" aria-hidden="true" /> The Speed-Revenue Link
                     </div>
                     <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Latency Kills Revenue.</h3>
                     <p className="text-slate-600 dark:text-slate-400 font-medium mb-6">
                       Every 100ms delay drops conversion rate by 7%. Traditional servers force users to wait for data to cross oceans. We deploy your entire system to the edge — milliseconds from your customer, everywhere.
                     </p>
                     <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/15 mb-6">
                       <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-600 dark:text-amber-500">
                         What corporations spend six figures to build — delivered privately for founders and operators.
                       </p>
                     </div>
                     <div className="flex items-center gap-6 border-t border-slate-300 dark:border-slate-800 pt-6">
                        <div>
                          <div className="text-3xl font-black text-amber-600 dark:text-amber-500">+42%</div>
                          <div className="text-[10px] font-mono font-bold text-slate-500 uppercase">Avg. CVR Lift</div>
                        </div>
                        <div className="w-px h-10 bg-slate-300 dark:bg-slate-800" aria-hidden="true" />
                        <div>
                          <div className="text-3xl font-black text-slate-900 dark:text-white">100/100</div>
                          <div className="text-[10px] font-mono font-bold text-slate-500 uppercase">Lighthouse Core</div>
                        </div>
                     </div>
                   </div>
                </m.div>

                {/* === INTERACTIVE VALUE ESTIMATOR === */}
                <m.div variants={fadeUp} className="p-6 rounded-[2rem] bg-slate-900 dark:bg-black/60 border border-slate-800 dark:border-white/10 backdrop-blur-xl shadow-xl flex-1 text-white">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest font-bold text-slate-400 mb-6">
                    <Calculator className="w-4 h-4 text-emerald-500" aria-hidden="true" /> Recovered Revenue Estimator
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="traffic-slider" className="flex justify-between text-xs font-bold mb-3">
                      <span>Monthly Traffic</span>
                      <span className="text-amber-400">{monthlyTraffic.toLocaleString()}</span>
                    </label>
                    <input 
                      id="traffic-slider"
                      type="range" min="10000" max="500000" step="10000"
                      value={monthlyTraffic}
                      onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                      className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                      aria-label="Adjust monthly traffic"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">Estimated Gain per Month</span>
                    <span className="text-3xl font-black text-emerald-400 tabular-nums">${Math.floor(recoveredRevenue).toLocaleString()}</span>
                    <span className="text-[9px] text-slate-500 mt-2">*Based on sub-100ms edge delivery bump.</span>
                  </div>
                </m.div>

             </div>

             {/* Live Terminal */}
             <m.div variants={fadeUp} className="lg:col-span-7 flex flex-col h-full min-h-[400px] rounded-[2rem] bg-slate-900 dark:bg-black/80 border border-slate-800 dark:border-white/10 backdrop-blur-3xl shadow-xl overflow-hidden relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" aria-hidden="true" />
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest font-bold text-white">
                    <Radio className="w-4 h-4 text-amber-500" aria-hidden="true" /> Global Traffic Feed
                  </div>
                  <div className="flex gap-2" aria-hidden="true">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  </div>
                </div>
                <div className="flex-1 p-6 font-mono text-[10px] md:text-xs flex flex-col justify-end gap-3 relative" ref={logAreaRef} aria-live="polite">
                  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-900 dark:from-black to-transparent z-10 pointer-events-none" aria-hidden="true" />
                  <div className="dash-log-item flex items-start gap-3 opacity-40">
                    <span className="dash-log-badge px-1.5 py-0.5 rounded border bg-slate-200 text-slate-900 dark:bg-white dark:text-[#050B14] border-slate-300 dark:border-white/20 font-bold tracking-wider text-[9px]">SECURE</span>
                    <span className="text-slate-500 shrink-0">14:02:11</span>
                    <span className="text-slate-300">Edge Firewall rules synchronized globally.</span>
                  </div>
                  <div className="dash-log-item flex items-start gap-3 opacity-60">
                    <span className="dash-log-badge px-1.5 py-0.5 rounded border bg-slate-500/20 text-slate-400 border-slate-500/30 font-bold tracking-wider text-[9px]">SYNC</span>
                    <span className="text-slate-500 shrink-0">14:02:15</span>
                    <span className="text-slate-300">Static assets propagated to 142 PoPs.</span>
                  </div>
                  <div className="dash-log-item flex items-start gap-3 opacity-100">
                    <span className="dash-log-badge px-1.5 py-0.5 rounded border bg-amber-500/20 text-amber-600 dark:text-amber-500 border-amber-500/30 font-bold tracking-wider text-[9px]">ROUTE</span>
                    <span className="text-slate-500 shrink-0">14:02:22</span>
                    <span className="text-white font-medium">Traffic from [London] routed to local node. TTFB 11ms.</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-amber-500 animate-pulse">
                    <span className="w-1.5 h-3.5 bg-amber-500 inline-block shadow-[0_0_8px_rgba(245,158,11,0.8)]" aria-hidden="true" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Listening for traffic...</span>
                  </div>
                </div>
             </m.div>
          </m.section>

          {/* ========================================================================= */}
          {/* FINAL CTA (Unstoppable Certainty)                                          */}
          {/* ========================================================================= */}
          <m.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16 text-center relative z-20">
            <div className="p-8 md:p-20 rounded-[3rem] bg-slate-900 dark:bg-black border border-slate-800 dark:border-white/10 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-900/0 dark:via-black/0 to-transparent pointer-events-none" aria-hidden="true" />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" aria-hidden="true" />
              
              <div className="w-20 h-20 mx-auto rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-700">
                <Lock className="w-10 h-10 text-amber-500" aria-hidden="true" />
              </div>

              {/* Scarcity */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-600 dark:text-amber-500">
                  2 private build slots remaining
                </span>
              </div>

              <div className="text-[10px] font-mono uppercase tracking-widest font-bold text-slate-400 mb-4">
                A system that becomes an asset — not a subscription.
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-black uppercase tracking-tighter text-white mb-6 leading-[0.95] drop-shadow-md">
                Secure My <br className="hidden md:block" /> Global Infrastructure.
              </h2>
              
              {/* Pricing Anchor */}
              <p className="text-slate-400 text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                Enterprise agencies charge $25k+ to build this architecture.<br/>
                <span className="text-white font-bold">We deploy it privately for a fraction, and hand you the keys.</span>
              </p>
              
              <Link href="/dashboard/initiate" className="inline-flex items-center gap-4 px-10 md:px-12 py-5 md:py-6 bg-amber-500 text-slate-950 font-black uppercase tracking-widest text-xs md:text-sm rounded-2xl hover:bg-amber-400 transition-all shadow-[0_15px_40px_rgba(245,158,11,0.3)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.4)] hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-amber-500/50">
                <Power className="w-5 h-5" aria-hidden="true" /> Apply For Private Deployment
              </Link>
              
              {/* Post-Click Certainty */}
              <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true"/> No obligation consultation</span>
                <span className="hidden md:block w-1 h-1 rounded-full bg-slate-700" aria-hidden="true" />
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true"/> Response within 48 Hours</span>
                <span className="hidden md:block w-1 h-1 rounded-full bg-slate-700" aria-hidden="true" />
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true"/> Architecture reviewed before payment</span>
              </div>
            </div>
          </m.section>

        </main>

        {/* ELITE FOOTER */}
        <footer className="border-t border-slate-300 dark:border-white/5 bg-white/60 dark:bg-slate-950/80 backdrop-blur-3xl pt-20 pb-10 relative z-10" role="contentinfo">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="flex flex-col items-center mb-16 text-center">
              <div className="w-12 h-12 border-2 border-slate-900 dark:border-amber-500 flex items-center justify-center relative mb-6 shadow-sm">
                <div className="w-3 h-3 bg-slate-900 dark:bg-amber-500 absolute top-0 left-0" aria-hidden="true" />
                <div className="w-3 h-3 bg-slate-900 dark:bg-amber-500 absolute bottom-0 right-0" aria-hidden="true" />
              </div>
              <span className="text-3xl font-black uppercase tracking-widest text-slate-900 dark:text-white mb-2">Vaulltcore</span>
              <span className="text-[10px] font-mono tracking-widest text-amber-700 dark:text-amber-500 font-bold uppercase mb-6">Sovereign DFY Systems</span>
              
              {/* Founder Trust Element */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5">
                {/* Fallback to standard div if Image is not available immediately, but configured for Next/Image */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-300 dark:border-white/10 bg-slate-300 dark:bg-slate-800 shrink-0">
                   <Image 
                     src="/images/user/owner.jpg" 
                     alt="Knowledge Rumhizha"
                     fill
                     className="object-cover"
                     sizes="40px"
                   />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase">Architected personally by</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Knowledge Rumhizha</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              <a href="mailto:build@vaulltcore.com" className="text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase text-slate-500 hover:text-amber-600 dark:hover:text-amber-500 transition-colors focus:outline-none focus:underline">
                build@vaulltcore.com
              </a>
              <Link href="/dashboard/initiate" className="text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase text-slate-500 hover:text-amber-600 dark:hover:text-amber-500 transition-colors focus:outline-none focus:underline">
                Apply For Deployment
              </Link>
              <a href="https://vaulltcore.com" className="text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase text-slate-500 hover:text-amber-600 dark:hover:text-amber-500 transition-colors focus:outline-none focus:underline">
                vaulltcore.com
              </a>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-slate-300 dark:border-white/5 pt-8 gap-4">
              <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 text-center md:text-left">
                © {new Date().getFullYear()} Vaulltcore · Harare, Zimbabwe · Command Center Ready
              </span>
              <span className="flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-500 font-bold">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" aria-hidden="true" />
                Global Network Active
              </span>
            </div>
          </div>
        </footer>

      </div>
    </LazyMotion>
  );
}
