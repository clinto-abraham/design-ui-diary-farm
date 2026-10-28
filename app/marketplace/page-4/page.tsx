"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Layers,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Milk,
  Scale,
  Award,
  Truck,
  Plus,
  Trash2,
  DollarSign,
  PackageCheck,
  RefreshCw,
  Check,
  Eye,
  Camera,
  Upload,
  Search,
  X,
  ChevronDown,
  Filter,
  Repeat,
  Calendar,
  Info,
  HelpCircle,
  Tag,
  Copy,
  Users,
  UserCheck,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

interface LactationOption {
  value: string;
  label: string;
  badge: string;
  description: string;
  isCalf: boolean;
}

const LACTATION_STAGE_OPTIONS: LactationOption[] = [
  {
    value: "Calf",
    label: "Calf (Non-Milking Young Stock)",
    badge: "Non-Milking",
    description: "Young heifer or female calf under 12 months. All milk yield & fat % parameters are NA.",
    isCalf: true,
  },
  {
    value: "1st Lactation",
    label: "1st Lactation (Fresh First-Calver)",
    badge: "Heifer Fresh",
    description: "Newly calved young adult buffalo, high genomic growth potential.",
    isCalf: false,
  },
  {
    value: "2nd Lactation",
    label: "2nd Lactation (Prime Production)",
    badge: "Prime Production",
    description: "Peak commercial milk yield, robust body conformation and maternal stability.",
    isCalf: false,
  },
  {
    value: "3rd Lactation",
    label: "3rd Lactation (Peak Mature Yield)",
    badge: "Peak Yield",
    description: "Highest sustained lactation curve, maximum mature fat and butterfat consistency.",
    isCalf: false,
  },
  {
    value: "4th Lactation",
    label: "4th Lactation (Mature Milch)",
    badge: "Mature Milch",
    description: "Proven commercial producer with stable morning/evening milk volume.",
    isCalf: false,
  },
  {
    value: "5th Lactation",
    label: "5th Lactation (Mid Parity)",
    badge: "Mid Parity",
    description: "Experienced dairy mother with regular calving intervals.",
    isCalf: false,
  },
  {
    value: "6th Lactation",
    label: "6th Lactation (Mid Parity)",
    badge: "Mid Parity",
    description: "Continued dependable production with high fat percentage.",
    isCalf: false,
  },
  {
    value: "7th Lactation",
    label: "7th Lactation (Senior Milch)",
    badge: "Senior Milch",
    description: "Consistent milch animal with excellent feed conversion traits.",
    isCalf: false,
  },
  {
    value: "8th Lactation",
    label: "8th Lactation (Senior Milch)",
    badge: "Senior Milch",
    description: "Seasoned bovine producer, steady lactation curve.",
    isCalf: false,
  },
  {
    value: "9th Lactation",
    label: "9th Lactation (Extended Parity)",
    badge: "Extended Parity",
    description: "Advanced lactation cycle with supervised ration management.",
    isCalf: false,
  },
  {
    value: "10th Lactation",
    label: "10th Lactation (Final Productive Cycle)",
    badge: "Final Parity",
    description: "Final productive lactation cycle prior to ethical sanctuary retirement.",
    isCalf: false,
  },
];

type PhotoAngleType =
  | "Front Side"
  | "Back Side"
  | "Udder"
  | "Left Side"
  | "Top Side"
  | "Right Side"
  | "RFID Tag";

const PHOTO_ANGLE_OPTIONS: PhotoAngleType[] = [
  "Front Side",
  "Back Side",
  "Udder",
  "Left Side",
  "Top Side",
  "Right Side",
  "RFID Tag",
];

interface AnimalPhoto {
  id: string;
  url: string;
  type: PhotoAngleType;
}

interface PackageAnimalItem {
  id: string;
  tagId: string;
  lactationStage: string;
  isCalf: boolean;
  weightKg: number;
  ageValue: number;
  ageUnit: "Days" | "Months";
  dailyMilkLiters: number | null; // null if Calf
  fatPercent: number | null; // null if Calf
  photos: AnimalPhoto[];
}

type AnimalSpecies = "buffalo" | "cow" | "goat" | "sheep";

interface SpeciesPreset {
  id: AnimalSpecies;
  label: string;
  emoji: string;
  breedName: string;
  breedCode: string;
  speciesCode: string;
  defaultPackageName: string;
  defaultPrice: number;
  priceLabel: string;
  apiEndpoint: string;
  adultLabel: string;
  youngLabel: string;
  transporter: string;
  animals: PackageAnimalItem[];
}

