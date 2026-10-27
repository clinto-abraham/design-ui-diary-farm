"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/Toaster";
import { InputSwitcher } from "@/components/InputSwitcher";
import { SearchableSelect } from "@/components/SearchableSelect";
import {
  ShieldAlert,
  Save,
  RotateCcw,
  CheckCircle2,
  Car,
  UserCheck,
  SprayCan,
  Loader2,
  ShieldCheck,
} from "lucide-react";

interface BiosecurityGateForm {
  gateCheckpointId: string;
  entryTimestamp: string;
  visitorOrDriverName: string;
  contactMobile: string;
  vehicleRegistrationNumber: string;
  visitPurposeCategory: string;
  disinfectionProtocolType: string;
  visitorBodyTempC: number;
  gateSecurityOfficerName: string;
  bootCoversHairnetIssued: boolean;
  vehicleUnderbodySprayed: boolean;
}

const GATE_CHECKPOINT_OPTIONS = [
  { value: "GATE-01 (Main Automated Disinfection Arch)", label: "Gate 01 — Main Commercial Vehicle Entry & 360° Spray Arch", badge: "Heavy Commercial", description: "Automated optical sensor triggers high-pressure Virkon-S mist over tyres and underbody" },
  { value: "GATE-02 (Pedestrian Biosecurity Turnstile)", label: "Gate 02 — Farm Staff & Visitor Footbath Turnstile", badge: "Pedestrian", description: "Mandatory potassium peroxymonosulfate boot immersion" },
  { value: "GATE-03 (North Silo Bunker Forage Lane)", label: "Gate 03 — North Bunker Green Fodder Tractor Bay", badge: "Agronomy Gate", description: "Tyre disinfectant dip trough for incoming harvesters and wagons" },
];

const PURPOSE_OPTIONS = [
  { value: "Raw Milk Insulated Tanker Inbound", label: "Raw Bulk Milk Insulated Tanker (Mother Dairy / Amul)", badge: "Milk Pickup", description: "Sanitizes wheels before entering bulk milk cooler loading bay" },
  { value: "Fodder & Corn Silage Delivery", label: "Green Napier Fodder & Grain Concentrate Delivery", badge: "Feed Intake", description: "Enters directly via North Silo access corridor" },
  { value: "Government Veterinary & Animal Husbandry Audit", label: "Government Veterinary & State Livestock Mission Inspection", badge: "Official Audit", description: "Full PPE visitor suite and farm protocol briefing" },
  { value: "HNWI Animal Asset Owner Herd Compounding Tour", label: "₹2 Lacs Package Animal Asset Owner Farm Inspection & Asset Audit", badge: "Animal Asset Owner Visit", description: "Pre-cleared VIP tour of calf nursery and milking parlor" },
  { value: "Semen Cryo-Canister Replacement Service", label: "Liquid Nitrogen & Sex-Sorted Cryo-Straw Delivery", badge: "Genetics Lab", description: "Direct drop to genetic artificial insemination laboratory" },
];

const DISINFECTION_OPTIONS = [
  { value: "Automated 360° Underbody Mist Arch (Virkon-S 1%)", label: "Automated 360° Underbody & Wheel Arch Mist (Virkon-S 1%)", badge: "Max Shield", description: "Broad-spectrum virucidal and bactericidal chemical misting" },
  { value: "High-Pressure Wheel Dip Trough (Bleach 200ppm)", label: "High-Pressure Concrete Wheel Dip Trough (Chlorine 200 ppm)", badge: "Standard", description: "Submerges tyre treads to flush out external soil contagions" },
  { value: "Full Pedestrian Tyvek Suit & Boot Disinfection", label: "Full Pedestrian Barrier: Boot Wash, Hairnet & Tyvek Suit", badge: "Visitor PPE", description: "Prevents human fomite transmission of external livestock pathogens" },
];

