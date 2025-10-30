import React from 'react';
import Hero3D from './components/Hero3D';
import TrustSection from './components/TrustSection';
import RolesShowcase from './components/RolesShowcase';
import FooterAttack from './components/FooterAttack';

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="h-6 w-6 rounded-md bg-purple-500" />
            <span className="text-sm font-semibold">AegisSim</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#trust" className="hover:text-white">Trust</a>
            <a href="#roles" className="hover:text-white">Workspaces</a>
          </nav>
          <a href="#roles" className="rounded-lg bg-purple-500 px-4 py-2 text-sm font-semibold text-black hover:bg-purple-400">Get Started</a>
        </div>
      </header>

      <main>
        <Hero3D />
        <TrustSection />
        <RolesShowcase />
      </main>

      <FooterAttack />
    </div>
  );
}
