"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Crown,
  Scroll,
  Shield,
  TrendingUp,
  Milk,
  Award,
  Sparkles,
  ArrowRight,
  Landmark,
} from "lucide-react";

export default function Design45Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const activeData = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fbf8f1] via-[#fffdf9] to-[#f5ede0] text-amber-950 font-serif pb-28 selection:bg-amber-200 selection:text-amber-900">
      {/* Royal Maharaja Header */}
      <header className="border-b-2 border-amber-300/80 bg-[#fffdf9]/90 backdrop-blur-md sticky top-0 z-40 shadow-xs font-sans">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center shadow-md shadow-amber-400/40 text-white">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <Link href="/" className="font-serif font-black text-xl text-amber-950 flex items-center gap-2">
                MYSORE RAJ-DURBAR <span className="font-sans text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold border border-amber-300">Design 45</span>
              </Link>
              <p className="text-[11px] text-amber-800 font-medium">Princely Sandalwood Treasury & Imperial Bovine Heritage</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/70 border border-amber-300 text-xs text-amber-900 font-bold">
              <Landmark className="w-4 h-4 text-amber-700" />
              <span>Royal Treasury Seal &bull; Sovereign Herd Charter</span>
            </div>
            <Link
              href="#calculator"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 to-yellow-600 text-white font-sans font-bold text-xs shadow-md shadow-amber-700/30 hover:scale-105 transition"
            >
              Imperial ₹2L Charter
            </Link>
          </div>
        </div>
      </header>

      {/* Royal Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-14 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-sans text-xs font-bold shadow-xs">
              <Crown className="w-4 h-4 text-amber-700" /> Princely Lineage of Pure Murrah Royalty
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-amber-950 leading-tight">
              A Sovereign Royal Decree:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-rose-700 to-yellow-700">
                1 Mother Compounding to an 88-Strong Royal Herd.
              </span>
            </h1>
            <p className="font-sans text-amber-900/80 text-base sm:text-lg leading-relaxed">
              In the royal tradition of the Mysore Maharajas, true wealth resides in fertile land and noble cattle. By vesting an imperial endowment of ₹2 Lacs for 1 champion mother buffalo and calf, sacred artificial insemination scales your holdings to <strong>88 noble animals</strong>, securing an annual milk treasury of <strong>₹82.32 Lacs</strong>.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 font-sans">
              <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-amber-700 font-bold block">Royal Charter</span>
                <span className="text-2xl font-black text-amber-950">₹2,00,000</span>
                <span className="text-xs text-amber-700 font-medium block">1 Mother + 1 Calf</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-amber-700 font-bold block">10-Yr Durbar Herd</span>
                <span className="text-2xl font-black text-amber-700">88 Animals</span>
                <span className="text-xs text-amber-700 font-medium block">48 Active Milkers</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-amber-700 font-bold block">Annual Milk Treasury</span>
                <span className="text-2xl font-black text-rose-800">₹82.32 Lacs</span>
                <span className="text-xs text-rose-700 font-medium block">Year 10 Cashflow</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="p-5 rounded-3xl bg-white border-2 border-amber-300 shadow-2xl space-y-4">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-amber-200">
                <Image
                  src="/Murrah_buffalo.JPG"
                  alt="Royal Murrah Buffalo"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#fffdfa]/95 backdrop-blur-xs flex items-center justify-between border border-amber-200 font-sans">
                  <div>
                    <span className="text-xs font-bold text-amber-950 block">Imperial Murrah Lineage</span>
                    <span className="text-[10px] text-amber-800 font-medium">14L / Day &bull; 8.3% Royal Butterfat</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100 px-2 py-1 rounded-lg">₹70 / Liter</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#fdfbf7] border border-amber-200 text-xs font-sans text-amber-950">
                <strong className="text-amber-800">Durbar Hereditary Law:</strong> Offspring mature within 36 months, entering the milking cohort and bearing their own noble progeny every year thereafter.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Royal 10-Year Treasury Ledger */}
      <section id="calculator" className="max-w-7xl mx-auto px-6 py-10 font-sans">
        <div className="p-8 rounded-3xl bg-white border border-amber-200 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-amber-100 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">
                Imperial Treasury Compounding Ledger
              </span>
              <h2 className="text-3xl font-serif font-black text-amber-950 mt-1">
                The 10-Year Royal Prosperity Horizon
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-amber-800">Imperial Regnal Year:</span>
              <div className="flex gap-1 bg-amber-50 p-1 rounded-xl border border-amber-200">
                {[1, 3, 5, 8, 10].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                      selectedYear === yr
                        ? "bg-amber-700 text-white shadow-xs"
                        : "text-amber-900 hover:bg-amber-200/50"
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
            <div className="flex justify-between text-xs font-mono font-bold text-amber-800">
              <span>Year 1 (₹2L Sovereign Starter)</span>
              <span className="text-sm bg-amber-100 text-amber-900 px-3 py-0.5 rounded-full font-serif font-bold">
                Viewing Regnal Year {selectedYear} / 10
              </span>
              <span>Year 10 (88 Regal Animals)</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
              className="w-full h-3 bg-amber-100 rounded-lg appearance-none cursor-pointer accent-amber-700"
            />
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-[#fdfbf7] border border-amber-200">
              <span className="text-xs font-bold uppercase text-amber-800 block mb-1">Durbar Herd Total</span>
              <span className="text-3xl font-black text-amber-950">{activeData.totalHerdSize} Animals</span>
              <span className="text-xs text-amber-700 block mt-1">
                {activeData.matureBuffaloes} milkers &bull; {activeData.growingHeifers + activeData.calvesBornThisYear} calves
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
              <span className="text-xs font-bold uppercase text-amber-800 block mb-1">Daily Pure Milk</span>
              <span className="text-3xl font-black text-amber-900">{activeData.dailyMilkProductionLiters} L/day</span>
              <span suppressHydrationWarning className="text-xs text-amber-700 block mt-1">
                {activeData.annualMilkProductionLiters.toLocaleString('en-IN')} L / year harvest
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200">
              <span className="text-xs font-bold uppercase text-rose-800 block mb-1">Annual Milk Revenue</span>
              <span className="text-3xl font-black text-rose-900">{formatINR(activeData.grossMilkingRevenueINR)}</span>
              <span className="text-xs text-rose-700 block mt-1">Sold at ₹70/L fixed sovereign rate</span>
            </div>
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <span className="text-xs font-bold uppercase text-emerald-800 block mb-1">Total Sovereign Wealth</span>
              <span className="text-3xl font-black text-emerald-950">{formatINR(activeData.totalCumulativeWealthINR)}</span>
              <span className="text-xs text-emerald-700 block mt-1">Net profit + asset valuation</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-amber-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-amber-100 text-amber-950 uppercase font-mono font-bold">
                <tr>
                  <th className="py-3 px-4">Regnal Year</th>
                  <th className="py-3 px-4">Milkers</th>
                  <th className="py-3 px-4">Heifers & Calves</th>
                  <th className="py-3 px-4">Herd Total</th>
                  <th className="py-3 px-4">Daily Yield</th>
                  <th className="py-3 px-4">Annual Revenue</th>
                  <th className="py-3 px-4">Herd Valuation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100 text-amber-950/80">
                {projections.map((p) => (
                  <tr
                    key={p.year}
                    className={`hover:bg-amber-50/60 transition ${
                      p.year === selectedYear ? "bg-amber-100/70 font-bold text-amber-950" : ""
                    }`}
                  >
                    <td className="py-3 px-4 font-mono font-bold text-amber-800">Year {p.year}</td>
                    <td className="py-3 px-4">{p.matureBuffaloes} adults</td>
                    <td className="py-3 px-4">{p.growingHeifers + p.calvesBornThisYear} calves</td>
                    <td className="py-3 px-4 font-bold">{p.totalHerdSize} animals</td>
                    <td className="py-3 px-4 text-amber-900 font-bold">{p.dailyMilkProductionLiters} L/day</td>
                    <td className="py-3 px-4 text-rose-800 font-bold">{formatINR(p.grossMilkingRevenueINR)}</td>
                    <td className="py-3 px-4 text-amber-900 font-bold">{formatINR(p.herdAssetValueINR)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <DesignSwitcher currentDesignId="design-45" />
    </div>
  );
}
