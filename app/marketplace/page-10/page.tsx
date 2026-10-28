"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Eye,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Milk,
  Scale,
  Award,
  Layers,
  Heart,
  ShoppingCart,
  DollarSign,
  Tag,
  RefreshCw,
  Check,
  Building,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function MarketplacePage10() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);

  // Form State
  const [title, setTitle] = useState("Champion Murrah First-Calver Unit (Mother + Female Calf)");
  const [breed, setBreed] = useState("Purebred Murrah Buffalo");
  const [earTag, setEarTag] = useState("HIRA_A1_OCT26_BUFF_MUR_49");
  const [weightKg, setWeightKg] = useState(590);
  const [dailyMilkLiters, setDailyMilkLiters] = useState(18.5);
  const [fatPercent, setFatPercent] = useState(8.1);
  const [basePrice, setBasePrice] = useState(165000);
  const [insurancePrice, setInsurancePrice] = useState(8500);
  const [quarantinePrice, setQuarantinePrice] = useState(6500);
  const [profitShare, setProfitShare] = useState(30);
  const [selectedPhoto, setSelectedPhoto] = useState(
    "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=80"
  );

  const totalPrice = basePrice + insurancePrice + quarantinePrice;

  const handlePublish = () => {
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      setToastMessage("WYSIWYG Livestock Package Synchronized & Pushed to Live Marketplace Storefront!");
      setTimeout(() => setToastMessage(null), 4000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50/25 via-white to-stone-50 text-slate-800 antialiased relative pb-24">
      <MarketplaceSwitcher currentMarketplaceId="page-10" />

      {/* TOASTER */}
      {toastMessage && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 bg-violet-700 text-white px-6 py-3.5 rounded-2xl shadow-2xl border border-violet-500 font-extrabold text-sm flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="w-5 h-5 text-violet-200" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER BANNER */}
      <header className="bg-gradient-to-r from-violet-700 via-fuchsia-700 to-indigo-800 text-white p-6 sm:p-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-mono font-bold text-violet-100">
              <Eye className="w-3.5 h-3.5 text-yellow-300" />
              <span>DESIGN 09 • SPLIT-SCREEN WYSIWYG LIVE MARKETPLACE STUDIO</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Dual-Pane Real-Time Marketplace Catalog Studio
            </h1>
            <p className="text-xs sm:text-sm text-violet-100 max-w-2xl">
              Type package specifications, calibrate rate fixing on the left, and watch the investor storefront product card render live with pixel-perfect accuracy on the right.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20 text-right shrink-0">
            <span className="text-[10px] uppercase font-bold text-violet-200 block">Live Price Sync</span>
            <span className="text-2xl sm:text-3xl font-black text-white">₹{totalPrice.toLocaleString("en-IN")}</span>
            <span className="text-[11px] text-yellow-300 block font-bold">WYSIWYG Dual Render</span>
          </div>
        </div>
      </header>

      {/* DUAL PANE WYSIWYG CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 6 COLS: INPUT CONTROLS */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-violet-100 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-stone-100 pb-3 flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900">Operator Input Controls</h3>
                <p className="text-xs text-slate-500 mt-0.5">Changes reflect instantaneously on the right pane.</p>
              </div>
              <span className="text-[10px] font-mono font-bold bg-violet-50 text-violet-700 px-2.5 py-1 rounded-full border border-violet-200">
                Live State Active
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Listing Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Breed</label>
                  <input
                    type="text"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs font-bold outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">RFID Ear-Tag</label>
                  <input
                    type="text"
                    value={earTag}
                    onChange={(e) => setEarTag(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs font-mono font-bold outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Weight (kg)</label>
                  <input
                    type="number"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs font-bold outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Milk (L/day)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={dailyMilkLiters}
                    onChange={(e) => setDailyMilkLiters(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs font-bold outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Fat %</label>
                  <input
                    type="number"
                    step="0.1"
                    value={fatPercent}
                    onChange={(e) => setFatPercent(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs font-bold outline-none"
                  />
                </div>
              </div>

              {/* RATE FIXING MATRIX */}
              <div className="p-4 rounded-2xl bg-violet-50/50 border border-violet-100 space-y-3">
                <span className="text-xs font-black text-violet-950 uppercase tracking-wide block">Rate Fixing Breakdown</span>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <label className="text-[10px] text-slate-500 font-bold block mb-1">Base Animal (₹)</label>
                    <input
                      type="number"
                      value={basePrice}
                      onChange={(e) => setBasePrice(Number(e.target.value))}
                      className="w-full px-2 py-1.5 rounded-lg border border-violet-200 bg-white font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-500 font-bold block mb-1">Insurance (₹)</label>
                    <input
                      type="number"
                      value={insurancePrice}
                      onChange={(e) => setInsurancePrice(Number(e.target.value))}
                      className="w-full px-2 py-1.5 rounded-lg border border-violet-200 bg-white font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-500 font-bold block mb-1">Care &amp; Tag (₹)</label>
                    <input
                      type="number"
                      value={quarantinePrice}
                      onChange={(e) => setQuarantinePrice(Number(e.target.value))}
                      className="w-full px-2 py-1.5 rounded-lg border border-violet-200 bg-white font-bold"
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handlePublish}
                disabled={isPublishing}
                className="w-full py-3.5 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-black text-xs shadow-md shadow-violet-600/30 transition flex items-center justify-center gap-2"
              >
                {isPublishing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Synchronizing Marketplace Catalog...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Publish WYSIWYG Listing</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* RIGHT 6 COLS: LIVE MARKETPLACE CUSTOMER CARD PREVIEW */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Live Marketplace Product Preview
              </span>
              <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                Updated in Real Time
              </span>
            </div>

            {/* THE PREVIEW CARD */}
            <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
              <div className="h-64 bg-stone-200 relative overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={selectedPhoto} alt="Product Preview" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur text-white text-xs font-mono font-bold">
                  {earTag}
                </span>
                <span className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-sm shadow-md">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 text-[10px] font-black uppercase">
                      10-Year Compounding Package
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-black">
                      30% Monthly Profit Share
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight leading-snug">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    {breed} • 1 Mother + 1 Female Calf Pair
                  </p>
                </div>

                {/* 4 Quick Spec Badges */}
                <div className="grid grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-2xl bg-stone-50 border border-stone-100">
                    <span className="text-[9px] text-slate-400 font-bold uppercase block">Peak Yield</span>
                    <span className="text-sm font-black text-emerald-700">{dailyMilkLiters} L/d</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-stone-50 border border-stone-100">
                    <span className="text-[9px] text-slate-400 font-bold uppercase block">Butterfat</span>
                    <span className="text-sm font-black text-slate-900">{fatPercent}%</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-stone-50 border border-stone-100">
                    <span className="text-[9px] text-slate-400 font-bold uppercase block">Live Weight</span>
                    <span className="text-sm font-black text-slate-900">{weightKg} kg</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-stone-50 border border-stone-100">
                    <span className="text-[9px] text-slate-400 font-bold uppercase block">Insurance</span>
                    <span className="text-sm font-black text-blue-700">1-Yr Inc.</span>
                  </div>
                </div>

                {/* Mock CTA Buttons */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    className="flex-1 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md transition flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4 text-emerald-400" />
                    <span>Instant Mandi Reservation</span>
                  </button>

                  <button
                    type="button"
                    className="px-4 py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-slate-700 font-bold text-xs transition"
                  >
                    View Dossier
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
