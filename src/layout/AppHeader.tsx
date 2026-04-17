"use client";
import { ThemeToggleButton } from "@/components/common/ThemeToggleButton";
import NotificationDropdown from "@/components/header/NotificationDropdown";
import UserDropdown from "@/components/header/UserDropdown";
import { useSidebar } from "@/context/SidebarContext";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Search, Menu, X, Command as CommandIcon, SlidersHorizontal } from "lucide-react";

const AppHeader: React.FC = () => {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    if (window.innerWidth >= 1024) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/90 backdrop-blur-xl dark:border-white/5 dark:bg-[#020617]/90 shadow-sm transition-colors duration-300">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-8">
        
        {/* --- TACTICAL LEFT: Controls & Mobile Branding --- */}
        <div className="flex items-center justify-between w-full gap-2 px-4 py-3 border-b border-gray-100 dark:border-white/5 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
          
          <button
            onClick={handleToggle}
            aria-label={isMobileOpen ? "Close Command Sidebar" : "Open Command Sidebar"}
            aria-expanded={isMobileOpen}
            className="flex items-center justify-center w-10 h-10 text-gray-600 rounded-xl transition-all hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5 lg:h-11 lg:w-11 lg:border lg:border-gray-200 lg:bg-gray-50 lg:dark:border-white/10 lg:dark:bg-white/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            {isMobileOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>

          <Link 
            href="/" 
            className="lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md"
            aria-label="Vaulltcore Home"
          >
            <Image
              width={154}
              height={32}
              className="dark:hidden h-7 w-auto"
              src="/images/logo/logo.svg"
              alt="Vaulltcore"
            />
            <Image
              width={154}
              height={32}
              className="hidden dark:block h-7 w-auto"
              src="/images/logo/logo-dark.svg"
              alt="Vaulltcore"
            />
          </Link>

          <button
            onClick={() => setApplicationMenuOpen(!isApplicationMenuOpen)}
            aria-label="Toggle System Menu"
            aria-expanded={isApplicationMenuOpen}
            className="flex items-center justify-center w-10 h-10 text-gray-600 rounded-xl hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <SlidersHorizontal size={20} strokeWidth={2} />
          </button>

          {/* --- COMMAND INPUT NODE --- */}
          <div className="hidden lg:block lg:ml-6">
            <form onSubmit={(e) => e.preventDefault()} role="search">
              <label htmlFor="system-command" className="sr-only">System Search</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-focus-within:text-brand-500 transition-colors duration-200">
                  <Search size={18} strokeWidth={2} />
                </span>
                
                <input
                  id="system-command"
                  ref={inputRef}
                  type="text"
                  placeholder="System.Search // Enter Command..."
                  className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 pl-11 pr-16 text-xs font-mono font-bold tracking-widest text-gray-900 transition-all placeholder:text-gray-400 placeholder:font-mono focus:border-brand-500/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-500/10 dark:border-white/5 dark:bg-white/[0.02] dark:text-white dark:placeholder:text-gray-500 dark:focus:bg-[#020617] dark:focus:border-brand-500/50 xl:w-[480px]"
                  aria-keyshortcuts="Control+K"
                />
                
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 shadow-sm dark:border-white/10 dark:bg-white/5 pointer-events-none">
                  <CommandIcon size={12} className="text-gray-500 dark:text-gray-400" />
                  <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400">K</span>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* --- TACTICAL RIGHT: Telemetry & Identity --- */}
        <div
          className={`${
            isApplicationMenuOpen ? "flex" : "hidden"
          } items-center justify-between w-full gap-6 px-5 py-4 lg:flex lg:justify-end lg:px-0 lg:py-0 bg-gray-50 dark:bg-transparent lg:bg-transparent`}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Live System Indicator */}
            <div 
              className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mr-4"
              role="status"
              aria-label="System Online"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-500 select-none">
                Uplink_Active
              </span>
            </div>

            <ThemeToggleButton />
            <NotificationDropdown /> 
          </div>

          {/* Identity Matrix */}
          <div className="border-l border-gray-200 dark:border-white/10 pl-6 h-10 flex items-center">
            <UserDropdown /> 
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
