"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/Toaster";
import { InputSwitcher } from "@/components/InputSwitcher";
import { SearchableSelect } from "@/components/SearchableSelect";
import { formatNumber } from "@/lib/dairy-compounding";
import {
  Banknote,
  Save,
  RotateCcw,
  CheckCircle2,
  TrendingUp,
  FileCheck2,
  ShieldCheck,
  Loader2,
} from "lucide-react";

interface InvestorPackageForm {
  investorFullName: string;
  packageCount: string;
  panNumber: string;
  aadhaarNumber: string;
  bankAccountNumber: string;
  bankIfscCode: string;
  bankName: string;
  nomineeFullName: string;
  nomineeRelationship: string;
  agreementAcknowledged: boolean;
}

const PACKAGE_OPTIONS = [
  { value: "1", label: "1 Package (₹2,00,000) • 1 Adult Buffalo + 1 Female Calf", badge: "Standard", description: "Entry unit compounding to 5+ adults and 12,000L milk/yr" },
  { value: "2", label: "2 Packages (₹4,00,000) • 2 Adult Buffaloes + 2 Calves", badge: "Popular", description: "Doubles milk revenue and calf generation" },
  { value: "3", label: "3 Packages (₹6,00,000) • 3 Adult Buffaloes + 3 Calves", badge: "Commercial", description: "Accelerated commercial herd expansion" },
  { value: "5", label: "5 Packages (₹10,00,000) • 5 Adult Buffaloes + 5 Calves", badge: "HNI Unit", description: "Institutional animal asset owner starter tier with quarterly site audit" },
  { value: "10", label: "10 Packages (₹20,00,000) • 10 Adult Buffaloes + 10 Calves", badge: "Founding Partner", description: "Full shed allocation with dedicated veterinary caretaker" },
];

const NOMINEE_RELATION_OPTIONS = [
  { value: "Spouse", label: "Spouse (Husband / Wife)" },
  { value: "Son / Daughter", label: "Son / Daughter" },
  { value: "Parent", label: "Parent (Father / Mother)" },
  { value: "Sibling", label: "Brother / Sister" },
];

