"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
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
  RefreshCw,
  Network,
  Share2,
  Hexagon,
  Milestone,
  ShieldCheck,
  Lock,
  Database,
  KeyRound,
  Wallet,
  ArrowRightLeft,
  TrendingUp,
  LineChart,
  Users,
  FileSignature,
  Command,
  Search,
  TerminalSquare,
  UserCircle,
  ChevronDown,
} from "lucide-react";

// ── STATUS CONFIGURATION ──────────────────────────────────────────────────
type ModuleStatus = "stable" | "beta" | "alpha" | "locked" | "coming";

const STATUS_MAP: Record<ModuleStatus, { label: string; color: string; glow: string; indicator: string }> = {
  stable: { label: "STABLE", color: "text-emerald-500", glow: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]", indicator: "●" },
  beta: { label: "BETA", color: "text-amber-500", glow: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]", indicator: "◐" },
  alpha: { label: "ALPHA", color: "text-sky-500", glow: "bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.8)]", indicator: "◌" },
  locked: { label: "RESTRICTED", color: "text-red-500/50", glow: "bg-red-500/20", indicator: "🔒" },
  coming: { label: "COMING", color: "text-slate-500", glow: "bg-slate-500", indicator: "○" },
};

// ── SYSTEM ARCHITECTURE DATA ──────────────────────────────────────────────
const sidebarGroups = [
  {
    label: "// CORE_SYSTEM",
    items: [
      { title: "System Overview", url: "/", icon: LayoutDashboard, status: "stable" as ModuleStatus, descriptor: "Command center entry point" },
      { title: "Network Telemetry", url: "/telemetry", icon: Activity, status: "beta" as ModuleStatus, descriptor: "Real-time edge health" },
      { title: "Global Edge Nodes", url: "/nodes", icon: Globe, status: "stable" as ModuleStatus, descriptor: "300+ Cloudflare PoPs" },
    ],
  },
  {
    label: "// INFRASTRUCTURE",
    items: [
      { title: "Architecture Distribution", url: "#", icon: Layers, status: "locked" as ModuleStatus },
      { title: "Deployment Pipeline", url: "#", icon: GitMerge, status: "locked" as ModuleStatus },
      { title: "Automation Grid", url: "#", icon: Bot, status: "locked" as ModuleStatus },
    ],
  },
  {
    label: "// SECURITY_LAYER",
    items: [
      { title: "Security Architecture", url: "#", icon: ShieldCheck, status: "locked" as ModuleStatus },
      { title: "Data Sovereignty", url: "#", icon: Database, status: "locked" as ModuleStatus },
      { title: "Ownership Indicator", url: "#", icon: KeyRound, status: "locked" as ModuleStatus },
    ],
  },
  {
    label: "// CLIENT_OPERATIONS",
    items: [
      { title: "Infrastructure Portfolio", url: "#", icon: Users, status: "locked" as ModuleStatus },
      { title: "User Profile", url: "/profile", icon: UserCircle, status: "stable" as ModuleStatus, descriptor: "Operator credentials" },
      { title: "Initiate Command", url: "/initiate", icon: TerminalSquare, status: "stable" as ModuleStatus, descriptor: "_ Initialize free audit" },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();
  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-950 dark:border-white/[0.05] text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${isExpanded || isHovered || isMobileOpen ? "w-[290px]" : "w-[90px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Branding Node */}
      <div className={`py-8 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
        <Link href="/">
          <Image
            src={isExpanded || isHovered || isMobileOpen ? "/images/logo/logo-dark.svg" : "/images/logo/logo-icon.svg"}
            alt="Vaulltcore"
            width={isExpanded || isHovered || isMobileOpen ? 140 : 32}
            height={32}
            priority
          />
        </Link>
      </div>

      <div className="flex flex-col overflow-y-auto no-scrollbar pb-10">
        {sidebarGroups.map((group, gIndex) => (
          <nav key={gIndex} className="mb-8">
            <div className={`mb-4 px-3 ${!isExpanded && !isHovered ? "lg:hidden" : "block"}`}>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 opacity-60">
                {group.label}
              </h2>
            </div>

            <ul className="flex flex-col gap-1.5">
              {group.items.map((item) => {
                const isLocked = item.status === "locked";
                const config = STATUS_MAP[item.status];
                const Icon = item.icon;

                return (
                  <li key={item.title}>
                    {isLocked ? (
                      /* RESTRICTED NODE */
                      <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg opacity-25 cursor-not-allowed grayscale group">
                        <span className="text-gray-500">
                          <Icon size={20} strokeWidth={1.5} />
                        </span>
                        {(isExpanded || isHovered || isMobileOpen) && (
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-400">{item.title}</span>
                            <span className="text-[8px] text-red-500 font-bold tracking-tighter">[ACCESS_RESTRICTED]</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* ACTIVE NODE */
                      <Link
                        href={item.url}
                        className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                          isActive(item.url) 
                            ? "bg-brand-500/10 text-brand-500 dark:bg-brand-500/5" 
                            : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5"
                        }`}
                      >
                        <span className={`${isActive(item.url) ? "text-brand-500" : "text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"}`}>
                          <Icon size={20} strokeWidth={1.5} />
                        </span>
                        
                        {(isExpanded || isHovered || isMobileOpen) && (
                          <div className="flex flex-col overflow-hidden">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold truncate">{item.title}</span>
                              {item.status !== "stable" && (
                                <span className={`text-[7px] px-1 border border-current rounded font-bold ${config.color}`}>
                                  {config.label}
                                </span>
                              )}
                            </div>
                            {item.descriptor && (
                              <span className="text-[9px] font-mono opacity-50 truncate leading-tight">
                                {item.descriptor}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Status Pulse */}
                        {!isLocked && (isExpanded || isHovered || isMobileOpen) && (
                           <span className={`ml-auto size-1 rounded-full animate-pulse ${config.glow}`} />
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
      
      {/* Footer Widget Area */}
      {(isExpanded || isHovered || isMobileOpen) && (
        <div className="mt-auto pb-6">
           <SidebarWidget />
        </div>
      )}
    </aside>
  );
};

export default AppSidebar;
