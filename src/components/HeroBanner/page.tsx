"use client";

import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Shield, Zap, Lock, ArrowRight, Activity, Terminal } from "lucide-react";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full overflow-hidden rounded-3xl bg-[#020617] border border-white/10 shadow-[0_0_50px_rgba(245,158,11,0.1)] group my-6"
      >
        {/* --- DYNAMIC BACKGROUND THREAT RADAR --- */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-60" />
        <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
           <svg width="200" height="200" viewBox="0 0 200 200" className="animate-[spin_60s_linear_infinite]">
             <circle cx="100" cy="100" r="90" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 12" />
             <circle cx="100" cy="100" r="60" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 8" />
           </svg>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
          
          {/* --- LEFT: THE HOOK & THE PAIN --- */}
          <div className="flex-1 text-left w-full">
            {/* Scarcity & Status Micro-Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500">
                System Status: Accepting Elite Operations
              </span>
            </div>

            {/* The Undeniable Claim */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[1.05] mb-4">
              Stop Renting. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-200">
                Own Your Infrastructure.
              </span>
            </h1>

            {/* The Logical Anchor */}
            <p className="text-slate-400 text-sm md:text-base font-medium max-w-xl mb-8 leading-relaxed">
              Every SaaS subscription is a tax on your growth. We engineer, deploy, and hand over 100% sovereign digital real estate. Sub-50ms latency globally. Zero third-party lock-in. 
            </p>

            {/* The Action Vectors */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href="/dashboard/initiate" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-slate-950 font-black uppercase tracking-widest text-xs rounded-xl hover:bg-amber-400 transition-all shadow-[0_10px_30px_rgba(245,158,11,0.2)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.4)] hover:-translate-y-0.5"
              >
                <Terminal className="w-4 h-4" /> Apply For Deployment
              </Link>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold flex items-center gap-2">
                <Lock className="w-3 h-3" /> End-to-End Encrypted
              </div>
            </div>
          </div>

          {/* --- RIGHT: THE PROOF MATRIX --- */}
          <div className="w-full md:w-[320px] flex flex-col gap-3 shrink-0">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-amber-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">Global TTFB</span>
              </div>
              <div className="text-3xl font-black text-white tabular-nums">{'<'} 18<span className="text-amber-500 text-lg">ms</span></div>
              <div className="text-[9px] font-mono uppercase text-slate-500 mt-1">Faster than AWS CloudFront</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5 text-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">Ownership</span>
              </div>
              <div className="text-3xl font-black text-white">100<span className="text-emerald-500 text-lg">%</span></div>
              <div className="text-[9px] font-mono uppercase text-slate-500 mt-1">Source Code & Crypto Keys</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-2">
                <Activity className="w-5 h-5 text-blue-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">Lighthouse</span>
              </div>
              <div className="text-3xl font-black text-white">100<span className="text-blue-500 text-lg">/100</span></div>
              <div className="text-[9px] font-mono uppercase text-slate-500 mt-1">Perfect Core Web Vitals</div>
            </div>
          </div>

        </div>
      </m.div>
    </LazyMotion>
  );
}
