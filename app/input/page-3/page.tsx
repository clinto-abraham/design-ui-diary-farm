"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/Toaster";
import { InputSwitcher } from "@/components/InputSwitcher";
import { SearchableSelect } from "@/components/SearchableSelect";
import {
  Sparkles,
  Calendar,
  Save,
  RotateCcw,
  CheckCircle2,
  Syringe,
  Dna,
  Loader2,
} from "lucide-react";

interface ArtificialInseminationForm {
  tagId: string;
  inseminationDate: string;
  semenStrawBatch: string;
  bullSireName: string;
  semenType: string;
  strawSourceLab: string;
  inseminatorVetName: string;
  vetLicenseNumber: string;
  heatSignsObserved: string;
  cowTemperament: string;
}

const SEMEN_TYPE_OPTIONS = [
  {
    value: "Sex-Sorted Female (90%+ Accuracy)",
    label: "Sex-Sorted Female Straw (90%+ Heifer Probability)",
    badge: "Compounding Max",
    description: "Guarantees female calves to accelerate 10-year herd expansion",
  },
  {
    value: "Conventional High-Yield Sire",
    label: "Conventional High-Yield Proven Sire Straw",
    badge: "50/50 Gender",
    description: "Championship lineage for maximum milk fat genetics",
  },
  {
    value: "Imported Murrah Cryo-Straw",
    label: "Imported Murrah Cryo-Straw (NDDB National Gene Bank)",
    badge: "Elite Pedigree",
    description: "Mother dam yield recorded above 28 Liters/day",
  },
];

