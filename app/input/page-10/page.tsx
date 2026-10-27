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
  Leaf,
  Layers,
  Loader2,
} from "lucide-react";

interface BioGasManureForm {
  productType: string;
  quantityUnits: number;
  unitPriceINR: number;
  moisturePercentage: number;
  npkGradeAnalysis: string;
  buyerNameOrEstate: string;
  dispatchVehicleReg: string;
  organicCertificationNumber: string;
  carbonCreditsEstimatedKg: number;
}

const PRODUCT_TYPE_OPTIONS = [
  { value: "Enriched Vermicompost (50kg Bags)", label: "Enriched Vermicompost (50kg Bags)", badge: "Solid Organic", description: "Worm-cast vermicompost enriched with Trichoderma bio-culture" },
  { value: "Fermented Liquid Bio-Slurry", label: "Fermented Liquid Bio-Slurry (Tanker Liters)", badge: "Liquid NPK", description: "Anaerobically digested liquid fertilizer for drip irrigation fertigation" },
  { value: "Bottled Biogas Methane Cylinders", label: "Bottled Biogas Methane (14kg Cylinders)", badge: "Clean Fuel", description: "Compressed bio-methane replacement for commercial LPG burners" },
  { value: "Sun-Dried Cowdung Organic Briquettes", label: "Sun-Dried Cowdung Briquettes (Biofuel Tonnes)", badge: "Bio-Coal", description: "Smokeless industrial boiler briquettes with 3,500 kcal/kg heat" },
];

