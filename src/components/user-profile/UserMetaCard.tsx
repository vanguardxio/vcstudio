"use client";
import React from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Image from "next/image";
import { 
  ShieldCheck, 
  Terminal, 
  Activity, 
  Database, 
  Cpu, 
  Network, 
  Fingerprint, 
  TerminalSquare,
  Lock
} from "lucide-react";

export default function UserMetaCard() {
  const { isOpen, openModal, closeModal } = useModal();
  
  const handleOverride = () => {
    console.log("[SYS_LOG]: Override requested. Awaiting Architect cryptographic signature...");
    closeModal();
  };

  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-white/5 lg:p-6 bg-white dark:bg-[#020617] shadow-sm relative overflow-hidden">
        
        {/* Subtle Background Node Pulse */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between relative z-10">
          
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            
            {/* The Architect Avatar */}
            <div className="relative w-20 h-20 overflow-hidden border border-gray-200 rounded-xl dark:border-white/10 group shadow-lg shadow-brand-500/10">
              <Image
                width={80}
                height={80}
                src="/images/user/owner.jpg"
                alt="Knowledge Rumhizha"
                className="object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-110"
              />
              <div className="absolute inset-0 bg-brand-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Operator Designation */}
            <div className="order-3 xl:order-2 text-center xl:text-left">
              <h4 className="mb-1 text-xl font-black uppercase tracking-tight text-gray-900 dark:text-white">
                Knowledge Rumhizha
              </h4>
              <div className="flex flex-col items-center gap-2 xl:flex-row xl:gap-3">
                <p className="flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-[0.1em] text-brand-600 dark:text-brand-500">
                  <TerminalSquare size={12} /> Vaulltcore Architect
                </p>
                <div className="hidden h-3 w-px bg-gray-300 dark:bg-gray-700 xl:block" />
                <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Sector: ZWE_CORE
                </p>
              </div>
            </div>

            {/* Telemetry Actions */}
            <div className="flex items-center order-2 gap-3 grow xl:order-3 xl:justify-end">
               <div className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 dark:border-white/5 dark:bg-white/[0.02]">
                  <div className="flex items-center gap-1.5">
                     <ShieldCheck size={14} className="text-emerald-500" />
                     <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-900 dark:text-white">Zero-Trust</span>
                  </div>
                  <div className="h-4 w-px bg-gray-200 dark:bg-white/10" />
                  <div className="flex items-center gap-1.5">
                     <Activity size={14} className="text-brand-500" />
                     <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-900 dark:text-white">Active</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Configuration Override Trigger */}
          <button
            onClick={openModal}
            className="group flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-widest text-gray-700 shadow-sm hover:bg-gray-50 hover:text-brand-600 dark:border-white/10 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-brand-500 transition-colors lg:w-auto shrink-0"
          >
            <Terminal size={14} className="group-hover:text-brand-500" />
            Access Terminal
          </button>
        </div>
      </div>

      {/* --- COMMAND OVERRIDE MODAL --- */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[750px] m-4">
        <div className="no-scrollbar relative w-full overflow-y-auto rounded-3xl bg-white p-5 dark:border dark:border-white/10 dark:bg-[#020617] lg:p-10 shadow-2xl">
          
          <div className="mb-8 border-b border-gray-200 dark:border-white/10 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-500 text-[10px] font-mono uppercase tracking-widest">
               <ShieldCheck size={12} /> Live Manifest
            </div>
            <h4 className="mb-1 text-2xl font-black uppercase tracking-tight text-gray-900 dark:text-white">
              Infrastructure Telemetry
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wide">
              [LOCKED] Parameters are hard-coded by the Architect. No SaaS inputs detected.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="custom-scrollbar h-[400px] overflow-y-auto pr-2 pb-4 space-y-8">
              
              {/* Network Endpoints */}
              <div>
                <h5 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  <Network size={14} className="text-brand-500" /> Global Edge Nodes
                </h5>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 dark:border-white/5 dark:bg-white/[0.02]">
                    <span className="font-mono text-[10px] uppercase text-gray-500">Global Registry</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-gray-900 dark:text-white">registry.vaulltcore.io</span>
                      <Lock size={12} className="text-brand-500" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 dark:border-white/5 dark:bg-white/[0.02]">
                    <span className="font-mono text-[10px] uppercase text-gray-500">Database Shard</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-gray-900 dark:text-white">postgres://vanguard-edge-01</span>
                      <Lock size={12} className="text-brand-500" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 dark:border-white/5 dark:bg-white/[0.02]">
                    <span className="font-mono text-[10px] uppercase text-gray-500">Compute Matrix</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-gray-900 dark:text-white">v8.isolate.cloudflare.com</span>
                      <Lock size={12} className="text-brand-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Operator Cryptography */}
              <div>
                <h5 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  <Fingerprint size={14} className="text-brand-500" /> Operator Protocols
                </h5>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 dark:border-white/5 dark:bg-white/[0.02]">
                    <span className="font-mono text-[10px] uppercase text-gray-500">Secure Comm Link</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-500">build@vaulltcore.com</span>
                      <ShieldCheck size={12} className="text-emerald-500" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
                    <span className="font-mono text-[10px] uppercase text-emerald-600 dark:text-emerald-500">Cryptographic Key</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 blur-[2px] hover:blur-none transition-all cursor-crosshair">
                        e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                      </span>
                      <Lock size={12} className="text-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Action Overrides */}
            <div className="flex items-center gap-3 pt-6 mt-4 border-t border-gray-200 dark:border-white/10 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal} className="font-mono text-[10px] uppercase tracking-widest px-6">
                Terminate Session
              </Button>
              {/* Type error is permanently dead here */}
              <Button size="sm" onClick={handleOverride} className="font-mono text-[10px] uppercase tracking-widest px-8 bg-gray-900 text-white hover:bg-brand-500 dark:bg-brand-500 dark:text-black dark:hover:bg-brand-400 border-none transition-colors">
                Request Protocol Override
              </Button>
            </div>
          </div>

        </div>
      </Modal>
    </>
  );
}
