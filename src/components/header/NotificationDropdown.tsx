"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { Bell, ShieldAlert, Activity, Database, ChevronRight, Lock } from "lucide-react";

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  const handleClick = () => {
    toggleDropdown();
    setNotifying(false);
  };

  return (
    <div className="relative">
      <button
        aria-label="System Intelligence Logs"
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="relative flex items-center justify-center w-10 h-10 text-gray-500 transition-all bg-transparent border border-transparent rounded-xl hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-gray-400 dark:hover:bg-white/[0.05] dark:hover:text-white lg:h-11 lg:w-11 lg:border-gray-200 lg:bg-white lg:dark:border-white/10 lg:dark:bg-[#020617]"
        onClick={handleClick}
      >
        <span
          className={`absolute right-2.5 top-2.5 z-10 flex h-2 w-2 ${
            !notifying ? "hidden" : "flex"
          }`}
          aria-hidden="true"
        >
          <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-brand-400 animate-ping"></span>
          <span className="relative inline-flex w-2 h-2 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
        </span>
        
        <Bell size={20} strokeWidth={2} />
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute -right-2 top-full mt-3 flex w-[calc(100vw-2rem)] max-w-[380px] flex-col rounded-3xl border border-gray-200 bg-white/95 p-4 backdrop-blur-2xl shadow-2xl dark:border-white/10 dark:bg-[#020617]/95 sm:right-0 sm:w-[400px]"
      >
        {/* Header Section */}
        <div className="flex items-center justify-between pb-4 mb-2 border-b border-gray-100 dark:border-white/5">
          <div>
            <h5 className="flex items-center gap-2 text-sm font-black uppercase tracking-tight text-gray-900 dark:text-white">
              <Lock size={14} className="text-brand-500" aria-hidden="true" /> System Intelligence
            </h5>
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">Real-time edge telemetry</p>
          </div>
          
          <button
            onClick={closeDropdown}
            aria-label="Close logs"
            className="text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md"
          >
            <span className="text-[10px] font-mono font-bold uppercase">Esc</span>
          </button>
        </div>

        {/* Telemetry Feed */}
        <ul className="flex flex-col h-auto max-h-[360px] overflow-y-auto custom-scrollbar pr-1 space-y-1" role="list">
          
          <li role="listitem">
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex gap-4 p-3 rounded-xl transition-all hover:bg-gray-50 dark:hover:bg-white/[0.02] border border-transparent hover:border-gray-100 dark:hover:border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <div className="flex items-center justify-center h-10 w-10 shrink-0 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-500" aria-hidden="true">
                <ShieldAlert size={18} strokeWidth={2} />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wide">Threat Neutralized</h4>
                <p className="text-[11px] leading-relaxed text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">
                  Unauthorized SaaS tracking script blocked at the edge proxy. Zero-trust maintained.
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[9px] font-mono font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-widest">Protocol: Active</span>
                  <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
                  <span className="text-[9px] font-mono text-gray-400 uppercase">2 min ago</span>
                </div>
              </div>
            </DropdownItem>
          </li>

          <li role="listitem">
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex gap-4 p-3 rounded-xl transition-all hover:bg-gray-50 dark:hover:bg-white/[0.02] border border-transparent hover:border-gray-100 dark:hover:border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <div className="flex items-center justify-center h-10 w-10 shrink-0 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-500" aria-hidden="true">
                <Activity size={18} strokeWidth={2} />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wide">Node Optimization</h4>
                <p className="text-[11px] leading-relaxed text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">
                  Global Edge LCP successfully reduced to 380ms. Performance index rated at 100/100.
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[9px] font-mono font-bold text-brand-600 dark:text-brand-500 uppercase tracking-widest">Speed: Apex</span>
                  <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
                  <span className="text-[9px] font-mono text-gray-400 uppercase">1 hr ago</span>
                </div>
              </div>
            </DropdownItem>
          </li>

          <li role="listitem">
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex gap-4 p-3 rounded-xl transition-all hover:bg-gray-50 dark:hover:bg-white/[0.02] border border-transparent hover:border-gray-100 dark:hover:border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <div className="flex items-center justify-center h-10 w-10 shrink-0 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-500" aria-hidden="true">
                <Database size={18} strokeWidth={2} />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wide">Sovereignty Verified</h4>
                <p className="text-[11px] leading-relaxed text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">
                  100% of data shards localized. Ownership-first architecture operating nominally.
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[9px] font-mono font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">Status: Secure</span>
                  <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
                  <span className="text-[9px] font-mono text-gray-400 uppercase">4 hrs ago</span>
                </div>
              </div>
            </DropdownItem>
          </li>

        </ul>

        {/* Global Action Footer */}
        <Link
          href="/telemetry"
          onClick={closeDropdown}
          className="mt-4 flex items-center justify-center gap-2 w-full rounded-xl bg-gray-900 py-3.5 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all shadow-xl hover:bg-brand-500 hover:text-black hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] dark:bg-white/5 dark:hover:bg-brand-500 dark:hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          Access Global Telemetry <ChevronRight size={14} strokeWidth={2.5} />
        </Link>
      </Dropdown>
    </div>
  );
}
