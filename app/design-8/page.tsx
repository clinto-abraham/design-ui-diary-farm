"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Bell,
  TrendingUp,
  Milk,
  Sparkles,
  ChevronRight,
  Shield,
  Layers,
  Heart,
  Share2,
  CheckCircle,
  Smartphone,
} from "lucide-react";

export default function Design8Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-500 selection:text-white py-8 px-4 flex flex-col items-center justify-center">
      {/* Top Banner */}
      <div className="max-w-md w-full mb-4 flex items-center justify-between text-xs text-slate-400">
        <Link href="/" className="hover:text-white flex items-center gap-1">
          &larr; Return to Design Hub
        </Link>
        <div className="flex items-center gap-1.5 text-blue-400 font-medium">
          <Smartphone className="w-3.5 h-3.5" /> Mobile-First App Mockup // 08
        </div>
      </div>

      {/* Mobile Device Frame */}
      <div className="w-full max-w-md bg-slate-900 border-2 border-slate-700 rounded-[40px] shadow-2xl overflow-hidden flex flex-col relative pb-8">
        {/* Device Notch & Status Bar */}
        <div className="bg-slate-950 px-6 pt-3 pb-2 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>9:41 AM</span>
          <div className="w-20 h-4 bg-slate-900 rounded-full border border-slate-800" />
          <span>5G &bull; 100%</span>
        </div>

        {/* Mobile Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 backdrop-blur">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
              HF
            </div>
            <div>
              <div className="text-xs font-bold text-white">Hira Farm App</div>
              <div className="text-[10px] text-emerald-400">● 1 Active Herd Unit</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-blue-500" />
            </button>
          </div>
        </div>

        {/* Notification Toast */}
        <div className="mx-4 mt-3 p-3 rounded-2xl bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border border-blue-500/30 flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-300 shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-xs">
            <div className="font-semibold text-white">Biological Compounding Active</div>
            <div className="text-[10px] text-slate-300">₹2L package produces 88 animals by Year 10.</div>
          </div>
        </div>

        {/* Scrollable Content Inside Phone */}
        <div className="p-4 space-y-4 overflow-y-auto max-h-[640px]">
          {/* Main Herd Status Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-800/40 p-4 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Selected Simulation Horizon</span>
              <span className="text-blue-400 font-bold">Year {selectedYear} of 10</span>
            </div>

            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-3xl font-extrabold text-white">{active.totalHerdSize}</span>
                <span className="text-xs text-slate-400 ml-1">Total Animals</span>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-emerald-400">
                  {formatINR(active.grossMilkingRevenueINR)}
                </span>
                <div className="text-[10px] text-slate-400">Annual Milk Sales</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1 text-center">
              <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/50">
                <span className="text-[9px] text-slate-400 block uppercase">Adults</span>
                <span className="text-sm font-bold text-white">{active.matureBuffaloes}</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/50">
                <span className="text-[9px] text-slate-400 block uppercase">Heifers</span>
                <span className="text-sm font-bold text-white">{active.growingHeifers}</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/50">
                <span className="text-[9px] text-slate-400 block uppercase">Calves</span>
                <span className="text-sm font-bold text-emerald-400">+{active.calvesBornThisYear}</span>
              </div>
            </div>
          </div>

          {/* Interactive Year Selector Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-white">Select Year Horizon</span>
              <span className="text-[11px] text-blue-400">Tap year to preview</span>
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition ${
                    p.year === selectedYear
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/40"
                      : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  Y{p.year}
                </button>
              ))}
            </div>
          </div>

          {/* Package Details Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-800/40 p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-700">
                <Image
                  src="/Kid_Buffalo.jpg"
                  alt="Buffalo & Calf"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] text-blue-400 uppercase font-semibold">Starter Package</span>
                <h4 className="text-sm font-bold text-white">1 Murrah Buffalo + 1 Calf</h4>
                <p className="text-xs text-emerald-400 font-bold mt-0.5">₹2,00,000 All Inclusive</p>
              </div>
            </div>

            <div className="text-[11px] text-slate-300 space-y-1 pt-1 border-t border-slate-800">
              <div className="flex justify-between">
                <span>Daily Milk:</span>
                <strong className="text-white">14 Liters / day</strong>
              </div>
              <div className="flex justify-between">
                <span>Annual Calving:</span>
                <strong className="text-emerald-400">1 Female Calf / Year (AI)</strong>
              </div>
              <div className="flex justify-between">
                <span>Maturity Cycle:</span>
                <strong className="text-white">3 Years to Lactation</strong>
              </div>
            </div>
          </div>

          {/* Year Milestone Summary */}
          <div className="p-3 rounded-xl bg-slate-800/30 border border-slate-800 text-xs text-slate-300">
            <strong className="text-blue-400">Year {active.year} Insight:</strong> {active.milestoneDescription}
          </div>
        </div>

        {/* Sticky Mobile CTA Action */}
        <div className="p-4 bg-slate-950 border-t border-slate-800">
          <button className="w-full py-3 rounded-2xl bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-600/40 hover:bg-blue-500 transition">
            Book ₹2.00L Package Now
          </button>
        </div>
      </div>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-8" />
    </div>
  );
}
