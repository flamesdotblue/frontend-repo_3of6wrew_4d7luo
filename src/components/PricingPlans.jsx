import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: 'month',
    highlight: 'For small teams validating basics',
    features: [
      '5 simulations / month',
      'HTTP & TCP scenarios',
      '1 region',
      'Email support'
    ]
  },
  {
    name: 'Growth',
    price: '$199',
    period: 'month',
    highlight: 'Advanced testing & reports',
    popular: true,
    features: [
      'Unlimited simulations',
      'L3/L4/L7 library',
      '3 regions',
      'Realtime dashboards',
      'Priority support'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    highlight: 'Scale, SSO, and compliance',
    features: [
      'Global regions',
      'SSO & RBAC',
      'Custom SLAs',
      'Dedicated success engineer'
    ]
  }
];

export default function PricingPlans() {
  return (
    <section id="pricing" className="relative bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Simple pricing, predictable value</h2>
          <p className="mt-3 text-white/70">Start small, grow confidently. Cancel anytime.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border border-white/10 p-6 ${
                p.popular ? 'bg-emerald-500/10 ring-2 ring-emerald-500/40' : 'bg-white/5'
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-black">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-white/70">{p.highlight}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold">{p.price}</span>
                {p.period && <span className="text-white/60">/{p.period}</span>}
              </div>

              <ul className="mt-6 space-y-3">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-white/80">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20">
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  p.popular
                    ? 'bg-emerald-500 text-black hover:bg-emerald-400'
                    : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Choose {p.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