export default function InputPage6() {
  const { toast } = useToast();
  const [allocationDone, setAllocationDone] = useState<InvestorPackageForm | null>(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<InvestorPackageForm>({
    defaultValues: {
      investorFullName: "Rajeshwar Singhania",
      packageCount: "1",
      panNumber: "ABCPS1234F",
      aadhaarNumber: "789123456012",
      bankAccountNumber: "50100239102931",
      bankIfscCode: "HDFC0000128",
      bankName: "HDFC Bank Ltd (Connaught Place Branch, New Delhi)",
      nomineeFullName: "Sunita Singhania",
      nomineeRelationship: "Spouse",
      agreementAcknowledged: true,
    },
  });

  const watched = watch();
  const packagesNum = parseInt(watched.packageCount || "1", 10) || 1;
  const totalInvestmentINR = packagesNum * 200000;
  const year10EstHerdSize = packagesNum * 8; // ~8x biological compound
  const year10EstMilkRevenueINR = packagesNum * 840000; // estimated year-10 annual income

  const onSubmit = async (data: InvestorPackageForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmittingForm(false);
    setAllocationDone(data);
    toast({
      type: "success",
      title: "Animal Ownership Certificate Generated!",
      description: `Allocated ${packagesNum} Package(s) (₹${formatNumber(totalInvestmentINR)}) to ${data.investorFullName}. Tag registry notified.`,
    });
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "Animal Asset Owner Form Draft Saved",
      description: "KYC and bank details cached safely.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/70 via-stone-50 to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-amber-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-600 text-white flex items-center justify-center font-black shadow-md shadow-amber-300/40">
              <Banknote className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                ANIMAL ASSET OWNER ONBOARDING & CAPEX <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-mono font-bold border border-amber-300">Input Form 06</span>
              </Link>
              <p className="text-[11px] text-amber-700 font-medium">₹2 Lacs Package (1 Buffalo + 1 Calf) & 10-Yr Compounding Certificate</p>
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
                Direct Livestock Equity Allocation
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                ₹2.00 Lacs Buffalo Unit Subscription
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Each package binds 1 purebred Murrah milker + 1 female calf into the farm pool with complete insurance and AI breeding covenants.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Full Name & Package Count (Strict 2 columns with Modal Search Dropdown) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Animal Asset Owner Full Legal Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("investorFullName", { required: "Name is required" })}
                    placeholder="e.g. Rajeshwar Singhania"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-bold focus:border-amber-500 outline-none"
                  />
                  {errors.investorFullName && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.investorFullName.message}</p>}
                </div>

                <Controller
                  name="packageCount"
                  control={control}
                  rules={{ required: "Select package count" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Number of Packages (₹2.00L Each)"
                      modalTitle="Select Investment Package Tier"
                      placeholder="Select Package Count"
                      options={PACKAGE_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />
              </div>

              {/* Row 2: PAN & Aadhaar (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    PAN Card Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("panNumber", {
                      required: "PAN is mandatory",
                      pattern: { value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, message: "Valid 10-digit PAN required (e.g. ABCDE1234F)" },
                    })}
                    placeholder="ABCPS1234F"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-amber-500 outline-none uppercase"
                  />
                  {errors.panNumber && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.panNumber.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    12-Digit Aadhaar UID <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("aadhaarNumber", {
                      required: "Aadhaar is mandatory",
                      pattern: { value: /^\d{12}$/, message: "Must be 12 numeric digits" },
                    })}
                    placeholder="789123456012"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-amber-500 outline-none"
                  />
                  {errors.aadhaarNumber && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.aadhaarNumber.message}</p>}
                </div>
              </div>

              {/* Row 3: Bank Account & IFSC (Strict 2 columns - replaced old 3-column layout) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Bank Account Number (Payout) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("bankAccountNumber", { required: "Bank account is required" })}
                    placeholder="50100239102931"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-amber-500 outline-none"
                  />
                  {errors.bankAccountNumber && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.bankAccountNumber.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Bank IFSC Code <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("bankIfscCode", { required: "IFSC is required" })}
                    placeholder="HDFC0000128"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-amber-500 outline-none uppercase"
                  />
                  {errors.bankIfscCode && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.bankIfscCode.message}</p>}
                </div>
              </div>

              {/* Row 4: Bank Name & Branch (Single column full width) */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Bank & Branch Name</label>
                <input
                  {...register("bankName")}
                  placeholder="e.g. HDFC Bank Ltd (Connaught Place Branch, New Delhi)"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:border-amber-500 outline-none"
                />
              </div>

              {/* Row 5: Nominee Name & Relationship (Strict 2 columns with Modal Search Dropdown) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Nominee Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("nomineeFullName", { required: "Nominee is required" })}
                    placeholder="e.g. Sunita Singhania"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-bold focus:border-amber-500 outline-none"
                  />
                  {errors.nomineeFullName && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.nomineeFullName.message}</p>}
                </div>

                <Controller
                  name="nomineeRelationship"
                  control={control}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Nominee Relationship"
                      modalTitle="Select Nominee Relationship"
                      placeholder="Select Relationship"
                      options={NOMINEE_RELATION_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>

              {/* Row 6: Acknowledgment Checkbox (Single full width) */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("agreementAcknowledged", { required: "You must accept the terms" })}
                    className="mt-0.5 rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-xs text-stone-600 leading-relaxed">
                    I agree to custodial farm management, sex-sorted AI breeding protocols, and 10-year biological herd compounding terms under Hira Dairy Farm.
                  </span>
                </label>
                {errors.agreementAcknowledged && (
                  <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.agreementAcknowledged.message}</p>
                )}
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
                      <span>Generating Certificate...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Subscribe & Allocate Herd</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Live Compounding Certificate Projection (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Investment Summary Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-800 via-amber-900 to-stone-900 text-white shadow-2xl space-y-4">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-amber-300 block">
                Subscription & Compounding Overview
              </span>

              <div className="space-y-1">
                <span className="text-xs text-amber-200">Total Capital Committed</span>
                <div className="text-3xl font-black text-amber-100">₹{formatNumber(totalInvestmentINR)}</div>
                <p className="text-[11px] text-amber-300">
                  {packagesNum} Murrah Dam{packagesNum > 1 ? "s" : ""} + {packagesNum} Female Heifer Calf{packagesNum > 1 ? "ves" : ""}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-300">10-Year Estimated Herd:</span>
                  <span className="font-mono font-bold text-amber-200 text-sm">~{year10EstHerdSize} Buffaloes</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-300">Yr-10 Est. Milk Turnover:</span>
                  <span className="font-mono font-bold text-emerald-300 text-sm">₹{formatNumber(year10EstMilkRevenueINR)}/yr</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-amber-200/90 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Comprehensive National Insurance & Ear-Tag RFID Guarantee</span>
              </div>
            </div>

            {/* Allocation Status Card */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="font-bold text-stone-600 flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-amber-600" /> Certificate Registry Status
                </span>
                <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
                  {watched.panNumber || "PAN Pending"}
                </span>
              </div>

              <div className="space-y-2 text-stone-700">
                <div className="flex justify-between">
                  <span>Subscriber:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.investorFullName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Packages:</span>
                  <span className="font-bold text-amber-700">{watched.packageCount} Unit(s)</span>
                </div>
                <div className="flex justify-between">
                  <span>Nominee:</span>
                  <span className="font-bold">{watched.nomineeFullName} ({watched.nomineeRelationship})</span>
                </div>
                <div className="flex justify-between">
                  <span>Payout Bank:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.bankName}</span>
                </div>
              </div>

              {allocationDone && (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-[11px] flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Allocation active for {allocationDone.investorFullName}. Certificate #HR-{allocationDone.panNumber.slice(0, 5)} generated.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InputSwitcher currentInputId="page-6" />
    </div>
  );
}
