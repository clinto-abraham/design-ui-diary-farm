"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/Toaster";
import { InputSwitcher } from "@/components/InputSwitcher";
import { SearchableSelect } from "@/components/SearchableSelect";
import {
  ShieldCheck,
  Save,
  RotateCcw,
  CheckCircle2,
  Droplets,
  Thermometer,
  Sparkles,
  Loader2,
  Check,
} from "lucide-react";

interface BmcCipSanitationForm {
  bmcUnitId: string;
  sanitationDate: string;
  cipCycleType: string;
  causticSodaConcentration: number;
  washTemperatureC: number;
  rinseWaterPh: number;
  waterFlowPressureBar: number;
  atpBioluminescenceRlu: number;
  sanitationOfficerName: string;
  chemicalLotNumber: string;
  surfaceSwabApproved: boolean;
}

const BMC_UNIT_OPTIONS = [
  { value: "BMC-SILO-01 (5,000L Main)", label: "BMC Silo #01 — 5,000 Liters Direct Expansion Stainless", badge: "Primary Silo", description: "Stainless 304 food-grade double-walled jacket" },
  { value: "BMC-SILO-02 (3,000L Evening)", label: "BMC Silo #02 — 3,000 Liters Secondary Chiller", badge: "Evening Batch", description: "Fast chill to 3.8°C within 1.5 hours of milking" },
  { value: "BMC-BUFFER-03 (1,000L Surge)", label: "BMC Surge Buffer Tank — 1,000 Liters", badge: "Surge Chiller", description: "Intermediate cold receiver before bulk tanker transfer" },
];

const CIP_CYCLE_OPTIONS = [
  { value: "Full 4-Stage Thermal CIP", label: "Full 4-Stage Thermal Clean-In-Place Cycle", badge: "Comprehensive", description: "Warm rinse (45°C) → 1.5% Caustic wash (75°C) → Acid neutralization → Cold sanitize" },
  { value: "Daily Alkaline Caustic Wash", label: "Daily Alkaline Detergent Wash (70°C)", badge: "Daily Clean", description: "Removes butterfat organic films and milk stone deposits" },
  { value: "Weekly Acid Mineral Descale", label: "Weekly Nitric/Phosphoric Acid Descaling", badge: "Descale", description: "Dissolves stubborn calcium mineral glaze from cooling plates" },
  { value: "Peracetic Acid Terminal Sanitize", label: "Peracetic Acid (PAA) Terminal Sanitization", badge: "Pre-Milking", description: "No-rinse terminal disinfectant applied 30 mins before morning milking" },
];

