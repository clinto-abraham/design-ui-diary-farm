"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Leaf,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Milk,
  Scale,
  Award,
  Sprout,
  Sun,
  DollarSign,
  RefreshCw,
  Check,
  FileCheck,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function MarketplacePage8() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "100% Organic Pasture-Fed Murrah Dairy Unit (A2A2 Certified)",
    forageType: "CO-4 Super Napier + Green Lucerne + Sweet Corn Silage",
    pastureGrazingHours: 4.5,
    a2CertificateNumber: "LAB-NDDB-A2-2026-9041",
    zeroAntibioticWithdrawal: true,
    weightKg: 590,
    dailyMilkLiters: 18.0,
    fatPercentage: 8.4,
    d2cRealizationRate: 90, // ₹90 per Liter
    packageBaseCost: 165000,
    organicCertificationFee: 6500,
    insurancePremium: 8500,
    quarantineCare: 5000,
    investorProfitShare: 30,
  });

  const totalPackagePrice =
    formData.packageBaseCost +
    formData.organicCertificationFee +
    formData.insurancePremium +
    formData.quarantineCare;

  const handleSaveListing = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage("Organic A2 Certified Package Created & Published to Marketplace!");
      setTimeout(() => setToastMessage(null), 4000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/40 via-white to-stone-50 text-slate-800 antialiased relative pb-24">
      <MarketplaceSwitcher currentMarketplaceId="page-8" />

      {/* TOASTER */}
      {toastMessage && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 bg-emerald-800 text-white px-6 py-3.5 rounded-2xl shadow-2xl border border-emerald-600 font-extrabold text-sm flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-200" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER BANNER */}
      <header className="bg-gradient-to-r from-emerald-700 via-teal-700 to-green-800 text-white p-6 sm:p-8 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-mono font-bold text-emerald-100">
              <Leaf className="w-3.5 h-3.5 text-yellow-300" />
              <span>DESIGN 07 • ORGANIC PASTURE &amp; A2 PURITY CERTIFIED</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Organic Pasture &amp; A2 Dairy Lineage Onboarding
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl">
              Highlight organic pasture nutrition, zero-chemical green fodder intake, laboratory A2 Beta-Casein DNA certification, and high farmgate milk realization.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20 text-right shrink-0">
            <span className="text-[10px] uppercase font-bold text-emerald-200 block">Package Price</span>
            <span className="text-2xl sm:text-3xl font-black text-white">₹{totalPackagePrice.toLocaleString("en-IN")}</span>
            <span className="text-[11px] text-yellow-300 block font-bold">₹90/L D2C Realization</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        {/* CARDS METRICS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-3xl border border-emerald-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-emerald-800 uppercase block">Daily Grazing</span>
            <span className="text-3xl font-black text-emerald-950 mt-1 block">{formData.pastureGrazingHours} Hours</span>
            <span className="text-[11px] text-emerald-700 font-bold">Unconfined Paddock Rotation</span>
          </div>

          <div className="bg-white rounded-3xl border border-teal-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-teal-800 uppercase block">A2 Beta-Casein</span>
            <span className="text-xl font-black text-teal-950 mt-1 block">A2A2 Pure</span>
            <span className="text-[11px] text-slate-500 font-mono">Cert #{formData.a2CertificateNumber}</span>
          </div>

          <div className="bg-white rounded-3xl border border-green-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-green-800 uppercase block">Tested Milk Fat</span>
            <span className="text-3xl font-black text-green-950 mt-1 block">{formData.fatPercentage}%</span>
            <span className="text-[11px] text-green-700 font-bold">Rich Butterfat Content</span>
          </div>

          <div className="bg-white rounded-3xl border border-amber-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-amber-800 uppercase block">Direct Payout</span>
            <span className="text-3xl font-black text-amber-950 mt-1 block">30% Net</span>
            <span className="text-[11px] text-slate-500 font-medium">Overhead Protected</span>
          </div>
        </div>

        {/* FORM CONTAINER */}
        <div className="bg-white rounded-3xl border border-emerald-100 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-3">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <Sprout className="w-5 h-5 text-emerald-600" />
              <span>Organic Nutrition &amp; Lab Assay Specifications</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Input green fodder ration metrics and certified DNA laboratory assay documents.
            </p>
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
              <label className="block text-xs font-bold text-slate-700 mb-1">Organic Forage Cultivars</label>
              <input
                type="text"
                value={formData.forageType}
                onChange={(e) => setFormData({ ...formData, forageType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">A2 DNA Certificate Reference</label>
              <input
                type="text"
                value={formData.a2CertificateNumber}
                onChange={(e) => setFormData({ ...formData, a2CertificateNumber: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-mono font-bold outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Weight (kg)</label>
              <input
                type="number"
                value={formData.weightKg}
                onChange={(e) => setFormData({ ...formData, weightKg: Number(e.target.value) })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Daily Yield (Liters/Day)</label>
              <input
                type="number"
                step="0.5"
                value={formData.dailyMilkLiters}
                onChange={(e) => setFormData({ ...formData, dailyMilkLiters: Number(e.target.value) })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold outline-none"
              />
            </div>
          </div>

          {/* RATE FIXING SECTION */}
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-4">
            <h4 className="text-xs font-black text-emerald-950 uppercase tracking-wide">
              Organic Package Cost Breakdown
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="text-slate-500 block">Base Animal:</span>
                <span className="font-bold text-slate-900 text-sm">₹{formData.packageBaseCost.toLocaleString("en-IN")}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Organic Testing:</span>
                <span className="font-bold text-slate-900 text-sm">₹{formData.organicCertificationFee.toLocaleString("en-IN")}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Insurance &amp; Care:</span>
                <span className="font-bold text-slate-900 text-sm">₹{(formData.insurancePremium + formData.quarantineCare).toLocaleString("en-IN")}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-emerald-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-emerald-800 block">Total Organic Package Retail</span>
                <span className="text-2xl font-black text-emerald-950">₹{totalPackagePrice.toLocaleString("en-IN")}</span>
              </div>

              <button
                type="button"
                onClick={handleSaveListing}
                disabled={isSubmitting}
                className="px-6 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs shadow-md shadow-emerald-700/30 transition flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Publishing Certified Unit...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Publish Organic Package</span>
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
