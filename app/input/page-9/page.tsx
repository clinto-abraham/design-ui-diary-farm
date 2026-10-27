"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/Toaster";
import { InputSwitcher } from "@/components/InputSwitcher";
import { SearchableSelect } from "@/components/SearchableSelect";
import { formatNumber } from "@/lib/dairy-compounding";
import {
  Receipt,
  Save,
  RotateCcw,
  CheckCircle2,
  CreditCard,
  Building,
  Loader2,
} from "lucide-react";

interface OperationalExpenseForm {
  voucherNumber: string;
  voucherDate: string;
  expenseCategory: string;
  paidToVendorOrWorker: string;
  amountINR: number;
  paymentMode: string;
  invoiceReferenceNumber: string;
  approvedByManager: string;
  expenseDescription: string;
  isTaxInvoiceAvailable: boolean;
}

const EXPENSE_CATEGORY_OPTIONS = [
  { value: "Green Fodder & Feed Purchases", label: "Green Fodder & Feed Purchases (Napier, Silage, Bhusa)", badge: "Feed 60%", description: "Largest operational line item directly tied to milk yield" },
  { value: "Milking Labour & Yard Wages", label: "Milking Labour, Caretakers & Farm Yard Wages", badge: "Manpower", description: "Bovine caretakers, daily manual or machine milkers" },
  { value: "Veterinary Medicines & AI Straws", label: "Veterinary Medicines, Vaccines & AI Semen Straws", badge: "Genetics & Health", description: "Preventative shots, antibiotics, sex-sorted straws" },
  { value: "Diesel for Backup Generator", label: "Diesel for Power Backup & BMC Water Pumps", badge: "Energy", description: "Maintains cold chain chilling integrity during outages" },
  { value: "Barn Disinfection & Biosecurity", label: "Barn Disinfection, Bleaching Powder & Biosecurity", badge: "Hygiene", description: "Foot dips, teat dips, lime wash, organic pest sprays" },
  { value: "Milking Machine & Chiller Maintenance", label: "Milking Machine, Vacuum Pump & Chiller Maintenance", badge: "CAPEX Servicing", description: "Liner replacements, vacuum oil, compressor servicing" },
];

const PAYMENT_MODE_OPTIONS = [
  { value: "UPI Instant Transfer", label: "UPI Instant Transfer (GPay / PhonePe / Paytm)", badge: "Immediate" },
  { value: "NEFT / RTGS Bank Transfer", label: "NEFT / RTGS Direct Bank Transfer", badge: "Bank Settlement" },
  { value: "Farm Cash Petty Account", label: "Farm Cash Petty Account (Daily Labour)", badge: "Cash" },
  { value: "Account Payee Cheque", label: "Account Payee Cheque (Vendor Ledger)", badge: "Cheque" },
];

