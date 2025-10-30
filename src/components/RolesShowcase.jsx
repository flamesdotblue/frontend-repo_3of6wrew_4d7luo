import React from 'react';
import { User, Handshake, Activity, BarChart3, Shield, Radar, Layers, Server, SlidersHorizontal } from 'lucide-react';

function RoleCard({ title, icon: Icon, points, primary }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-purple-600/20 via-fuchsia-600/10 to-transparent blur-2xl" aria-hidden />
      <div className="relative p-6">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
          <Icon className="h-4 w-4" /> {title}
        </div>
        <div className="grid gap-3 text-sm text-white/80">
          {points.map((p) => (
            <div key={p} className="flex items-start gap-2">
              <Shield className="mt-0.5 h-4 w-4 text-purple-400" />
              <span>{p}</span>
            </div>
          ))}
        </div>

        {/* dashboard mock */}
        <div className="mt-6 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-4">
          <div className="mb-3 flex items-center justify-between text-xs text-white/60">
            <span>Live Attack Surface</span>
            <span className="inline-flex items-center gap-1 text-purple-300"><Activity className="h-3.5 w-3.5" /> Realtime</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-black/40 p-3">
              <div className="mb-1 text-[10px] uppercase tracking-wide text-white/50">Throughput</div>
              <div className="text-lg font-semibold">146 Gbps</div>
              <div className="mt-2 h-10 w-full rounded bg-gradient-to-r from-purple-500/30 via-fuchsia-500/30 to-blue-500/30" />
            </div>
            <div className="rounded-lg border border-white/10 bg-black/40 p-3">
              <div className="mb-1 text-[10px] uppercase tracking-wide text-white/50">Req/s</div>
              <div className="text-lg font-semibold">1.3 M</div>
              <div className="mt-2 h-10 w-full rounded bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-fuchsia-500/30" />
            </div>
            <div className="rounded-lg border border-white/10 bg-black/40 p-3">
              <div className="mb-1 text-[10px] uppercase tracking-wide text-white/50">Mitigations</div>
              <div className="text-lg font-semibold">Auto + Manual</div>
              <div className="mt-2 flex items-center gap-2 text-[11px] text-white/60">
                <BarChart3 className="h-3.5 w-3.5 text-purple-300" /> Trends stable
              </div>
            </div>
          </div>
          {primary && (
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                <div className="mb-1 text-[10px] uppercase tracking-wide text-white/50">Layer</div>
                <div className="flex items-center gap-2 text-sm"><Layers className="h-4 w-4 text-purple-300" /> L3/L4/L7</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                <div className="mb-1 text-[10px] uppercase tracking-wide text-white/50">Origins</div>
                <div className="flex items-center gap-2 text-sm"><Server className="h-4 w-4 text-purple-300" /> Multi-region</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function RolesShowcase() {
  return (
    <section id="roles" className="relative w-full bg-black py-20 text-white">
      {/* background motion lines */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-60 [background:radial-gradient(60%_60%_at_50%_50%,rgba(124,58,237,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_16px,rgba(124,58,237,0.08)_16px,rgba(124,58,237,0.08)_17px)] animate-[pulse_4s_ease-in-out_infinite]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
            <Radar className="h-4 w-4" /> Purpose-built for teams and partners
          </span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Two paths. One resilient perimeter.</h2>
          <p className="mt-2 text-white/70">Whether you operate an app or protect many, choose a focused workspace tailored to your role.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <RoleCard
            title="User Workspace"
            icon={User}
            primary
            points={[
              'Design realistic L3/4/7 DDoS drills with traffic mix presets',
              'Run coordinated global bursts and watch mitigations in realtime',
              'Export incident timelines and remediation checklists',
            ]}
          />

          <RoleCard
            title="Partner Workspace"
            icon={Handshake}
            points={[
              'Multi-tenant client dashboards and report templates',
              'Reusable playbooks with per-client overrides',
              'Usage-based billing with credit controls and approvals',
            ]}
          />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { icon: SlidersHorizontal, label: 'Scenario builder' },
            { icon: Shield, label: 'Defense validation' },
            { icon: Radar, label: 'Global telemetry' },
          ].map(({ icon: Ico, label }) => (
            <div key={label} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white/80">
              <Ico className="h-4 w-4 text-purple-300" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
