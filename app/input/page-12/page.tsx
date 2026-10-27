"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/Toaster";
import { InputSwitcher } from "@/components/InputSwitcher";
import { SearchableSelect } from "@/components/SearchableSelect";
import { formatNumber } from "@/lib/dairy-compounding";
import {
  Compass,
  Save,
  RotateCcw,
  CheckCircle2,
  TreePine,
  Sun,
  Loader2,
  Sprout,
} from "lucide-react";

interface PastureRotationForm {
  paddockId: string;
  forageVariety: string;
  herdCohort: string;
  entryDate: string;
  headcountGrazing: number;
  entrySwardHeightCm: number;
  exitTargetHeightCm: number;
  irrigationSchedule: string;
  fieldSupervisorName: string;
  organicFertigationApplied: boolean;
}

const PADDOCK_OPTIONS = [
  { value: "PADDOCK-A1 (Super Napier Hybrid)", label: "Paddock A-1 — Super Napier Co-5 Hybrid (Block East)", badge: "High Yield", description: "Perennial forage yielding up to 150 tonnes/acre/year" },
  { value: "PADDOCK-B2 (Alfalfa Lucerne)", label: "Paddock B-2 — Alfalfa Lucerne Protein Pasture (Block North)", badge: "Protein 22%", description: "Rich legume forage maximizing digestible lysine and calcium" },
  { value: "PADDOCK-C1 (Rhodes & Para Grass)", label: "Paddock C-1 — Rhodes & Para Water Grass (Lowland Marsh)", badge: "Palatable", description: "Soft sweet meadow grass ideal for summer grazing" },
  { value: "PADDOCK-D3 (Barley Hydroponic Meadow)", label: "Paddock D-3 — Fenced Shaded Rotational Pasture", badge: "Shaded", description: "Tree canopy pasture with automated misting sprinklers" },
];

const HERD_COHORT_OPTIONS = [
  { value: "Cohort-1: Peak Milking Dams (15L+)", label: "Cohort 1 — Peak Milking Adult Buffaloes (15L+ Yield)", badge: "Priority", description: "First access to tender leafy forage tops for maximum milk" },
  { value: "Cohort-2: Gestating & Dry Buffaloes", label: "Cohort 2 — Gestating & Dry Buffaloes (Trimester 2/3)", badge: "Resting", description: "Moderate energy maintenance forage with mineral supplements" },
  { value: "Cohort-3: Year-2 Growing Heifers", label: "Cohort 3 — Year-2 Growing Replacement Heifers", badge: "Future Stock", description: "High-protein grazing to stimulate rumen volume development" },
];

const IRRIGATION_OPTIONS = [
  { value: "Drip Solar Fertigation (Biogas Slurry)", label: "Drip Solar Fertigation with Fermented Biogas Slurry", badge: "Organic", description: "Closed-loop nutrient recycling straight from the bio-digester" },
  { value: "Center Pivot Overhead Sprinkler", label: "Center Pivot Overhead Micro-Sprinkler", badge: "Water Saving", description: "Uniform water spray simulating gentle rain" },
  { value: "Furrow Gravity Canal Flow", label: "Furrow Gravity Canal Infiltration", badge: "Canal", description: "Deep root soaking prior to 21-day pasture resting period" },
];

