"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Milk,
  Scale,
  Award,
  Thermometer,
  Stethoscope,
  FileCheck2,
  AlertCircle,
  RefreshCw,
  Check,
  DollarSign,
  Syringe,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function MarketplacePage9() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "Clinically Verified Murrah Dairy Unit (48h Quarantine Cleared)",
    vetOfficerName: "Dr. A. K. Shinde, M.V.Sc.",
    vetGovtRegNo: "MH-VET-COUNCIL-4190",
    fitnessCertificateNo: "VET-CERT-2026-9812",
    quarantineBayLocation: "Hira Quarantine Holding Bay #3, Pune Agro Hub",
    temperatureC: 38.4,
    brucellosisStatus: "NEGATIVE (ELISA Titre 0.00)",
    tbStatus: "CLEAR (Intradermal Tuberculin Negative)",
    jdStatus: "NEGATIVE (Fecal PCR Clear)",
    fmdVaccineBatch: "FMD-OIL-ADJ-2026-B12",
    dewormingDate: "2026-10-22 (Ivermectin + Fenbendazole)",
    bodyWeightKg: 585,
    milkingDailyLiters: 17.5,
    packageBasePrice: 156000,
    vetCertificationFee: 4500,
    insuranceCoverFee: 8500,
    quarantineCareFee: 4000,
    stanchionAllocationFee: 2000,
  });

  const totalPackagePrice =
    formData.packageBasePrice +
    formData.vetCertificationFee +
    formData.insuranceCoverFee +
    formData.quarantineCareFee +
    formData.stanchionAllocationFee;

  const handleIssueCertificate = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage("Veterinary Fitness Dossier Signed & Animal Package Admitted to Marketplace!");
      setTimeout(() => setToastMessage(null), 4000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/30 via-white to-stone-50 text-slate-800 antialiased relative pb-24">
      <MarketplaceSwitcher currentMarketplaceId="page-9" />

      {/* TOASTER */}
      {toastMessage && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 bg-sky-800 text-white px-6 py-3.5 rounded-2xl shadow-2xl border border-sky-600 font-extrabold text-sm flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="w-5 h-5 text-sky-200" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER BANNER */}
      <header className="bg-gradient-to-r from-sky-700 via-blue-700 to-indigo-800 text-white p-6 sm:p-8 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-mono font-bold text-sky-100">
              <Stethoscope className="w-3.5 h-3.5 text-yellow-300" />
              <span>DESIGN 08 • VETERINARY HEALTH GATE &amp; QUARANTINE ADMISSION</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Biosecurity Health Clearance &amp; Clinical Onboarding
            </h1>
            <p className="text-xs sm:text-sm text-sky-100 max-w-2xl">
              Mandatory 48-hour quarantine blood screening, infectious disease serology, and certified veterinary sign-off before marketplace listing.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20 text-right shrink-0">
            <span className="text-[10px] uppercase font-bold text-sky-200 block">Health Gate Status</span>
            <span className="text-2xl sm:text-3xl font-black text-white">100% Fit</span>
            <span className="text-[11px] text-emerald-300 block font-bold">Cert #{formData.fitnessCertificateNo}</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        {/* TOP STATUS CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-3xl border border-sky-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-sky-800 uppercase block">Rectal Temp</span>
            <span className="text-3xl font-black text-sky-950 mt-1 block">{formData.temperatureC}°C</span>
            <span className="text-[11px] text-emerald-600 font-bold">Normal Bovine Range</span>
          </div>

          <div className="bg-white rounded-3xl border border-blue-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-blue-800 uppercase block">Brucellosis ELISA</span>
            <span className="text-xl font-black text-emerald-700 mt-1 block">NEGATIVE</span>
            <span className="text-[11px] text-slate-500">Antibody Titre 0.00</span>
          </div>

          <div className="bg-white rounded-3xl border border-indigo-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-indigo-800 uppercase block">FMD Vaccination</span>
            <span className="text-xl font-black text-indigo-950 mt-1 block">BOOSTED</span>
            <span className="text-[11px] text-slate-500 font-mono">{formData.fmdVaccineBatch}</span>
          </div>

          <div className="bg-white rounded-3xl border border-amber-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-amber-800 uppercase block">All-Inclusive Rate</span>
            <span className="text-2xl font-black text-amber-950 mt-1 block">₹{totalPackagePrice.toLocaleString("en-IN")}</span>
            <span className="text-[11px] text-emerald-700 font-bold">Includes 1-Yr Insurance</span>
          </div>
        </div>

        {/* VETERINARY FORM GRID */}
        <div className="bg-white rounded-3xl border border-sky-100 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-sky-600" />
                <span>Veterinary Officer Declarative Sign-off</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Official clinical identification and statutory animal welfare clearance.
              </p>
            </div>
            <span className="text-xs font-mono font-bold bg-sky-50 text-sky-800 px-3 py-1 rounded-full border border-sky-200">
              Reg: {formData.vetGovtRegNo}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Examining Veterinary Officer</label>
              <input
                type="text"
                value={formData.vetOfficerName}
                onChange={(e) => setFormData({ ...formData, vetOfficerName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-bold outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Fitness Certificate Number</label>
              <input
                type="text"
                value={formData.fitnessCertificateNo}
                onChange={(e) => setFormData({ ...formData, fitnessCertificateNo: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-mono font-bold outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Quarantine Holding Bay</label>
              <input
                type="text"
                value={formData.quarantineBayLocation}
                onChange={(e) => setFormData({ ...formData, quarantineBayLocation: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-bold outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Body Weight (kg)</label>
              <input
                type="number"
                value={formData.bodyWeightKg}
                onChange={(e) => setFormData({ ...formData, bodyWeightKg: Number(e.target.value) })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-bold outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Brucellosis Serology Status</label>
              <input
                type="text"
                value={formData.brucellosisStatus}
                onChange={(e) => setFormData({ ...formData, brucellosisStatus: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-900 text-xs font-bold outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Tuberculosis (TB) Testing</label>
              <input
                type="text"
                value={formData.tbStatus}
                onChange={(e) => setFormData({ ...formData, tbStatus: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-900 text-xs font-bold outline-none"
              />
            </div>
          </div>

          {/* RATE FIXING MATRIX */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 border border-sky-200 space-y-4">
            <h4 className="text-xs font-black text-sky-950 uppercase tracking-wide">
              Statutory Clinical Gate Rate Fixing
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-sky-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Base Buffalo</span>
                <span className="font-black text-slate-900 text-sm">₹{formData.packageBasePrice.toLocaleString("en-IN")}</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-sky-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">1-Yr Insurance</span>
                <span className="font-black text-slate-900 text-sm">₹{formData.insuranceCoverFee.toLocaleString("en-IN")}</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-sky-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Clinical Tests</span>
                <span className="font-black text-slate-900 text-sm">₹{formData.vetCertificationFee.toLocaleString("en-IN")}</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-sky-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Quarantine Care</span>
                <span className="font-black text-slate-900 text-sm">₹{formData.quarantineCareFee.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-sky-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-sky-800 block">Total Certified Package Rate</span>
                <span className="text-3xl font-black text-slate-900">₹{totalPackagePrice.toLocaleString("en-IN")}</span>
              </div>

              <button
                type="button"
                onClick={handleIssueCertificate}
                disabled={isSubmitting}
                className="px-6 py-3 rounded-2xl bg-sky-700 hover:bg-sky-600 text-white font-black text-xs shadow-md shadow-sky-700/30 transition flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Signing Health Gate Pass...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Sign Health Pass &amp; Admit to Marketplace</span>
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
