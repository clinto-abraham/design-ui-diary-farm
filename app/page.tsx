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
} from "lucide-react";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";

const DESIGN_CARDS = [
  // 1 to 20:
  {
    id: "design-1",
    num: "01",
    title: "Swiss Minimalist",
    subtitle: "Precision Agritech & Architectural Grids",
    palette: ["#121212", "#ffffff", "#10b981", "#737373"],
    badge: "Minimalist & Clean",
    category: "minimalist",
    badgeColor: "bg-stone-100 text-stone-800 border-stone-300",
    persona: "Corporate Agritech & European Investors",
    highlights: ["Monochrome typography", "Clean SVG bar graph", "Actuarial cohort ledger"],
  },
  {
    id: "design-2",
    num: "02",
    title: "Dark FinTech Terminal",
    subtitle: "Wall-Street Quant & Real-Time Telemetry",
    palette: ["#060a12", "#0b1324", "#10b981", "#06b6d4"],
    badge: "Quant & Bloomberg",
    category: "fintech",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    persona: "Hedge Funds & High-Yield Investors",
    highlights: ["Live ticker tape", "Glowing yield curve", "CAGR / APY indicators"],
  },
  {
    id: "design-3",
    num: "03",
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
    title: "Cyber Emerald Glass",
    subtitle: "Frosted Glassmorphism & Neon Mint Glow",
    palette: ["#031013", "#072127", "#2dd4bf", "#10b981"],
    badge: "Glassmorphic",
    category: "tech",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
    persona: "Tech Founders & Web3 Agri-Investors",
    highlights: ["Aero glass backdrops", "Neon radial halos", "Cyber biological telemetry"],
  },
  {
    id: "design-5",
    num: "05",
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
    title: "Neo-Brutalist Venture",
    subtitle: "Heavy Black Borders, High Contrast & Pop Shadows",
    palette: ["#fef08a", "#000000", "#4ade80", "#fb923c"],
    badge: "High-Energy Startup",
    category: "creative",
    badgeColor: "bg-yellow-200 text-yellow-950 border-yellow-400",
    persona: "Gen-Z Agri-Preneurs & Direct Investors",
    highlights: ["Chunky offset shadows", "Aggressive typography", "Sticker-style badges"],
  },
  {
    id: "design-7",
    num: "07",
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
    title: "Mobile-First SaaS Stack",
    subtitle: "App Viewport Mockup & Push Alert Banners",
    palette: ["#020617", "#0f172a", "#3b82f6", "#10b981"],
    badge: "Mobile Frame",
    category: "tech",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    persona: "Mobile-Only Investors & Smartphone Users",
    highlights: ["Simulated phone viewport", "Sticky bottom sheet", "Thumb-friendly pills"],
  },
  {
    id: "design-9",
    num: "09",
    title: "Generational Storyline",
    subtitle: "Chronicles of Gauri & Her 88 Descendants",
    palette: ["#11141b", "#1a1f2c", "#f97316", "#10b981"],
    badge: "Narrative Editorial",
    category: "creative",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-300",
    persona: "Impact Investors & Family Legacies",
    highlights: ["Generational family tree", "Story chapter timeline", "Emotional hook"],
  },
  {
    id: "design-10",
    num: "10",
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
    title: "Retro 80s Synthwave",
    subtitle: "Neon Sunset, Laser Horizon & Arcade Counters",
    palette: ["#0d071d", "#f43f5e", "#8b5cf6", "#06b6d4"],
    badge: "Synthwave Arcade",
    category: "creative",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    persona: "Pop-Culture Devs & Gaming Agri-Investors",
    highlights: ["Neon glowing wireframe", "Outrun aesthetics", "Arcade pixel counters"],
  },
  {
    id: "design-13",
    num: "13",
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
    title: "Neumorphic Soft Clay",
    subtitle: "Soft Inset/Extruded Clay Shadows & Tactile UI",
    palette: ["#e0e5ec", "#2d3748", "#38a169", "#4a5568"],
    badge: "Neumorphic Tactile",
    category: "creative",
    badgeColor: "bg-stone-200 text-stone-900 border-stone-300",
    persona: "UI/UX Designers & Mobile Experience Seekers",
    highlights: ["Extruded soft buttons", "Tactile inset metric counters", "Smooth monochromatic palette"],
  },

  // 21 to 40 (Indian Investor Cultural Series):
  {
    id: "design-21",
    num: "21",
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
    title: "Neo-UPI FinTech App",
    subtitle: "PhonePe/GPay Style, Auto-Pay & QR Simulator",
    palette: ["#0b0d1b", "#6366f1", "#10b981", "#f8fafc"],
    badge: "UPI 1-Click AutoPay",
    category: "tech",
    badgeColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
    persona: "Young Tech-Savvy Indian Retail Investors",
    highlights: ["UPI auto-debit simulator", "Daily cashback reward scratches", "Instant QR allotment"],
  },
  {
    id: "design-34",
    num: "34",
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
    title: "Quick-Commerce Dark Store",
    subtitle: "Zepto/Blinkit 10-Min Farm-to-Fridge Pipeline",
    palette: ["#110526", "#facc15", "#8b5cf6", "#1f0a42"],
    badge: "Quick-Commerce 10m",
    category: "tech",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
    persona: "Urban D2C Investors & Quick-Comm Operators",
    highlights: ["6:00 AM dark store dispatch", "Direct-to-consumer premium", "Zero-middleman margin capture"],
  },

  // NEW 41 to 50: VIBRANT, DAYLIGHT, SUNNY, AND IMAGINATIVE:
  {
    id: "design-41",
    num: "41",
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
    title: "Solarium Sky-Greenhouse",
    subtitle: "Vertical Hydroponic Fodder & Daylight Glass Arcs",
    palette: ["#ffffff", "#65a30d", "#0284c7", "#eab308"],
    badge: "Glass Solarium",
    category: "vibrant-new",
    badgeColor: "bg-lime-200 text-lime-950 border-lime-400 font-bold",
    persona: "High-Tech Green-Sprout Investors & Hydroponic Pioneers",
    highlights: ["6-day vertical barley sprouts", "Classical raga oxytocin acoustics", "Computer daylight atriums"],
  },
  {
    id: "design-49",
    num: "49",
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
    title: "Maha Bilona Golden Jubilee",
    subtitle: "Celebratory Butter Churn, Temple Bells & ₹3.25 Cr Ticker",
    palette: ["#fffbeb", "#facc15", "#ea580c", "#059669"],
    badge: "Grand Finale 50",
    category: "vibrant-new",
    badgeColor: "bg-yellow-300 text-slate-950 border-yellow-500 font-black",
    persona: "All Indian Investors & Rural Wealth Advocates",
    highlights: ["Grand 50-design jubilee finale", "₹3.25 Crore wealth celebration", "Traditional wooden Bilona ticker"],
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [simYear, setSimYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const currentSimData = projections[simYear - 1];

  const filteredCards =
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
            <strong>HIRA DAIRY FARM SOFTWARE:</strong> 50 Distinct Complete UI/UX Themes &bull; Fully Interactive for Client Selection
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
                50 DESIGN EXPERIENCES // ALL BRIGHT & VIBRANT
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#simulator"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-amber-300 bg-amber-50 text-xs font-bold text-amber-900 hover:bg-amber-100 transition"
            >
              <Sliders className="w-3.5 h-3.5 text-amber-600" />
              Live Compounding Simulator
            </a>
            <a
              href="#catalog"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-xs shadow-md shadow-orange-300/40 hover:scale-105 transition"
            >
              Browse 50 Designs &darr;
            </a>
          </div>
        </div>
      </header>

      {/* Hero Showcase: Ultra-Animated Buffalo Farm Business Experience */}
      <section className="relative max-w-7xl mx-auto px-6 pt-12 pb-20 overflow-hidden">
        {/* Animated Background Rays / Sunburst */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-200/40 via-yellow-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-extrabold shadow-xs">
              <Sun className="w-4 h-4 text-amber-600 animate-spin-slow" /> 
              <span>Vibrant Daylight Suite &bull; 50 Unique UI Archetypes</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-stone-950 tracking-tight leading-[1.08]">
              50 Completely Unique Designs for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-emerald-600">
                Hira Dairy Farm Software.
              </span>
            </h1>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-medium">
              Explore 50 distinct identities for the <strong>₹2 Lacs Buffalo + Calf</strong> 10-year compounding business plan. From celestial observatories, alpine valleys, and Jaipur melas to Dalal Street terminals and Mediterranean fromageries—all in <strong>bright, cheerful, daylight color palettes</strong> crafted to delight investors.
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
            {/* Floating Badge 1: 14L/Day */}
            <div className="absolute -top-4 -left-4 z-20 px-3.5 py-2 rounded-2xl bg-white border border-emerald-200 shadow-lg text-xs font-bold text-emerald-800 flex items-center gap-2 animate-float-slow">
              <Milk className="w-4 h-4 text-emerald-600" />
              <span>14 L / Day Pure Murrah Milk</span>
            </div>

            {/* Floating Badge 2: Compounding Multiplier */}
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

      {/* Interactive Buffalo Farm Business Compounding Visualizer (Animation-Rich) */}
      <section id="simulator" className="max-w-7xl mx-auto px-6 py-12">
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

          {/* Visual Herd Pasture Simulation: Animated Animals in Pasture */}
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

            {/* Pasture Grid of Animated Animals */}
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
            <div className="text-[11px] text-emerald-800 text-center font-medium">
              Every animal shown is generated through mathematical compounding of the initial ₹2 Lacs package!
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
              <p className="text-xs text-sky-700 mt-1 font-medium">
                {currentSimData.annualMilkProductionLiters.toLocaleString()} L / year output
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

      {/* 50-Design Cards Showcase */}
      <section id="catalog" className="max-w-7xl mx-auto px-6 py-16 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-amber-200 pb-6">
          <div>
            <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-amber-700">
              Design Master Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 mt-1">
              Select Any of the 50 Complete UI Themes
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Click any card to route to its dedicated design page with side-navigation arrows.
            </p>
          </div>
          <div className="text-xs text-amber-800 font-mono font-bold bg-amber-100 px-3 py-1.5 rounded-full border border-amber-300">
            50 of 50 Designs Live & Interactive
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
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

        {/* Catalog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCards.map((item) => (
            <Link
              key={item.id}
              href={`/${item.id}`}
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
                <span>View Design {item.num}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
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
            <span className="text-emerald-700 font-black">A2 MILK @ ₹70/LITER</span>
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
                  <th className="p-3">CUMULATIVE MILK</th>
                  <th className="p-3">HERD ASSET VALUE</th>
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
                    <td className="p-3">{p.annualMilkProductionLiters.toLocaleString()} L</td>
                    <td className="p-3 text-emerald-700 font-bold">{formatINR(p.grossMilkingRevenueINR)}</td>
                    <td className="p-3 text-sky-700">{formatINR(p.cumulativeMilkRevenueINR)}</td>
                    <td className="p-3 text-amber-800 font-bold">{formatINR(p.herdAssetValueINR)}</td>
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
          <p className="font-bold text-stone-700">HIRA DIARY FARM MANAGEMENT SYSTEM &bull; 50 COMPLETE DESIGNS FOR CLIENT EVALUATION</p>
          <p className="text-stone-500">Built with Next.js & Tailwind CSS. All 50 designs fully responsive with side-arrow navigation.</p>
        </div>
      </footer>
    </div>
  );
}
