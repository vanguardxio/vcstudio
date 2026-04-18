import { Metadata } from "next";
import React from "react";
import { Fingerprint } from "lucide-react";

// --- VERIFIED SYSTEM IMPORTS ---
// Exact paths maintained to guarantee zero Vercel build failures.
import UserAddressCard from "@/components/user-profile/UserAddressCard";
import UserInfoCard from "@/components/user-profile/UserInfoCard";
import UserMetaCard from "@/components/user-profile/UserMetaCard";

// ─── SOVEREIGN METADATA ────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Operator Credentials | Vaulltcore Command Center",
  description: "Cryptographically secured identity matrix and clearance protocols for Vaulltcore infrastructure operators.",
};

export default function Profile() {
  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      
      {/* --- OPERATOR CLEARANCE WRAPPER --- */}
      <div className="rounded-3xl border border-gray-200 bg-white/95 p-5 backdrop-blur-2xl shadow-xl dark:border-white/10 dark:bg-[#020617]/95 lg:p-8">
        
        {/* --- TACTICAL HEADER --- */}
        <div className="flex items-center gap-4 mb-6 lg:mb-8 border-b border-gray-100 dark:border-white/5 pb-5">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-500 shadow-inner border border-brand-500/20">
            <Fingerprint size={24} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-black uppercase tracking-widest text-gray-900 dark:text-white">
              Operator Credentials
            </h3>
            <p className="text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1 flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              </span>
              Verified Identity Matrix // Clearance Level 9
            </p>
          </div>
        </div>

        {/* --- IDENTITY CARDS (Unchanged Sub-components) --- */}
        <div className="space-y-6">
          <UserMetaCard />
          <UserInfoCard />
          <UserAddressCard />
        </div>
        
      </div>
    </div>
  );
}
