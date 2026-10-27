"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/Toaster";
import { InputSwitcher } from "@/components/InputSwitcher";
import { SearchableSelect } from "@/components/SearchableSelect";
import { formatNumber } from "@/lib/dairy-compounding";
import {
  Zap,
  Save,
  RotateCcw,
  CheckCircle2,
  Sun,
  BatteryCharging,
  Fuel,
  Loader2,
} from "lucide-react";

interface EnergyTelemetryForm {
  powerNodeId: string;
  meterDate: string;
  gridImportKwh: number;
  solarGenerationKwh: number;
  dgRunDurationHours: number;
  dieselConsumedLiters: number;
  dieselRatePerLiterINR: number;
  chillerUpsTransferPriority: string;
  dutyElectricalEngineerName: string;
  solarInverterHeatsinkCleaned: boolean;
}

const POWER_NODE_OPTIONS = [
  { value: "PRIMARY-SUBSTATION-FEED (11kV Grid)", label: "Primary Substation Feed — 11 kV Dedicated Agri Feeder", badge: "Grid Main", description: "State grid high-tension agricultural power line" },
  { value: "ROOFTOP-SOLAR-ARRAY (50 kW Bi-Facial)", label: "Rooftop Solar Array — 50 kW Bi-Facial Glass Panels (Barn Roof)", badge: "Clean Solar", description: "Zero-emission solar generation powering daytime chillers and fans" },
  { value: "CUMMINS-DG-SET-125kVA (Silent Backup)", label: "Cummins DG Genset — 125 kVA Silent Soundproof Backup", badge: "Cold-Chain Backup", description: "Automatic Mains Failure (AMF) generator starting in 8 seconds" },
];

const TRANSFER_PRIORITY_OPTIONS = [
  { value: "Instant Static Transfer Switch (<10ms)", label: "Instant Static Transfer Switch (<10ms — Zero Chiller Trip)", badge: "Critical", description: "Ensures bulk milk cooler compressor never drops pressure" },
  { value: "Automatic Mains Failure (AMF 8-Sec Delay)", label: "Automatic Mains Failure AMF Relay (8-Second Start)", badge: "Standard", description: "Auto cranks diesel genset when grid voltage sags below 380V" },
  { value: "Battery ESS Solar Micro-Grid Smoothing", label: "Battery ESS Solar Micro-Grid (Peak Shaving Storage)", badge: "Storage", description: "Discharges lithium batteries during evening peak tariff hours" },
];

