"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import SidebarWidget from "./SidebarWidget";
import {
  LayoutDashboard,
  Activity,
  Globe,
  Layers,
  GitMerge,
  Bot,
  ShieldCheck,
  Database,
  KeyRound,
  Users,
  TerminalSquare,
  UserCircle,
  Lock,
} from "lucide-react";

// ── STATUS CONFIGURATION ──────────────────────────────────────────────────
type ModuleStatus = "stable" | "beta" | "alpha" | "locked" | "coming";

const STATUS_MAP: Record<ModuleStatus, { label: string; color: string; glow: string; aria: string }> = {
  stable: { label: "STABLE", color: "text-emerald-600 dark:text-emerald-500", glow: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]", aria: "Stable Module" },
  beta: { label: "BETA", color: "text-brand-600 dark:text-brand-500", glow: "bg-brand-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]", aria: "Beta Module" },
  alpha: { label: "ALPHA", color: "text-sky-600 dark:text-sky-500", glow: "bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.8)]", aria: "Alpha Module" },
  locked: { label: "RESTRICTED", color: "text-gray-500", glow: "bg-gray-500/20", aria: "Restricted Access Module" },
  coming: { label: "COMING", color: "text-slate-500", glow: "bg-slate-500", aria: "Upcoming Module" },
};