export default function InputPage9() {
  const { toast } = useToast();
  const [voucherSaved, setVoucherSaved] = useState<OperationalExpenseForm | null>(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<OperationalExpenseForm>({
    defaultValues: {
      voucherNumber: "VOUCHER-2026-1049",
      voucherDate: "2026-10-27",
      expenseCategory: "Green Fodder & Feed Purchases",
      paidToVendorOrWorker: "Chaudhary Fodder Traders (Karnal)",
      amountINR: 14500,
      paymentMode: "UPI Instant Transfer",
      invoiceReferenceNumber: "INV-CH-9921",
      approvedByManager: "Surinder Pal (Farm Operations Manager)",
      expenseDescription: "Purchase of 6,500 kg green Napier forage delivered at bunker yard.",
      isTaxInvoiceAvailable: true,
    },
  });

  const watched = watch();

  const onSubmit = async (data: OperationalExpenseForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmittingForm(false);
    setVoucherSaved(data);
    toast({
      type: "success",
      title: "Expense Voucher Approved & Logged!",
      description: `₹${formatNumber(data.amountINR)} paid to ${data.paidToVendorOrWorker} for ${data.expenseCategory}. Voucher #${data.voucherNumber}.`,
    });
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "Voucher Draft Preserved",
      description: "Financial journal entry cached locally.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/70 via-slate-50 to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-indigo-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-600 text-white flex items-center justify-center font-black shadow-md shadow-indigo-300/40">
              <Receipt className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                FARM OPEX & VOUCHER AUDITING <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-mono font-bold border border-indigo-300">Input Form 09</span>
              </Link>
              <p className="text-[11px] text-indigo-700 font-medium">Daily Operating Expenses, Fodder Procurement & Farm Labour Payroll</p>
            </div>
          </div>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-md shadow-indigo-300/40 transition"
          >
            Hub Home &rarr;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-indigo-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700">
                Accounts & Audit Ledger
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                Farm Operational Expense Voucher
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Maintain accurate operational expense auditing for fodder, veterinary visits, fuel, and staff wages.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Voucher Number & Date (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Voucher Serial # <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("voucherNumber", { required: "Voucher # required" })}
                    placeholder="VOUCHER-2026-1049"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-indigo-500 outline-none uppercase"
                  />
                  {errors.voucherNumber && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.voucherNumber.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Voucher Date</label>
                  <input
                    type="date"
                    {...register("voucherDate", { required: "Date required" })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-indigo-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Expense Category (Single full width with SearchableSelect) */}
              <Controller
                name="expenseCategory"
                control={control}
                rules={{ required: "Expense category required" }}
                render={({ field }) => (
                  <SearchableSelect
                    label="Expense Ledger Category"
                    modalTitle="Select Operational Expense Ledger Head"
                    placeholder="Select Expense Head"
                    options={EXPENSE_CATEGORY_OPTIONS}
                    value={field.value}
                    onChange={field.onChange}
                    required
                  />
                )}
              />

              {/* Row 3: Paid To & Amount (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Paid To (Payee / Vendor / Worker) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("paidToVendorOrWorker", { required: "Payee name required" })}
                    placeholder="e.g. Chaudhary Fodder Traders"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-bold focus:border-indigo-500 outline-none"
                  />
                  {errors.paidToVendorOrWorker && (
                    <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.paidToVendorOrWorker.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Amount Paid (INR ₹) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("amountINR", { required: "Amount is required", min: 1, valueAsNumber: true })}
                    placeholder="14500"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-indigo-950 focus:border-indigo-500 outline-none"
                  />
                  {errors.amountINR && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.amountINR.message}</p>}
                </div>
              </div>

              {/* Row 4: Payment Mode & Bill Ref (Strict 2 columns with Modal Search Dropdown) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="paymentMode"
                  control={control}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Payment Mode"
                      modalTitle="Select Payment Disbursement Mode"
                      placeholder="Select Mode"
                      options={PAYMENT_MODE_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Receipt / Invoice Ref #</label>
                  <input
                    {...register("invoiceReferenceNumber")}
                    placeholder="INV-CH-9921"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-indigo-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 5: Manager Approval & Tax Toggle (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Authorizing Manager <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("approvedByManager", { required: "Manager approval required" })}
                    placeholder="Surinder Pal"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:border-indigo-500 outline-none"
                  />
                </div>

                <div className="flex items-center pt-5">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register("isTaxInvoiceAvailable")}
                      className="rounded border-stone-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-xs font-bold text-stone-800">GST Tax Invoice Attached</span>
                  </label>
                </div>
              </div>

              {/* Row 6: Description (Single full width) */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Expense Narration / Purpose</label>
                <textarea
                  {...register("expenseDescription")}
                  rows={2}
                  placeholder="Details of goods received, worker hours, or repairs performed..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:border-indigo-500 outline-none"
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
                    className="px-4 py-2.5 rounded-xl border border-indigo-200 bg-indigo-50 text-xs font-bold text-indigo-800 hover:bg-indigo-100 transition flex items-center gap-1.5"
                  >
                    {isSavingDraft ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    <span>{isSavingDraft ? "Saving..." : "Save Draft"}</span>
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingForm || isSavingDraft}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-black text-xs shadow-md shadow-indigo-400/40 hover:opacity-95 active:scale-95 transition flex items-center gap-2"
                >
                  {isSubmittingForm ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Posting Ledger Entry...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Post Expense Voucher</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Ledger Summary Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-800 via-indigo-900 to-slate-900 text-white shadow-2xl space-y-4">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-indigo-300 block">
                Disbursement Telemetry
              </span>

              <div className="space-y-1">
                <span className="text-xs text-indigo-200">Voucher Value</span>
                <div className="text-3xl font-black text-indigo-100">₹{formatNumber(watched.amountINR || 0)}</div>
                <p className="text-[11px] text-indigo-300">
                  Paid to {watched.paidToVendorOrWorker || "Payee Pending"}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-indigo-200">Category:</span>
                  <span className="font-bold text-white truncate max-w-[190px]">{watched.expenseCategory}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-indigo-200">Channel:</span>
                  <span className="font-mono text-emerald-300">{watched.paymentMode}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="font-bold text-stone-600 flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-indigo-600" /> Audit Trail Reference
                </span>
                <span className="text-[10px] bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full font-bold">
                  {watched.voucherNumber}
                </span>
              </div>

              <div className="space-y-2 text-stone-700">
                <div className="flex justify-between">
                  <span>Sign-off:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.approvedByManager}</span>
                </div>
                <div className="flex justify-between">
                  <span>Invoice Attached:</span>
                  <span className="font-bold text-emerald-700">{watched.isTaxInvoiceAvailable ? "Yes (Tax Bill)" : "Cash Memo"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Invoice #:</span>
                  <span className="font-bold">{watched.invoiceReferenceNumber || "N/A"}</span>
                </div>
              </div>

              {voucherSaved && (
                <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-950 text-[11px] flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Voucher #{voucherSaved.voucherNumber} posted into primary journal.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InputSwitcher currentInputId="page-9" />
    </div>
  );
}
