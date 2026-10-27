"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/Toaster";
import { InputSwitcher } from "@/components/InputSwitcher";
import { SearchableSelect } from "@/components/SearchableSelect";
import { formatNumber } from "@/lib/dairy-compounding";
import {
  Truck,
  RotateCcw,
  CheckCircle2,
  FileText,
  Save,
  Loader2,
} from "lucide-react";

interface MilkDispatchForm {
  buyerPlantName: string;
  tankerRegNumber: string;
  driverNamePhone: string;
  departureTime: string;
  volumeLiters: number;
  compositeFatPercentage: number;
  tankerTemperatureC: number;
  ratePerLiterINR: number;
  tamperSealSerial: string;
  paymentTerms: string;
}

const BUYER_OPTIONS = [
  { value: "Mother Dairy Bulk Processing Plant", label: "Mother Dairy Processing Plant (Pilkhuwa / Delhi NCR)", badge: "Tier-1 Buyer", description: "Daily contracted intake at premium fat rate" },
  { value: "Amul Central Processing Dairy", label: "Amul Federation Dairy (Manesar Hub)", badge: "Cooperative", description: "Automatic RTGS fat-based clearing" },
  { value: "D2C Direct Artisan Bottling Depot", label: "Hira Artisanal Bottling Depot (Gurugram)", badge: "Own Retail", description: "Raw unpasteurized cold-chain glass bottle route" },
  { value: "Haldiram Sweet Processing Dairy", label: "Haldiram Foods Sweets Division (Noida)", badge: "Sweet Confectionery", description: "High fat 8.5%+ requirement for pure khoa" },
];

const PAYMENT_TERMS_OPTIONS = [
  { value: "Immediate RTGS on Delivery", label: "Immediate RTGS upon Tanker Delivery & Lab Verification", badge: "Instant", description: "Settled within 4 hours of dock receipt" },
  { value: "7 Days Credit Invoice", label: "7 Days Commercial Credit Invoice", badge: "Net-7", description: "Standard corporate dairy plant billing" },
  { value: "Advance Escrow Settled", label: "Advance Escrow Pre-Paid", badge: "Prepaid", description: "100% advance security deposit held in trust" },
];

