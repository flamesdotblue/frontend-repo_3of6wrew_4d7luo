import React, { useState } from 'react';
import { HelpCircle, Mail, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: 'Is it safe to run simulations against production?',
    a: 'Yes. Traffic generators are isolated and rate-limited with built-in guardrails. You can target staging first and promote with approvals.'
  },
  {
    q: 'Which DDoS vectors are supported?',
    a: 'Coverage includes common L3/L4 volumetric and protocol vectors as well as L7 application patterns like HTTP floods and slowloris.'
  },
  {
    q: 'Do you offer compliance features?',
    a: 'We provide audit trails, role-based access, and data retention controls. Enterprise plans include SSO and custom SLAs.'
  }
];

export default function SupportSection() {
  const [demo, setDemo] = useState({ name: '', email: '', message: '' });
  const [subEmail, setSubEmail] = useState('');

  const submitDemo = (e) => {
    e.preventDefault();
    alert(`Thanks ${demo.name || 'there'}! We\'ll reach out at ${demo.email}.`);
    setDemo({ name: '', email: '', message: '' });
  };

  const submitSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed: ${subEmail}`);
    setSubEmail('');
  };

  return (
    <section id="demo" className="relative bg-neutral-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">Get a tailored demo</h2>
          <p className="mt-2 text-white/70">Tell us about your stack and goals—we\'ll show a relevant scenario.</p>
          <form onSubmit={submitDemo} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                type="text"
                placeholder="Full name"
                value={demo.name}
                onChange={(e) => setDemo({ ...demo, name: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:border-emerald-400"
              />
              <input
                required
                type="email"
                placeholder="Work email"
                value={demo.email}
                onChange={(e) => setDemo({ ...demo, email: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:border-emerald-400"
              />
            </div>
            <textarea
              rows={4}
              placeholder="What infrastructure do you want to test?"
              value={demo.message}
              onChange={(e) => setDemo({ ...demo, message: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:border-emerald-400"
            />
            <button
              type="submit"
              className="inline-flex items-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
            >
              Request Demo <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>

          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-lg border border-white/10 bg-white/5 p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                  <span className="flex items-center gap-2"><HelpCircle className="h-4 w-4 text-emerald-300" /> {f.q}</span>
                  <span className="text-white/50 group-open:hidden">+</span>
                  <span className="hidden text-white/50 group-open:inline">−</span>
                </summary>
                <p className="mt-2 text-sm text-white/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-emerald-500/10 to-white/5 p-8">
          <div>
            <h3 className="text-2xl font-semibold">From the Labs: Security Letters</h3>
            <p className="mt-2 text-white/70">
              Subscribe for field notes on attack trends, mitigation tactics, and product updates.
            </p>
          </div>
          <form onSubmit={submitSubscribe} className="mt-6 flex gap-3">
            <div className="relative w-full">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                required
                type="email"
                placeholder="you@company.com"
                value={subEmail}
                onChange={(e) => setSubEmail(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm outline-none placeholder:text-white/50 focus:border-emerald-400"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            We respect your inbox. Unsubscribe anytime.
          </div>
        </div>
      </div>
    </section>
  );
}
