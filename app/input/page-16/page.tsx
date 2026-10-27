"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/Toaster";
import { InputSwitcher } from "@/components/InputSwitcher";
import { SearchableSelect } from "@/components/SearchableSelect";
import {
  Waves,
  Save,
  RotateCcw,
  CheckCircle2,
  Droplet,
  ShieldCheck,
  FlaskConical,
  Loader2,
} from "lucide-react";

interface WaterQualityForm {
  waterSourceId: string;
  samplingDate: string;
  tdsPpm: number;
  waterPh: number;
  totalHardnessMgL: number;
  coliformCountCfu: number;
  electrolyteAdditive: string;
  troughFlowRateLpm: number;
  labTechnicianName: string;
  chlorinationDoseApplied: boolean;
}

const WATER_SOURCE_OPTIONS = [
  { value: "BOREWELL-01 (450ft Deep Bed)", label: "Deep Borewell #01 — 450ft Confined Sweet Aquifer", badge: "Primary Drink", description: "Natural mineral water pumped directly to overhead reservoir" },
  { value: "RO-WATER-RESERVOIR (20,000L)", label: "Central RO & Carbon Sand Filter Reservoir — 20,000 Liters", badge: "Filtered", description: "Demineralized blend for misting nozzles and calf nursery" },
  { value: "RAINWATER-HARVEST-SUMP (50,000L)", label: "Eco Rainwater Harvesting Covered Sump — 50,000 Liters", badge: "Eco Water", description: "Filtered roof-catchment water for barn washing and irrigation" },
];

const ELECTROLYTE_OPTIONS = [
  { value: "Sodium Bicarbonate Rumen Buffer Mix", label: "Sodium Bicarbonate Rumen Buffer (Anti-Subacute Acidosis)", badge: "Heat Stress", description: "Neutralizes rumen lactic acidity during high concentrate feeding" },
  { value: "Magnesium Oxide + Himalayan Rock Salt", label: "Magnesium Oxide + Himalayan Pink Rock Salt Lick", badge: "Mineral", description: "Boosts nerve transmission and calcium assimilation" },
  { value: "Potassium Chloride & Zinc Chelate", label: "Potassium Chloride & Zinc Chelate (Summer Hydration)", badge: "Electrolyte", description: "Protects high-yielding buffaloes during hot humid weather" },
  { value: "Pure Untreated Mineral Water", label: "Pure Untreated Fresh Aquifer Water (Baseline)", badge: "Pure", description: "Zero additives, naturally balanced spring water" },
];

