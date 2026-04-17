"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LazyMotion, domAnimation, m, useReducedMotion, Variants } from "framer-motion";
import { Lock, ArrowLeft, Cpu, Activity, Terminal, ShieldAlert } from "lucide-react";

export default function NotFound() {
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  // --- FASTJET REROUTE LOGIC ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const redirect = setTimeout(() => {
      router.push("/");
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [router]);

  // --- GPU-OPTIMIZED VARIANTS ---
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: [0.19, 1, 0.22, 1] } 
    }
  };

  const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.05 } 
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-6 overflow-hidden transition-colors duration-500 bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-white selection:bg-brand-500/30">
        
        {/* --- PERFORMANCE LAYER: GPU BLOOMS --- */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-slate-300/30 dark:bg-blue-900/10 blur-[120px] pointer-events-none transform-gpu" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-500/10 dark:bg-brand-500/5 blur-[120px] pointer-events-none transform-gpu" />
        
        {/* --- THE COMMAND CONSOLE --- */}
        <m.section 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative w-full max-w-xl rounded-[2.5rem] border border-slate-200 bg-white/40 backdrop-blur-2xl p-8 md:p-14 shadow-2xl dark:border-white/5 dark:bg-gray-950/40 z-10 text-center"
        >
          {/* Status Glow Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

          {/* STATUS BADGE */}
          <m.div variants={fadeUp} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 dark:bg-white/[0.03] dark:border-white/10 mb-10 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600 shadow-[0_0_8px_#ef4444]"></span>
            </span>
            <span className="text-[10px] font-mono font-black tracking-[0.3em] text-slate-500 dark:text-gray-400 uppercase">
              Signal_Loss // SECTOR_404
            </span>
          </m.div>

          {/* CENTRAL DIAGNOSTIC ICON */}
          <m.div variants={fadeUp} className="mb-10 relative inline-block">
            <div className="flex items-center justify-center w-24 h-24 rounded-3xl bg-slate-100 border border-slate-200 dark:bg-black/40 dark:border-white/10 shadow-inner group transition-colors hover:border-brand-500/30">
              <ShieldAlert size={40} className="text-slate-400 dark:text-gray-600" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-brand-500/10 backdrop-blur-xl border border-brand-500/40 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/10">
              <Lock size={16} className="text-brand-600 dark:text-brand-500" />
            </div>
          </m.div>

          <m.h1 variants={fadeUp} className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-gray-500 bg-clip-text text-transparent italic">
            Node_Offline
          </m.h1>
          
          <m.p variants={fadeUp} className="text-slate-600 dark:text-gray-400 font-medium mb-10 max-w-sm mx-auto leading-relaxed">
            The requested infrastructure coordinate is unreachable or de-indexed by primary security protocols.
          </m.p>

          {/* --- THE VAULLTCORE TERMINAL --- */}
          <m.div variants={fadeUp} className="w-full bg-slate-50 border border-slate-200 dark:bg-black/60 dark:border-white/5 rounded-2xl overflow-hidden shadow-xl mb-12 text-left backdrop-blur-md">
            <div className="flex items-center justify-between px-5 py-3 bg-slate-100 border-b border-slate-200 dark:bg-white/[0.03] dark:border-white/5">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-brand-600 dark:text-brand-500/80 tracking-widest uppercase">
                <Terminal size={14} /> auto_reroute.sys
              </div>
              <div className="flex gap-1.5 opacity-50">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            </div>
            
            <div className="p-6 font-mono text-[10px] md:text-xs space-y-3">
              <div className="flex gap-3">
                <span className="text-brand-500/50">{`>`}</span>
                <span className="text-slate-500 dark:text-gray-400">STATE: <span className="text-red-500 dark:text-red-400 font-bold uppercase tracking-tighter">null_pointer</span></span>
              </div>
              <div className="flex gap-3">
                <span className="text-brand-500/50">{`>`}</span>
                <span className="text-slate-500 dark:text-gray-400">ACTION: <span className="text-slate-900 dark:text-white font-bold tracking-tight">re_routing_to_primary</span></span>
              </div>
              <div className="flex gap-3">
                <span className="text-brand-500/50">{`>`}</span>
                <span className="text-slate-500 dark:text-gray-400">RECOVERY: <span className="text-brand-600 dark:text-brand-500 font-bold">{countdown}s REMAINING</span></span>
              </div>
              <m.div animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-2 h-4 bg-brand-500/60 ml-6" />
            </div>
          </m.div>

          {/* PRIMARY ACTION */}
          <m.div variants={fadeUp}>
            <Link href="/" className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-xl bg-slate-900 dark:bg-brand-500 px-10 py-4 text-xs font-black uppercase tracking-[0.2em] text-white dark:text-black transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-brand-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              Restore Primary Uplink
            </Link>
          </m.div>

        </m.section>

        {/* FOOTER AUTHORITY */}
        <m.div variants={fadeUp} initial="hidden" animate="visible" className="mt-12 flex flex-col items-center gap-3 opacity-30">
          <div className="flex items-center gap-4 text-slate-400">
             <Cpu size={14} />
             <div className="h-4 w-px bg-slate-300 dark:bg-white/20" />
             <Activity size={14} />
          </div>
          <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-slate-500">
            Vaulltcore Vanguard OS // v2.2.3
          </p>
        </m.div>
      </div>
    </LazyMotion>
  );
        }
