"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/Toaster";
import { InputSwitcher } from "@/components/InputSwitcher";
import { SearchableSelect } from "@/components/SearchableSelect";
import {
  Gauge,
  Save,
  RotateCcw,
  CheckCircle2,
  Wrench,
  Sliders,
  Cog,
  Loader2,
} from "lucide-react";

interface MachineCalibrationForm {
  parlorStallId: string;
  calibrationDate: string;
  vacuumPressureKpa: number;
  pulsationRatePpm: number;
  pulsationRatio: string;
  siliconeLinerHoursLogged: number;
  acrTakeoffThresholdGramsPerMin: number;
  teatEndHyperkeratosisRisk: string;
  technicianName: string;
  regulatorDiaphragmInspected: boolean;
}

const PARLOR_STALL_OPTIONS = [
  { value: "HERRINGBONE-STATION-01 (DeLaval 2x6)", label: "Herringbone Parlor — Station 01 (DeLaval High Vacuum)", badge: "Port 1", description: "Stainless steel rapid exit rapid claw assembly" },
  { value: "HERRINGBONE-STATION-02 (DeLaval 2x6)", label: "Herringbone Parlor — Station 02 (DeLaval High Vacuum)", badge: "Port 2", description: "Direct claw line to central 3-inch stainless milk pipeline" },
  { value: "HERRINGBONE-STATION-03 (DeLaval 2x6)", label: "Herringbone Parlor — Station 03 (DeLaval High Vacuum)", badge: "Port 3", description: "Equipped with automatic cluster takeoff (ACR) cylinders" },
  { value: "MOBILE-TROLLEY-UNIT-01 (Sick Bay)", label: "Mobile Trolley Milking Unit — Sick Bay Isolation", badge: "Portable", description: "Separate silicone bucket line for convalescent buffaloes" },
];

const RATIO_OPTIONS = [
  { value: "60:40 (Standard Buffalo Milk/Massage)", label: "60:40 Milking:Massage Ratio (Optimal Murrah Teat Comfort)", badge: "Recommended", description: "60% milk extraction phase, 40% teat massage blood circulation" },
  { value: "65:35 (Fast Commercial Evacuation)", label: "65:35 High Flow Rate Ratio (Faster Milking)", badge: "Fast Flow", description: "Higher throughput for peak morning rush" },
  { value: "50:50 (Gentle Heifer Initial Milking)", label: "50:50 Equal Gentle Ratio (First-Calf Heifers)", badge: "Gentle", description: "Maximum teat end cushion for newly calved young buffaloes" },
];

const HYPERKERATOSIS_OPTIONS = [
  { value: "Grade 1: Smooth Teat Orifice Ring", label: "Grade 1 — Smooth Teat Orifice Ring (Zero Stress)", badge: "Optimal", description: "No roughness or keratin callousing" },
  { value: "Grade 2: Slight Ring Keratin Roughness", label: "Grade 2 — Slight Raised Ring (Acceptable)", badge: "Monitor", description: "Minor physiological response to machine milking" },
  { value: "Grade 3: Rough Everted Fronds (High Vacuum)", label: "Grade 3 — Rough Everted Fronds (Vacuum Too High)", badge: "Reduce kPa", description: "Over-milking damage, immediately reduce vacuum pressure" },
];