export default function InputPage16() {
  const { toast } = useToast();
  const [testSaved, setTestSaved] = useState<WaterQualityForm | null>(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<WaterQualityForm>({
    defaultValues: {
      waterSourceId: "BOREWELL-01 (450ft Deep Bed)",
      samplingDate: "2026-10-27",
      tdsPpm: 320,
      waterPh: 7.2,
      totalHardnessMgL: 180,
      coliformCountCfu: 0,
      electrolyteAdditive: "Sodium Bicarbonate Rumen Buffer Mix",
      troughFlowRateLpm: 35,
      labTechnicianName: "Dr. Sandeep Yadav (Hydrologist)",
      chlorinationDoseApplied: true,
    },
  });

  const watched = watch();

  const isTdsSafe = (watched.tdsPpm || 320) <= 500;
  const isColiformZero = (watched.coliformCountCfu || 0) === 0;

  const onSubmit = async (data: WaterQualityForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmittingForm(false);
    setTestSaved(data);
    toast({
      type: isColiformZero ? "success" : "error",
      title: isColiformZero ? "Drinking Water Quality Certified!" : "Biological Contamination Alert!",
      description: `Source ${data.waterSourceId}: TDS ${data.tdsPpm} ppm, pH ${data.waterPh}, Coliform: ${data.coliformCountCfu} CFU. Certified safe for 150+ buffalo herd.`,
    });
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "Water Quality Draft Stored",
      description: "Hydrology analysis cached in local memory.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/70 via-blue-50/20 to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-sky-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-600 text-white flex items-center justify-center font-black shadow-md shadow-sky-300/40">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                BOREWELL WATER QUALITY & SALTS <span className="text-xs px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 font-mono font-bold border border-sky-300">Input Form 16</span>
              </Link>
              <p className="text-[11px] text-sky-700 font-medium">Bovine Water Intake, TDS ppm, Zero Coliform & Rumen Electrolyte Buffers</p>
            </div>
          </div>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs shadow-md shadow-sky-300/40 transition"
          >
            Hub Home &rarr;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-sky-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-700">
                Hydrological Nutrition
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                Livestock Water Testing & Salinity Log
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Buffaloes consume 100-140 liters of water daily. Clean, sweet water directly dictates high milk production volume and butterfat retention.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Source ID & Date (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="waterSourceId"
                  control={control}
                  rules={{ required: "Water source required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Borewell Water Source Point"
                      modalTitle="Select Water Source Point"
                      placeholder="Select Source"
                      options={WATER_SOURCE_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Sampling Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    {...register("samplingDate", { required: "Date is required" })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-sky-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 2: TDS ppm & Water pH (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Total Dissolved Solids (TDS ppm) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("tdsPpm", { required: "TDS required", valueAsNumber: true })}
                    placeholder="320"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-sky-950 focus:border-sky-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Target: &lt;500 ppm for optimum herd hydration</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Water pH Level (6.8 - 7.6) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("waterPh", { required: "pH required", valueAsNumber: true })}
                    placeholder="7.2"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold text-emerald-700 focus:border-sky-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Neutral water protects rumen microbial flora</p>
                </div>
              </div>

              {/* Row 3: Total Hardness & Coliform CFU (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Total Hardness (CaCO3 mg/L)
                  </label>
                  <input
                    type="number"
                    {...register("totalHardnessMgL", { valueAsNumber: true })}
                    placeholder="180"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-sky-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Moderate calcium carbonate aids skeletal growth</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Coliform Bacterial Count (CFU / 100ml) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("coliformCountCfu", { required: "Coliform check required", valueAsNumber: true })}
                    placeholder="0"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-rose-600 focus:border-sky-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Mandatory standard: 0 CFU (Zero fecal bacteria)</p>
                </div>
              </div>

              {/* Row 4: Electrolyte Buffer Additive & Flow Rate (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="electrolyteAdditive"
                  control={control}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Electrolyte Buffer Additive"
                      modalTitle="Select Water Trough Electrolyte Formulation"
                      placeholder="Select Buffer"
                      options={ELECTROLYTE_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Automatic Trough Flow Rate (L / Min)
                  </label>
                  <input
                    type="number"
                    {...register("troughFlowRateLpm", { valueAsNumber: true })}
                    placeholder="35"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-sky-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 5: Lab Technician (Single column full width) */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Testing Water Hydrologist / Lab Specialist <span className="text-rose-500">*</span>
                </label>
                <input
                  {...register("labTechnicianName", { required: "Technician name required" })}
                  placeholder="Dr. Sandeep Yadav (Hydrologist)"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-bold focus:border-sky-500 outline-none"
                />
              </div>

              {/* Row 6: In-Line Chlorination Checkbox (Single full width) */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("chlorinationDoseApplied")}
                    className="mt-0.5 rounded border-stone-300 text-sky-600 focus:ring-sky-500"
                  />
                  <span className="text-xs text-stone-600 leading-relaxed font-medium">
                    Continuous chlorine dioxide micro-dosing pump (0.2 ppm residual) active to maintain drinking trough biosecurity across all pens.
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
                    className="px-4 py-2.5 rounded-xl border border-sky-200 bg-sky-50 text-xs font-bold text-sky-800 hover:bg-sky-100 transition flex items-center gap-1.5"
                  >
                    {isSavingDraft ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    <span>{isSavingDraft ? "Saving..." : "Save Draft"}</span>
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingForm || isSavingDraft}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white font-black text-xs shadow-md shadow-sky-400/40 hover:opacity-95 active:scale-95 transition flex items-center gap-2"
                >
                  {isSubmittingForm ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Verifying Purity...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Certify Water Potability</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Water Purity Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-800 via-blue-900 to-slate-900 text-white shadow-2xl space-y-4">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-sky-300 block">
                Hydration Potability Index
              </span>

              <div className="space-y-1">
                <span className="text-xs text-sky-200">Total Dissolved Solids</span>
                <div className="text-3xl font-black text-white flex items-center gap-2">
                  <span>{watched.tdsPpm} ppm</span>
                  {isTdsSafe ? (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500 text-white font-bold">
                      SWEET AQUA
                    </span>
                  ) : (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500 text-white font-bold">
                      HIGH SALTS
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-sky-200">
                  Target: &lt;500 ppm for optimum daily consumption (120L / animal)
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-sky-200">Microbial Coliform:</span>
                  <span className="font-mono font-bold text-emerald-300">
                    {isColiformZero ? "0 CFU (Zero Bacteria)" : `⚠️ ${watched.coliformCountCfu} CFU Found`}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sky-200">Rumen Buffer:</span>
                  <span className="font-mono text-xs text-sky-200 truncate max-w-[160px]">{watched.electrolyteAdditive}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="font-bold text-stone-600 flex items-center gap-1.5">
                  <FlaskConical className="w-4 h-4 text-sky-600" /> Source Inspection Certificate
                </span>
                <span className="text-[10px] bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full font-bold">
                  POTABLE PASS
                </span>
              </div>

              <div className="space-y-2 text-stone-700">
                <div className="flex justify-between">
                  <span>Source Point:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.waterSourceId}</span>
                </div>
                <div className="flex justify-between">
                  <span>pH Balance:</span>
                  <span className="font-bold text-emerald-700">{watched.waterPh} (Neutral)</span>
                </div>
                <div className="flex justify-between">
                  <span>Flow Rate:</span>
                  <span className="font-bold">{watched.troughFlowRateLpm} L/min continuous</span>
                </div>
                <div className="flex justify-between">
                  <span>Specialist:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.labTechnicianName}</span>
                </div>
              </div>

              {testSaved && (
                <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-sky-950 text-[11px] flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Water potability cert recorded for {testSaved.waterSourceId}.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InputSwitcher currentInputId="page-16" />
    </div>
  );
}