export default function InputPage7() {
  const { toast } = useToast();
  const [dispatchConfirmed, setDispatchConfirmed] = useState<MilkDispatchForm | null>(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<MilkDispatchForm>({
    defaultValues: {
      buyerPlantName: "Mother Dairy Bulk Processing Plant",
      tankerRegNumber: "HR-26-ED-8841",
      driverNamePhone: "Balwinder Singh (+91 98123-45678)",
      departureTime: "05:30 AM",
      volumeLiters: 3500,
      compositeFatPercentage: 8.5,
      tankerTemperatureC: 3.4,
      ratePerLiterINR: 70.0,
      tamperSealSerial: "HIRA-SEAL-882910",
      paymentTerms: "Immediate RTGS on Delivery",
    },
  });

  const watched = watch();

  const totalInvoiceValueINR = (watched.volumeLiters || 0) * (watched.ratePerLiterINR || 0);
  const fatBonusPercentage = Math.max(0, (watched.compositeFatPercentage || 0) - 6.5);
  const fatBonusINR = Math.round(fatBonusPercentage * 4.5 * (watched.volumeLiters || 0));

  const onSubmit = async (data: MilkDispatchForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmittingForm(false);
    setDispatchConfirmed(data);
    toast({
      type: "success",
      title: "Gate Pass & Waybill Generated!",
      description: `Tanker ${data.tankerRegNumber} dispatched with ${formatNumber(data.volumeLiters)} Liters at ${data.tankerTemperatureC}°C. Invoice: ₹${formatNumber(totalInvoiceValueINR)}.`,
    });
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "Dispatch Manifest Draft Saved",
      description: "Waybill information preserved in local draft.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50/70 via-emerald-50/20 to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-teal-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-600 text-white flex items-center justify-center font-black shadow-md shadow-teal-300/40">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                BULK MILK DISPATCH & LOGISTICS <span className="text-xs px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 font-mono font-bold border border-teal-300">Input Form 07</span>
              </Link>
              <p className="text-[11px] text-teal-700 font-medium">Insulated Tanker Gate Pass, Cold Chain 3.4°C & Fat-Based Commercial Billing</p>
            </div>
          </div>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs shadow-md shadow-teal-300/40 transition"
          >
            Hub Home &rarr;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-teal-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700">
                Outbound Logistics Manifest
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                Milk Tanker Gate Pass Entry
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Every outbound insulated tanker is verified for 4°C chilled temperature, tamper seal security, and digital lactometer fat %.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Buyer Plant Name & Tanker Vehicle Reg # (Strict 2 columns with Modal Search Dropdown) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="buyerPlantName"
                  control={control}
                  rules={{ required: "Buyer dairy plant is required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Buyer Dairy Processing Plant"
                      modalTitle="Select Destination Dairy Processing Plant"
                      placeholder="Select Buyer Plant"
                      options={BUYER_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Insulated Tanker Vehicle Reg # <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("tankerRegNumber", { required: "Vehicle number required" })}
                    placeholder="e.g. HR-26-ED-8841"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-teal-500 outline-none uppercase"
                  />
                  {errors.tankerRegNumber && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.tankerRegNumber.message}</p>}
                </div>
              </div>

              {/* Row 2: Driver & Departure Time (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Driver Name & Mobile</label>
                  <input
                    {...register("driverNamePhone")}
                    placeholder="Balwinder Singh (+91 98123...)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:border-teal-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Dispatch Departure Time</label>
                  <input
                    {...register("departureTime")}
                    placeholder="05:30 AM"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-teal-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Dispatched Volume & Composite Fat % (Strict 2 columns - fixed from 3-col) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Dispatched Liters <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("volumeLiters", { required: "Volume required", min: 100, valueAsNumber: true })}
                    placeholder="3500"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-teal-950 focus:border-teal-500 outline-none"
                  />
                  {errors.volumeLiters && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.volumeLiters.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Composite Fat %</label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("compositeFatPercentage", { valueAsNumber: true })}
                    placeholder="8.5"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold text-amber-700 focus:border-teal-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 4: Chilling Temperature & Rate Per Liter (Strict 2 columns - fixed from 3-col) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Chilling Temp (°C) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("tankerTemperatureC", {
                      max: { value: 4.5, message: "Temp must be <= 4°C for raw cold chain" },
                      valueAsNumber: true,
                    })}
                    placeholder="3.4"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold text-sky-700 focus:border-teal-500 outline-none"
                  />
                  {errors.tankerTemperatureC && (
                    <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.tankerTemperatureC.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Agreed Rate per Liter (₹)</label>
                  <input
                    type="number"
                    step="0.5"
                    {...register("ratePerLiterINR", { valueAsNumber: true })}
                    placeholder="70.0"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-teal-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 5: Tamper-Proof Seal & Settlement Terms (Strict 2 columns with Modal Search Dropdown) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Tamper-Proof Valve Seal Serial # <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("tamperSealSerial", { required: "Seal number required" })}
                    placeholder="HIRA-SEAL-882910"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-teal-500 outline-none uppercase"
                  />
                  {errors.tamperSealSerial && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.tamperSealSerial.message}</p>}
                </div>

                <Controller
                  name="paymentTerms"
                  control={control}
                  render={({ field }) => (
                    <SearchableSelect
                      label="B2B Settlement Terms"
                      modalTitle="Select Commercial Payment Terms"
                      placeholder="Select Payment Terms"
                      options={PAYMENT_TERMS_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
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
                    className="px-4 py-2.5 rounded-xl border border-teal-200 bg-teal-50 text-xs font-bold text-teal-800 hover:bg-teal-100 transition flex items-center gap-1.5"
                  >
                    {isSavingDraft ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    <span>{isSavingDraft ? "Saving..." : "Save Draft"}</span>
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingForm || isSavingDraft}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-black text-xs shadow-md shadow-teal-400/40 hover:opacity-95 active:scale-95 transition flex items-center gap-2"
                >
                  {isSubmittingForm ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Issuing Gate Pass...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Issue Waybill & Gate Pass</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Invoice & Gate Pass Preview (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Total Billing Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-teal-700 to-emerald-800 text-white shadow-2xl space-y-4">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-teal-200 block">
                Outbound Commercial Invoice
              </span>

              <div className="space-y-1">
                <span className="text-xs text-teal-200">Total Waybill Value</span>
                <div className="text-3xl font-black text-white">₹{formatNumber(totalInvoiceValueINR)}</div>
                <p className="text-[11px] text-teal-200 font-mono">
                  {formatNumber(watched.volumeLiters)} Liters @ ₹{watched.ratePerLiterINR}/L (Gross Fat {watched.compositeFatPercentage}%)
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-teal-200">High Fat (8.5%) Bonus:</span>
                  <span className="font-mono font-bold text-emerald-300">+₹{formatNumber(fatBonusINR)} Premium</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-teal-200">Chilling Temp Security:</span>
                  <span className="font-mono font-bold text-sky-200">{watched.tankerTemperatureC}°C (Under 4°C Validated)</span>
                </div>
              </div>
            </div>

            {/* Gate Pass Verification Card */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="font-bold text-stone-600 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-teal-600" /> Security Gate Manifest
                </span>
                <span className="text-[10px] bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full font-bold">
                  PASS-OK
                </span>
              </div>

              <div className="space-y-2 text-stone-700">
                <div className="flex justify-between">
                  <span>Tanker Reg:</span>
                  <span className="font-bold text-stone-900">{watched.tankerRegNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span>Buyer:</span>
                  <span className="font-bold text-teal-700 truncate max-w-[170px]">{watched.buyerPlantName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tamper Seal:</span>
                  <span className="font-bold text-stone-900">{watched.tamperSealSerial}</span>
                </div>
                <div className="flex justify-between">
                  <span>Terms:</span>
                  <span className="font-bold text-emerald-700 truncate max-w-[170px]">{watched.paymentTerms}</span>
                </div>
              </div>

              {dispatchConfirmed && (
                <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-teal-950 text-[11px] flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Pass #{dispatchConfirmed.tamperSealSerial.slice(-6)} signed off. Security barrier lifted.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InputSwitcher currentInputId="page-7" />
    </div>
  );
}
