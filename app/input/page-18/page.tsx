"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/Toaster";
import { InputSwitcher } from "@/components/InputSwitcher";
import { SearchableSelect } from "@/components/SearchableSelect";
import { formatNumber } from "@/lib/dairy-compounding";
import {
  ShieldCheck,
  ShieldAlert,
  Save,
  RotateCcw,
  CheckCircle2,
  FileCheck,
  AlertTriangle,
  Building2,
  MapPin,
  Calendar,
  Clock,
  UserCheck,
  ArrowRight,
  RefreshCw,
  FileText,
  BadgeAlert,
  Scale,
  Sparkles,
  Award,
  ChevronRight,
  Lock,
  Layers,
  TrendingUp,
  Download,
  Loader2,
  AlertOctagon,
  HelpCircle,
  Eye,
  Info,
} from "lucide-react";

// ==========================================
// ROLE-BASED ACCESS CONTROL (RBAC)
// ==========================================
export type RbacRole =
  | "SUPER_ADMIN"
  | "FARM_MANAGER"
  | "VET_OFFICER"
  | "ACCOUNTS_MANAGER"
  | "INVESTOR_CUSTOMER";

interface RoleMetadata {
  label: string;
  badge: string;
  badgeColor: string;
  description: string;
  permissions: string[];
}

const ROLES_CONFIG: Record<RbacRole, RoleMetadata> = {
  SUPER_ADMIN: {
    label: "Super Admin (Vashi HQ)",
    badge: "Full Privilege",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
    description: "Unrestricted access to policy sanctions, claim payouts, and replacement authorisations.",
    permissions: ["Approve Claim", "Authorize Replacement", "Override Rules", "Audit Vault Access"],
  },
  FARM_MANAGER: {
    label: "Farm Operations Lead (Maharashtra Shed)",
    badge: "Operations",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
    description: "Manages daily herd health, physical ear-tag verification, and replacement procurement.",
    permissions: ["Report Loss", "Verify RFID Tag", "Inspect Replacement", "Manage Quarantine"],
  },
  VET_OFFICER: {
    label: "Veterinary Officer (MVC Reg)",
    badge: "Clinical Authority",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    description: "Maharashtra Veterinary Council registered surgeon certifying post-mortem necropsy.",
    permissions: ["Issue Death Certificate", "Upload Necropsy", "Pre-Purchase Health Cert"],
  },
  ACCOUNTS_MANAGER: {
    label: "Finance & Accounts (Vashi Office)",
    badge: "Financial Control",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    description: "Reconciles insurer bank credit receipts, deductibles, and customer portfolio ledger.",
    permissions: ["Reconcile Bank Credit", "Process Settlement", "Audit Ledger Verification"],
  },
  INVESTOR_CUSTOMER: {
    label: "Customer / Animal Asset Owner (₹2 Lac Package)",
    badge: "Animal Asset Owner Shielded View",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    description: "Animal Asset Owner in 2 Lac Package. Views guaranteed animal replacement status and continuous milk yield with zero extra cost. Internal animal purchase costs and insurer claim reconciliations are hidden.",
    permissions: ["View 2 Lac Package Status", "View Guaranteed Replacement", "Track Milk Yield", "Read Factual Notice"],
  },
};

// ==========================================
// INSURANCE MODULE FORM DATA
// ==========================================
interface MaharashtraInsuranceForm {
  // Policy Details
  insuranceProvider: string;
  productName: string;
  policyNumber: string;
  externalInsurerRef: string;
  policyStatus: string;
  policyholderLegalOwner: string;
  registeredOfficeLocation: string;
  operationalDairyLocation: string;

  // Animal & Customer Identifiers
  animalId: string;
  packageId: string;
  customerId: string;
  rfidMicrochipNumber: string;
  animalCategory: string;
  breed: string;
  ageMonths: number;
  assessedMarketValueINR: number;
  sumInsuredINR: number;
  grossPremiumINR: number;
  govSubsidyDiscountINR: number;
  netPremiumPayableINR: number;
  policyStartDate: string;
  policyExpiryDate: string;
  coverageScope: string;
  policyDeductibleExcessPercent: number;

  // Incident & Claim Fields
  claimId: string;
  claimStatus: string;
  incidentDate: string;
  reportingDate: string;
  incidentType: string;
  causeOfDeathDescription: string;
  attendingMvcvVetName: string;
  mvcRegistrationNumber: string;
  postMortemReportNumber: string;
  rfidPhysicalTagRetrieved: boolean;
  carcassDisposalGpsCoordinates: string;
  claimAmountRequestedINR: number;
  insurerAssessedAmountINR: number;
  actualSettledAmountReceivedINR: number;
  insurerSettlementRef: string;
  bankCreditDate: string;

  // Replacement Workflow Fields
  replacementWorkflowStatus: string;
  selectedSettlementOption: string;
  replacementAnimalId: string;
  replacementRfidTag: string;
  replacementPurchasePriceINR: number;
  replacementShortfallSurplusINR: number;
  farmFundedContributionINR: number;
  replacementNewPolicyNumber: string;
  replacementSumInsuredINR: number;
  replacementVetCertNumber: string;
  customerContractContinued: boolean;
}

const PROVIDER_OPTIONS = [
  {
    value: "The New India Assurance Co. Ltd. (Vashi Division)",
    label: "The New India Assurance Co. Ltd. — Vashi Divisional Office (Navi Mumbai)",
    badge: "Public Sector (PSU)",
    description: "Nodal livestock underwriter for Maharashtra dairy clusters with cashless RFID tie-up",
  },
  {
    value: "United India Insurance Co. Ltd. (Pune RO)",
    label: "United India Insurance Co. Ltd. — National Livestock Mission (NLM) Desk",
    badge: "50% Govt Subsidy",
    description: "Subsidized dairy buffalo mortality scheme recognized by Maharashtra Animal Husbandry",
  },
  {
    value: "The Oriental Insurance Co. Ltd. (Mumbai Metro)",
    label: "The Oriental Insurance Co. Ltd. — Commercial Dairy Herd Package",
    badge: "Standard Cover",
    description: "Comprehensive accidental death, transit, and contagious disease protection",
  },
];

const ANIMAL_CATEGORY_OPTIONS = [
  { value: "Milking Buffalo (2nd Lactation)", label: "Milking Buffalo (2nd Lactation — Peak Yield)", badge: "Core Asset" },
  { value: "Pregnant Heifer (In-Calf)", label: "Pregnant Replacement Heifer (24-32 Months)", badge: "Growth Asset" },
  { value: "Female Heifer Calf", label: "Female Heifer Calf (Under 12 Months)", badge: "Future Stock" },
  { value: "Pedigree Breeding Sire Bull", label: "Pedigree Breeding Sire Bull (Murrah Champion)", badge: "Breeder" },
];