export default function InputPage10() {
  const { toast } = useToast();
  const [recordSaved, setRecordSaved] = useState<BioGasManureForm | null>(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<BioGasManureForm>({
    defaultValues: {
      productType: "Enriched Vermicompost (50kg Bags)",
      quantityUnits: 120,
      unitPriceINR: 450,
      moisturePercentage: 24,
      npkGradeAnalysis: "N: 2.4% | P: 1.8% | K: 1.9% (Trichoderma Enriched)",
      buyerNameOrEstate: "Green Meadows Apple Orchards (Himachal)",
      dispatchVehicleReg: "HR-12-BF-9924",
      organicCertificationNumber: "NPOP/NAB/0019/2026",
      carbonCreditsEstimatedKg: 850,
    },
  });

  const watched = watch();

  const totalRevenueINR = (watched.quantityUnits || 0) * (watched.unitPriceINR || 0);

  const onSubmit = async (data: BioGasManureForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmittingForm(false);
    setRecordSaved(data);
    toast({
      type: "success",
      title: "By-Product Sales Dispatch Recorded!",
      description: `Dispatched ${formatNumber(data.quantityUnits)} units of ${data.productType}. Gross Revenue: ₹${formatNumber(totalRevenueINR)}. Offset: ${data.carbonCreditsEstimatedKg} kg CO2e.`,
    });
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "By-Product Draft Preserved",
      description: "Sales manifest cached in local draft.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/70 via-stone-50 to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-amber-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 to-yellow-600 text-white flex items-center justify-center font-black shadow-md shadow-amber-300/40">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                BIO-GAS & CIRCULAR MANURE HARVEST <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-mono font-bold border border-amber-300">Input Form 10</span>
              </Link>
              <p className="text-[11px] text-amber-700 font-medium">Vermicompost Sales, Compressed Bio-CNG, NPOP Organic Cert & Carbon Offsets</p>
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
                Zero-Waste Bio-Economy
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                Circular By-Product Sales & Dispatch
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Record organic manure sales, enriched vermicompost bag shipments, and compressed biogas cylinder delivery.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Product Type & Units (Strict 2 columns with Modal Search Dropdown) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="productType"
                  control={control}
                  rules={{ required: "Product type required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Organic By-Product Type"
                      modalTitle="Select Organic Circular By-Product"
                      placeholder="Select Product"
                      options={PRODUCT_TYPE_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Quantity Dispatched (Units / Bags / L) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("quantityUnits", { required: "Quantity required", min: 1, valueAsNumber: true })}
                    placeholder="120"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-amber-950 focus:border-amber-500 outline-none"
                  />
                  {errors.quantityUnits && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.quantityUnits.message}</p>}
                </div>
              </div>

              {/* Row 2: Price Per Unit & Moisture % (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Selling Price per Unit (INR ₹) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("unitPriceINR", { required: "Price required", min: 1, valueAsNumber: true })}
                    placeholder="450"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Moisture Content (%)</label>
                  <input
                    type="number"
                    {...register("moisturePercentage", { valueAsNumber: true })}
                    placeholder="24"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-amber-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Optimal vermicompost moisture: 20-25%</p>
                </div>
              </div>

              {/* Row 3: NPK Grade Analysis (Single column full width) */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Lab NPK Nitrogen-Phosphorus-Potassium Grade
                </label>
                <input
                  {...register("npkGradeAnalysis")}
                  placeholder="N: 2.4% | P: 1.8% | K: 1.9% (Trichoderma Enriched)"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-semibold focus:border-amber-500 outline-none"
                />
              </div>

              {/* Row 4: Buyer Name & Vehicle (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Buyer Name / Organic Estate <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("buyerNameOrEstate", { required: "Buyer name required" })}
                    placeholder="e.g. Green Meadows Apple Orchards"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-bold focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Vehicle Dispatch Reg #</label>
                  <input
                    {...register("dispatchVehicleReg")}
                    placeholder="HR-12-BF-9924"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-amber-500 outline-none uppercase"
                  />
                </div>
              </div>

              {/* Row 5: Certification # & Carbon Credits (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">NPOP Organic Certificate #</label>
                  <input
                    {...register("organicCertificationNumber")}
                    placeholder="NPOP/NAB/0019/2026"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">CO2e Carbon Offset (kg)</label>
                  <input
                    type="number"
                    {...register("carbonCreditsEstimatedKg", { valueAsNumber: true })}
                    placeholder="850"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold text-emerald-700 focus:border-amber-500 outline-none"
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
                      <span>Recording Dispatch...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Record By-Product Dispatch</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Carbon & By-Product Revenue Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-800 via-yellow-800 to-stone-900 text-white shadow-2xl space-y-4">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-amber-300 block">
                Secondary By-Product Revenue
              </span>

              <div className="space-y-1">
                <span className="text-xs text-amber-200">Total Invoice Amount</span>
                <div className="text-3xl font-black text-amber-100">₹{formatNumber(totalRevenueINR)}</div>
                <p className="text-[11px] text-amber-300">
                  {formatNumber(watched.quantityUnits)} Units @ ₹{watched.unitPriceINR}/unit
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-amber-200">Carbon Abatement:</span>
                  <span className="font-mono font-bold text-emerald-300">{watched.carbonCreditsEstimatedKg} kg CO2e Verified</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-200">Organic Certification:</span>
                  <span className="font-mono text-xs text-amber-200 truncate max-w-[160px]">{watched.organicCertificationNumber}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="font-bold text-stone-600 flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-emerald-600" /> Dispatch Waybill
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                  NPOP CERTIFIED
                </span>
              </div>

              <div className="space-y-2 text-stone-700">
                <div className="flex justify-between">
                  <span>Buyer Estate:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.buyerNameOrEstate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Vehicle:</span>
                  <span className="font-bold">{watched.dispatchVehicleReg}</span>
                </div>
                <div className="flex justify-between">
                  <span>Moisture:</span>
                  <span className="font-bold text-amber-700">{watched.moisturePercentage}%</span>
                </div>
                <div className="flex justify-between">
                  <span>NPK Profile:</span>
                  <span className="font-bold text-emerald-700 truncate max-w-[170px]">{watched.npkGradeAnalysis}</span>
                </div>
              </div>

              {recordSaved && (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-[11px] flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>By-product invoice posted. Vehicle {recordSaved.dispatchVehicleReg} cleared for exit.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InputSwitcher currentInputId="page-10" />
    </div>
  );
}
