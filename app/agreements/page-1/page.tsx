"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  PenTool,
  RotateCcw,
  Download,
  Printer,
  ExternalLink,
  Award,
  Calendar,
  DollarSign,
  AlertTriangle,
  Building2,
  User,
  Check,
  Layers,
  Sparkles,
  Lock,
  ArrowRight,
  Stamp,
  BadgeCheck,
  FileCheck2,
  ChevronRight,
  Milk,
  Cpu,
  Tractor,
  Home as HomeIcon,
} from "lucide-react";

interface AgreementTemplate {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  category: string;
  stampDutyAmountINR: number;
  badge: string;
  badgeColor: string;
  summary: string;
  highlights: string[];
  clauses: {
    number: string;
    heading: string;
    body: string;
  }[];
}

const AGREEMENT_TEMPLATES: AgreementTemplate[] = [
  {
    id: "agr-101",
    code: "HF-MC-30-2026",
    title: "10-Year Bovine Purchase & 30% Profit-Sharing Master Custody Agreement",
    shortTitle: "30% Profit Sharing & Farm Custody",
    category: "Master Investment Contract",
    stampDutyAmountINR: 500,
    badge: "Core Agreement",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    summary:
      "Governs the acquisition of the ₹2,00,000 unit (1 Murrah buffalo + 1 calf), placing custody with Hira Farm to manage rearing, milking, and veterinary care, with guaranteed 30% profit share even during biological dry periods.",
    highlights: [
      "30% Net Profit Share even during 60-90 day dry gestation period",
      "Staggered dairy pool income guarantees uninterrupted monthly payouts",
      "Zero management or grazing fee deducted from animal asset owner dividends",
    ],
    clauses: [
      {
        number: "Clause 1.1",
        heading: "Bovine Purchase & Unit Allocation",
        body: "The Animal Asset Owner agrees to purchase and allocate one (1) verified prime milking Murrah buffalo along with one (1) female biological calf under the ₹2,00,000 All-Inclusive Seed Package. Legal title of the bovine asset vests in the Animal Asset Owner upon fund receipt.",
      },
      {
        number: "Clause 1.2",
        heading: "Operational Custody & Management Mandate",
        body: "The Animal Asset Owner irrevocably places the livestock unit under the comprehensive custodial care and husbandry management of Hira Farm Management Private Limited at its Baramati Agri-Tech Dairy Complex, Pune District, Maharashtra.",
      },
      {
        number: "Clause 1.3",
        heading: "Guaranteed 30% Profit Sharing Even in Dry Period",
        body: "In consideration of operating custody, Hira Farm guarantees that thirty percent (30%) of net milking revenue generated shall be disbursed to the Animal Asset Owner. Crucially, during the animal's natural 60 to 90-day non-lactating dry period, the Animal Asset Owner's 30% dividend distribution continues uninterrupted, funded by the Farm's staggered herd production pool and lactation reserve equalization fund.",
      },
      {
        number: "Clause 1.4",
        heading: "10-Year Compounding Herd Asset Growth",
        body: "The biological offspring (calves) born to the animal through 90%+ sex-sorted artificial insemination remain the compounding property of the Animal Asset Owner. Each female calf matures after 3 years to join active lactation, compounding the initial ₹2 Lacs investment over a 10-year horizon up to an estimated 88-animal herd.",
      },
    ],
  },
  {
    id: "agr-102",
    code: "HF-LR-DEF-2026",
    title: "Guaranteed Livestock Replacement & Farm Deficit Absorption Covenant",
    shortTitle: "Livestock Replacement Guarantee",
    category: "Asset Protection Covenant",
    stampDutyAmountINR: 500,
    badge: "Animal Asset Owner Shield",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    summary:
      "Mandates that upon animal mortality, Hira Farm replaces the deceased buffalo with an equivalent prime milker and absorbs 100% of any financial gap beyond insurance payout. Zero animal asset owner cash liability.",
    highlights: [
      "Mandatory livestock replacement — No contract exit or capital call",
      "Farm Management adds extra money to cover full replacement purchase cost",
      "Compounding 10-year timeline continues with zero out-of-pocket expense",
    ],
    clauses: [
      {
        number: "Clause 2.1",
        heading: "Non-Exit & Mandatory Replacement Principle",
        body: "In the event of mortality or permanent total disability (PTD) of the insured buffalo, this Agreement does not terminate, nor does it liquidate into a cash exit. Hira Farm Management Private Limited covenants to mandatorily provide an equivalent prime 2nd lactation Murrah milker to protect the Animal Asset Owner's 10-year compounding trajectory.",
      },
      {
        number: "Clause 2.2",
        heading: "Full Deficit Absorption by Farm Management",
        body: "Where the actual approved settlement received from the underwriter (The New India Assurance Co. Ltd.) is less than the market acquisition cost of an equivalent replacement animal (due to policy deductibles or age depreciation), Hira Farm Management Private Limited shall contribute the entire deficit from its dedicated Farm Guarantee Reserve Fund. The Animal Asset Owner shall NOT be subjected to any capital call or cash co-payment.",
      },
      {
        number: "Clause 2.3",
        heading: "Unbroken Dividend Continuity",
        body: "Upon induction and Maharashtra Veterinary Council (MVC) quarantine certification of the replacement buffalo, daily milk records reset and 30% dividend distributions resume without forfeiture of historical herd compounding rights.",
      },
    ],
  },
  {
    id: "agr-103",
    code: "HF-OH-EXEMP-2026",
    title: "Capital Overhead & Operating Expense Exemption Deed",
    shortTitle: "Infrastructure & Expense Exemption",
    category: "Financial Ring-Fencing",
    stampDutyAmountINR: 500,
    badge: "100% Ring-Fenced",
    badgeColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
    summary:
      "Explicitly covenants that land acquisition, shed construction, automated milking machinery, high-protein TMR feed, veterinary software, and cloud databases are 100% absorbed by Hira Farm as enterprise overheads.",
    highlights: [
      "Land, sheds & civil construction 100% funded by Hira Farm",
      "Milking machine capital, servicing & repairs never charged to animal asset owner",
      "High-protein silage, TMR feed, IoT sensors & cloud database overhead exempt",
    ],
    clauses: [
      {
        number: "Clause 3.1",
        heading: "Exemption from Civil Infrastructure & Land Expenses",
        body: "The Animal Asset Owner shall bear zero liability for capital expenditures including but not limited to: farmland leasehold/purchase, agricultural zoning permissions, earthworks, civil barn construction, ventilation misting systems, and effluent treatment facilities. All infrastructure is owned and maintained exclusively by Hira Farm.",
      },
      {
        number: "Clause 3.2",
        heading: "Milking Machinery & Dairy Hardware Maintenance",
        body: "Automated herringbone milking parlors, vacuum pipelines, bulk milk chillers (BMCs), tractors, and motorized chaff cutters are capitalized strictly on Hira Farm's corporate balance sheet. No depreciation, servicing fee, or repair bill shall ever be deducted from the Animal Asset Owner's 30% milk dividend.",
      },
      {
        number: "Clause 3.3",
        heading: "Nutritional Fodder & Veterinary Software Systems",
        body: "Hira Farm warrants that premium Total Mixed Ration (TMR) feed, hydroponic green fodder, bypass fat minerals, probiotic boosters, RFID scanner infrastructure, cloud telemetry databases, and web/mobile software platforms are enterprise operational costs. Daily milk dividends are paid net of these enterprise expenses.",
      },
    ],
  },
  {
    id: "agr-104",
    code: "HF-LC-TERM-2026",
    title: "10-Year Biological Lifecycle Cap & Succession Termination Deed",
    shortTitle: "10-Year Lifecycle & Succession",
    category: "Lifecycle & Termination",
    stampDutyAmountINR: 500,
    badge: "Biological Horizon",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
    summary:
      "Defines the natural 10-year biological productive horizon of individual bovines. Animals exceeding 10 years of age reach post-productive lifecycle cap and are retired gracefully while herd succession continues.",
    highlights: [
      "Productive biological horizon capped at 10 years per individual animal",
      "Graceful retirement under ethical dairy animal welfare standards",
      "Animal Asset Owner asset continuity transitions to the 3rd and 4th generation offspring",
    ],
    clauses: [
      {
        number: "Clause 4.1",
        heading: "10-Year Biological Productive Lifecycle",
        body: "Both parties acknowledge that the biological productive lifespan of dairy buffaloes in high-yield lactation is naturally bounded. An individual animal reaching ten (10) years of age reaches its biological lifecycle cap and is officially classified as retired from active commercial milking.",
      },
      {
        number: "Clause 4.2",
        heading: "Ethical Retirement & Sinking Fund Provision",
        body: "Upon completing 10 years, the original animal is retired to the Hira Farm Senior Bovine Sanctuary in Baramati under statutory animal welfare guidelines. All maintenance during retirement is funded through Hira Farm's internal captive sinking fund with zero liability to the Animal Asset Owner.",
      },
      {
        number: "Clause 4.3",
        heading: "Portfolio Succession to Offspring",
        body: "The conclusion of an individual bovine's 10-year cycle does NOT conclude the Animal Asset Owner's portfolio. The compounding offspring born in Years 1 through 9 (daughters, granddaughters, and great-granddaughters) succeed the lineage, sustaining peak milking revenue across the multi-generational herd.",
      },
    ],
  },
];