export default function InputPage11() {
  const { toast } = useToast();
  const [logSaved, setLogSaved] = useState<BmcCipSanitationForm | null>(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<BmcCipSanitationForm>({
    defaultValues: {
      bmcUnitId: "BMC-SILO-01 (5,000L Main)",
      sanitationDate: "2026-10-27",
      cipCycleType: "Full 4-Stage Thermal CIP",
      causticSodaConcentration: 1.5,
      washTemperatureC: 76.5,
      rinseWaterPh: 7.1,
      waterFlowPressureBar: 2.8,
      atpBioluminescenceRlu: 18,
      sanitationOfficerName: "Mahesh Chandra (QA Microbiologist)",
      chemicalLotNumber: "ECOLAB-CIP-8819",
      surfaceSwabApproved: true,
    },
  });

  const watched = watch();

  const isPhNeutral = (watched.rinseWaterPh || 7.0) >= 6.8 && (watched.rinseWaterPh || 7.0) <= 7.4;
  const isAtpSafe = (watched.atpBioluminescenceRlu || 0) < 30; // <30 RLU indicates hospital/dairy sterility

  const onSubmit = async (data: BmcCipSanitationForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmittingForm(false);
    setLogSaved(data);
    toast({
      type: isAtpSafe && isPhNeutral ? "success" : "warning",
      title: isAtpSafe ? "BMC Chiller Certified Sterile!" : "Sanitation Warning Logged",
      description: `Unit ${data.bmcUnitId} sanitized with ${data.cipCycleType}. ATP: ${data.atpBioluminescenceRlu} RLU, Rinse pH: ${data.rinseWaterPh}.`,
    });
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "Sanitation Draft Saved",
      description: "CIP telemetry numbers preserved in local memory.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50/70 via-sky-50/30 to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-cyan-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-600 to-sky-600 text-white flex items-center justify-center font-black shadow-md shadow-cyan-300/40">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                BULK CHILLER CIP SANITIZATION <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 font-mono font-bold border border-cyan-300">Input Form 11</span>
              </Link>
              <p className="text-[11px] text-cyan-700 font-medium">Clean-In-Place 75°C Caustic Wash, ATP Bioluminescence & FSSAI Dairy Purity</p>
            </div>
          </div>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold text-xs shadow-md shadow-cyan-300/40 transition"
          >
            Hub Home &rarr;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-cyan-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700">
                Food Safety & HACCP Protocol
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                Bulk Milk Cooler (BMC) CIP Log
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Ensure zero bacterial biofilms on stainless steel cooling surfaces prior to fresh evening and morning milking intakes.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: BMC Unit & Date (Strict 2 columns with Modal Search Dropdown) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="bmcUnitId"
                  control={control}
                  rules={{ required: "Chiller unit is required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Bulk Milk Cooler Unit ID"
                      modalTitle="Select Bulk Milk Cooler Vessel"
                      placeholder="Select Chiller Vessel"
                      options={BMC_UNIT_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Sanitization Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    {...register("sanitationDate", { required: "Date is required" })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-cyan-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 2: CIP Cycle Type & Chemical Lot (Strict 2 columns with Modal Search Dropdown) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="cipCycleType"
                  control={control}
                  rules={{ required: "CIP cycle required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="CIP Wash Program Stage"
                      modalTitle="Select Clean-In-Place Washing Program"
                      placeholder="Select CIP Cycle"
                      options={CIP_CYCLE_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Chemical Reagent Lot # <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("chemicalLotNumber", { required: "Chemical lot required" })}
                    placeholder="e.g. ECOLAB-CIP-8819"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-cyan-500 outline-none uppercase"
                  />
                </div>
              </div>

              {/* Row 3: Wash Temp & Caustic % (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Peak Thermal Wash Temp (°C) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    {...register("washTemperatureC", {
                      required: "Temperature is mandatory",
                      min: { value: 65, message: "Thermal wash must reach at least 65°C" },
                      valueAsNumber: true,
                    })}
                    placeholder="76.5"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-cyan-950 focus:border-cyan-500 outline-none"
                  />
                  {errors.washTemperatureC && (
                    <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.washTemperatureC.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Caustic Concentration (% NaOH) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("causticSodaConcentration", { valueAsNumber: true })}
                    placeholder="1.5"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold text-amber-700 focus:border-cyan-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 4: Rinse Water pH & Flow Pressure (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Final Rinse Water pH (Target: 7.0 ± 0.3) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("rinseWaterPh", {
                      required: "pH required",
                      min: 5.5,
                      max: 8.5,
                      valueAsNumber: true,
                    })}
                    placeholder="7.1"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-emerald-700 focus:border-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Spray Ball Water Flow Pressure (Bar)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("waterFlowPressureBar", { valueAsNumber: true })}
                    placeholder="2.8"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-cyan-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 5: ATP Bioluminescence & Swab Signoff (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    ATP Bioluminescence Swab (RLU Units) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("atpBioluminescenceRlu", {
                      required: "ATP swab count required",
                      valueAsNumber: true,
                    })}
                    placeholder="18"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-cyan-950 focus:border-cyan-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">&lt;30 RLU: Sterile Grade &bull; &gt;50 RLU: Re-wash required</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    QA Sanitation Officer Sign-Off <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("sanitationOfficerName", { required: "Officer name required" })}
                    placeholder="Mahesh Chandra (QA Microbiologist)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-bold focus:border-cyan-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 6: Safety Approval Checkbox (Single full width) */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("surfaceSwabApproved", { required: "Swab sign-off is mandatory" })}
                    className="mt-0.5 rounded border-stone-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span className="text-xs text-stone-600 leading-relaxed font-medium">
                    I certify that all spray ball nozzles have delivered 360° coverage, no alkaline residue remains in the drain valve, and the vessel is released for milk collection.
                  </span>
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
                    className="px-4 py-2.5 rounded-xl border border-cyan-200 bg-cyan-50 text-xs font-bold text-cyan-800 hover:bg-cyan-100 transition flex items-center gap-1.5"
                  >
                    {isSavingDraft ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    <span>{isSavingDraft ? "Saving..." : "Save Draft"}</span>
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingForm || isSavingDraft}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 text-white font-black text-xs shadow-md shadow-cyan-400/40 hover:opacity-95 active:scale-95 transition flex items-center gap-2"
                >
                  {isSubmittingForm ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Validating Chiller CIP...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Certify & Release Chiller</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Hygiene Telemetry Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-800 via-sky-800 to-slate-900 text-white shadow-2xl space-y-4">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-cyan-300 block">
                Microbiological Cleanliness Score
              </span>

              <div className="space-y-1">
                <span className="text-xs text-cyan-200">Bioluminescence Count</span>
                <div className="text-3xl font-black text-cyan-100 flex items-center gap-2">
                  <span>{watched.atpBioluminescenceRlu} RLU</span>
                  {isAtpSafe ? (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500 text-white font-mono font-bold">
                      STERILE PASS
                    </span>
                  ) : (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500 text-white font-mono font-bold">
                      RE-CLEAN
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-cyan-200">
                  Target: &lt;30 RLU for organic A2 whole milk chilling contact
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-cyan-200">Thermal Wash Threshold:</span>
                  <span className="font-mono font-bold text-amber-300">{watched.washTemperatureC}°C (Optimal &gt;75°C)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-200">Rinse Water Neutrality:</span>
                  <span className="font-mono font-bold text-emerald-300">pH {watched.rinseWaterPh} (Residue Zero)</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="font-bold text-stone-600 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-600" /> Chiller Release Badge
                </span>
                <span className="text-[10px] bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded-full font-bold">
                  CIP VERIFIED
                </span>
              </div>

              <div className="space-y-2 text-stone-700">
                <div className="flex justify-between">
                  <span>Vessel ID:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.bmcUnitId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cycle Program:</span>
                  <span className="font-bold text-cyan-700 truncate max-w-[170px]">{watched.cipCycleType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Chemical Lot:</span>
                  <span className="font-bold text-stone-900">{watched.chemicalLotNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span>Microbiologist:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.sanitationOfficerName}</span>
                </div>
              </div>

              {logSaved && (
                <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-950 text-[11px] flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Chiller #{logSaved.bmcUnitId.slice(0, 10)} signed off for intake.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InputSwitcher currentInputId="page-11" />
    </div>
  );
}
