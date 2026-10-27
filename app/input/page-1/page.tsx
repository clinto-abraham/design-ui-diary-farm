"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/Toaster";
import { InputSwitcher } from "@/components/InputSwitcher";
import { SearchableSelect } from "@/components/SearchableSelect";
import {
  Tag,
  Save,
  RotateCcw,
  CheckCircle2,
  Radio,
  QrCode,
  Loader2,
} from "lucide-react";

interface BovineRegistryForm {
  tagId: string;
  rfidMicrochip: string;
  animalName: string;
  breed: string;
  dateOfBirth: string;
  weightKg: number;
  gender: string;
  sireTagId: string;
  damTagId: string;
  hornCurlStyle: string;
  acquisitionCostINR: number;
  healthRemarks: string;
}

const BREED_OPTIONS = [
  { value: "Murrah Pure", label: "Murrah Pure (Haryana Championship Strain)", badge: "Flagship", description: "Highest yield, 14-25 L/day, tight horn curl" },
  { value: "Nili-Ravi", label: "Nili-Ravi (Punjab Five-Wall Strain)", badge: "Punjab High Fat", description: "Distinct white wall-eyes, 12-18 L/day" },
  { value: "Jaffarabadi", label: "Jaffarabadi (Gir Forest Giant)", badge: "Heavy Body", description: "Heavy drooping horns, 15-22 L/day" },
  { value: "Surti", label: "Surti (Gujarat Compact Dairy Strain)", badge: "Compact", description: "Economic fodder consumption, 10-14 L/day" },
  { value: "Bhadawari", label: "Bhadawari (High Butterfat 10%+)", badge: "High Fat", description: "Copper colored coat, record 8.5-12% butterfat" },
];

const HORN_OPTIONS = [
  { value: "Tightly Curled (Sikku)", label: "Tightly Curled (Sikku - Pure Murrah Marker)", description: "Curled tightly backwards and inwards" },
  { value: "Flat Spiraled", label: "Flat Spiraled (Classic Nili)", description: "Spiraling horizontally outward" },
  { value: "Drooping Heavy", label: "Drooping Heavy (Jaffarabadi)", description: "Wide drooping curves along cheeks" },
  { value: "Sickle Shaped", label: "Sickle Shaped (Surti)", description: "Medium length sickle curving forward" },
];

const GENDER_OPTIONS = [
  { value: "Female (Cow-Buffalo)", label: "Female (Cow-Buffalo - Milking Cohort)", badge: "Milker" },
  { value: "Female (Heifer Calf)", label: "Female (Heifer Calf - Replacement)", badge: "Future Milker" },
  { value: "Male (Breeding Bull)", label: "Male (Breeding Sire Pedigree)", badge: "Breeder" },
];