const COVERAGE_SCOPE_OPTIONS = [
  {
    value: "Death-Only (Accident, Illness & Calving)",
    label: "Standard Death-Only (Accidents, Epidemic Illness & Dystocia)",
    badge: "Base Cover",
    description: "Standard policy covering mortality due to lightning, snakebite, enterotoxemia, FMD complications",
  },
  {
    value: "Death + Permanent Total Disability (PTD Extension)",
    label: "Death + Permanent Total Disability (PTD Complete Agalactia Extension)",
    badge: "Comprehensive",
    description: "Includes complete permanent loss of milk production due to incurable mastitis or pelvic fracture",
  },
];

const INCIDENT_TYPE_OPTIONS = [
  { value: "Sudden Accidental Mortality", label: "Sudden Accidental Mortality (Bloat / Lightning / Trauma)", badge: "Accidental" },
  { value: "Acute Peracute Disease", label: "Acute Epidemic Infection (Haemorrhagic Septicaemia / HS / BQ)", badge: "Infectious" },
  { value: "Dystocia Calving Complication", label: "Dystocia / Severe Post-Partum Uterine Complication", badge: "Maternity" },
  { value: "Permanent Total Disability (PTD)", label: "Permanent Total Disability (Complete Udder Fibrosis)", badge: "PTD Disability" },
];

const SETTLEMENT_OPTIONS = [
  {
    value: "Option 1: Guaranteed Livestock Replacement (Farm Absorbs Cost Deficit)",
    label: "Option 1: Guaranteed Livestock Replacement (Farm Absorbs Cost Deficit)",
    badge: "Standard Policy",
    description: "Farm applies net claim proceeds and covers 100% of any purchase price gap from the Farm Guarantee Fund so customer herd continues with zero customer liability",
  },
  {
    value: "Option 2: Internal Barn Transfer from Acclimatized Baramati Herd",
    label: "Option 2: Internal Barn Transfer from Acclimatized Baramati Herd",
    badge: "Zero Downtime",
    description: "Immediately allocate an equivalent in-milk 2nd lactation Murrah milker from Hira Farm's quarantine reserve herd to avoid any milk production lag",
  },
  {
    value: "Option 3: Induction from Next 30-Day Pedigree Calving Cluster",
    label: "Option 3: Induction from Next 30-Day Pedigree Calving Cluster",
    badge: "Fresh Calver",
    description: "Induct an incoming champion pedigree Murrah heifer from the impending calving batch in Shed #4",
  },
];

