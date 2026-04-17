"use client";
import React from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import { 
  Scale, 
  Calendar, 
  ShieldCheck, 
  Lock, 
  FileText, 
  ChevronRight, 
  Terminal, 
  CheckCircle2, 
  Globe, 
  Activity 
} from "lucide-react";

export default function UserAddressCard() {
  const { isOpen, openModal, closeModal } = useModal();
  
  const handleBooking = () => {
    console.log("[SYS_LOG]: Establishing Secure Booking Link...");
    // Future integration: router.push('/book') or window.open('calendly-link')
    closeModal();
  };

  return (
    <>
      {/* --- MAIN DASHBOARD CARD --- */}
      <div className="relative p-5 overflow-hidden border border-gray-200 rounded-2xl bg-white/80 backdrop-blur-xl dark:border-white/5 dark:bg-[#020617]/80 lg:p-8 shadow-sm group">
        
        {/* Subtle Glass Edge Glow */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-brand-500/10 transition-colors duration-700" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between relative z-10">
          <div className="w-full">
            
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black shadow-lg">
                <Scale size={16} />
              </div>
              <div>
                <h4 className="text-lg font-black uppercase tracking-tight text-gray-900 dark:text-white leading-none">
                  Compliance & SLA Matrix
                </h4>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Global Edge Jurisdiction
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
              
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 dark:border-white/5 dark:bg-white/[0.02]">
                <p className="mb-1.5 flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  <Globe size={12} /> Routing Protocol
                </p>
                <p className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                  Decentralized
                </p>
              </div>

              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 dark:border-white/5 dark:bg-white/[0.02]">
                <p className="mb-1.5 flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  <Lock size={12} /> Privacy Standard
                </p>
                <p className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                  Zero-Knowledge
                </p>
              </div>

              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 dark:border-white/5 dark:bg-white/[0.02]">
                <p className="mb-1.5 flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  <Activity size={12} /> Uptime Guarantee
                </p>
                <p className="text-sm font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-wide flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  </span>
                  99.999% SLA
                </p>
              </div>

              <div className="p-4 rounded-xl border border-brand-500/10 bg-brand-500/5 transition-colors hover:border-brand-500/30">
                <p className="mb-1.5 flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-brand-600 dark:text-brand-500">
                  <Calendar size={12} /> Next Audit Window
                </p>
                <p className="text-sm font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
                  Available
                </p>
              </div>

            </div>
          </div>

          <button
            onClick={openModal}
            className="group flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-gray-900 px-6 py-4 text-xs font-black uppercase tracking-[0.15em] text-white shadow-xl hover:bg-brand-500 dark:border-white/10 dark:bg-brand-500 dark:text-black dark:hover:bg-brand-400 transition-all lg:inline-flex lg:w-auto shrink-0 mt-2 lg:mt-0 hover:scale-[1.02] active:scale-95"
          >
            <Terminal size={14} className="group-hover:text-black transition-colors" />
            System Audit
          </button>
        </div>
      </div>

      {/* --- COMMAND OVERRIDE MODAL (THE BOOKING & DOCS TERMINAL) --- */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white/95 p-6 backdrop-blur-3xl dark:border dark:border-white/10 dark:bg-[#020617]/95 lg:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          
          <div className="mb-8 border-b border-gray-200 dark:border-white/10 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-500 text-[10px] font-mono uppercase tracking-widest">
               <ShieldCheck size={12} /> Secure Protocol
            </div>
            <h4 className="mb-2 text-2xl md:text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-white">
              Schedule System Audit
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wide leading-relaxed">
              [AUTHORIZED] Establish a direct, encrypted sync with the Architect to audit your current infrastructure, review security SLAs, and execute sovereign transition plans.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="custom-scrollbar h-[380px] overflow-y-auto pr-2 pb-3 space-y-8">
              
              {/* Operator Sync Details */}
              <div>
                <h5 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  <Calendar size={14} className="text-brand-500" /> Booking Parameters
                </h5>

                <div className="flex flex-col gap-3 font-mono">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 gap-2">
                    <span className="text-[10px] text-gray-500 uppercase">Consulting Architect</span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" /> Knowledge Rumhizha
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 gap-2">
                    <span className="text-[10px] text-gray-500 uppercase">Duration & Format</span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white">45-Min Encrypted Deep Dive</span>
                  </div>
                </div>
              </div>

              {/* Documentation & Legal */}
              <div>
                <h5 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  <FileText size={14} className="text-brand-500" /> Vaulltcore Documentation
                </h5>

                <div className="flex flex-col gap-3 font-mono">
                  <a href="#" className="group flex items-center justify-between p-3.5 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-brand-500/30 transition-colors cursor-pointer">
                    <span className="text-[10px] text-gray-500 uppercase flex items-center gap-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"><ShieldCheck size={14}/> Security & SLA Terms</span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-2">View Protocol <ChevronRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"/></span>
                  </a>
                  
                  <a href="#" className="group flex items-center justify-between p-3.5 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-brand-500/30 transition-colors cursor-pointer">
                    <span className="text-[10px] text-gray-500 uppercase flex items-center gap-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"><Lock size={14}/> Privacy Architecture</span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-2">View Protocol <ChevronRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"/></span>
                  </a>
                </div>
              </div>

            </div>
            
            {/* The Ultimate Sales CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-white/10 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal} className="w-full sm:w-auto font-mono text-[10px] uppercase tracking-widest px-6 h-12">
                Abort
              </Button>
              
              <Button size="sm" onClick={handleBooking} className="group relative w-full sm:w-auto font-black text-xs uppercase tracking-[0.15em] px-8 h-12 bg-gray-900 text-white hover:bg-brand-500 dark:bg-brand-500 dark:text-black dark:hover:bg-brand-400 border-none shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                Establish Secure Link
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
