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
  Save,
  RotateCcw,
  CheckCircle2,
  CalendarCheck,
  MapPin,
  Clock,
  Loader2,
} from "lucide-react";

interface D2cSubscriptionForm {
  subscriberName: string;
  contactMobile: string;
  deliverySectorEnclave: string;
  dailyMilkQuotaLiters: string;
  subscriptionPlanDuration: string;
  deliveryTimeSlot: string;
  glassBottleDepositINR: number;
  apartmentUnitAddress: string;
  specialDeliveryInstructions: string;
  chilledDoorstepBagIssued: boolean;
}

const SECTOR_OPTIONS = [
  { value: "DLF Phase-5 & Camellias (Gurugram)", label: "DLF Phase 5, Magnolias & The Camellias (Gurugram)", badge: "Route 1", description: "Direct cold chain van route arriving before 06:00 AM" },
  { value: "Golf Course Extension Road (Gurugram)", label: "Golf Course Extension Road & Grand Arch (Gurugram)", badge: "Route 2", description: "Gated community security drop with insulated thermal cooler" },
  { value: "Vasant Vihar & Shanti Niketan (South Delhi)", label: "Vasant Vihar, Shanti Niketan & Westend (South Delhi)", badge: "Route 3", description: "Exclusive morning concierge delivery" },
  { value: "Greater Kailash-II & Panchsheel (South Delhi)", label: "Greater Kailash-II, Panchsheel Park & Friends Colony", badge: "Route 4", description: "Direct doorstep glass bottle replacement route" },
];

const QUOTA_OPTIONS = [
  { value: "1.0", label: "1.0 Liter / Day (Single Glass Bottle 1,000ml)", badge: "Single Bottle", description: "Fresh unhomogenized A2 whole buffalo milk with natural cream layer" },
  { value: "2.0", label: "2.0 Liters / Day (Two Glass Bottles 2,000ml)", badge: "Most Popular", description: "Ideal for family chai, curd culturing, and children's nutrition" },
  { value: "3.0", label: "3.0 Liters / Day (Split 2L Morning + 1L Evening)", badge: "Split Daily", description: "Fresh morning and fresh evening chilled deliveries" },
  { value: "4.0", label: "4.0 Liters / Day (Joint Family Gold Reserve)", badge: "High Volume", description: "Includes complimentary monthly jar of artisanal Bilona ghee" },
];

const PLAN_OPTIONS = [
  { value: "30-Day Monthly Prepaid", label: "30-Day Monthly Prepaid Plan (Flexible pause)", badge: "Monthly", description: "Billed at standard ₹95/Liter in sterilized returnable glass bottles" },
  { value: "90-Day Quarterly Saver (5% Discount)", label: "90-Day Quarterly Saver Plan (5% Cashback Credit)", badge: "Quarterly", description: "Priority delivery slot with zero bottle deposit" },
  { value: "365-Day Annual VIP Patron Tier", label: "365-Day Annual VIP Founding Member (Farm Visit Pass)", badge: "Annual VIP", description: "Free quarterly farm tour + complimentary 2kg Bilona Ghee" },
];

const TIME_SLOT_OPTIONS = [
  { value: "05:30 AM - 06:30 AM (Early Dawn Drop)", label: "05:30 AM - 06:30 AM — Early Dawn Drop (Before Sunrise)", badge: "Early Bird" },
  { value: "06:30 AM - 07:30 AM (Standard Morning)", label: "06:30 AM - 07:30 AM — Standard Breakfast Delivery", badge: "Standard" },
];

