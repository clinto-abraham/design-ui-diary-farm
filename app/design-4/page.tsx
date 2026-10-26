"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Sparkles,
  Zap,
  Layers,
  TrendingUp,
  Cpu,
  ChevronRight,
  Shield,
  Activity,
  Milk,
} from "lucide-react";

export default function Design4Page() {
  const [activeYear, setActiveYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const data = projections[activeYear - 1];

  return (
    <div className="min-h-screen bg-[#031013] text-slate-100 font-sans antialiased selection:bg-teal-400 selection:text-black relative overflow-x-hidden">
      {/* Background Neon Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-600/15 blur-[140px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-teal-500/15 blur-[140px] pointer-events-none" />

      {/* Floating Glass Navigation */}
      <header className="sticky top-4 z-40 max-w-6xl mx-auto px-4">
        <nav className="rounded-2xl border border-emerald-500/20 bg-[#061b20]/60 backdrop-blur-xl px-6 py-3.5 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-300 flex items-center justify-center text-black font-extrabold shadow-[0_0_15px_rgba(45,212,191,0.5)]">
              <Zap className="w-4 h-4 fill-black" />
            </div>
            <div>
              <span className="font-bold tracking-tight text-white block text-sm">HIRA BIO-CAPITAL</span>
              <span className="text-[10px] text-teal-400 font-mono tracking-wider">GLASS // 04</span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              10Y MULTIPLIER: 44X HERD
            </div>
            <a
              href="#matrix"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-bold hover:brightness-110 transition shadow-[0_0_20px_rgba(45,212,191,0.4)]"
            >
              Start ₹2.00L Package
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-950/30 text-teal-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Cybernetic Livestock Compounding
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-teal-200 tracking-tight leading-[1.1]">
            Turn ₹2,00,000 Into An 88-Animal Dairy Dynasty.
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            The power of nature meets algorithmic precision. 1 Murrah Buffalo + 1 Female Calf multiplies via sex-sorted AI. Every 3 years, offspring mature into milk-bearing mothers, creating exponential wealth.
          </p>

          <div className="flex justify-center gap-4 pt-2">
            <a
              href="#matrix"
              className="px-6 py-3 rounded-xl bg-teal-400 text-black font-bold text-sm shadow-[0_0_25px_rgba(45,212,191,0.5)] hover:scale-105 transition transform"
            >
              Explore 10-Year Matrix
            </a>
            <Link
              href="/"
              className="px-6 py-3 rounded-xl border border-slate-700 bg-slate-900/60 backdrop-blur text-slate-300 text-sm hover:border-slate-500 transition"
            >
              Switch UI Theme
            </Link>
          </div>
        </div>

        {/* 3 Frosted Glass Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 backdrop-blur-xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4">
              <Milk className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">High-Yield A2 Lactation</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Founding Murrah buffalo averages 14-16 liters daily of 7.5%+ fat milk, fetching premium ₹70/L direct farm-gate pricing.
            </p>
            <div className="mt-4 text-[11px] font-mono text-teal-400">
              Year 1 Milk: ₹2.94 Lacs
            </div>
          </div>

          <div className="rounded-2xl border border-teal-500/20 bg-teal-950/20 backdrop-blur-xl p-6 relative overflow-hidden group hover:border-teal-500/50 transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Sex-Sorted Genetics</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Superior AI breeding with 95%+ probability of female calves. Eliminates male calf depreciation and accelerates herd size.
            </p>
            <div className="mt-4 text-[11px] font-mono text-teal-400">
              1 Calf Born Every 12 Mo.
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-950/20 backdrop-blur-xl p-6 relative overflow-hidden group hover:border-cyan-500/50 transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Compounding Triad</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Every calf matures in 36 months to become a milking adult and bear another calf, unlocking biological compounding.
            </p>
            <div className="mt-4 text-[11px] font-mono text-teal-400">
              Y10 Herd: 88 Animals
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Glass Matrix Section */}
      <section id="matrix" className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-3xl border border-emerald-500/30 bg-[#07191e]/80 backdrop-blur-2xl p-8 space-y-8 shadow-[0_0_50px_rgba(5,150,105,0.15)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-500/20 pb-6">
            <div>
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">
                Interactive Biological Telemetry
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                10-Year Glass Compounding Engine
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 bg-black/40 p-1.5 rounded-xl border border-emerald-500/20">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setActiveYear(p.year)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                    p.year === activeYear
                      ? "bg-teal-400 text-black font-bold shadow-[0_0_12px_rgba(45,212,191,0.6)]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Y{p.year}
                </button>
              ))}
            </div>
          </div>

          {/* Glowing Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-black/30 border border-emerald-500/20">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Herd Size</span>
              <div className="text-3xl font-extrabold text-white mt-1">{data.totalHerdSize}</div>
              <span className="text-[10px] font-mono text-teal-400">
                {data.matureBuffaloes} Milking / {data.growingHeifers + data.calvesBornThisYear} Calves
              </span>
            </div>

            <div className="p-4 rounded-xl bg-black/30 border border-emerald-500/20">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Daily Milk Output</span>
              <div className="text-3xl font-extrabold text-teal-300 mt-1">{data.dailyMilkProductionLiters}L</div>
              <span className="text-[10px] font-mono text-slate-400">
                {(data.annualMilkProductionLiters).toLocaleString()} L / year
              </span>
            </div>

            <div className="p-4 rounded-xl bg-black/30 border border-emerald-500/20">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Annual Milk Revenue</span>
              <div className="text-3xl font-extrabold text-emerald-400 mt-1">
                {formatINR(data.grossMilkingRevenueINR)}
              </div>
              <span className="text-[10px] font-mono text-slate-400">Gross @ ₹70/L</span>
            </div>

            <div className="p-4 rounded-xl bg-black/30 border border-emerald-500/20">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Total Cumulative Value</span>
              <div className="text-3xl font-extrabold text-cyan-300 mt-1">
                {formatINR(data.totalCumulativeWealthINR)}
              </div>
              <span className="text-[10px] font-mono text-slate-400">Net Profit + Asset</span>
            </div>
          </div>

          {/* Visual Bar Progression */}
          <div className="pt-4 space-y-2">
            <div className="flex justify-between text-xs font-mono text-slate-400">
              <span>GROWTH TRAJECTORY (TOTAL ANIMALS)</span>
              <span className="text-teal-400 font-bold">YEAR {data.year}: {data.milestoneDescription}</span>
            </div>
            <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-emerald-500/30">
              <div
                style={{ width: `${(data.totalHerdSize / 88) * 100}%` }}
                className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-300 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(45,212,191,0.8)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-4" />
    </div>
  );
}
