import React from 'react';
import { ShieldCheck, Star, Globe } from 'lucide-react';

const logos = [
  { name: 'CloudEdge', initials: 'CE' },
  { name: 'NovaInfra', initials: 'NI' },
  { name: 'SentinelPay', initials: 'SP' },
  { name: 'Northwind ISP', initials: 'NW' },
  { name: 'Quasar CDN', initials: 'QC' },
];

export default function TrustSection() {
  return (
    <section id="trust" className="relative w-full bg-black py-20 text-white">
      {/* subtle animated grid backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(147,51,234,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent,transparent),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:100%_100%,40px_40px,40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-purple-300">
            <ShieldCheck className="h-4 w-4" />
            Trusted by teams on every continent
          </span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Confidence under concerted pressure</h2>
          <p className="mt-3 text-white/70">Enterprises, ISPs and security partners use our global DDoS simulations to validate protections and train playbooks before real incidents strike.</p>
        </div>

        {/* logo row */}
        <div className="mt-10 grid grid-cols-2 gap-4 opacity-90 sm:grid-cols-5">
          {logos.map((l) => (
            <div key={l.name} className="flex h-16 items-center justify-center rounded-md border border-white/10 bg-white/5 text-sm text-white/70">
              <span className="font-semibold tracking-wide">{l.initials}</span>
            </div>
          ))}
        </div>

        {/* testimonials */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[1,2,3].map((i) => (
            <figure key={i} className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5">
              <div className="mb-3 flex items-center gap-2 text-purple-300">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-sm text-white/80">
                "We pressure-tested multi-region failover against volumetric and L7 bursts. The drill surfaced real issues we fixed the same week."
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 text-xs text-white/60">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600/30">{i}</div>
                <div>
                  <div className="font-medium text-white">Security Lead</div>
                  <div>Global SaaS, {2020 + i}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/70">
          <Globe className="h-4 w-4" />
          Operating nodes across 25+ regions
        </div>
      </div>
    </section>
  );
}
