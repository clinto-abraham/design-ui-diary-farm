"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Camera,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Tag,
  Scale,
  Milk,
  Calendar,
  Upload,
  Plus,
  Trash2,
  Download,
  Eye,
  Maximize2,
  Check,
} from "lucide-react";

interface GalleryPhoto {
  id: string;
  title: string;
  angle: string;
  url: string;
  timestamp: string;
  resolution: string;
  isCover?: boolean;
}

const DEFAULT_GALLERY_PHOTOS: Record<string, GalleryPhoto[]> = {
  default: [
    {
      id: "p1",
      title: "Frontal Head & Horn Curvature",
      angle: "Front Profile (30°)",
      url: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=1200&auto=format&fit=crop&q=80",
      timestamp: "2026-10-28 09:30 AM",
      resolution: "3840 x 2160 (4K UHD)",
      isCover: true,
    },
    {
      id: "p2",
      title: "Left Flank & Barrel Spring",
      angle: "Side Lateral Profile",
      url: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=1200&auto=format&fit=crop&q=80",
      timestamp: "2026-10-28 09:32 AM",
      resolution: "3840 x 2160 (4K UHD)",
    },
    {
      id: "p3",
      title: "Rear Udder Conformation & Teats",
      angle: "Rear Caudal Angle",
      url: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=1200&auto=format&fit=crop&q=80",
      timestamp: "2026-10-28 09:35 AM",
      resolution: "4000 x 3000 (HD)",
    },
    {
      id: "p4",
      title: "134.2 kHz RFID Ear-Tag Close-up",
      angle: "Macro Auricular Tag",
      url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&auto=format&fit=crop&q=80",
      timestamp: "2026-10-28 09:38 AM",
      resolution: "3024 x 4032 (Macro)",
    },
  ],
};

export default function AnimalPhotoInspectionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const animalId = decodeURIComponent(resolvedParams.id || "HIRA_A1_OCT26_BUFF_MUR_43");

  const [photos, setPhotos] = useState<GalleryPhoto[]>(DEFAULT_GALLERY_PHOTOS.default);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const activePhoto = photos[selectedPhotoIndex] || photos[0];

  const handleAddPhoto = () => {
    const newPhoto: GalleryPhoto = {
      id: `p${Date.now()}`,
      title: `Supplemental Inspection Angle #${photos.length + 1}`,
      angle: "Veterinary Angle",
      url: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=1200&auto=format&fit=crop&q=80",
      timestamp: "Just now",
      resolution: "4000 x 3000 (HD)",
    };
    setPhotos([...photos, newPhoto]);
    setToastMessage("New multi-view photo uploaded and attached to animal record!");
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/20 to-stone-100 text-slate-800 antialiased pb-20">
      {/* TOASTER NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-emerald-700 text-white px-6 py-3 rounded-2xl shadow-2xl border border-emerald-500 font-extrabold text-sm flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-200" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* TOP APP BAR */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <Link
            href="/marketplace/page-4"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 font-extrabold text-xs transition duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 text-stone-500 group-hover:-translate-x-1 transition-transform" />
            <span>&larr; Back to Package Builder (/marketplace/page-4)</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-black px-3 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300">
              Animal Tag: {animalId}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{photos.length} Verified Photos Attached</span>
            </span>
          </div>
        </div>
      </header>

      {/* MAIN GALLERY VIEW */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 space-y-6">
        {/* BANNER INFO */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 text-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-mono font-bold text-amber-100">
              <Camera className="w-3.5 h-3.5 text-yellow-300" />
              <span>MULTIPLE ATTACHED PHOTOS DOSSIER</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Bovine Multi-Angle Photographic Inspection Studio
            </h1>
            <p className="text-xs sm:text-sm text-amber-100 max-w-2xl">
              High-resolution confirmation gallery for ear-tag <span className="font-mono font-bold text-white">{animalId}</span>. Verify udder conformation, horn curling, flank capacity, and RFID physical tag readability before publishing.
            </p>
          </div>

          <button
            type="button"
            onClick={handleAddPhoto}
            className="px-5 py-3 rounded-2xl bg-white text-slate-900 hover:bg-amber-50 font-black text-xs shadow-md flex items-center justify-center gap-2 transition shrink-0"
          >
            <Plus className="w-4 h-4 text-amber-600" />
            <span>Attach Another Photo</span>
          </button>
        </div>

        {/* DUAL COLUMN: MAIN VIEWER + FILMSTRIP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* MAIN PHOTO DISPLAY (8 COLS) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-stone-200 p-4 sm:p-6 shadow-sm space-y-4">
            <div className="h-[480px] sm:h-[540px] rounded-2xl bg-stone-900 relative overflow-hidden group flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activePhoto.url}
                alt={activePhoto.title}
                className="w-full h-full object-cover group-hover:scale-102 transition duration-500"
              />

              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur text-white text-xs font-mono font-bold">
                  Angle: {activePhoto.angle}
                </span>
                {activePhoto.isCover && (
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black shadow-xs">
                    Main Marketplace Cover
                  </span>
                )}
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur rounded-2xl p-4 text-white flex items-center justify-between">
                <div>
                  <h3 className="font-black text-sm">{activePhoto.title}</h3>
                  <p className="text-[11px] text-stone-300">
                    Captured on {activePhoto.timestamp} • Resolution: {activePhoto.resolution}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold bg-white/10 px-2.5 py-1 rounded-lg text-emerald-400 border border-white/10">
                  HD Verified
                </span>
              </div>
            </div>

            {/* THUMBNAILS FILMSTRIP */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Attached Inspection Angles ({photos.length} Photos)
              </span>
              <div className="grid grid-cols-4 gap-3">
                {photos.map((photo, index) => {
                  const isSelected = index === selectedPhotoIndex;
                  return (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => setSelectedPhotoIndex(index)}
                      className={`h-24 rounded-2xl overflow-hidden border-2 transition relative group cursor-pointer ${
                        isSelected
                          ? "border-amber-500 ring-4 ring-amber-200"
                          : "border-stone-200 hover:border-amber-300 opacity-75 hover:opacity-100"
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={photo.url} alt={photo.title} className="w-full h-full object-cover" />
                      <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-slate-900/80 text-white text-[9px] font-mono font-bold">
                        #{index + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR: ANIMAL METADATA & CONFIRMATION (4 COLS) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm space-y-5">
              <div className="border-b border-stone-100 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block">
                  Attached Unit Meta
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-0.5">{animalId}</h3>
                <p className="text-xs text-slate-500 font-medium">100% Purebred Murrah Certified</p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-amber-600" /> Ear-Tag ID:
                  </span>
                  <span className="font-mono font-bold text-slate-900">{animalId}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-orange-600" /> Weighbridge Weight:
                  </span>
                  <span className="font-bold text-slate-900">585 kg</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Milk className="w-3.5 h-3.5 text-sky-600" /> Daily Milk Yield:
                  </span>
                  <span className="font-bold text-emerald-700">17.5 Liters/Day</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-600" /> Insurance Tag:
                  </span>
                  <span className="font-bold text-slate-900">1-Year Active Policy</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Photographic Verification Complete</span>
                </div>
                <p className="text-[11px] text-emerald-800 leading-relaxed">
                  All 4 standard veterinary inspection angles are attached and verified against the RFID microchip record.
                </p>
              </div>

              <Link
                href="/marketplace/page-4"
                className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs shadow-md transition flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Package Builder</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
