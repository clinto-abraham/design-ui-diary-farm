"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  ArrowUpRight,
  TrendingUp,
  Milk,
  ShieldCheck,
  Calendar,
  Layers,
  ChevronRight,
  Award,
  ArrowRight,
} from "lucide-react";

export default function Design1Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const activeData = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#121212] font-sans antialiased selection:bg-[#121212] selection:text-white">
      {/* Top Swiss Ticker & Nav */}
      <header className="border-b border-neutral-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-xs tracking-wider uppercase font-mono">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-bold tracking-tight text-sm text-neutral-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-neutral-900 inline-block"></span>
              HIRA FARMS <span className="text-neutral-400 font-normal">/ 01 SWISS</span>
            </Link>
            <span className="hidden md:inline-block text-neutral-400 font-normal">ISO 9001:2026 CERTIFIED MURRAH HERD</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2 text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              A2 MILK: 14L/DAY AVG
            </div>
            <Link
              href="#calculator"
              className="px-3.5 py-1.5 border border-neutral-900 bg-neutral-900 text-white font-mono hover:bg-neutral-800 transition"
            >
              INVEST ₹2.00L
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-100 text-neutral-700 text-xs font-mono tracking-widest uppercase border border-neutral-200">
              <Award className="w-3.5 h-3.5" /> Institutional Herd Model
            </div>
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-neutral-950 leading-[1.08]">
              One Buffalo. One Calf.<br />
              <span className="font-bold">88 Animals in 10 Years.</span>
            </h1>
            <p className="text-neutral-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Hira Dairy Farm deploys precision artificial insemination with sex-sorted genetics. A single ₹2,00,000 capital commitment compounds biologically into an 88-animal dairy herd yielding ₹82+ Lacs annual milk turnover.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center font-mono text-xs">
              <a
                href="#projection"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-950 text-white hover:bg-neutral-800 transition"
              >
                Inspect 10-Year Trajectory <ArrowDown className="w-3.5 h-3.5" />
              </a>
              <div className="px-4 py-3 border border-neutral-200 bg-neutral-50 text-neutral-700">
                Initial CapEx: <span className="font-semibold text-neutral-950">₹2,00,000 INR</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative border border-neutral-200 bg-white p-3 shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <Image
                  src="/Murrah_buffalo.JPG"
                  alt="Murrah Buffalo"
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
              <div className="p-4 grid grid-cols-2 gap-3 text-xs font-mono border-t border-neutral-100 mt-2">
                <div>
                  <span className="text-neutral-400 block">FOUNDING UNIT</span>
                  <span className="font-bold text-neutral-900">1 Murrah + 1 Calf</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">AI PROTOCOL</span>
                  <span className="font-bold text-neutral-900">Sex-Sorted 95%+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Breakdown 3 Columns */}
      <section className="border-b border-neutral-200 bg-neutral-50/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
            Unit Economics / Entry Package
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-neutral-950 mb-10">
            The ₹2,00,000 Starter Herd Allocation
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-neutral-200 bg-white p-6 space-y-4">
              <div className="w-8 h-8 flex items-center justify-center bg-neutral-100 border border-neutral-200 font-mono text-xs font-bold">
                01
              </div>
              <h3 className="font-medium text-lg text-neutral-900">1x Lactating Murrah Buffalo</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Prime age (3.5 - 4 yrs), verified 1st/2nd lactation yielding 14-16 L/day of pure A2 high-fat milk. Vaccinated and quarantined.
              </p>
              <div className="text-xs font-mono text-neutral-500 pt-2 border-t border-neutral-100">
                Valuation: ₹1,50,000
              </div>
            </div>

            <div className="border border-neutral-200 bg-white p-6 space-y-4">
              <div className="w-8 h-8 flex items-center justify-center bg-neutral-100 border border-neutral-200 font-mono text-xs font-bold">
                02
              </div>
              <h3 className="font-medium text-lg text-neutral-900">1x Genetically Superior Female Calf</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Offspring of high-merit bull with documented lactation pedigree. Nurtured with scientific colostrum and calf-starter feed.
              </p>
              <div className="text-xs font-mono text-neutral-500 pt-2 border-t border-neutral-100">
                Valuation: ₹50,000
              </div>
            </div>

            <div className="border border-neutral-200 bg-white p-6 space-y-4">
              <div className="w-8 h-8 flex items-center justify-center bg-neutral-100 border border-neutral-200 font-mono text-xs font-bold">
                03
              </div>
              <h3 className="font-medium text-lg text-neutral-900">Artificial Insemination (AI) Cycle</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Every mature female undergoes artificial insemination annually. Offspring mature after 3 years to bear calves and yield milk.
              </p>
              <div className="text-xs font-mono text-neutral-500 pt-2 border-t border-neutral-100">
                Maturity: 36 Months Compounding
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10-Year Interactive Compounding Visualization */}
      <section id="projection" className="py-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Projection Analysis (2026 - 2036)
              </span>
              <h2 className="text-3xl font-light text-neutral-950 mt-1">
                Herd Size & Milking Revenue Trajectory
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-neutral-500">Selected Year:</span>
              <span className="px-2.5 py-1 bg-neutral-900 text-white font-bold">
                Year {selectedYear}
              </span>
            </div>
          </div>

          {/* Metric Spotlight */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 border border-neutral-200 bg-neutral-50">
              <div className="text-xs font-mono text-neutral-500 uppercase">Total Herd Size</div>
              <div className="text-3xl font-light text-neutral-950 mt-1">
                {activeData.totalHerdSize} <span className="text-xs font-mono text-neutral-400">animals</span>
              </div>
              <div className="text-[11px] font-mono text-neutral-500 mt-2">
                {activeData.matureBuffaloes} Milking | {activeData.growingHeifers + activeData.calvesBornThisYear} Calves
              </div>
            </div>

            <div className="p-5 border border-neutral-200 bg-neutral-50">
              <div className="text-xs font-mono text-neutral-500 uppercase">Annual Milk Production</div>
              <div className="text-3xl font-light text-neutral-950 mt-1">
                {(activeData.annualMilkProductionLiters).toLocaleString('en-IN')} <span suppressHydrationWarning className="text-xs font-mono text-neutral-400">Liters</span>
              </div>
              <div className="text-[11px] font-mono text-neutral-500 mt-2">
                {activeData.dailyMilkProductionLiters} Liters/day @ ₹70/L
              </div>
            </div>

            <div className="p-5 border border-neutral-200 bg-neutral-50">
              <div className="text-xs font-mono text-neutral-500 uppercase">Gross Milk Turnover</div>
              <div className="text-3xl font-light text-emerald-700 mt-1">
                {formatINR(activeData.grossMilkingRevenueINR)}
              </div>
              <div className="text-[11px] font-mono text-neutral-500 mt-2">
                Net Margin: {formatINR(activeData.netMilkingProfitINR)}
              </div>
            </div>

            <div className="p-5 border border-neutral-200 bg-neutral-50">
              <div className="text-xs font-mono text-neutral-500 uppercase">Total Cumulative Value</div>
              <div className="text-3xl font-light text-neutral-950 mt-1">
                {formatINR(activeData.totalCumulativeWealthINR)}
              </div>
              <div className="text-[11px] font-mono text-neutral-500 mt-2">
                Asset: {formatINR(activeData.herdAssetValueINR)}
              </div>
            </div>
          </div>

          {/* Interactive Chart (SVG Clean Bar & Line) */}
          <div className="border border-neutral-200 bg-white p-6 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
              <span>HERD EXPANSION (BARS: TOTAL ANIMALS, LINE: MILKING REVENUE)</span>
              <span>CLICK ANY YEAR TO INSPECT</span>
            </div>

            <div className="h-64 sm:h-80 w-full relative flex items-end justify-between gap-2 pt-10 pb-4">
              {projections.map((p) => {
                const heightPercent = Math.min(100, Math.max(10, (p.totalHerdSize / 88) * 100));
                const isSelected = p.year === selectedYear;

                return (
                  <button
                    key={p.year}
                    onClick={() => setSelectedYear(p.year)}
                    className="flex-1 h-full flex flex-col items-center justify-end group transition-all"
                  >
                    <div className="text-[10px] font-mono text-neutral-400 opacity-0 group-hover:opacity-100 mb-1 transition">
                      {p.totalHerdSize}
                    </div>
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className={`w-full max-w-[42px] transition-all rounded-t-sm ${
                        isSelected
                          ? "bg-neutral-950"
                          : "bg-neutral-200 group-hover:bg-neutral-400"
                      }`}
                    />
                    <div className={`mt-3 text-xs font-mono ${isSelected ? "font-bold text-neutral-950 border-b border-neutral-950" : "text-neutral-500"}`}>
                      Y{p.year}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-3 bg-neutral-100 text-xs font-mono text-neutral-700 flex items-center justify-between">
              <span>YEAR {selectedYear} MILESTONE: {activeData.milestoneDescription}</span>
              <span className="font-bold text-neutral-900">{formatINR(activeData.grossMilkingRevenueINR)} / yr</span>
            </div>
          </div>

          {/* Detailed Year by Year Compounding Ledger */}
          <div className="border border-neutral-200 bg-white overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-600">
                <tr>
                  <th className="p-3">YEAR</th>
                  <th className="p-3">MILKING ADULTS</th>
                  <th className="p-3">GROWING HEIFERS</th>
                  <th className="p-3">NEW CALVES</th>
                  <th className="p-3">TOTAL HERD</th>
                  <th className="p-3">ANNUAL MILK (L)</th>
                  <th className="p-3">GROSS REVENUE</th>
                  <th className="p-3">ASSET VALUE</th>
                  <th className="p-3">CUMULATIVE NET</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-800">
                {projections.map((p) => {
                  const isSelected = p.year === selectedYear;
                  return (
                    <tr
                      key={p.year}
                      onClick={() => setSelectedYear(p.year)}
                      className={`cursor-pointer transition hover:bg-neutral-50 ${
                        isSelected ? "bg-neutral-100 font-semibold text-neutral-950" : ""
                      }`}
                    >
                      <td className="p-3 font-bold">Year {p.year}</td>
                      <td className="p-3">{p.matureBuffaloes}</td>
                      <td className="p-3">{p.growingHeifers}</td>
                      <td className="p-3">+{p.calvesBornThisYear}</td>
                      <td className="p-3 font-bold">{p.totalHerdSize}</td>
                      <td suppressHydrationWarning className="p-3">{p.annualMilkProductionLiters.toLocaleString('en-IN')} L</td>
                      <td className="p-3 text-emerald-700 font-bold">{formatINR(p.grossMilkingRevenueINR)}</td>
                      <td className="p-3">{formatINR(p.herdAssetValueINR)}</td>
                      <td className="p-3">{formatINR(p.cumulativeNetProfitINR)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-neutral-200 text-xs font-mono text-neutral-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>HIRA DIARY FARM MANAGEMENT SYSTEM &bull; DESIGN 01 SWISS MINIMALIST</div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-neutral-900 transition">Design Catalog</Link>
            <Link href="/design-2" className="hover:text-neutral-900 transition">Next: Design 02 &rarr;</Link>
          </div>
        </div>
      </footer>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-1" />
    </div>
  );
}

function ArrowDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
  );
}
