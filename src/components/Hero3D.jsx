import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, ArrowRight } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300">
            <Shield className="h-4 w-4" />
            <span className="text-xs font-medium tracking-wide">DDoS Simulation • Enterprise-grade</span>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
            Simulate. Fortify. Stay Online.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            A clean, modern cyber security platform to safely pressure-test your infrastructure
            against volumetric, protocol, and application-layer attacks—without risking uptime.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
