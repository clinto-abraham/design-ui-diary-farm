"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/Toaster";
import { InputSwitcher } from "@/components/InputSwitcher";
import { SearchableSelect } from "@/components/SearchableSelect";
import { formatNumber } from "@/lib/dairy-compounding";
import {
  Milk,
  Droplets,
  RotateCcw,
  Receipt,
  CheckCircle2,
  Loader2,
} from "lucide-react";

interface MilkEntryForm {
  tagId: string;
  session: string;
  volumeLiters: number;
  fatPercentage: number;
  snfPercentage: number;
  lactometerReading: number;
  milkTemperatureC: number;
  milkerStaffName: string;
  bulkChillerTankId: string;
}

const SESSION_OPTIONS = [
  { value: "AM Morning", label: "AM Morning Session (05:00 AM - 07:00 AM)", badge: "Morning Peak", description: "Highest yield, fresh morning collection" },
  { value: "PM Evening", label: "PM Evening Session (04:30 PM - 06:30 PM)", badge: "Evening High-Fat", description: "Higher butterfat concentration" },
];

const TANK_OPTIONS = [
  { value: "BMC-TANK-01 (Capacity 2,000L)", label: "BMC-TANK-01 (Capacity 2,000L - Main Chiller)", badge: "Main Vat", description: "Chilled to 3.5°C within 45 mins" },
  { value: "BMC-TANK-02 (A2 Pure Organic)", label: "BMC-TANK-02 (A2 Pure Organic Pedigree)", badge: "Organic A2", description: "Dedicated for purebred Murrah certified lines" },
  { value: "COLD-DISPATCH-VAT", label: "COLD-DISPATCH-VAT (Immediate Tanker Transfer)", badge: "Direct Transit", description: "Direct pumped into road tanker" },
];

