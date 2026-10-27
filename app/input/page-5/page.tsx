"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/Toaster";
import { InputSwitcher } from "@/components/InputSwitcher";
import { SearchableSelect } from "@/components/SearchableSelect";
import { formatNumber } from "@/lib/dairy-compounding";
import {
  Wheat,
  Save,
  RotateCcw,
  CheckCircle2,
  TrendingDown,
  Warehouse,
  Loader2,
} from "lucide-react";

interface FeedInventoryForm {
  feedType: string;
  batchSiloId: string;
  quantityKg: number;
  costPerKgINR: number;
  moisturePercentage: number;
  crudeProteinPercentage: number;
  supplierFarmPlot: string;
  qualityAromaScore: string;
  dailyRationTargetAnimals: number;
}

const FEED_TYPE_OPTIONS = [
  { value: "Green Hybrid Napier Grass", label: "Green Hybrid Napier Grass (High Succulence)", badge: "Fodder", description: "Fresh green chop, 8-10% crude protein, high palatability" },
  { value: "Fermented Corn Silage", label: "Fermented Corn Silage (High Energy Starch)", badge: "Energy 68% TDN", description: "Pits compacted at 68% moisture with lactic acid inoculant" },
  { value: "Dry Wheat Straw (Bhusa)", label: "Dry Wheat Straw / Bhusa (Rumen Fibre)", badge: "Dry Roughage", description: "Effective fibre for cud chewing and rumen pH stabilization" },
  { value: "Cottonseed Cake Concentrate", label: "Cottonseed Cake (High Butterfat Booster)", badge: "Protein 24%", description: "Un-extracted oil boost directly increasing milk fat %" },
  { value: "Hydroponic Sprouted Barley", label: "Hydroponic Sprouted Barley (Fresh Enzyme Green)", badge: "Enzyme Rich", description: "7-day sprout mats rich in vitamins A & E" },
  { value: "Chelated Mineral Mixture", label: "Chelated Mineral Mixture & Salt Lick", badge: "Reproductive", description: "Organic copper, zinc, selenium for conception and immunity" },
];

const QUALITY_OPTIONS = [
  { value: "10", label: "10 - Exceptional Sweet Lactic Fermentation", badge: "Grade A+", description: "Bright olive golden color, zero mould, pH 3.8-4.2" },
  { value: "9", label: "9 - High Quality Fresh Aroma & High Leaf Ratio", badge: "Grade A", description: "Pleasant sourdough fragrance, soft texture" },
  { value: "8", label: "8 - Standard Commercial Dairy Grade Roughage", badge: "Grade B+", description: "Acceptable fibre length, standard dry matter" },
  { value: "6", label: "6 - Moderate Quality (Blend With Concentrates)", badge: "Grade C", description: "Slight weather impact, recommended for heifers only" },
];