export default function InputPage14() {
  const { toast } = useToast();
  const [calibrationSaved, setCalibrationSaved] = useState<MachineCalibrationForm | null>(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<MachineCalibrationForm>({
    defaultValues: {
      parlorStallId: "HERRINGBONE-STATION-01 (DeLaval 2x6)",
      calibrationDate: "2026-10-27",
      vacuumPressureKpa: 48.5,
      pulsationRatePpm: 58,
      pulsationRatio: "60:40 (Standard Buffalo Milk/Massage)",
      siliconeLinerHoursLogged: 1420,
      acrTakeoffThresholdGramsPerMin: 200,
      teatEndHyperkeratosisRisk: "Grade 1: Smooth Teat Orifice Ring",
      technicianName: "Kuldeep Varma (DeLaval Certified Tech)",
      regulatorDiaphragmInspected: true,
    },
  });

  const watched = watch();

  const isVacuumOptimal = (watched.vacuumPressureKpa || 48.5) >= 47.0 && (watched.vacuumPressureKpa || 48.5) <= 50.0;
  const isLinerDue = (watched.siliconeLinerHoursLogged || 0) > 2000;

  const onSubmit = async (data: MachineCalibrationForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmittingForm(false);
    setCalibrationSaved(data);
    toast({
      type: isVacuumOptimal ? "success" : "warning",
      title: isVacuumOptimal ? "Milking Unit Calibrated & Certified!" : "Vacuum Pressure Caution",
      description: `Station ${data.parlorStallId} set to ${data.vacuumPressureKpa} kPa at ${data.pulsationRatePpm} PPM (${data.pulsationRatio}).`,
    });
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "Calibration Draft Preserved",
      description: "Pulsator sensor telemetry saved in memory.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/70 via-indigo-50/20 to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-blue-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black shadow-md shadow-blue-300/40">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                MILKING MACHINE CALIBRATION <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-mono font-bold border border-blue-300">Input Form 14</span>
              </Link>
              <p className="text-[11px] text-blue-700 font-medium">Vacuum 48.5 kPa Sensor Tuner, Pulsator 60:40 Ratio & Teat Health Protection</p>
            </div>
          </div>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-300/40 transition"
          >
            Hub Home &rarr;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-blue-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                Precision Hardware Engineering
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                Milking Pulsator & Vacuum Tuning
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Buffalo teats require precise vacuum tuning (48-50 kPa) to prevent teat end damage and maximize milk let-down speed.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Station & Date (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="parlorStallId"
                  control={control}
                  rules={{ required: "Station is required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Milking Parlor Station / Stall"
                      modalTitle="Select Parlor Stanchion Station"
                      placeholder="Select Milking Station"
                      options={PARLOR_STALL_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Calibration Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    {...register("calibrationDate", { required: "Date is required" })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Vacuum Pressure & Pulsation Rate (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Operational Vacuum Pressure (kPa) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("vacuumPressureKpa", {
                      required: "Vacuum pressure required",
                      min: 44,
                      max: 53,
                      valueAsNumber: true,
                    })}
                    placeholder="48.5"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-blue-950 focus:border-blue-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Buffalo benchmark: 48.0 - 50.0 kPa (Cows: 42-44 kPa)</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Pulsation Rate (Pulses / Min) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("pulsationRatePpm", {
                      required: "Pulsation rate required",
                      min: 50,
                      max: 65,
                      valueAsNumber: true,
                    })}
                    placeholder="58"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-blue-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Recommended: 55 - 60 PPM</p>
                </div>
              </div>

              {/* Row 3: Pulsation Ratio & ACR Threshold (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="pulsationRatio"
                  control={control}
                  rules={{ required: "Pulsation ratio required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Milking : Massage Ratio"
                      modalTitle="Select Pulsator Phase Ratio"
                      placeholder="Select Ratio"
                      options={RATIO_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    ACR Auto-Takeoff Threshold (g / min)
                  </label>
                  <input
                    type="number"
                    {...register("acrTakeoffThresholdGramsPerMin", { valueAsNumber: true })}
                    placeholder="200"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-blue-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Cluster drops when flow falls below 200 g/min</p>
                </div>
              </div>

              {/* Row 4: Silicone Liner Hours & Hyperkeratosis (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Silicone Liner Cumulative Milking Hours
                  </label>
                  <input
                    type="number"
                    {...register("siliconeLinerHoursLogged", { valueAsNumber: true })}
                    placeholder="1420"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-blue-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Replace silicone liners every 2,000 milking hours</p>
                </div>

                <Controller
                  name="teatEndHyperkeratosisRisk"
                  control={control}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Teat End Condition Score"
                      modalTitle="Select Teat End Hyperkeratosis Grade"
                      placeholder="Select Condition Grade"
                      options={HYPERKERATOSIS_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>

              {/* Row 5: Technician Name (Single column full width) */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Certified Technician Name <span className="text-rose-500">*</span>
                </label>
                <input
                  {...register("technicianName", { required: "Technician name required" })}
                  placeholder="Kuldeep Varma (DeLaval Certified Tech)"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-bold focus:border-blue-500 outline-none"
                />
              </div>

              {/* Row 6: Diaphragm Checkbox (Single full width) */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("regulatorDiaphragmInspected")}
                    className="mt-0.5 rounded border-stone-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-xs text-stone-600 leading-relaxed font-medium">
                    Servo-regulator diaphragm cleaned of dust, vacuum reservoir moisture trap drained, and oil lubricator drops checked at 3 drops/min.
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
                    className="px-4 py-2.5 rounded-xl border border-blue-200 bg-blue-50 text-xs font-bold text-blue-800 hover:bg-blue-100 transition flex items-center gap-1.5"
                  >
                    {isSavingDraft ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    <span>{isSavingDraft ? "Saving..." : "Save Draft"}</span>
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingForm || isSavingDraft}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs shadow-md shadow-blue-400/40 hover:opacity-95 active:scale-95 transition flex items-center gap-2"
                >
                  {isSubmittingForm ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Calibrating Sensors...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Lock & Certify Calibration</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Calibration Telemetry Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-800 via-indigo-800 to-slate-900 text-white shadow-2xl space-y-4">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-blue-300 block">
                Vacuum Gauge Telemetry
              </span>

              <div className="space-y-1">
                <span className="text-xs text-blue-200">System Vacuum Pressure</span>
                <div className="text-3xl font-black text-white flex items-center gap-2">
                  <span>{watched.vacuumPressureKpa} kPa</span>
                  {isVacuumOptimal ? (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500 text-white font-bold">
                      IDEAL
                    </span>
                  ) : (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500 text-white font-bold">
                      RE-ADJUST
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-blue-200">
                  Target for Murrah buffalo thick teat walls: <strong>48.0 - 50.0 kPa</strong>
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Pulsation Pulse:</span>
                  <span className="font-mono font-bold text-white">{watched.pulsationRatePpm} Pulses / Min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Liner Wear Status:</span>
                  <span className="font-mono text-emerald-300 font-bold">
                    {isLinerDue ? "⚠️ Replace Liners" : `${watched.siliconeLinerHoursLogged}h / 2000h (Good)`}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="font-bold text-stone-600 flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-blue-600" /> Stanchion Calibration Pass
                </span>
                <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-bold">
                  TESTED OK
                </span>
              </div>

              <div className="space-y-2 text-stone-700">
                <div className="flex justify-between">
                  <span>Station:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.parlorStallId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Phase Ratio:</span>
                  <span className="font-bold text-blue-700 truncate max-w-[170px]">{watched.pulsationRatio}</span>
                </div>
                <div className="flex justify-between">
                  <span>Technician:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.technicianName}</span>
                </div>
              </div>

              {calibrationSaved && (
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 text-[11px] flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Station #{calibrationSaved.parlorStallId.slice(0, 15)} certified for next 30 days.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InputSwitcher currentInputId="page-14" />
    </div>
  );
}
