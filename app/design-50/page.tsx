"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Sparkles,
  Trophy,
  PartyPopper,
  TrendingUp,
  Milk,
  Award,
  ArrowRight,
  Sun,
  ShieldCheck,
  CheckCircle2,
  Heart,
} from "lucide-react";

export default function Design50Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const activeData = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100/70 via-yellow-50/60 to-white text-slate-900 font-sans pb-28 selection:bg-amber-300 selection:text-amber-950">
      {/* Golden Jubilee Header */}
      <header className="border-b-4 border-amber-400 bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-400/50 text-slate-950 font-black">
              <Trophy className="w-7 h-7 text-amber-950 animate-bounce" />
            </div>
            <div>
              <Link href="/" className="font-black text-xl text-slate-900 flex items-center gap-2 tracking-tight">
                MAHA BILONA JUBILEE <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-mono font-black border border-amber-500">Design 50 &bull; Grand Finale</span>
              </Link>
              <p className="text-[11px] text-amber-800 font-bold uppercase tracking-wider">The 50th Design &bull; ₹3.25 Crore Rural Wealth Celebration</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-200/70 border border-amber-400 text-xs text-amber-950 font-extrabold">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>₹2L Seed &rarr; 88 Bovine Champions &bull; ₹82.32L / Year</span>
            </div>
            <Link
              href="#calculator"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 text-slate-950 font-black text-xs shadow-lg shadow-amber-400/40 hover:scale-105 transition"
            >
              Invest ₹2.00L Now
            </Link>
          </div>
        </div>
      </header>

      {/* Jubilee Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-14 pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-200 border-2 border-amber-400 text-amber-950 text-xs font-black shadow-xs">
              <PartyPopper className="w-4 h-4 text-orange-600" /> Milestone 50: The Ultimate Indian Dairy Compounding Synthesis
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight">
              From 1 Mother & Calf to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600">
                88 Animals & ₹3.25+ Crore
              </span>{" "}
              Cumulative Wealth.
            </h1>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
              Welcome to the celebratory zenith of Hira Dairy Farm! By entering with a single ₹2 Lacs package (1 pure Murrah mother + 1 female calf), sex-sorted artificial insemination guarantees compounding female births. By Year 10, your herd has blossomed into <strong>88 high-producing champions</strong> generating <strong>₹82.32 Lacs annual milk turnover</strong>.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-white border-2 border-amber-300 shadow-md">
                <span className="text-[10px] font-mono font-black uppercase text-amber-800 block">Single Package</span>
                <span className="text-2xl font-black text-slate-900">₹2,00,000</span>
                <span className="text-xs text-amber-700 font-bold block">1 Mother + 1 Calf</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border-2 border-orange-300 shadow-md">
                <span className="text-[10px] font-mono font-black uppercase text-orange-800 block">10-Yr Living Herd</span>
                <span className="text-2xl font-black text-orange-600">88 Head</span>
                <span className="text-xs text-orange-600 font-bold block">48 Active Milkers</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border-2 border-emerald-300 shadow-md">
                <span className="text-[10px] font-mono font-black uppercase text-emerald-800 block">Year 10 Milk Sales</span>
                <span className="text-2xl font-black text-emerald-700">₹82.32 Lacs</span>
                <span className="text-xs text-emerald-600 font-bold block">Yearly Gross Cashflow</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="p-6 rounded-3xl bg-white border-4 border-amber-400 shadow-2xl space-y-4">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border-2 border-amber-300">
                <Image
                  src="/Murrah_buffalo.JPG"
                  alt="Murrah Buffalo Jubilee"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black shadow-md flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-slate-950" /> Crown Champion Breed
                </div>
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-xs flex items-center justify-between border border-amber-200">
                  <div>
                    <span className="text-xs font-black text-slate-900 block">Purebred Rohtak Murrah</span>
                    <span className="text-[10px] text-amber-800 font-bold">14 Liters / Day &bull; 8.4% Pure Butterfat</span>
                  </div>
                  <span className="text-xs font-mono font-black text-slate-950 bg-amber-400 px-2.5 py-1 rounded-lg">₹70 / Liter</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-300 text-xs text-slate-800 font-medium">
                <strong className="text-amber-900">Grand Compounding Proof:</strong> Mothers calve every year. Female calves mature in 36 months and join the lactating line. In 10 years, living herd valuation plus cumulative milk sales exceeds <strong>₹3.25 Crore</strong>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Jubilee Compounding */}
      <section id="calculator" className="max-w-7xl mx-auto px-6 py-10">
        <div className="p-8 rounded-3xl bg-white border-3 border-amber-300 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-amber-200 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-black">
                Grand Jubilee 10-Year Master Ledger
              </span>
              <h2 className="text-3xl font-black text-slate-900 mt-1">
                The Complete 10-Year Compounding Projection
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700">Jubilee Year:</span>
              <div className="flex gap-1 bg-amber-100 p-1 rounded-xl border border-amber-300">
                {[1, 3, 5, 8, 10].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`px-3 py-1 rounded-lg text-xs font-black transition ${
                      selectedYear === yr
                        ? "bg-amber-500 text-slate-950 shadow-xs"
                        : "text-amber-900 hover:bg-amber-200"
                    }`}
                  >
                    Yr {yr}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono font-black text-amber-900">
              <span>Year 1 (₹2L Starter Seed)</span>
              <span className="text-sm bg-amber-200 text-amber-950 px-3.5 py-0.5 rounded-full font-black">
                Celebrating Year {selectedYear} / 10
              </span>
              <span>Year 10 (88 Bovine Champions)</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
              className="w-full h-3 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-300">
              <span className="text-xs font-bold uppercase text-amber-800 block mb-1">Total Herd Population</span>
              <span className="text-3xl font-black text-slate-900">{activeData.totalHerdSize} Head</span>
              <span className="text-xs text-amber-700 block mt-1">
                {activeData.matureBuffaloes} milkers &bull; {activeData.growingHeifers + activeData.calvesBornThisYear} calves
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-yellow-50 border-2 border-yellow-300">
              <span className="text-xs font-bold uppercase text-yellow-800 block mb-1">Daily Pure Milk</span>
              <span className="text-3xl font-black text-yellow-950">{activeData.dailyMilkProductionLiters} Liters</span>
              <span suppressHydrationWarning className="text-xs text-yellow-700 block mt-1">
                {(activeData.dailyMilkProductionLiters * 70).toLocaleString('en-IN')} INR daily cashflow
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-orange-50 border-2 border-orange-300">
              <span className="text-xs font-bold uppercase text-orange-800 block mb-1">Annual Milk Revenue</span>
              <span className="text-3xl font-black text-orange-950">{formatINR(activeData.grossMilkingRevenueINR)}</span>
              <span className="text-xs text-orange-700 block mt-1">300 lactation days @ ₹70/L</span>
            </div>
            <div className="p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-300">
              <span className="text-xs font-bold uppercase text-emerald-800 block mb-1">Cumulative Total Wealth</span>
              <span className="text-3xl font-black text-emerald-950">{formatINR(activeData.totalCumulativeWealthINR)}</span>
              <span className="text-xs text-emerald-700 block mt-1">Net profit + herd asset valuation</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-amber-300">
            <table className="w-full text-left text-xs">
              <thead className="bg-amber-200 text-amber-950 uppercase font-mono font-black">
                <tr>
                  <th className="py-3.5 px-4">Jubilee Year</th>
                  <th className="py-3.5 px-4">Milking Mothers</th>
                  <th className="py-3.5 px-4">Calves & Heifers</th>
                  <th className="py-3.5 px-4">Total Herd</th>
                  <th className="py-3.5 px-4">Daily Yield</th>
                  <th className="py-3.5 px-4">Annual Revenue</th>
                  <th className="py-3.5 px-4">Herd Valuation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100 text-slate-800 font-medium">
                {projections.map((p) => (
                  <tr
                    key={p.year}
                    className={`hover:bg-amber-100/60 transition ${
                      p.year === selectedYear ? "bg-amber-200/70 font-black text-slate-950" : ""
                    }`}
                  >
                    <td className="py-3.5 px-4 font-mono font-black text-amber-900">Year {p.year}</td>
                    <td className="py-3.5 px-4">{p.matureBuffaloes} adults</td>
                    <td className="py-3.5 px-4">{p.growingHeifers + p.calvesBornThisYear} calves</td>
                    <td className="py-3.5 px-4 font-black">{p.totalHerdSize} animals</td>
                    <td className="py-3.5 px-4 text-orange-900 font-black">{p.dailyMilkProductionLiters} L/day</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-black">{formatINR(p.grossMilkingRevenueINR)}</td>
                    <td className="py-3.5 px-4 text-amber-900 font-black">{formatINR(p.herdAssetValueINR)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Side Arrows and Switcher */}
      <DesignSwitcher currentDesignId="design-50" />
    </div>
  );
}
