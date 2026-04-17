"use client";
import React from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import Image from "next/image";
import { 
  ShieldCheck, 
  Terminal, 
  Activity, 
  Database, 
  Cpu, 
  Network, 
  Fingerprint, 
  TerminalSquare 
} from "lucide-react";

export default function UserMetaCard() {
  const { isOpen, openModal, closeModal } = useModal();
  
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[SYS_LOG]: Overwriting clearance parameters...");
    closeModal();
  };

  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-white/5 lg:p-6 bg-white dark:bg-gray-950 shadow-sm relative overflow-hidden">
        
        {/* Subtle Background Node Pulse */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between relative z-10">
          
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            
            {/* The Architect Avatar */}
            <div className="relative w-20 h-20 overflow-hidden border border-gray-200 rounded-xl dark:border-white/10 group">
              <Image
                width={80}
                height={80}
                src="/images/user/owner.jpg"
                alt="Knowledge Rumhizha"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
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
            Configure
          </button>
        </div>
      </div>

      {/* --- COMMAND OVERRIDE MODAL --- */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[750px] m-4">
        <div className="no-scrollbar relative w-full overflow-y-auto rounded-3xl bg-white p-5 dark:border dark:border-white/10 dark:bg-gray-950 lg:p-10 shadow-2xl">
          
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-500 text-[10px] font-mono uppercase tracking-widest">
               <ShieldCheck size={12} /> Root Access Granted
            </div>
            <h4 className="mb-1 text-2xl font-black uppercase tracking-tight text-gray-900 dark:text-white">
              System Configuration
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wide">
              [WARNING] Parameter modification alters sovereign routing endpoints.
            </p>
          </div>

          <form className="flex flex-col" onSubmit={handleSave}>
            <div className="custom-scrollbar h-[400px] overflow-y-auto pr-2 pb-4">
              
              {/* Network Endpoints */}
              <div className="mb-8">
                <h5 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-800 dark:text-white/90 border-b border-gray-200 dark:border-white/10 pb-2">
                  <Network size={16} className="text-brand-500" /> Edge Infrastructure
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div>
                    <Label className="font-mono text-[10px] uppercase text-gray-500">Global Registry</Label>
                    <Input type="text" defaultValue="registry.vaulltcore.io" className="font-mono text-xs text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <Label className="font-mono text-[10px] uppercase text-gray-500">Database Shard</Label>
                    <Input type="text" defaultValue="postgres://vanguard-edge-01" className="font-mono text-xs text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <Label className="font-mono text-[10px] uppercase text-gray-500">Primary Node</Label>
                    <Input type="text" defaultValue="iad1.edge.vaulltcore.io" className="font-mono text-xs text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <Label className="font-mono text-[10px] uppercase text-gray-500">Compute Matrix</Label>
                    <Input type="text" defaultValue="v8.isolate.cloudflare.com" className="font-mono text-xs text-gray-900 dark:text-white" />
                  </div>
                </div>
              </div>

              {/* Operator Cryptography */}
              <div>
                <h5 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-800 dark:text-white/90 border-b border-gray-200 dark:border-white/10 pb-2">
                  <Fingerprint size={16} className="text-brand-500" /> Operator Credentials
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label className="font-mono text-[10px] uppercase text-gray-500">Designation</Label>
                    <Input type="text" defaultValue="Knowledge" className="font-bold text-gray-900 dark:text-white uppercase" />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Label className="font-mono text-[10px] uppercase text-gray-500">Surname Matrix</Label>
                    <Input type="text" defaultValue="Rumhizha" className="font-bold text-gray-900 dark:text-white uppercase" />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Label className="font-mono text-[10px] uppercase text-gray-500">Secure Comm Link</Label>
                    <Input type="text" defaultValue="build@vaulltcore.com" className="font-mono text-xs text-gray-900 dark:text-white" />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Label className="font-mono text-[10px] uppercase text-gray-500">Cryptographic Key</Label>
                    <Input type="text" defaultValue="[ENCRYPTED_SHA256]" className="font-mono text-xs text-emerald-500 border-emerald-500/30 bg-emerald-500/5 focus:border-emerald-500" />
                  </div>
                  <div className="col-span-2">
                    <Label className="font-mono text-[10px] uppercase text-gray-500">System Role Protocol</Label>
                    <Input type="text" defaultValue="Architect of Ownership-First Infrastructure" className="text-gray-900 dark:text-white" />
                  </div>
                </div>
              </div>

            </div>
            
            {/* Action Overrides */}
            <div className="flex items-center gap-3 pt-6 mt-4 border-t border-gray-200 dark:border-white/10 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal} className="font-mono text-[10px] uppercase tracking-widest px-6">
                Abort
              </Button>
              <Button size="sm" type="submit" className="font-mono text-[10px] uppercase tracking-widest px-8 bg-gray-900 text-white hover:bg-brand-500 dark:bg-brand-500 dark:text-black dark:hover:bg-brand-400 border-none transition-colors">
                Execute Rewrite
              </Button>
            </div>
          </form>

        </div>
      </Modal>
    </>
  );
}
