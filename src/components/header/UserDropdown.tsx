"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { 
  ShieldCheck, 
  Terminal, 
  Key, 
  LogOut, 
  ChevronDown, 
  BadgeCheck, 
  Mail, 
  MessageCircle,
  Fingerprint
} from "lucide-react";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown} 
        aria-label="Operator Terminal"
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-3 text-gray-700 dark:text-gray-300 transition-all hover:text-gray-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl p-1"
      >
        {/* The Architect Avatar */}
        <span className="relative flex items-center justify-center overflow-hidden rounded-lg h-9 w-9 border border-gray-200 dark:border-white/10 shadow-sm">
          <Image
            width={36}
            height={36}
            src="/images/user/owner.jpg"
            alt="Knowledge Rumhizha"
            className="object-cover"
          />
          {/* Hardware Key Indicator */}
          <span className="absolute bottom-0 right-0 z-10 flex h-2.5 w-2.5 items-center justify-center rounded-tl-sm bg-white dark:bg-[#020617]">
             <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          </span>
        </span>

        {/* Console Operator Label */}
        <span className="hidden lg:flex flex-col items-start mr-1">
          <span className="block font-bold text-xs uppercase tracking-widest leading-none">Knowledge</span>
          <span className="block text-[9px] font-mono text-gray-500 dark:text-gray-400 tracking-wider mt-0.5">Architect</span>
        </span>

        <ChevronDown 
          size={14} 
          className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-500" : "text-gray-400"}`} 
          aria-hidden="true"
        />
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-3 flex w-[calc(100vw-2rem)] max-w-[320px] flex-col rounded-3xl border border-gray-200 bg-white/95 p-4 backdrop-blur-2xl shadow-2xl dark:border-white/10 dark:bg-[#020617]/95 sm:w-[340px]"
      >
        {/* --- 100M Trust Matrix Header --- */}
        <div className="flex flex-col pb-4 border-b border-gray-100 dark:border-white/5">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 overflow-hidden border-2 border-brand-500/30 rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.15)]">
               <Image
                width={48}
                height={48}
                src="/images/user/owner.jpg"
                alt="Knowledge Rumhizha"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="flex items-center gap-1 font-black text-gray-900 text-sm dark:text-white uppercase tracking-tight">
                Knowledge <BadgeCheck size={14} className="text-blue-500" aria-label="Verified Architect" />
              </span>
              <span className="mt-0.5 block font-mono text-[10px] text-emerald-600 dark:text-emerald-500 uppercase tracking-widest font-bold">
                Level 9 Clearance
              </span>
            </div>
          </div>
        </div>

        {/* --- E2E Encrypted Comms --- */}
        <div className="py-3 border-b border-gray-100 dark:border-white/5">
           <span className="block mb-2 text-[9px] font-bold uppercase tracking-widest text-gray-400">Direct Uplinks</span>
           <div className="flex flex-col gap-2 font-mono">
              <a href="mailto:build@vaulltcore.com" className="group flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-brand-500/30 transition-colors">
                 <Mail size={12} className="text-gray-400 group-hover:text-brand-500 transition-colors" />
                 <span className="text-xs font-bold text-gray-900 dark:text-white">build@vaulltcore.com</span>
              </a>
              <a href="https://wa.me/263789139996" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20 hover:bg-emerald-500/10 transition-colors">
                 <MessageCircle size={12} className="text-emerald-500" />
                 <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">+263 789 139 996</span>
              </a>
           </div>
        </div>

        {/* --- Tactical Navigation --- */}
        <ul className="flex flex-col gap-1 pt-3 pb-3 border-b border-gray-100 dark:border-white/5" role="menu">
          <li role="none">
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              href="/profile"
              className="flex items-center gap-3 px-3 py-2.5 font-bold uppercase tracking-wide text-xs text-gray-700 rounded-xl group hover:bg-gray-50 hover:text-brand-600 dark:text-gray-300 dark:hover:bg-white/[0.02] dark:hover:text-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              role="menuitem"
            >
              <Terminal size={16} className="text-gray-400 group-hover:text-brand-500 transition-colors" />
              Operator Credentials
            </DropdownItem>
          </li>
          <li role="none">
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              href="/security"
              className="flex items-center gap-3 px-3 py-2.5 font-bold uppercase tracking-wide text-xs text-gray-700 rounded-xl group hover:bg-gray-50 hover:text-brand-600 dark:text-gray-300 dark:hover:bg-white/[0.02] dark:hover:text-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              role="menuitem"
            >
              <Fingerprint size={16} className="text-gray-400 group-hover:text-brand-500 transition-colors" />
              Cryptographic Keys
            </DropdownItem>
          </li>
          <li role="none">
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              href="/support"
              className="flex items-center gap-3 px-3 py-2.5 font-bold uppercase tracking-wide text-xs text-gray-700 rounded-xl group hover:bg-gray-50 hover:text-brand-600 dark:text-gray-300 dark:hover:bg-white/[0.02] dark:hover:text-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              role="menuitem"
            >
              <ShieldCheck size={16} className="text-gray-400 group-hover:text-brand-500 transition-colors" />
              Secure Protocol Support
            </DropdownItem>
          </li>
        </ul>

        {/* --- System Detach --- */}
        <Link
          href="/signin"
          className="flex items-center gap-3 px-3 py-3 mt-2 font-bold uppercase tracking-wide text-xs text-red-600 rounded-xl group hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          role="menuitem"
        >
          <LogOut size={16} className="text-red-500 group-hover:translate-x-1 transition-transform" />
          Terminate Session
        </Link>
      </Dropdown>
    </div>
  );
}