export default function InputPage2() {
  const { toast } = useToast();
  const [printedSlip, setPrintedSlip] = useState<MilkEntryForm | null>(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<MilkEntryForm>({
    defaultValues: {
      tagId: "IN-HR-2026-0881",
      session: "AM Morning",
      volumeLiters: 7.8,
      fatPercentage: 8.4,
      snfPercentage: 9.2,
      lactometerReading: 29.5,
      milkTemperatureC: 37.2,
      milkerStaffName: "Ramesh Kumar (Milker #04)",
      bulkChillerTankId: "BMC-TANK-01 (Capacity 2,000L)",
    },
  });

  const watched = watch();

  const calculatedRatePerLiter =
    35 + (watched.fatPercentage || 0) * 3.6 + (watched.snfPercentage || 0) * 1.8;
  const totalMilkPayout = (watched.volumeLiters || 0) * calculatedRatePerLiter;

  const onSubmit = async (data: MilkEntryForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 900));
    setPrintedSlip(data);
    setIsSubmittingForm(false);
    toast({
      type: "success",
      title: "Milk Collection Slip Generated!",
      description: `Logged ${data.volumeLiters} Liters @ ${data.fatPercentage}% Fat for Buffalo ${data.tagId}. Total: ₹${formatNumber(totalMilkPayout)}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/70 via-cyan-50/30 to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-sky-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-black shadow-md shadow-sky-300/40">
              <Milk className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                DAIRY LAB MILK TEST <span className="text-xs px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 font-mono font-bold border border-sky-300">Input Form 02</span>
              </Link>
              <p className="text-[11px] text-sky-700 font-medium">Daily Milk Yield, Gerber Fat % & Ultrasonic SNF Quality Tester</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold text-sky-800">
              <Droplets className="w-3.5 h-3.5 text-sky-600" /> Auto Fat Formula Active
            </span>
            <Link
              href="/"
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs shadow-md shadow-sky-300/40 transition"
            >
              Hub Home &rarr;
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Form (7 Cols) - UNIFORM 2 OR 1 INPUT PER ROW */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-sky-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600">
                Bulk Milk Chiller Entry Terminal
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                Milk Yield & Quality Testing
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Enter ultrasonic analyzer readings to compute accurate farmer milk payments based on high butterfat content.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Tag ID & Session (2 in a row) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Buffalo Ear Tag ID <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("tagId", { required: "Tag ID is mandatory" })}
                    placeholder="e.g. IN-HR-2026-0881"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none"
                  />
                  {errors.tagId && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.tagId.message}</p>}
                </div>

                <div>
                  <Controller
                    name="session"
                    control={control}
                    render={({ field }) => (
                      <SearchableSelect
                        label="Milking Session"
                        modalTitle="Select Milking Session"
                        value={field.value}
                        onChange={field.onChange}
                        options={SESSION_OPTIONS}
                      />
                    )}
                  />
                </div>
              </div>

              {/* Row 2: Volume & Fat % (2 in a row) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Yield Volume (Liters) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("volumeLiters", {
                      required: "Volume is required",
                      min: { value: 0.5, message: "Min 0.5 Liters" },
                      max: { value: 25, message: "Max 25 Liters per session" },
                      valueAsNumber: true,
                    })}
                    placeholder="7.8"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-sky-950 focus:border-sky-500 outline-none"
                  />
                  {errors.volumeLiters && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.volumeLiters.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Fat Percentage (%) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("fatPercentage", {
                      required: "Fat % is required",
                      min: { value: 5.0, message: "Min 5.0% for Buffalo" },
                      max: { value: 12.0, message: "Max 12.0%" },
                      valueAsNumber: true,
                    })}
                    placeholder="8.4"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-amber-700 focus:border-sky-500 outline-none"
                  />
                  {errors.fatPercentage && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.fatPercentage.message}</p>}
                </div>
              </div>

              {/* Row 3: SNF % & Lactometer CLR (2 in a row) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Solid-Not-Fat (SNF %)</label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("snfPercentage", { valueAsNumber: true })}
                    placeholder="9.2"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-sky-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Lactometer (CLR Density)</label>
                  <input
                    type="number"
                    step="0.5"
                    {...register("lactometerReading", { valueAsNumber: true })}
                    placeholder="29.5"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-sky-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 4: Milk Temp & Milker Staff Name (2 in a row) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Fresh Milk Temp (°C)</label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("milkTemperatureC", { valueAsNumber: true })}
                    placeholder="37.2"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-sky-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Milker / Staff Name</label>
                  <input
                    {...register("milkerStaffName")}
                    placeholder="e.g. Ramesh Kumar (Milker #04)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:border-sky-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 5: Target Chiller Tank (Single input in a row, using SearchableSelect) */}
              <div>
                <Controller
                  name="bulkChillerTankId"
                  control={control}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Target Bulk Milk Chiller (BMC) Tank"
                      modalTitle="Select Destination Chiller Tank"
                      value={field.value}
                      onChange={field.onChange}
                      options={TANK_OPTIONS}
                    />
                  )}
                />
              </div>

              {/* Buttons with Loading State */}
              <div className="pt-4 flex items-center justify-between border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => reset()}
                  disabled={isSubmittingForm}
                  className="px-4 py-2.5 rounded-xl border border-stone-300 text-xs font-bold text-stone-600 hover:bg-stone-100 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset
                </button>

                <button
                  type="submit"
                  disabled={isSubmittingForm}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-black text-xs shadow-md shadow-sky-400/40 hover:scale-105 active:scale-95 transition flex items-center gap-2 cursor-pointer disabled:opacity-70 disabled:hover:scale-100"
                >
                  {isSubmittingForm ? <Loader2 className="w-4 h-4 animate-spin text-white" /> : <Receipt className="w-4 h-4" />}
                  {isSubmittingForm ? "Calculating & Printing..." : "Save & Print Milk Slip"}
                </button>
              </div>
            </form>
          </div>

          {/* Right Live Calculation & Receipt */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-600 to-cyan-700 text-white shadow-2xl space-y-4">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-sky-200 block">
                Real-Time Milk Quality Valuation
              </span>

              <div className="grid grid-cols-2 gap-4 pb-2">
                <div>
                  <span className="text-xs text-sky-200 block">Calculated Price / Liter</span>
                  <span className="text-3xl font-black text-white">₹{calculatedRatePerLiter.toFixed(2)}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-sky-200 block">Session Payout</span>
                  <span className="text-3xl font-black text-amber-300">₹{formatNumber(totalMilkPayout)}</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md text-xs space-y-1 text-sky-100 font-mono">
                <div className="flex justify-between">
                  <span>Base Rate:</span>
                  <span>₹35.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Butterfat Bonus ({watched.fatPercentage}% @ ₹3.6/pt):</span>
                  <span>+₹{((watched.fatPercentage || 0) * 3.6).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>SNF Solids Bonus ({watched.snfPercentage}% @ ₹1.8/pt):</span>
                  <span>+₹{((watched.snfPercentage || 0) * 1.8).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-3 font-mono text-xs">
              <div className="text-center pb-3 border-b border-dashed border-stone-300">
                <h4 className="font-bold text-sm text-stone-900 uppercase">HIRA FARMS CO-OPERATIVE</h4>
                <p className="text-[10px] text-stone-500">Official Milk Procurement Voucher</p>
              </div>

              <div className="space-y-1.5 text-stone-700">
                <div className="flex justify-between">
                  <span>Tag Number:</span>
                  <span className="font-bold text-stone-950">{watched.tagId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Session:</span>
                  <span className="font-bold">{watched.session}</span>
                </div>
                <div className="flex justify-between">
                  <span>Volume:</span>
                  <span className="font-bold text-sky-800">{watched.volumeLiters} Liters</span>
                </div>
                <div className="flex justify-between">
                  <span>Fat %:</span>
                  <span className="font-bold text-amber-700">{watched.fatPercentage}%</span>
                </div>
                <div className="flex justify-between">
                  <span>SNF %:</span>
                  <span className="font-bold">{watched.snfPercentage}%</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-stone-200 font-bold text-stone-950">
                  <span>Voucher Net Total:</span>
                  <span className="text-sm text-emerald-700">₹{formatNumber(totalMilkPayout)}</span>
                </div>
              </div>

              {printedSlip && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-[11px] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Voucher confirmed. Assigned to {printedSlip.bulkChillerTankId}.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InputSwitcher currentInputId="page-2" />
    </div>
  );
}