export default function InputPage20() {
  const { toast } = useToast();
  const [passIssued, setPassIssued] = useState<BiosecurityGateForm | null>(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<BiosecurityGateForm>({
    defaultValues: {
      gateCheckpointId: "GATE-01 (Main Automated Disinfection Arch)",
      entryTimestamp: "2026-10-27T07:45",
      visitorOrDriverName: "Gurpreet Singh (Amul Transport Logistics)",
      contactMobile: "+91 98765-43210",
      vehicleRegistrationNumber: "HR-55-AF-9021",
      visitPurposeCategory: "Raw Milk Insulated Tanker Inbound",
      disinfectionProtocolType: "Automated 360° Underbody Mist Arch (Virkon-S 1%)",
      visitorBodyTempC: 36.6,
      gateSecurityOfficerName: "Subedar Raghubir Singh (Security Lead)",
      bootCoversHairnetIssued: true,
      vehicleUnderbodySprayed: true,
    },
  });

  const watched = watch();

  const isTempNormal = (watched.visitorBodyTempC || 36.6) <= 37.5; // Normal human temp <= 37.5°C

  const onSubmit = async (data: BiosecurityGateForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmittingForm(false);
    setPassIssued(data);
    toast({
      type: "success",
      title: "Biosecurity Gate Pass Issued & Barrier Lifted!",
      description: `Vehicle ${data.vehicleRegistrationNumber} cleared via ${data.gateCheckpointId}. Disinfection: ${data.disinfectionProtocolType}.`,
    });
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "Gate Pass Draft Saved",
      description: "Visitor entry details cached in local memory.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-emerald-50/20 to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-stone-800 to-emerald-700 text-white flex items-center justify-center font-black shadow-md shadow-stone-300/40">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                BIOSECURITY WHEEL-DIP & GATE PASS <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-bold border border-emerald-300">Input Form 20</span>
              </Link>
              <p className="text-[11px] text-stone-600 font-medium">Perimeter Security, 360° Virkon-S Spray Arch & Pathogen Fomite Interception</p>
            </div>
          </div>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-900 text-white font-extrabold text-xs shadow-md shadow-stone-400/40 transition"
          >
            Hub Home &rarr;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                Outer Perimeter Biosecurity Barrier
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                Vehicle Disinfection & Gate Entry Pass
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Every vehicle entering Hira Dairy Farm must undergo automated tyre and chassis underbody sanitization to prevent FMD, Brucella, and Salmonella entry.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Gate Checkpoint & Entry Timestamp (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="gateCheckpointId"
                  control={control}
                  rules={{ required: "Gate checkpoint required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Perimeter Gate Checkpoint"
                      modalTitle="Select Security Gate Checkpoint"
                      placeholder="Select Gate Checkpoint"
                      options={GATE_CHECKPOINT_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Entry Date & Timestamp <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    {...register("entryTimestamp", { required: "Timestamp required" })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-emerald-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Driver Name & Mobile (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Visitor / Driver Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("visitorOrDriverName", { required: "Visitor name required" })}
                    placeholder="Gurpreet Singh"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-bold focus:border-emerald-500 outline-none"
                  />
                  {errors.visitorOrDriverName && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.visitorOrDriverName.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Contact Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("contactMobile", { required: "Mobile required" })}
                    placeholder="+91 98765-43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-emerald-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Vehicle Reg # & Visit Purpose (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Vehicle Registration # <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("vehicleRegistrationNumber", { required: "Vehicle number required" })}
                    placeholder="HR-55-AF-9021"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-emerald-500 outline-none uppercase"
                  />
                  {errors.vehicleRegistrationNumber && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.vehicleRegistrationNumber.message}</p>}
                </div>

                <Controller
                  name="visitPurposeCategory"
                  control={control}
                  rules={{ required: "Purpose required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Visit Purpose Category"
                      modalTitle="Select Gate Visit Purpose"
                      placeholder="Select Purpose"
                      options={PURPOSE_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />
              </div>

              {/* Row 4: Disinfection Protocol & Visitor Temp (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="disinfectionProtocolType"
                  control={control}
                  rules={{ required: "Protocol required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Applied Disinfection Protocol"
                      modalTitle="Select Sanitation Disinfection Protocol"
                      placeholder="Select Protocol"
                      options={DISINFECTION_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Infrared Body Temp (°C) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("visitorBodyTempC", { required: "Temp required", valueAsNumber: true })}
                    placeholder="36.6"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-emerald-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Normal: 36.2 - 37.2°C &bull; Fever &gt; 37.5°C</p>
                </div>
              </div>

              {/* Row 5: Security Officer (Single column full width) */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Gate Security Officer Sign-Off <span className="text-rose-500">*</span>
                </label>
                <input
                  {...register("gateSecurityOfficerName", { required: "Officer name required" })}
                  placeholder="Subedar Raghubir Singh (Security Lead)"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-bold focus:border-emerald-500 outline-none"
                />
              </div>

              {/* Row 6: Biosecurity Checkboxes (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("vehicleUnderbodySprayed")}
                    className="rounded border-stone-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-xs font-bold text-stone-800">360° Underbody Sprayed & Treads Immersed</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("bootCoversHairnetIssued")}
                    className="rounded border-stone-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-xs font-bold text-stone-800">Boot Covers & Sanitized Hairnets Issued</span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-between border-t border-stone-100">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => reset()}
                    disabled={isSubmittingForm || isSavingDraft}
                    className="px-3 py-2.5 rounded-xl border border-stone-300 text-xs font-bold text-stone-600 hover:bg-stone-100 transition flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Reset
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveDraft}
                    disabled={isSubmittingForm || isSavingDraft}
                    className="px-4 py-2.5 rounded-xl border border-stone-300 bg-stone-100 text-xs font-bold text-stone-800 hover:bg-stone-200 transition flex items-center gap-1.5"
                  >
                    {isSavingDraft ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    <span>{isSavingDraft ? "Saving..." : "Save Draft"}</span>
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingForm || isSavingDraft}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-stone-800 to-emerald-700 text-white font-black text-xs shadow-md shadow-emerald-500/30 hover:opacity-95 active:scale-95 transition flex items-center gap-2"
                >
                  {isSubmittingForm ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Clearing Security Barrier...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Issue Gate Pass & Lift Barrier</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Security Pass Telemetry (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-950 text-white shadow-2xl space-y-4">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-emerald-300 block">
                Perimeter Security Clearance
              </span>

              <div className="space-y-1">
                <span className="text-xs text-stone-300">Authorized Vehicle Reg</span>
                <div className="text-3xl font-black text-emerald-100 uppercase">
                  {watched.vehicleRegistrationNumber || "PENDING"}
                </div>
                <p className="text-[11px] text-emerald-300 font-mono">
                  Driver: {watched.visitorOrDriverName}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-stone-300">Checkpoint:</span>
                  <span className="font-bold text-white truncate max-w-[170px]">{watched.gateCheckpointId}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-300">Infrared Temp:</span>
                  <span className="font-mono text-emerald-300 font-bold">
                    {isTempNormal ? `${watched.visitorBodyTempC}°C (Normal)` : `⚠️ ${watched.visitorBodyTempC}°C (Fever)`}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="font-bold text-stone-600 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-emerald-600" /> Biosecurity Protocol Pass
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                  CLEARED PASS
                </span>
              </div>

              <div className="space-y-2 text-stone-700">
                <div className="flex justify-between">
                  <span>Purpose:</span>
                  <span className="font-bold text-emerald-700 truncate max-w-[170px]">{watched.visitPurposeCategory}</span>
                </div>
                <div className="flex justify-between">
                  <span>Protocol:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.disinfectionProtocolType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Authorized By:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.gateSecurityOfficerName}</span>
                </div>
              </div>

              {passIssued && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-[11px] flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Gate barrier lifted for {passIssued.vehicleRegistrationNumber}. Entry logged at {passIssued.entryTimestamp}.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InputSwitcher currentInputId="page-20" />
    </div>
  );
}
