"use client";
import React from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import { 
  Fingerprint, 
  Terminal, 
  ShieldCheck, 
  Lock, 
  Network, 
  Cpu, 
  Mail, 
  Hash 
} from "lucide-react";

export default function UserInfoCard() {
  const { isOpen, openModal, closeModal } = useModal();
  
  const handleVerify = () => {
    console.log("[SYS_LOG]: Cryptographic signature verified. Session extended.");
    closeModal();
  };

  return (
    <>
      <div className="relative p-5 overflow-hidden border border-gray-200 rounded-2xl bg-white/80 backdrop-blur-xl dark:border-white/5 dark:bg-[#020617]/80 lg:p-8 shadow-sm">
        
        {/* Subtle Edge Glow */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between relative z-10">
          <div className="w-full">
            
            <div className="flex items-center gap-2 mb-6">
              <Fingerprint size={18} className="text-brand-500" />
              <h4 className="text-lg font-black uppercase tracking-tight text-gray-900 dark:text-white">
                Identity Matrix
              </h4>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
              
              {/* Matrix Data Points */}
              <div className="p-3 rounded-xl border border-gray-100 bg-gray-50/50 dark:border-white/5 dark:bg-white/[0.02] transition-colors hover:border-brand-500/30">
                <p className="mb-1 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Given Designation
                </p>
                <p className="text-sm font-bold text-gray-900 dark:text-white uppercase">
                  Knowledge
                </p>
              </div>

              <div className="p-3 rounded-xl border border-gray-100 bg-gray-50/50 dark:border-white/5 dark:bg-white/[0.02] transition-colors hover:border-brand-500/30">
                <p className="mb-1 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Surname Matrix
                </p>
                <p className="text-sm font-bold text-gray-900 dark:text-white uppercase">
                  Rumhizha
                </p>
              </div>

              <div className="p-3 rounded-xl border border-gray-100 bg-gray-50/50 dark:border-white/5 dark:bg-white/[0.02] transition-colors hover:border-brand-500/30">
                <p className="mb-1 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Secure Comm Link
                </p>
                <p className="text-sm font-bold text-brand-600 dark:text-brand-500">
                  build@vaulltcore.com
                </p>
              </div>

              <div className="p-3 rounded-xl border border-emerald-500/10 bg-emerald-500/5 transition-colors hover:border-emerald-500/30">
                <p className="mb-1 text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-500">
                  Encrypted Channel
                </p>
                <p className="text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400 blur-[2px] hover:blur-none transition-all cursor-crosshair">
                  +09 363 398 46
                </p>
              </div>

              <div className="p-3 rounded-xl border border-gray-100 bg-gray-50/50 dark:border-white/5 dark:bg-white/[0.02] transition-colors hover:border-brand-500/30 sm:col-span-2 lg:col-span-2">
                <p className="mb-1 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  System Role
                </p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  Sovereign Infrastructure Architect
                </p>
              </div>

            </div>
          </div>

          <button
            onClick={openModal}
            className="group flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-gray-700 shadow-sm hover:bg-gray-50 hover:text-brand-600 dark:border-white/10 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-brand-500 transition-colors lg:inline-flex lg:w-auto shrink-0 mt-2 lg:mt-0"
          >
            <Terminal size={14} className="group-hover:text-brand-500" />
            Auth Logs
          </button>
        </div>
      </div>

      {/* --- COMMAND OVERRIDE MODAL (READ-ONLY TERMINAL) --- */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white/95 p-5 backdrop-blur-2xl dark:border dark:border-white/10 dark:bg-[#020617]/95 lg:p-10 shadow-2xl">
          
          <div className="mb-8 border-b border-gray-200 dark:border-white/10 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-500 text-[10px] font-mono uppercase tracking-widest">
               <ShieldCheck size={12} /> Read-Only Terminal
            </div>
            <h4 className="mb-2 text-2xl font-black uppercase tracking-tight text-gray-900 dark:text-white">
              Identity & Access Logs
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wide">
              [LOCKED] Immutable records of Architect parameters.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="custom-scrollbar h-[400px] overflow-y-auto pr-2 pb-3 space-y-8">
              
              {/* External Uplinks (Replaces Social Links) */}
              <div>
                <h5 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  <Network size={14} className="text-brand-500" /> Authorized Uplinks
                </h5>

                <div className="flex flex-col gap-3 font-mono">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                    <span className="text-[10px] text-gray-500 uppercase flex items-center gap-2"><Network size={12}/> Primary Array</span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white">github.com/vanguardxio</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                    <span className="text-[10px] text-gray-500 uppercase flex items-center gap-2"><Activity size={12}/> Comms Array</span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white">x.com/Vaulltcore</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                    <span className="text-[10px] text-gray-500 uppercase flex items-center gap-2"><Cpu size={12}/> Network Log</span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white">linkedin.com/company/vaulltcore</span>
                  </div>
                </div>
              </div>

              {/* Cryptographic Key Verification (Replaces Personal Info) */}
              <div>
                <h5 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  <Hash size={14} className="text-brand-500" /> Identity Hashes
                </h5>

                <div className="flex flex-col gap-3 font-mono">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 gap-2">
                    <span className="text-[10px] text-gray-500 uppercase">Operator ID</span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white">Knowledge Rumhizha</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 gap-2">
                    <span className="text-[10px] text-gray-500 uppercase flex items-center gap-2"><Mail size={12}/> Secure Ping</span>
                    <span className="text-xs font-bold text-brand-600 dark:text-brand-500">build@vaulltcore.com</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20 gap-2">
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-500 uppercase flex items-center gap-2"><Lock size={12}/> Session Status</span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                      </span>
                      VERIFIED_ACTIVE
                    </span>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Safe, Bug-Free Actions */}
            <div className="flex items-center gap-3 px-2 mt-8 pt-4 border-t border-gray-100 dark:border-white/10 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal} className="font-mono text-[10px] uppercase tracking-widest">
                Close Terminal
              </Button>
              <Button size="sm" onClick={handleVerify} className="font-mono text-[10px] uppercase tracking-widest bg-gray-900 text-white hover:bg-brand-500 dark:bg-brand-500 dark:text-black dark:hover:bg-brand-400 border-none transition-colors">
                Verify Signature
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
