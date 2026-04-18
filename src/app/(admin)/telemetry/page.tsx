"use client";

import React from "react";
import { LazyMotion, domAnimation, m, useScroll, useTransform, Variants } from "framer-motion";
import { Activity, Shield, Cpu, Zap, Globe, Server, Database, Lock, AlertTriangle } from "lucide-react";

export default function TelemetryPage() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // STRICT TYPE FIX: 'Variants' + 'as const' guarantees zero Vercel build errors.
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const pulseAnim: Variants = {
    animate: { opacity: [0.4, 1, 0.4], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-amber-500/30 selection:text-amber-700 dark:selection:text-amber-400 transition-colors duration-500 relative overflow-hidden pb-24 md:pb-32">
        
        {/* --- GLOBAL AMBIENT GLASS & LIGHTING (Optimized SVG Background) --- */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} aria-hidden="true" />
        
        {/* GPU Accelerated Ambient Orbs */}
        <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-slate-400/20 dark:bg-amber-500/10 blur-[120px] md:blur-[150px] pointer-events-none -z-10 transform-gpu" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-400/20 dark:bg-slate-500/10 blur-[120px] md:blur-[150px] pointer-events-none -z-10 transform-gpu" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 pt-20 md:pt-24 relative z-10 flex flex-col gap-8 md:gap-12">
          
          {/* SECTION 1: HEADER & SYSTEM STATUS (Mobile First Flex) */}
          <m.header initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/30 dark:border-slate-800/50 pb-8">
            <div className="flex-1">
              <m.div variants={fadeUp} className="inline-flex items-center gap-3 px-3 md:px-4 py-1.5 border border-white/40 dark:border-white/10 bg-white/40 dark:bg-black/30 backdrop-blur-md rounded-full mb-4 md:mb-6 shadow-sm w-fit">
                <m.span variants={pulseAnim} animate="animate" className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-green-700 dark:text-green-400 font-bold">Live Telemetry Active</span>
              </m.div>
              <m.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter drop-shadow-sm text-slate-900 dark:text-white leading-[1.1]">
                System <br className="block sm:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400 dark:from-amber-500 dark:to-amber-300">Diagnostics</span>
              </m.h1>
            </div>
            
            {/* Quick Metrics */}
            <m.div variants={fadeUp} className="flex flex-wrap sm:flex-nowrap gap-3 md:gap-4 text-[10px] md:text-xs font-mono uppercase tracking-widest font-bold w-full lg:w-auto">
              <div className="flex-1 sm:flex-none p-3 md:p-4 border border-white/50 dark:border-white/10 bg-white/50 dark:bg-slate-900/40 backdrop-blur-xl rounded-xl shadow-sm hover:border-amber-500/30 transition-colors">
                <div className="text-slate-600 dark:text-slate-400 mb-1 truncate">Global Latency</div>
                <div className="text-lg md:text-xl text-slate-900 dark:text-white flex items-center gap-2"><Zap className="w-4 h-4 text-amber-600 dark:text-amber-500 shrink-0"/> 12ms</div>
              </div>
              <div className="flex-1 sm:flex-none p-3 md:p-4 border border-white/50 dark:border-white/10 bg-white/50 dark:bg-slate-900/40 backdrop-blur-xl rounded-xl shadow-sm hover:border-amber-500/30 transition-colors">
                <div className="text-slate-600 dark:text-slate-400 mb-1 truncate">Network Load</div>
                <div className="text-lg md:text-xl text-slate-900 dark:text-white flex items-center gap-2"><Activity className="w-4 h-4 text-amber-600 dark:text-amber-500 shrink-0"/> 14.2%</div>
              </div>
            </m.div>
          </m.header>

          {/* SECTION 2: ANIMATED SVG WIDGET (Mobile Responsive Height) */}
          <m.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] border border-white/50 dark:border-white/10 bg-slate-100/40 dark:bg-slate-950/40 backdrop-blur-2xl rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
            <div className="absolute top-4 left-4 md:left-6 z-20 text-[10px] md:text-xs font-mono uppercase tracking-widest font-bold text-slate-600 dark:text-slate-400">Orbital Edge Network</div>
            
            {/* SVG Animation Engine (calcMode FIXED) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-70 dark:opacity-100">
              <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" className="w-full h-full object-cover">
                <defs>
                  <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <g className="stroke-slate-400 dark:stroke-slate-800" strokeWidth="1" opacity="0.3 dark:opacity-0.5">
                  <path d="M 0 100 L 800 100 M 0 200 L 800 200 M 0 300 L 800 300" />
                  <path d="M 200 0 L 200 400 M 400 0 L 400 400 M 600 0 L 600 400" />
                </g>
                <g fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="15 30">
                  <path d="M 100 350 C 300 350, 400 50, 700 100">
                    <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="20s" calcMode="linear" repeatCount="indefinite" />
                  </path>
                  <path d="M 50 150 C 200 150, 500 350, 750 200" stroke="#94a3b8" strokeOpacity="0.5">
                    <animate attributeName="stroke-dashoffset" from="0" to="1000" dur="25s" calcMode="linear" repeatCount="indefinite" />
                  </path>
                </g>
                <circle cx="400" cy="200" r="8" fill="#f59e0b" />
                <circle cx="400" cy="200" r="40" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.5">
                  <animate attributeName="r" values="8; 80" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8; 0" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="700" cy="100" r="5" fill="#f59e0b" />
                <circle cx="100" cy="350" r="5" fill="#f59e0b" />
              </svg>
            </div>
            
            {/* Glass Fade Bottom */}
            <div className="absolute bottom-0 inset-x-0 h-16 md:h-24 bg-gradient-to-t from-white/80 dark:from-slate-950/90 to-transparent z-10" />
          </m.section>

          {/* SECTION 3: OVERVIEW CARDS */}
          <m.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
            <div className="mb-3 md:mb-4 text-xs md:text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-amber-600 dark:text-amber-500" /> Core Overview
            </div>
            <div className="p-4 md:p-6 border border-white/60 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl rounded-2xl shadow-sm">
               {/* DROP YOUR COMPONENT HERE: <OverviewCards /> */}
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 opacity-70">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="h-20 md:h-24 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-white/40 dark:border-slate-700/50 animate-pulse"></div>
                 ))}
               </div>
            </div>
          </m.section>

          {/* GRID: MAIN INSIGHTS & SIDEBAR */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Left Column (Spans 2) */}
            <m.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="col-span-1 lg:col-span-2 space-y-8 md:space-y-12">
              
              {/* INSIGHT CARDS */}
              <m.div variants={fadeUp}>
                <div className="mb-3 md:mb-4 text-xs md:text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-amber-600 dark:text-amber-500" /> Deep Insights
                </div>
                <div className="p-4 md:p-6 border border-white/60 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl rounded-2xl shadow-sm">
                  {/* DROP YOUR COMPONENT HERE: <InsightCards /> */}
                  <div className="h-48 md:h-64 rounded-xl bg-gradient-to-br from-white/50 to-white/20 dark:from-slate-800/40 dark:to-slate-900/40 border border-white/40 dark:border-slate-700/50 flex flex-col justify-end p-4">
                     <div className="w-full flex items-end gap-1 md:gap-2 h-32">
                        {[40, 70, 45, 90, 65, 85, 100, 60, 30, 80].map((h, i) => (
                          <div key={i} className={`flex-1 ${i > 6 ? 'hidden sm:block' : ''} bg-amber-500/80 rounded-t-sm hover:bg-amber-400 transition-colors`} style={{ height: `${h}%` }}></div>
                        ))}
                     </div>
                  </div>
                </div>
              </m.div>

              {/* OPERATIONAL CARDS */}
              <m.div variants={fadeUp}>
                <div className="mb-3 md:mb-4 text-xs md:text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-500" /> Operational Matrix
                </div>
                <div className="p-4 md:p-6 border border-white/60 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl rounded-2xl shadow-sm">
                  {/* DROP YOUR COMPONENT HERE: <OperationalCards /> */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div className="p-4 rounded-xl bg-white/50 dark:bg-slate-800/40 border border-white/40 dark:border-slate-700/50 hover:border-amber-500/30 transition-colors">
                       <Shield className="w-5 h-5 md:w-6 md:h-6 text-slate-600 dark:text-slate-500 mb-2"/>
                       <div className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">Secure</div>
                       <div className="text-[10px] font-mono text-slate-600 dark:text-slate-500 uppercase">Edge Firewall</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/50 dark:bg-slate-800/40 border border-white/40 dark:border-slate-700/50 hover:border-amber-500/30 transition-colors">
                       <Server className="w-5 h-5 md:w-6 md:h-6 text-amber-600 dark:text-amber-500 mb-2"/>
                       <div className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">142</div>
                       <div className="text-[10px] font-mono text-slate-600 dark:text-slate-500 uppercase">Active Nodes</div>
                    </div>
                  </div>
                </div>
              </m.div>
            </m.section>

            {/* Right Column (Sidebar) */}
            <m.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="col-span-1 space-y-8 h-full">
               <div className="h-full min-h-[400px] border border-white/60 dark:border-white/10 bg-white/50 dark:bg-slate-950/60 backdrop-blur-2xl rounded-2xl p-4 md:p-6 shadow-sm flex flex-col relative overflow-hidden">
                 <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
                 
                 <div className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-amber-600 dark:text-amber-500" /> Security Feed
                 </div>

                 <div className="flex-1 flex flex-col gap-3 font-mono text-[10px] md:text-xs overflow-hidden">
                    {[
                      { status: "OK", text: "SSL Cert Verified", color: "text-green-600 dark:text-green-500", bg: "bg-green-100 dark:bg-slate-800" },
                      { status: "BLOCK", text: "DDoS Mitigation Active", color: "text-amber-600 dark:text-amber-500", bg: "bg-amber-100 dark:bg-slate-800" },
                      { status: "SYNC", text: "Repo Hash Validated", color: "text-slate-600 dark:text-slate-500", bg: "bg-slate-200 dark:bg-slate-800" },
                      { status: "OK", text: "Auth Tokens Rotated", color: "text-green-600 dark:text-green-500", bg: "bg-green-100 dark:bg-slate-800" },
                    ].map((log, i) => (
                      <div key={i} className="flex items-start gap-2 md:gap-3 p-2 rounded-lg bg-white/50 dark:bg-white/5 border border-white/40 dark:border-white/5 hover:border-amber-500/20 transition-colors">
                        <span className={`px-1.5 py-0.5 rounded ${log.bg} font-bold ${log.color}`}>{log.status}</span>
                        <span className="text-slate-800 dark:text-slate-300 mt-0.5 truncate">{log.text}</span>
                      </div>
                    ))}

                    {/* Compact Rotating Radar */}
                    <div className="mt-auto pt-6 flex justify-center opacity-60 dark:opacity-80">
                      <svg className="w-24 h-24 md:w-32 md:h-32 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" className="stroke-slate-400 dark:stroke-slate-700" strokeWidth="1" strokeDasharray="4 4" />
                        <circle cx="50" cy="50" r="30" fill="none" className="stroke-slate-500 dark:stroke-slate-600" strokeWidth="1" />
                        <path d="M50 5 L50 50 L90 70" fill="none" className="stroke-amber-500" strokeWidth="2" />
                        <circle cx="90" cy="70" r="3" className="fill-amber-500" />
                      </svg>
                    </div>
                 </div>
               </div>
            </m.section>
          </div>

          {/* SECTION 4: TABLE CARDS (Mobile Scrollable) */}
          <m.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="w-full">
            <div className="mb-3 md:mb-4 text-xs md:text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-2">
              <Database className="w-4 h-4 text-amber-600 dark:text-amber-500" /> Data Logs
            </div>
            
            {/* Wrap in relative group to hide scrollbar but allow swipe */}
            <div className="p-2 md:p-6 border border-white/60 dark:border-white/10 bg-white/40 dark:bg-slate-950/40 backdrop-blur-2xl rounded-2xl md:rounded-3xl shadow-sm overflow-hidden relative">
               
               {/* DROP YOUR COMPONENT HERE: <TableCards /> */}
               
               {/* Native CSS hide scrollbar class added to wrapper */}
               <div className="w-full overflow-x-auto scrollbar-hide opacity-80">
                 <div className="min-w-[600px] flex flex-col gap-2">
                    <div className="flex justify-between p-3 border-b border-slate-300/50 dark:border-slate-800 text-[10px] font-mono uppercase tracking-widest text-slate-600 dark:text-slate-500 font-bold">
                      <span className="w-1/4">Timestamp</span>
                      <span className="w-1/4">Event Type</span>
                      <span className="w-2/4">Resolution</span>
                    </div>
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="flex justify-between p-3 bg-white/60 dark:bg-slate-800/30 rounded-lg text-[10px] md:text-xs font-mono text-slate-800 dark:text-slate-300 border border-white/50 dark:border-transparent hover:border-amber-500/20 transition-colors">
                        <span className="w-1/4 text-slate-600 dark:text-slate-500">{new Date().toISOString().slice(11,19)}</span>
                        <span className="w-1/4 text-amber-600 dark:text-amber-500">Route Execution</span>
                        <span className="w-2/4 text-green-700 dark:text-green-400">Success · Edge Cache Hit</span>
                      </div>
                    ))}
                 </div>
               </div>

               {/* Right edge fade for mobile scroll hint */}
               <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white/40 dark:from-slate-950/40 to-transparent pointer-events-none md:hidden z-10" />
            </div>
          </m.section>

        </div>
      </div>
      
      {/* Global Style Injector to hide scrollbar on the table container */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </LazyMotion>
  );
}