export default function InputPage17() {
  const { toast } = useToast();
  const [subSaved, setSubSaved] = useState<D2cSubscriptionForm | null>(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<D2cSubscriptionForm>({
    defaultValues: {
      subscriberName: "Devendra Singhania",
      contactMobile: "+91 98111-92831",
      deliverySectorEnclave: "DLF Phase-5 & Camellias (Gurugram)",
      dailyMilkQuotaLiters: "2.0",
      subscriptionPlanDuration: "30-Day Monthly Prepaid",
      deliveryTimeSlot: "05:30 AM - 06:30 AM (Early Dawn Drop)",
      glassBottleDepositINR: 500,
      apartmentUnitAddress: "Tower 4, Penthouse 2102, The Camellias, Golf Course Road",
      specialDeliveryInstructions: "Place inside chilled thermal doorstep locker. Ring doorbell once.",
      chilledDoorstepBagIssued: true,
    },
  });

  const watched = watch();

  const dailyLiters = parseFloat(watched.dailyMilkQuotaLiters || "2.0") || 2.0;
  const monthlyCostINR = Math.round(dailyLiters * 30 * 95); // ₹95 per liter farm-fresh raw buffalo milk
  const initialTotalINR = monthlyCostINR + (watched.glassBottleDepositINR || 500);

  const onSubmit = async (data: D2cSubscriptionForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmittingForm(false);
    setSubSaved(data);
    toast({
      type: "success",
      title: "D2C Bottle Subscription Active!",
      description: `Welcome ${data.subscriberName}! ${data.dailyMilkQuotaLiters}L/day scheduled for ${data.deliverySectorEnclave}. Monthly invoice: ₹${formatNumber(monthlyCostINR)}.`,
    });
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "Subscription Draft Saved",
      description: "Customer roster entry cached safely.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/70 via-indigo-50/20 to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-sky-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white flex items-center justify-center font-black shadow-md shadow-sky-300/40">
              <Milk className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                D2C FRESH GLASS BOTTLE ROSTER <span className="text-xs px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 font-mono font-bold border border-sky-300">Input Form 17</span>
              </Link>
              <p className="text-[11px] text-sky-700 font-medium">Farm-to-Doorstep Subscriptions, Chilled Glass Bottles 4°C & Urban NCR Delivery</p>
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
                Direct-to-Consumer Logistics
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                New Bottle Subscriber Onboarding
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Raw, unpasteurized, non-homogenized A2 Murrah milk delivered within 3 hours of morning milking in sterilized reusable glass bottles.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Customer Name & Mobile (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Customer Full Legal Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("subscriberName", { required: "Name required" })}
                    placeholder="e.g. Devendra Singhania"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-bold focus:border-sky-500 outline-none"
                  />
                  {errors.subscriberName && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.subscriberName.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    WhatsApp Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("contactMobile", { required: "Mobile number required" })}
                    placeholder="+91 98111-92831"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-sky-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Delivery Sector & Daily Quota (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="deliverySectorEnclave"
                  control={control}
                  rules={{ required: "Sector enclave required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Delivery Sector / Residential Enclave"
                      modalTitle="Select Delivery Cluster Sector"
                      placeholder="Select Sector"
                      options={SECTOR_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <Controller
                  name="dailyMilkQuotaLiters"
                  control={control}
                  rules={{ required: "Quota required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Daily Milk Allocation (Liters)"
                      modalTitle="Select Daily Milk Quota"
                      placeholder="Select Daily Liters"
                      options={QUOTA_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />
              </div>

              {/* Row 3: Subscription Plan & Delivery Window (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="subscriptionPlanDuration"
                  control={control}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Subscription Billing Tenure"
                      modalTitle="Select Subscription Plan Duration"
                      placeholder="Select Plan"
                      options={PLAN_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />

                <Controller
                  name="deliveryTimeSlot"
                  control={control}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Doorstep Delivery Window"
                      modalTitle="Select Delivery Time Slot"
                      placeholder="Select Time Slot"
                      options={TIME_SLOT_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>

              {/* Row 4: Bottle Deposit & Address (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Refundable Bottle Deposit (INR ₹)
                  </label>
                  <input
                    type="number"
                    {...register("glassBottleDepositINR", { valueAsNumber: true })}
                    placeholder="500"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-sky-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Refundable deposit for 2 heavy-duty food grade glass bottles</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Apartment / Villa Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("apartmentUnitAddress", { required: "Address required" })}
                    placeholder="Tower 4, Penthouse 2102, The Camellias"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:border-sky-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 5: Delivery Instructions (Single column full width) */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Gate Pass & Doorstep Instructions</label>
                <input
                  {...register("specialDeliveryInstructions")}
                  placeholder="e.g. Leave inside insulated porch cooler bag; gate guard pre-authorized for entry."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:border-sky-500 outline-none"
                />
              </div>

              {/* Row 6: Chilled Bag Checkbox (Single full width) */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("chilledDoorstepBagIssued")}
                    className="mt-0.5 rounded border-stone-300 text-sky-600 focus:ring-sky-500"
                  />
                  <span className="text-xs text-stone-600 leading-relaxed font-medium">
                    Issued silver thermal-insulated hanging doorstep pouch with frozen ice gel-pack for zero cold chain interruption.
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
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-black text-xs shadow-md shadow-sky-400/40 hover:opacity-95 active:scale-95 transition flex items-center gap-2"
                >
                  {isSubmittingForm ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Activating Route...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Activate Milk Subscription</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Subscription Roster Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-800 via-indigo-900 to-slate-900 text-white shadow-2xl space-y-4">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-sky-300 block">
                Direct Subscription Economics
              </span>

              <div className="space-y-1">
                <span className="text-xs text-sky-200">Monthly Plan Billing (30 Days)</span>
                <div className="text-3xl font-black text-white">
                  ₹{formatNumber(monthlyCostINR)}
                </div>
                <p className="text-[11px] text-sky-200">
                  {dailyLiters} Liters/day @ ₹95/L (Initial Total with deposit: ₹{formatNumber(initialTotalINR)})
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-sky-200">Route Assigned:</span>
                  <span className="font-bold text-white truncate max-w-[170px]">{watched.deliverySectorEnclave}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sky-200">Morning Window:</span>
                  <span className="font-mono text-emerald-300 font-bold">{watched.deliveryTimeSlot.split("—")[0]}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="font-bold text-stone-600 flex items-center gap-1.5">
                  <CalendarCheck className="w-4 h-4 text-sky-600" /> Route Dispatch Manifest
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                  ROUTE ACTIVE
                </span>
              </div>

              <div className="space-y-2 text-stone-700">
                <div className="flex justify-between">
                  <span>Subscriber:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.subscriberName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Daily Quota:</span>
                  <span className="font-bold text-sky-700">{watched.dailyMilkQuotaLiters} L / Morning</span>
                </div>
                <div className="flex justify-between">
                  <span>Bottle Deposit:</span>
                  <span className="font-bold">₹{watched.glassBottleDepositINR} (Refundable)</span>
                </div>
                <div className="flex justify-between">
                  <span>Address:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.apartmentUnitAddress}</span>
                </div>
              </div>

              {subSaved && (
                <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-sky-950 text-[11px] flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Subscription confirmed for {subSaved.subscriberName}. First bottle dispatched at 05:30 AM tomorrow.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InputSwitcher currentInputId="page-17" />
    </div>
  );
}
