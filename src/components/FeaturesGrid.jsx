import React from 'react';
import { Shield, Server, Lock, Globe, BarChart3, Zap, Check } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-6 w-6 text-emerald-400" />,
    title: 'Layer 3/4/7 Coverage',
    desc: 'Simulate volumetric, protocol, and application-layer attacks with precise control.'
  },
  {
    icon: <Server className="h-6 w-6 text-emerald-400" />,
    title: 'Safe-by-Design',
    desc: 'Isolated traffic generation with rate limits and guardrails to protect production.'
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-emerald-400" />,
    title: 'Real-time Analytics',
    desc: 'Live dashboards, latency and error metrics, and automatic resilience scoring.'
  },
  {
    icon: <Globe className="h-6 w-6 text-emerald-400" />,
    title: 'Global Test Nodes',
    desc: 'Distributed regions let you reproduce geographic traffic patterns on demand.'
  },
  {
    icon: <Lock className="h-6 w-6 text-emerald-400" />,
    title: 'Compliance Ready',
    desc: 'SOC2-minded workflows, audit trails, and per-environment access controls.'
  },
  {
    icon: <Zap className="h-6 w-6 text-emerald-400" />,
    title: 'One-click Playbooks',
    desc: 'Prebuilt scenarios for SYN flood, HTTP/2 rapid reset, slowloris, and more.'
  }
];

const steps = [
  'Connect your environment via token or IP allowlist',
  'Pick a scenario or craft a custom profile',
  'Run a dry test, then schedule a full simulation',
  'Review insights and harden your defenses'
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Purpose-built for realistic testing</h2>
          <p className="mt-3 text-white/70">
            Everything you need to safely validate DDoS readiness—without compromising reliability.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold">Four simple steps to onboard</h3>
            <p className="mt-2 text-white/70">From first connection to actionable insights—onboard in minutes.</p>
          </div>
          <ol className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
            {steps.map((s, i) => (
              <li key={i} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm text-white/80">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
