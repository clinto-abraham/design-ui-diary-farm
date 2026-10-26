"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  SunMedium,
  Sprout,
  Cpu,
  TrendingUp,
  Milk,
  Award,
  Sparkles,
  ArrowRight,
  Gauge,
  Radio,
} from "lucide-react";

export default function Design48Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const activeData = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-50/60 via-emerald-50/30 to-white text-slate-800 font-sans pb-28 selection:bg-lime-200 selection:text-lime-900">
      {/* Solarium Header */}
      <header className="border-b border-lime-200 bg-white/85 backdrop-blur-md sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-lime-500 via-emerald-400 to-sky-400 flex items-center justify-center shadow-md shadow-lime-300/40 text-white">
              <SunMedium className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
                SOLARIUM AGRI-DOME <span className="text-xs px-2 py-0.5 rounded-full bg-lime-100 text-lime-800 font-mono font-medium border border-lime-300">Design 48</span>
              </Link>
              <p className="text-[11px] text-lime-700 font-medium">Vertical Hydroponic Fodder & Glass-Atrium Bovine Telemetry</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-50 border border-lime-300 text-xs text-lime-900 font-bold">
              <Radio className="w-3.5 h-3.5 text-lime-600 animate-pulse" />
              <span>Raga Kalyani Audio Stimulation: +1.2 L/Day</span>
            </div>
            <Link
              href="#calculator"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-lime-600 to-emerald-600 text-white font-bold text-xs shadow-md shadow-lime-400/30 hover:scale-105 transition"
            >
              Seed ₹2 Lacs
            </Link>
          </div>
        </div>
      </header>

      {/* Solarium Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-100 border border-lime-300 text-lime-900 text-xs font-bold">
              <Sprout className="w-4 h-4 text-lime-600" /> Automated 6-Day Sprouted Barley Nutrition
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight">
              Glass-Dome Daylight. Sprouted Fodder.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-emerald-600 to-cyan-600">
                Biological Scale from 1 to 88.
              </span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Inside our climate-controlled solarium, buffalos feed on freshly sprouted hydroponic green fodder every 4 hours, boosting digestion and milk fat to 8.4%. Your ₹2 Lacs single-pair investment expands seamlessly under computer-controlled daylight into <strong>88 high-yield animals</strong> generating <strong>₹82.32 Lacs</strong> annually.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-white border border-lime-200 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-lime-700 font-bold block">Solarium Seed</span>
                <span className="text-2xl font-black text-slate-900">₹2,00,000</span>
                <span className="text-xs text-lime-600 font-medium block">1 Mother + 1 Calf</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-emerald-700 font-bold block">10-Yr Dome Herd</span>
                <span className="text-2xl font-black text-emerald-700">88 Head</span>
                <span className="text-xs text-emerald-600 font-medium block">48 Active Milkers</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-cyan-200 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-cyan-700 font-bold block">Yr 10 Revenue</span>
                <span className="text-2xl font-black text-cyan-700">₹82.32 L</span>
                <span className="text-xs text-cyan-600 font-medium block">Hydroponic Milk</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="p-5 rounded-3xl bg-white border border-lime-200 shadow-xl space-y-4">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-lime-100">
                <Image
                  src="/Murrah_buffalo.JPG"
                  alt="Solarium Buffalo"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lime-950/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-xs flex items-center justify-between border border-lime-200">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Solarium Murrah Alpha</span>
                    <span className="text-[10px] text-lime-700 font-medium">14L / Day &bull; Automated Misting</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-lg">₹70 / Liter</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-lime-50/80 border border-lime-200 text-xs text-lime-950">
                <strong>Hydroponic Efficiency:</strong> 1 kg barley grain transforms into 7 kg fresh nutrient-packed green fodder using 95% less water than traditional pasture farming.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Solarium Compounding */}
      <section id="calculator" className="max-w-7xl mx-auto px-6 py-10">
        <div className="p-8 rounded-3xl bg-white border border-lime-200 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-lime-100 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-lime-700 font-bold">
                Solarium Bio-Production Ledger
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                The 10-Year Glass-Atrium Scaling Model
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">Production Cycle:</span>
              <div className="flex gap-1 bg-lime-50 p-1 rounded-xl border border-lime-200">
                {[1, 3, 5, 8, 10].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                      selectedYear === yr
                        ? "bg-lime-600 text-white shadow-xs"
                        : "text-lime-800 hover:bg-lime-200/50"
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
            <div className="flex justify-between text-xs font-mono font-bold text-lime-800">
              <span>Year 1 (Initial ₹2L Seed)</span>
              <span className="text-sm bg-lime-100 text-lime-900 px-3 py-0.5 rounded-full">
                Viewing Year {selectedYear} / 10
              </span>
              <span>Year 10 (88 Dome Champions)</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
              className="w-full h-3 bg-lime-100 rounded-lg appearance-none cursor-pointer accent-lime-600"
            />
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-lime-50/70 border border-lime-200">
              <span className="text-xs font-bold uppercase text-lime-800 block mb-1">Dome Herd Population</span>
              <span className="text-3xl font-black text-slate-900">{activeData.totalHerdSize} Animals</span>
              <span className="text-xs text-lime-700 block mt-1">
                {activeData.matureBuffaloes} milkers &bull; {activeData.growingHeifers + activeData.calvesBornThisYear} calves
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-cyan-50/70 border border-cyan-200">
              <span className="text-xs font-bold uppercase text-cyan-800 block mb-1">Daily Pure Output</span>
              <span className="text-3xl font-black text-cyan-950">{activeData.dailyMilkProductionLiters} Liters</span>
              <span className="text-xs text-cyan-700 block mt-1">
                {(activeData.dailyMilkProductionLiters * 70).toLocaleString()} INR daily cashflow
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <span className="text-xs font-bold uppercase text-emerald-800 block mb-1">Annual Milk Revenue</span>
              <span className="text-3xl font-black text-emerald-950">{formatINR(activeData.grossMilkingRevenueINR)}</span>
              <span className="text-xs text-emerald-700 block mt-1">Over 300 annual lactation days</span>
            </div>
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
              <span className="text-xs font-bold uppercase text-amber-800 block mb-1">Total Cumulative Wealth</span>
              <span className="text-3xl font-black text-amber-950">{formatINR(activeData.totalCumulativeWealthINR)}</span>
              <span className="text-xs text-amber-700 block mt-1">Cash profits + living herd equity</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-lime-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-lime-100 text-lime-950 uppercase font-mono font-bold">
                <tr>
                  <th className="py-3 px-4">Dome Year</th>
                  <th className="py-3 px-4">Milkers</th>
                  <th className="py-3 px-4">Calves & Heifers</th>
                  <th className="py-3 px-4">Total Animals</th>
                  <th className="py-3 px-4">Daily Yield</th>
                  <th className="py-3 px-4">Annual Revenue</th>
                  <th className="py-3 px-4">Herd Equity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-lime-100 text-slate-700">
                {projections.map((p) => (
                  <tr
                    key={p.year}
                    className={`hover:bg-lime-50/50 transition ${
                      p.year === selectedYear ? "bg-lime-100/60 font-bold text-slate-900" : ""
                    }`}
                  >
                    <td className="py-3 px-4 font-mono font-bold text-lime-800">Year {p.year}</td>
                    <td className="py-3 px-4">{p.matureBuffaloes} adults</td>
                    <td className="py-3 px-4">{p.growingHeifers + p.calvesBornThisYear} calves</td>
                    <td className="py-3 px-4 font-bold">{p.totalHerdSize} animals</td>
                    <td className="py-3 px-4 text-cyan-800 font-bold">{p.dailyMilkProductionLiters} L/day</td>
                    <td className="py-3 px-4 text-emerald-700 font-bold">{formatINR(p.grossMilkingRevenueINR)}</td>
                    <td className="py-3 px-4 text-lime-900 font-bold">{formatINR(p.herdAssetValueINR)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <DesignSwitcher currentDesignId="design-48" />
    </div>
  );
}
