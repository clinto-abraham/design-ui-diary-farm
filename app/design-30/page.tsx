"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Landmark,
  ShieldCheck,
  CheckCircle,
  FileCheck,
  Award,
} from "lucide-react";

export default function Design30Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased selection:bg-[#16a34a] selection:text-white">
      {/* GovTech Tiranga Top Ribbon */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#ea580c] via-white to-[#16a34a]" />
      <div className="bg-[#0f172a] text-slate-300 py-2 px-6 flex items-center justify-between text-xs font-medium">
        <span className="flex items-center gap-2">
          <Landmark className="w-4 h-4 text-[#ea580c]" />
          BHARAT DAIRY INFRASTRUCTURE ALLIANCE &bull; NABARD ALIGNED &bull; PSL ELIGIBLE
        </span>
        <span className="hidden sm:inline-block text-emerald-400">ISO 9001:2026 VERIFIED</span>
      </div>

      {/* Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0f172a] text-white flex items-center justify-center font-bold text-lg border-t-2 border-[#ea580c] border-b-2 border-[#16a34a]">
              भ
            </div>
            <div>
              <span className="font-bold text-lg text-slate-900 block tracking-tight">
                BHARAT KISAN SAMRIDDHI
              </span>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                National Dairy Compounding Portal // 30
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs font-medium">
            <Link href="/" className="text-slate-600 hover:text-slate-900 transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#bharat-schedule"
              className="px-5 py-2.5 rounded-lg bg-[#0f172a] text-white font-semibold hover:bg-slate-800 transition shadow"
            >
              Enroll ₹2,00,000 Allocation
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 space-y-6 shadow-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Government Priority Sector Lending (PSL) Asset Class
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
            National Livestock Security: <br />
            <span className="text-[#ea580c]">₹2 Lacs Capital Grows to 88 Animals.</span>
          </h1>

          <p className="text-slate-600 text-base leading-relaxed max-w-2xl">
            In full alignment with India’s National Dairy Development Board (NDDB) initiatives, Hira Dairy Farm deploys superior Murrah buffalo genetics and certified sex-sorted artificial insemination. A single entry package of 1 lactating mother and 1 female calf multiplies systematically over a 10-year horizon into an 88-animal institutional herd.
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-slate-100 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 uppercase text-[10px] block">Unit Allocation</span>
              <span className="text-xl font-bold text-slate-900 mt-1 block">₹2,00,000</span>
              <span className="text-slate-500 text-[10px]">1 Mother + 1 Calf</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 uppercase text-[10px] block">Decade Herd</span>
              <span className="text-xl font-bold text-emerald-600 mt-1 block">88 Animals</span>
              <span className="text-slate-500 text-[10px]">28 Milking Units</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 uppercase text-[10px] block">Year 10 Milk Sales</span>
              <span className="text-xl font-bold text-slate-900 mt-1 block">₹82.32 Lacs</span>
              <span className="text-slate-500 text-[10px]">Annual Milk Revenue</span>
            </div>
          </div>
        </div>

        {/* 10-Year Horizon */}
        <section id="bharat-schedule" className="rounded-2xl border border-slate-200 bg-white p-8 space-y-8 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#ea580c] font-bold">
                10-YEAR ACTUARIAL SCHEDULE
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-0.5">
                Inspect National Herd Progression
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 text-xs font-semibold">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 rounded transition ${
                    p.year === selectedYear
                      ? "bg-[#0f172a] text-white shadow"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  Yr {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 uppercase text-[10px] block">TOTAL LIVESTOCK</span>
              <span className="text-3xl font-bold text-slate-900 block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-emerald-600 text-[11px] font-semibold block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 uppercase text-[10px] block">DAILY MILK RUN</span>
              <span className="text-3xl font-bold text-slate-900 block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span suppressHydrationWarning className="text-slate-500 text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString('en-IN')} L / yr
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 uppercase text-[10px] block">ANNUAL MILK SALES</span>
              <span className="text-3xl font-bold text-emerald-600 block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-slate-500 text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 uppercase text-[10px] block">TOTAL CAPITAL WEALTH</span>
              <span className="text-3xl font-bold text-slate-900 block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-slate-500 text-[11px] block mt-1">Livestock Value + Net Profit</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-emerald-600 text-xs text-slate-700">
            <strong>National Milestone (Year {active.year}):</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-30" />
    </div>
  );
}
