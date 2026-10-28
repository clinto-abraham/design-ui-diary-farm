"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Dna,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Milk,
  Scale,
  Award,
  Layers,
  Tag,
  Check,
  Upload,
  RefreshCw,
  Sliders,
  Flame,
  Activity,
  FileCheck2,
  DollarSign,
  Binary,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function MarketplacePage3() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "Genomic Murrah Pedigree Lineage Package #HF-GEN-2026",
    breed: "Murrah Elite Lineage (NDRI / CIRB Certified)",
    sireStrawId: "CIRB_MUR_CHAMP_902 (Progeny Tested)",
    sireDamYield: "4,850 Liters (Standard 305-day Lactation)",
    damEarTag: "HAR_MUR_7718 (Mother Lactation: 19.8 L/day)",
    rfidTag: "HIRA_A1_OCT26_BUFF_MUR_42",
    rfidChip: "982-000412896",
    liveWeightKg: 595,
    bcsIndex: 4.3,
    milkingCapacityLiters: 18.2,
    testedFat: 8.2,
    testedSnf: 9.4,
    proteinPercent: 3.85,
    a2BetaCasein: "A2A2 Certified (Homozygous Pure)",
    packageQuantity: 1, // 1 Cow + 1 Gen-B Female Calf
    baseProcurementRate: 160000,
    insurancePremium1Yr: 8800,
    vetScreeningRfid: 3500,
    quarantineCare: 3500,
    stanchionAllocation: 4200,
    investorDividendRate: 30, // 30% Net Profit Share
  });

  const totalFixedPrice =
    formData.baseProcurementRate +
    formData.insurancePremium1Yr +
    formData.vetScreeningRfid +
    formData.quarantineCare +
    formData.stanchionAllocation;

  const handleGenerateRfid = () => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    setFormData((prev) => ({
      ...prev,
      rfidTag: `HIRA_A1_OCT26_BUFF_MUR_${randomSuffix.toString().slice(0, 2)}`,
      rfidChip: `982-00041${randomSuffix}`,
    }));
  };

  const handleSaveListing = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage("Genomic Pedigree Package created and verified on Marketplace!");
      setTimeout(() => setToastMessage(null), 4000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-indigo-50/25 to-slate-50 text-slate-800 antialiased relative pb-24">
      <MarketplaceSwitcher currentMarketplaceId="page-3" />

      {/* TOASTER */}
      {toastMessage && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 bg-indigo-700 text-white px-6 py-3.5 rounded-2xl shadow-2xl border border-indigo-500 font-extrabold text-sm flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="w-5 h-5 text-indigo-200" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER BANNER */}
      <header className="bg-gradient-to-r from-indigo-700 via-purple-700 to-sky-700 text-white p-6 sm:p-8 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-mono font-bold text-indigo-100">
              <Dna className="w-3.5 h-3.5 text-amber-300" />
              <span>DESIGN 02 • BOVINE BIOMETRIC &amp; PEDIGREE DOSSIER</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Genomic Lineage &amp; Certified Pedigree Onboarding
            </h1>
            <p className="text-xs sm:text-sm text-indigo-100 max-w-2xl">
              Catalog elite dairy buffaloes by sire artificial insemination straw, dam milk records, A2A2 protein genotyping, and digital RFID microchip assignment.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20 text-right shrink-0">
            <span className="text-[10px] uppercase font-bold text-indigo-200 block">Package Valuation</span>
            <span className="text-2xl sm:text-3xl font-black text-white">₹{totalFixedPrice.toLocaleString("en-IN")}</span>
            <span className="text-[11px] text-amber-300 block font-bold">A2A2 Certified Genetics</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT FORM */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        {/* TOP DOSSIER SUMMARY CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-3xl border border-indigo-200/80 p-5 shadow-xs">
            <span className="text-xs font-bold text-indigo-800 uppercase block">Sire Lineage</span>
            <span className="text-lg font-black text-slate-900 mt-1 block truncate">{formData.sireStrawId}</span>
            <span className="text-[11px] text-slate-500 font-medium">Progeny Tested &gt;4,800L Dam</span>
          </div>

          <div className="bg-white rounded-3xl border border-purple-200/80 p-5 shadow-xs">
            <span className="text-xs font-bold text-purple-800 uppercase block">Peak Milk Output</span>
            <span className="text-2xl font-black text-purple-950 mt-1 block">{formData.milkingCapacityLiters} L/day</span>
            <span className="text-[11px] text-emerald-600 font-bold">Fat: {formData.testedFat}% • SNF: {formData.testedSnf}%</span>
          </div>

          <div className="bg-white rounded-3xl border border-sky-200/80 p-5 shadow-xs">
            <span className="text-xs font-bold text-sky-800 uppercase block">RFID Microchip</span>
            <span className="text-base font-mono font-black text-slate-900 mt-1 block">{formData.rfidTag}</span>
            <span className="text-[11px] text-slate-500 font-mono">134.2 kHz ISO 11784</span>
          </div>

          <div className="bg-white rounded-3xl border border-amber-200/80 p-5 shadow-xs">
            <span className="text-xs font-bold text-amber-800 uppercase block">Fixed Package</span>
            <span className="text-2xl font-black text-amber-950 mt-1 block">₹{totalFixedPrice.toLocaleString("en-IN")}</span>
            <span className="text-[11px] text-amber-700 font-bold">30% Monthly Payout</span>
          </div>
        </div>

        {/* COMPREHENSIVE INPUT FORM GRID */}
        <div className="bg-white rounded-3xl border border-indigo-100 p-6 sm:p-8 shadow-sm space-y-8">
          {/* SECTION 1: GENETIC LINEAGE & PEDIGREE */}
          <div className="space-y-4">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <Dna className="w-5 h-5 text-indigo-600" />
                  <span>Genomic Bloodline &amp; Artificial Insemination (AI) Provenance</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Verify sire semen straw credentials and multi-generational milk production history.
                </p>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                Pure Murrah Breed Index: 99.4%
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Sire AI Semen Straw ID</label>
                <input
                  type="text"
                  value={formData.sireStrawId}
                  onChange={(e) => setFormData({ ...formData, sireStrawId: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">Government frozen semen bank batch code</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Sire Dam Lactation Benchmark</label>
                <input
                  type="text"
                  value={formData.sireDamYield}
                  onChange={(e) => setFormData({ ...formData, sireDamYield: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">Yield certified by NDRI Karnal</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Dam Ear-Tag &amp; History</label>
                <input
                  type="text"
                  value={formData.damEarTag}
                  onChange={(e) => setFormData({ ...formData, damEarTag: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">A2 Beta-Casein Genotype</label>
                <input
                  type="text"
                  value={formData.a2BetaCasein}
                  onChange={(e) => setFormData({ ...formData, a2BetaCasein: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-900 text-xs font-black outline-none"
                />
                <span className="text-[10px] text-emerald-700 font-bold mt-1 block">100% Guaranteed A2 milk protein expression</span>
              </div>
            </div>
          </div>

          {/* SECTION 2: BIOMETRIC WEIGHT & RFID TRACKING */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-purple-600" />
                  <span>Livestock Identification &amp; RFID Microchip</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Universal statutory ear-tag code format and electronic RFID transponder.
                </p>
              </div>

              <button
                type="button"
                onClick={handleGenerateRfid}
                className="px-3.5 py-1.5 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-800 text-xs font-black flex items-center gap-1.5 transition"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Auto-Generate Ear-Tag</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">HIRA Ear-Tag Format</label>
                <input
                  type="text"
                  value={formData.rfidTag}
                  onChange={(e) => setFormData({ ...formData, rfidTag: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-mono font-black focus:ring-2 focus:ring-purple-500 outline-none"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">Conforms to standard: HIRA_A1_OCT26_BUFF_MUR_XX</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">15-Digit RFID Transponder Chip</label>
                <input
                  type="text"
                  value={formData.rfidChip}
                  onChange={(e) => setFormData({ ...formData, rfidChip: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-mono font-black focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Live Weighbridge Weight (kg)</label>
                <input
                  type="number"
                  value={formData.liveWeightKg}
                  onChange={(e) => setFormData({ ...formData, liveWeightKg: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Body Condition Score (BCS 1-5)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.bcsIndex}
                  onChange={(e) => setFormData({ ...formData, bcsIndex: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* SECTION 3: MILK CAPACITY & FAT RATE FIXING */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Milk className="w-5 h-5 text-sky-600" />
                <span>Tested Milk Production &amp; Statutory Escrow Pricing</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Pricing model with mandatory 1-year livestock insurance and 30% dividend rate return.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Daily Yield (Liters/Day)</label>
                <input
                  type="number"
                  step="0.5"
                  value={formData.milkingCapacityLiters}
                  onChange={(e) => setFormData({ ...formData, milkingCapacityLiters: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Fat % &amp; SNF % Composition</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    step="0.1"
                    value={formData.testedFat}
                    onChange={(e) => setFormData({ ...formData, testedFat: Number(e.target.value) })}
                    placeholder="Fat %"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                  <input
                    type="number"
                    step="0.1"
                    value={formData.testedSnf}
                    onChange={(e) => setFormData({ ...formData, testedSnf: Number(e.target.value) })}
                    placeholder="SNF %"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Base Buffalo Acquisition Rate (₹)</label>
                <input
                  type="number"
                  value={formData.baseProcurementRate}
                  onChange={(e) => setFormData({ ...formData, baseProcurementRate: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">1-Year National Insurance Policy Cover (₹)</label>
                <input
                  type="number"
                  value={formData.insurancePremium1Yr}
                  onChange={(e) => setFormData({ ...formData, insurancePremium1Yr: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-sky-500 outline-none"
                />
              </div>
            </div>

            {/* Total Pricing Box */}
            <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-sky-50 rounded-2xl border border-indigo-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700">All-Inclusive Unit Package</span>
                <div className="text-3xl font-black text-slate-900 mt-1">₹{totalFixedPrice.toLocaleString("en-IN")}</div>
                <p className="text-xs text-slate-500 mt-0.5">Includes base purchase, statutory insurance, quarantine and RFID setup</p>
              </div>

              <button
                type="button"
                onClick={handleSaveListing}
                disabled={isSubmitting}
                className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs shadow-md shadow-indigo-600/30 transition flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Verifying Dossier...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Save &amp; List Package</span>
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