export default function InputPage3() {
  const { toast } = useToast();
  const [recordSaved, setRecordSaved] = useState<ArtificialInseminationForm | null>(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<ArtificialInseminationForm>({
    defaultValues: {
      tagId: "IN-HR-2026-0881",
      inseminationDate: "2026-10-27",
      semenStrawBatch: "ABS-MURRAH-SS-9921",
      bullSireName: "SULTAN-II (Grand Champion 28L Sire)",
      semenType: "Sex-Sorted Female (90%+ Accuracy)",
      strawSourceLab: "ABS India / Haryana Livestock Development Board",
      inseminatorVetName: "Dr. Vikram Singh (Chief BVO)",
      vetLicenseNumber: "HVC-2018-9941",
      heatSignsObserved: "Bellowing, transparent mucous discharge, standing heat confirmed",
      cowTemperament: "Calm, accepted artificial pipette without stress",
    },
  });

  const watched = watch();

  // Gestation Milestones (Buffalo gestation average = 310 days)
  const baseDate = watched.inseminationDate ? new Date(watched.inseminationDate) : new Date();
  
  // Pregnancy Diagnosis (PD) check at 60 days
  const pdDate = new Date(baseDate);
  pdDate.setDate(pdDate.getDate() + 60);

  // Expected Calving Date (+310 days)
  const calvingDate = new Date(baseDate);
  calvingDate.setDate(calvingDate.getDate() + 310);

  const formatDateStr = (d: Date) =>
    isNaN(d.getTime()) ? "Invalid Date" : d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

  const onSubmit = async (data: ArtificialInseminationForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmittingForm(false);
    setRecordSaved(data);
    toast({
      type: "success",
      title: "AI Insemination Logged & Gestation Scheduled!",
      description: `Buffalo ${data.tagId} inseminated with ${data.semenStrawBatch}. Calving scheduled around ${formatDateStr(calvingDate)}.`,
    });
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "Draft Preserved",
      description: "AI breeding log saved to temporary local memory.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/70 via-pink-50/30 to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-purple-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center font-black shadow-md shadow-purple-300/40">
              <Dna className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                GENETIC AI BREEDING LOG <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 font-mono font-bold border border-purple-300">Input Form 03</span>
              </Link>
              <p className="text-[11px] text-purple-700 font-medium">Sex-Sorted Semen Insemination, Vet Verification & 310-Day Gestation</p>
            </div>
          </div>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-md shadow-purple-300/40 transition"
          >
            Hub Home &rarr;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-purple-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600">
                Biological Compounding Protocol
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                Artificial Insemination Record
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Every adult buffalo must receive sex-sorted semen during natural estrus to guarantee female calf births.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Buffalo ID & Date (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Buffalo Ear Tag ID <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("tagId", { required: "Tag ID is mandatory" })}
                    placeholder="e.g. IN-HR-2026-0881"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                  />
                  {errors.tagId && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.tagId.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Insemination Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    {...register("inseminationDate", { required: "Date is required" })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-purple-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Straw Batch & Bull Sire Name (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Cryo-Straw Batch Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("semenStrawBatch", { required: "Straw batch is required" })}
                    placeholder="e.g. ABS-MURRAH-SS-9921"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-purple-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Bull Sire Pedigree Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("bullSireName", { required: "Sire name required" })}
                    placeholder="e.g. SULTAN-II"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:border-purple-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Semen Type & Lab Source (Strict 2 columns with Modal Search Dropdown) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="semenType"
                  control={control}
                  rules={{ required: "Semen type is required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Semen Straw Classification"
                      modalTitle="Select Semen Straw Genetic Grade"
                      placeholder="Select Straw Type"
                      options={SEMEN_TYPE_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Semen Bank / Lab Source</label>
                  <input
                    {...register("strawSourceLab")}
                    placeholder="e.g. ABS India / NDDB Semen Station"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:border-purple-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 4: Vet Name & License (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Attending Inseminator Vet <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("inseminatorVetName", { required: "Vet name required" })}
                    placeholder="Dr. Vikram Singh"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:border-purple-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Veterinary Council License #</label>
                  <input
                    {...register("vetLicenseNumber")}
                    placeholder="HVC-2018-9941"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-purple-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 5: Heat Signs (Single column full width) */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Estrus / Heat Symptoms Observed</label>
                <textarea
                  {...register("heatSignsObserved")}
                  rows={2}
                  placeholder="Note mucous clarity, vaginal dilation, standing heat response..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:border-purple-500 outline-none"
                />
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
                    className="px-4 py-2.5 rounded-xl border border-purple-200 bg-purple-50 text-xs font-bold text-purple-700 hover:bg-purple-100 transition flex items-center gap-1.5"
                  >
                    {isSavingDraft ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    <span>{isSavingDraft ? "Saving..." : "Save Draft"}</span>
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingForm || isSavingDraft}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-xs shadow-md shadow-purple-400/40 hover:opacity-95 active:scale-95 transition flex items-center gap-2"
                >
                  {isSubmittingForm ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Logging AI Insemination...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Log Insemination & Calving</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Gestation Timeline (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Gestation Milestones Card */}
            <div className="p-6 rounded-3xl bg-white border border-purple-200 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <span className="text-xs font-bold uppercase text-purple-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-600" /> Buffalo 310-Day Gestation Tracker
                </span>
                <span className="text-[10px] font-mono bg-purple-100 text-purple-900 font-bold px-2 py-0.5 rounded-full">
                  AI Cycle #01
                </span>
              </div>

              {/* Gestation Milestones Stepper */}
              <div className="space-y-4 relative pl-6 border-l-2 border-purple-200">
                {/* Step 1 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-purple-600 border-2 border-white shadow-xs" />
                  <span className="text-[10px] font-mono text-purple-600 font-bold uppercase block">Day 0 (Insemination)</span>
                  <p className="text-xs font-bold text-stone-900">{formatDateStr(baseDate)}</p>
                  <p className="text-[11px] text-stone-500">Straw {watched.semenStrawBatch || "Pending"}</p>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-amber-400 border-2 border-white shadow-xs" />
                  <span className="text-[10px] font-mono text-amber-600 font-bold uppercase block">Day 60 (Pregnancy Check)</span>
                  <p className="text-xs font-bold text-stone-900">{formatDateStr(pdDate)}</p>
                  <p className="text-[11px] text-stone-500">Per-rectal ultrasonic confirmation by vet</p>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-pink-500 border-2 border-white shadow-xs" />
                  <span className="text-[10px] font-mono text-pink-600 font-bold uppercase block">Day 310 (Expected Calving)</span>
                  <p className="text-sm font-black text-pink-700">{formatDateStr(calvingDate)}</p>
                  <p className="text-[11px] text-pink-900 font-medium">90% chance of female Murrah calf born!</p>
                </div>
              </div>

              {/* Sex-Sorted Advantage Callout */}
              <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200 text-xs text-purple-950 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-purple-900">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" /> Compounding Accelerator
                </div>
                <p className="text-[11px] leading-relaxed">
                  Using sex-sorted artificial insemination eliminates unwanted male calves, multiplying the milking herd by 1 calf per adult per year.
                </p>
              </div>

              {recordSaved && (
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Record Verified:</strong> Buffalo {recordSaved.tagId} successfully queued for Day-60 veterinary reminder.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InputSwitcher currentInputId="page-3" />
    </div>
  );
}
