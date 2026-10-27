"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/Toaster";
import { InputSwitcher } from "@/components/InputSwitcher";
import { SearchableSelect } from "@/components/SearchableSelect";
import {
  Baby,
  Save,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  HeartHandshake,
  Loader2,
} from "lucide-react";

interface CalfBirthRegistryForm {
  calfEarTagId: string;
  motherDamTagId: string;
  birthTimestamp: string;
  calfGender: string;
  birthWeightKg: number;
  colostrumIntakeLiters: number;
  colostrumWithinOneHour: boolean;
  navelCordDisinfected: boolean;
  nurseryPenNumber: string;
  assignedCaretakerName: string;
}

const GENDER_OPTIONS = [
  { value: "Female (Heifer Replacement)", label: "Female (Future Milking Replacement - Key Asset)", badge: "Compounding Core", description: "Becomes milking adult in Year 3 to compound herd" },
  { value: "Male (Breeding/Bull)", label: "Male (Breeding Sire Pedigree Candidate)", badge: "Sire Line", description: "High-merit genomic line for selective breeding" },
];

export default function InputPage8() {
  const { toast } = useToast();
  const [calfSaved, setCalfSaved] = useState<CalfBirthRegistryForm | null>(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<CalfBirthRegistryForm>({
    defaultValues: {
      calfEarTagId: "CALF-2026-F088",
      motherDamTagId: "IN-HR-2026-0881",
      birthTimestamp: "2026-10-27T06:15",
      calfGender: "Female (Heifer Replacement)",
      birthWeightKg: 34.5,
      colostrumIntakeLiters: 2.8,
      colostrumWithinOneHour: true,
      navelCordDisinfected: true,
      nurseryPenNumber: "NURSERY-PEN-04",
      assignedCaretakerName: "Sita Ram (Nursery Lead)",
    },
  });

  const watched = watch();

  const isHeifer = watched.calfGender?.includes("Female");
  const colostrumAdequate = (watched.colostrumIntakeLiters || 0) >= 2.5 && watched.colostrumWithinOneHour;

  const onSubmit = async (data: CalfBirthRegistryForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmittingForm(false);
    setCalfSaved(data);
    toast({
      type: "success",
      title: "Newborn Calf Registered Successfully!",
      description: `Tag ${data.calfEarTagId} born to Dam ${data.motherDamTagId}. Weight: ${data.birthWeightKg} kg, First colostrum: ${data.colostrumIntakeLiters}L.`,
    });
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "Neonatal Draft Stored",
      description: "Calf delivery details cached in memory.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/70 via-rose-50/30 to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-pink-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-500 text-white flex items-center justify-center font-black shadow-md shadow-pink-300/40">
              <Baby className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                CALF NEONATAL BIRTH & HEALTH <span className="text-xs px-2 py-0.5 rounded-full bg-pink-100 text-pink-800 font-mono font-bold border border-pink-300">Input Form 08</span>
              </Link>
              <p className="text-[11px] text-pink-700 font-medium">Newborn Calving Log, Golden-Hour Colostrum & Heifer Compounding Pipeline</p>
            </div>
          </div>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-extrabold text-xs shadow-md shadow-pink-300/40 transition"
          >
            Hub Home &rarr;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-pink-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-600">
                Herd Generation Engine
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                Newborn Calf Birth Registry
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Register newborn Murrah calves immediately after birth to trigger colostrum feeding protocols and maternal genetic linkage.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Calf ID & Dam ID (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Newborn Calf Ear Tag ID <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("calfEarTagId", { required: "Calf Tag ID is required" })}
                    placeholder="e.g. CALF-2026-F088"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-pink-500 outline-none"
                  />
                  {errors.calfEarTagId && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.calfEarTagId.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Mother (Dam) Buffalo Ear Tag <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("motherDamTagId", { required: "Mother Tag ID is required" })}
                    placeholder="e.g. IN-HR-2026-0881"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-pink-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Birth Timestamp & Gender (Strict 2 columns with Modal Search Dropdown) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Birth Date & Exact Time</label>
                  <input
                    type="datetime-local"
                    {...register("birthTimestamp", { required: "Birth time required" })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-pink-500 outline-none"
                  />
                </div>

                <Controller
                  name="calfGender"
                  control={control}
                  rules={{ required: "Calf gender required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Calf Gender"
                      modalTitle="Select Calf Gender & Lineage Role"
                      placeholder="Select Gender"
                      options={GENDER_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />
              </div>

              {/* Row 3: Weight & Colostrum Intake (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Birth Weight (kg) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    {...register("birthWeightKg", { min: 20, max: 55, valueAsNumber: true })}
                    placeholder="34.5"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-pink-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Normal Murrah calf birth weight: 30-40 kg</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    First Colostrum Intake (Liters) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("colostrumIntakeLiters", { valueAsNumber: true })}
                    placeholder="2.8"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold text-pink-700 focus:border-pink-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Target: ~10% of body weight (2.5 - 3.5 L)</p>
                </div>
              </div>

              {/* Row 4: Care Toggles (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-pink-50/60 border border-pink-200">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("colostrumWithinOneHour")}
                    className="rounded border-stone-300 text-pink-600 focus:ring-pink-500"
                  />
                  <span className="text-xs font-bold text-stone-800">Colostrum Fed within First 1 Hour</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("navelCordDisinfected")}
                    className="rounded border-stone-300 text-pink-600 focus:ring-pink-500"
                  />
                  <span className="text-xs font-bold text-stone-800">Navel Cord Iodine Dip Applied</span>
                </label>
              </div>

              {/* Row 5: Nursery Pen & Caretaker (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Nursery Heated Pen Location</label>
                  <input
                    {...register("nurseryPenNumber")}
                    placeholder="NURSERY-PEN-04"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:border-pink-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Assigned Caretaker Name</label>
                  <input
                    {...register("assignedCaretakerName")}
                    placeholder="Sita Ram (Nursery Lead)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:border-pink-500 outline-none"
                  />
                </div>
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
                    className="px-4 py-2.5 rounded-xl border border-pink-200 bg-pink-50 text-xs font-bold text-pink-700 hover:bg-pink-100 transition flex items-center gap-1.5"
                  >
                    {isSavingDraft ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    <span>{isSavingDraft ? "Saving..." : "Save Draft"}</span>
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingForm || isSavingDraft}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-black text-xs shadow-md shadow-pink-400/40 hover:opacity-95 active:scale-95 transition flex items-center gap-2"
                >
                  {isSubmittingForm ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Registering Newborn Calf...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Register Newborn Calf</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Calf Telemetry & Compounding Tracker (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Maternal Compounding Asset Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-pink-600 via-rose-600 to-purple-700 text-white shadow-2xl space-y-4">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-pink-200 block">
                Generational Compounding Value
              </span>

              <div>
                <span className="text-xs text-pink-200">Asset Addition to Farm Portfolio</span>
                <div className="text-3xl font-black text-white">
                  {isHeifer ? "+1 Future Milking Buffalo" : "+1 Breeding Line Sire"}
                </div>
                <p className="text-[11px] text-pink-100 mt-1">
                  Maternally linked to high-yield Dam <strong>{watched.motherDamTagId}</strong>
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-pink-100">Colostrum Protocol:</span>
                  <span className="font-bold text-white">
                    {colostrumAdequate ? "✅ Optimum Passive Immunity" : "⚠️ Monitor Immunoglobulins"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-pink-100">Milking Eligibility:</span>
                  <span className="font-mono font-bold text-amber-200">Year 3 (~36 Months Old)</span>
                </div>
              </div>
            </div>

            {/* Neonatal Ledger Card */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="font-bold text-stone-600 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-pink-600" /> Nursery Incubator Log
                </span>
                <span className="text-[10px] bg-pink-100 text-pink-800 px-2 py-0.5 rounded-full font-bold">
                  {watched.nurseryPenNumber}
                </span>
              </div>

              <div className="space-y-2 text-stone-700">
                <div className="flex justify-between">
                  <span>New Calf Tag:</span>
                  <span className="font-bold text-stone-900">{watched.calfEarTagId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Birth Weight:</span>
                  <span className="font-bold text-pink-700">{watched.birthWeightKg} kg</span>
                </div>
                <div className="flex justify-between">
                  <span>Colostrum Fed:</span>
                  <span className="font-bold">{watched.colostrumIntakeLiters} Liters</span>
                </div>
                <div className="flex justify-between">
                  <span>Lead Caretaker:</span>
                  <span className="font-bold text-stone-900">{watched.assignedCaretakerName}</span>
                </div>
              </div>

              {calfSaved && (
                <div className="p-3 rounded-xl bg-pink-50 border border-pink-200 text-pink-950 text-[11px] flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                  <span>Calf #{calfSaved.calfEarTagId} verified in {calfSaved.nurseryPenNumber}.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InputSwitcher currentInputId="page-8" />
    </div>
  );
}