export default function InputPage19() {
  const { toast } = useToast();
  const [energySaved, setEnergySaved] = useState<EnergyTelemetryForm | null>(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<EnergyTelemetryForm>({
    defaultValues: {
      powerNodeId: "ROOFTOP-SOLAR-ARRAY (50 kW Bi-Facial)",
      meterDate: "2026-10-27",
      gridImportKwh: 340,
      solarGenerationKwh: 215,
      dgRunDurationHours: 1.5,
      dieselConsumedLiters: 18.5,
      dieselRatePerLiterINR: 89.5,
      chillerUpsTransferPriority: "Instant Static Transfer Switch (<10ms)",
      dutyElectricalEngineerName: "Er. Gaurav Joshi (Chief Plant Engineer)",
      solarInverterHeatsinkCleaned: true,
    },
  });

  const watched = watch();

  const totalKwhConsumed = (watched.gridImportKwh || 0) + (watched.solarGenerationKwh || 0);
  const solarSharePercentage = totalKwhConsumed > 0 ? Math.round(((watched.solarGenerationKwh || 0) / totalKwhConsumed) * 100) : 38;
  const dieselCostINR = Math.round((watched.dieselConsumedLiters || 0) * (watched.dieselRatePerLiterINR || 89.5));

  const onSubmit = async (data: EnergyTelemetryForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmittingForm(false);
    setEnergySaved(data);
    toast({
      type: "success",
      title: "Energy & Cold-Chain Power Telemetry Logged!",
      description: `Total ${totalKwhConsumed} kWh logged (${solarSharePercentage}% Green Solar). DG Backup: ${data.dgRunDurationHours}h (₹${formatNumber(dieselCostINR)}).`,
    });
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "Energy Log Draft Saved",
      description: "Power consumption telemetry cached safely.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50/70 via-amber-50/20 to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-yellow-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-yellow-500 to-amber-600 text-white flex items-center justify-center font-black shadow-md shadow-yellow-300/40">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                SOLAR GRID & DIESEL GENSET LOG <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 font-mono font-bold border border-yellow-300">Input Form 19</span>
              </Link>
              <p className="text-[11px] text-yellow-700 font-medium">50kW Solar Array, 125kVA Backup AMF Genset & Uninterrupted Cold Chain</p>
            </div>
          </div>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-md shadow-yellow-300/40 transition"
          >
            Hub Home &rarr;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-yellow-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
                Energy Infrastructure Telemetry
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                Farm Power & Genset Journal
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Zero cold chain interruption is mandatory for raw A2 milk chilling. Monitor rooftop solar generation and backup diesel generator reserves.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Power Node & Date (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="powerNodeId"
                  control={control}
                  rules={{ required: "Power node required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Primary Power Node / Generation Source"
                      modalTitle="Select Power Telemetry Node"
                      placeholder="Select Power Node"
                      options={POWER_NODE_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Meter Reading Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    {...register("meterDate", { required: "Date is required" })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-amber-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Grid Import & Solar Generation (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    State Grid Import Energy (kWh) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("gridImportKwh", { required: "Grid kWh required", valueAsNumber: true })}
                    placeholder="340"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-amber-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Agricultural subsidized rate: ₹6.80 / unit</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Rooftop Solar Generated (kWh) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("solarGenerationKwh", { required: "Solar kWh required", valueAsNumber: true })}
                    placeholder="215"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-amber-600 focus:border-amber-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Clean carbon-neutral solar energy</p>
                </div>
              </div>

              {/* Row 3: DG Runtime & Diesel Consumed (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Genset Backup Run Duration (Hours)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("dgRunDurationHours", { valueAsNumber: true })}
                    placeholder="1.5"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-amber-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Auto triggered during grid blackout</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Diesel Consumed (Liters)
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    {...register("dieselConsumedLiters", { valueAsNumber: true })}
                    placeholder="18.5"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold text-rose-600 focus:border-amber-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 4: Chiller UPS Priority & Diesel Rate (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="chillerUpsTransferPriority"
                  control={control}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Chiller Switchgear Priority"
                      modalTitle="Select Cold-Chain Switchgear Priority"
                      placeholder="Select Priority"
                      options={TRANSFER_PRIORITY_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Diesel Price per Liter (INR ₹)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("dieselRatePerLiterINR", { valueAsNumber: true })}
                    placeholder="89.5"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-amber-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 5: Engineer Signoff (Single column full width) */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Duty Electrical Engineer <span className="text-rose-500">*</span>
                </label>
                <input
                  {...register("dutyElectricalEngineerName", { required: "Engineer name required" })}
                  placeholder="Er. Gaurav Joshi (Chief Plant Engineer)"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:border-amber-500 outline-none"
                />
              </div>

              {/* Row 6: Heatsink Checkbox (Single full width) */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("solarInverterHeatsinkCleaned")}
                    className="mt-0.5 rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-xs text-stone-600 leading-relaxed font-medium">
                    Solar panel dust wash completed with recycled RO reject water, inverter cooling fins cleared of hay dust, and battery terminal petroleum jelly reapplied.
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
                    className="px-4 py-2.5 rounded-xl border border-yellow-200 bg-yellow-50 text-xs font-bold text-yellow-800 hover:bg-yellow-100 transition flex items-center gap-1.5"
                  >
                    {isSavingDraft ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    <span>{isSavingDraft ? "Saving..." : "Save Draft"}</span>
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingForm || isSavingDraft}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-black text-xs shadow-md shadow-yellow-400/40 hover:opacity-95 active:scale-95 transition flex items-center gap-2"
                >
                  {isSubmittingForm ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Logging Energy Telemetry...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Post Energy & Power Log</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Energy Telemetry Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-700 via-yellow-700 to-stone-900 text-white shadow-2xl space-y-4">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-yellow-200 block">
                Daily Power Balance
              </span>

              <div className="space-y-1">
                <span className="text-xs text-yellow-200">Total Energy Consumed</span>
                <div className="text-3xl font-black text-white">
                  {totalKwhConsumed} kWh
                </div>
                <p className="text-[11px] text-yellow-300 font-bold">
                  {solarSharePercentage}% Green Solar Offset (Zero Cost Power)
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-200">Diesel Genset Cost:</span>
                  <span className="font-mono font-bold text-white">₹{formatNumber(dieselCostINR)} ({watched.dieselConsumedLiters}L)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-200">Cold Chain Transfer:</span>
                  <span className="font-mono text-emerald-300 font-bold">Zero Trip Protection</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="font-bold text-stone-600 flex items-center gap-1.5">
                  <BatteryCharging className="w-4 h-4 text-amber-600" /> Switchgear Health
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                  ONLINE OK
                </span>
              </div>

              <div className="space-y-2 text-stone-700">
                <div className="flex justify-between">
                  <span>Active Feed:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.powerNodeId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Solar Harvest:</span>
                  <span className="font-bold text-amber-600">{watched.solarGenerationKwh} kWh Produced</span>
                </div>
                <div className="flex justify-between">
                  <span>Grid Units:</span>
                  <span className="font-bold">{watched.gridImportKwh} kWh Import</span>
                </div>
                <div className="flex justify-between">
                  <span>Duty Engineer:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.dutyElectricalEngineerName}</span>
                </div>
              </div>

              {energySaved && (
                <div className="p-3 rounded-xl bg-yellow-50 border border-yellow-200 text-yellow-950 text-[11px] flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Telemetry record #{energySaved.meterDate} stored in microgrid controller.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InputSwitcher currentInputId="page-19" />
    </div>
  );
}
