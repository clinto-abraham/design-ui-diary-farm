"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/Toaster";
import { InputSwitcher } from "@/components/InputSwitcher";
import { SearchableSelect } from "@/components/SearchableSelect";
import { formatNumber } from "@/lib/dairy-compounding";
import {
  Flame,
  Save,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Award,
  CookingPot,
  Loader2,
} from "lucide-react";

interface BilonaGheeBatchForm {
  batchSerialNumber: string;
  cookingDate: string;
  milkInputLiters: number;
  curdFermentationHours: number;
  churnDurationMinutes: number;
  makkhanButterRecoveryKg: number;
  slowClarificationTempC: number;
  finalGheeYieldKg: number;
  aromaGranulationGrade: string;
  packagingVessel: string;
  masterArtisanName: string;
  cowdungBriquetteFireUsed: boolean;
}

const AROMA_GRADE_OPTIONS = [
  { value: "Grade A+ Danedar Sandalwood Golden", label: "Grade A+ — Royal Danedar Granular (Sandalwood Golden Tint)", badge: "Flagship Luxury", description: "Rich nutty aroma, micro-granular crystallization, 99.8% milk fat" },
  { value: "Grade A Sweet Cultured Caramel", label: "Grade A — Sweet Cultured Caramel Fragrance", badge: "Premium", description: "Traditional clay-pot curd note with silky golden texture" },
  { value: "Grade B Standard Cultured Ghee", label: "Grade B — Standard Cultured Buffalo Ghee", badge: "Standard", description: "Mild aroma, suitable for bulk culinary confectionery" },
];

const PACKAGING_VESSEL_OPTIONS = [
  { value: "1000ml Amber UV-Shield Glass Jar", label: "1,000 ml Amber UV-Shield Glass Jar (Gold Foil Cap)", badge: "Retail 1L", description: "Blocks light oxidation to preserve CLA and vitamin A" },
  { value: "500ml Hexagonal Clear Glass Jar", label: "500 ml Hexagonal Luxury Faceted Glass Jar", badge: "Gift Edition", description: "Showcases granular danedar crystals on retail shelves" },
  { value: "5000ml Food-Grade Tin Canister", label: "5,000 ml Food-Grade Lacquered Golden Tin", badge: "Family Bulk", description: "Airtight vacuum sealed for long term 12-month pantry stability" },
];

