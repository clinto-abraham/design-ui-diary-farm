"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Activity,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Milk,
  Scale,
  Award,
  Eye,
  Sliders,
  DollarSign,
  Heart,
  RefreshCw,
  Check,
  Info,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function MarketplacePage5() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "Grade A+ Dairy Conformation Murrah Package",
    breed: "Pure Murrah (CIRB Registered)",
    rfidTag: "HIRA_A1_OCT26_BUFF_MUR_47",
    weightKg: 615,
    bcs: 4.3,
    udderScore: 9.6,
    hornCurvatureScore: 9.8,
    barrelDepthScore: 9.2,
    feetLegsScore: 9.4,
    dailyMilkForecast: 19.0,
    fatRating: 8.2,
    baseRate: 165000,
    conformationBonus: 10000,
    insuranceCost: 9000,
    quarantineRfidCost: 6000,
    profitShareReturn: 30,
  });

  const overallDairyScore = (
    (formData.udderScore + formData.hornCurvatureScore + formData.barrelDepthScore + formData.feetLegsScore) / 4
  ).toFixed(1);

  const totalPackagePrice =
    formData.baseRate + formData.conformationBonus + formData.insuranceCost + formData.quarantineRfidCost;

  const handlePublish = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage("Anatomy Conformation Package Scored & Listed Successfully!");
      setTimeout(() => setToastMessage(null), 4000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/30 via-white to-stone-50 text-slate-800 antialiased relative pb-24">
      <MarketplaceSwitcher currentMarketplaceId="page-5" />

      {/* TOASTER */}
      {toastMessage && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 bg-rose-700 text-white px-6 py-3.5 rounded-2xl shadow-2xl border border-rose-500 font-extrabold text-sm flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="w-5 h-5 text-rose-200" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER BANNER */}
      <header className="bg-gradient-to-r from-rose-600 via-pink-600 to-indigo-700 text-white p-6 sm:p-8 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-mono font-bold text-rose-100">
              <Activity className="w-3.5 h-3.5 text-amber-300" />
              <span>DESIGN 04 • ANATOMY MAPPER &amp; CONFORMATION SCORER</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Bovine Dairy Conformation &amp; Anatomy Scorer
            </h1>
            <p className="text-xs sm:text-sm text-rose-100 max-w-2xl">
              Score physical udder symmetry, deep barrel capacity, tightly curled horns, and body condition score (BCS) to fix premium marketplace rate tiers.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20 text-right shrink-0">
            <span className="text-[10px] uppercase font-bold text-rose-200 block">Overall Dairy Score</span>
            <span className="text-2xl sm:text-3xl font-black text-white">{overallDairyScore} / 10.0</span>
            <span className="text-[11px] text-amber-300 block font-bold">Grade A+ Champion Tier</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        {/* INTERACTIVE ANATOMY SCORING DASHBOARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 7 COLS: HOTSPOT SCORING & BODY SLIDERS */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-rose-100 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-rose-600" />
                <span>Physical Conformation Assessment</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Adjust veterinary morphological scores based on physical examination.
              </p>
            </div>

            {/* Udder Conformation */}
            <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-800">1. Udder Conformation &amp; Teat Placement</span>
                <span className="font-mono font-black text-rose-600 text-sm">{formData.udderScore} / 10.0</span>
              </div>
              <input
                type="range"
                min="6.0"
                max="10.0"
                step="0.1"
                value={formData.udderScore}
                onChange={(e) => setFormData({ ...formData, udderScore: Number(e.target.value) })}
                className="w-full accent-rose-600 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500">Wide fore-udder attachment, squarely placed cylindrical teats.</p>
            </div>

            {/* Horn Curvature */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-800">2. Murrah Tightly Curled Horns</span>
                <span className="font-mono font-black text-slate-900 text-sm">{formData.hornCurvatureScore} / 10.0</span>
              </div>
              <input
                type="range"
                min="6.0"
                max="10.0"
                step="0.1"
                value={formData.hornCurvatureScore}
                onChange={(e) => setFormData({ ...formData, hornCurvatureScore: Number(e.target.value) })}
                className="w-full accent-slate-800 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500">True-to-breed tight spiral horns, fine muzzle, alert feminine head.</p>
            </div>

            {/* Barrel Depth */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-800">3. Barrel Depth &amp; Feed Capacity</span>
                <span className="font-mono font-black text-slate-900 text-sm">{formData.barrelDepthScore} / 10.0</span>
              </div>
              <input
                type="range"
                min="6.0"
                max="10.0"
                step="0.1"
                value={formData.barrelDepthScore}
                onChange={(e) => setFormData({ ...formData, barrelDepthScore: Number(e.target.value) })}
                className="w-full accent-slate-800 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500">Well-sprung ribs, capacious rumen capacity for maximum forage intake.</p>
            </div>

            {/* Feet & Legs */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-800">4. Feet &amp; Legs Mobility</span>
                <span className="font-mono font-black text-slate-900 text-sm">{formData.feetLegsScore} / 10.0</span>
              </div>
              <input
                type="range"
                min="6.0"
                max="10.0"
                step="0.1"
                value={formData.feetLegsScore}
                onChange={(e) => setFormData({ ...formData, feetLegsScore: Number(e.target.value) })}
                className="w-full accent-slate-800 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500">Strong pasterns, deep heel, straight track for longevity.</p>
            </div>

            {/* Body Weight & BCS */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Scale Weight (kg)</label>
                <input
                  type="number"
                  value={formData.weightKg}
                  onChange={(e) => setFormData({ ...formData, weightKg: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 font-bold text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Body Condition Score (BCS)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.bcs}
                  onChange={(e) => setFormData({ ...formData, bcs: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 font-bold text-xs"
                />
              </div>
            </div>
          </div>

          {/* RIGHT 5 COLS: YIELD FORECAST & RATE FIXING */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-rose-100 p-6 shadow-sm space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block">Yield Forecast</span>
                <h3 className="text-xl font-black text-slate-900 mt-0.5">Conformation-Indexed Capacity</h3>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200 space-y-2">
                <span className="text-xs font-bold text-rose-900 block">Forecasted Peak Lactation Yield</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-rose-950">{formData.dailyMilkForecast}</span>
                  <span className="text-xs font-bold text-rose-700">Liters / Day</span>
                </div>
                <p className="text-[11px] text-rose-800">
                  Driven by {formData.udderScore}/10.0 udder capacity and deep rib barrel index. Tested Fat: {formData.fatRating}%.
                </p>
              </div>

              {/* Rate Fixing Breakdown */}
              <div className="space-y-3 pt-2 text-xs">
                <h4 className="font-bold text-slate-800 uppercase tracking-wide">Itemized Rate Fixing</h4>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Base Murrah Acquisition:</span>
                  <span className="font-bold">₹{formData.baseRate.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">A+ Conformation Premium:</span>
                  <span className="font-bold text-rose-600">+₹{formData.conformationBonus.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">1-Year National Insurance:</span>
                  <span className="font-bold">+₹{formData.insuranceCost.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Quarantine &amp; RFID Admin:</span>
                  <span className="font-bold">+₹{formData.quarantineRfidCost.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between pt-2 text-sm font-black text-slate-900">
                  <span>Total Package Value:</span>
                  <span className="text-emerald-700">₹{totalPackagePrice.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handlePublish}
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs shadow-md shadow-rose-600/30 transition flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Scoring &amp; Publishing...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Publish Scored Package</span>
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
