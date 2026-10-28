"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Milk,
  Scale,
  Camera,
  Tag,
  Bluetooth,
  RefreshCw,
  Check,
  AlertTriangle,
  MapPin,
  Clock,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function MarketplacePage7() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bluetoothSynced, setBluetoothSynced] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    mandiHub: "Rohtak Central Cattle Mandi, Haryana",
    auctionSlipNumber: "ROH-AUC-2026-8812",
    sellerTraderName: "Chaudhary Dharamvir Singh",
    breedName: "Murrah Milch Buffalo + Female Calf",
    liveScaleWeightKg: 588,
    rfidTagCode: "HIRA_A1_OCT26_BUFF_MUR_48",
    spotPurchaseRate: 154000,
    dailyMilkingEstimate: 17.5,
    healthPassed: true,
    mastitisScreeningClear: true,
    hornsConformationClear: true,
  });

  const handleSyncBluetoothScale = () => {
    setBluetoothSynced(true);
    setToastMessage("Connected to Avery India Bluetooth Weighbridge (588.4 kg synced)!");
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSaveIntake = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage("Mandi Farmgate Intake Entry Logged & Pushed to Marketplace Catalog!");
      setTimeout(() => setToastMessage(null), 4000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/40 via-white to-stone-50 text-slate-800 antialiased relative pb-24">
      <MarketplaceSwitcher currentMarketplaceId="page-7" />

      {/* TOASTER */}
      {toastMessage && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 bg-amber-700 text-white px-6 py-3.5 rounded-2xl shadow-2xl border border-amber-500 font-extrabold text-sm flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="w-5 h-5 text-amber-200" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER BANNER */}
      <header className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 text-white p-6 sm:p-8 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-mono font-bold text-amber-100">
              <Zap className="w-3.5 h-3.5 text-yellow-200" />
              <span>DESIGN 06 • AUCTION &amp; MANDI FAST-ENTRY INTAKE SLIP</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Farmgate Mandi Intake &amp; Rapid Auction Onboarding
            </h1>
            <p className="text-xs sm:text-sm text-amber-100 max-w-2xl">
              High-speed procurement slip for farm managers at breeding mandis with Bluetooth digital scale synchronization, spot camera photo tagging, and fast rate locking.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20 text-right shrink-0">
            <span className="text-[10px] uppercase font-bold text-amber-200 block">Spot Procurement Bid</span>
            <span className="text-2xl sm:text-3xl font-black text-white">₹{formData.spotPurchaseRate.toLocaleString("en-IN")}</span>
            <span className="text-[11px] text-yellow-200 block font-bold">Fast Settlement Slip</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        <div className="bg-white rounded-3xl border border-amber-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
            <div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                SLIP #{formData.auctionSlipNumber}
              </span>
              <h3 className="text-lg font-black text-slate-900 mt-1">Live Mandi Animal Intake</h3>
            </div>

            <button
              type="button"
              onClick={handleSyncBluetoothScale}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition ${
                bluetoothSynced
                  ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                  : "bg-blue-600 hover:bg-blue-500 text-white shadow-sm"
              }`}
            >
              <Bluetooth className="w-4 h-4" />
              <span>{bluetoothSynced ? "Scale Synced (588 kg)" : "Sync Bluetooth Scale"}</span>
            </button>
          </div>

          {/* INPUT FORM GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Mandi Hub Location</label>
              <input
                type="text"
                value={formData.mandiHub}
                onChange={(e) => setFormData({ ...formData, mandiHub: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Seller / Mandi Trader</label>
              <input
                type="text"
                value={formData.sellerTraderName}
                onChange={(e) => setFormData({ ...formData, sellerTraderName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Assigned Ear-Tag</label>
              <input
                type="text"
                value={formData.rfidTagCode}
                onChange={(e) => setFormData({ ...formData, rfidTagCode: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-mono font-bold outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Scale Weight (kg)</label>
              <input
                type="number"
                value={formData.liveScaleWeightKg}
                onChange={(e) => setFormData({ ...formData, liveScaleWeightKg: Number(e.target.value) })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Daily Milking Potential (L/day)</label>
              <input
                type="number"
                step="0.5"
                value={formData.dailyMilkingEstimate}
                onChange={(e) => setFormData({ ...formData, dailyMilkingEstimate: Number(e.target.value) })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Spot Bid Rate (₹)</label>
              <input
                type="number"
                value={formData.spotPurchaseRate}
                onChange={(e) => setFormData({ ...formData, spotPurchaseRate: Number(e.target.value) })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold outline-none"
              />
            </div>
          </div>

          {/* SPOT VET HEALTH CHECKLIST */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h4 className="text-xs font-black text-amber-950 uppercase tracking-wider">
              Spot Veterinary Gate Verification
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800">
                <input
                  type="checkbox"
                  checked={formData.healthPassed}
                  onChange={(e) => setFormData({ ...formData, healthPassed: e.target.checked })}
                  className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500"
                />
                <span>Fit for Motor Transport</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800">
                <input
                  type="checkbox"
                  checked={formData.mastitisScreeningClear}
                  onChange={(e) => setFormData({ ...formData, mastitisScreeningClear: e.target.checked })}
                  className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500"
                />
                <span>Mastitis CMT Negative</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800">
                <input
                  type="checkbox"
                  checked={formData.hornsConformationClear}
                  onChange={(e) => setFormData({ ...formData, hornsConformationClear: e.target.checked })}
                  className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500"
                />
                <span>Murrah Horn Standard True</span>
              </label>
            </div>
          </div>

          {/* ACTION BUTTON */}
          <button
            type="button"
            onClick={handleSaveIntake}
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-black text-xs shadow-md shadow-amber-600/30 transition flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Pushed to Marketplace Intake...</span>
              </>
            ) : (
              <>
                <Check className="w-4 h-4" />
                <span>Finalize Mandi Slip &amp; Onboard Package</span>
              </>
            )}
          </button>
        </div>
      </main>
    </div>
  );
}