export default function InputPage15() {
  const { toast } = useToast();
  const [batchSaved, setBatchSaved] = useState<BilonaGheeBatchForm | null>(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<BilonaGheeBatchForm>({
    defaultValues: {
      batchSerialNumber: "BILONA-GHEE-2026-B88",
      cookingDate: "2026-10-27",
      milkInputLiters: 400,
      curdFermentationHours: 16,
      churnDurationMinutes: 45,
      makkhanButterRecoveryKg: 34.5,
      slowClarificationTempC: 118,
      finalGheeYieldKg: 28.2,
      aromaGranulationGrade: "Grade A+ Danedar Sandalwood Golden",
      packagingVessel: "1000ml Amber UV-Shield Glass Jar",
      masterArtisanName: "Pandit Ramkishan Sharma",
      cowdungBriquetteFireUsed: true,
    },
  });

  const watched = watch();

  const milkToGheeRatio = watched.finalGheeYieldKg && watched.milkInputLiters
    ? Math.round((watched.milkInputLiters / watched.finalGheeYieldKg) * 10) / 10
    : 14.2;

  const estimatedMarketValueINR = (watched.finalGheeYieldKg || 28.2) * 2400; // ₹2,400 per kg premium artisanal Bilona ghee

  const onSubmit = async (data: BilonaGheeBatchForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmittingForm(false);
    setBatchSaved(data);
    toast({
      type: "success",
      title: "Artisanal Bilona Ghee Batch Logged!",
      description: `Batch ${data.batchSerialNumber}: ${data.finalGheeYieldKg} kg of ${data.aromaGranulationGrade} produced from ${data.milkInputLiters}L milk. Market value: ₹${formatNumber(estimatedMarketValueINR)}.`,
    });
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "Ghee Batch Draft Preserved",
      description: "Artisanal culinary log numbers cached safely.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/80 via-yellow-50/30 to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-amber-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-600 text-white flex items-center justify-center font-black shadow-md shadow-amber-300/40">
              <CookingPot className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                ARTISANAL BILONA A2 GHEE BATCH <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-mono font-bold border border-amber-300">Input Form 15</span>
              </Link>
              <p className="text-[11px] text-amber-700 font-medium">Curd Culturing, Wooden Bi-Directional Churn, Brass Kadai Clarification & Danedar Texture</p>
            </div>
          </div>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-md shadow-amber-300/40 transition"
          >
            Hub Home &rarr;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-amber-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
                Vedic Dairy Craftsmanship
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                Bilona A2 Ghee Processing Log
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Document traditional 5-step Bilona craft: whole milk boiling, clay pot curd setting, wooden churning, makkhan washing, and slow brass clarification.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Batch Serial & Date (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Bilona Batch Serial # <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("batchSerialNumber", { required: "Batch serial required" })}
                    placeholder="BILONA-GHEE-2026-B88"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-amber-500 outline-none uppercase"
                  />
                  {errors.batchSerialNumber && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.batchSerialNumber.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Processing Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    {...register("cookingDate", { required: "Date is required" })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-amber-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Milk Input & Curd Hours (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Raw Whole Buffalo Milk Input (Liters) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("milkInputLiters", { required: "Milk volume required", min: 10, valueAsNumber: true })}
                    placeholder="400"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-amber-950 focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Earthen Pot Curd Setting (Hours) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("curdFermentationHours", { required: "Curd hours required", valueAsNumber: true })}
                    placeholder="16"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-amber-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Natural slow incubation in clay mitti handis: 14-18 hours</p>
                </div>
              </div>

              {/* Row 3: Churn Minutes & Makkhan Butter Recovery (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Wooden Churn Duration (Minutes)
                  </label>
                  <input
                    type="number"
                    {...register("churnDurationMinutes", { valueAsNumber: true })}
                    placeholder="45"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Makkhan (Raw Butter) Recovered (kg) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("makkhanButterRecoveryKg", { required: "Butter yield required", valueAsNumber: true })}
                    placeholder="34.5"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-amber-900 focus:border-amber-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 4: Clarification Temp & Final Ghee Yield (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Slow-Clarification Fire Temp (°C) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("slowClarificationTempC", {
                      min: { value: 110, message: "Temp must reach 110-120°C for milk solid caramelization" },
                      max: 125,
                      valueAsNumber: true,
                    })}
                    placeholder="118"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-amber-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Optimal brass kadai simmer: 115 - 120°C</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Net Filtered A2 Ghee Yield (kg) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("finalGheeYieldKg", { required: "Final ghee weight required", valueAsNumber: true })}
                    placeholder="28.2"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-amber-950 focus:border-amber-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 5: Aroma Grade & Packaging Vessel (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="aromaGranulationGrade"
                  control={control}
                  rules={{ required: "Grade is required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Danedar Granulation Grade"
                      modalTitle="Select Ghee Aroma & Grain Grade"
                      placeholder="Select Texture Grade"
                      options={AROMA_GRADE_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <Controller
                  name="packagingVessel"
                  control={control}
                  rules={{ required: "Packaging required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Bottling Vessel Unit"
                      modalTitle="Select Packaging Jar / Vessel"
                      placeholder="Select Vessel"
                      options={PACKAGING_VESSEL_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />
              </div>

              {/* Row 6: Master Artisan Name (Single column full width) */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Master Bilona Artisan Chef <span className="text-rose-500">*</span>
                </label>
                <input
                  {...register("masterArtisanName", { required: "Artisan name required" })}
                  placeholder="Pandit Ramkishan Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-bold focus:border-amber-500 outline-none"
                />
              </div>

              {/* Row 7: Dung Briquette Fire Checkbox (Single full width) */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("cowdungBriquetteFireUsed")}
                    className="mt-0.5 rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-xs text-stone-600 leading-relaxed font-medium">
                    Simmered exclusively over sun-dried desi cowdung briquette embers with neem wood in a heavy tin-coated copper/brass kadai.
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
                    className="px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50 text-xs font-bold text-amber-800 hover:bg-amber-100 transition flex items-center gap-1.5"
                  >
                    {isSavingDraft ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    <span>{isSavingDraft ? "Saving..." : "Save Draft"}</span>
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingForm || isSavingDraft}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-black text-xs shadow-md shadow-amber-400/40 hover:opacity-95 active:scale-95 transition flex items-center gap-2"
                >
                  {isSubmittingForm ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sealing Artisanal Batch...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Certify & Seal Ghee Batch</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Ghee Yield & Value Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-800 via-yellow-800 to-stone-900 text-white shadow-2xl space-y-4">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-amber-300 block">
                Artisanal Value Addition
              </span>

              <div className="space-y-1">
                <span className="text-xs text-amber-200">Retail Batch Valuation</span>
                <div className="text-3xl font-black text-amber-100">
                  ₹{formatNumber(estimatedMarketValueINR)}
                </div>
                <p className="text-[11px] text-amber-300">
                  {watched.finalGheeYieldKg} kg pure Bilona Ghee @ ₹2,400/kg (Direct D2C)
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-amber-200">Milk-to-Ghee Ratio:</span>
                  <span className="font-mono font-bold text-white">{milkToGheeRatio} Liters / 1 kg Ghee</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-200">Danedar Texture:</span>
                  <span className="font-mono text-emerald-300 font-bold truncate max-w-[170px]">{watched.aromaGranulationGrade}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="font-bold text-stone-600 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-600" /> Vedic Batch Certificate
                </span>
                <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
                  AUTHENTIC BILONA
                </span>
              </div>

              <div className="space-y-2 text-stone-700">
                <div className="flex justify-between">
                  <span>Batch Serial:</span>
                  <span className="font-bold text-stone-900">{watched.batchSerialNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span>Vessel Bottled:</span>
                  <span className="font-bold text-amber-700 truncate max-w-[170px]">{watched.packagingVessel}</span>
                </div>
                <div className="flex justify-between">
                  <span>Master Chef:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.masterArtisanName}</span>
                </div>
              </div>

              {batchSaved && (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-[11px] flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Batch #{batchSaved.batchSerialNumber} approved for luxury retail distribution.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InputSwitcher currentInputId="page-15" />
    </div>
  );
}