export default function AgreementsPage() {
  const [selectedAgreementId, setSelectedAgreementId] = useState<string>("agr-101");
  const [signatureMode, setSignatureMode] = useState<"draw" | "type">("draw");
  const [typedName, setTypedName] = useState<string>("Anil R. Deshmukh");
  const [investorId, setInvestorId] = useState<string>("CUST_MH_NAV_1042");
  const [packageId, setPackageId] = useState<string>("PACK_A1_OCT26_BUFF_MUR_35");
  const [panAadhaar, setPanAadhaar] = useState<string>("ABCDE1234F / XXXX-4921");
  const [isAgreedTerms, setIsAgreedTerms] = useState<boolean>(true);
  const [inkColor, setInkColor] = useState<string>("#1E3A8A"); // Executive Navy Blue
  const [hasDrawn, setHasDrawn] = useState<boolean>(false);
  const [isSignedSubmitted, setIsSignedSubmitted] = useState<boolean>(false);
  const [signedAtTimestamp, setSignedAtTimestamp] = useState<string>("");
  const [signatureDataUrl, setSignatureDataUrl] = useState<string>("");

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef<boolean>(false);

  const activeTemplate =
    AGREEMENT_TEMPLATES.find((t) => t.id === selectedAgreementId) || AGREEMENT_TEMPLATES[0];

  // Canvas drawing handlers
  const startDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.strokeStyle = inkColor;
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    isDrawingRef.current = true;
    setHasDrawn(true);
  };

  const draw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawingRef.current && canvasRef.current) {
      isDrawingRef.current = false;
      setSignatureDataUrl(canvasRef.current.toDataURL("image/png"));
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
    setSignatureDataUrl("");
  };

  const handleExecuteAgreement = () => {
    if (!isAgreedTerms) return;
    if (signatureMode === "draw" && !hasDrawn) return;
    if (signatureMode === "type" && !typedName.trim()) return;

    const now = new Date();
    setSignedAtTimestamp(
      now.toLocaleString("en-IN", {
        dateStyle: "full",
        timeStyle: "medium",
        timeZone: "Asia/Kolkata",
      }) + " IST"
    );
    setIsSignedSubmitted(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/30 via-slate-50 to-indigo-50/40 text-slate-900 font-sans pb-32">
      {/* HEADER WITH MAHARASHTRA LEGAL-TECH ACCENTS */}
      <header className="border-b border-amber-200 bg-white/90 backdrop-blur-md sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-2 sm:py-0">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 to-stone-900 text-white flex items-center justify-center font-black shadow-md shadow-amber-900/20 hover:scale-105 transition-transform shrink-0"
              title="Return to Hub Home"
            >
              <FileCheck2 className="w-6 h-6 text-amber-300" />
            </Link>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-black text-sm sm:text-base text-slate-900 tracking-tight">
                  HIRA FARM LEGAL AGREEMENT PORTAL
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-mono font-bold border border-amber-300">
                  Sec 10A IT Act, 2000
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-mono font-bold border border-emerald-300">
                  Drawn E-Signature Verified
                </span>
              </div>
              <p className="text-[11px] text-slate-600 font-medium">
                Parties: <strong>Hira Farm Management Private Limited</strong> &bull; Registered Office: Vashi, Navi Mumbai &bull; Baramati Dairy Corridor
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href="/"
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300 transition"
            >
              &larr; Design Hub Home
            </Link>

            <a
              href="https://admin.hirafarm.ciyo.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Admin Web App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 space-y-8">
        {/* HERO TITLE & EXPLAINER */}
        <div className="rounded-3xl bg-white border-2 border-amber-200/90 p-6 sm:p-8 shadow-xl shadow-amber-900/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-400/15 via-emerald-300/10 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-3 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-100 to-emerald-100 border border-amber-300 text-amber-950 text-xs font-mono font-bold shadow-xs">
              <Stamp className="w-3.5 h-3.5 text-amber-800" />
              <span>STATUTORY E-CONTRACT WITH DRAWN DIGITAL SIGNATURE</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Livestock Co-Ownership &amp; Profit-Sharing Agreements
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Legally binding bilateral covenants between <strong>Hira Farm Management Private Limited</strong> and individual buffalo owners.
              Covers <strong>30% continuous profit sharing (even during natural dry periods)</strong>, <strong>mandatory livestock replacement guarantees (farm absorbs purchase deficits)</strong>,
              <strong>100% exemption from land, shed construction, milking machine, TMR feed, and software database overheads</strong>, and the <strong>10-year biological lifecycle cap</strong>.
            </p>
          </div>
        </div>

        {/* AGREEMENT SELECTOR TABS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {AGREEMENT_TEMPLATES.map((tmpl) => (
            <button
              key={tmpl.id}
              onClick={() => {
                setSelectedAgreementId(tmpl.id);
                setIsSignedSubmitted(false);
              }}
              className={`p-4 rounded-2xl border-2 text-left transition-all relative flex flex-col justify-between ${
                selectedAgreementId === tmpl.id
                  ? "border-amber-500 bg-amber-50/50 shadow-md ring-2 ring-amber-400/30"
                  : "border-slate-200 bg-white hover:border-amber-300 hover:shadow-xs"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${tmpl.badgeColor}`}>
                    {tmpl.badge}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-bold">{tmpl.code}</span>
                </div>
                <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug">
                  {tmpl.shortTitle}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-2">{tmpl.summary}</p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400 font-bold">Stamp Duty: ₹{tmpl.stampDutyAmountINR}</span>
                <span className={`font-bold ${selectedAgreementId === tmpl.id ? "text-amber-800" : "text-slate-400"}`}>
                  {selectedAgreementId === tmpl.id ? "Active Document" : "Select &rarr;"}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* AGREEMENT DOCUMENT & DRAWN SIGNATURE STUDIO */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 7 COLUMNS: FORMAL E-STAMP LEGAL AGREEMENT DOCUMENT */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl border-2 border-amber-200 shadow-xl overflow-hidden">
              {/* GOVERNMENT OF MAHARASHTRA E-STAMP CERTIFICATE HEADER */}
              <div className="bg-gradient-to-b from-amber-100 via-amber-50 to-white p-6 border-b-2 border-amber-300/80 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full border-2 border-amber-800 bg-amber-50 flex items-center justify-center font-serif text-amber-900 font-black text-xl shadow-xs">
                      ₹
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-900 block">
                        GOVERNMENT OF MAHARASHTRA
                      </span>
                      <h4 className="font-serif font-black text-base text-amber-950">
                        NON-JUDICIAL e-STAMP CERTIFICATE
                      </h4>
                      <span className="text-[10px] font-mono text-slate-600">
                        Certificate No: <strong>IN-MH-PUNE-2026-9042188</strong>
                      </span>
                    </div>
                  </div>

                  <div className="text-right font-mono text-[11px] space-y-0.5">
                    <div className="text-amber-900 font-bold">Stamp Duty: ₹{activeTemplate.stampDutyAmountINR}</div>
                    <div className="text-slate-500">Category: Articles of Agreement</div>
                    <div className="text-emerald-700 font-bold">Duty Paid &bull; Verified Online</div>
                  </div>
                </div>

                {/* Parties Grid */}
                <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white/80 border border-amber-200">
                    <span className="text-[10px] text-amber-800 font-bold block uppercase">First Party (Farm Operator)</span>
                    <strong className="text-slate-900 block mt-0.5">HIRA FARM MANAGEMENT PRIVATE LIMITED</strong>
                    <span className="text-[10px] text-slate-500 block">Regd: Sector 30A, Vashi, Navi Mumbai, MH 400703</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/80 border border-amber-200">
                    <span className="text-[10px] text-emerald-800 font-bold block uppercase">Second Party (Animal Asset Owner Owner)</span>
                    <strong className="text-slate-900 block mt-0.5">{typedName}</strong>
                    <span className="text-[10px] text-slate-500 block">Animal Asset Owner ID: {investorId} &bull; Pkg: {packageId}</span>
                  </div>
                </div>
              </div>

              {/* AGREEMENT FORMAL TEXT & CLAUSES */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800">
                    Statutory Instrument #{activeTemplate.code}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-950 mt-1">
                    {activeTemplate.title}
                  </h2>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-serif italic">
                    This Agreement is made on this 27th day of October, 2026 at Vashi, Navi Mumbai, Maharashtra between Hira Farm Management Private Limited and the Animal Asset Owner herein authenticated.
                  </p>
                </div>

                {/* Key Legal Highlights Banner */}
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-300 space-y-2">
                  <span className="text-xs font-bold text-amber-950 uppercase flex items-center gap-1.5 font-mono">
                    <ShieldCheck className="w-4 h-4 text-amber-700" />
                    Essential Protected Rights Under this Deed:
                  </span>
                  <ul className="text-xs text-slate-700 space-y-1.5 pl-5 list-disc">
                    {activeTemplate.highlights.map((h, i) => (
                      <li key={i} className="font-medium">{h}</li>
                    ))}
                  </ul>
                </div>

                {/* Clauses List */}
                <div className="space-y-4">
                  {activeTemplate.clauses.map((clause, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-amber-900">{clause.number}</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Statutory Clause</span>
                      </div>
                      <h4 className="text-sm font-black text-slate-900 font-sans">{clause.heading}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-serif">{clause.body}</p>
                    </div>
                  ))}
                </div>

                {/* EXECUTED SIGNATURE SEAL DISPLAY (When Signed) */}
                {isSignedSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-300 space-y-4 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-emerald-200 pb-3">
                      <span className="font-black text-emerald-950 flex items-center gap-2">
                        <BadgeCheck className="w-5 h-5 text-emerald-600" />
                        DIGITALLY EXECUTED &amp; TIMESTAMPED
                      </span>
                      <span className="text-[10px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded font-bold">
                        LEGAL SECTION 10A VALID
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] text-slate-500 block">Signer Legal Name:</span>
                        <strong className="text-slate-900 text-sm">{typedName}</strong>
                        <span className="text-[10px] text-slate-500 block mt-1">KYC Credentials:</span>
                        <span className="text-slate-800">{panAadhaar}</span>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-emerald-200 text-center">
                        <span className="text-[10px] text-slate-400 block font-bold mb-1">Drawn Signature Specimen</span>
                        {signatureMode === "draw" && signatureDataUrl ? (
                          <img
                            src={signatureDataUrl}
                            alt="Drawn E-Signature"
                            className="h-16 mx-auto object-contain"
                          />
                        ) : (
                          <div className="font-serif italic text-2xl text-blue-900 font-bold py-2">
                            {typedName}
                          </div>
                        )}
                        <span className="text-[9px] text-emerald-700 block mt-1 font-mono">
                          SHA-256 Verified Seal
                        </span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-600 pt-2 border-t border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span>Timestamp: <strong>{signedAtTimestamp}</strong></span>
                      <span className="text-[10px] text-slate-500">Baramati Agri-Tech Legal Registry #7741</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Awaiting electronic signature on the right panel to execute this statutory document.</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT 5 COLUMNS: INTERACTIVE DRAWN E-SIGNATURE STUDIO */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border-2 border-indigo-200/90 shadow-xl p-6 sm:p-7 space-y-5">
              <div className="border-b border-indigo-100 pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700">
                    E-Signature Studio
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-900 font-bold">
                    Interactive Canvas
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mt-0.5">
                  Sign Agreement on Web App
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Draw your electronic signature using mouse, stylus, or fingertip. Complies with Section 10A of the IT Act, 2000.
                </p>
              </div>

              {/* Mode Toggle: Draw vs Type */}
              <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setSignatureMode("draw")}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                    signatureMode === "draw"
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>Draw Signature</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSignatureMode("type")}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                    signatureMode === "type"
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Type Name</span>
                </button>
              </div>

              {/* DRAWING CANVAS */}
              {signatureMode === "draw" ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700">Draw inside the box:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-500 font-mono">Ink:</span>
                      <button
                        type="button"
                        onClick={() => setInkColor("#1E3A8A")}
                        className={`w-5 h-5 rounded-full bg-blue-900 border-2 transition ${
                          inkColor === "#1E3A8A" ? "ring-2 ring-indigo-500 scale-110" : ""
                        }`}
                        title="Executive Navy Blue Ink"
                      />
                      <button
                        type="button"
                        onClick={() => setInkColor("#0F172A")}
                        className={`w-5 h-5 rounded-full bg-slate-900 border-2 transition ${
                          inkColor === "#0F172A" ? "ring-2 ring-indigo-500 scale-110" : ""
                        }`}
                        title="Fountain Pen Black Ink"
                      />
                    </div>
                  </div>

                  <div className="relative border-2 border-dashed border-indigo-200 rounded-2xl bg-amber-50/20 overflow-hidden shadow-inner">
                    <canvas
                      ref={canvasRef}
                      width={480}
                      height={180}
                      onPointerDown={startDrawing}
                      onPointerMove={draw}
                      onPointerUp={stopDrawing}
                      onPointerCancel={stopDrawing}
                      className="w-full h-44 cursor-crosshair touch-none bg-white/70"
                    />

                    {!hasDrawn && (
                      <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-xs font-mono text-slate-400">
                        <PenTool className="w-4 h-4 mr-1.5 opacity-50" />
                        <span>Sign here with mouse, touch or stylus pen...</span>
                      </div>
                    )}

                    <div className="absolute bottom-2 left-3 pointer-events-none text-[9px] font-mono text-slate-400">
                      Signer: {typedName} &bull; {investorId}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={clearCanvas}
                      className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-600 hover:bg-slate-100 transition flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                      <span>Clear Canvas</span>
                    </button>

                    <span className="text-[11px] font-mono text-emerald-700 font-bold">
                      {hasDrawn ? "Signature Captured" : "Pending Signature"}
                    </span>
                  </div>
                </div>
              ) : (
                /* TYPED SIGNATURE PREVIEW */
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Type Your Full Legal Name
                    </label>
                    <input
                      value={typedName}
                      onChange={(e) => setTypedName(e.target.value)}
                      placeholder="e.g. Anil Ramesh Deshmukh"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold focus:border-indigo-500 outline-none"
                    />
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/40 border-2 border-dashed border-indigo-200 text-center space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">
                      Digital Signature Calligraphy Preview
                    </span>
                    <div className="font-serif italic text-3xl text-blue-900 py-3 font-black tracking-wide">
                      {typedName || "Your Signature"}
                    </div>
                  </div>
                </div>
              )}

              {/* ANIMAL ASSET OWNER METADATA FORM INPUTS */}
              <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Signer Legal Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    value={typedName}
                    onChange={(e) => setTypedName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-bold outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Customer / Animal Asset Owner ID</label>
                    <input
                      value={investorId}
                      onChange={(e) => setInvestorId(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-mono font-bold outline-none uppercase"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Package Reference</label>
                    <input
                      value={packageId}
                      onChange={(e) => setPackageId(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-mono font-bold outline-none uppercase"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">PAN / Aadhaar Verification</label>
                  <input
                    value={panAadhaar}
                    onChange={(e) => setPanAadhaar(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-mono outline-none"
                  />
                </div>
              </div>

              {/* CONSENT CHECKBOX */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAgreedTerms}
                    onChange={(e) => setIsAgreedTerms(e.target.checked)}
                    className="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-slate-700 text-[11px] leading-relaxed">
                    I have read, understood, and accept all clauses in <strong>{activeTemplate.title}</strong>. I acknowledge that 30% profit share continues in dry period, replacement livestock is guaranteed with farm-absorbed shortfalls, and all civil/machinery overheads are borne by Hira Farm.
                  </span>
                </label>
              </div>

              {/* EXECUTION BUTTON */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleExecuteAgreement}
                  disabled={!isAgreedTerms || (signatureMode === "draw" && !hasDrawn)}
                  className={`w-full py-3.5 rounded-2xl font-black text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 ${
                    isAgreedTerms && (signatureMode === "type" || hasDrawn)
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-emerald-600/25"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  <Stamp className="w-4 h-4" />
                  <span>Execute &amp; Sign Agreement Digitally</span>
                </button>

                {isSignedSubmitted && (
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handlePrint}
                      className="flex-1 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition"
                    >
                      <Printer className="w-3.5 h-3.5 text-slate-500" />
                      <span>Print Document</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => alert("Agreement PDF downloaded with embedded drawn e-signature!")}
                      className="flex-1 py-2.5 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-bold text-xs flex items-center justify-center gap-1.5 transition"
                    >
                      <Download className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* FARM OVERHEAD COVENANT HIGHLIGHT CARD */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white shadow-xl space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold block border-b border-slate-800 pb-2">
                Enterprise Overhead Ring-Fence Summary
              </span>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                    <HomeIcon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-white">Land &amp; Shed Construction</strong>
                    <span className="text-slate-400 text-[11px]">100% borne by Hira Farm. Never billed or deducted from animal asset owner yield.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0">
                    <Tractor className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-white">Milking Machines &amp; Tools</strong>
                    <span className="text-slate-400 text-[11px]">Automated pipelines, bulk chillers, tractors &amp; maintenance fully farm funded.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                    <Milk className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-white">High-Protein TMR Feed &amp; Fodder</strong>
                    <span className="text-slate-400 text-[11px]">Daily nutritional ration and mineral mixes funded under farm operating budget.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-white">Software &amp; Cloud Databases</strong>
                    <span className="text-slate-400 text-[11px]">IoT telemetry, RFID infrastructure &amp; app hosting are zero cost to animal asset owner.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
