"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/Toaster";
import { InputSwitcher } from "@/components/InputSwitcher";
import { SearchableSelect } from "@/components/SearchableSelect";
import {
  ShieldAlert,
  Save,
  RotateCcw,
  CheckCircle2,
  AlertOctagon,
  HeartPulse,
  Activity,
  Loader2,
} from "lucide-react";

interface QuarantineAdmissionForm {
  stallId: string;
  tagId: string;
  admissionDate: string;
  suspectedCondition: string;
  rectalTemperatureF: number;
  heartRateBpm: number;
  rumenMotilityScore: string;
  bioContainmentLevel: string;
  attendingVetName: string;
  footbathBarrierActivated: boolean;
}

const STALL_OPTIONS = [
  { value: "STALL-ISO-01 (Negative Pressure Unit)", label: "Stall ISO-01 — Negative Pressure Isolation Unit", badge: "Highest Containment", description: "HEPA air filtration and separate drainage pit" },
  { value: "STALL-ISO-02 (Downer Cow Recovery)", label: "Stall ISO-02 — Soft Sand Downer Cow Convalescence Bay", badge: "Padding Bed", description: "Equipped with veterinary overhead sling and hoist" },
  { value: "STALL-ISO-03 (Mastitis Treatment Pen)", label: "Stall ISO-03 — Mastitis Antibiotic Therapy Stall", badge: "Milk Segregated", description: "Dedicated portable vacuum bucket milking unit" },
];

const CONDITION_OPTIONS = [
  { value: "Acute Clinical Mastitis (Quarter Flakes)", label: "Acute Clinical Mastitis (Hot udder, clot flakes in milk)", badge: "Milk Quarantine", description: "Requires intra-mammary antibiotics and milk segregation" },
  { value: "Bovine Ephemeral Fever (3-Day Stiff Sickness)", label: "Bovine Ephemeral Fever (High fever 105°F, stiff gait)", badge: "Vector Borne", description: "Supportive anti-inflammatory and hydration drip therapy" },
  { value: "Post-Partum Hypocalcemia (Milk Fever)", label: "Post-Partum Hypocalcemia (Milk Fever, S-shape neck)", badge: "Emergency IV", description: "Immediate IV calcium borogluconate slow infusion required" },
  { value: "Severe Ruminal Tympany (Acute Bloat)", label: "Severe Ruminal Tympany (Distended left flank, dyspnea)", badge: "Digestive", description: "Trocar cannula or stomach tube decompression emergency" },
  { value: "Contagious Hoof Rot / Interdigital Necrosis", label: "Contagious Hoof Rot / Interdigital Necrosis", badge: "Footbath", description: "Copper sulfate topical dressing and isolation from herd" },
];

const BIO_CONTAINMENT_OPTIONS = [
  { value: "Level 3: Full Air & Effluent Isolation", label: "Level 3 — Complete Physical & Effluent Isolation", badge: "Max Guard", description: "PPE suit mandatory, waste burnt or chemically sterilized" },
  { value: "Level 2: Segregated Feed & Milking Line", label: "Level 2 — Dedicated Milking Bucket & Sanitized Troughs", badge: "Standard Sick Bay", description: "Prevent cross-contamination via herd milking machine" },
  { value: "Level 1: Convalescent Observation", label: "Level 1 — General Convalescent Observation Pen", badge: "Mild Care", description: "Nutritional rest and mineral convalescence" },
];

