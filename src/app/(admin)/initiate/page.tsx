
"use client";

import { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { 
  ShieldAlert, 
  Terminal, 
  Lock, 
  Zap, 
  Server, 
  Activity, 
  CheckCircle2, 
  Clock, 
  Globe, 
  ChevronDown,
  Radar,
  Crosshair,
  FileSearch,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

import { cn } from "@/lib/utils";

// --- 1. ZOD ELITE INTAKE SCHEMA ---
const intakeSchema = z.object({
  name: z.string().min(2, "Callsign required"),
  email: z.string().email("Secure email required"),
  company: z.string().optional(),
  revenue: z.string().min(1, "Operational scale required"),
  problem: z.string().min(20, "Please provide sufficient telemetry on the bottleneck"),
  timeline: z.string().min(1, "Deployment timeline required"),
});

type IntakeFormValues = z.infer<typeof intakeSchema>;

export default function EliteInitiateGateway() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [auditId, setAuditId] = useState("");
  
  // Real-time system intelligence ticker
  const [systemStatus, setSystemStatus] = useState("Awaiting operator input...");
  
  // Scarcity Engine State
  const [slots, setSlots] = useState(3);
  const [lastIntake, setLastIntake] = useState(12);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<IntakeFormValues>({
    resolver: zodResolver(intakeSchema),
    mode: "onChange"
  });

  // Watch fields for live intelligence & scoring
  const emailVal = watch("email");
  const revenueVal = watch("revenue");
  const timelineVal = watch("timeline");
  const problemVal = watch("problem");

  // --- SCARCITY & INTELLIGENCE TICKERS ---
  useEffect(() => {
    const statuses = [
      "Scanning input patterns...",
      "Validating operator credentials...",
      "Checking infrastructure readiness...",
      "Awaiting payload transmission..."
    ];
    let i = 0;
    const interval = setInterval(() => {
      setSystemStatus(statuses[i % statuses.length]);
      i++;
    }, 4000);

    const scarcityTimer = setInterval(() => {
      setLastIntake((prev) => prev + 1);
      if (Math.random() > 0.8) setSlots((prev) => (prev > 1 ? prev - 1 : 3));
    }, 60000);

    return () => {
      clearInterval(interval);
      clearInterval(scarcityTimer);
    };
  }, []);

  // --- LIVE SYSTEM MATCH SCORE ---
  const { score, priority } = useMemo(() => {
    let s = 35; 
    if (revenueVal === "50k+") s += 40;
    else if (revenueVal === "10k-50k") s += 20;
    
    if (timelineVal === "immediate") s += 15;
    else if (timelineVal === "30days") s += 10;
    
    if (problemVal && problemVal.length > 40) s += 10;

    let p = "Standard Queue";
    if (s >= 85) p = "Priority Operator ✅";
    else if (s < 50 && revenueVal) p = "Low Priority ⚠️";

    return { score: Math.min(s, 99), priority: p };
  }, [revenueVal, timelineVal, problemVal]);

  // --- 🔥 THE PRODUCTION UPLINK PROTOCOL ---
  const onSubmit = async (data: IntakeFormValues) => {
    setIsSubmitting(true);
    setSystemStatus("Establishing secure uplink to Command Authority...");
    
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        // Capture specific API errors (Missing API key, Unverified Domain, etc.)
        throw new Error(result.error || `System Error: ${response.status}`);
      }

      // Success sequence
      setAuditId(`VC-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
      setSystemStatus("Payload delivered. Audit ID generated.");
      
    } catch (error: any) {
      console.error("Uplink Failure:", error);
      setSystemStatus(`UPLINK_FAILURE: ${error.message.toUpperCase()}`);
      setIsSubmitting(false);
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-[calc(100vh-4rem)] w-full overflow-x-hidden pb-20">
        
        {/* --- AMBIENT 1B GOLD GLOW --- */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-amber-500/5 dark:bg-amber-500/5 blur-[150px] rounded-full pointer-events-none z-0" aria-hidden="true" />

        {/* --- DYNAMIC SCARCITY STATUS BAR --- */}
        <div className="sticky top-0 z-50 w-full border-b border-amber-500/20 bg-amber-500/5 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 items-center justify-center rounded-full bg-amber-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              </span>
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-amber-700 dark:text-amber-500">
                Intake Queue: <span className="text-slate-900 dark:text-white">{slots} Active Slots</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline-block text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500">
                Last Intake: {lastIntake}m ago
              </span>
              <div className="flex items-center gap-2">
                <Clock className="size-3 text-amber-600 dark:text-amber-500" aria-hidden="true" />
                <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-amber-700 dark:text-amber-500">
                  Next SLA: <span className="text-slate-900 dark:text-white">48H</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-10 lg:pt-16">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-500 text-[10px] font-mono uppercase tracking-[0.2em] font-bold mb-6 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
              <Lock className="size-3" aria-hidden="true" />
              <span>Encrypted Intake Protocol</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-6">
              Initialize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-400 dark:to-amber-600">Infrastructure</span>
            </h1>
            <p className="text-xs md:text-sm font-mono text-slate-600 dark:text-slate-400 uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
              We do not take every client. Built for serious operators requiring extreme scale. Only qualified systems proceed.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 lg:gap-16">
            
            <div className="xl:col-span-5 space-y-12">
              <div className="space-y-4">
                <h3 className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700" />
                  Trusted Deployments
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-white/40 dark:bg-black/20 border border-slate-200 dark:border-white/5 backdrop-blur-sm">
                    <div className="text-lg font-black text-slate-900 dark:text-white mb-1">$1.2M+</div>
                    <div className="text-[9px] font-mono uppercase tracking-widest text-slate-500">SaaS Costs Eliminated</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/40 dark:bg-black/20 border border-slate-200 dark:border-white/5 backdrop-blur-sm">
                    <div className="text-lg font-black text-slate-900 dark:text-white mb-1">2.3M+</div>
                    <div className="text-[9px] font-mono uppercase tracking-widest text-slate-500">Automated Actions</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700" />
                  Audit Execution Scope
                </h3>
                <div className="p-5 rounded-2xl bg-white/40 dark:bg-black/20 border border-slate-200 dark:border-white/5 backdrop-blur-sm shadow-sm space-y-3">
                  <div className="flex items-start gap-2 text-[10px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                    <FileSearch className="size-3.5 text-amber-500 shrink-0 mt-0.5" />
                    Infrastructure Bottleneck Detection
                  </div>
                  <div className="flex items-start gap-2 text-[10px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                    <FileSearch className="size-3.5 text-amber-500 shrink-0 mt-0.5" />
                    SaaS Capital Leak Analysis
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:col-span-7">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <m.form 
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="relative p-6 md:p-10 rounded-3xl bg-white/70 dark:bg-[#050B14]/70 backdrop-blur-3xl border border-slate-300/50 dark:border-white/10 shadow-2xl dark:shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent pointer-events-none z-0" />
                    
                    <div className="relative z-10 space-y-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 gap-4">
                        <div>
                          <h2 className="text-xl font-black uppercase tracking-widest text-slate-900 dark:text-white">Operator Intake</h2>
                          <p 
                            className="text-[9px] font-mono text-amber-600 dark:text-amber-500 uppercase tracking-[0.2em] mt-1.5 flex items-center gap-2"
                            aria-live="polite"
                          >
                            <Radar className="size-3 animate-spin-slow" />
                            {systemStatus}
                          </p>
                        </div>
                        <Server className="size-6 text-slate-300 dark:text-slate-700 hidden md:block" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Operator Name *</label>
                          <input {...register("name")} placeholder="Callsign / Name" className="w-full h-12 bg-slate-100/50 dark:bg-black/40 border border-slate-300 dark:border-white/10 rounded-xl px-4 text-sm font-mono text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 transition-all" />
                          {errors.name && <p className="text-[9px] text-red-500 uppercase tracking-widest font-mono">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Secure Email *</label>
                          <input {...register("email")} placeholder="operator@domain.com" className="w-full h-12 bg-slate-100/50 dark:bg-black/40 border border-slate-300 dark:border-white/10 rounded-xl px-4 text-sm font-mono text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 transition-all" />
                          
                          {/* Live Email Feedback */}
                          {!errors.email && emailVal?.includes("@") && (
                            <p className={cn("text-[9px] uppercase tracking-widest font-mono", emailVal.includes("gmail") || emailVal.includes("yahoo") ? "text-amber-600 dark:text-amber-500" : "text-emerald-600 dark:text-emerald-500")}>
                              {emailVal.includes("gmail") || emailVal.includes("yahoo") ? "Standard domain detected" : "Secure enterprise domain detected ✅"}
                            </p>
                          )}
                          {errors.email && <p className="text-[9px] text-red-500 uppercase tracking-widest font-mono">{errors.email.message}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Organization (Optional)</label>
                          <input {...register("company")} placeholder="Acme Corp" className="w-full h-12 bg-slate-100/50 dark:bg-black/40 border border-slate-300 dark:border-white/10 rounded-xl px-4 text-sm font-mono text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Operational Scale *</label>
                          <select {...register("revenue")} className="w-full h-12 appearance-none bg-slate-100/50 dark:bg-black/40 border border-slate-300 dark:border-white/10 rounded-xl px-4 text-sm font-mono text-slate-900 dark:text-white outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 transition-all cursor-pointer">
                            <option value="" disabled selected>Select Scale...</option>
                            <option value="0-10k">Tier 1: $0 - $10k/month</option>
                            <option value="10k-50k">Tier 2: $10k - $50k/month</option>
                            <option value="50k+">Tier 3: $50k+ /month</option>
                          </select>
                          {revenueVal === "50k+" && <p className="text-[9px] text-emerald-600 dark:text-emerald-500 uppercase tracking-widest font-mono">High-scale operator detected ✅</p>}
                          {errors.revenue && <p className="text-[9px] text-red-500 uppercase tracking-widest font-mono">{errors.revenue.message}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">System Bottlenecks *</label>
                        <textarea {...register("problem")} placeholder="Detail current scaling friction, infrastructure bloat..." className="w-full min-h-[100px] bg-slate-100/50 dark:bg-black/40 border border-slate-300 dark:border-white/10 rounded-xl p-4 text-sm font-mono text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 transition-all resize-y" />
                        {!errors.problem && problemVal?.length > 40 && <p className="text-[9px] text-emerald-600 dark:text-emerald-500 uppercase tracking-widest font-mono">Sufficient telemetry captured ✅</p>}
                        {errors.problem && <p className="text-[9px] text-red-500 uppercase tracking-widest font-mono">{errors.problem.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Deployment Timeline *</label>
                        <select {...register("timeline")} className="w-full h-12 appearance-none bg-slate-100/50 dark:bg-black/40 border border-slate-300 dark:border-white/10 rounded-xl px-4 text-sm font-mono text-slate-900 dark:text-white outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 transition-all cursor-pointer">
                          <option value="" disabled selected>Select Urgency...</option>
                          <option value="immediate">Code Red: Immediately</option>
                          <option value="30days">Priority: Within 30 Days</option>
                          <option value="exploring">Recon: Exploring Options</option>
                        </select>
                        {errors.timeline && <p className="text-[9px] text-red-500 uppercase tracking-widest font-mono">{errors.timeline.message}</p>}
                      </div>

                      <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
                          <div className="space-y-1 w-full sm:w-auto">
                            <div className="text-[10px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-[0.2em]">System Compatibility</div>
                            <div className="flex items-center gap-2">
                              <div className="h-1.5 w-24 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-amber-500 transition-all duration-700" style={{ width: `${score}%` }} />
                              </div>
                              <span className="text-xs font-black text-slate-900 dark:text-white">{score}%</span>
                            </div>
                          </div>
                          <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-right w-full sm:w-auto">
                            <span className={cn(
                              "px-2 py-1 rounded border",
                              priority.includes("Priority") ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-500" : "bg-slate-200 dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-600 dark:text-slate-400"
                            )}>
                              {priority}
                            </span>
                          </div>
                        </div>

                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative w-full h-16 bg-amber-500/10 border border-amber-500/30 rounded-xl overflow-hidden transition-all duration-300 hover:bg-amber-500 outline-none focus-visible:ring-2 focus-visible:ring-amber-500/80 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(245,158,11,0.1)] hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
                        >
                          <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                          <div className="relative z-10 flex items-center justify-center w-full h-full">
                            {isSubmitting ? (
                              <span className="flex items-center gap-2 text-amber-700 dark:text-amber-500 font-mono text-xs font-black uppercase tracking-[0.2em]">
                                <span className="w-1.5 h-1.5 bg-amber-500 dark:bg-amber-400 rounded-full animate-ping" />
                                Processing Integrity Check...
                              </span>
                            ) : (
                              <span className="flex items-center gap-3 text-amber-700 dark:text-amber-500 group-hover:text-slate-950 font-mono text-sm font-black uppercase tracking-[0.2em] transition-colors">
                                <Zap className="size-4" aria-hidden="true" />
                                Transmit Data
                              </span>
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  </m.form>
                ) : (
                  <m.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 md:p-12 rounded-3xl bg-emerald-500/5 backdrop-blur-3xl border border-emerald-500/20 text-center shadow-[0_0_50px_rgba(16,185,129,0.1)] flex flex-col h-full justify-center"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 mb-6">
                      <CheckCircle2 className="size-8 text-emerald-500" />
                    </div>
                    <h2 className="text-2xl font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-500 mb-2">Payload Secured</h2>
                    <div className="max-w-sm mx-auto mt-6 p-5 rounded-2xl bg-white/50 dark:bg-black/40 border border-slate-200 dark:border-white/10 text-left space-y-4">
                      <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/10 pb-3">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Audit ID</span>
                        <span className="text-xs font-mono font-black text-slate-900 dark:text-white">{auditId}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/10 pb-3">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Status</span>
                        <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-500 uppercase tracking-widest">Pending Analysis</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Next Step</span>
                        <span className="text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">Senior Engineer Review (48H SLA)</span>
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* --- FAQ SECTION: OBJECTION KILLER --- */}
          <div className="mt-24 max-w-4xl mx-auto pb-20">
            <h3 className="text-2xl font-black uppercase tracking-widest text-center text-slate-900 dark:text-white mb-10">Clearance Briefing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { q: "How fast do you respond?", a: "Within 24–48 hours after our engineering team completes the initial audit of your submission." },
                { q: "Do you work with small businesses?", a: "Only if you are scaling rapidly and possess the capital to deploy enterprise-grade infrastructure." },
                { q: "Is this a subscription?", a: "No. This is a one-time, done-for-you infrastructure build. You own the asset outright." },
                { q: "Do I own everything?", a: "100% ownership. We build the engine; you hold the keys. No vendor lock-in." },
                { q: "What happens after submission?", a: "We audit your data → respond with feasibility → deploy a custom architecture plan if qualified." },
                { q: "Is my data secure?", a: "Yes. Your submission enters a fully encrypted pipeline. We do not share intelligence with third parties." }
              ].map((faq, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/40 dark:bg-[#050B14]/40 border border-slate-200 dark:border-white/5 backdrop-blur-sm hover:border-amber-500/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <ChevronDown className="size-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white mb-2">{faq.q}</h4>
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