export default function InputPage1() {
  const { toast } = useToast();
  const [lastSaved, setLastSaved] = useState<BovineRegistryForm | null>(null);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<BovineRegistryForm>({
    defaultValues: {
      tagId: "IN-HR-2026-0881",
      rfidMicrochip: "982000418921004",
      animalName: "Kalyani (Murrah Pure)",
      breed: "Murrah Pure",
      dateOfBirth: "2023-04-15",
      weightKg: 520,
      gender: "Female (Cow-Buffalo)",
      sireTagId: "BULL-ROHTAK-CHAMP-99",
      damTagId: "IN-HR-2019-0142",
      hornCurlStyle: "Tightly Curled (Sikku)",
      acquisitionCostINR: 150000,
      healthRemarks: "Prime condition, vaccinated for FMD & Brucellosis",
    },
  });

  const watched = watch();

  const onSubmit = async (data: BovineRegistryForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 900));
    setLastSaved(data);
    setIsSubmittingForm(false);
    toast({
      type: "success",
      title: "Bovine Registered Successfully!",
      description: `Tag ${data.tagId} (${data.animalName}) recorded in National RFID Livestock Database.`,
    });
  };

  const handleDraftSave = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "Draft Saved Locally",
      description: `Temporary draft for Tag ${watched.tagId || "New"} saved to browser storage.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/60 via-[#faf9f5] to-white text-stone-900 font-sans pb-28">
      {/* Header */}
      <header className="border-b border-amber-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-md shadow-amber-300/40">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                HIRA LIVESTOCK REGISTRY <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-mono font-bold border border-amber-300">Input Form 01</span>
              </Link>
              <p className="text-[11px] text-amber-700 font-medium">Bovine Ear Tag, RFID Microchip & Lineage Profiling</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              disabled={isSavingDraft || isSubmittingForm}
              onClick={handleDraftSave}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 transition shadow-2xs cursor-pointer"
            >
              {isSavingDraft ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : null}
              {isSavingDraft ? "Saving..." : "Save Draft"}
            </button>
            <Link
              href="/"
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs shadow-md shadow-amber-300/40 transition"
            >
              Hub Home &rarr;
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Form: STRICTLY 2 OR 1 INPUT PER ROW */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">
                Official Animal Husbandry Form
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                Pedigree & RFID Ear Tag Entry
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Register a mother buffalo, replacement heifer, or female calf with verified sire and dam genetics.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Ear Tag & Microchip (2 in a row) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Ear Tag ID <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("tagId", { required: "Ear Tag ID is mandatory" })}
                    placeholder="e.g. IN-HR-2026-0881"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition"
                  />
                  {errors.tagId && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.tagId.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    RFID 15-Digit Microchip ID <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("rfidMicrochip", {
                      required: "RFID Microchip is required",
                      pattern: { value: /^\d{15}$/, message: "Must be a 15-digit numeric RFID" },
                    })}
                    placeholder="e.g. 982000418921004"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition"
                  />
                  {errors.rfidMicrochip && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.rfidMicrochip.message}</p>}
                </div>
              </div>

              {/* Row 2: Animal Name & Breed (2 in a row, using SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Animal Name / Alias <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("animalName", { required: "Name is required" })}
                    placeholder="e.g. Kalyani"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition"
                  />
                  {errors.animalName && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.animalName.message}</p>}
                </div>

                <div>
                  <Controller
                    name="breed"
                    control={control}
                    rules={{ required: "Breed is required" }}
                    render={({ field }) => (
                      <SearchableSelect
                        label="Breed Lineage"
                        required
                        modalTitle="Select Bovine Breed"
                        value={field.value}
                        onChange={field.onChange}
                        options={BREED_OPTIONS}
                        error={errors.breed?.message}
                      />
                    )}
                  />
                </div>
              </div>

              {/* Row 3: DOB & Live Weight (2 in a row) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Date of Birth <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    {...register("dateOfBirth", { required: "Birth date required" })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Live Weight (kg) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("weightKg", { min: { value: 30, message: "Min 30 kg" }, valueAsNumber: true })}
                    placeholder="520"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-bold focus:border-amber-500 outline-none"
                  />
                  {errors.weightKg && <p className="text-[11px] text-rose-500 font-bold mt-1">{errors.weightKg.message}</p>}
                </div>
              </div>

              {/* Row 4: Gender & Horn Curl (2 in a row, using SearchableSelect) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <SearchableSelect
                        label="Gender & Category"
                        modalTitle="Select Gender / Category"
                        value={field.value}
                        onChange={field.onChange}
                        options={GENDER_OPTIONS}
                      />
                    )}
                  />
                </div>

                <div>
                  <Controller
                    name="hornCurlStyle"
                    control={control}
                    render={({ field }) => (
                      <SearchableSelect
                        label="Horn Curl Style Profiling"
                        modalTitle="Select Horn Curl Morphology"
                        value={field.value}
                        onChange={field.onChange}
                        options={HORN_OPTIONS}
                      />
                    )}
                  />
                </div>
              </div>

              {/* Row 5: Sire & Dam Lineage (2 in a row) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Sire (Father Bull ID)</label>
                  <input
                    {...register("sireTagId")}
                    placeholder="e.g. BULL-ROHTAK-CHAMP-99"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Dam (Mother Cow Tag)</label>
                  <input
                    {...register("damTagId")}
                    placeholder="e.g. IN-HR-2019-0142"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-amber-500 outline-none"
                  />
                </div>
              </div>

              {/* Row 6: Acquisition Cost (Single input in a row) */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Book Value / Acquisition Cost (₹)</label>
                <input
                  type="number"
                  {...register("acquisitionCostINR", { valueAsNumber: true })}
                  placeholder="150000"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-amber-500 outline-none"
                />
              </div>

              {/* Row 7: Remarks (Single input in a row) */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Health & Veterinary Remarks</label>
                <textarea
                  {...register("healthRemarks")}
                  rows={2}
                  placeholder="Record vaccination history, general temperament, lactation stage..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:border-amber-500 outline-none"
                />
              </div>

              {/* Buttons with Loading Spinner */}
              <div className="pt-4 flex items-center justify-between border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => reset()}
                  disabled={isSubmittingForm}
                  className="px-4 py-2.5 rounded-xl border border-stone-300 text-xs font-bold text-stone-600 hover:bg-stone-100 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset Form
                </button>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    disabled={isSavingDraft || isSubmittingForm}
                    onClick={handleDraftSave}
                    className="px-4 py-2.5 rounded-xl border border-amber-300 bg-amber-50 text-amber-900 text-xs font-bold hover:bg-amber-100 transition cursor-pointer flex items-center gap-1.5"
                  >
                    {isSavingDraft ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : null}
                    {isSavingDraft ? "Saving..." : "Save Draft"}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmittingForm}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs shadow-md shadow-amber-400/40 hover:scale-105 active:scale-95 transition flex items-center gap-2 cursor-pointer disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {isSubmittingForm ? <Loader2 className="w-4 h-4 animate-spin text-slate-950" /> : <Save className="w-4 h-4" />}
                    {isSubmittingForm ? "Registering Bovine..." : "Submit Bovine Entry"}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Live Tag Preview & Badge */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-500 text-slate-950 shadow-2xl relative overflow-hidden border-2 border-yellow-200">
              <div className="flex items-center justify-between pb-4 border-b border-yellow-500/40">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-slate-950 animate-pulse" />
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-slate-900">
                    GOVT OF INDIA &bull; INAPH TAG
                  </span>
                </div>
                <Radio className="w-4 h-4 text-slate-900" />
              </div>

              <div className="py-6 text-center space-y-2">
                <span className="text-[11px] font-bold uppercase text-slate-800 tracking-wider block">
                  Official Livestock Ear Identifier
                </span>
                <div className="text-3xl sm:text-4xl font-mono font-black tracking-tight text-slate-950 bg-white/70 py-2 px-4 rounded-xl border border-yellow-600/30 shadow-inner">
                  {watched.tagId || "IN-HR-0000"}
                </div>
                <p className="text-xs font-bold text-slate-800">
                  {watched.animalName || "Unnamed Bovine"} &bull; {watched.breed}
                </p>
              </div>

              <div className="pt-3 border-t border-yellow-500/40 grid grid-cols-2 text-xs font-mono">
                <div>
                  <span className="text-[10px] uppercase text-slate-700 block">Weight</span>
                  <span className="font-bold text-slate-950">{watched.weightKg || 0} kg</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase text-slate-700 block">Valuation</span>
                  <span className="font-bold text-slate-950">₹{(watched.acquisitionCostINR || 0).toLocaleString("en-US")}</span>
                </div>
              </div>
            </div>

            {/* RFID Barcode & Quick Specs */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-lg space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <span className="text-xs font-bold text-stone-800 flex items-center gap-2">
                  <QrCode className="w-4 h-4 text-amber-600" /> Scannable RFID Telemetry
                </span>
                <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                  134.2 kHz FDX-B
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Microchip #:</span>
                  <span className="font-mono font-bold text-stone-900">{watched.rfidMicrochip || "None"}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Horn Curl:</span>
                  <span className="font-bold text-stone-900">{watched.hornCurlStyle}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Dam Line:</span>
                  <span className="font-mono text-stone-700">{watched.damTagId || "Unrecorded"}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">Sire Line:</span>
                  <span className="font-mono text-stone-700">{watched.sireTagId || "Unrecorded"}</span>
                </div>
              </div>

              {lastSaved && (
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Last Saved Record:</strong> {lastSaved.tagId} ({lastSaved.animalName}) with RFID {lastSaved.rfidMicrochip}.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Input Switcher with Next/Prev Side Arrows */}
      <InputSwitcher currentInputId="page-1" />
    </div>
  );
}