// ── SYSTEM ARCHITECTURE DATA ──────────────────────────────────────────────
const sidebarGroups = [
  {
    label: "// CORE_SYSTEM",
    items: [
      { title: "Command Center", url: "/", icon: LayoutDashboard, status: "stable" as ModuleStatus, descriptor: "Primary Node Entry" },
      { title: "Network Telemetry", url: "/telemetry", icon: Activity, status: "beta" as ModuleStatus, descriptor: "Real-time edge health" },
      { title: "Global Edge Nodes", url: "/nodes", icon: Globe, status: "stable" as ModuleStatus, descriptor: "Decentralized PoPs" },
    ],
  },
  {
    label: "// INFRASTRUCTURE",
    items: [
      { title: "Architecture Distro", url: "/architecture", icon: Layers, status: "locked" as ModuleStatus },
      { title: "Deployment Pipeline", url: "/pipeline", icon: GitMerge, status: "locked" as ModuleStatus },
      { title: "Automation Grid", url: "/grid", icon: Bot, status: "locked" as ModuleStatus },
    ],
  },
  {
    label: "// SECURITY_LAYER",
    items: [
      { title: "Security Protocols", url: "/security", icon: ShieldCheck, status: "locked" as ModuleStatus },
      { title: "Data Sovereignty", url: "/sovereignty", icon: Database, status: "locked" as ModuleStatus },
      { title: "Cryptographic Keys", url: "/keys", icon: KeyRound, status: "locked" as ModuleStatus },
    ],
  },
  {
    label: "// CLIENT_OPERATIONS",
    items: [
      { title: "Infrastructure Portfolio", url: "/portfolio", icon: Users, status: "locked" as ModuleStatus },
      { title: "Operator Credentials", url: "/profile", icon: UserCircle, status: "stable" as ModuleStatus, descriptor: "Identity & Access" },
      { title: "Initiate Command", url: "/initiate", icon: TerminalSquare, status: "stable" as ModuleStatus, descriptor: "_ Request secure audit" },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();
  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  return (
    <aside
      aria-label="Vaulltcore Primary Navigation"
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-[#020617] dark:border-white/5 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 transform-gpu shadow-2xl lg:shadow-none
        ${isExpanded || isHovered || isMobileOpen ? "w-[290px]" : "w-[90px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Branding Node ── */}
      <div className={`py-8 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"} transition-all`}>
        <Link 
          href="/" 
          aria-label="Return to Command Center"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md"
        >
          <Image
            src={isExpanded || isHovered || isMobileOpen ? "/images/logo/logo-dark.svg" : "/images/logo/logo-icon.svg"}
            alt="Vaulltcore Vanguard OS"
            width={isExpanded || isHovered || isMobileOpen ? 140 : 32}
            height={32}
            priority
            className="dark:invert-0 block transition-transform hover:scale-105"
          />
        </Link>
      </div>

      {/* ── Navigation Tree ── */}
      <div className="flex flex-col overflow-y-auto custom-scrollbar pb-10">
        {sidebarGroups.map((group, gIndex) => (
          <nav key={gIndex} aria-label={group.label} className="mb-8">
            <div className={`mb-4 px-3 ${!isExpanded && !isHovered ? "lg:hidden" : "block"}`}>
              <h2 className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 dark:text-gray-600">
                {group.label}
              </h2>
            </div>

            <ul className="flex flex-col gap-1.5" role="list">
              {group.items.map((item) => {
                const isLocked = item.status === "locked";
                const config = STATUS_MAP[item.status];
                const Icon = item.icon;
                const active = isActive(item.url);

                return (
                  <li key={item.title} className="relative group/item">
                    {isLocked ? (
                      /* ── RESTRICTED NODE ── */
                      <div 
                        aria-disabled="true" 
                        title="Access Restricted"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl opacity-40 cursor-not-allowed grayscale select-none"
                      >
                        <span className="text-gray-400 dark:text-gray-500" aria-hidden="true">
                          <Icon size={20} strokeWidth={1.5} />
                        </span>
                        {(isExpanded || isHovered || isMobileOpen) && (
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-gray-500 dark:text-gray-400">{item.title}</span>
                            <span className="text-[9px] font-mono text-gray-400 dark:text-gray-500 font-bold tracking-[0.1em] flex items-center gap-1 mt-0.5">
                              <Lock size={8} /> [ACCESS_RESTRICTED]
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* ── ACTIVE NODE ── */
                      <Link
                        href={item.url}
                        aria-current={active ? "page" : undefined}
                        aria-label={`${item.title} - ${config.aria}`}
                        className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                          active 
                            ? "bg-gray-100/80 text-gray-900 dark:bg-white/[0.04] dark:text-white shadow-sm" 
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/[0.02] dark:hover:text-white"
                        }`}
                      >
                        {/* Hardware Active State Indicator */}
                        {active && (
                          <span className="absolute -left-5 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-brand-500 rounded-r-md shadow-[0_0_12px_rgba(245,158,11,0.6)]" aria-hidden="true" />
                        )}

                        <span className={`${active ? "text-brand-600 dark:text-brand-500" : "text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300 transition-colors"}`} aria-hidden="true">
                          <Icon size={20} strokeWidth={active ? 2 : 1.5} />
                        </span>
                        
                        {(isExpanded || isHovered || isMobileOpen) && (
                          <div className="flex flex-col overflow-hidden w-full">
                            <div className="flex items-center justify-between gap-2 w-full">
                              <span className="text-sm font-bold tracking-tight truncate">{item.title}</span>
                              {item.status !== "stable" && (
                                <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded-sm font-bold uppercase tracking-widest bg-gray-100 dark:bg-white/[0.05] ${config.color}`} aria-hidden="true">
                                  {config.label}
                                </span>
                              )}
                            </div>
                            {item.descriptor && (
                              <span className="text-[10px] font-mono text-gray-500 dark:text-gray-500 truncate leading-tight mt-0.5 group-hover/item:text-brand-600 dark:group-hover/item:text-brand-500 transition-colors">
                                {item.descriptor}
                              </span>
                            )}
                          </div>
                        )}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        ))}
      </div>
      
      {/* ── Extensible Widget Node ── */}
      {(isExpanded || isHovered || isMobileOpen) && (
        <div className="mt-auto pb-6 transition-opacity duration-300">
           <SidebarWidget />
        </div>
      )}
    </aside>
  );
};

export default AppSidebar;