export default function InputPage18() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"policy" | "claim" | "replacement" | "renewal" | "audit">("replacement");
  const [currentRole, setCurrentRole] = useState<RbacRole>("SUPER_ADMIN");
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [isAuthorizingReplacement, setIsAuthorizingReplacement] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<MaharashtraInsuranceForm>({
    defaultValues: {
      insuranceProvider: "The New India Assurance Co. Ltd. (Vashi Division)",
      productName: "Navi Mumbai Commercial Bovine Shield Policy",
      policyNumber: "NIA-MH-LIV-2026-990421",
      externalInsurerRef: "IRDAI-NIA-4029-B1029",
      policyStatus: "ACTIVE",
      policyholderLegalOwner: "Hira Dairy Farming Private Limited",
      registeredOfficeLocation: "Sector 30A, Vashi, Navi Mumbai, Maharashtra 400703",
      operationalDairyLocation: "Hira Farm Complex #4, Baramati-Pune Dairy Corridor, Maharashtra",

      animalId: "HIRA_A1_OCT26_BUFF_MUR_35",
      packageId: "PACK_A1_OCT26_BUFF_MUR_35",
      customerId: "CUST_MH_NAV_1042",
      rfidMicrochipNumber: "982000412891035",
      animalCategory: "Milking Buffalo (2nd Lactation)",
      breed: "Pure Murrah (Haryana-Maharashtra Acclimatized)",
      ageMonths: 42,
      assessedMarketValueINR: 200000,
      sumInsuredINR: 185000,
      grossPremiumINR: 8325,
      govSubsidyDiscountINR: 4162.5,
      netPremiumPayableINR: 4162.5,
      policyStartDate: "2026-04-01",
      policyExpiryDate: "2027-03-31",
      coverageScope: "Death-Only (Accident, Illness & Calving)",
      policyDeductibleExcessPercent: 5.0,

      claimId: "CLM-MH-2026-0042",
      claimStatus: "APPROVED",
      incidentDate: "2026-10-20",
      reportingDate: "2026-10-21",
      incidentType: "Sudden Accidental Mortality",
      causeOfDeathDescription: "Acute severe ruminal tympany (bloat) following sudden legume intake. Unresponsive to trocarization.",
      attendingMvcvVetName: "Dr. Ramesh K. Patil (Deputy Director Animal Husbandry Retd.)",
      mvcRegistrationNumber: "MVC-2014-08-0421",
      postMortemReportNumber: "PM-MH-BARAMATI-2026-8812",
      rfidPhysicalTagRetrieved: true,
      carcassDisposalGpsCoordinates: "18.1528° N, 74.5772° E (Baramati Farm Bio-Pit #3)",
      claimAmountRequestedINR: 185000,
      insurerAssessedAmountINR: 175750,
      actualSettledAmountReceivedINR: 175750,
      insurerSettlementRef: "NEFT-NIA-MUM-884102941",
      bankCreditDate: "2026-10-26",

      replacementWorkflowStatus: "REPLACEMENT_PURCHASED_READY_TO_LINK",
      selectedSettlementOption: "Option 1: Guaranteed Livestock Replacement (Farm Absorbs Cost Deficit)",
      replacementAnimalId: "HIRA_A1_OCT26_BUFF_MUR_89_REP",
      replacementRfidTag: "982000412891089",
      replacementPurchasePriceINR: 190000,
      replacementShortfallSurplusINR: -14250,
      farmFundedContributionINR: 14250,
      replacementNewPolicyNumber: "NIA-MH-LIV-2026-995180",
      replacementSumInsuredINR: 185000,
      replacementVetCertNumber: "VET-CERT-MH-2026-19042",
      customerContractContinued: true,
    },
  });

  const watched = watch();

  const shortfall = (watched.actualSettledAmountReceivedINR || 0) - (watched.replacementPurchasePriceINR || 0);

  const onSubmit = async (data: MaharashtraInsuranceForm) => {
    setIsSubmittingForm(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmittingForm(false);
    toast({
      type: "success",
      title: "Livestock Insurance Dossier Updated!",
      description: `Animal ${data.animalId} policy records updated under Maharashtra regional jurisdiction (${data.registeredOfficeLocation.split(",")[0]}).`,
    });
  };

  const handleAuthorizeReplacement = async () => {
    if (currentRole !== "SUPER_ADMIN" && currentRole !== "FARM_MANAGER") {
      toast({
        type: "error",
        title: "Unauthorized Action",
        description: "Only Super Admin or Farm Operations Lead can authorize animal replacement linking.",
      });
      return;
    }

    setIsAuthorizingReplacement(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsAuthorizingReplacement(false);
    setValue("replacementWorkflowStatus", "ACTIVE_REPLACEMENT_LINKED");
    toast({
      type: "success",
      title: "Replacement Linked to Customer Portfolio!",
      description: `Replacement Buffalo ${watched.replacementAnimalId} is now active for Customer ${watched.customerId} in Package ${watched.packageId}. Historical records segregated.`,
    });
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingDraft(false);
    toast({
      type: "info",
      title: "Insurance Docket Draft Saved",
      description: "Local cache updated for Vashi audit review.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/20 to-white text-stone-900 font-sans pb-32">
      {/* HEADER WITH MAHARASHTRA CONTEXT */}
      <header className="border-b border-stone-200 bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-auto py-3 sm:py-0 sm:h-20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 to-stone-900 text-white flex items-center justify-center font-black shadow-md shadow-amber-900/30 shrink-0">
              <ShieldCheck className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Link href="/" className="font-extrabold text-base sm:text-lg text-stone-900">
                  LIVESTOCK INSURANCE & REPLACEMENT
                </Link>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-mono font-bold border border-amber-300">
                  Design input-18
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-mono font-bold border border-emerald-300 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-700" /> Maharashtra Cluster
                </span>
              </div>
              <p className="text-[11px] text-stone-600 font-medium">
                Regd Office: Vashi, Navi Mumbai &bull; Operations: Baramati/Pune Dairy Belt &bull; Animal:{" "}
                <span className="font-mono font-bold text-amber-800">{watched.animalId}</span>
              </p>
            </div>
          </div>

          {/* Role-Based Perspective Switcher */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200">
              <span className="text-[10px] font-bold text-stone-500 uppercase px-2 hidden md:inline">Role View:</span>
              {(Object.keys(ROLES_CONFIG) as RbacRole[]).map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setCurrentRole(role)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                    currentRole === role
                      ? "bg-stone-900 text-white shadow-xs"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/60"
                  }`}
                >
                  {role === "SUPER_ADMIN"
                    ? "Admin"
                    : role === "VET_OFFICER"
                    ? "Vet (MVC)"
                    : role === "ACCOUNTS_MANAGER"
                    ? "Accounts"
                    : role === "INVESTOR_CUSTOMER"
                    ? "Animal Asset Owner"
                    : "Farm Lead"}
                </button>
              ))}
            </div>

            <Link
              href="/"
              className="px-3.5 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-extrabold text-xs shadow-sm transition shrink-0 hidden sm:inline"
            >
              Hub Home &rarr;
            </Link>
          </div>
        </div>
      </header>

      {/* ACTIVE ROLE PERMISSION NOTICE BANNER */}
      <div className="bg-amber-500/10 border-b border-amber-300/40 px-4 sm:px-6 py-2">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between text-xs text-amber-950 gap-1.5">
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded-md font-mono text-[10px] font-bold border ${ROLES_CONFIG[currentRole].badgeColor}`}>
              {ROLES_CONFIG[currentRole].label}
            </span>
            <span className="text-[11px] font-medium text-stone-700">{ROLES_CONFIG[currentRole].description}</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-stone-600">
            <Lock className="w-3 h-3 text-amber-700" />
            <span>Permitted Actions: {ROLES_CONFIG[currentRole].permissions.join(" • ")}</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 space-y-6">
        {/* TOP SUMMARY STATS GRID (Screen-Size Friendly & Role Sensitive) */}
        {currentRole === "INVESTOR_CUSTOMER" ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <span className="text-[10px] font-mono uppercase font-bold text-stone-500">Your Livestock Package</span>
              <div className="text-sm sm:text-base font-black text-stone-900 truncate mt-1 font-mono">{watched.packageId}</div>
              <span className="text-[10px] text-amber-700 font-semibold">₹2,00,000 Fixed Package</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <span className="text-[10px] font-mono uppercase font-bold text-stone-500">Active Murrah Buffalo</span>
              <div className="text-sm sm:text-base font-black text-emerald-700 truncate mt-1 font-mono">
                {watched.replacementAnimalId}
              </div>
              <span className="text-[10px] text-emerald-800 font-semibold">In-Milk (16.5 L/day Peak)</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <span className="text-[10px] font-mono uppercase font-bold text-stone-500">Customer Replacement Cost</span>
              <div className="text-sm sm:text-base font-black text-emerald-600 mt-1">₹0.00 (Nil)</div>
              <span className="text-[10px] text-stone-500 font-medium">100% Farm-Funded Guarantee</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <span className="text-[10px] font-mono uppercase font-bold text-stone-500">Compounding Plan</span>
              <div className="text-sm sm:text-base font-black text-purple-700 mt-1">10-Year Continuity</div>
              <span className="text-[10px] text-stone-600 font-mono font-bold truncate block">
                Uninterrupted Dividends
              </span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <span className="text-[10px] font-mono uppercase font-bold text-stone-500">Insured Animal ID</span>
              <div className="text-sm sm:text-base font-black text-stone-900 truncate mt-1 font-mono">{watched.animalId}</div>
              <span className="text-[10px] text-amber-700 font-semibold">Pkg: {watched.packageId}</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <span className="text-[10px] font-mono uppercase font-bold text-stone-500">Customer Portfolio</span>
              <div className="text-sm sm:text-base font-black text-stone-900 mt-1 font-mono">{watched.customerId}</div>
              <span className="text-[10px] text-emerald-700 font-semibold">30% Net Milk Revenue Share</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase font-bold text-stone-500">Sum Insured (NIA)</span>
                <span className="text-[9px] bg-stone-900 text-amber-300 px-1.5 py-0.2 rounded font-mono font-bold">ADMIN ONLY</span>
              </div>
              <div className="text-sm sm:text-base font-black text-emerald-700 mt-1">₹{formatNumber(watched.sumInsuredINR)}</div>
              <span className="text-[10px] text-stone-500">Assessed: ₹{formatNumber(watched.assessedMarketValueINR)}</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <span className="text-[10px] font-mono uppercase font-bold text-stone-500">Replacement State</span>
              <div className="text-sm sm:text-base font-black text-amber-700 mt-1">Ready to Link</div>
              <span className="text-[10px] text-purple-700 font-mono font-bold truncate block">
                {watched.replacementAnimalId}
              </span>
            </div>
          </div>
        )}

        {/* SCREEN-SIZE FRIENDLY TAB NAVIGATION */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-stone-200">
          <button
            type="button"
            onClick={() => setActiveTab("replacement")}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "replacement"
                ? "bg-amber-600 text-white shadow-md shadow-amber-500/25"
                : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-100"
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>5-Step Replacement Workflow</span>
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("policy")}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "policy"
                ? "bg-stone-900 text-white shadow-md shadow-stone-800/25"
                : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-100"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Policy Terms & MSLDB Subsidy</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("claim")}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "claim"
                ? "bg-stone-900 text-white shadow-md shadow-stone-800/25"
                : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-100"
            }`}
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>Claim & Necropsy Dossier</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("renewal")}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "renewal"
                ? "bg-stone-900 text-white shadow-md shadow-stone-800/25"
                : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-100"
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>10-Year Horizon & Age Cap</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("audit")}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "audit"
                ? "bg-stone-900 text-white shadow-md shadow-stone-800/25"
                : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-100"
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Immutable Audit Vault</span>
          </button>
        </div>

        {/* TAB 1: 5-STEP REPLACEMENT WORKFLOW (CRITICAL BUSINESS REQUIREMENT) */}
        {activeTab === "replacement" && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: Step-by-step Execution */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-3xl border border-stone-200 shadow-xl p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
                      Portfolio Continuity Covenant
                    </span>
                    <span className="text-[10px] font-mono bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full font-bold">
                      Section 7 Compliant
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                    Documented Replacement Animal Workflow
                  </h2>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Under Hira Farm&apos;s 10-Year Compounding Model, animal mortality does not trigger cash liquidation or contract exit. A healthy replacement milker is inducted, with 100% of price shortfalls funded by farm management.
                  </p>
                </div>

                {/* 5-STEP PROGRESS BAR (Screen-Size Responsive) */}
                <div className="relative pl-6 space-y-8 border-l-2 border-amber-300">
                  {/* STEP A */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-stone-900 border-2 border-white shadow-xs flex items-center justify-center text-[9px] text-white font-bold" />
                    <div>
                      <span className="text-[10px] font-mono font-bold text-stone-500 uppercase">Step A &bull; Loss Recorded & Identity Retired</span>
                      <h4 className="text-sm font-black text-stone-950 mt-0.5">
                        Original Animal <span className="font-mono text-rose-700">{watched.animalId}</span> Marked DECEASED
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        RFID microchip <span className="font-mono font-bold">982000412891035</span> permanently locked in archive. Historical milk logs, breeding records, and health data remain immutably attached to this deceased animal ID and will NEVER be reused.
                      </p>
                    </div>
                  </div>

                  {/* STEP B */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow-xs" />
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase">Step B &bull; Insurance Claim Reconciled & Cash Verified</span>
                        {currentRole !== "INVESTOR_CUSTOMER" && (
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-stone-900 text-amber-300 font-bold">
                            INTERNAL FINANCIALS
                          </span>
                        )}
                      </div>

                      {currentRole === "INVESTOR_CUSTOMER" ? (
                        <div className="mt-1.5 p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-xs space-y-2">
                          <div className="flex items-center gap-2 text-emerald-950 font-bold">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            <span>Insurance Settlement Approved by Underwriter</span>
                          </div>
                          <p className="text-[11px] text-emerald-900 leading-relaxed">
                            The insurance claim for original buffalo <span className="font-mono font-bold">{watched.animalId}</span> has been processed and settled directly to the farm escrow account by The New India Assurance Co. Ltd. (Vashi Office).
                          </p>
                          <div className="p-2.5 rounded-xl bg-white/90 border border-emerald-200 flex items-center justify-between font-mono text-[11px]">
                            <span className="text-stone-700 font-medium">Customer Financial Obligation:</span>
                            <span className="font-bold text-emerald-700">₹0.00 (Zero Out-of-Pocket Expense)</span>
                          </div>
                          <p className="text-[10px] text-stone-500 italic">
                            *Under your ₹2 Lac Package, all insurance settlement reconciliations and bank formalities are handled confidentially by farm administration.
                          </p>
                        </div>
                      ) : (
                        <>
                          <h4 className="text-sm font-black text-stone-950 mt-0.5">
                            Net Claim Payout Received: ₹{formatNumber(watched.actualSettledAmountReceivedINR)}
                          </h4>
                          <div className="mt-1.5 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1 font-mono">
                            <div className="flex justify-between text-stone-600">
                              <span>Sum Insured (Bovine Policy):</span>
                              <span className="font-bold text-stone-900">₹{formatNumber(watched.sumInsuredINR)}</span>
                            </div>
                            <div className="flex justify-between text-stone-600">
                              <span>Less 5% Deductible Excess:</span>
                              <span className="text-rose-600">-₹{formatNumber(watched.sumInsuredINR * 0.05)}</span>
                            </div>
                            <div className="flex justify-between text-stone-900 border-t border-stone-200 pt-1 font-bold">
                              <span>Verified Vashi Escrow Bank Receipt:</span>
                              <span className="text-emerald-700">₹{formatNumber(watched.actualSettledAmountReceivedINR)}</span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* STEP C */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow-xs" />
                    <div>
                      <span className="text-[10px] font-mono font-bold text-amber-700 uppercase">Step C &bull; Mandatory Replacement Protocol Applied</span>

                      {/* NO-EXIT GUARANTEE BANNER */}
                      <div className="mt-1.5 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
                        <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-amber-900">Mandatory Animal Replacement — No Exit / Liquidation Policy:</strong>
                          <p className="text-[11px] text-amber-800 mt-0.5 leading-relaxed">
                            Hira Farm does not offer cash exit or portfolio liquidation upon animal death. All deceased animals are mandatorily replaced to safeguard the customer&apos;s 10-year compounding herd plan. Extra purchase cost is 100% added by farm management.
                          </p>
                        </div>
                      </div>

                      {currentRole === "INVESTOR_CUSTOMER" ? (
                        <div className="mt-3 p-3.5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-stone-900">Active Covenant:</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                              100% FARM REPLACEMENT GUARANTEE
                            </span>
                          </div>
                          <p className="text-xs text-stone-700 leading-relaxed">
                            Hira Farm has applied the insurance settlement toward an equivalent 2nd lactation Murrah milker. All purchase shortfall is absorbed from the internal Farm Guarantee Reserve Fund.
                          </p>
                          <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] font-mono">
                            <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                              <span className="text-[10px] text-stone-500 block">Animal Asset Owner Extra Outlay</span>
                              <span className="font-bold text-emerald-700 text-sm">₹0.00 (Nil)</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                              <span className="text-[10px] text-stone-500 block">Compounding Timeline</span>
                              <span className="font-bold text-stone-900 text-sm">Uninterrupted</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="mt-3">
                          <h4 className="text-xs font-black text-stone-800 uppercase tracking-wide mb-2 flex items-center justify-between">
                            <span>Admin Settlement Protocol Selection</span>
                            <span className="text-[9px] font-mono text-stone-500 font-bold">CONFIDENTIAL ADMIN CONTROLS</span>
                          </h4>
                          <div className="space-y-2">
                            {SETTLEMENT_OPTIONS.map((opt) => (
                              <label
                                key={opt.value}
                                className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition ${
                                  watched.selectedSettlementOption === opt.value
                                    ? "border-amber-500 bg-amber-50/50 ring-1 ring-amber-500"
                                    : "border-stone-200 bg-white hover:bg-stone-50"
                                }`}
                              >
                                <input
                                  type="radio"
                                  value={opt.value}
                                  {...register("selectedSettlementOption")}
                                  className="mt-0.5 text-amber-600 focus:ring-amber-500"
                                />
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-stone-900">{opt.label}</span>
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-bold">
                                      {opt.badge}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-stone-600 mt-0.5">{opt.description}</p>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* STEP D */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-purple-600 border-2 border-white shadow-xs" />
                    <div>
                      <span className="text-[10px] font-mono font-bold text-purple-700 uppercase">Step D &bull; Replacement Buffalo Purchased & Verified</span>
                      <h4 className="text-sm font-black text-stone-950 mt-0.5">
                        New Bovine ID: <span className="font-mono text-purple-900">{watched.replacementAnimalId}</span>
                      </h4>

                      {currentRole === "INVESTOR_CUSTOMER" ? (
                        <div className="mt-2.5 p-4 rounded-2xl bg-purple-50/50 border border-purple-200 space-y-3">
                          <div className="grid sm:grid-cols-2 gap-3 text-xs">
                            <div className="p-3 rounded-xl bg-white border border-purple-100">
                              <span className="text-[10px] text-purple-700 font-mono font-bold block">Assigned Bovine Asset</span>
                              <span className="text-sm font-black text-stone-900 font-mono block mt-0.5">{watched.replacementAnimalId}</span>
                              <span className="text-[10px] text-stone-500 block">Pure Murrah &bull; 2nd Lactation (Peak)</span>
                            </div>

                            <div className="p-3 rounded-xl bg-white border border-purple-100">
                              <span className="text-[10px] text-emerald-700 font-mono font-bold block">Customer Extra Cost</span>
                              <span className="text-sm font-black text-emerald-700 font-mono block mt-0.5">₹0.00 (Nil)</span>
                              <span className="text-[10px] text-stone-500 block">100% Absorbed by Farm Management</span>
                            </div>
                          </div>

                          <div className="text-[11px] text-stone-700 space-y-1 pt-1 border-t border-purple-100">
                            <p>
                              <strong>Microchip RFID Tag:</strong> <span className="font-mono font-bold text-stone-900">{watched.replacementRfidTag}</span> (INAF Specimen Tag)
                            </p>
                            <p>
                              <strong>Veterinary Fitness Certificate:</strong> Pre-purchase health clearance signed by MVC Registered Veterinarian (#{watched.replacementVetCertNumber})
                            </p>
                            <p>
                              <strong>Independent Insurance Policy:</strong> New policy issued by The New India Assurance Co. Ltd. (Policy #{watched.replacementNewPolicyNumber})
                            </p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="mt-2 grid sm:grid-cols-2 gap-3 text-xs">
                            <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-200">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] text-purple-700 font-mono font-bold block">Replacement Purchase Cost</span>
                                <span className="text-[9px] bg-purple-200 text-purple-900 px-1.5 py-0.2 rounded font-mono font-bold">ADMIN ONLY</span>
                              </div>
                              <span className="text-base font-black text-purple-950 font-mono">₹{formatNumber(watched.replacementPurchasePriceINR)}</span>
                              <span className="text-[10px] text-stone-500 block mt-0.5">Prime 2nd Lactation Murrah</span>
                            </div>

                            <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] text-amber-700 font-mono font-bold block">Farm Shortfall Contribution</span>
                                <span className="text-[9px] bg-amber-200 text-amber-900 px-1.5 py-0.2 rounded font-mono font-bold">FARM BUFFER</span>
                              </div>
                              <span className="text-base font-black text-amber-950 font-mono">+₹{formatNumber(watched.farmFundedContributionINR)}</span>
                              <span className="text-[10px] text-stone-500 block mt-0.5">Extra money added by Farm Management</span>
                            </div>
                          </div>

                          <div className="mt-3 p-3 rounded-xl bg-stone-50 border border-stone-200 text-[11px] text-stone-700 space-y-1">
                            <p>
                              <strong>New RFID Tag:</strong> <span className="font-mono">{watched.replacementRfidTag}</span> (Pre-purchase MVC Vet Cert #{watched.replacementVetCertNumber})
                            </p>
                            <p>
                              <strong>Separate New Policy:</strong> <span className="font-mono">{watched.replacementNewPolicyNumber}</span> (Deceased policy is NOT copied or transferred!)
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* STEP E */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow-xs" />
                    <div>
                      <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase">Step E &bull; Customer Portfolio Linking & Continuity</span>
                      <h4 className="text-sm font-black text-stone-950 mt-0.5">
                        Portfolio Continues Under Package <span className="font-mono text-emerald-800">{watched.packageId}</span>
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        Customer <span className="font-mono font-bold">{watched.customerId}</span> retains uninterrupted participation. Daily milking records reset to Day 1 for {watched.replacementAnimalId}. Compounding 10-year model preserved with zero customer interruption.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ACTION BUTTONS (Super Admin / Farm Manager Only) */}
                {currentRole === "INVESTOR_CUSTOMER" ? (
                  <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Livestock Replacement Active — Covered Under Your 2 Lac Package Guarantee</span>
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold">
                      PORTFOLIO ON TRACK
                    </span>
                  </div>
                ) : (
                  <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleSaveDraft}
                        disabled={isSavingDraft || isAuthorizingReplacement}
                        className="px-4 py-2.5 rounded-xl border border-stone-300 text-xs font-bold text-stone-700 hover:bg-stone-100 transition flex items-center gap-1.5"
                      >
                        {isSavingDraft ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5 text-stone-500" />}
                        <span>Save Replacement Dossier</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={handleAuthorizeReplacement}
                      disabled={isAuthorizingReplacement || isSavingDraft}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs shadow-lg shadow-emerald-500/25 transition flex items-center gap-2"
                    >
                      {isAuthorizingReplacement ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Authorizing Replacement in Portfolio...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Authorize Replacement & Continue Portfolio</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right 5 Columns: Legal Entity Clarity & Customer Portfolio Telemetry */}
            <div className="lg:col-span-5 space-y-6">
              {/* FIVE DISTINCT ROLES CARD (Section 6 Compliance) */}
              <div className="p-6 rounded-3xl bg-stone-900 text-white shadow-xl space-y-4">
                <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-amber-300 block border-b border-stone-800 pb-2">
                  5 Distinct Legal & Economic Roles
                </span>

                <div className="space-y-2.5 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">1. Legal Owner of Bovine</span>
                    <span className="font-bold text-white">Hira Dairy Farming Private Limited</span>
                  </div>

                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">2. Insurance Policyholder</span>
                    <span className="font-bold text-white">Hira Dairy Farming Pvt Ltd (Vashi Registered)</span>
                  </div>

                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">3. Loss Payee / Beneficiary</span>
                    <span className="font-bold text-emerald-400">Hira Farm Dedicated Livestock Escrow Trust</span>
                  </div>

                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">4. Customer Economic Interest</span>
                    <span className="font-bold text-amber-300 font-mono">
                      {watched.customerId} (2 Lac Pkg: {watched.packageId})
                    </span>
                  </div>

                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">5. Farm Custodial Operator</span>
                    <span className="font-bold text-white">Hira Farm Operations Team (Baramati Shed)</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-800 text-[11px] text-stone-400 leading-relaxed">
                  <Info className="w-3.5 h-3.5 text-amber-400 inline mr-1" />
                  <strong>Zero-Exit Replacement Rule:</strong> Animal mortality triggers mandatory livestock replacement funded by farm management. Customer portfolio continues without capital call or exit.
                </div>
              </div>

              {/* FACTUAL CUSTOMER NOTIFICATION PREVIEW */}
              <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                  <span className="font-bold text-stone-700 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-amber-600" /> Customer Notice Template
                  </span>
                  <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-bold">
                    FACTUAL SUMMARY
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-stone-700 text-[11px] leading-relaxed space-y-2">
                  <p>
                    <strong>Subject:</strong> Notice of Guaranteed Livestock Replacement &bull; Package {watched.packageId}
                  </p>
                  <p>
                    Dear Animal Asset Owner ({watched.customerId}),
                  </p>
                  <p>
                    We regret to inform you that original buffalo <span className="font-bold text-stone-900">{watched.animalId}</span> passed away on {watched.incidentDate} due to verified acute bloat (Post-Mortem #{watched.postMortemReportNumber} by MVC Registered Veterinarian).
                  </p>
                  <p>
                    Under your <strong className="text-stone-900">₹2,00,000 Animal Package Agreement</strong>, Hira Farm has completed the guaranteed livestock replacement. Extra acquisition costs have been absorbed 100% by Farm Management.
                  </p>
                  <p>
                    Replacement Murrah milker (<span className="font-bold text-emerald-800">{watched.replacementAnimalId}</span>, RFID #{watched.replacementRfidTag}) has been verified in our Baramati shed. Your daily milk dividend calculation resumes immediately, and your 10-year compounding herd plan continues uninterrupted with <strong className="text-emerald-700">₹0 extra cost to you</strong>.
                  </p>
                  <p className="text-[10px] text-stone-500 italic">
                    *Hira Farm guarantees livestock replacement during mortality to preserve 10-year compounding herd returns. No exit policy or portfolio liquidation applies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: POLICY TERMS & MAHARASHTRA SUBSIDY */}
        {activeTab === "policy" && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 bg-white rounded-3xl border border-stone-200 shadow-xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
                  Regional Regulatory Schedule
                </span>
                <h2 className="text-2xl font-black text-stone-950 mt-1">
                  Maharashtra Livestock Policy Details & NLM Subsidy
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  Verified policy terms issued under the Maharashtra State Animal Husbandry (Pashusamvardhan Vibhag) NLM guidelines.
                </p>
              </div>

              {currentRole === "INVESTOR_CUSTOMER" ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-950 uppercase tracking-wide">
                        ₹2,00,000 Package Insurance Shield
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                        FULLY INCLUSIVE
                      </span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      Your ₹2,00,000 Animal Package includes complete bovine life coverage underwritten by <strong className="text-stone-900">The New India Assurance Co. Ltd. (Vashi Division)</strong> in conjunction with the Maharashtra State Livestock Development Board (MSLDB) National Livestock Mission.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-white border border-stone-200">
                        <span className="text-[10px] text-stone-500 block uppercase font-bold">Policy Protection Status</span>
                        <span className="text-sm font-bold text-emerald-700 block mt-0.5">Active & Subsidized</span>
                        <span className="text-[10px] text-stone-500 block">50% MSLDB NLM Grant Applied</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-stone-200">
                        <span className="text-[10px] text-stone-500 block uppercase font-bold">Recurring Animal Asset Owner Fee</span>
                        <span className="text-sm font-bold text-emerald-700 block mt-0.5">₹0.00 / year</span>
                        <span className="text-[10px] text-stone-500 block">100% Borne by Farm Operations</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-2">
                    <div className="flex items-center gap-1.5 font-bold text-stone-900">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Confidential Farm Financial Administration</span>
                    </div>
                    <p className="text-[11px] text-stone-600 leading-relaxed">
                      Actual animal procurement costs, annual policy underwriting premiums, salvage assessments, and government subsidy filings are handled internally as farm management overheads. Your fixed ₹2,00,000 investment agreement guarantees your asset and returns without unexpected capital calls.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Row 1: Provider & Product */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Controller
                      name="insuranceProvider"
                      control={control}
                      rules={{ required: "Provider required" }}
                      render={({ field }) => (
                        <SearchableSelect
                          label="Insurance Provider & Division"
                          modalTitle="Select Insurance Provider"
                          placeholder="Select Provider"
                          options={PROVIDER_OPTIONS}
                          value={field.value}
                          onChange={field.onChange}
                          required
                        />
                      )}
                    />

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Master Policy Certificate # <span className="text-rose-500">*</span>
                      </label>
                      <input
                        {...register("policyNumber", { required: "Policy # required" })}
                        placeholder="NIA-MH-LIV-2026-990421"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:border-amber-500 outline-none uppercase"
                      />
                    </div>
                  </div>

                  {/* Row 2: Animal ID & Category */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Insured Animal Tag ID <span className="text-rose-500">*</span>
                      </label>
                      <input
                        {...register("animalId", { required: "Animal ID required" })}
                        placeholder="HIRA_A1_OCT26_BUFF_MUR_35"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold text-amber-900 focus:border-amber-500 outline-none uppercase"
                      />
                    </div>

                    <Controller
                      name="animalCategory"
                      control={control}
                      render={({ field }) => (
                        <SearchableSelect
                          label="Animal Life Stage Category"
                          modalTitle="Select Animal Life Stage Category"
                          placeholder="Select Category"
                          options={ANIMAL_CATEGORY_OPTIONS}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />
                  </div>

                  {/* Row 3: Valuation & Sum Insured */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Veterinary Assessed Market Value (₹) <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="number"
                        {...register("assessedMarketValueINR", { required: "Assessed value required", valueAsNumber: true })}
                        placeholder="200000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold text-stone-900 focus:border-amber-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Sum Insured Under Policy (₹) <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="number"
                        {...register("sumInsuredINR", { required: "Sum insured required", valueAsNumber: true })}
                        placeholder="185000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-black text-emerald-700 focus:border-amber-500 outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 4: Premium Breakdown & 50% Subsidy */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Gross Annual Premium (4.5% Rate)</label>
                      <input
                        type="number"
                        {...register("grossPremiumINR", { valueAsNumber: true })}
                        placeholder="8325"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-amber-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Maharashtra NLM 50% Govt Subsidy (₹)
                      </label>
                      <input
                        type="number"
                        {...register("govSubsidyDiscountINR", { valueAsNumber: true })}
                        placeholder="4162.5"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold text-emerald-700 focus:border-amber-500 outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 5: Policy Scope & Deductible */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Controller
                      name="coverageScope"
                      control={control}
                      render={({ field }) => (
                        <SearchableSelect
                          label="Coverage Type Scope"
                          modalTitle="Select Coverage Scope"
                          placeholder="Select Scope"
                          options={COVERAGE_SCOPE_OPTIONS}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Policy Excess / Deductible (%)</label>
                      <input
                        type="number"
                        step="0.5"
                        {...register("policyDeductibleExcessPercent", { valueAsNumber: true })}
                        placeholder="5.0"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold text-rose-700 focus:border-amber-500 outline-none"
                      />
                      <p className="text-[10px] text-stone-500 mt-0.5">5% standard deductible deducted from claim payouts</p>
                    </div>
                  </div>

                  {/* Row 6: Policyholder & Registered Office */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Policyholder & Legal Owner</label>
                      <input
                        {...register("policyholderLegalOwner")}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-bold bg-stone-50 text-stone-800 outline-none"
                        readOnly
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Vashi Registered Office Location</label>
                      <input
                        {...register("registeredOfficeLocation")}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold bg-stone-50 text-stone-800 outline-none"
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Submit / Save Buttons */}
                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => reset()}
                      className="px-4 py-2.5 rounded-xl border border-stone-300 text-xs font-bold text-stone-600 hover:bg-stone-100 transition flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Reset Form
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmittingForm}
                      className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-extrabold text-xs shadow-md transition flex items-center gap-2"
                    >
                      {isSubmittingForm ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                      <span>Save Policy Certificate</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right 4 Columns: Covered vs Excluded Checklist */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-4">
                <span className="text-xs font-mono font-bold uppercase text-stone-500 block border-b border-stone-100 pb-2">
                  Actual Policy Wording Coverage
                </span>

                <div className="space-y-3">
                  <div>
                    <span className="text-[11px] font-bold text-emerald-800 uppercase flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Confirmed Covered Causes
                    </span>
                    <ul className="mt-1 text-xs text-stone-600 space-y-1 pl-5 list-disc">
                      <li>Accidental electrocution & lightning strike</li>
                      <li>Acute bloat (ruminal tympany) & snake bite</li>
                      <li>Dystocia & calving uterine complications</li>
                      <li>Infectious diseases (HS, BQ, Anthrax vaccinated)</li>
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-stone-100">
                    <span className="text-[11px] font-bold text-rose-800 uppercase flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-600" /> Explicit Policy Exclusions
                    </span>
                    <ul className="mt-1 text-xs text-stone-600 space-y-1 pl-5 list-disc">
                      <li>Theft, straying or mysterious disappearance</li>
                      <li>Loss of daily milk income or dividend shortfall</li>
                      <li>Infertility or failure to conceive</li>
                      <li>Replacement purchase transportation cost</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CLAIM & NECROPSY DOSSIER */}
        {activeTab === "claim" && (
          <div className="bg-white rounded-3xl border border-stone-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
                Mortality Claim Dossier
              </span>
              <h2 className="text-2xl font-black text-stone-950 mt-1">
                Maharashtra Veterinary Council (MVC) Claim Filing
              </h2>
              <p className="text-xs text-stone-600 mt-1">
                Every claim requires strict photographic ear-tag proof, veterinary post-mortem report, and bio-pit GPS recording.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <span className="font-bold text-stone-800 uppercase text-[11px]">Clinical Incident Details</span>
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Claim Docket ID:</span>
                    <span className="font-mono font-bold">{watched.claimId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Deceased Buffalo:</span>
                    <span className="font-mono font-bold text-rose-800">{watched.animalId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Date of Incident:</span>
                    <span>{watched.incidentDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Attending Vet:</span>
                    <span className="font-bold">{watched.attendingMvcvVetName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">MVC Registration #:</span>
                    <span className="font-mono">{watched.mvcRegistrationNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Post-Mortem #:</span>
                    <span className="font-mono font-bold">{watched.postMortemReportNumber}</span>
                  </div>
                  {currentRole !== "INVESTOR_CUSTOMER" && (
                    <div className="pt-2 border-t border-stone-200 space-y-1 font-mono text-[11px]">
                      <div className="flex justify-between text-stone-500">
                        <span>Claim Settled to Escrow:</span>
                        <span className="font-bold text-emerald-700">₹{formatNumber(watched.actualSettledAmountReceivedINR)}</span>
                      </div>
                      <div className="flex justify-between text-stone-500 text-[10px]">
                        <span>NEFT Bank Credit Ref:</span>
                        <span className="font-mono text-stone-800">{watched.insurerSettlementRef}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <span className="font-bold text-stone-800 uppercase text-[11px]">Evidence Checklist (Verified by Vashi Office)</span>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked readOnly className="rounded text-emerald-600" />
                    <span>RFID Microchip Specimen Tag Retrieved Unbroken</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked readOnly className="rounded text-emerald-600" />
                    <span>Carcass Photographed with Ear Tag and Measuring Tape</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked readOnly className="rounded text-emerald-600" />
                    <span>Baramati Tehsildar Jurisdiction Bio-Pit Burial GPS Log</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked readOnly className="rounded text-emerald-600" />
                    <span>Insurer Loss Intimation Letter Transmitted Within 24 Hours</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: 10-YEAR HORIZON & AGE CAP PLANNER */}
        {activeTab === "renewal" && (
          <div className="bg-white rounded-3xl border border-stone-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
                Biological Horizon Planning
              </span>
              <h2 className="text-2xl font-black text-stone-950 mt-1">
                10-Year Renewal Planner & Maximum Age Restrictions
              </h2>
              <p className="text-xs text-stone-600 mt-1">
                Buffalo policies are renewed annually. Track age caps under Maharashtra insurance guidelines (max insurable age: 12 years).
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse font-mono">
                <thead>
                  <tr className="bg-stone-100 text-stone-700 border-b border-stone-300">
                    <th className="p-3">Year</th>
                    <th className="p-3">Animal Age</th>
                    <th className="p-3">Lactation Stage</th>
                    <th className="p-3">Assessed Value</th>
                    <th className="p-3">Sum Insured</th>
                    <th className="p-3">Estimated Premium</th>
                    <th className="p-3">Insurability Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr className="bg-emerald-50/50">
                    <td className="p-3 font-bold">Year 1 (Current)</td>
                    <td className="p-3">3.5 Years</td>
                    <td className="p-3 font-sans">2nd Lactation (Peak)</td>
                    <td className="p-3">₹2,00,000</td>
                    <td className="p-3 font-bold text-emerald-800">₹1,85,000</td>
                    <td className="p-3">₹4,162.50 (Subsidized)</td>
                    <td className="p-3 text-emerald-700 font-bold">ACTIVE INSURED</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Year 2</td>
                    <td className="p-3">4.5 Years</td>
                    <td className="p-3 font-sans">3rd Lactation</td>
                    <td className="p-3">₹1,90,000</td>
                    <td className="p-3 font-bold">₹1,75,000</td>
                    <td className="p-3">₹4,375.00</td>
                    <td className="p-3 text-emerald-700 font-bold">Eligible for NLM</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Year 3</td>
                    <td className="p-3">5.5 Years</td>
                    <td className="p-3 font-sans">4th Lactation</td>
                    <td className="p-3">₹1,75,000</td>
                    <td className="p-3 font-bold">₹1,60,000</td>
                    <td className="p-3">₹4,800.00</td>
                    <td className="p-3 text-emerald-700 font-bold">Standard Renewal</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Year 5</td>
                    <td className="p-3">7.5 Years</td>
                    <td className="p-3 font-sans">6th Lactation</td>
                    <td className="p-3">₹1,50,000</td>
                    <td className="p-3 font-bold">₹1,35,000</td>
                    <td className="p-3">₹5,400.00</td>
                    <td className="p-3 text-emerald-700 font-bold">Standard Renewal</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Year 8</td>
                    <td className="p-3">10.5 Years</td>
                    <td className="p-3 font-sans">Late Lactation</td>
                    <td className="p-3">₹1,10,000</td>
                    <td className="p-3 font-bold">₹95,000</td>
                    <td className="p-3">₹5,700.00</td>
                    <td className="p-3 text-amber-700 font-bold">Depreciation Review</td>
                  </tr>
                  <tr className="bg-rose-50/50">
                    <td className="p-3 font-bold">Year 10+</td>
                    <td className="p-3">&gt;12.5 Years</td>
                    <td className="p-3 font-sans">Dry Retirement</td>
                    <td className="p-3">₹60,000</td>
                    <td className="p-3 font-bold">₹0 (Ineligible)</td>
                    <td className="p-3">—</td>
                    <td className="p-3 text-rose-700 font-bold">AGE CAP EXCEEDED (Captive Sinking Fund)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: IMMUTABLE AUDIT VAULT */}
        {activeTab === "audit" && (
          <div className="bg-white rounded-3xl border border-stone-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700">
                Non-Destructive Cryptographic Audit
              </span>
              <h2 className="text-2xl font-black text-stone-950 mt-1">
                Insurance & Replacement Event Ledger
              </h2>
              <p className="text-xs text-stone-600 mt-1">
                Every policy state transition, bank reconciliation, and replacement link is permanently written to this append-only ledger.
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-stone-500 block">EVENT #00421 &bull; 2026-10-26T14:32:00Z</span>
                  <strong className="text-stone-900">
                    {currentRole === "INVESTOR_CUSTOMER" ? "REPLACEMENT FUND ALLOCATION" : "BANK CREDIT RECONCILIATION"}
                  </strong>
                  <p className="text-[11px] text-stone-600 font-sans mt-0.5">
                    {currentRole === "INVESTOR_CUSTOMER"
                      ? "Insurer settlement processed and applied directly toward livestock replacement under Farm Guarantee. Zero customer outlay required."
                      : "Insurer settlement ₹1,75,750 credited to Hira Farm Vashi HDFC Account (Ref: NEFT-NIA-MUM-884102941). Signed off by ACCOUNTS_MANAGER."}
                  </p>
                </div>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md font-bold shrink-0">
                  {currentRole === "INVESTOR_CUSTOMER" ? "GUARANTEE APPLIED" : "FUNDS VERIFIED"}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-stone-500 block">EVENT #00420 &bull; 2026-10-22T09:15:00Z</span>
                  <strong className="text-stone-900">CLAIM SANCTION ISSUED BY INSURER</strong>
                  <p className="text-[11px] text-stone-600 font-sans mt-0.5">
                    The New India Assurance approved claim for Animal HIRA_A1_OCT26_BUFF_MUR_35.
                  </p>
                </div>
                <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md font-bold shrink-0">
                  APPROVED
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-stone-500 block">EVENT #00419 &bull; 2026-10-21T18:00:00Z</span>
                  <strong className="text-stone-900">MORTALITY INTUITION & VET NECROPSY</strong>
                  <p className="text-[11px] text-stone-600 font-sans mt-0.5">
                    Post-Mortem report #PM-MH-BARAMATI-2026-8812 uploaded by Dr. Ramesh K. Patil (MVC-2014-08-0421).
                  </p>
                </div>
                <span className="text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-md font-bold shrink-0">
                  NECROPSY LOGGED
                </span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FLOATING NAVIGATION SWITCHER (With Left/Right side arrows) */}
      <InputSwitcher currentInputId="page-18" />
    </div>
  );
}