export default function InputPage12() {
  const { toast } = useToast();
  const [rotationSaved, setRotationSaved] = useState<PastureRotationForm | null>(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<PastureRotationForm>({
    defaultValues: {
      paddockId: "PADDOCK-A1 (Super Napier Hybrid)",
      forageVariety: "Super Napier Co-5 High Protein",
      herdCohort: "Cohort-1: Peak Milking Dams (15L+)",
      entryDate: "2026-10-27",
      headcountGrazing: 42,
      entrySwardHeightCm: 95,
      exitTargetHeightCm: 25,
      irrigationSchedule: "Drip Solar Fertigation (Biogas Slurry)",
      fieldSupervisorName: "Hardeep Singh Dhillon",
      organicFertigationApplied: true,
    },
  });

  const watched = watch();

  const forageConsumedCm = Math.max(0, (watched.entrySwardHeightCm || 95) - (watched.exitTargetHeightCm || 25));
  const estimatedIntakeKgPerHead = Math.round(forageConsumedCm * 0.45 * 10) / 10;

  const onSubmit = async (data: PastureRotationForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmittingForm(false);
    setRotationSaved(data);
    toast({
      type: "success",
      title: "Pasture Grazing Shift Logged!",
      description: `${data.headcountGrazing} animals moved to ${data.paddockId}. Sward height: ${data.entrySwardHeightCm}cm.`,
    });
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "Pasture Draft Stored",
      description: "Paddock rotation coordinates cached in memory.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/70 via-teal-50/20 to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-emerald-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-green-600 text-white flex items-center justify-center font-black shadow-md shadow-emerald-300/40">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                PASTURE GRAZING & FORAGE ROTATION <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-bold border border-emerald-300">Input Form 12</span>
              </Link>
              <p className="text-[11px] text-emerald-700 font-medium">Rotational Grazing Paddock Allocation, Sward Height & Organic Fertigation</p>
            </div>
          </div>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md shadow-emerald-300/40 transition"
          >
            Hub Home &rarr;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-emerald-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                Regenerative Agronomy
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                Field Paddock Rotation Entry
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Track rotational mob-grazing to prevent pasture soil compaction and ensure high-succulence green fodder availability all 365 days.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Paddock & Entry Date (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="paddockId"
                  control={control}
                  rules={{ required: "Paddock is required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Rotational Paddock Plot"
                      modalTitle="Select Grazing Pasture Plot"
                      placeholder="Select Paddock Plot"
                      options={PADDOCK_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Grazing Entry Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    {...register("entryDate", { required: "Date is required" })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-emerald-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Herd Cohort & Grazing Headcount (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="herdCohort"
                  control={control}
                  rules={{ required: "Herd cohort required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Grazing Herd Group / Cohort"
                      modalTitle="Select Buffalo Herd Group"
                      placeholder="Select Herd Cohort"
                      options={HERD_COHORT_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Headcount Grazing (Animals) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("headcountGrazing", { required: "Headcount required", min: 1, valueAsNumber: true })}
                    placeholder="42"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-emerald-950 focus:border-emerald-500 outline-none"
                  />
                  {errors.headcountGrazing && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.headcountGrazing.message}</p>}
                </div>
              </div>

              {/* Row 3: Sward Entry Height & Exit Stubble Target (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Pre-Grazing Sward Height (cm) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("entrySwardHeightCm", { required: "Height required", valueAsNumber: true })}
                    placeholder="95"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-emerald-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Super Napier ideal grazing height: 90-110 cm</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Target Residual Stubble Height (cm) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("exitTargetHeightCm", { required: "Residual target required", valueAsNumber: true })}
                    placeholder="25"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold text-amber-700 focus:border-emerald-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Leave 20-25 cm for fast ratooning regrowth</p>
                </div>
              </div>

              {/* Row 4: Irrigation Schedule & Supervisor (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="irrigationSchedule"
                  control={control}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Post-Grazing Irrigation & Fertigation"
                      modalTitle="Select Irrigation / Slurry System"
                      placeholder="Select Irrigation Method"
                      options={IRRIGATION_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Field Supervisor Sign-Off <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("fieldSupervisorName", { required: "Supervisor name required" })}
                    placeholder="Hardeep Singh Dhillon"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:border-emerald-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 5: Organic Slurry Fertigation Checkbox (Single full width) */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("organicFertigationApplied")}
                    className="mt-0.5 rounded border-stone-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-xs text-stone-600 leading-relaxed font-medium">
                    Apply 1,200 Liters of fermented bio-methane digester slurry via irrigation nozzles within 48 hours to speed up 21-day regrowth.
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
                    className="px-4 py-2.5 rounded-xl border border-emerald-200 bg-emerald-50 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition flex items-center gap-1.5"
                  >
                    {isSavingDraft ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    <span>{isSavingDraft ? "Saving..." : "Save Draft"}</span>
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingForm || isSavingDraft}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-black text-xs shadow-md shadow-emerald-400/40 hover:opacity-95 active:scale-95 transition flex items-center gap-2"
                >
                  {isSubmittingForm ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Recording Pasture Shift...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Log Paddock Grazing Shift</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Agronomy Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-800 via-teal-800 to-stone-900 text-white shadow-2xl space-y-4">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-emerald-300 block">
                Forage Biomass Harvesting
              </span>

              <div className="space-y-1">
                <span className="text-xs text-emerald-200">Estimated Fresh Forage Harvested</span>
                <div className="text-3xl font-black text-emerald-100">
                  ~{forageConsumedCm} cm Grazed
                </div>
                <p className="text-[11px] text-emerald-300">
                  Provides approx <strong>~{estimatedIntakeKgPerHead} kg</strong> fresh green matter per adult buffalo today
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-200">Target Rest Period:</span>
                  <span className="font-mono font-bold text-white">21 Days Regrowth Cycle</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-200">Soil Infiltration:</span>
                  <span className="font-mono text-emerald-300">{watched.irrigationSchedule}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="font-bold text-stone-600 flex items-center gap-1.5">
                  <TreePine className="w-4 h-4 text-emerald-600" /> Plot Rotation Manifest
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                  ACTIVE MOB
                </span>
              </div>

              <div className="space-y-2 text-stone-700">
                <div className="flex justify-between">
                  <span>Paddock:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.paddockId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cohort:</span>
                  <span className="font-bold text-emerald-700 truncate max-w-[170px]">{watched.herdCohort}</span>
                </div>
                <div className="flex justify-between">
                  <span>Headcount:</span>
                  <span className="font-bold">{watched.headcountGrazing} Buffaloes</span>
                </div>
                <div className="flex justify-between">
                  <span>Supervisor:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.fieldSupervisorName}</span>
                </div>
              </div>

              {rotationSaved && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-[11px] flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Paddock shift confirmed for {rotationSaved.headcountGrazing} animals.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InputSwitcher currentInputId="page-12" />
    </div>
  );
}