export default function InputPage13() {
  const { toast } = useToast();
  const [admissionSaved, setAdmissionSaved] = useState<QuarantineAdmissionForm | null>(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<QuarantineAdmissionForm>({
    defaultValues: {
      stallId: "STALL-ISO-01 (Negative Pressure Unit)",
      tagId: "IN-HR-2026-0881",
      admissionDate: "2026-10-27",
      suspectedCondition: "Acute Clinical Mastitis (Quarter Flakes)",
      rectalTemperatureF: 103.8,
      heartRateBpm: 78,
      rumenMotilityScore: "1 movement per 2 minutes (Hypo-motile)",
      bioContainmentLevel: "Level 2: Segregated Feed & Milking Line",
      attendingVetName: "Dr. Ananya Sharma",
      footbathBarrierActivated: true,
    },
  });

  const watched = watch();

  const isFever = (watched.rectalTemperatureF || 101.5) > 102.5; // Normal buffalo rectal temp = 100.5 - 102.0°F

  const onSubmit = async (data: QuarantineAdmissionForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmittingForm(false);
    setAdmissionSaved(data);
    toast({
      type: "warning",
      title: "Quarantine Stall Admission Logged!",
      description: `Buffalo ${data.tagId} admitted into ${data.stallId}. Condition: ${data.suspectedCondition}. Temp: ${data.rectalTemperatureF}°F.`,
    });
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "Quarantine Admission Draft Saved",
      description: "Sick bay clinical entry stored in local memory.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50/70 via-rose-50/30 to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-rose-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-red-600 text-white flex items-center justify-center font-black shadow-md shadow-rose-300/40">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                QUARANTINE & SICK BAY ADMISSION <span className="text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-mono font-bold border border-rose-300">Input Form 13</span>
              </Link>
              <p className="text-[11px] text-rose-700 font-medium">Bovine Isolation Protocols, Vital Signs Monitoring & Disease Bio-Containment</p>
            </div>
          </div>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs shadow-md shadow-rose-300/40 transition"
          >
            Hub Home &rarr;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-rose-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
                Herd Biosecurity Shield
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                Quarantine & Isolation Admission
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Immediately separate symptomatic animals to protect the healthy 99% milking herd from contagious outbreaks.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Stall ID & Animal Tag (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="stallId"
                  control={control}
                  rules={{ required: "Stall ID required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Isolation Stall / Sick Bay Unit"
                      modalTitle="Select Quarantine Stall"
                      placeholder="Select Stall"
                      options={STALL_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Buffalo Ear Tag ID <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("tagId", { required: "Animal Tag ID is required" })}
                    placeholder="e.g. IN-HR-2026-0881"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-rose-500 outline-none"
                  />
                  {errors.tagId && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.tagId.message}</p>}
                </div>
              </div>

              {/* Row 2: Condition & Admission Date (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="suspectedCondition"
                  control={control}
                  rules={{ required: "Condition required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Suspected Clinical Condition"
                      modalTitle="Select Clinical Condition / Diagnosis"
                      placeholder="Select Condition"
                      options={CONDITION_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Admission Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    {...register("admissionDate", { required: "Date is required" })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-rose-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Rectal Temp & Heart Rate (Strict 2 columns) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Rectal Temperature (°F) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("rectalTemperatureF", { required: "Temperature required", valueAsNumber: true })}
                    placeholder="103.8"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-rose-600 focus:border-rose-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Normal: 100.5 - 102.0°F &bull; Fever &gt; 102.5°F</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Heart Rate (Beats / Minute)</label>
                  <input
                    type="number"
                    {...register("heartRateBpm", { valueAsNumber: true })}
                    placeholder="78"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-rose-500 outline-none"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Normal resting rate: 45 - 60 BPM</p>
                </div>
              </div>

              {/* Row 4: Bio-Containment Level & Attending Vet (Strict 2 columns with SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="bioContainmentLevel"
                  control={control}
                  render={({ field }) => (
                    <SearchableSelect
                      label="Bio-Containment Level"
                      modalTitle="Select Bio-Containment Protocol"
                      placeholder="Select Protocol Level"
                      options={BIO_CONTAINMENT_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Attending Veterinarian <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("attendingVetName", { required: "Vet name required" })}
                    placeholder="Dr. Ananya Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:border-rose-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 5: Rumen Motility Notes (Single column full width) */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Rumen Motility & Stethoscope Findings</label>
                <input
                  {...register("rumenMotilityScore")}
                  placeholder="e.g. 1 movement per 2 minutes (Hypo-motile, mild gas ping on left flank)"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:border-rose-500 outline-none"
                />
              </div>

              {/* Row 6: Safety Footbath Checkbox (Single full width) */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("footbathBarrierActivated")}
                    className="mt-0.5 rounded border-stone-300 text-rose-600 focus:ring-rose-500"
                  />
                  <span className="text-xs text-stone-600 leading-relaxed font-medium">
                    Copper sulfate / Virkon-S footbath barrier filled at the stall entry threshold. Separate gumboots assigned to attending caretaker.
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
                    className="px-4 py-2.5 rounded-xl border border-rose-200 bg-rose-50 text-xs font-bold text-rose-700 hover:bg-rose-100 transition flex items-center gap-1.5"
                  >
                    {isSavingDraft ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    <span>{isSavingDraft ? "Saving..." : "Save Draft"}</span>
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingForm || isSavingDraft}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-black text-xs shadow-md shadow-rose-400/40 hover:opacity-95 active:scale-95 transition flex items-center gap-2"
                >
                  {isSubmittingForm ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Admitting to Sick Bay...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Admit into Isolation Bay</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Triage Status Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-red-800 via-rose-900 to-stone-900 text-white shadow-2xl space-y-4">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-rose-300 block">
                Biosecurity Triage Monitor
              </span>

              <div className="space-y-1">
                <span className="text-xs text-rose-200">Clinical Temperature</span>
                <div className="text-3xl font-black text-white flex items-center gap-2">
                  <span>{watched.rectalTemperatureF}°F</span>
                  {isFever ? (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-red-500 text-white font-bold animate-pulse">
                      FEBRILE &gt; 102.5°F
                    </span>
                  ) : (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500 text-white font-bold">
                      AFEBRILE
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-rose-200">
                  Animal: <strong>{watched.tagId}</strong> in {watched.stallId}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-rose-200">Condition:</span>
                  <span className="font-bold text-white truncate max-w-[190px]">{watched.suspectedCondition}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-rose-200">Heart Rate:</span>
                  <span className="font-mono text-emerald-300">{watched.heartRateBpm} BPM</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="font-bold text-stone-600 flex items-center gap-1.5">
                  <AlertOctagon className="w-4 h-4 text-rose-600" /> Containment Pass
                </span>
                <span className="text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full font-bold">
                  BIO-LOCK ACTIVE
                </span>
              </div>

              <div className="space-y-2 text-stone-700">
                <div className="flex justify-between">
                  <span>Isolation Unit:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.stallId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Containment Level:</span>
                  <span className="font-bold text-rose-700 truncate max-w-[170px]">{watched.bioContainmentLevel}</span>
                </div>
                <div className="flex justify-between">
                  <span>Attending Vet:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[170px]">{watched.attendingVetName}</span>
                </div>
              </div>

              {admissionSaved && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 text-[11px] flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Isolation admitted. Tag #{admissionSaved.tagId} assigned to {admissionSaved.stallId}.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InputSwitcher currentInputId="page-13" />
    </div>
  );
}
