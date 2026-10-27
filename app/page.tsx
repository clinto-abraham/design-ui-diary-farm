"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Milk,
  Layers,
  Award,
  CheckCircle2,
  Calendar,
  DollarSign,
  Sun,
  Flame,
  Leaf,
  Trophy,
  Sliders,
  Check,
  ChevronRight,
  Compass,
  ClipboardList,
  Layout,
  ExternalLink,
  ShieldCheck,
  FileCheck,
  FileText,
  Truck,
  Baby,
  Receipt,
  Recycle,
  Tag,
  Dna,
  Wheat,
  Coins,
  Stethoscope,
  Droplets,
  Sprout,
  ShieldAlert,
  Gauge,
  CookingPot,
  Waves,
  Zap,
  UserCheck,
  Server,
  Terminal,
  Stamp,
  PenTool,
  BadgeCheck,
  Building2,
  FileCheck2,
  ShoppingBag,
  Shield,
} from "lucide-react";
import { calculate10YearProjection, formatINR, formatNumber, DEFAULT_CONFIG } from "@/lib/dairy-compounding";

// 50 LANDING PAGE DESIGNS (Routes to /home/page-1 through /home/page-50)
const DESIGN_CARDS = [
  {
    id: "design-1",
    num: "01",
    url: "/home/page-1",
    title: "Swiss Minimalist",
    subtitle: "Precision Agritech & Architectural Grids",
    palette: ["#121212", "#ffffff", "#10b981", "#737373"],
    badge: "Minimalist & Clean",
    category: "minimalist",
    badgeColor: "bg-stone-100 text-stone-800 border-stone-300",
    persona: "Corporate Agritech & European Animal Asset Owners",
    highlights: ["Monochrome typography", "Clean SVG bar graph", "Actuarial cohort ledger"],
  },
  {
    id: "design-2",
    num: "02",
    url: "/home/page-2",
    title: "Dark FinTech Terminal",
    subtitle: "Wall-Street Quant & Real-Time Telemetry",
    palette: ["#060a12", "#0b1324", "#10b981", "#06b6d4"],
    badge: "Quant & Bloomberg",
    category: "fintech",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    persona: "Hedge Funds & High-Yield Animal Asset Owners",
    highlights: ["Live ticker tape", "Glowing yield curve", "CAGR / APY indicators"],
  },
  {
    id: "design-3",
    num: "03",
    url: "/home/page-3",
    title: "Vedic Organic Heritage",
    subtitle: "Earthy Terracotta, Sand & Desi Lineage",
    palette: ["#2d4a22", "#963e18", "#faf7f0", "#c98a2c"],
    badge: "Artisanal & Desi",
    category: "heritage",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    persona: "Organic Milk Consumers & Heritage Families",
    highlights: ["Parchment card styling", "Sacred Gau-Dhan thesis", "Warm Ayurvedic tones"],
  },
  {
    id: "design-4",
    num: "04",
    url: "/home/page-4",
    title: "Cyber Emerald Glass",
    subtitle: "Frosted Glassmorphism & Neon Mint Glow",
    palette: ["#031013", "#072127", "#2dd4bf", "#10b981"],
    badge: "Glassmorphic",
    category: "tech",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
    persona: "Tech Founders & Web3 Agri-Animal Asset Owners",
    highlights: ["Aero glass backdrops", "Neon radial halos", "Cyber biological telemetry"],
  },
  {
    id: "design-5",
    num: "05",
    url: "/home/page-5",
    title: "Simulator & Dashboard",
    subtitle: "Live Range Sliders & Cashflow Engine",
    palette: ["#0b0f19", "#12192c", "#6366f1", "#10b981"],
    badge: "Interactive SaaS",
    category: "fintech",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
    persona: "CFOs, Analysts & Strategic Planners",
    highlights: ["Interactive capital sliders", "Live recalculations", "Multi-tab ledger"],
  },
  {
    id: "design-6",
    num: "06",
    url: "/home/page-6",
    title: "Neo-Brutalist Venture",
    subtitle: "Heavy Black Borders, High Contrast & Pop Shadows",
    palette: ["#fef08a", "#000000", "#4ade80", "#fb923c"],
    badge: "High-Energy Startup",
    category: "creative",
    badgeColor: "bg-yellow-200 text-yellow-950 border-yellow-400",
    persona: "Gen-Z Agri-Preneurs & Direct Animal Asset Owners",
    highlights: ["Chunky offset shadows", "Aggressive typography", "Sticker-style badges"],
  },
  {
    id: "design-7",
    num: "07",
    url: "/home/page-7",
    title: "Pastoral Luxury Club",
    subtitle: "British Racing Green & Regal Gold Crest",
    palette: ["#081710", "#0c2317", "#d4af37", "#f4f2ea"],
    badge: "Private Estate Club",
    category: "heritage",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    persona: "Ultra-HNWIs & Family Offices",
    highlights: ["Serif typography", "Gold seal accents", "Private placement memorandum"],
  },
  {
    id: "design-8",
    num: "08",
    url: "/home/page-8",
    title: "Mobile-First SaaS Stack",
    subtitle: "App Viewport Mockup & Push Alert Banners",
    palette: ["#020617", "#0f172a", "#3b82f6", "#10b981"],
    badge: "Mobile Frame",
    category: "tech",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    persona: "Mobile-Only Animal Asset Owners & Smartphone Users",
    highlights: ["Simulated phone viewport", "Sticky bottom sheet", "Thumb-friendly pills"],
  },
  {
    id: "design-9",
    num: "09",
    url: "/home/page-9",
    title: "Generational Storyline",
    subtitle: "Chronicles of Gauri & Her 88 Descendants",
    palette: ["#11141b", "#1a1f2c", "#f97316", "#10b981"],
    badge: "Narrative Editorial",
    category: "creative",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-300",
    persona: "Impact Animal Asset Owners & Family Legacies",
    highlights: ["Generational family tree", "Story chapter timeline", "Emotional hook"],
  },
  {
    id: "design-10",
    num: "10",
    url: "/home/page-10",
    title: "Futuristic Bio-Matrix",
    subtitle: "AI Robotic Milking HUD & Genome Telemetry",
    palette: ["#050508", "#0a0a16", "#d946ef", "#06b6d4"],
    badge: "Sci-Fi HUD",
    category: "tech",
    badgeColor: "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300",
    persona: "Biotech & DeepTech Enthusiasts",
    highlights: ["Scanline CRT overlay", "Robotic milking telemetry", "DNA sequence indicators"],
  },
  {
    id: "design-11",
    num: "11",
    url: "/home/page-11",
    title: "Nordic Minimalist & Hygge",
    subtitle: "Sage Green, Birch Ivory & Tranquil Calm",
    palette: ["#263628", "#f8f7f4", "#ede8df", "#6c7d6e"],
    badge: "Scandinavian Calm",
    category: "minimalist",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    persona: "Sustainable Living & Ethical Dairy Seekers",
    highlights: ["Soft organic curves", "Humane livestock protocol", "Subtle pastel sage tone"],
  },
  {
    id: "design-12",
    num: "12",
    url: "/home/page-12",
    title: "Retro 80s Synthwave",
    subtitle: "Neon Sunset, Laser Horizon & Arcade Counters",
    palette: ["#0d071d", "#f43f5e", "#8b5cf6", "#06b6d4"],
    badge: "Synthwave Arcade",
    category: "creative",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    persona: "Pop-Culture Devs & Gaming Agri-Animal Asset Owners",
    highlights: ["Neon glowing wireframe", "Outrun aesthetics", "Arcade pixel counters"],
  },
  {
    id: "design-13",
    num: "13",
    url: "/home/page-13",
    title: "Japanese Wabi-Sabi",
    subtitle: "Zen Imperfection, Raw Stone & Ink Flow",
    palette: ["#1e1e1e", "#f5f3ef", "#8b7e74", "#4a4036"],
    badge: "Zen Aesthetic",
    category: "minimalist",
    badgeColor: "bg-stone-200 text-stone-800 border-stone-400",
    persona: "Boutique Artisans & Conscious Capital",
    highlights: ["Asymmetric layouts", "Ink brushstroke borders", "Serene organic pace"],
  },
  {
    id: "design-14",
    num: "14",
    url: "/home/page-14",
    title: "Wall Street Pitchbook",
    subtitle: "Institutional PE Deck & Audited Financials",
    palette: ["#0a192f", "#ffffff", "#1e3a8a", "#0d9488"],
    badge: "Institutional PE",
    category: "fintech",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
    persona: "Venture Partners, Bankers & Angel Syndicates",
    highlights: ["Formal balance sheet", "Capex vs Opex breakdown", "DCF valuation curve"],
  },
  {
    id: "design-15",
    num: "15",
    url: "/home/page-15",
    title: "Solarpunk Eco-Sanctuary",
    subtitle: "Clean Solar Gold, Biogas & Zero Carbon",
    palette: ["#0d2818", "#16db65", "#ffb703", "#058c42"],
    badge: "Circular Carbon-Zero",
    category: "eco",
    badgeColor: "bg-lime-100 text-lime-800 border-lime-300",
    persona: "ESG Funds & Climate-Tech Allocators",
    highlights: ["Dung-to-biogas calculator", "Solar barn kilowatt trackers", "Carbon credit offsets"],
  },
  {
    id: "design-16",
    num: "16",
    url: "/home/page-16",
    title: "Art Deco Gilded Guild",
    subtitle: "1920s Gatsby Filigree, Geometric Gold & Luxury",
    palette: ["#0e0b06", "#d4af37", "#f3e5ab", "#1a160f"],
    badge: "Gilded Roaring 20s",
    category: "heritage",
    badgeColor: "bg-amber-200 text-amber-950 border-amber-400",
    persona: "Luxury Connoisseurs & Heritage Collectors",
    highlights: ["Geometric fan arches", "Gilded border filigree", "Vintage serif typography"],
  },
  {
    id: "design-17",
    num: "17",
    url: "/home/page-17",
    title: "RPG Herd Tycoon",
    subtitle: "Gamified Farm Tycoon, XP Levels & Yield Buffs",
    palette: ["#180828", "#8b5cf6", "#fbbf24", "#10b981"],
    badge: "Gamified RPG Tycoon",
    category: "creative",
    badgeColor: "bg-violet-100 text-violet-800 border-violet-300",
    persona: "Young Agri-Techies & Simulation Gamers",
    highlights: ["Level-up progression bar", "Unlockable herd perks", "Loot-box milestone cards"],
  },
  {
    id: "design-18",
    num: "18",
    url: "/home/page-18",
    title: "High-Craft Kinfolk Editorial",
    subtitle: "Kinfolk Magazine Layout & Slow Living Bovine Art",
    palette: ["#2b2b2b", "#f9f8f6", "#b7a99a", "#70685f"],
    badge: "Kinfolk Slow Living",
    category: "minimalist",
    badgeColor: "bg-stone-100 text-stone-800 border-stone-300",
    persona: "Modern Architects & Organic Consumers",
    highlights: ["Generous editorial whitespace", "Serif drop-caps", "Art gallery photo frame"],
  },
  {
    id: "design-19",
    num: "19",
    url: "/home/page-19",
    title: "Blueprint CAD Specification",
    subtitle: "Technical Architectural Drafting & Linework",
    palette: ["#0f2b48", "#ffffff", "#38bdf8", "#0284c7"],
    badge: "CAD Architectural",
    category: "tech",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-300",
    persona: "Agricultural Engineers & Dairy Project Builders",
    highlights: ["Isometric blueprint grid", "Dimension caliper annotations", "Milking shed specs"],
  },
  {
    id: "design-20",
    num: "20",
    url: "/home/page-20",
    title: "Neumorphic Soft Clay",
    subtitle: "Soft Inset/Extruded Clay Shadows & Tactile UI",
    palette: ["#e0e5ec", "#2d3748", "#38a169", "#4a5568"],
    badge: "Neumorphic Tactile",
    category: "creative",
    badgeColor: "bg-stone-200 text-stone-900 border-stone-300",
    persona: "UI/UX Designers & Mobile Experience Seekers",
    highlights: ["Extruded soft buttons", "Tactile inset metric counters", "Smooth monochromatic palette"],
  },
  {
    id: "design-21",
    num: "21",
    url: "/home/page-21",
    title: "Dalal Street Bull",
    subtitle: "BSE/NSE Trading Floor & Live Rupee Ticker",
    palette: ["#060c18", "#10b981", "#ef4444", "#38bdf8"],
    badge: "Dalal Street Terminal",
    category: "fintech",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    persona: "Indian Stock Traders, DIIs & Equity Bulls",
    highlights: ["Live Green/Red Candlestick UI", "Biological Dividend Ticker", "P/E Ratio vs Nifty 50"],
  },
  {
    id: "design-22",
    num: "22",
    url: "/home/page-22",
    title: "Swarna Lakshmi Temple",
    subtitle: "Akshaya Tritiya Gold, Crimson & Temple Wealth",
    palette: ["#1c0c04", "#d4af37", "#dc2626", "#fff7ed"],
    badge: "Akshaya Tritiya Gold",
    category: "heritage",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    persona: "Traditional Families & Akshaya Tritiya Gold Buyers",
    highlights: ["Living Gau-Dhan Thesis", "Gold Sikka vs Buffalo Sovereign", "Auspicious Shubh Muhurat"],
  },
  {
    id: "design-23",
    num: "23",
    url: "/home/page-23",
    title: "Punjab Kisan Samrat",
    subtitle: "Golden Mustard Fields, Rohtak Murrah Champions & Pride",
    palette: ["#0c1a0a", "#facc15", "#15803d", "#ea580c"],
    badge: "Kisan Samrat",
    category: "heritage",
    badgeColor: "bg-yellow-100 text-yellow-900 border-yellow-300",
    persona: "Progressive Zamindars & North Indian Dairy Tycoons",
    highlights: ["25+ L/day Murrah pedigree", "Sarson-field green & golden yellow", "Tractor & Silo integration"],
  },
  {
    id: "design-24",
    num: "24",
    url: "/home/page-24",
    title: "Gujarati Shubh Labh",
    subtitle: "Traditional Red Bahi-Khata Ledger & Vyapar",
    palette: ["#1e0808", "#f59e0b", "#991b1b", "#fef3c7"],
    badge: "Shubh Labh Bahi-Khata",
    category: "heritage",
    badgeColor: "bg-red-100 text-red-900 border-red-300",
    persona: "Gujarati Vyaparis, Patels & Business Communities",
    highlights: ["Red cloth binding ledger", "Shubh-Labh swastika branding", "Jama & Udhar cash ledger"],
  },
  {
    id: "design-25",
    num: "25",
    url: "/home/page-25",
    title: "Bengaluru Agritech VC",
    subtitle: "Kormangala Pitch Deck & Biological ARR",
    palette: ["#030712", "#6366f1", "#10b981", "#38bdf8"],
    badge: "Agritech Unicorn VC",
    category: "tech",
    badgeColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
    persona: "Bengaluru Tech Founders & Angel Network Angels",
    highlights: ["Bovine LTV to CAC Ratio", "Biological ARR Growth Curves", "Cap table equity compounding"],
  },
  {
    id: "design-26",
    num: "26",
    url: "/home/page-26",
    title: "Gulf NRI Remittance",
    subtitle: "Dubai Rupee Hedge & High-Yield Back-Home Wealth",
    palette: ["#05151b", "#d97706", "#0284c7", "#f8fafc"],
    badge: "Gulf NRI Remittance",
    category: "fintech",
    badgeColor: "bg-sky-100 text-sky-900 border-sky-300",
    persona: "Gulf NRIs (Dubai, Abu Dhabi, Muscat, Doha)",
    highlights: ["AED to INR Remittance Hedge", "Zero-effort managed farm model", "Remote CCTV dashboard"],
  },
  {
    id: "design-27",
    num: "27",
    url: "/home/page-27",
    title: "Dravidian Annapurna",
    subtitle: "Temple Brass, Turmeric & Traditional Ghee",
    palette: ["#140d05", "#eab308", "#854d0e", "#fefce8"],
    badge: "Annapurna Brass",
    category: "heritage",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    persona: "South Indian Traditionalists & Pure Ghee Aficionados",
    highlights: ["Brass Urli & Vilakku lighting", "Temple prasadam milk quality", "Ayurvedic butterfat purity"],
  },
  {
    id: "design-28",
    num: "28",
    url: "/home/page-28",
    title: "Marwari Parivaar Trust",
    subtitle: "Centuries-Old Rajasthani Haveli Family Office",
    palette: ["#180e29", "#fbbf24", "#4338ca", "#fdf4ff"],
    badge: "Family Office Trust",
    category: "heritage",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
    persona: "Marwari Family Offices & Generational Trust Managers",
    highlights: ["Multi-generational capital safety", "Sovereign land & herd backing", "Inter-generational transfer"],
  },
  {
    id: "design-29",
    num: "29",
    url: "/home/page-29",
    title: "Chai Tapri to Dairy King",
    subtitle: "Kulhad Brown & Daily Indian Consumer Cashflow",
    palette: ["#1f140e", "#d97706", "#78350f", "#fef3c7"],
    badge: "Daily Chai Cashflow",
    category: "creative",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    persona: "F&B Entrepreneurs & FMCG Retailers",
    highlights: ["Indian chai market consumption", "Recession-proof daily demand", "Morning cash collections"],
  },
  {
    id: "design-30",
    num: "30",
    url: "/home/page-30",
    title: "Bharat Kisan GovTech",
    subtitle: "NABARD & National Dairy Development Board Style",
    palette: ["#022c22", "#15803d", "#ea580c", "#ffffff"],
    badge: "National Dairy Scheme",
    category: "fintech",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    persona: "NABARD Borrowers, Co-operative Chairmen & Gov Auditors",
    highlights: ["Official PM Matsya/Kisan styling", "Subsidized dairy loan calculators", "Tiranga national colors"],
  },
  {
    id: "design-31",
    num: "31",
    url: "/home/page-31",
    title: "Ayurvedic Rasayana",
    subtitle: "Sandalwood, Copper Bilona & Vedic Wellness",
    palette: ["#1c1008", "#c2410c", "#ca8a04", "#faf5ee"],
    badge: "Ayurvedic Bilona Ghee",
    category: "heritage",
    badgeColor: "bg-orange-100 text-orange-900 border-orange-300",
    persona: "Wellness Enthusiasts & Ayurvedic Doctors",
    highlights: ["Hand-churned wooden Bilona ghee", "₹2,500/kg Ghee margin upside", "Charaka Samhita quotes"],
  },
  {
    id: "design-32",
    num: "32",
    url: "/home/page-32",
    title: "Holy Sangam River",
    subtitle: "Ganga Twilight, Marigold & Sacred Sanctuary",
    palette: ["#0a1526", "#f97316", "#38bdf8", "#fff7ed"],
    badge: "Holy River Sanctuary",
    category: "heritage",
    badgeColor: "bg-sky-100 text-sky-900 border-sky-300",
    persona: "Spiritual Seekers & Non-Profit Sanctuary Donors",
    highlights: ["Aarti lamp reflections", "Pure ethical sanctuary care", "Dharmic compounding merit"],
  },
  {
    id: "design-33",
    num: "33",
    url: "/home/page-33",
    title: "Neo-UPI FinTech App",
    subtitle: "PhonePe/GPay Style, Auto-Pay & QR Simulator",
    palette: ["#0b0d1b", "#6366f1", "#10b981", "#f8fafc"],
    badge: "UPI 1-Click AutoPay",
    category: "tech",
    badgeColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
    persona: "Young Tech-Savvy Indian Retail Animal Asset Owners",
    highlights: ["UPI auto-debit simulator", "Daily cashback reward scratches", "Instant QR allotment"],
  },
  {
    id: "design-34",
    num: "34",
    url: "/home/page-34",
    title: "Royal Rajput Haveli",
    subtitle: "Jodhpur Blue, Jaisalmer Stone & Mewar Crest",
    palette: ["#0c192c", "#0284c7", "#f59e0b", "#fffbeb"],
    badge: "Mewar Royal Crest",
    category: "heritage",
    badgeColor: "bg-sky-100 text-sky-900 border-sky-300",
    persona: "Heritage Hotel Owners & Royal Families",
    highlights: ["Jharokha arched windows", "Royal decree certificate", "Noble horse & cattle breeding pedigree"],
  },
  {
    id: "design-35",
    num: "35",
    url: "/home/page-35",
    title: "Desi Mithai Syndicate",
    subtitle: "Halwai B2B Demand, Khoya & 8% Milk Fat Gold",
    palette: ["#241208", "#ea580c", "#facc15", "#fffdfa"],
    badge: "Halwai Khoya Gold",
    category: "creative",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    persona: "Halwais, Sweet Shop Owners & Commercial Dairies",
    highlights: ["High-fat buffalo milk economics", "Khoya conversion multiplier", "Diwali & wedding demand spikes"],
  },
  {
    id: "design-36",
    num: "36",
    url: "/home/page-36",
    title: "Silicon Valley Desi Club",
    subtitle: "Bay Area Techies Agri-Angel Syndicate",
    palette: ["#050814", "#3b82f6", "#10b981", "#e0e7ff"],
    badge: "Bay Area Agri-Angels",
    category: "tech",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
    persona: "Indian Techies in San Jose, Seattle & London",
    highlights: ["USD investment calculator", "Zero active management requirement", "Automated quarterly dividends"],
  },
  {
    id: "design-37",
    num: "37",
    url: "/home/page-37",
    title: "Defense Veterans Pension",
    subtitle: "Military Olive, Armed Forces Family Security",
    palette: ["#141c11", "#4d7c0f", "#eab308", "#f7fee7"],
    badge: "Armed Forces Pension",
    category: "fintech",
    badgeColor: "bg-lime-100 text-lime-900 border-lime-300",
    persona: "Retired Armed Forces Officers & Fauji Families",
    highlights: ["Disciplined retirement cashflow", "Zero speculation, biological reality", "Veterans priority allotment"],
  },
  {
    id: "design-38",
    num: "38",
    url: "/home/page-38",
    title: "Kerala Coconut Grove",
    subtitle: "Tropical Backwaters & God's Own Dairy Farm",
    palette: ["#041c14", "#059669", "#0284c7", "#f0fdf4"],
    badge: "Tropical Backwater",
    category: "eco",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    persona: "South Indian Farmers & Agri-Tourism Resorts",
    highlights: ["Tropical grove grazing", "Lush green fodder diet", "Premium coastal milk realization"],
  },
  {
    id: "design-39",
    num: "39",
    url: "/home/page-39",
    title: "Wedding Shagun Stridhan",
    subtitle: "Bridal Crimson, Zardozi Gold & Living Gift",
    palette: ["#240612", "#fbbf24", "#4c0519", "#ffe4e6"],
    badge: "Shagun Stridhan",
    category: "heritage",
    badgeColor: "bg-pink-100 text-pink-900 border-pink-300",
    persona: "Wedding Planners & Parents Gifting Daughters",
    highlights: ["₹2,00,001 Shagun envelope", "Living gift that multiplies", "Non-depreciating Stridhan"],
  },
  {
    id: "design-40",
    num: "40",
    url: "/home/page-40",
    title: "Quick-Commerce Dark Store",
    subtitle: "Zepto/Blinkit 10-Min Farm-to-Fridge Pipeline",
    palette: ["#110526", "#facc15", "#8b5cf6", "#1f0a42"],
    badge: "Quick-Commerce 10m",
    category: "tech",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
    persona: "Urban D2C Animal Asset Owners & Quick-Comm Operators",
    highlights: ["6:00 AM dark store dispatch", "Direct-to-consumer premium", "Zero-middleman margin capture"],
  },
  {
    id: "design-41",
    num: "41",
    url: "/home/page-41",
    title: "Cosmic Dairy Observatory",
    subtitle: "Solar-Lunar Rhythms & Nakshatra Milking Cycles",
    palette: ["#ffffff", "#f59e0b", "#0284c7", "#fef3c7"],
    badge: "Solar Observatory",
    category: "vibrant-new",
    badgeColor: "bg-amber-200 text-amber-950 border-amber-400 font-bold",
    persona: "Astrophysicists, Agro-Astronomers & Vedic Scholars",
    highlights: ["Rohini Nakshatra yield cycles", "Solar-harmonized AI breeding", "Daylight orbit matrix"],
  },
  {
    id: "design-42",
    num: "42",
    url: "/home/page-42",
    title: "Himalayan Saffron Valley",
    subtitle: "Alpine Snowmelt, Crocus Purple & Pure Butterfat",
    palette: ["#ffffff", "#7c3aed", "#059669", "#ec4899"],
    badge: "Alpine Glacier",
    category: "vibrant-new",
    badgeColor: "bg-purple-200 text-purple-950 border-purple-400 font-bold",
    persona: "High-Altitude Organic Purists & Luxury Gourmet Buyers",
    highlights: ["Glacier-water hydration", "Wild saffron clover feeding", "Cold-chain mountain butterfat"],
  },
  {
    id: "design-43",
    num: "43",
    url: "/home/page-43",
    title: "Jaipur Phulkari Mela",
    subtitle: "Festive Rangoli Mandalas, Saffron & Prosperity Bunting",
    palette: ["#ffffff", "#f59e0b", "#db2777", "#059669"],
    badge: "Phulkari Carnival",
    category: "vibrant-new",
    badgeColor: "bg-pink-200 text-pink-950 border-pink-400 font-bold",
    persona: "Indian Festive Celebrators & Cultural Patrons",
    highlights: ["Rangoli mandalas of compounding", "Phulkari textile patterns", "Joyous rural celebration"],
  },
  {
    id: "design-44",
    num: "44",
    url: "/home/page-44",
    title: "Golden Honeycomb Permaculture",
    subtitle: "Hexagonal Biomimicry, Clover & Zero-Waste Pasture",
    palette: ["#ffffff", "#f59e0b", "#16a34a", "#fefce8"],
    badge: "Biomimicry Honeycomb",
    category: "vibrant-new",
    badgeColor: "bg-yellow-200 text-yellow-950 border-yellow-400 font-bold",
    persona: "Permaculturists & Zero-Waste Agro-Ecologists",
    highlights: ["Hexagonal cell growth model", "Sweet-clover nitrogen pastures", "100% closed-loop nutrient cycle"],
  },
  {
    id: "design-45",
    num: "45",
    url: "/home/page-45",
    title: "Mysore Sandalwood Durbar",
    subtitle: "Maharaja Royal Treasury, Silk Brocade & Sacred Herd",
    palette: ["#faf5ee", "#d97706", "#be123c", "#b45309"],
    badge: "Royal Durbar",
    category: "vibrant-new",
    badgeColor: "bg-amber-200 text-amber-950 border-amber-400 font-bold",
    persona: "Princely Family Trusts & Imperial Heritage Lovers",
    highlights: ["Princely royal decree charter", "Mysore sandalwood ivory aesthetics", "Imperial cattle lineage"],
  },
  {
    id: "design-46",
    num: "46",
    url: "/home/page-46",
    title: "Kerala Backwater Hydro-Oasis",
    subtitle: "Floating Reed Pastures, Cooling Lagoons & 8.8% Fat",
    palette: ["#ffffff", "#0284c7", "#059669", "#f472b6"],
    badge: "Floating Lagoon",
    category: "vibrant-new",
    badgeColor: "bg-cyan-200 text-cyan-950 border-cyan-400 font-bold",
    persona: "Eco-Resort Owners & Tropical Agri-Preneurs",
    highlights: ["Canal-cooling thermoregulation", "8.8% record butterfat yield", "Free aquatic Azolla feed"],
  },
  {
    id: "design-47",
    num: "47",
    url: "/home/page-47",
    title: "Origami Papercraft Atelier",
    subtitle: "Folded Pastel Kraft, 3D Pop-Up Layers & Washi Stamps",
    palette: ["#faf8f5", "#a7f3d0", "#fef08a", "#bae6fd"],
    badge: "Folded 3D Pop-Up",
    category: "vibrant-new",
    badgeColor: "bg-stone-200 text-stone-900 border-stone-400 font-bold",
    persona: "Design Minimalists & Creative Agency Executives",
    highlights: ["3D pop-up storybook layers", "Tactile washi-tape labels", "Folded geometric bovines"],
  },
  {
    id: "design-48",
    num: "48",
    url: "/home/page-48",
    title: "Solarium Sky-Greenhouse",
    subtitle: "Vertical Hydroponic Fodder & Daylight Glass Arcs",
    palette: ["#ffffff", "#65a30d", "#0284c7", "#eab308"],
    badge: "Glass Solarium",
    category: "vibrant-new",
    badgeColor: "bg-lime-200 text-lime-950 border-lime-400 font-bold",
    persona: "High-Tech Green-Sprout Animal Asset Owners & Hydroponic Pioneers",
    highlights: ["6-day vertical barley sprouts", "Classical raga oxytocin acoustics", "Computer daylight atriums"],
  },
  {
    id: "design-49",
    num: "49",
    url: "/home/page-49",
    title: "Mediterranean Fromagerie",
    subtitle: "Artisanal Buffalo Burrata, Terracotta & Coastal Gold",
    palette: ["#fffbf5", "#ea580c", "#0284c7", "#65a30d"],
    badge: "Riviera Burrata",
    category: "vibrant-new",
    badgeColor: "bg-orange-200 text-orange-950 border-orange-400 font-bold",
    persona: "Michelin Chefs, Luxury Hoteliers & Gourmet Exporters",
    highlights: ["Artisanal mozzarella di bufala", "4x value-add cheese premium", "Sun-soaked terracotta palette"],
  },
  {
    id: "design-50",
    num: "50",
    url: "/home/page-50",
    title: "Maha Bilona Golden Jubilee",
    subtitle: "Celebratory Butter Churn, Temple Bells & ₹3.25 Cr Ticker",
    palette: ["#fffbeb", "#facc15", "#ea580c", "#059669"],
    badge: "Grand Finale 50",
    category: "vibrant-new",
    badgeColor: "bg-yellow-300 text-slate-950 border-yellow-500 font-black",
    persona: "All Indian Animal Asset Owners & Rural Wealth Advocates",
    highlights: ["Grand 50-design jubilee finale", "₹3.25 Crore wealth celebration", "Traditional wooden Bilona ticker"],
  },
];

