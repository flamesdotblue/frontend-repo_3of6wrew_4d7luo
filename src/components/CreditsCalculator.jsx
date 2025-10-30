import React, { useMemo, useState } from 'react';
import { Calculator, SlidersHorizontal, Sparkles, Info, Check } from 'lucide-react';

const LAYER_PRICING = {
  L34: 5, // per minute base credits
  L7: 8,
  BOTH: 12,
};

const REGION_MULT = {
  '1': 1.0,
  '3': 1.8,
  '5': 2.5,
};

const INTENSITY_MULT = {
  Low: 0.8,
  Medium: 1.0,
  High: 1.3,
};

const CREDIT_TO_USD = 0.25; // $ per credit

export default function CreditsCalculator() {
  const [options, setOptions] = useState({
    layer: 'BOTH',
    regions: '3',
    duration: 30, // minutes
    intensity: 'Medium',
  });

  const [answers, setAnswers] = useState({
    sensitivity: 'Medium',
    exposure: 'Regional',
    complexity: 'Dynamic web/API',
  });

  const credits = useMemo(() => {
    const base = LAYER_PRICING[options.layer] || 0;
    const time = Number(options.duration) || 0;
    const reg = REGION_MULT[options.regions] || 1;
    const inten = INTENSITY_MULT[options.intensity] || 1;
    const total = Math.ceil(base * time * reg * inten);
    return Math.max(total, 0);
  }, [options]);

  const usd = useMemo(() => (credits * CREDIT_TO_USD).toFixed(2), [credits]);

  const applySuggestion = () => {
    // Map questionnaire answers to recommended config
    const suggested = { ...options };

    // Sensitivity → intensity
    if (answers.sensitivity === 'High') suggested.intensity = 'High';
    else if (answers.sensitivity === 'Low') suggested.intensity = 'Low';
    else suggested.intensity = 'Medium';

    // Exposure → regions
    if (answers.exposure === 'Global') suggested.regions = '5';
    else if (answers.exposure === 'Regional') suggested.regions = '3';
    else suggested.regions = '1';

    // Complexity → layer
    if (answers.complexity === 'Static site') suggested.layer = 'L34';
    else if (answers.complexity === 'Dynamic web/API') suggested.layer = 'L7';
    else suggested.layer = 'BOTH';

    // Quick duration heuristic
    suggested.duration = answers.sensitivity === 'High' ? 60 : answers.exposure === 'Global' ? 45 : 30;

    setOptions(suggested);
  };

  return (
    <section id="pricing" className="relative bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Flexible credits — pay for what you simulate</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              No fixed plans. Estimate credits based on your scenario and purchase exactly what you need.
            </p>
          </div>
          <div className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-emerald-300">
            <span className="text-sm">1 credit ≈ ${CREDIT_TO_USD.toFixed(2)} USD</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Calculator */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
            <div className="mb-6 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-emerald-300" />
              <h3 className="text-xl font-semibold">Credits Calculator</h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wide text-white/60">Layer</label>
                <select
                  value={options.layer}
                  onChange={(e) => setOptions({ ...options, layer: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-emerald-400 outline-none"
                >
                  <option value="L34">L3/L4 (volumetric & protocol)</option>
                  <option value="L7">L7 (application)</option>
                  <option value="BOTH">Both L3/4 + L7</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs uppercase tracking-wide text-white/60">Regions</label>
                <select
                  value={options.regions}
                  onChange={(e) => setOptions({ ...options, regions: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-emerald-400 outline-none"
                >
                  <option value="1">1 region</option>
                  <option value="3">3 regions</option>
                  <option value="5">5 regions</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs uppercase tracking-wide text-white/60">Duration</label>
                <select
                  value={options.duration}
                  onChange={(e) => setOptions({ ...options, duration: Number(e.target.value) })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-emerald-400 outline-none"
                >
                  <option value={15}>15 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={45}>45 minutes</option>
                  <option value={60}>60 minutes</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs uppercase tracking-wide text-white/60">Intensity</label>
                <select
                  value={options.intensity}
                  onChange={(e) => setOptions({ ...options, intensity: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-emerald-400 outline-none"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-5">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-white/60">Estimated credits</p>
                  <div className="mt-1 text-4xl font-bold text-white">{credits}</div>
                </div>
                <div>
                  <p className="text-sm text-white/60">Est. cost</p>
                  <div className="mt-1 text-4xl font-bold text-emerald-300">${usd}</div>
                </div>
                <a href="#demo" className="inline-flex items-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-400">
                  Purchase credits
                </a>
              </div>
              <p className="mt-3 flex items-center gap-2 text-xs text-white/50"><Info className="h-4 w-4" /> Final pricing may vary slightly based on traffic shape and premium regions.</p>
            </div>
          </div>

          {/* Questionnaire */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-6 flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5 text-emerald-300" />
              <h3 className="text-xl font-semibold">Quick suggestions</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wide text-white/60">Traffic sensitivity</label>
                <select
                  value={answers.sensitivity}
                  onChange={(e) => setAnswers({ ...answers, sensitivity: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-emerald-400 outline-none"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs uppercase tracking-wide text-white/60">Geo exposure</label>
                <select
                  value={answers.exposure}
                  onChange={(e) => setAnswers({ ...answers, exposure: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-emerald-400 outline-none"
                >
                  <option>Local</option>
                  <option>Regional</option>
                  <option>Global</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs uppercase tracking-wide text-white/60">Application complexity</label>
                <select
                  value={answers.complexity}
                  onChange={(e) => setAnswers({ ...answers, complexity: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-emerald-400 outline-none"
                >
                  <option>Static site</option>
                  <option>Dynamic web/API</option>
                  <option>Hybrid (web + services)</option>
                </select>
              </div>

              <button
                onClick={applySuggestion}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
              >
                <Sparkles className="h-4 w-4 text-emerald-300" /> Apply suggestion
              </button>

              <div className="mt-4 rounded-lg border border-white/10 bg-black/30 p-4 text-sm text-white/70">
                <p className="mb-2 flex items-center gap-2"><Check className="h-4 w-4 text-emerald-300" /> Recommendations update the calculator instantly.</p>
                <p>Buy once, use anytime. Credits never expire on Enterprise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
