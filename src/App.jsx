import React from 'react';
import Hero3D from './components/Hero3D';
import FeaturesGrid from './components/FeaturesGrid';
import PricingPlans from './components/PricingPlans';
import SupportSection from './components/SupportSection';

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="h-6 w-6 rounded-md bg-emerald-500" />
            <span className="text-sm font-semibold">AegisSim</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#demo" className="hover:text-white">Demo</a>
          </nav>
          <a href="#pricing" className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-400">Start</a>
        </div>
      </header>

      <main>
        <Hero3D />
        <FeaturesGrid />
        <PricingPlans />
        <SupportSection />
      </main>

      <footer className="border-t border-white/10 bg-neutral-950 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} AegisSim Labs — Cyber Resilience, Simplified.</p>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