export default function InputPage5() {
  const { toast } = useToast();
  const [batchSaved, setBatchSaved] = useState<FeedInventoryForm | null>(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<FeedInventoryForm>({
    defaultValues: {
      feedType: "Fermented Corn Silage",
      batchSiloId: "SILO-BUNKER-03",
      quantityKg: 4500,
      costPerKgINR: 2.2,
      moisturePercentage: 68,
      crudeProteinPercentage: 9.8,
      supplierFarmPlot: "Hira Farm Organic Block-A",
      qualityAromaScore: "9",
      dailyRationTargetAnimals: 48,
    },
  });

  const watched = watch();

  // Calculations
  const totalCostINR = (watched.quantityKg || 0) * (watched.costPerKgINR || 0);
  const dryMatterKg = Math.round((watched.quantityKg || 0) * (1 - (watched.moisturePercentage || 0) / 100));
  const daysSustained =
    watched.dailyRationTargetAnimals && watched.dailyRationTargetAnimals > 0
      ? Math.round((watched.quantityKg || 0) / (watched.dailyRationTargetAnimals * 25))
      : 0;

  const onSubmit = async (data: FeedInventoryForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmittingForm(false);
    setBatchSaved(data);
    toast({
      type: "success",
      title: "Feed Inventory Batch Recorded!",
      description: `${formatNumber(data.quantityKg)} kg of ${data.feedType} stored in ${data.batchSiloId}. Total value: ₹${formatNumber(totalCostINR)}.`,
    });
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "Draft Silo Batch Saved",
      description: "Feed inventory ration numbers saved.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-50/70 via-emerald-50/20 to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-lime-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-lime-600 to-emerald-600 text-white flex items-center justify-center font-black shadow-md shadow-lime-300/40">
              <Wheat className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                FODDER & SILAGE INVENTORY <span className="text-xs px-2 py-0.5 rounded-full bg-lime-100 text-lime-800 font-mono font-bold border border-lime-300">Input Form 05</span>
              </Link>
              <p className="text-[11px] text-lime-700 font-medium">Bunker Silage Harvest, TMR Dry Matter & Nutrient Batch Intake</p>
            </div>
          </div>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-lime-600 hover:bg-lime-700 text-white font-extrabold text-xs shadow-md shadow-lime-300/40 transition"
          >
            Hub Home &rarr;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-lime-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-lime-700">
                Nutritional Feed Mill
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                Feed Batch & Silage Inventory
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Log fresh green harvest, dry roughage, and fermented silage bunkers to balance total digestible nutrients (TDN).
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Feed Type & Silo ID (Strict 2 columns with Modal Search Dropdown) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="feedType"
                  control={control}
                  rules={{ required: "Feed classification required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Feed / Fodder Classification"
                      modalTitle="Select Feed & Fodder Variety"
                      placeholder="Select Fodder Type"
                      options={FEED_TYPE_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Batch / Bunker Silo ID <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("batchSiloId", { required: "Silo ID is required" })}
                    placeholder="e.g. SILO-BUNKER-03"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-lime-500 outline-none"
                  />
                  {errors.batchSiloId && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.batchSiloId.message}</p>}
                </div>
              </div>

              {/* Row 2: Quantity & Cost Per Kg (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Batch Quantity (kg) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("quantityKg", { required: "Quantity required", min: 1, valueAsNumber: true })}
                    placeholder="4500"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-lime-950 focus:border-lime-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Cost per kg (INR ₹) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("costPerKgINR", { required: "Cost required", min: 0, valueAsNumber: true })}
                    placeholder="2.2"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-lime-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Moisture % & Crude Protein % (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Moisture Content (%)</label>
                  <input
                    type="number"
                    {...register("moisturePercentage", { min: 5, max: 90, valueAsNumber: true })}
                    placeholder="72"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-lime-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Silage optimal: 65-70% &bull; Dry straw: 10-14%</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Crude Protein Content (CP %)</label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("crudeProteinPercentage", { valueAsNumber: true })}
                    placeholder="9.8"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-lime-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Concentrates: 18-22% &bull; Napier: 8-11%</p>
                </div>
              </div>

              {/* Row 4: Supplier & Aroma Rating (Strict 2 columns with Modal Search Dropdown) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Supplier / Farm Plot Origin</label>
                  <input
                    {...register("supplierFarmPlot")}
                    placeholder="Hira Farm Organic Block-A"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:border-lime-500 outline-none"
                  />
                </div>

                <Controller
                  name="qualityAromaScore"
                  control={control}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Aroma & Fermentation Rating"
                      modalTitle="Select Silage Quality & Aroma Score"
                      placeholder="Select Quality Score"
                      options={QUALITY_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>

              {/* Row 5: Daily Target Milking Herd Allocation (Single column full width) */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Daily Herd Allocation (Number of Animals Feeding)
                </label>
                <input
                  type="number"
                  {...register("dailyRationTargetAnimals", { valueAsNumber: true })}
                  placeholder="48"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-lime-500 outline-none"
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
                    className="px-4 py-2.5 rounded-xl border border-lime-200 bg-lime-50 text-xs font-bold text-lime-700 hover:bg-lime-100 transition flex items-center gap-1.5"
                  >
                    {isSavingDraft ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    <span>{isSavingDraft ? "Saving..." : "Save Draft"}</span>
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingForm || isSavingDraft}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-lime-600 to-emerald-600 text-white font-black text-xs shadow-md shadow-lime-400/40 hover:opacity-95 active:scale-95 transition flex items-center gap-2"
                >
                  {isSubmittingForm ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Updating Bunker Silo...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Log Feed Inventory Batch</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Inventory Telemetry (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Batch Cost & Silo Status Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-lime-700 to-emerald-800 text-white shadow-2xl space-y-4">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-lime-200 block">
                Total Batch Valuation
              </span>

              <div className="grid grid-cols-2 gap-4 pb-2">
                <div>
                  <div className="text-3xl font-black text-lime-100">₹{formatNumber(totalCostINR)}</div>
                  <span className="text-[11px] text-lime-200">Total Purchase Cost</span>
                </div>
                <div>
                  <div className="text-3xl font-black text-lime-100">{formatNumber(dryMatterKg)} kg</div>
                  <span className="text-[11px] text-lime-200">Dry Matter (DM) Net</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs">
                <span className="text-lime-100">Estimated Days Buffer:</span>
                <span className="font-black text-white px-2.5 py-1 rounded-full bg-white/20 font-mono">
                  ~{daysSustained} Days Feed Supply
                </span>
              </div>
            </div>

            {/* Quality Analysis Card */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="font-bold text-stone-600 flex items-center gap-1.5">
                  <Warehouse className="w-4 h-4 text-lime-600" /> Bunker Allocation Live
                </span>
                <span className="text-[10px] bg-lime-100 text-lime-800 px-2 py-0.5 rounded-full font-bold">
                  {watched.batchSiloId}
                </span>
              </div>

              <div className="space-y-2 text-stone-700">
                <div className="flex justify-between">
                  <span>Feed Commodity:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.feedType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Unit Rate:</span>
                  <span className="font-bold text-lime-700">₹{watched.costPerKgINR}/kg</span>
                </div>
                <div className="flex justify-between">
                  <span>Moisture Ratio:</span>
                  <span className="font-bold">{watched.moisturePercentage}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Crude Protein (CP):</span>
                  <span className="font-bold text-emerald-700">{watched.crudeProteinPercentage}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Herd Headcount:</span>
                  <span className="font-bold">{watched.dailyRationTargetAnimals} Animals</span>
                </div>
              </div>

              {batchSaved && (
                <div className="p-3 rounded-xl bg-lime-50 border border-lime-200 text-lime-900 text-[11px] flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
                  <span>Silo {batchSaved.batchSiloId} updated with {formatNumber(batchSaved.quantityKg)} kg.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InputSwitcher currentInputId="page-5" />
    </div>
  );
}
