"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Milk,
  Scale,
  Award,
  DollarSign,
  TrendingUp,
  Lock,
  Layers,
  RefreshCw,
  Check,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function MarketplacePage6() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [unitCount, setUnitCount] = useState(1);
  const [animalAllocPerUnit, setAnimalAllocPerUnit] = useState(165000);
  const [insuranceReservePerUnit, setInsuranceReservePerUnit] = useState(12000);
  const [vetRfidReservePerUnit, setVetRfidReservePerUnit] = useState(8000);
  const [stanchionSetupPerUnit, setStanchionSetupPerUnit] = useState(15000);

  const pricePerUnit =
    animalAllocPerUnit + insuranceReservePerUnit + vetRfidReservePerUnit + stanchionSetupPerUnit; // ₹2,00,000 standard
  const totalEscrowPackage = pricePerUnit * unitCount;

  // Monthly yield metrics
  const dailyLitersPerUnit = 17.5;
  const totalDailyLiters = dailyLitersPerUnit * unitCount;
  const monthlyGrossMilk = totalDailyLiters * 30 * 80; // ₹80/L realization
  const estimatedNetProfit = monthlyGrossMilk * 0.35; // 35% profit margin
  const investorMonthlyPayout = Math.round(estimatedNetProfit * 0.30); // 30% profit share

  const handlePublish = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage("Fintech Escrow Package Configured & Listed on Marketplace!");
      setTimeout(() => setToastMessage(null), 4000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/20 via-white to-stone-50 text-slate-800 antialiased relative pb-24">
      <MarketplaceSwitcher currentMarketplaceId="page-6" />

      {/* TOASTER */}
      {toastMessage && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 bg-emerald-700 text-white px-6 py-3.5 rounded-2xl shadow-2xl border border-emerald-500 font-extrabold text-sm flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-200" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER BANNER */}
      <header className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-800 text-white p-6 sm:p-8 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-mono font-bold text-emerald-100">
              <Calculator className="w-3.5 h-3.5 text-amber-300" />
              <span>DESIGN 05 • FINTECH ESCROW PACKAGE CONFIGURATOR</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              ₹2,00,000 Standard Escrow Unit Allotment
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl">
              Precision statutory unit costing with escrow milestone locks, 1-year mortality replacement reserve, and guaranteed 30% monthly dividend cash-flow simulator.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20 text-right shrink-0">
            <span className="text-[10px] uppercase font-bold text-emerald-200 block">Unit Ticket Size</span>
            <span className="text-2xl sm:text-3xl font-black text-white">₹{pricePerUnit.toLocaleString("en-IN")}</span>
            <span className="text-[11px] text-amber-300 block font-bold">Standard 1-Unit Allotment</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        {/* FINANCIAL SUMMARY METRICS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-3xl border border-emerald-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-emerald-800 uppercase block">Total Escrow Value</span>
            <span className="text-3xl font-black text-emerald-950 mt-1 block">₹{totalEscrowPackage.toLocaleString("en-IN")}</span>
            <span className="text-[11px] text-slate-500 font-medium">Integer paise precision</span>
          </div>

          <div className="bg-white rounded-3xl border border-teal-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-teal-800 uppercase block">Daily Milk Yield</span>
            <span className="text-3xl font-black text-teal-950 mt-1 block">{totalDailyLiters} L/day</span>
            <span className="text-[11px] text-teal-700 font-bold">A2 Certified Murrah</span>
          </div>

          <div className="bg-white rounded-3xl border border-cyan-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-cyan-800 uppercase block">Monthly Milk Gross</span>
            <span className="text-3xl font-black text-cyan-950 mt-1 block">₹{monthlyGrossMilk.toLocaleString("en-IN")}</span>
            <span className="text-[11px] text-slate-500">@ ₹80 per Liter realization</span>
          </div>

          <div className="bg-white rounded-3xl border border-amber-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-amber-800 uppercase block">Est. 30% Dividend</span>
            <span className="text-3xl font-black text-amber-950 mt-1 block">₹{investorMonthlyPayout.toLocaleString("en-IN")}/mo</span>
            <span className="text-[11px] text-amber-700 font-bold">Direct wire to investor account</span>
          </div>
        </div>

        {/* PACKAGE LEDGER CONFIGURATION */}
        <div className="bg-white rounded-3xl border border-emerald-100 p-6 sm:p-8 shadow-sm space-y-8">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Lock className="w-5 h-5 text-emerald-600" />
                <span>Statutory Escrow Allocation per Unit (Standard ₹2,00,000)</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Every rupee is itemized to ring-fence investor capital from general farm operational overheads.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-slate-600">Unit Quantity:</label>
              <select
                value={unitCount}
                onChange={(e) => setUnitCount(Number(e.target.value))}
                className="px-3 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 text-xs font-black text-emerald-900 outline-none"
              >
                <option value={1}>1 Unit (₹2,00,000)</option>
                <option value={2}>2 Units (₹4,00,000)</option>
                <option value={4}>4 Units (₹8,00,000)</option>
                <option value={5}>5 Units (₹10,00,000)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                1. Bovine Purchase &amp; Mandi Allotment (₹)
              </label>
              <input
                type="number"
                value={animalAllocPerUnit}
                onChange={(e) => setAnimalAllocPerUnit(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              <span className="text-[10px] text-slate-400 mt-1 block">82.5% of unit ticket</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                2. 1-Year Livestock Insurance Reserve (₹)
              </label>
              <input
                type="number"
                value={insuranceReservePerUnit}
                onChange={(e) => setInsuranceReservePerUnit(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              <span className="text-[10px] text-slate-400 mt-1 block">Full mortality protection with farm deficit buffer</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                3. Veterinary Quarantine &amp; RFID Microchip (₹)
              </label>
              <input
                type="number"
                value={vetRfidReservePerUnit}
                onChange={(e) => setVetRfidReservePerUnit(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                4. Farm Barn Stanchion &amp; Bedding Allocation (₹)
              </label>
              <input
                type="number"
                value={stanchionSetupPerUnit}
                onChange={(e) => setStanchionSetupPerUnit(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
          </div>

          {/* TOTAL & PUBLISH BAR */}
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl border border-emerald-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                Total Escrow Allotment ({unitCount} Units)
              </span>
              <div className="text-3xl font-black text-slate-900 mt-1">
                ₹{totalEscrowPackage.toLocaleString("en-IN")}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Eligible for Section 10A IT Act Digital Bilateral Custody Agreement
              </p>
            </div>

            <button
              type="button"
              onClick={handlePublish}
              disabled={isSubmitting}
              className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-md shadow-emerald-600/30 transition flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Locking Escrow &amp; Publishing...</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Publish Escrow Package</span>
                </>
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