const SPECIES_PRESETS: Record<AnimalSpecies, SpeciesPreset> = {
  buffalo: {
    id: "buffalo",
    label: "Buffalo",
    emoji: "🐃",
    breedName: "Murrah",
    breedCode: "MUR",
    speciesCode: "BUFF",
    defaultPackageName: "1 Buffalo + 1 Calf",
    defaultPrice: 200000,
    priceLabel: "Standard 2 Lacs Allotment",
    apiEndpoint: "/api/v1/marketplace/packages/buffalo",
    adultLabel: "Milking Buffalo",
    youngLabel: "Calf",
    transporter: "MH-46-BM-7821 (Specialized 4-Carrier Cruiser)",
    animals: [
      {
        id: "a1",
        tagId: "HIRA_A1_OCT26_BUFF_MUR_43",
        lactationStage: "2nd Lactation",
        isCalf: false,
        weightKg: 580,
        ageValue: 48,
        ageUnit: "Months",
        dailyMilkLiters: 17.5,
        fatPercent: 8.1,
        photos: [
          { id: "p1", url: "/Murrah_buffalo.JPG", type: "Front Side" },
          { id: "p2", url: "/Murrah_buffalo.JPG", type: "Left Side" },
          { id: "p3", url: "/Murrah_buffalo.JPG", type: "Udder" },
          { id: "p4", url: "/Murrah_buffalo.JPG", type: "Back Side" },
        ],
      },
      {
        id: "a2",
        tagId: "HIRA_A2_OCT26_BUFF_MUR_44",
        lactationStage: "Calf",
        isCalf: true,
        weightKg: 85,
        ageValue: 65,
        ageUnit: "Days",
        dailyMilkLiters: null,
        fatPercent: null,
        photos: [
          { id: "c1", url: "/Kid_Buffalo.jpg", type: "Front Side" },
          { id: "c2", url: "/side_buffalo_kid.webp", type: "Left Side" },
          { id: "c3", url: "/Kid_Buffalo.jpg", type: "Top Side" },
        ],
      },
    ],
  },
  cow: {
    id: "cow",
    label: "Cow",
    emoji: "🐄",
    breedName: "Gir Vedic Cow",
    breedCode: "GIR",
    speciesCode: "COW",
    defaultPackageName: "1 Cow + 1 Calf",
    defaultPrice: 150000,
    priceLabel: "Standard 1.5 Lacs Allotment",
    apiEndpoint: "/api/v1/marketplace/packages/cow",
    adultLabel: "Milking Cow",
    youngLabel: "Calf",
    transporter: "MH-12-RN-4419 (Climate-Controlled Cow Cruiser)",
    animals: [
      {
        id: "cow_a1",
        tagId: "HIRA_A1_OCT26_COW_GIR_12",
        lactationStage: "2nd Lactation",
        isCalf: false,
        weightKg: 440,
        ageValue: 42,
        ageUnit: "Months",
        dailyMilkLiters: 14.5,
        fatPercent: 4.8,
        photos: [
          { id: "cp1", url: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=80", type: "Front Side" },
          { id: "cp2", url: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=800&auto=format&fit=crop&q=80", type: "Left Side" },
          { id: "cp3", url: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=80", type: "Udder" },
          { id: "cp4", url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&auto=format&fit=crop&q=80", type: "Back Side" },
        ],
      },
      {
        id: "cow_a2",
        tagId: "HIRA_A2_OCT26_COW_GIR_13",
        lactationStage: "Calf",
        isCalf: true,
        weightKg: 48,
        ageValue: 55,
        ageUnit: "Days",
        dailyMilkLiters: null,
        fatPercent: null,
        photos: [
          { id: "cc1", url: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=800&auto=format&fit=crop&q=80", type: "Front Side" },
          { id: "cc2", url: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=80", type: "Left Side" },
        ],
      },
    ],
  },
  goat: {
    id: "goat",
    label: "Goat",
    emoji: "🐐",
    breedName: "Sirohi Dairy Goat",
    breedCode: "SIR",
    speciesCode: "GOAT",
    defaultPackageName: "1 Milking Doe + 1 Kid",
    defaultPrice: 45000,
    priceLabel: "Caprine Dairy Seed Allotment",
    apiEndpoint: "/api/v1/marketplace/packages/goat",
    adultLabel: "Milking Doe",
    youngLabel: "Kid",
    transporter: "MH-14-GX-8022 (Specialized Small-Ruminant Carrier)",
    animals: [
      {
        id: "goat_a1",
        tagId: "HIRA_A1_OCT26_GOAT_SIR_88",
        lactationStage: "2nd Lactation",
        isCalf: false,
        weightKg: 48,
        ageValue: 26,
        ageUnit: "Months",
        dailyMilkLiters: 3.5,
        fatPercent: 4.2,
        photos: [
          { id: "gp1", url: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=80", type: "Front Side" },
          { id: "gp2", url: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=800&auto=format&fit=crop&q=80", type: "Left Side" },
          { id: "gp3", url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&auto=format&fit=crop&q=80", type: "Udder" },
        ],
      },
      {
        id: "goat_a2",
        tagId: "HIRA_A2_OCT26_GOAT_SIR_89",
        lactationStage: "Calf",
        isCalf: true,
        weightKg: 8,
        ageValue: 40,
        ageUnit: "Days",
        dailyMilkLiters: null,
        fatPercent: null,
        photos: [
          { id: "gc1", url: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=80", type: "Front Side" },
        ],
      },
    ],
  },
  sheep: {
    id: "sheep",
    label: "Sheep",
    emoji: "🐑",
    breedName: "Deccani Dairy Sheep",
    breedCode: "DEC",
    speciesCode: "SHEEP",
    defaultPackageName: "1 Ewe + 1 Lamb",
    defaultPrice: 35000,
    priceLabel: "Ovine Foundation Seed Allotment",
    apiEndpoint: "/api/v1/marketplace/packages/sheep",
    adultLabel: "Milking Ewe",
    youngLabel: "Lamb",
    transporter: "MH-14-GX-8022 (Specialized Small-Ruminant Carrier)",
    animals: [
      {
        id: "sheep_a1",
        tagId: "HIRA_A1_OCT26_SHEEP_DEC_07",
        lactationStage: "2nd Lactation",
        isCalf: false,
        weightKg: 38,
        ageValue: 24,
        ageUnit: "Months",
        dailyMilkLiters: 1.8,
        fatPercent: 6.8,
        photos: [
          { id: "sp1", url: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?w=800&auto=format&fit=crop&q=80", type: "Front Side" },
          { id: "sp2", url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&auto=format&fit=crop&q=80", type: "Left Side" },
          { id: "sp3", url: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=800&auto=format&fit=crop&q=80", type: "Udder" },
        ],
      },
      {
        id: "sheep_a2",
        tagId: "HIRA_A2_OCT26_SHEEP_DEC_08",
        lactationStage: "Calf",
        isCalf: true,
        weightKg: 6,
        ageValue: 35,
        ageUnit: "Days",
        dailyMilkLiters: null,
        fatPercent: null,
        photos: [
          { id: "sc1", url: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?w=800&auto=format&fit=crop&q=80", type: "Front Side" },
        ],
      },
    ],
  },
};

interface AssetOwnerInvestor {
  id: string;
  name: string;
  investorCode: string;
  category: "HNW Individual" | "Syndicate Pool" | "Dairy Partner" | "Farm Custody";
  location: string;
  activeHoldings: string;
  kycStatus: "Verified" | "Pending";
  avatarBg: string;
}

const ASSET_OWNERS_LIST: AssetOwnerInvestor[] = [
  {
    id: "inv_1",
    name: "Rajesh Patel",
    investorCode: "INV-MUM-8492",
    category: "HNW Individual",
    location: "Mumbai, Maharashtra",
    activeHoldings: "12 Buffaloes Active (₹24L AUM)",
    kycStatus: "Verified",
    avatarBg: "bg-blue-600",
  },
  {
    id: "inv_2",
    name: "Dr. Vikram Sharma",
    investorCode: "INV-PUN-3104",
    category: "Syndicate Pool",
    location: "Pune, Maharashtra",
    activeHoldings: "8 Buffaloes Active (₹16L AUM)",
    kycStatus: "Verified",
    avatarBg: "bg-emerald-600",
  },
  {
    id: "inv_3",
    name: "Hira Farm Custody Escrow (Pool A)",
    investorCode: "INV-ESCROW-001",
    category: "Farm Custody",
    location: "Baramati Dairy Facility",
    activeHoldings: "Direct Farm Inventory Allotment",
    kycStatus: "Verified",
    avatarBg: "bg-amber-600",
  },
  {
    id: "inv_4",
    name: "Anita Deshmukh",
    investorCode: "INV-BAR-5521",
    category: "Dairy Partner",
    location: "Baramati, Maharashtra",
    activeHoldings: "5 Buffaloes Active (₹10L AUM)",
    kycStatus: "Verified",
    avatarBg: "bg-purple-600",
  },
  {
    id: "inv_5",
    name: "Sunil & Preeti Mehra",
    investorCode: "INV-DEL-9081",
    category: "HNW Individual",
    location: "New Delhi (NCR)",
    activeHoldings: "20 Buffaloes Active (₹40L AUM)",
    kycStatus: "Verified",
    avatarBg: "bg-rose-600",
  },
  {
    id: "inv_6",
    name: "Kavita Reddy",
    investorCode: "INV-HYD-7712",
    category: "HNW Individual",
    location: "Hyderabad, Telangana",
    activeHoldings: "6 Buffaloes Active (₹12L AUM)",
    kycStatus: "Verified",
    avatarBg: "bg-teal-600",
  },
  {
    id: "inv_7",
    name: "Amitabh Sengupta",
    investorCode: "INV-KOL-2190",
    category: "Syndicate Pool",
    location: "Kolkata, West Bengal",
    activeHoldings: "15 Buffaloes Active (₹30L AUM)",
    kycStatus: "Verified",
    avatarBg: "bg-indigo-600",
  },
];

export default function MarketplacePage4() {
  const router = useRouter();
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Active Species Tab: Buffalo (default), Cow, Goat, Sheep
  const [activeSpecies, setActiveSpecies] = useState<AnimalSpecies>("buffalo");
  const activePreset = SPECIES_PRESETS[activeSpecies];

  // Default Package Name per user requirement: 1 Buffalo + 1 Calf (synced dynamically with top card)
  const [packageName, setPackageName] = useState(SPECIES_PRESETS.buffalo.defaultPackageName);
  const [packageCategory, setPackageCategory] = useState<"SUPER30" | "SUPER35" | "PREMIUM">("SUPER30");
  const [packageSeriesNumber, setPackageSeriesNumber] = useState<number>(1);
  const [copiedId, setCopiedId] = useState<boolean>(false);
  const [copiedTagId, setCopiedTagId] = useState<string | null>(null);

  // Dynamic Package ID per approved HIRA format: PACK_{SERIES}_{BREED}_{SPECIES}_{DATE}_{CATEGORY}
  const packageId = `PACK_${packageSeriesNumber}_${activePreset.breedCode}_${activePreset.speciesCode}_OCT26_${packageCategory}`;

  const handleCategoryChange = (cat: "SUPER30" | "SUPER35" | "PREMIUM") => {
    setPackageCategory(cat);
    if (cat === "PREMIUM") {
      setPackageSeriesNumber(6); // Default series #6 for Premium package
    } else {
      setPackageSeriesNumber(1);
    }
  };

  // Logistics & Fixed Package Rate
  const [transporterCapacity, setTransporterCapacity] = useState(
    SPECIES_PRESETS.buffalo.transporter
  );
  const [packagePrice, setPackagePrice] = useState<number>(SPECIES_PRESETS.buffalo.defaultPrice);

  // Dynamic Animals List (default: Buffalo seed package)
  const [animals, setAnimals] = useState<PackageAnimalItem[]>(SPECIES_PRESETS.buffalo.animals);

  // Switch species tab: updates entire package inputs, price, animals, and targeted backend API
  const handleSpeciesChange = (species: AnimalSpecies) => {
    setActiveSpecies(species);
    const preset = SPECIES_PRESETS[species];
    setPackageName(preset.defaultPackageName);
    setPackagePrice(preset.defaultPrice);
    setAnimals(preset.animals);
    setTransporterCapacity(preset.transporter);
    setToastMessage(
      `Switched animal category to ${preset.label} (${preset.breedName}). Loaded default inputs & updated target API to ${preset.apiEndpoint}`
    );
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Modal State for Lactation Stage Searchable Dropdown
  const [modalActiveAnimalId, setModalActiveAnimalId] = useState<string | null>(null);
  const [stageSearchQuery, setStageSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Choose Asset Owners (Investors) Search Modal State
  const [selectedInvestor, setSelectedInvestor] = useState<AssetOwnerInvestor>(ASSET_OWNERS_LIST[0]);
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);
  const [investorSearchQuery, setInvestorSearchQuery] = useState("");
  const investorSearchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isInvestorModalOpen) {
      setTimeout(() => {
        investorSearchInputRef.current?.focus();
      }, 60);
    }
  }, [isInvestorModalOpen]);

  const filteredInvestors = useMemo(() => {
    if (!investorSearchQuery.trim()) return ASSET_OWNERS_LIST;
    const q = investorSearchQuery.toLowerCase();
    return ASSET_OWNERS_LIST.filter(
      (inv) =>
        inv.name.toLowerCase().includes(q) ||
        inv.investorCode.toLowerCase().includes(q) ||
        inv.location.toLowerCase().includes(q) ||
        inv.category.toLowerCase().includes(q) ||
        inv.activeHoldings.toLowerCase().includes(q)
    );
  }, [investorSearchQuery]);

  // Photo Attach Quick Upload Modal State
  const [photoModalAnimalId, setPhotoModalAnimalId] = useState<string | null>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<{ url: string; title: string } | null>(null);
  const activePhotoAnimal = animals.find((a) => a.id === photoModalAnimalId);

  // Photo Management Handlers
  const handleUploadPhotos = (e: React.ChangeEvent<HTMLInputElement>, animalId: string) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const files = Array.from(e.target.files);
    const newPhotos: AnimalPhoto[] = files.map((file, idx) => ({
      id: `photo_${Date.now()}_${idx}`,
      url: URL.createObjectURL(file),
      type: "Front Side" as PhotoAngleType,
    }));

    setAnimals((prev) =>
      prev.map((a) => (a.id === animalId ? { ...a, photos: [...a.photos, ...newPhotos] } : a))
    );

    setToastMessage(`Attached ${files.length} photo(s) successfully!`);
    setTimeout(() => setToastMessage(null), 3000);
    e.target.value = "";
  };

  const handleDeletePhoto = (animalId: string, photoId: string) => {
    setAnimals((prev) =>
      prev.map((a) => {
        if (a.id !== animalId) return a;
        return {
          ...a,
          photos: a.photos.filter((p) => p.id !== photoId),
        };
      })
    );
    setToastMessage("Photo deleted successfully.");
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleUpdatePhotoType = (animalId: string, photoId: string, newType: PhotoAngleType) => {
    setAnimals((prev) =>
      prev.map((a) => {
        if (a.id !== animalId) return a;
        return {
          ...a,
          photos: a.photos.map((p) => (p.id === photoId ? { ...p, type: newType } : p)),
        };
      })
    );
  };

  const handleClearAllPhotos = (animalId: string) => {
    setAnimals((prev) =>
      prev.map((a) => (a.id === animalId ? { ...a, photos: [] } : a))
    );
    setToastMessage("All photos deleted for this animal.");
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Open Lactation Stage Modal
  const openLactationModal = (animalId: string) => {
    setModalActiveAnimalId(animalId);
    setStageSearchQuery("");
  };

  useEffect(() => {
    if (modalActiveAnimalId) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 60);
    }
  }, [modalActiveAnimalId]);

  // Handle stage selection
  const handleSelectLactationStage = (stageOption: LactationOption) => {
    if (!modalActiveAnimalId) return;

    setAnimals((prev) =>
      prev.map((a) => {
        if (a.id !== modalActiveAnimalId) return a;

        if (stageOption.isCalf) {
          return {
            ...a,
            lactationStage: stageOption.value,
            isCalf: true,
            dailyMilkLiters: null,
            fatPercent: null,
            ageUnit: "Days", // Calves default to Days
            ageValue: a.ageUnit === "Months" ? Math.max(15, a.ageValue * 30) : a.ageValue,
          };
        } else {
          return {
            ...a,
            lactationStage: stageOption.value,
            isCalf: false,
            dailyMilkLiters: a.dailyMilkLiters || 17.5,
            fatPercent: a.fatPercent || 8.0,
            ageUnit: "Months", // Milking adults default to Months
            ageValue: a.ageUnit === "Days" ? Math.max(24, Math.round(a.ageValue / 30)) : a.ageValue,
          };
        }
      })
    );

    setModalActiveAnimalId(null);
  };

  // Toggle Age Unit (Days <-> Months)
  const toggleAgeUnit = (animalId: string) => {
    setAnimals((prev) =>
      prev.map((a) => {
        if (a.id !== animalId) return a;
        if (a.ageUnit === "Days") {
          const inMonths = Math.max(1, Math.round((a.ageValue / 30.4) * 10) / 10);
          return { ...a, ageUnit: "Months", ageValue: inMonths };
        } else {
          const inDays = Math.round(a.ageValue * 30.4);
          return { ...a, ageUnit: "Days", ageValue: inDays };
        }
      })
    );
  };

  // Add Animal to Package dynamically based on active species
  const handleAddAnimal = (type: "adult" | "young") => {
    const nextIndex = animals.length + 1;
    const isYoung = type === "young";
    const newAnimal: PackageAnimalItem = {
      id: `a_${Date.now()}`,
      tagId: `HIRA_A${nextIndex}_OCT26_${activePreset.speciesCode}_${activePreset.breedCode}_${nextIndex + 42}`,
      lactationStage: isYoung ? "Calf" : "2nd Lactation",
      isCalf: isYoung,
      weightKg: isYoung
        ? activeSpecies === "buffalo"
          ? 85
          : activeSpecies === "cow"
          ? 45
          : activeSpecies === "goat"
          ? 8
          : 6
        : activeSpecies === "buffalo"
        ? 580
        : activeSpecies === "cow"
        ? 440
        : activeSpecies === "goat"
        ? 48
        : 38,
      ageValue: isYoung ? 60 : 36,
      ageUnit: isYoung ? "Days" : "Months",
      dailyMilkLiters: isYoung
        ? null
        : activeSpecies === "buffalo"
        ? 17.0
        : activeSpecies === "cow"
        ? 14.5
        : activeSpecies === "goat"
        ? 3.5
        : 1.8,
      fatPercent: isYoung
        ? null
        : activeSpecies === "buffalo"
        ? 8.1
        : activeSpecies === "cow"
        ? 4.8
        : activeSpecies === "goat"
        ? 4.2
        : 6.8,
      photos: isYoung
        ? [
            {
              id: `c_${Date.now()}_1`,
              url:
                activeSpecies === "buffalo"
                  ? "/Kid_Buffalo.jpg"
                  : "https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=800&auto=format&fit=crop&q=80",
              type: "Front Side",
            },
          ]
        : [
            {
              id: `b_${Date.now()}_1`,
              url:
                activeSpecies === "buffalo"
                  ? "/Murrah_buffalo.JPG"
                  : "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=80",
              type: "Front Side",
            },
            {
              id: `b_${Date.now()}_2`,
              url:
                activeSpecies === "buffalo"
                  ? "/Murrah_buffalo.JPG"
                  : "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=80",
              type: "Udder",
            },
          ],
    };

    setAnimals([...animals, newAnimal]);
    setToastMessage(
      `Added ${isYoung ? activePreset.youngLabel : activePreset.adultLabel} to package.`
    );
    setTimeout(() => setToastMessage(null), 3000);
  };

  const removeAnimal = (id: string) => {
    if (animals.length <= 1) return;
    setAnimals(animals.filter((a) => a.id !== id));
  };

  // Filtered Lactation Options in Search Modal
  const filteredLactationOptions = useMemo(() => {
    if (!stageSearchQuery.trim()) return LACTATION_STAGE_OPTIONS;
    const q = stageSearchQuery.toLowerCase();
    return LACTATION_STAGE_OPTIONS.filter(
      (opt) =>
        opt.label.toLowerCase().includes(q) ||
        opt.value.toLowerCase().includes(q) ||
        opt.description.toLowerCase().includes(q) ||
        opt.badge.toLowerCase().includes(q)
    );
  }, [stageSearchQuery]);

  // Aggregated Dynamic Calculations
  const milchAnimals = animals.filter((a) => !a.isCalf && a.dailyMilkLiters !== null);
  const calfAnimals = animals.filter((a) => a.isCalf);

  const totalBatchWeight = animals.reduce((sum, a) => sum + (Number(a.weightKg) || 0), 0);
  const totalDailyLiters = milchAnimals.reduce(
    (sum, a) => sum + (Number(a.dailyMilkLiters) || 0),
    0
  );

  const avgFat =
    milchAnimals.length > 0
      ? (
          milchAnimals.reduce((sum, a) => sum + (Number(a.fatPercent) || 0), 0) /
          milchAnimals.length
        ).toFixed(1)
      : "NA";

  // Fixed standard package pricing per user requirement (removed varied additions)
  const finalPackagePrice = packagePrice;

  const handleSaveListing = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage(
        `Package "${packageName}" (${packageId}) successfully dispatched to backend endpoint: ${activePreset.apiEndpoint}!`
      );
      setTimeout(() => setToastMessage(null), 4000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/25 via-white to-stone-50 text-slate-800 antialiased relative pb-24">
      <MarketplaceSwitcher currentMarketplaceId="page-4" />

      {/* FLOATING TOASTER */}
      {toastMessage && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 bg-amber-800 text-white px-6 py-3.5 rounded-2xl shadow-2xl border border-amber-600 font-extrabold text-sm flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="w-5 h-5 text-amber-200" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER BANNER */}
      <header className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-700 text-white p-6 sm:p-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-mono font-bold text-amber-100">
              <Layers className="w-3.5 h-3.5 text-yellow-300" />
              <span>MARKETPLACE LIVESTOCK PACKAGE BUILDER • INLINE EDITABLE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Multi-Animal Herd Package &amp; Rate Configurator
            </h1>
            <p className="text-xs sm:text-sm text-amber-100 max-w-2xl">
              Configure animal units, toggle lactation stages (Calf vs 1st-10th Lactation), edit live weight, fat %, age units (days | months), and inspect multi-view photos.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20 text-right shrink-0">
            <span className="text-[10px] uppercase font-bold text-amber-200 block">Total Package Value</span>
            <span className="text-2xl sm:text-3xl font-black text-white">
              ₹{finalPackagePrice.toLocaleString("en-IN")}
            </span>
            <span className="text-[11px] text-yellow-200 block font-bold">
              {milchAnimals.length} Milking + {calfAnimals.length} Calf ({animals.length} Animals)
            </span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 space-y-6">
        {/* TOP SPECIES CHOOSER TABS */}
        <div className="bg-white rounded-3xl border border-stone-200 p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-amber-950 uppercase tracking-wide">
                  1. Select Animal Species Tab
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black border border-emerald-300">
                  Active: {activePreset.label} ({activePreset.breedName})
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-0.5">
                Switching tabs updates default package parameters, live lot animals, and targets the corresponding backend API.
              </p>
            </div>

            {/* SPECIES TABS */}
            <div className="flex flex-wrap items-center gap-2 bg-stone-100/80 p-1.5 rounded-2xl border border-stone-200">
              {(["buffalo", "cow", "goat", "sheep"] as AnimalSpecies[]).map((sp) => {
                const preset = SPECIES_PRESETS[sp];
                const isSelected = activeSpecies === sp;
                return (
                  <button
                    key={sp}
                    type="button"
                    onClick={() => handleSpeciesChange(sp)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
                      isSelected
                        ? "bg-slate-900 text-white shadow-md ring-2 ring-amber-500/60"
                        : "text-stone-700 hover:text-slate-950 hover:bg-white"
                    }`}
                  >
                    <span className="text-base">{preset.emoji}</span>
                    <span>{preset.label}</span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* SUMMARY METRICS STRIP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-3xl border border-amber-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-amber-800 uppercase block">Herd Breakdown</span>
            <span className="text-2xl sm:text-3xl font-black text-amber-950 mt-1 block truncate" title={packageName}>
              {packageName}
            </span>
            <span className="text-[11px] text-slate-500 font-medium">Total: {animals.length} Head</span>
          </div>

          <div className="bg-white rounded-3xl border border-orange-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-orange-800 uppercase block">Total Batch Weight</span>
            <span className="text-3xl font-black text-orange-950 mt-1 block">{totalBatchWeight} kg</span>
            <span className="text-[11px] text-slate-500">
              Avg {Math.round(totalBatchWeight / animals.length)} kg / animal
            </span>
          </div>

          <div className="bg-white rounded-3xl border border-emerald-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-emerald-800 uppercase block">Milking Production</span>
            <span className="text-3xl font-black text-emerald-950 mt-1 block">
              {totalDailyLiters.toFixed(1)} L/day
            </span>
            <span className="text-[11px] text-emerald-700 font-bold">Avg Fat: {avgFat}% (Calves Excluded)</span>
          </div>

          <div className="bg-white rounded-3xl border border-rose-200 p-5 shadow-xs">
            <span className="text-xs font-bold text-rose-800 uppercase block">Package Price</span>
            <span className="text-3xl font-black text-rose-950 mt-1 block">
              ₹{finalPackagePrice.toLocaleString("en-IN")}
            </span>
            <span className="text-[11px] text-emerald-700 font-bold">{activePreset.priceLabel}</span>
          </div>
        </div>

        {/* PACKAGE DETAILS & INLINE TABLE */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
          {/* PACKAGE TITLE & TRANSPORTER ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Marketplace Package Title <span className="text-amber-600 font-bold">(Dynamic • Synced with Top Herd Breakdown)</span>
              </label>
              <input
                type="text"
                value={packageName}
                onChange={(e) => setPackageName(e.target.value)}
                placeholder="e.g. 1 Buffalo + 1 Calf"
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white text-xs font-black text-slate-900 focus:ring-2 focus:ring-amber-500 outline-none transition"
              />

              {/* Compact Inline Package ID & Tier Switcher */}
              <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-2xl border border-stone-200">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">
                    Package ID:
                  </span>
                  <code className="text-xs font-mono font-black text-amber-950 bg-amber-100/80 px-2 py-0.5 rounded-md border border-amber-300">
                    {packageId}
                  </code>
                  <button
                    type="button"
                    onClick={() => {
                      if (typeof navigator !== "undefined" && navigator.clipboard) {
                        navigator.clipboard.writeText(packageId);
                        setCopiedId(true);
                        setToastMessage(`Copied Package ID: ${packageId}`);
                        setTimeout(() => setCopiedId(false), 2000);
                      }
                    }}
                    className="p-1 rounded-md text-amber-800 hover:bg-amber-100 transition cursor-pointer"
                    title="Copy Package ID"
                  >
                    {copiedId ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleCategoryChange("SUPER30")}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-black transition cursor-pointer ${
                      packageCategory === "SUPER30"
                        ? "bg-amber-600 text-white shadow-xs"
                        : "text-stone-600 hover:text-stone-900 hover:bg-stone-200"
                    }`}
                    title="Regular payout percent: 30%"
                  >
                    SUPER30
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCategoryChange("SUPER35")}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-black transition cursor-pointer ${
                      packageCategory === "SUPER35"
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "text-stone-600 hover:text-stone-900 hover:bg-stone-200"
                    }`}
                    title="Super35 is till 31st Dec 2026"
                  >
                    SUPER35
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCategoryChange("PREMIUM")}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-black transition cursor-pointer ${
                      packageCategory === "PREMIUM"
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "text-stone-600 hover:text-stone-900 hover:bg-stone-200"
                    }`}
                    title="Premium package: Higher-value offering"
                  >
                    PREMIUM
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Choose Asset Owners (Investors) <span className="text-amber-600 font-bold">*</span>
              </label>
              <button
                type="button"
                onClick={() => {
                  setInvestorSearchQuery("");
                  setIsInvestorModalOpen(true);
                }}
                className="w-full px-4 py-2 rounded-xl border border-stone-300 bg-stone-50 hover:bg-white text-xs font-bold text-slate-900 flex items-center justify-between transition shadow-2xs hover:border-amber-500 cursor-pointer text-left"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <div
                    className={`w-7 h-7 rounded-lg ${selectedInvestor.avatarBg} text-white flex items-center justify-center text-[11px] font-black shrink-0 shadow-2xs`}
                  >
                    {selectedInvestor.name.charAt(0)}
                  </div>
                  <div className="truncate">
                    <span className="font-black text-slate-900">{selectedInvestor.name}</span>
                    <span className="text-stone-500 font-normal ml-1.5 font-mono text-[11px]">
                      ({selectedInvestor.investorCode} &bull; {selectedInvestor.location})
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 pl-2">
                  <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300">
                    {selectedInvestor.category}
                  </span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>
              </button>

              <div className="mt-1.5 flex items-center justify-between text-[11px] text-stone-500">
                <span>Holdings: <strong className="text-slate-700 font-medium">{selectedInvestor.activeHoldings}</strong></span>
                <span className="text-emerald-700 font-bold">KYC {selectedInvestor.kycStatus}</span>
              </div>
            </div>
          </div>

          {/* TABLE CONTROLS & ADD BUTTONS */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-stone-100">
            <div>
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <PackageCheck className="w-5 h-5 text-amber-600" />
                <span>Animals in Package ({animals.length} Head)</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Edit inline: choose Lactation Stage via search modal. Calf selection automatically disables milk parameters with NA.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleAddAnimal("adult")}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-black flex items-center gap-1.5 transition shadow-xs cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add {activePreset.adultLabel}</span>
              </button>

              <button
                type="button"
                onClick={() => handleAddAnimal("young")}
                className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-black flex items-center gap-1.5 transition shadow-xs cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add {activePreset.youngLabel}</span>
              </button>
            </div>
          </div>

          {/* INLINE EDITABLE TABLE */}
          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <table className="w-full text-xs text-left">
              <thead className="bg-stone-50 text-slate-500 uppercase font-bold text-[10px] border-b border-stone-200">
                <tr>
                  <th className="py-3.5 px-3 text-center">#</th>
                  <th className="py-3.5 px-3">Animal Ear-Tag</th>
                  <th className="py-3.5 px-3 min-w-[180px]">Lactation Stage (Search Modal)</th>
                  <th className="py-3.5 px-3">Weight (kg)</th>
                  <th className="py-3.5 px-3 min-w-[150px]">Age &amp; Unit Switch</th>
                  <th className="py-3.5 px-3">Daily Milk (L)</th>
                  <th className="py-3.5 px-3">Fat % (Editable)</th>
                  <th className="py-3.5 px-3 text-center">Photos &amp; Eye Preview</th>
                  <th className="py-3.5 px-3 text-right">Remove</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 font-medium">
                {animals.map((animal, idx) => {
                  const isCalf = animal.isCalf;

                  return (
                    <tr
                      key={animal.id}
                      className={`hover:bg-amber-50/30 transition ${
                        isCalf ? "bg-orange-50/15" : "bg-white"
                      }`}
                    >
                      {/* # Index */}
                      <td className="py-3.5 px-3 text-center font-bold text-slate-400">
                        {idx + 1}
                      </td>

                      {/* Ear-Tag ID with Hover Zoom & Inline Copy Button */}
                      <td className="py-3.5 px-3">
                        <div className="relative group/tag inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-stone-50 border border-stone-200 hover:border-amber-400 hover:bg-amber-50/50 transition">
                          <Tag className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <input
                            type="text"
                            value={animal.tagId}
                            onChange={(e) => {
                              const val = e.target.value;
                              setAnimals(
                                animals.map((a) => (a.id === animal.id ? { ...a, tagId: val } : a))
                              );
                            }}
                            className="font-mono font-bold text-slate-900 bg-transparent outline-none w-36 sm:w-44 text-xs select-all"
                          />

                          {/* Inline Copy Button at Right End */}
                          <button
                            type="button"
                            onClick={() => {
                              if (typeof navigator !== "undefined" && navigator.clipboard) {
                                navigator.clipboard.writeText(animal.tagId);
                                setCopiedTagId(animal.id);
                                setToastMessage(`Copied ear-tag ID: ${animal.tagId}`);
                                setTimeout(() => setCopiedTagId(null), 2000);
                              }
                            }}
                            className="p-1 rounded-md text-stone-400 hover:text-amber-800 hover:bg-amber-100 transition cursor-pointer"
                            title="Copy Animal Ear-Tag ID"
                          >
                            {copiedTagId === animal.id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>

                          {/* Floating Enlarged Tooltip on Hover */}
                          <div className="absolute left-0 bottom-full mb-2 hidden group-hover/tag:flex flex-col z-30 pointer-events-none animate-in fade-in zoom-in-95 duration-150 drop-shadow-xl">
                            <div className="bg-slate-950 text-white px-3.5 py-2.5 rounded-2xl border border-stone-700 whitespace-nowrap shadow-2xl">
                              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                                Full Animal Ear-Tag ID
                              </span>
                              <span className="text-sm font-mono font-black text-emerald-300 tracking-wide block mt-0.5">
                                {animal.tagId}
                              </span>
                            </div>
                            <div className="w-3 h-3 bg-slate-950 rotate-45 ml-4 -mt-1.5 border-r border-b border-stone-700" />
                          </div>
                        </div>
                      </td>

                      {/* Lactation Stage Dropdown (Triggers Modal with Search Bar) */}
                      <td className="py-3.5 px-3">
                        <button
                          type="button"
                          onClick={() => openLactationModal(animal.id)}
                          className={`w-full px-3 py-2 rounded-xl border text-xs font-bold flex items-center justify-between text-left transition shadow-2xs ${
                            isCalf
                              ? "bg-orange-50 border-orange-300 text-orange-900 hover:bg-orange-100"
                              : "bg-white border-stone-300 text-slate-900 hover:border-amber-500 hover:bg-amber-50/40"
                          }`}
                        >
                          <span className="truncate pr-1">
                            {animal.lactationStage}
                            {isCalf && " (Calf)"}
                          </span>
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        </button>
                      </td>

                      {/* Scale Weight (kg) */}
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-1">
                          <input
                            type="number"
                            value={animal.weightKg}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              setAnimals(
                                animals.map((a) => (a.id === animal.id ? { ...a, weightKg: val } : a))
                              );
                            }}
                            className="w-18 px-2 py-1.5 rounded-lg border border-stone-300 text-xs font-bold text-slate-900 outline-none focus:border-amber-500 bg-white"
                          />
                          <span className="text-[10px] text-slate-400 font-bold">kg</span>
                        </div>
                      </td>

                      {/* Age Column with Days | Months Toggle Switch */}
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-1.5">
                          <input
                            type="number"
                            value={animal.ageValue}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              setAnimals(
                                animals.map((a) => (a.id === animal.id ? { ...a, ageValue: val } : a))
                              );
                            }}
                            className="w-16 px-2 py-1.5 rounded-lg border border-stone-300 text-xs font-bold text-slate-900 outline-none focus:border-amber-500 bg-white"
                          />

                          {/* Normal Switch Button for Days | Months */}
                          <button
                            type="button"
                            onClick={() => toggleAgeUnit(animal.id)}
                            title={`Click to switch unit to ${animal.ageUnit === "Days" ? "Months" : "Days"}`}
                            className={`px-2 py-1 rounded-lg border text-[11px] font-black flex items-center gap-1 transition shadow-2xs cursor-pointer ${
                              animal.ageUnit === "Days"
                                ? "bg-amber-100 text-amber-950 border-amber-300 hover:bg-amber-200"
                                : "bg-sky-100 text-sky-950 border-sky-300 hover:bg-sky-200"
                            }`}
                          >
                            <Repeat className="w-3 h-3 text-slate-600" />
                            <span>{animal.ageUnit}</span>
                          </button>
                        </div>
                      </td>

                      {/* Daily Milk (Liters/Day) - Disabled if Calf with NA */}
                      <td className="py-3.5 px-3">
                        {isCalf ? (
                          <div className="w-20 px-2 py-1.5 rounded-lg bg-stone-100 border border-stone-200 text-xs font-bold text-stone-400 text-center select-none cursor-not-allowed">
                            NA
                          </div>
                        ) : (
                          <div className="flex items-center gap-1">
                            <input
                              type="number"
                              step="0.5"
                              value={animal.dailyMilkLiters ?? 17.5}
                              onChange={(e) => {
                                const val = Number(e.target.value);
                                setAnimals(
                                  animals.map((a) =>
                                    a.id === animal.id ? { ...a, dailyMilkLiters: val } : a
                                  )
                                );
                              }}
                              className="w-18 px-2 py-1.5 rounded-lg border border-stone-300 text-xs font-bold text-emerald-700 outline-none focus:border-amber-500 bg-white"
                            />
                            <span className="text-[10px] text-slate-400 font-bold">L/d</span>
                          </div>
                        )}
                      </td>

                      {/* Fat % Editable - Disabled if Calf with NA */}
                      <td className="py-3.5 px-3">
                        {isCalf ? (
                          <div className="w-16 px-2 py-1.5 rounded-lg bg-stone-100 border border-stone-200 text-xs font-bold text-stone-400 text-center select-none cursor-not-allowed">
                            NA
                          </div>
                        ) : (
                          <div className="flex items-center gap-1">
                            <input
                              type="number"
                              step="0.1"
                              value={animal.fatPercent ?? 8.0}
                              onChange={(e) => {
                                const val = Number(e.target.value);
                                setAnimals(
                                  animals.map((a) =>
                                    a.id === animal.id ? { ...a, fatPercent: val } : a
                                  )
                                );
                              }}
                              className="w-16 px-2 py-1.5 rounded-lg border border-stone-300 text-xs font-bold text-slate-900 outline-none focus:border-amber-500 bg-white"
                            />
                            <span className="text-[10px] text-slate-400 font-bold">%</span>
                          </div>
                        )}
                      </td>

                      {/* Multiple Photos Attach & Eye Icon Confirmation */}
                      <td className="py-3.5 px-3 text-center">
                        <div className="inline-flex items-center gap-1.5">
                          {/* Attach / Upload Multiple Photos Button */}
                          <button
                            type="button"
                            onClick={() => setPhotoModalAnimalId(animal.id)}
                            className="px-2.5 py-1.5 rounded-lg bg-white border border-stone-300 hover:border-amber-400 text-[11px] font-bold text-slate-700 flex items-center gap-1 transition shadow-2xs cursor-pointer"
                            title="Manage & attach multi-angle inspection photos"
                          >
                            <Camera className="w-3.5 h-3.5 text-amber-600" />
                            <span>{animal.photos.length} Attached</span>
                          </button>

                          {/* Eye Icon Button: Opens Dedicated Photo Page */}
                          {animal.photos.length > 0 && (
                            <Link
                              href={`/marketplace/page-4/photos/${encodeURIComponent(animal.tagId)}`}
                              className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition shadow-2xs"
                              title={`View ${animal.photos.length} high-res photos on dedicated inspection page`}
                            >
                              <Eye className="w-4 h-4" />
                            </Link>
                          )}
                        </div>
                      </td>

                      {/* Remove Row */}
                      <td className="py-3.5 px-3 text-right">
                        <button
                          type="button"
                          onClick={() => removeAnimal(animal.id)}
                          disabled={animals.length <= 1}
                          className="p-1.5 rounded-lg text-rose-500 hover:text-rose-700 hover:bg-rose-50 disabled:opacity-20 transition"
                          title="Remove animal from lot"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* LOT ESCROW PRICING MATRIX - FIXED SEED PACKAGE VALUE */}
          <div className="bg-amber-50/60 rounded-3xl border border-amber-200 p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200 pb-3">
              <div>
                <h4 className="text-sm font-black text-amber-950 uppercase tracking-wide">
                  Package Rate Fixing &amp; Escrow Allotment
                </h4>
                <p className="text-xs text-amber-800 mt-0.5">
                  Standard HIRA Farm seed package fixed value of ₹{activePreset.defaultPrice.toLocaleString("en-IN")} for {activePreset.label} ({activePreset.breedName}) commercial lot.
                </p>
              </div>

              <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full border border-emerald-300">
                {activePreset.priceLabel}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Package Rate (₹) <span className="text-emerald-700 font-bold">(Default: ₹{activePreset.defaultPrice.toLocaleString("en-IN")})</span>
                </label>
                <input
                  type="number"
                  value={packagePrice}
                  onChange={(e) => setPackagePrice(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-amber-300 bg-white font-black text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div className="flex flex-col justify-end">
                <div className="p-2.5 rounded-xl bg-white/80 border border-amber-200 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium">Standard Seed Package:</span>
                  <span className="font-mono font-black text-amber-900">₹{activePreset.defaultPrice.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            {/* FINAL ACTION BAR */}
            <div className="pt-4 border-t border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-amber-800 uppercase block">
                  Final Package Rate ({animals.length} Head: {milchAnimals.length} {activePreset.adultLabel} + {calfAnimals.length} {activePreset.youngLabel})
                </span>
                <span className="text-3xl font-black text-slate-900">
                  ₹{packagePrice.toLocaleString("en-IN")}
                </span>
                <p className="text-xs text-slate-500 mt-0.5">
                  Package: <strong className="text-slate-800">{packageName}</strong> &bull; Commercial ID: <code className="font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">{packageId}</code>
                </p>
              </div>

              <button
                type="button"
                onClick={handleSaveListing}
                disabled={isSubmitting}
                className="px-6 py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-black text-xs shadow-md shadow-amber-600/30 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Publishing Package to Marketplace...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Publish Package to Marketplace</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* TECHNICAL NOMENCLATURE & API SPECIFICATION ABBREVIATIONS (BELOW PUBLISH & BELOW CARD) */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
            <div>
              <span className="text-[11px] font-black text-amber-800 uppercase tracking-wider block">
                Technical Reference &amp; Specifications
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                Commercial Package ID &amp; API Endpoint Abbreviation Guide
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold bg-amber-100 text-amber-950 px-3 py-1 rounded-xl border border-amber-300">
                Active ID: {packageId}
              </span>
            </div>
          </div>

          {/* 1. COMMERCIAL PACKAGE ID ABBREVIATIONS BREAKDOWN (Screenshot 1) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
                <Tag className="w-4 h-4 text-amber-600" />
                <span>Commercial Package ID Nomenclature ({packageId})</span>
              </h4>
              <button
                type="button"
                onClick={() => {
                  if (typeof navigator !== "undefined" && navigator.clipboard) {
                    navigator.clipboard.writeText(packageId);
                    setCopiedId(true);
                    setToastMessage(`Copied Package ID: ${packageId}`);
                    setTimeout(() => setCopiedId(false), 2000);
                  }
                }}
                className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
              >
                {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId ? "Copied" : "Copy Full ID"}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
              <div className="bg-amber-50/60 p-3 rounded-2xl border border-amber-200">
                <span className="font-mono font-black text-amber-900 block text-sm">PACK</span>
                <span className="text-stone-600 text-[11px] leading-relaxed block mt-1">
                  Identifies a commercial livestock package
                </span>
              </div>
              <div className="bg-amber-50/60 p-3 rounded-2xl border border-amber-200">
                <span className="font-mono font-black text-amber-900 block text-sm">{packageSeriesNumber}</span>
                <span className="text-stone-600 text-[11px] leading-relaxed block mt-1">
                  Unique, permanent package series number
                </span>
              </div>
              <div className="bg-amber-50/60 p-3 rounded-2xl border border-amber-200">
                <span className="font-mono font-black text-amber-900 block text-sm">{activePreset.breedCode}</span>
                <span className="text-stone-600 text-[11px] leading-relaxed block mt-1">
                  {activePreset.breedName} breed code
                </span>
              </div>
              <div className="bg-amber-50/60 p-3 rounded-2xl border border-amber-200">
                <span className="font-mono font-black text-amber-900 block text-sm">{activePreset.speciesCode}</span>
                <span className="text-stone-600 text-[11px] leading-relaxed block mt-1">
                  {activePreset.label} species code
                </span>
              </div>
              <div className="bg-amber-50/60 p-3 rounded-2xl border border-amber-200">
                <span className="font-mono font-black text-amber-900 block text-sm">OCT26</span>
                <span className="text-stone-600 text-[11px] leading-relaxed block mt-1">
                  Package creation month and year
                </span>
              </div>
              <div className="bg-amber-50/60 p-3 rounded-2xl border border-amber-200">
                <span className="font-mono font-black text-indigo-700 block text-sm">{packageCategory}</span>
                <span className="text-stone-600 text-[11px] leading-relaxed block mt-1">
                  {packageCategory === "SUPER30" && "Regular payout percent: 30%"}
                  {packageCategory === "SUPER35" && "Super35 (35%) promo till Dec '26"}
                  {packageCategory === "PREMIUM" && "Higher-value tier offering"}
                </span>
              </div>
            </div>
          </div>

          {/* 2. ANIMAL EAR-TAG ID NOMENCLATURE BREAKDOWN */}
          <div className="space-y-3 pt-4 border-t border-stone-200">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
                <Tag className="w-4 h-4 text-emerald-600" />
                <span>
                  Animal Ear-Tag ID Nomenclature (
                  {animals[0]?.tagId || `HIRA_A1_OCT26_${activePreset.speciesCode}_${activePreset.breedCode}_43`}
                  )
                </span>
              </h4>
              <button
                type="button"
                onClick={() => {
                  const sampleTag =
                    animals[0]?.tagId ||
                    `HIRA_A1_OCT26_${activePreset.speciesCode}_${activePreset.breedCode}_43`;
                  if (typeof navigator !== "undefined" && navigator.clipboard) {
                    navigator.clipboard.writeText(sampleTag);
                    setToastMessage(`Copied Animal Tag ID: ${sampleTag}`);
                    setTimeout(() => setToastMessage(null), 2000);
                  }
                }}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Sample Tag ID</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
              <div className="bg-emerald-50/60 p-3 rounded-2xl border border-emerald-200">
                <span className="font-mono font-black text-emerald-950 block text-sm">HIRA</span>
                <span className="text-stone-600 text-[11px] leading-relaxed block mt-1">
                  Identifies HIRA Farm registered livestock asset
                </span>
              </div>
              <div className="bg-emerald-50/60 p-3 rounded-2xl border border-emerald-200">
                <span className="font-mono font-black text-emerald-950 block text-sm">A1</span>
                <span className="text-stone-600 text-[11px] leading-relaxed block mt-1">
                  Animal series index in lot (A1, A2, A3...)
                </span>
              </div>
              <div className="bg-emerald-50/60 p-3 rounded-2xl border border-emerald-200">
                <span className="font-mono font-black text-emerald-950 block text-sm">OCT26</span>
                <span className="text-stone-600 text-[11px] leading-relaxed block mt-1">
                  Tag issuance month &amp; year
                </span>
              </div>
              <div className="bg-emerald-50/60 p-3 rounded-2xl border border-emerald-200">
                <span className="font-mono font-black text-emerald-950 block text-sm">{activePreset.speciesCode}</span>
                <span className="text-stone-600 text-[11px] leading-relaxed block mt-1">
                  {activePreset.label} species type ({activePreset.speciesCode})
                </span>
              </div>
              <div className="bg-emerald-50/60 p-3 rounded-2xl border border-emerald-200">
                <span className="font-mono font-black text-emerald-950 block text-sm">{activePreset.breedCode}</span>
                <span className="text-stone-600 text-[11px] leading-relaxed block mt-1">
                  {activePreset.breedName} breed pedigree code
                </span>
              </div>
              <div className="bg-emerald-50/60 p-3 rounded-2xl border border-emerald-200">
                <span className="font-mono font-black text-emerald-950 block text-sm">43</span>
                <span className="text-stone-600 text-[11px] leading-relaxed block mt-1">
                  Permanent RFID microchip / ear-tag sequence
                </span>
              </div>
            </div>
          </div>

          {/* 3. TARGET BACKEND API ENDPOINT & SPECIES ABBREVIATIONS (Screenshot 2) */}
          <div className="space-y-3 pt-4 border-t border-stone-200">
            <h4 className="text-xs font-black text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>Target Backend API Endpoint &amp; Dispatch Protocol</span>
            </h4>

            <div className="p-4 rounded-2xl bg-slate-950 text-white flex flex-col md:flex-row md:items-center justify-between gap-3 border border-stone-800">
              <div className="flex items-center gap-2.5 font-mono text-xs">
                <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-black text-[10px]">
                  TARGET API
                </span>
                <span className="text-stone-400">Endpoint:</span>
                <code className="text-emerald-400 font-bold select-all">
                  POST {activePreset.apiEndpoint}
                </code>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-stone-400">
                <span>Breed: <strong className="text-amber-400">{activePreset.breedName} ({activePreset.breedCode})</strong></span>
                <span>&bull;</span>
                <span>Species: <strong className="text-cyan-400">{activePreset.speciesCode}</strong></span>
                <span>&bull;</span>
                <span>Standard Allotment: <strong className="text-white">₹{activePreset.defaultPrice.toLocaleString("en-IN")}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* MODAL 1: SEARCHABLE SELECT LACTATION STAGE DROPDOWN (CENTER MODAL WITH SEARCH BAR) */}
      {modalActiveAnimalId && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm transition-opacity"
            onClick={() => setModalActiveAnimalId(null)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden z-10 flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <Filter className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-stone-900 leading-none">
                    Select Lactation Stage
                  </h3>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Calf vs 1st to 10th Lactation Parity
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setModalActiveAnimalId(null)}
                className="w-8 h-8 rounded-xl bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-800 flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Input Box with Search Icon */}
            <div className="p-4 border-b border-stone-100 bg-white">
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={stageSearchQuery}
                  onChange={(e) => setStageSearchQuery(e.target.value)}
                  placeholder="Type to search (e.g. Calf, 1st, 2nd, 3rd, 10th)..."
                  className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-stone-300 text-xs font-medium focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition"
                />
                {stageSearchQuery && (
                  <button
                    type="button"
                    onClick={() => setStageSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Scrollable Option List */}
            <div className="p-3 overflow-y-auto max-h-80 space-y-1.5 divide-y divide-stone-100">
              {filteredLactationOptions.length === 0 ? (
                <div className="py-8 text-center text-xs text-stone-400 space-y-1">
                  <p className="font-bold">No matching lactation stages found</p>
                  <p className="text-[11px]">Search for &quot;Calf&quot; or &quot;1st&quot; through &quot;10th&quot;</p>
                </div>
              ) : (
                filteredLactationOptions.map((opt) => {
                  const currentAnimal = animals.find((a) => a.id === modalActiveAnimalId);
                  const isSelected = currentAnimal?.lactationStage === opt.value;

                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleSelectLactationStage(opt)}
                      className={`w-full px-4 py-3 rounded-2xl text-left flex items-center justify-between text-xs transition ${
                        isSelected
                          ? "bg-amber-500 text-slate-950 font-black shadow-xs"
                          : "hover:bg-amber-50 text-stone-800 hover:text-amber-950"
                      }`}
                    >
                      <div className="pr-3 space-y-0.5">
                        <div className="font-bold flex items-center gap-2">
                          <span>{opt.label}</span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-md font-mono font-bold ${
                              isSelected
                                ? "bg-slate-950/20 text-slate-950"
                                : opt.isCalf
                                ? "bg-orange-100 text-orange-800"
                                : "bg-stone-100 text-stone-700"
                            }`}
                          >
                            {opt.badge}
                          </span>
                        </div>
                        <p
                          className={`text-[11px] leading-relaxed ${
                            isSelected ? "text-slate-950/80" : "text-stone-500"
                          }`}
                        >
                          {opt.description}
                        </p>
                      </div>

                      {isSelected && <Check className="w-4 h-4 text-slate-950 shrink-0" />}
                    </button>
                  );
                })
              )}
            </div>

            {/* Modal Footer Note */}
            <div className="p-3 bg-stone-50 border-t border-stone-200 text-center text-[11px] text-stone-500 font-medium">
              Notice: Selecting <strong>Calf</strong> automatically disables milk yield and fat % with <strong>NA</strong>.
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: ATTACH & MANAGE MULTIPLE PHOTOS MODAL */}
      {photoModalAnimalId && activePhotoAnimal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          <div
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setPhotoModalAnimalId(null)}
          />

          <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden z-10 flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-5 sm:px-6 sm:py-4 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-black text-amber-800 bg-amber-100/90 border border-amber-300/80 px-2.5 py-0.5 rounded-md">
                    {activePhotoAnimal.tagId}
                  </span>
                  <span className="text-xs font-bold text-stone-500">
                    {activePhotoAnimal.lactationStage}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  Animal Inspection Photos &amp; Angle Perspectives
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setPhotoModalAnimalId(null)}
                className="w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:text-slate-900 hover:bg-stone-100 flex items-center justify-center transition shadow-2xs"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
              {/* Dual Upload Action Panel */}
              <div className="bg-gradient-to-r from-amber-50/80 via-stone-50 to-emerald-50/50 rounded-2xl border border-amber-200/90 p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-600/10 text-amber-700 flex items-center justify-center shrink-0">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">
                      Capture or Attach Inspection Photos
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Upload live photos from mobile camera or browse device files. You can delete or change viewing angle below.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
                  {/* Take Photo from Camera */}
                  <label className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-xs shadow-xs transition cursor-pointer">
                    <Camera className="w-4 h-4" />
                    <span>Take Photo (Camera)</span>
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      className="hidden"
                      onChange={(e) => handleUploadPhotos(e, activePhotoAnimal.id)}
                    />
                  </label>

                  {/* Attach from System */}
                  <label className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-xs transition cursor-pointer">
                    <Upload className="w-4 h-4" />
                    <span>Attach from Device</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={(e) => handleUploadPhotos(e, activePhotoAnimal.id)}
                    />
                  </label>
                </div>
              </div>

              {/* Active Photos Gallery */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">
                      Active Photos ({activePhotoAnimal.photos.length})
                    </h4>
                    <span className="text-[11px] text-slate-500">
                      Standard profiles: Front, Back, Udder, Left, Top, Right, RFID Tag
                    </span>
                  </div>

                  {activePhotoAnimal.photos.length > 0 && (
                    <button
                      type="button"
                      onClick={() => handleClearAllPhotos(activePhotoAnimal.id)}
                      className="text-xs font-bold text-rose-600 hover:text-rose-700 hover:underline flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete All ({activePhotoAnimal.photos.length})</span>
                    </button>
                  )}
                </div>

                {activePhotoAnimal.photos.length === 0 ? (
                  <div className="border-2 border-dashed border-stone-200 rounded-2xl p-8 text-center space-y-2 bg-stone-50">
                    <Camera className="w-8 h-8 mx-auto text-stone-400" />
                    <p className="text-xs font-bold text-slate-700">
                      No inspection photos attached for this animal
                    </p>
                    <p className="text-[11px] text-stone-500 max-w-sm mx-auto">
                      Use the camera or device upload buttons above to attach multi-angle verification photos.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {activePhotoAnimal.photos.map((photo, pIdx) => (
                      <div
                        key={photo.id}
                        className="rounded-2xl border border-stone-200 bg-white p-2.5 shadow-2xs hover:shadow-md transition flex flex-col justify-between space-y-2.5 group"
                      >
                        {/* Thumbnail Container */}
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/80">
                          <img
                            src={photo.url}
                            alt={photo.type}
                            className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition duration-300"
                            onClick={() =>
                              setPreviewImageUrl({
                                url: photo.url,
                                title: `${photo.type} Photo #${pIdx + 1} (${activePhotoAnimal.tagId})`,
                              })
                            }
                          />

                          {/* Top Left Index Badge */}
                          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-mono font-bold text-white">
                            #{pIdx + 1}
                          </div>

                          {/* Top Right Delete Button */}
                          <button
                            type="button"
                            onClick={() => handleDeletePhoto(activePhotoAnimal.id, photo.id)}
                            className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-white/90 hover:bg-rose-600 text-slate-700 hover:text-white shadow-xs flex items-center justify-center transition cursor-pointer"
                            title="Delete this photo"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>

                          {/* Hover Preview Eye Button */}
                          <div
                            onClick={() =>
                              setPreviewImageUrl({
                                url: photo.url,
                                title: `${photo.type} Photo #${pIdx + 1} (${activePhotoAnimal.tagId})`,
                              })
                            }
                            className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center cursor-pointer"
                          >
                            <span className="px-2.5 py-1 rounded-full bg-white text-slate-900 text-[11px] font-black flex items-center gap-1 shadow-md">
                              <Eye className="w-3.5 h-3.5 text-amber-600" /> Preview
                            </span>
                          </div>
                        </div>

                        {/* Angle Dropdown Selector */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase text-stone-500 tracking-wider">
                            Viewing Angle:
                          </label>
                          <select
                            value={photo.type}
                            onChange={(e) =>
                              handleUpdatePhotoType(
                                activePhotoAnimal.id,
                                photo.id,
                                e.target.value as PhotoAngleType
                              )
                            }
                            className="w-full text-xs font-black rounded-lg border border-stone-300 bg-stone-50/80 hover:bg-white py-1.5 px-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition shadow-2xs cursor-pointer"
                          >
                            {PHOTO_ANGLE_OPTIONS.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Quick Preview Text Action */}
                        <button
                          type="button"
                          onClick={() =>
                            setPreviewImageUrl({
                              url: photo.url,
                              title: `${photo.type} Photo #${pIdx + 1} (${activePhotoAnimal.tagId})`,
                            })
                          }
                          className="w-full py-1 text-[11px] font-bold text-amber-800 hover:text-amber-600 flex items-center justify-center gap-1"
                        >
                          <Eye className="w-3 h-3" />
                          <span>Inspect Full Size</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:px-6 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-stone-600">
                <span>Status: </span>
                <strong className="text-emerald-700">
                  {activePhotoAnimal.photos.length} photos ready for verification
                </strong>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Link
                  href={`/marketplace/page-4/photos/${encodeURIComponent(activePhotoAnimal.tagId)}`}
                  className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Dedicated Inspection Page</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setPhotoModalAnimalId(null)}
                  className="flex-1 sm:flex-initial px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition shadow-xs"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL: FULL PHOTO PREVIEW */}
      {previewImageUrl && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            onClick={() => setPreviewImageUrl(null)}
          />

          <div className="relative w-full max-w-3xl bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-stone-800 z-10 flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Lightbox Header */}
            <div className="p-4 border-b border-stone-800 flex items-center justify-between bg-black/40">
              <span className="text-xs font-mono font-bold text-amber-400">
                {previewImageUrl.title}
              </span>

              <button
                type="button"
                onClick={() => setPreviewImageUrl(null)}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Lightbox Image Preview */}
            <div className="p-4 flex items-center justify-center bg-black/60 max-h-[75vh] overflow-hidden">
              <img
                src={previewImageUrl.url}
                alt={previewImageUrl.title}
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Lightbox Footer */}
            <div className="p-3 bg-black/40 border-t border-stone-800 text-center">
              <button
                type="button"
                onClick={() => setPreviewImageUrl(null)}
                className="px-6 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: CHOOSE ASSET OWNERS (INVESTORS) SEARCH MODAL */}
      {isInvestorModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsInvestorModalOpen(false)}
          />

          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden z-10 flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-stone-900 leading-none">
                    Choose Asset Owner (Investor)
                  </h3>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Select verified investor account for herd equity &amp; compounding payouts
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsInvestorModalOpen(false)}
                className="w-8 h-8 rounded-xl bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-800 flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Input Box with Icon */}
            <div className="p-4 border-b border-stone-100 bg-white">
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  ref={investorSearchInputRef}
                  type="text"
                  value={investorSearchQuery}
                  onChange={(e) => setInvestorSearchQuery(e.target.value)}
                  placeholder="Search by investor name, code (INV-...), city, or category..."
                  className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 focus:bg-white transition"
                />
                {investorSearchQuery && (
                  <button
                    type="button"
                    onClick={() => setInvestorSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Investor List */}
            <div className="overflow-y-auto p-3 space-y-1.5 flex-1 divide-y divide-stone-50">
              {filteredInvestors.length === 0 ? (
                <div className="p-8 text-center text-xs text-stone-500 space-y-1">
                  <p className="font-bold text-slate-700">No asset owners found</p>
                  <p className="text-[11px] text-stone-400">Try searching with a different name, city, or ID</p>
                </div>
              ) : (
                filteredInvestors.map((inv) => {
                  const isSelected = selectedInvestor.id === inv.id;
                  return (
                    <button
                      key={inv.id}
                      type="button"
                      onClick={() => {
                        setSelectedInvestor(inv);
                        setIsInvestorModalOpen(false);
                        setToastMessage(`Assigned package to asset owner: ${inv.name} (${inv.investorCode})`);
                        setTimeout(() => setToastMessage(null), 3000);
                      }}
                      className={`w-full p-3 rounded-2xl flex items-center justify-between text-left transition cursor-pointer ${
                        isSelected
                          ? "bg-amber-100/70 border border-amber-300 text-amber-950 font-bold"
                          : "hover:bg-stone-50 border border-transparent text-stone-800"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-9 h-9 rounded-xl ${inv.avatarBg} text-white flex items-center justify-center font-black text-xs shrink-0 shadow-2xs`}
                        >
                          {inv.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black text-slate-900 truncate">
                              {inv.name}
                            </span>
                            <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                              {inv.investorCode}
                            </span>
                          </div>
                          <div className="text-[11px] text-stone-500 mt-0.5 truncate">
                            {inv.location} &bull; {inv.activeHoldings}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 pl-2">
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                          {inv.category}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-amber-800 shrink-0" />}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Modal Footer Note */}
            <div className="p-3 bg-stone-50 border-t border-stone-200 text-center text-[11px] text-stone-500 font-medium">
              Verified Asset Owner KYC compliance is validated through the HIRA Central Custody ledger.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
