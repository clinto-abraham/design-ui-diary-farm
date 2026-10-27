"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/Toaster";
import { InputSwitcher } from "@/components/InputSwitcher";
import { SearchableSelect } from "@/components/SearchableSelect";
import {
  Stethoscope,
  Save,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Loader2,
} from "lucide-react";

interface VeterinaryLogForm {
  tagId: string;
  treatmentDate: string;
  clinicalCategory: string;
  medicineName: string;
  dosageMl: number;
  administrationRoute: string;
  attendingVetName: string;
  milkWithdrawalDays: number;
  nextBoosterDate: string;
  clinicalDiagnosis: string;
}

const CLINICAL_CATEGORY_OPTIONS = [
  { value: "Routine Vaccination", label: "Routine Vaccination (FMD / HS / BQ)", badge: "Preventive", description: "Mandatory seasonal herd immunization" },
  { value: "Seasonal Deworming", label: "Seasonal Deworming (Ivermectin / Albendazole)", badge: "Parasite Control", description: "Scheduled oral or injectable parasite flush" },
  { value: "Mastitis Treatment", label: "Mastitis Antibiotic Treatment", badge: "Milk Withdrawal", description: "Targeted intramammary and systemic antimicrobials" },
  { value: "Mineral Deficiency", label: "Mineral & Calcium Borogluconate Infusion", badge: "Metabolic", description: "Post-calving milk fever and hypocalcemia therapy" },
  { value: "Hoof Care & Foot Rot", label: "Hoof Care & Foot Rot Dressing", badge: "Locomotion", description: "Copper sulfate footbath & antiseptic bandage" },
];

const ROUTE_OPTIONS = [
  { value: "Subcutaneous (SC)", label: "Subcutaneous (SC - Loose neck fold)", description: "Slow absorption beneath the dermis" },
  { value: "Intramuscular (IM)", label: "Intramuscular (IM - Rump/Gluteal muscle)", description: "Rapid systemic vascular delivery" },
  { value: "Intravenous (IV)", label: "Intravenous (IV - Jugular vein slow drip)", description: "Direct blood stream administration" },
  { value: "Oral Drench", label: "Oral Drench / Ruminal Bolus", description: "Direct digestive tract ingestion" },
];

