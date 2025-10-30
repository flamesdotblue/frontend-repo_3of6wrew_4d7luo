import React from 'react';
import { Zap, Bug, Shield } from 'lucide-react';

export default function FooterAttack() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-neutral-950 text-white">
      {/* animated attack background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-96 w-[120vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 opacity-50 [background:repeating-conic-gradient(from_0deg,rgba(168,85,247,0.08)_0deg,rgba(168,85,247,0.08)_6deg,transparent_6deg,transparent_12deg)] animate-[spin_20s_linear_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-purple-500"><Shield className="h-4 w-4 text-black" /></div>
            <span className="text-sm font-semibold">AegisSim</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-white/70">
            <a href="#trust" className="hover:text-white">Trust</a>
            <a href="#roles" className="hover:text-white">Workspaces</a>
            <a href="#" className="hover:text-white">Status</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-white/60">
          <span className="inline-flex items-center gap-1"><Zap className="h-3.5 w-3.5 text-purple-300" /> Simulate at will, safely.</span>
          <span>© {new Date().getFullYear()} AegisSim Labs</span>
        </div>
      </div>
    </footer>
  );
}
