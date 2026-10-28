"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GitBranch,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Milk,
  Scale,
  Award,
  TrendingUp,
  DollarSign,
  Layers,
  RefreshCw,
  Check,
  Baby,
  Calendar,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function MarketplacePage11() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "10-Year Murrah Herd Compounding Starter Pack (Mother + Gen-B Female Calf)",
    damTag: "HIRA_A1_OCT26_BUFF_MUR_50",
    calfTag: "HIRA_B1_OCT26_CALF_MUR_50",
    breedName: "Purebred Murrah Elite Stock",
    sexSortedAiAssurance: "95% Female Insemination Guarantee",
    damWeightKg: 605,
    calfWeightKg: 85,
    damDailyMilkingLiters: 18.0,
    peak10YearHerdCount: 41,
    basePackageCost: 160000,
    insuranceReserve1Yr: 8500,
    calfNurseryNutrientPack: 4500,
    rfidMicrochipsPair: 3500,
    stanchionAllocation: 3500,
    investorNetProfitShare: 30, // 30%
  });

  const totalFixedPackage =
    formData.basePackageCost +
    formData.insuranceReserve1Yr +
    formData.calfNurseryNutrientPack +
    formData.rfidMicrochipsPair +
    formData.stanchionAllocation;

  const handlePublish = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage("10-Year Compounding Package Successfully Onboarded to Marketplace!");
      setTimeout(() => setToastMessage(null), 4000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/20 via-white to-stone-50 text-slate-800 antialiased relative pb-24">
      <MarketplaceSwitcher currentMarketplaceId="page-11" />

      {/* TOASTER */}
      {toastMessage && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 bg-amber-800 text-white px-6 py-3.5 rounded-2xl shadow-2xl border border-amber-600 font-extrabold text-sm flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="w-5 h-5 text-amber-200" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER BANNER */}
      <header className="bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-700 text-white p-6 sm:p-8 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-mono font-bold text-amber-100">
              <GitBranch className="w-3.5 h-3.5 text-yellow-300" />
              <span>DESIGN 10 • 10-YEAR GENETIC COMPOUNDING MULTIPLIER</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Mother + Female Calf Compounding Multiplier Pack
            </h1>
            <p className="text-xs sm:text-sm text-amber-100 max-w-2xl">
              Model biological herd expansion: sex-sorted artificial insemination multiplies 1 starter pair into 41 adult buffaloes and calves over 10 years with zero investor overheads.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20 text-right shrink-0">
            <span className="text-[10px] uppercase font-bold text-amber-200 block">Package Ticket</span>
            <span className="text-2xl sm:text-3xl font-black text-white">₹{totalFixedPackage.toLocaleString("en-IN")}</span>
            <span className="text-[11px] text-yellow-300 block font-bold">1 Unit = 41 Head at 10 Yrs</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        {/* COMPOUNDING HIGHLIGHTS BAR */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-3xl border border-amber-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-amber-800 uppercase block">Starting Pair</span>
            <span className="text-2xl font-black text-amber-950 mt-1 block">1 Cow + 1 Calf</span>
            <span className="text-[11px] text-slate-500 font-medium">Gen-A Mother + Gen-B Heifer</span>
          </div>

          <div className="bg-white rounded-3xl border border-rose-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-rose-800 uppercase block">10-Yr Peak Herd</span>
            <span className="text-3xl font-black text-rose-950 mt-1 block">41 Head</span>
            <span className="text-[11px] text-rose-700 font-bold">Sex-Sorted AI Multiplication</span>
          </div>

          <div className="bg-white rounded-3xl border border-emerald-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-emerald-800 uppercase block">Lactation Capacity</span>
            <span className="text-2xl font-black text-emerald-950 mt-1 block">{formData.damDailyMilkingLiters} L/day</span>
            <span className="text-[11px] text-emerald-700 font-bold">First Lactation Mother</span>
          </div>

          <div className="bg-white rounded-3xl border border-indigo-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-indigo-800 uppercase block">Net Profit Share</span>
            <span className="text-3xl font-black text-indigo-950 mt-1 block">30% Monthly</span>
            <span className="text-[11px] text-indigo-700 font-bold">Continuous in Dry Periods</span>
          </div>
        </div>

        {/* COMPOUNDING FORM CONTAINER */}
        <div className="bg-white rounded-3xl border border-amber-100 p-6 sm:p-8 shadow-sm space-y-8">
          <div className="border-b border-stone-100 pb-3 flex items-center justify-between">
            <div>
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Baby className="w-5 h-5 text-amber-600" />
                <span>Pair Identification &amp; Heifer Specification</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Register both mother and female offspring RFID ear-tags for multi-generational tracking.
              </p>
            </div>
            <span className="text-xs font-mono font-bold bg-amber-50 text-amber-800 px-3 py-1 rounded-full border border-amber-200">
              {formData.sexSortedAiAssurance}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">Package Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Mother Ear-Tag ID</label>
              <input
                type="text"
                value={formData.damTag}
                onChange={(e) => setFormData({ ...formData, damTag: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-mono font-bold outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Female Calf Ear-Tag ID</label>
              <input
                type="text"
                value={formData.calfTag}
                onChange={(e) => setFormData({ ...formData, calfTag: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-mono font-bold outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Mother Weight (kg)</label>
              <input
                type="number"
                value={formData.damWeightKg}
                onChange={(e) => setFormData({ ...formData, damWeightKg: Number(e.target.value) })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Calf Live Weight (kg)</label>
              <input
                type="number"
                value={formData.calfWeightKg}
                onChange={(e) => setFormData({ ...formData, calfWeightKg: Number(e.target.value) })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold outline-none"
              />
            </div>
          </div>

          {/* ITEM VALUE FIXING */}
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-4">
            <h4 className="text-xs font-black text-amber-950 uppercase tracking-wide">
              Rate Fixing &amp; 10-Year Replacement Guarantee
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-amber-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Base Milch Pair</span>
                <span className="font-black text-slate-900 text-sm">₹{formData.basePackageCost.toLocaleString("en-IN")}</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-amber-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">1-Yr Insurance</span>
                <span className="font-black text-slate-900 text-sm">₹{formData.insuranceReserve1Yr.toLocaleString("en-IN")}</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-amber-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Calf Nursery Feed</span>
                <span className="font-black text-slate-900 text-sm">₹{formData.calfNurseryNutrientPack.toLocaleString("en-IN")}</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-amber-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Dual Microchips</span>
                <span className="font-black text-slate-900 text-sm">₹{formData.rfidMicrochipsPair.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-amber-800 block">Total Compounding Unit Package</span>
                <span className="text-3xl font-black text-slate-900">₹{totalFixedPackage.toLocaleString("en-IN")}</span>
              </div>

              <button
                type="button"
                onClick={handlePublish}
                disabled={isSubmitting}
                className="px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-black text-xs shadow-md shadow-amber-600/30 transition flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Enrolling Compounding Unit...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Publish Compounding Package</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
