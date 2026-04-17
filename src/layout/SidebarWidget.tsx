"use client";
import React from "react";
import { ShieldCheck, Zap, Terminal } from "lucide-react";

export default function SidebarWidget() {
  return (
    <div
      className="mx-auto mb-10 w-full max-w-60 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.02] p-5 text-center backdrop-blur-sm dark:border-white/[0.05] dark:bg-white/[0.02]"
    >
      <div className="mb-3 flex justify-center">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          <ShieldCheck size={24} strokeWidth={2} />
          <span className="absolute -right-1 -top-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
          </span>
        </div>
      </div>

      <h3 className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-gray-900 dark:text-white">
        Vaulltcore Status
      </h3>
      
      <div className="mb-4 flex flex-col gap-1">
        <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 dark:text-gray-400">
          <span>HEALTH:</span>
          <span className="text-emerald-500">100%</span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-white/5">
          <div className="h-full w-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
        </div>
        <p className="mt-2 text-[10px] leading-relaxed text-gray-500 dark:text-gray-400">
          Sovereign Link encryption is active. Infrastructure is fully optimized.
        </p>
      </div>

      <a
        href="/dashboard/initiate"
        className="group flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-500 dark:bg-brand-500 dark:hover:bg-brand-600 shadow-lg shadow-brand-500/10"
      >
        <Terminal size={14} className="transition-transform group-hover:scale-110" />
        Initialize Audit
      </a>
    </div>
  );
}
