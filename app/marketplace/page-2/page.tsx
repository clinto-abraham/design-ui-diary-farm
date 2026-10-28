"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Camera,
  Upload,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  ShieldCheck,
  Milk,
  Scale,
  Award,
  Layers,
  Info,
  Tag,
  Check,
  Plus,
  Trash2,
  Eye,
  RefreshCw,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function MarketplacePage2() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: "Elite Murrah Purebred Milch Pair (Mother + Female Calf)",
    breed: "Murrah Purebred",
    tagId: "HIRA_A1_OCT26_BUFF_MUR_41",
    rfidCode: "982-000412895",
    weightKg: 585,
    bcsScore: "4.2 / 5.0 (Optimal Dairy Conformation)",
    milkingCapacityLiters: 17.5,
    fatPercentage: 7.9,
    snfPercentage: 9.3,
    parity: "2nd Lactation (35 Days Calved)",
    ageYears: "4.2 Years (6 Permanent Incisors)",
    quantity: 1, // 1 Pair (1 Buffalo + 1 Calf)
    basePrice: 155000,
    insuranceCost: 8500,
    quarantineCost: 3500,
    rfidAdminCost: 3000,
    shedPrepCost: 5000,
    investorProfitShare: 30, // 30% Net Profit Share
    mandiSource: "Karnal Breeding Mandi, Haryana",
    shedAllocation: "Shed 2, Stanchion #19",
  });

  const totalPrice =
    formData.basePrice +
    formData.insuranceCost +
    formData.quarantineCost +
    formData.rfidAdminCost +
    formData.shedPrepCost;

  const [photos, setPhotos] = useState([
    { id: "front", label: "Front Head & Horn Curve", url: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=80", uploaded: true },
    { id: "side_left", label: "Left Flank & Barrel", url: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=800&auto=format&fit=crop&q=80", uploaded: true },
    { id: "udder", label: "Rear Udder & Teat Placement", url: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=80", uploaded: true },
    { id: "tag", label: "RFID Ear-Tag Close-up", url: "", uploaded: false },
  ]);

  const handlePublish = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage("Animal package onboarded and published to Marketplace successfully!");
      setTimeout(() => setToastMessage(null), 4000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-emerald-50/20 to-stone-50 text-slate-800 antialiased relative pb-24">
      <MarketplaceSwitcher currentMarketplaceId="page-2" />

      {/* TOASTER NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 bg-emerald-700 text-white px-6 py-3.5 rounded-2xl shadow-2xl border border-emerald-500 font-extrabold text-sm flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-200" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER BANNER */}
      <header className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-700 text-white p-6 sm:p-8 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-mono font-bold text-emerald-100">
              <Camera className="w-3.5 h-3.5 text-amber-300" />
              <span>DESIGN 01 • STUDIO STEPPER &amp; 360° PHOTO SHOWCASE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Bovine Package Onboarding Studio
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl">
              Create and list certified dairy buffalo investment packages for the investor marketplace with multi-angle photography, biometric specifications, and transparent rate fixing.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20 text-right sm:text-right shrink-0">
            <span className="text-[10px] uppercase font-bold text-emerald-200 block">Package Retail Value</span>
            <span className="text-2xl sm:text-3xl font-black text-white">₹{totalPrice.toLocaleString("en-IN")}</span>
            <span className="text-[11px] text-amber-300 block font-bold">30% Net Profit Share</span>
          </div>
        </div>
      </header>

      {/* STEP NAVIGATION TABS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        <div className="bg-white rounded-2xl border border-stone-200 p-2 shadow-xs grid grid-cols-4 gap-2 text-center text-xs font-extrabold">
          <button
            onClick={() => setCurrentStep(1)}
            className={`py-2.5 rounded-xl transition ${currentStep === 1 ? "bg-emerald-600 text-white shadow-sm" : "text-slate-600 hover:bg-stone-50"}`}
          >
            1. Photo Showcase
          </button>
          <button
            onClick={() => setCurrentStep(2)}
            className={`py-2.5 rounded-xl transition ${currentStep === 2 ? "bg-emerald-600 text-white shadow-sm" : "text-slate-600 hover:bg-stone-50"}`}
          >
            2. Biometrics &amp; Milk
          </button>
          <button
            onClick={() => setCurrentStep(3)}
            className={`py-2.5 rounded-xl transition ${currentStep === 3 ? "bg-emerald-600 text-white shadow-sm" : "text-slate-600 hover:bg-stone-50"}`}
          >
            3. Rate Fixing &amp; Escrow
          </button>
          <button
            onClick={() => setCurrentStep(4)}
            className={`py-2.5 rounded-xl transition ${currentStep === 4 ? "bg-emerald-600 text-white shadow-sm" : "text-slate-600 hover:bg-stone-50"}`}
          >
            4. Review &amp; Publish
          </button>
        </div>
      </div>

      {/* MAIN STEP CONTENT */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-8">
          {/* STEP 1: PHOTO SHOWCASE */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="border-b border-stone-100 pb-3">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-emerald-600" />
                  <span>360° High-Resolution Bovine Gallery</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Upload crisp photos of the lactating buffalo and female calf to build trust with marketplace investors.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {photos.map((photo, idx) => (
                  <div
                    key={photo.id}
                    className="border-2 border-dashed border-stone-300 hover:border-emerald-500 rounded-3xl p-4 transition-all bg-stone-50/70 hover:bg-emerald-50/20 text-center space-y-3 relative group"
                  >
                    <div className="h-44 rounded-2xl bg-stone-200/80 overflow-hidden flex items-center justify-center relative">
                      {photo.uploaded && photo.url ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={photo.url} alt={photo.label} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                      ) : (
                        <div className="text-slate-400 space-y-1">
                          <Upload className="w-8 h-8 mx-auto" />
                          <span className="text-[11px] font-bold block">Drop Photo Here</span>
                        </div>
                      )}
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-slate-900/80 text-white text-[10px] font-mono font-bold">
                        Slot #{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xs font-black text-slate-900">{photo.label}</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5 font-medium">
                        {photo.uploaded ? "Verified High-Resolution" : "Required for Marketplace"}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="w-full py-2 rounded-xl bg-white border border-stone-300 hover:border-emerald-600 text-xs font-bold text-slate-700 hover:text-emerald-700 transition shadow-xs"
                    >
                      {photo.uploaded ? "Replace Photo" : "Upload File"}
                    </button>
                  </div>
                ))}
              </div>

              {/* Title & Breed Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-100">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Package Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Breed Category</label>
                  <select
                    value={formData.breed}
                    onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                  >
                    <option value="Murrah Purebred">Murrah Purebred (Haryana)</option>
                    <option value="Nili-Ravi Purebred">Nili-Ravi Purebred (Punjab)</option>
                    <option value="Jaffarabadi Heavy">Jaffarabadi Heavy (Gujarat)</option>
                    <option value="Mehsana Dairy">Mehsana Dairy (Gujarat)</option>
                    <option value="Banni Kutch">Banni Kutch Indigenous</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: BIOMETRICS & MILKING CAPACITY */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="border-b border-stone-100 pb-3">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-emerald-600" />
                  <span>Biometric Body Weight &amp; Milking Parameters</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Official weightbridge metrics, daily milk capacity, and fat percentage testing.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Digital Scale Weight (kg)</label>
                  <input
                    type="number"
                    value={formData.weightKg}
                    onChange={(e) => setFormData({ ...formData, weightKg: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                  <span className="text-[10px] text-slate-400 mt-1 block">Calibrated digital weighbridge reading</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Body Condition Score (BCS)</label>
                  <input
                    type="text"
                    value={formData.bcsScore}
                    onChange={(e) => setFormData({ ...formData, bcsScore: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                  <span className="text-[10px] text-slate-400 mt-1 block">Standard 1 to 5 scale (Veterinary assessment)</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Daily Milking Capacity (Liters/Day)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={formData.milkingCapacityLiters}
                    onChange={(e) => setFormData({ ...formData, milkingCapacityLiters: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                  <span className="text-[10px] text-emerald-600 font-semibold mt-1 block">Peak AM (9.5 L) + PM (8.0 L) yield</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tested Fat % &amp; SNF %</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      step="0.1"
                      value={formData.fatPercentage}
                      onChange={(e) => setFormData({ ...formData, fatPercentage: Number(e.target.value) })}
                      placeholder="Fat %"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                    <input
                      type="number"
                      step="0.1"
                      value={formData.snfPercentage}
                      onChange={(e) => setFormData({ ...formData, snfPercentage: Number(e.target.value) })}
                      placeholder="SNF %"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">Laboratory Gerber Fat &amp; Lactometer SNF</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Parity / Lactation Stage</label>
                  <input
                    type="text"
                    value={formData.parity}
                    onChange={(e) => setFormData({ ...formData, parity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Age &amp; Dentition</label>
                  <input
                    type="text"
                    value={formData.ageYears}
                    onChange={(e) => setFormData({ ...formData, ageYears: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: RATE FIXING & TRANSPARENT ESCROW BREAKDOWN */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="border-b border-stone-100 pb-3">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-emerald-600" />
                  <span>Itemized Package Rate Fixing &amp; Profit Guarantee</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Transparent statutory rate breakdown ensuring zero hidden charges for the investor.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">1. Base Animal Procurement Cost (₹)</label>
                  <input
                    type="number"
                    value={formData.basePrice}
                    onChange={(e) => setFormData({ ...formData, basePrice: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                  <span className="text-[10px] text-slate-400 mt-1 block">Fair mandi auction rate for milking cow + female calf</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">2. 1-Year Comprehensive Livestock Insurance (₹)</label>
                  <input
                    type="number"
                    value={formData.insuranceCost}
                    onChange={(e) => setFormData({ ...formData, insuranceCost: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                  <span className="text-[10px] text-emerald-600 font-semibold mt-1 block">National / United India Insurance master tag policy</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">3. Quarantine Conditioning &amp; Feeding (₹)</label>
                  <input
                    type="number"
                    value={formData.quarantineCost}
                    onChange={(e) => setFormData({ ...formData, quarantineCost: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                  <span className="text-[10px] text-slate-400 mt-1 block">48-Hour biosecurity isolation + mineral bolus intake</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">4. RFID Tag, Vet Health Panel &amp; Admin (₹)</label>
                  <input
                    type="number"
                    value={formData.rfidAdminCost}
                    onChange={(e) => setFormData({ ...formData, rfidAdminCost: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                  <span className="text-[10px] text-slate-400 mt-1 block">Blood panel (Brucellosis/TB/JD) + microchip implantation</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">5. Farm Stanchion Onboarding &amp; Bedding (₹)</label>
                  <input
                    type="number"
                    value={formData.shedPrepCost}
                    onChange={(e) => setFormData({ ...formData, shedPrepCost: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">6. Net Profit Share Return (%)</label>
                  <input
                    type="number"
                    value={formData.investorProfitShare}
                    onChange={(e) => setFormData({ ...formData, investorProfitShare: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-900 text-xs font-black outline-none"
                  />
                  <span className="text-[10px] text-emerald-700 font-bold mt-1 block">Guaranteed 30% monthly dividend even in dry periods</span>
                </div>
              </div>

              {/* Total Package Rate Highlight */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">Total Fixed Package Rate</span>
                  <span className="text-3xl font-black text-emerald-950">₹{totalPrice.toLocaleString("en-IN")}</span>
                  <p className="text-xs text-emerald-700 mt-0.5">All-inclusive turn-key livestock investment unit</p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-black">
                    Zero Operational Surcharge
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW & PUBLISH TO MARKETPLACE */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="border-b border-stone-100 pb-3">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Marketplace Listing Review Slip</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Preview how this animal package appears to investors on the marketplace portal.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Card: Customer Preview */}
                <div className="lg:col-span-2 rounded-3xl border border-stone-200 overflow-hidden shadow-md">
                  <div className="h-64 bg-stone-200 relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={photos[0].url} alt="Cover" className="w-full h-full object-cover" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 text-white font-mono text-xs font-bold">
                      {formData.tagId}
                    </span>
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-black shadow-md">
                      ₹{totalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-black text-slate-900">{formData.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{formData.breed} • Parity: {formData.parity}</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-stone-100 text-xs text-center">
                      <div className="p-2.5 rounded-xl bg-stone-50">
                        <span className="text-[10px] text-slate-400 uppercase font-bold block">Peak Yield</span>
                        <span className="text-sm font-black text-emerald-700">{formData.milkingCapacityLiters} L/day</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-stone-50">
                        <span className="text-[10px] text-slate-400 uppercase font-bold block">Fat / SNF</span>
                        <span className="text-sm font-black text-slate-800">{formData.fatPercentage}% / {formData.snfPercentage}%</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-stone-50">
                        <span className="text-[10px] text-slate-400 uppercase font-bold block">Live Weight</span>
                        <span className="text-sm font-black text-slate-800">{formData.weightKg} kg</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-stone-50">
                        <span className="text-[10px] text-slate-400 uppercase font-bold block">Profit Share</span>
                        <span className="text-sm font-black text-amber-600">{formData.investorProfitShare}% Net</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Card: Technical Meta */}
                <div className="rounded-3xl border border-stone-200 p-6 space-y-4 bg-stone-50">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Technical Traceability</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">RFID Chip:</span>
                      <span className="font-mono font-bold text-slate-800">{formData.rfidCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Mandi Origin:</span>
                      <span className="font-bold text-slate-800">{formData.mandiSource}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Assigned Stanchion:</span>
                      <span className="font-bold text-slate-800">{formData.shedAllocation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Insurance Cover:</span>
                      <span className="font-bold text-emerald-700">1 Year (Included)</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-200">
                    <button
                      type="button"
                      onClick={handlePublish}
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-md shadow-emerald-600/30 transition flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Publishing to Marketplace...</span>
                        </>
                      ) : (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Publish Package to Marketplace</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* BOTTOM STEP CONTROLS */}
          <div className="flex items-center justify-between pt-6 border-t border-stone-100">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-5 py-2.5 rounded-xl border border-stone-300 hover:bg-stone-50 text-slate-700 text-xs font-bold flex items-center gap-2 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Step</span>
              </button>
            ) : <div />}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black flex items-center gap-2 transition shadow-sm"
              >
                <span>Continue to Step {currentStep + 1}</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}