export default function InputPage4() {
  const { toast } = useToast();
  const [logSaved, setLogSaved] = useState<VeterinaryLogForm | null>(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<VeterinaryLogForm>({
    defaultValues: {
      tagId: "IN-HR-2026-0881",
      treatmentDate: "2026-10-27",
      clinicalCategory: "Routine Vaccination",
      medicineName: "Raksha Ovac (Foot-and-Mouth Disease FMD Booster)",
      dosageMl: 3.0,
      administrationRoute: "Subcutaneous (SC)",
      attendingVetName: "Dr. Ananya Sharma (Veterinary Surgeon)",
      milkWithdrawalDays: 0,
      nextBoosterDate: "2027-04-27",
      clinicalDiagnosis: "Biannual preventive vaccination booster against FMD virus O, A & Asia-1 strains.",
    },
  });

  const watched = watch();

  const onSubmit = async (data: VeterinaryLogForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmittingForm(false);
    setLogSaved(data);
    toast({
      type: data.milkWithdrawalDays > 0 ? "warning" : "success",
      title: data.milkWithdrawalDays > 0 ? "⚠️ Milk Withdrawal Period Active!" : "Clinical Log Saved Successfully",
      description: data.milkWithdrawalDays > 0
        ? `Buffalo ${data.tagId} treated with ${data.medicineName}. Do NOT sell milk for ${data.milkWithdrawalDays} days!`
        : `Routine treatment logged for ${data.tagId}. Booster scheduled on ${data.nextBoosterDate}.`,
    });
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "Draft Health Entry Preserved",
      description: "Clinical notes cached locally.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/70 via-emerald-50/20 to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-rose-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-red-500 text-white flex items-center justify-center font-black shadow-md shadow-rose-300/40">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                HERD HEALTH & VET CLINICAL LOG <span className="text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-mono font-bold border border-rose-300">Input Form 04</span>
              </Link>
              <p className="text-[11px] text-rose-700 font-medium">Bovine Health Records, FMD/Brucella Vaccines & Food Safety Withdrawal</p>
            </div>
          </div>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs shadow-md shadow-rose-300/40 transition"
          >
            Hub Home &rarr;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-rose-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
                Veterinary Medical Journal
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                Clinical Health & Vaccine Entry
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Record medical doses, veterinary diagnoses, and antibiotic withdrawal periods to ensure 100% organic A2 purity.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Animal ID & Treatment Date (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Buffalo Ear Tag ID <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("tagId", { required: "Animal Tag ID is required" })}
                    placeholder="e.g. IN-HR-2026-0881"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-rose-500 outline-none"
                  />
                  {errors.tagId && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.tagId.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Date of Treatment <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    {...register("treatmentDate", { required: "Date is required" })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-rose-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Category & Medicine Name (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="clinicalCategory"
                  control={control}
                  rules={{ required: "Clinical category required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Clinical Category"
                      modalTitle="Select Veterinary Health Category"
                      placeholder="Select Category"
                      options={CLINICAL_CATEGORY_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Medicine / Vaccine Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("medicineName", { required: "Medicine name required" })}
                    placeholder="e.g. Raksha Ovac FMD Vaccine"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:border-rose-500 outline-none"
                  />
                  {errors.medicineName && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.medicineName.message}</p>}
                </div>
              </div>

              {/* Row 3: Dosage & Route (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Dosage Administered (ml / mg)</label>
                  <input
                    type="number"
                    step="0.5"
                    {...register("dosageMl", { valueAsNumber: true })}
                    placeholder="3.0"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-rose-500 outline-none"
                  />
                </div>

                <Controller
                  name="administrationRoute"
                  control={control}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Administration Route"
                      modalTitle="Select Clinical Administration Route"
                      placeholder="Select Route"
                      options={ROUTE_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>

              {/* Row 4: Withdrawal Days & Booster Date (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Milk Withdrawal Period (Days) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("milkWithdrawalDays", {
                      required: "Withdrawal period must be specified (0 if none)",
                      valueAsNumber: true,
                    })}
                    placeholder="0"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-rose-600 focus:border-rose-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Set to 0 for vaccines, or 3-7 days for antibiotics.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Next Scheduled Booster Date</label>
                  <input
                    type="date"
                    {...register("nextBoosterDate")}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-rose-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 5: Attending Vet Name (Single column full width) */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Attending Veterinarian Name</label>
                <input
                  {...register("attendingVetName")}
                  placeholder="e.g. Dr. Ananya Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:border-rose-500 outline-none"
                />
              </div>

              {/* Row 6: Clinical Diagnosis (Single column full width) */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Clinical Diagnosis & Findings</label>
                <textarea
                  {...register("clinicalDiagnosis")}
                  rows={2}
                  placeholder="Describe symptoms, body temperature, mucosal color, treatment outcome..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:border-rose-500 outline-none"
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
                    className="px-4 py-2.5 rounded-xl border border-rose-200 bg-rose-50 text-xs font-bold text-rose-700 hover:bg-rose-100 transition flex items-center gap-1.5"
                  >
                    {isSavingDraft ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    <span>{isSavingDraft ? "Saving..." : "Save Draft"}</span>
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingForm || isSavingDraft}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-black text-xs shadow-md shadow-rose-400/40 hover:opacity-95 active:scale-95 transition flex items-center gap-2"
                >
                  {isSubmittingForm ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Recording Medical Entry...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Save Medical Entry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Safety Badge & Withdrawal Monitor (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Withdrawal Warning Card */}
            {watched.milkWithdrawalDays > 0 ? (
              <div className="p-6 rounded-3xl bg-rose-500 text-white shadow-2xl space-y-3">
                <div className="flex items-center gap-2 font-black text-sm uppercase tracking-wider">
                  <AlertTriangle className="w-5 h-5 text-yellow-300 animate-bounce" />
                  Food Safety: Milk Dump Protocol Active
                </div>
                <p className="text-xs text-rose-100 leading-relaxed font-medium">
                  Buffalo <strong>{watched.tagId}</strong> has a <strong>{watched.milkWithdrawalDays}-Day</strong> milk withholding window. All milk produced during this period MUST be discarded to maintain organic non-antibiotic purity standards.
                </p>
                <div className="py-2 px-3 bg-white/20 rounded-xl text-center font-mono font-bold text-xs">
                  Estimated Clean Date: +{watched.milkWithdrawalDays} Days from treatment
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-3xl bg-emerald-600 text-white shadow-2xl space-y-3">
                <div className="flex items-center gap-2 font-black text-sm uppercase tracking-wider">
                  <CheckCircle2 className="w-5 h-5 text-emerald-200" />
                  Zero Milk Withdrawal (Safe to Sell)
                </div>
                <p className="text-xs text-emerald-100 leading-relaxed font-medium">
                  Treatment carries zero residual chemical risk. Milk from Buffalo <strong>{watched.tagId}</strong> can be safely pooled into the bulk milk chiller immediately.
                </p>
              </div>
            )}

            {/* Treatment Summary Ledger Card */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-3 font-mono text-xs">
              <span className="text-[10px] font-bold uppercase text-stone-500 block pb-2 border-b border-stone-100">
                Clinical Prescription Summary
              </span>

              <div className="space-y-2 text-stone-700">
                <div className="flex justify-between">
                  <span>Target Animal:</span>
                  <span className="font-bold text-stone-900">{watched.tagId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Category:</span>
                  <span className="font-bold text-rose-700">{watched.clinicalCategory}</span>
                </div>
                <div className="flex justify-between">
                  <span>Medicine:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[180px]">{watched.medicineName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Dosage:</span>
                  <span className="font-bold">{watched.dosageMl} ml via {watched.administrationRoute}</span>
                </div>
                <div className="flex justify-between">
                  <span>Next Booster:</span>
                  <span className="font-bold text-emerald-700">{watched.nextBoosterDate || "None"}</span>
                </div>
              </div>

              {logSaved && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-[11px] flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Entry #{logSaved.tagId.slice(-4)} verified by {logSaved.attendingVetName}.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InputSwitcher currentInputId="page-4" />
    </div>
  );
}
