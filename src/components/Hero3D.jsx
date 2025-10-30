import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, ArrowRight, Globe, Activity } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Interactive Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* DDoS global background animation layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* aurora gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.18),transparent_45%),radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.14),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(217,70,239,0.14),transparent_45%)]" />
        {/* flowing scanlines */
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_18px,rgba(168,85,247,0.08)_18px,rgba(168,85,247,0.08)_19px)] animate-[pulse_6s_ease-in-out_infinite] opacity-60" />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Global concept badges */}
      <div className="pointer-events-none absolute inset-0">
        <div className="mx-auto flex max-w-7xl justify-between px-6 pt-32">
          <div className="hidden gap-3 sm:flex">
            <div className="rounded-xl border border-purple-400/30 bg-purple-500/10 px-3 py-2 text-purple-300">
              <span className="inline-flex items-center gap-2 text-xs"><Globe className="h-4 w-4" /> Global nodes</span>
            </div>
            <div className="rounded-xl border border-purple-400/30 bg-purple-500/10 px-3 py-2 text-purple-300">
              <span className="inline-flex items-center gap-2 text-xs"><Activity className="h-4 w-4" /> Live traffic shaping</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-purple-300">
            <Shield className="h-4 w-4" />
            <span className="text-xs font-medium tracking-wide">Global DDoS Simulation • Enterprise-grade</span>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
            Model Global DDoS Attacks. Prove Resilience.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Spin up coordinated L3/4/7 simulations across multiple regions to reflect real-world attack
            patterns—and validate that your defenses hold anywhere in the world.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#roles"
              className="group inline-flex items-center justify-center rounded-lg bg-purple-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-purple-400"
            >
              Explore Workspaces
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#trust"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              See Why Teams Trust Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