// 10 FARM INPUT PAGES (Routes to /input/page-1 through /input/page-10)
const INPUT_CARDS = [
  {
    id: "input-1",
    num: "01",
    url: "/input/page-1",
    title: "Bovine Pedigree & RFID Tag Registry",
    subtitle: "Ear Tag ID, 15-Digit Microchip & Horn Profiling",
    badge: "Animal Registry",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    persona: "Livestock Managers & Herd Supervisors",
    icon: Tag,
    highlights: ["15-digit RFID microchip validation", "Championship lineage tracing", "Live ear tag preview badge"],
  },
  {
    id: "input-2",
    num: "02",
    url: "/input/page-2",
    title: "Daily Milk Collection & Fat Quality Test",
    subtitle: "AM/PM Yield, Gerber Butterfat % & Auto-Pricing Slip",
    badge: "Milk Lab Quality",
    badgeColor: "bg-sky-100 text-sky-900 border-sky-300",
    persona: "Dairy Lab Technicians & Bulk Chiller Operators",
    icon: Milk,
    highlights: ["Live pricing formula (Fat + SNF)", "Bulk chiller assignment", "Instant printable procurement slip"],
  },
  {
    id: "input-3",
    num: "03",
    url: "/input/page-3",
    title: "AI Breeding & Gestation Calendar",
    subtitle: "Sex-Sorted Semen Straws & 310-Day Calving Milestones",
    badge: "Clinical Bio-Genetics",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
    persona: "Veterinary Officers & Breeding Coordinators",
    icon: Dna,
    highlights: ["Sex-sorted 90%+ female guarantee", "Day-60 PD confirmation tracker", "Automatic 310-day calving forecast"],
  },
  {
    id: "input-4",
    num: "04",
    url: "/input/page-4",
    title: "Veterinary Health & Vaccine Log",
    subtitle: "Disease Diagnostics, Deworming & Withdrawal Safety",
    badge: "Food Safety & Health",
    badgeColor: "bg-rose-100 text-rose-900 border-rose-300",
    persona: "Veterinary Surgeons & Organic Certifiers",
    icon: Stethoscope,
    highlights: ["Milk withdrawal safety alert", "FMD & Brucella booster reminders", "Dosage & administration routes"],
  },
  {
    id: "input-5",
    num: "05",
    url: "/input/page-5",
    title: "Feed, Fodder & Silage Batch Form",
    subtitle: "Green Napier, Moisture % & Daily Ration Intake",
    badge: "Nutritional Silo",
    badgeColor: "bg-lime-100 text-lime-900 border-lime-300",
    persona: "Agronomists & Feed Stock Supervisors",
    icon: Wheat,
    highlights: ["Silo capacity & cost tracking", "Moisture & Crude Protein %", "Total Digestible Nutrients (TDN)"],
  },
  {
    id: "input-6",
    num: "06",
    url: "/input/page-6",
    title: "Animal Asset Owner ₹2L Package Allotment",
    subtitle: "KYC, Dividend Bank Account & Nominee Details",
    badge: "Capital Onboarding",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    persona: "HNI Animal Asset Owners & Wealth Allocators",
    icon: Coins,
    highlights: ["₹2 Lacs package multiplier", "Monthly dividend bank link", "Official ownership certificate"],
  },
  {
    id: "input-7",
    num: "07",
    url: "/input/page-7",
    title: "Farmgate Milk Dispatch Invoice",
    subtitle: "Insulated Tanker Chilling, Composite Fat & Gate Pass",
    badge: "Cold-Chain Logistics",
    badgeColor: "bg-teal-100 text-teal-900 border-teal-300",
    persona: "Dairy Processors & Fleet Transport Drivers",
    icon: Truck,
    highlights: ["Tamper-proof seal validation", "Cold-chain <=4°C verification", "Commercial B2B GST waybill"],
  },
  {
    id: "input-8",
    num: "08",
    url: "/input/page-8",
    title: "Calf Nursery Birth & Growth Log",
    subtitle: "Colostrum Feed within 1 Hr & 3-Yr Maturity Line",
    badge: "Calf Maternity",
    badgeColor: "bg-pink-100 text-pink-900 border-pink-300",
    persona: "Nursery Caretakers & Heifer Supervisors",
    icon: Baby,
    highlights: ["Golden-hour colostrum intake", "Navel cord disinfection log", "36-month maturity pathway"],
  },
  {
    id: "input-9",
    num: "09",
    url: "/input/page-9",
    title: "Farm Opex, Payroll & Cash Voucher",
    subtitle: "Milking Labour Wages, Fodder Invoices & Ledger Approval",
    badge: "Farm Bookkeeping",
    badgeColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
    persona: "Farm Accountants & General Managers",
    icon: Receipt,
    highlights: ["Multi-category expense heads", "Manager digital authorization", "Dual-entry bookkeeping record"],
  },
  {
    id: "input-10",
    num: "10",
    url: "/input/page-10",
    title: "Biogas & Vermicompost Dispatch",
    subtitle: "Circular Dung By-Products, Slurry & Carbon Credits",
    badge: "Zero-Waste Economy",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    persona: "Bio-Fertilizer Buyers & Organic Estates",
    icon: Recycle,
    highlights: ["NPK laboratory purity stamp", "CO2e carbon offset counter", "Certified organic transit receipt"],
  },
  {
    id: "input-11",
    num: "11",
    url: "/input/page-11",
    title: "Bulk Chiller CIP Sanitization",
    subtitle: "Clean-In-Place 75°C Caustic Wash & ATP Swab Log",
    badge: "Food Safety",
    badgeColor: "bg-cyan-100 text-cyan-900 border-cyan-300",
    persona: "QA Microbiologists & Chiller Operators",
    icon: Droplets,
    highlights: ["Thermal caustic wash verification", "ATP <30 RLU sterility pass", "Neutral rinse water pH tracking"],
  },
  {
    id: "input-12",
    num: "12",
    url: "/input/page-12",
    title: "Pasture Grazing & Forage Rotation",
    subtitle: "Paddock Allocation, Sward Height & Organic Fertigation",
    badge: "Regenerative Fodder",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    persona: "Agronomists & Herd Grazing Leads",
    icon: Sprout,
    highlights: ["Super Napier sward height measurement", "21-day rotational grazing mob", "Biogas slurry fertigation log"],
  },
  {
    id: "input-13",
    num: "13",
    url: "/input/page-13",
    title: "Quarantine & Sick Bay Admission",
    subtitle: "Isolation Protocol, Rectal Temp & Clinical Triage",
    badge: "Herd Biosecurity",
    badgeColor: "bg-rose-100 text-rose-900 border-rose-300",
    persona: "Veterinary Officers & Triage Attendants",
    icon: ShieldAlert,
    highlights: ["Contagious disease containment", "Body temperature & vital signs", "Disinfection footbath threshold"],
  },
  {
    id: "input-14",
    num: "14",
    url: "/input/page-14",
    title: "Milking Machine & Vacuum Calibration",
    subtitle: "Vacuum 48.5 kPa Sensor Tuner & 60:40 Pulsation Ratio",
    badge: "Hardware Precision",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
    persona: "Dairy Technicians & Parlor Engineers",
    icon: Gauge,
    highlights: ["48-50 kPa buffalo vacuum tuning", "Silicone liner wear threshold", "Auto-takeoff sensor sensitivity"],
  },
  {
    id: "input-15",
    num: "15",
    url: "/input/page-15",
    title: "Artisanal Bilona A2 Ghee Batch",
    subtitle: "Earthen Curd Churn, Brass Kadai Simmer & Danedar Ghee",
    badge: "Vedic Craftsmanship",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    persona: "Master Ghee Artisans & Culinary Directors",
    icon: CookingPot,
    highlights: ["Clay pot curd culturing (16h)", "Woodfire slow simmer (118°C)", "Golden danedar granulation grade"],
  },
  {
    id: "input-16",
    num: "16",
    url: "/input/page-16",
    title: "Borewell Water Quality & Salts",
    subtitle: "TDS ppm, Zero Coliform & Rumen Buffer Electrolytes",
    badge: "Hydrology Nutrition",
    badgeColor: "bg-sky-100 text-sky-900 border-sky-300",
    persona: "Hydrologists & Herd Health Supervisors",
    icon: Waves,
    highlights: ["TDS <500 ppm potability certification", "Zero fecal coliform audit", "Rumen sodium bicarbonate buffer"],
  },
  {
    id: "input-17",
    num: "17",
    url: "/input/page-17",
    title: "D2C Fresh Glass Bottle Roster",
    subtitle: "Urban Doorstep Routes, Returnable Bottles & Plan Quota",
    badge: "D2C Retail",
    badgeColor: "bg-sky-100 text-sky-900 border-sky-300",
    persona: "D2C Operations & Route Logistics",
    icon: Milk,
    highlights: ["Pre-dawn delivery window", "Glass bottle returnable deposit", "DLF & South Delhi route allocation"],
  },
  {
    id: "input-18",
    num: "18",
    url: "/input/page-18",
    title: "Livestock Insurance & RFID Claim",
    subtitle: "₹2.00L Capital Protection, Post-Mortem & Tag Filing",
    badge: "Capital Guarantee",
    badgeColor: "bg-stone-100 text-stone-800 border-stone-300",
    persona: "Compliance Officers & Insurance Claimants",
    icon: FileCheck,
    highlights: ["100% principal indemnity claim", "Govt veterinary necropsy cert", "Retrieved RFID microchip proof"],
  },
  {
    id: "input-19",
    num: "19",
    url: "/input/page-19",
    title: "Solar Grid & Diesel Genset Log",
    subtitle: "50kW Solar Harvest, 125kVA Backup AMF & Zero Chiller Trip",
    badge: "Energy Microgrid",
    badgeColor: "bg-yellow-100 text-yellow-800 border-yellow-300",
    persona: "Electrical Engineers & Facility Managers",
    icon: Zap,
    highlights: ["Solar green power percentage", "Diesel fuel consumption audit", "Cold-chain static transfer priority"],
  },
  {
    id: "input-20",
    num: "20",
    url: "/input/page-20",
    title: "Biosecurity Wheel-Dip & Gate Pass",
    subtitle: "360° Virkon-S Spray Arch & Pathogen Fomite Interception",
    badge: "Perimeter Shield",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    persona: "Security Officers & Biosecurity Leads",
    icon: UserCheck,
    highlights: ["Automated underbody spray arch", "Infrared visitor temperature check", "Boot cover & hairnet barrier pass"],
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<"landing" | "input" | "developer" | "agreements" | "marketplace" | "admin">("landing");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [simYear, setSimYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const currentSimData = projections[simYear - 1];

  const filteredLandingCards =
    activeFilter === "all"
      ? DESIGN_CARDS
      : activeFilter === "vibrant-new"
      ? DESIGN_CARDS.filter((c) => c.category === "vibrant-new")
      : activeFilter === "heritage"
      ? DESIGN_CARDS.filter((c) => c.category === "heritage")
      : activeFilter === "fintech"
      ? DESIGN_CARDS.filter((c) => c.category === "fintech")
      : activeFilter === "tech"
      ? DESIGN_CARDS.filter((c) => c.category === "tech")
      : DESIGN_CARDS.filter((c) => c.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fcfbf7] via-[#fdfdfc] to-[#f5f8f3] text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* Top Auspicious Sunlight Banner */}
      <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 py-2.5 px-6 text-center text-xs font-bold text-slate-950 shadow-xs">
        <span className="inline-flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-slate-950" />
          <span>
            <strong>HIRA DAIRY FARM SOFTWARE:</strong> 50 Landing Page Designs &bull; 10 React Hook Form Input Pages &bull; Live & Interactive
          </span>
        </span>
      </div>

      {/* Main Daylight Header */}
      <header className="border-b border-amber-200/80 bg-white/90 backdrop-blur-xl sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-400 flex items-center justify-center text-slate-950 font-black text-xl shadow-md shadow-amber-300/40">
              H
            </div>
            <div>
              <span className="font-extrabold text-stone-950 text-base tracking-tight block">
                HIRA DIARY FARM SOFTWARE
              </span>
              <span className="text-[11px] text-amber-700 font-bold font-mono tracking-wider">
                50 LANDING DESIGNS + 10 INPUT PAGES
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#category-cards"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-amber-300 bg-amber-50 text-xs font-bold text-amber-900 hover:bg-amber-100 transition"
            >
              <Layout className="w-3.5 h-3.5 text-amber-600" />
              Choose Category
            </a>
            <a
              href="#simulator"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 transition"
            >
              <Sliders className="w-3.5 h-3.5 text-stone-500" />
              Compounding Simulator
            </a>
            <a
              href="#catalog"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-xs shadow-md shadow-orange-300/40 hover:scale-105 transition"
            >
              Browse Gallery &darr;
            </a>
          </div>
        </div>
      </header>

      {/* Hero Showcase: Ultra-Animated Buffalo Farm Business Experience */}
      <section className="relative max-w-7xl mx-auto px-6 pt-12 pb-16 overflow-hidden">
        {/* Animated Background Rays / Sunburst */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-200/40 via-yellow-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-extrabold shadow-xs">
              <Sun className="w-4 h-4 text-amber-600 animate-spin-slow" /> 
              <span>Vibrant Daylight Suite &bull; 50 Landing Designs + 10 Farm Inputs</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-stone-950 tracking-tight leading-[1.08]">
              Complete Software Suite for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-emerald-600">
                Hira Dairy Farm Business.
              </span>
            </h1>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-medium">
              Explore <strong>50 distinct landing page designs</strong> and <strong>10 specialized farm input workflows</strong> built with React Hook Form and instant toast feedback—tailored for the <strong>₹2 Lacs Buffalo + Calf</strong> 10-year compounding business model.
            </p>

            {/* Quick Stat Pill Cards */}
            <div className="grid grid-cols-3 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-sm hover:shadow-md transition">
                <span className="text-[10px] text-amber-800 uppercase font-mono font-bold block">Entry Package</span>
                <span className="text-2xl font-black text-stone-950">₹2,00,000</span>
                <span className="text-xs text-amber-600 font-semibold block">1 Buffalo + 1 Calf</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm hover:shadow-md transition">
                <span className="text-[10px] text-emerald-800 uppercase font-mono font-bold block">Year 10 Herd</span>
                <span className="text-2xl font-black text-emerald-700">88 Animals</span>
                <span className="text-xs text-emerald-600 font-semibold block">via Sex-Sorted AI</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-orange-200 shadow-sm hover:shadow-md transition">
                <span className="text-[10px] text-orange-800 uppercase font-mono font-bold block">Yr 10 Milk Sales</span>
                <span className="text-2xl font-black text-orange-600">₹82.32 Lacs</span>
                <span className="text-xs text-orange-600 font-semibold block">Yearly Gross Cashflow</span>
              </div>
            </div>
          </div>

          {/* Right Hero: Animated Floating Buffalo & Telemetry Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 z-20 px-3.5 py-2 rounded-2xl bg-white border border-emerald-200 shadow-lg text-xs font-bold text-emerald-800 flex items-center gap-2 animate-float-slow">
              <Milk className="w-4 h-4 text-emerald-600" />
              <span>14 L / Day Pure Murrah Milk</span>
            </div>

            <div className="absolute -bottom-4 -right-4 z-20 px-3.5 py-2 rounded-2xl bg-white border border-amber-300 shadow-lg text-xs font-bold text-amber-900 flex items-center gap-2 animate-float-reverse">
              <Trophy className="w-4 h-4 text-amber-600" />
              <span>₹3.25+ Cr Cumulative Wealth</span>
            </div>

            <div className="p-5 rounded-3xl bg-white/95 border-2 border-amber-300 shadow-2xl relative space-y-4">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-amber-200">
                <Image
                  src="/Murrah_buffalo.JPG"
                  alt="Murrah Buffalo & Calf"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs bg-white/95 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-amber-200 shadow-xs">
                  <div>
                    <span className="font-extrabold text-stone-900 block">Murrah Pure-Breed Seed Pair</span>
                    <span className="text-[10px] text-amber-700 font-bold">Age 3 Mother + Female Calf</span>
                  </div>
                  <span className="text-emerald-700 font-mono font-bold bg-emerald-100 px-2 py-0.5 rounded-md">8.4% Fat</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-stone-800 leading-relaxed">
                <strong className="text-amber-900 font-extrabold">The Core Math:</strong> Mother gives 1 calf every year using sex-sorted AI. Every female calf reaches maturity at age 3 and begins bearing calves herself. By Year 10, 1 seed pair compounds into <strong>88 animals</strong> yielding <strong>₹82.32 Lacs</strong> annually.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Buffalo Farm Business Compounding Visualizer */}
      <section id="simulator" className="max-w-7xl mx-auto px-6 py-10">
        <div className="rounded-3xl bg-white border-2 border-amber-200 shadow-xl p-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-amber-100 pb-6">
            <div>
              <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-amber-600 flex items-center gap-1.5">
                <Sliders className="w-4 h-4" /> Live Interactive Biological Simulator
              </span>
              <h2 className="text-3xl font-black text-stone-900 mt-1">
                Watch Your Buffalo Herd Compound Across 10 Years
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-stone-600">Select Year:</span>
              <div className="flex gap-1 bg-amber-50 p-1 rounded-xl border border-amber-200">
                {[1, 3, 5, 8, 10].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSimYear(yr)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                      simYear === yr
                        ? "bg-amber-500 text-slate-950 shadow-xs"
                        : "text-amber-900 hover:bg-amber-200/60"
                    }`}
                  >
                    Yr {yr}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Animated Interactive Scrubbing Slider */}
          <div className="space-y-3">
            <div className="flex justify-between text-xs font-mono font-bold text-amber-900">
              <span>Year 1: 1 Mother + 1 Calf (Seed)</span>
              <span className="text-sm bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full font-sans font-black shadow-xs">
                Simulating Year {simYear} of 10
              </span>
              <span>Year 10: 88 Champions (₹82.32L/yr)</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={simYear}
              onChange={(e) => setSimYear(parseInt(e.target.value, 10))}
              className="w-full h-3.5 bg-amber-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* Visual Herd Pasture Simulation */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-emerald-50/70 to-emerald-100/50 border border-emerald-200 space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-extrabold text-emerald-950 flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-600" />
                Live Pasture Herd Population: <strong className="text-base text-emerald-700">{currentSimData.totalHerdSize} Animals</strong>
              </span>
              <span className="text-emerald-800 font-mono font-bold">
                {currentSimData.matureBuffaloes} Milking Adults &bull; {currentSimData.growingHeifers} Heifers &bull; {currentSimData.calvesBornThisYear} New Calves
              </span>
            </div>

            <div className="min-h-24 p-4 rounded-xl bg-white/80 border border-emerald-200 flex flex-wrap gap-2 items-center justify-start max-h-48 overflow-y-auto">
              {Array.from({ length: currentSimData.totalHerdSize }).map((_, i) => (
                <div
                  key={i}
                  className="px-2 py-1 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-900 text-[11px] font-bold flex items-center gap-1 shadow-2xs hover:scale-110 transition cursor-default"
                  title={`Buffalo #${i + 1}`}
                >
                  <span>🐃</span>
                  <span className="font-mono text-[9px]">#{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Simulator Telemetry Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200">
              <div className="flex items-center justify-between text-amber-800 mb-1">
                <span className="text-xs font-bold uppercase">Total Herd Size</span>
                <Trophy className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-3xl font-black text-stone-900">{currentSimData.totalHerdSize} Head</div>
              <p className="text-xs text-amber-700 mt-1 font-medium">
                {currentSimData.matureBuffaloes} Milking adults giving 14L/day
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200">
              <div className="flex items-center justify-between text-sky-800 mb-1">
                <span className="text-xs font-bold uppercase">Daily Milk Harvest</span>
                <Milk className="w-4 h-4 text-sky-600" />
              </div>
              <div className="text-3xl font-black text-sky-950">{currentSimData.dailyMilkProductionLiters} Liters/day</div>
              {/* Hydration-safe deterministic number formatting */}
              <p className="text-xs text-sky-700 mt-1 font-medium">
                {formatNumber(currentSimData.annualMilkProductionLiters)} L / year output
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
              <div className="flex items-center justify-between text-emerald-800 mb-1">
                <span className="text-xs font-bold uppercase">Annual Gross Revenue</span>
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-3xl font-black text-emerald-800">{formatINR(currentSimData.grossMilkingRevenueINR)}</div>
              <p className="text-xs text-emerald-700 mt-1 font-medium">Over 300 annual lactation days</p>
            </div>

            <div className="p-5 rounded-2xl bg-orange-50 border border-orange-200">
              <div className="flex items-center justify-between text-orange-800 mb-1">
                <span className="text-xs font-bold uppercase">Total Cumulative Wealth</span>
                <Award className="w-4 h-4 text-orange-600" />
              </div>
              <div className="text-3xl font-black text-orange-950">{formatINR(currentSimData.totalCumulativeWealthINR)}</div>
              <p className="text-xs text-orange-700 mt-1 font-medium">Living herd asset equity + milk sales</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY SELECTOR CARDS (Landing Pages vs Input Pages) */}
      <section id="category-cards" className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-amber-700 block">
            Navigation Hub
          </span>
          <h2 className="text-3xl font-black text-stone-950 mt-1">
            Choose What You Want to Explore
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Select between client-facing landing page design themes or operational farm input forms.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Category Card 1: Landing Pages */}
          <div
            onClick={() => {
              setActiveCategory("landing");
              const el = document.getElementById("catalog");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className={`cursor-pointer rounded-3xl p-6 border-3 transition-all duration-300 relative overflow-hidden group shadow-xl ${
              activeCategory === "landing"
                ? "border-amber-500 bg-white shadow-amber-500/15 ring-4 ring-amber-200"
                : "border-stone-200 bg-white/80 hover:border-amber-300 hover:shadow-lg"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center font-black shadow-md">
                <Layout className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-black px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                50 Themes
              </span>
            </div>

            <h3 className="text-lg font-black text-stone-950 group-hover:text-amber-700 transition">
              Landing Designs
            </h3>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Explore 50 completely different UI/UX landing pages illustrating the ₹2 Lacs compounding plan.
            </p>

            <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-700">
              <span>50 Themes</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                {activeCategory === "landing" ? "Selected" : "View"} &rarr;
              </span>
            </div>
          </div>

          {/* Category Card 2: Input Pages */}
          <div
            onClick={() => {
              setActiveCategory("input");
              const el = document.getElementById("catalog");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className={`cursor-pointer rounded-3xl p-6 border-3 transition-all duration-300 relative overflow-hidden group shadow-xl ${
              activeCategory === "input"
                ? "border-emerald-500 bg-white shadow-emerald-500/15 ring-4 ring-emerald-200"
                : "border-stone-200 bg-white/80 hover:border-emerald-300 hover:shadow-lg"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-black shadow-md">
                <ClipboardList className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                20 Forms
              </span>
            </div>

            <h3 className="text-lg font-black text-stone-950 group-hover:text-emerald-700 transition">
              Farm Input Forms
            </h3>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Twenty interactive farm management forms with React Hook Form, validation, and toasters.
            </p>

            <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>20 Forms</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                {activeCategory === "input" ? "Selected" : "View"} &rarr;
              </span>
            </div>
          </div>

          {/* Category Card 3: Marketplace Web App UI */}
          <div
            onClick={() => {
              setActiveCategory("marketplace");
              const el = document.getElementById("catalog");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className={`cursor-pointer rounded-3xl p-6 border-3 transition-all duration-300 relative overflow-hidden group shadow-xl ${
              activeCategory === "marketplace"
                ? "border-sky-600 bg-white shadow-sky-500/15 ring-4 ring-sky-200"
                : "border-stone-200 bg-white/80 hover:border-sky-400 hover:shadow-lg"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white flex items-center justify-center font-black shadow-md">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-black px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-900 border border-sky-300">
                Marketplace UI
              </span>
            </div>

            <h3 className="text-lg font-black text-stone-950 group-hover:text-sky-700 transition">
              Marketplace Web App
            </h3>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Vibrant orders &amp; live GPS transit telemetry, veterinary fitness dossiers, and retail storefront.
            </p>

            <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-sky-700">
              <span>/marketplace/page-1</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                {activeCategory === "marketplace" ? "Selected" : "View"} &rarr;
              </span>
            </div>
          </div>

          {/* Category Card 4: Admin Web App UI */}
          <div
            onClick={() => {
              setActiveCategory("admin");
              const el = document.getElementById("catalog");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className={`cursor-pointer rounded-3xl p-6 border-3 transition-all duration-300 relative overflow-hidden group shadow-xl ${
              activeCategory === "admin"
                ? "border-rose-600 bg-white shadow-rose-500/15 ring-4 ring-rose-200"
                : "border-stone-200 bg-white/80 hover:border-rose-400 hover:shadow-lg"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 to-rose-600 text-white flex items-center justify-center font-black shadow-md">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-black px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 border border-rose-300">
                Admin Console
              </span>
            </div>

            <h3 className="text-lg font-black text-stone-950 group-hover:text-rose-700 transition">
              Admin Web App
            </h3>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Inbound fleet dispatch radar, stanchion allocations, RFID ear-tag master, and farm operations control.
            </p>

            <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-rose-700">
              <span>/admin/page-1</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                {activeCategory === "admin" ? "Selected" : "Manage"} &rarr;
              </span>
            </div>
          </div>

          {/* Category Card 5: Developer Console */}
          <div
            onClick={() => {
              setActiveCategory("developer");
              const el = document.getElementById("catalog");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className={`cursor-pointer rounded-3xl p-6 border-3 transition-all duration-300 relative overflow-hidden group shadow-xl ${
              activeCategory === "developer"
                ? "border-indigo-600 bg-white shadow-indigo-500/15 ring-4 ring-indigo-200"
                : "border-stone-200 bg-white/80 hover:border-indigo-300 hover:shadow-lg"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-sky-500 text-white flex items-center justify-center font-black shadow-md">
                <Terminal className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-black px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-300">
                Telemetry
              </span>
            </div>

            <h3 className="text-lg font-black text-stone-950 group-hover:text-indigo-700 transition">
              Developer Console
            </h3>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Hourly health checks, live MongoDB system_status JSON payload, and failure incident logs.
            </p>

            <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-indigo-700">
              <span>/developer/page-1</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                {activeCategory === "developer" ? "Selected" : "Launch"} &rarr;
              </span>
            </div>
          </div>

          {/* Category Card 6: Legal Agreements & E-Sign */}
          <div
            onClick={() => {
              setActiveCategory("agreements");
              const el = document.getElementById("catalog");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className={`cursor-pointer rounded-3xl p-6 border-3 transition-all duration-300 relative overflow-hidden group shadow-xl ${
              activeCategory === "agreements"
                ? "border-amber-600 bg-white shadow-amber-500/15 ring-4 ring-amber-200"
                : "border-stone-200 bg-white/80 hover:border-amber-400 hover:shadow-lg"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 to-rose-600 text-white flex items-center justify-center font-black shadow-md">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-black px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                Drawn E-Sign
              </span>
            </div>

            <h3 className="text-lg font-black text-stone-950 group-hover:text-amber-800 transition">
              Asset Owner Agreements
            </h3>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              30% profit share in dry periods, replacement guarantee, and overhead exemption with drawn e-signature.
            </p>

            <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-800">
              <span>/agreements/page-1</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                {activeCategory === "agreements" ? "Selected" : "Sign"} &rarr;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MASTER CATALOG SECTION */}
      <section id="catalog" className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        {/* Category Toggle Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-200 pb-6">
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-100 rounded-2xl border border-stone-200 w-fit">
            <button
              onClick={() => setActiveCategory("landing")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-black transition ${
                activeCategory === "landing"
                  ? "bg-amber-500 text-slate-950 shadow-md"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Layout className="w-4 h-4" />
              Landing Page Designs (50)
            </button>
            <button
              onClick={() => setActiveCategory("input")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-black transition ${
                activeCategory === "input"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <ClipboardList className="w-4 h-4" />
              Input Forms (20)
            </button>
            <button
              onClick={() => setActiveCategory("marketplace")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-black transition ${
                activeCategory === "marketplace"
                  ? "bg-sky-600 text-white shadow-md"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              Marketplace Web App (4)
            </button>
            <button
              onClick={() => setActiveCategory("admin")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-black transition ${
                activeCategory === "admin"
                  ? "bg-rose-600 text-white shadow-md"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Shield className="w-4 h-4" />
              Admin Console (4)
            </button>
            <button
              onClick={() => setActiveCategory("developer")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-black transition ${
                activeCategory === "developer"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Terminal className="w-4 h-4" />
              Developer Console (1)
            </button>
            <button
              onClick={() => setActiveCategory("agreements")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-black transition ${
                activeCategory === "agreements"
                  ? "bg-amber-600 text-white shadow-md"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              Asset Owner Agreements &amp; E-Sign (4)
            </button>
          </div>

          <div className="text-xs text-amber-800 font-mono font-bold bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300 w-fit">
            {activeCategory === "landing"
              ? "Showing 50 Landing Page Designs"
              : activeCategory === "input"
              ? "Showing 20 Farm Management Input Forms"
              : activeCategory === "marketplace"
              ? "Showing Marketplace Web App UI Reference & Live Orders"
              : activeCategory === "admin"
              ? "Showing Admin Operations & Fleet Dispatch Console"
              : activeCategory === "developer"
              ? "Showing Developer Console & Infrastructure Telemetry"
              : "Showing 4 Animal Asset Owner Legal Agreements with Drawn E-Signature"}
          </div>
        </div>

        {/* VIEW A: LANDING PAGE DESIGNS (50 CARDS) */}
        {activeCategory === "landing" && (
          <div className="space-y-6">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All 50 Designs" },
                { id: "vibrant-new", label: "🌟 New Vibrant 41-50 (Non-Dark)" },
                { id: "heritage", label: "🏛️ Indian Heritage & Traditional" },
                { id: "fintech", label: "📈 FinTech, Quants & Trading" },
                { id: "tech", label: "⚡ Agritech, HUD & VC" },
                { id: "eco", label: "🌱 Eco, Circular & Solarpunk" },
                { id: "creative", label: "🎨 Creative, Gamified & Narrative" },
                { id: "minimalist", label: "✨ Clean Minimalist & Editorial" },
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setActiveFilter(pill.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    activeFilter === pill.id
                      ? "bg-amber-500 text-slate-950 shadow-sm"
                      : "bg-white text-stone-700 border border-stone-200 hover:bg-amber-50 hover:border-amber-300"
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* Grid of 50 Designs */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredLandingCards.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  className="group rounded-3xl border border-stone-200 bg-white p-5 flex flex-col justify-between hover:border-amber-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-stone-100 text-stone-800 border border-stone-200">
                        DESIGN {item.num}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-stone-900 group-hover:text-amber-600 transition leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-stone-500 mt-1 line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Color Palette Indicators */}
                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="text-[10px] text-stone-400 font-mono mr-1">Palette:</span>
                      {item.palette.map((color, cIdx) => (
                        <span
                          key={cIdx}
                          style={{ backgroundColor: color }}
                          className="w-3.5 h-3.5 rounded-full border border-stone-300 shadow-2xs inline-block"
                          title={color}
                        />
                      ))}
                    </div>

                    {/* Key Highlights */}
                    <div className="pt-2 border-t border-stone-100 space-y-1">
                      <span className="text-[10px] uppercase font-mono text-stone-400 block truncate font-semibold">
                        Ideal: {item.persona}
                      </span>
                      <div className="space-y-1 text-xs text-stone-600">
                        {item.highlights.slice(0, 2).map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-800">
                    <span>Open {item.url}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* VIEW B: INPUT FORMS (20 CARDS) */}
        {activeCategory === "input" && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between">
              <div>
                <strong className="block text-emerald-900 font-bold">Interactive Farm Data Workflows</strong>
                <span>All 10 forms feature React Hook Form validation, live visual calculations, and instant Toast feedback.</span>
              </div>
              <span className="text-xs font-mono font-bold bg-white px-3 py-1 rounded-xl border border-emerald-300 text-emerald-800">
                10 Workflows
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INPUT_CARDS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.id}
                    href={item.url}
                    className="group rounded-3xl border border-stone-200 bg-white p-6 flex flex-col justify-between hover:border-emerald-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase">
                          FORM {item.num} &bull; {item.url}
                        </span>
                        <h3 className="text-lg font-black text-stone-900 group-hover:text-emerald-700 transition leading-snug mt-0.5">
                          {item.title}
                        </h3>
                        <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="pt-3 border-t border-stone-100 space-y-1.5">
                        <span className="text-[10px] uppercase font-mono text-stone-400 block font-semibold">
                          Workflow Role: {item.persona}
                        </span>
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-1.5 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                      <span>Launch Form ({item.url})</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW C: DEVELOPER CONSOLE (1 CARD) */}
        {activeCategory === "developer" && (
          <div className="space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-indigo-50/70 via-white to-emerald-50/50 border-2 border-indigo-200 p-8 shadow-xl relative overflow-hidden">
              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-900 text-xs font-mono font-bold border border-indigo-200 shadow-xs">
                  <Terminal className="w-3.5 h-3.5 text-indigo-700" />
                  <span>NEW DEVELOPER SUITE &bull; NON-DARK VIBRANT UI</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Infrastructure Working Status &amp; Ecosystem Telemetry
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Automated hourly health checks executed from the Lambda perspective. Verified and persisted directly into MongoDB collection <code className="bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded font-mono font-bold">system_status</code> on the same keys every hour. Failure incidents isolated in <code className="bg-rose-100 text-rose-800 px-1.5 py-0.5 rounded font-mono font-bold">system_failed_logs</code>. Fully redesigned with bright, vibrant colors and direct Admin App navigation.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/developer/page-1"
                    className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white font-black text-xs shadow-lg shadow-indigo-600/25 flex items-center gap-2 transition hover:scale-105 active:scale-95"
                  >
                    <span>Launch Developer Console (/developer/page-1)</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://admin.hirafarm.ciyo.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 font-bold text-xs flex items-center gap-2 shadow-xs transition"
                  >
                    <Server className="w-4 h-4 text-indigo-600" />
                    <span>Navigate to Admin Web App</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW D: ANIMAL ASSET OWNER LEGAL AGREEMENTS & E-SIGN (4 MASTER CONTRACTS) */}
        {activeCategory === "agreements" && (
          <div className="space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/60 border-2 border-amber-300 p-8 shadow-xl relative overflow-hidden">
              <div className="max-w-4xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-mono font-bold border border-amber-300 shadow-xs">
                  <Stamp className="w-3.5 h-3.5 text-amber-800" />
                  <span>SECTION 10A IT ACT &bull; DRAWN DIGITAL E-SIGNATURE</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  Bilateral Livestock Custody &amp; 30% Profit Sharing Master Agreements
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  Official legal covenants between <strong>Hira Farm Management Private Limited</strong> and individual buffalo owners.
                  Covers guaranteed <strong>30% profit sharing even in dry non-lactating periods</strong>, <strong>mandatory animal replacement with farm-funded shortfall absorption</strong>,
                  <strong>100% exemption from land, shed construction, milking machinery, TMR feed, and software database overheads</strong>, and the <strong>10-year biological lifecycle cap</strong>.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/agreements/page-1"
                    className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white font-black text-xs shadow-lg shadow-amber-600/25 flex items-center gap-2 transition hover:scale-105 active:scale-95"
                  >
                    <span>Launch Agreement Signing Studio (/agreements/page-1)</span>
                    <PenTool className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://admin.hirafarm.ciyo.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 font-bold text-xs flex items-center gap-2 shadow-xs transition"
                  >
                    <Building2 className="w-4 h-4 text-amber-700" />
                    <span>Navigate to Admin Web App</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* 4 Agreement Cards Preview */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-6 rounded-3xl bg-white border-2 border-emerald-200/80 shadow-md space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                    HF-MC-30-2026
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">Stamp Duty: ₹500</span>
                </div>
                <h4 className="font-extrabold text-base text-slate-900">
                  10-Year Bovine Purchase &amp; 30% Profit-Sharing Master Custody Agreement
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Guarantees 30% net profit share disbursements to animal asset owner un-delayed, even during the animal&apos;s 60-90 day dry gestation period via farm cluster equalization.
                </p>
                <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <span>Includes Drawn Signature Canvas</span> &rarr;
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border-2 border-amber-200/80 shadow-md space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                    HF-LR-DEF-2026
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">Stamp Duty: ₹500</span>
                </div>
                <h4 className="font-extrabold text-base text-slate-900">
                  Guaranteed Livestock Replacement &amp; Farm Deficit Absorption Covenant
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Mandates replacement of lost animals. Hira Farm adds extra money from its Reserve Fund to cover any shortfall beyond insurance payout with ₹0 animal asset owner co-pay.
                </p>
                <div className="pt-2 text-xs font-bold text-amber-700 flex items-center gap-1">
                  <span>Zero-Exit Compounding Guarantee</span> &rarr;
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border-2 border-indigo-200/80 shadow-md space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-300">
                    HF-OH-EXEMP-2026
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">Stamp Duty: ₹500</span>
                </div>
                <h4 className="font-extrabold text-base text-slate-900">
                  Capital Overhead &amp; Operating Expense Exemption Deed
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Ring-fences animal asset owner returns: land purchase/lease, shed civil construction, automated milking machines, TMR feed, and software/databases are 100% farm overheads.
                </p>
                <div className="pt-2 text-xs font-bold text-indigo-700 flex items-center gap-1">
                  <span>Clean Dividends Protected</span> &rarr;
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border-2 border-purple-200/80 shadow-md space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 border border-purple-300">
                    HF-LC-TERM-2026
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">Stamp Duty: ₹500</span>
                </div>
                <h4 className="font-extrabold text-base text-slate-900">
                  10-Year Biological Lifecycle Cap &amp; Succession Termination Deed
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Defines individual bovine productive lifecycle cap at 10 years with ethical sanctuary retirement, while herd asset compounding transitions seamlessly to multi-generational daughters.
                </p>
                <div className="pt-2 text-xs font-bold text-purple-700 flex items-center gap-1">
                  <span>Succession to Female Offspring</span> &rarr;
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW E: MARKETPLACE WEB APP UI REFERENCE (4 MODULES) */}
        {activeCategory === "marketplace" && (
          <div className="space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-sky-50 via-white to-indigo-50 border-2 border-sky-300 p-8 shadow-xl relative overflow-hidden">
              <div className="max-w-4xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-950 text-xs font-mono font-bold border border-sky-300 shadow-xs">
                  <ShoppingBag className="w-3.5 h-3.5 text-sky-800" />
                  <span>MARKETPLACE WEB APP &bull; INVESTOR ORDERS &amp; LIVE TRANSIT</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  Livestock Orders &amp; Real-Time Transporter Telemetry
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  Client-facing marketplace tracking system for bovine investors. Features live GPS vehicle radar, cabin temperature monitoring,
                  veterinary fitness blood panel dossiers, RFID ear-tag verification, and automated transit milestones from Karnal/Rohtak mandis to Vashi, Navi Mumbai.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/marketplace/page-1"
                    className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-black text-xs shadow-lg shadow-sky-600/25 flex items-center gap-2 transition hover:scale-105 active:scale-95"
                  >
                    <span>Launch Orders &amp; Transit UI (/marketplace/page-1)</span>
                    <Truck className="w-4 h-4" />
                  </Link>

                  <a
                    href="http://localhost:3131/orders"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 font-bold text-xs flex items-center gap-2 shadow-xs transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-sky-600" />
                    <span>Open in Marketplace Web App (Port 3131)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 4 Marketplace Module Cards */}
            <div className="grid md:grid-cols-2 gap-5">
              <Link
                href="/marketplace/page-1"
                className="group p-6 rounded-3xl bg-white border-2 border-sky-200/80 shadow-md hover:shadow-xl transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-900 border border-sky-300">
                    MARKETPLACE-PAGE-01
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" /> Live Radar Active
                  </span>
                </div>
                <h4 className="font-extrabold text-base text-slate-900 group-hover:text-sky-600 transition-colors">
                  01. Livestock Orders &amp; Live Transit Telemetry
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Live GPS tracking, cabin climate control, driver direct-connect, certified vet fitness dossiers, and 5-stage procurement milestones.
                </p>
                <div className="pt-2 text-xs font-bold text-sky-700 flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                  <span>Explore Orders Experience</span> &rarr;
                </div>
              </Link>

              <div className="p-6 rounded-3xl bg-white border-2 border-emerald-200/80 shadow-md space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                    MARKETPLACE-PAGE-02
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">Catalog Feed</span>
                </div>
                <h4 className="font-extrabold text-base text-slate-900">
                  02. Murrah High-Yield Marketplace Catalog
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Comprehensive listing of certified lactating Murrah buffaloes, sire genomic profiles, milk yield fat curves, and instant ₹2 Lacs bookings.
                </p>
                <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <span>Unit Showcases &amp; Pedigree Sires</span> &rarr;
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border-2 border-amber-200/80 shadow-md space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                    MARKETPLACE-PAGE-03
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">Escrow Desk</span>
                </div>
                <h4 className="font-extrabold text-base text-slate-900">
                  03. Escrow Checkout &amp; Direct Mandi Booking
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Integer paise precision checkout, RTGS/NEFT UTR reconciliation workflow, 20-minute inventory reservation locks, and PhonePe integration.
                </p>
                <div className="pt-2 text-xs font-bold text-amber-700 flex items-center gap-1">
                  <span>Statutory Settlement Escrow</span> &rarr;
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border-2 border-purple-200/80 shadow-md space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 border border-purple-300">
                    MARKETPLACE-PAGE-04
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">Dividends</span>
                </div>
                <h4 className="font-extrabold text-base text-slate-900">
                  04. Investor Herd Compounding Portfolio
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Real-time investor dashboard tracking 30% monthly profit disbursements, multi-generational female calf offspring, and live milk production logs.
                </p>
                <div className="pt-2 text-xs font-bold text-purple-700 flex items-center gap-1">
                  <span>10-Year Compounding Wealth</span> &rarr;
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW F: ADMIN WEB APP UI REFERENCE (4 MODULES) */}
        {activeCategory === "admin" && (
          <div className="space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-amber-50 via-white to-rose-50 border-2 border-rose-300 p-8 shadow-xl relative overflow-hidden">
              <div className="max-w-4xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-950 text-xs font-mono font-bold border border-rose-300 shadow-xs">
                  <Shield className="w-3.5 h-3.5 text-rose-800" />
                  <span>ADMIN WEB APP &bull; FARM OPERATIONS &amp; FLEET DISPATCH</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  Farm Inbound Logistics &amp; Operations Command Center
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  Internal enterprise management console for Hira Farms staff. Real-time fleet tracking, quarantine health gate clearance,
                  RFID ear-tag master registry, and automated stanchion allocations across Vashi dairy sheds.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/admin/page-1"
                    className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white font-black text-xs shadow-lg shadow-rose-600/25 flex items-center gap-2 transition hover:scale-105 active:scale-95"
                  >
                    <span>Launch Fleet Dispatch Console (/admin/page-1)</span>
                    <Truck className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://admin.hirafarm.ciyo.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 font-bold text-xs flex items-center gap-2 shadow-xs transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-rose-600" />
                    <span>Navigate to Admin Web App</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 4 Admin Module Cards */}
            <div className="grid md:grid-cols-2 gap-5">
              <Link
                href="/admin/page-1"
                className="group p-6 rounded-3xl bg-white border-2 border-rose-200/80 shadow-md hover:shadow-xl transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 border border-rose-300">
                    ADMIN-PAGE-01
                  </span>
                  <span className="text-xs font-mono font-bold text-rose-600 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping inline-block" /> Ops Command
                  </span>
                </div>
                <h4 className="font-extrabold text-base text-slate-900 group-hover:text-rose-600 transition-colors">
                  01. Farm Inbound Logistics &amp; Fleet Dispatch
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Carrier fleet radar, driver communication, cabin temperature log, quarantine gate arrivals, and barn stanchion assignment.
                </p>
                <div className="pt-2 text-xs font-bold text-rose-700 flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                  <span>Launch Operations Radar</span> &rarr;
                </div>
              </Link>

              <div className="p-6 rounded-3xl bg-white border-2 border-emerald-200/80 shadow-md space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                    ADMIN-PAGE-02
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">Registry</span>
                </div>
                <h4 className="font-extrabold text-base text-slate-900">
                  02. Animal Herd Registry &amp; RFID Ear-Tag Master
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Digital herd book, 10-year compounding pedigree lineage, sex-sorted semen records, and lactation lifecycle stages.
                </p>
                <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <span>Master Bovine Registry</span> &rarr;
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border-2 border-indigo-200/80 shadow-md space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-300">
                    ADMIN-PAGE-03
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">Ledger</span>
                </div>
                <h4 className="font-extrabold text-base text-slate-900">
                  03. Investor ₹2L Portfolio &amp; Dividend Ledger
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Statutory 30% profit share disbursement engine, dry-period equalization reserve, bank RTGS payouts, and nominee records.
                </p>
                <div className="pt-2 text-xs font-bold text-indigo-700 flex items-center gap-1">
                  <span>Escrow &amp; Dividend Payouts</span> &rarr;
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border-2 border-purple-200/80 shadow-md space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 border border-purple-300">
                    ADMIN-PAGE-04
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">Claims</span>
                </div>
                <h4 className="font-extrabold text-base text-slate-900">
                  04. Livestock Insurance Claims &amp; Replacement
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Veterinary post-mortem survey desk, zero-exit animal replacement workflow, and farm shortfall absorption fund tracking.
                </p>
                <div className="pt-2 text-xs font-bold text-purple-700 flex items-center gap-1">
                  <span>Replacement Guarantee Engine</span> &rarr;
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 10-Year Compounding Model Explainer */}
      <section id="thesis" className="max-w-7xl mx-auto px-6 py-16 border-t border-amber-200/80 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-700">
            The Mathematical Foundation
          </span>
          <h2 className="text-3xl font-black text-stone-900">
            How ₹2 Lacs Compounds Into 88 Animals in 10 Years
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            Every mature adult buffalo (age &ge; 3) gives birth to a female calf every year via sex-sorted AI. Every born calf matures after exactly 3 years, begins yielding milk, and starts bearing children herself.
          </p>
        </div>

        {/* 10-Year Progression Table */}
        <div className="rounded-3xl border border-stone-200 bg-white overflow-hidden shadow-lg">
          <div className="p-4 bg-amber-100/70 border-b border-amber-200 flex items-center justify-between text-xs font-mono font-bold text-amber-950">
            <span>OFFICIAL 10-YEAR COMPOUNDING TIMELINE (₹2,00,000 SEED ALLOCATION)</span>
            <span className="text-emerald-700 font-black">A2 MILK @ ₹80/LITER (12L/DAY)</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-600">
                <tr>
                  <th className="p-3">YEAR</th>
                  <th className="p-3">MILKING ADULTS (AGE &ge; 3)</th>
                  <th className="p-3">HEIFERS (AGE 1-2)</th>
                  <th className="p-3">NEW CALVES (AGE 0)</th>
                  <th className="p-3">TOTAL HERD</th>
                  <th className="p-3">ANNUAL MILK</th>
                  <th className="p-3">ANNUAL REVENUE</th>
                  <th className="p-3">HERD ASSET VALUE</th>
                  <th className="p-3">CUMULATIVE PROFIT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700 font-medium">
                {projections.map((p) => (
                  <tr key={p.year} className="hover:bg-amber-50/50 transition">
                    <td className="p-3 font-bold text-stone-900">Year {p.year}</td>
                    <td className="p-3 text-emerald-700 font-bold">{p.matureBuffaloes}</td>
                    <td className="p-3">{p.growingHeifers}</td>
                    <td className="p-3">+{p.calvesBornThisYear}</td>
                    <td className="p-3 font-bold text-stone-900">{p.totalHerdSize}</td>
                    {/* Deterministic number formatting - no locale hydration mismatch! */}
                    <td className="p-3">{formatNumber(p.annualMilkProductionLiters)} L</td>
                    <td className="p-3 text-emerald-700 font-bold">{formatINR(p.grossMilkingRevenueINR)}</td>
                    <td className="p-3 text-amber-800 font-bold">{formatINR(p.herdAssetValueINR)}</td>
                    <td className="p-3 text-sky-700 font-bold">{formatINR(p.totalCumulativeWealthINR)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-200 bg-white text-xs text-stone-500 font-mono text-center">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <p className="font-bold text-stone-700">HIRA DIARY FARM MANAGEMENT SYSTEM &bull; 50 LANDING DESIGNS &bull; 10 REACT HOOK FORM INPUT PAGES</p>
          <p className="text-stone-500">Built with Next.js, Tailwind CSS & React Hook Form. Responsive with full keyboard and side-arrow navigation.</p>
        </div>
      </footer>
    </div>
  );
}
