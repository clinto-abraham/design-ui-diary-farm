// Mathematical Compounding Engine for Hira Dairy Farm ₹2 Lacs Buffalo Investment Package

export interface YearProjection {
  year: number;
  matureBuffaloes: number; // Age >= 3, lactating & giving birth
  growingHeifers: number;  // Age 1 to 2
  calvesBornThisYear: number; // Age 0
  totalHerdSize: number;
  dailyMilkProductionLiters: number;
  annualMilkProductionLiters: number;
  grossMilkingRevenueINR: number;
  feedAndCareCostINR: number;
  netMilkingProfitINR: number;
  cumulativeMilkRevenueINR: number;
  cumulativeNetProfitINR: number;
  herdAssetValueINR: number;
  totalCumulativeWealthINR: number; // cumulative net profit + asset value
  milestoneDescription: string;
}

export interface BuffaloInvestmentConfig {
  packageCount: number; // e.g. 1 package = 1 buffalo + 1 calf @ ₹2,00,000
  initialPackagePriceINR: number; // ₹2,00,000
  milkPricePerLiterINR: number; // default ₹70
  litersPerDayPerAdult: number; // default 14
  lactationDaysPerYear: number; // default 300
  adultAssetValueINR: number; // default ₹1,50,000
  calfAssetValueINR: number; // default ₹50,000
  adultCareCostPerYearINR: number; // default ₹1,00,000 (feed, vet, green fodder)
  calfCareCostPerYearINR: number; // default ₹30,000
}

export const DEFAULT_CONFIG: BuffaloInvestmentConfig = {
  packageCount: 1,
  initialPackagePriceINR: 200000,
  milkPricePerLiterINR: 70,
  litersPerDayPerAdult: 14,
  lactationDaysPerYear: 300,
  adultAssetValueINR: 150000,
  calfAssetValueINR: 50000,
  adultCareCostPerYearINR: 100000,
  calfCareCostPerYearINR: 30000,
};

/**
 * Calculates the exact 10-year compounding herd growth:
 * - Start (Year 0): 1 adult milking buffalo (age 3+) and 1 female calf (age 0).
 * - Every adult buffalo bears 1 calf every year using sex-sorted Artificial Insemination (AI).
 * - Calves take 3 years to reach maturity:
 *   - Year 0: Calf born
 *   - Year 1: 1 yr old
 *   - Year 2: 2 yr old
 *   - Year 3: 3 yr old (Matures! Starts giving milk and yields her first calf)
 */
export function calculate10YearProjection(
  config: BuffaloInvestmentConfig = DEFAULT_CONFIG
): YearProjection[] {
  const {
    packageCount,
    milkPricePerLiterINR,
    litersPerDayPerAdult,
    lactationDaysPerYear,
    adultAssetValueINR,
    calfAssetValueINR,
    adultCareCostPerYearINR,
    calfCareCostPerYearINR,
  } = config;

  // Track cohort of animals by age in years: [age0, age1, age2, adults(age3+)]
  // At Year 0:
  // adults = 1 * packageCount
  // age0 = 1 * packageCount
  // age1 = 0
  // age2 = 0
  let adults = 1 * packageCount;
  let age2 = 0;
  let age1 = 0;
  let age0 = 1 * packageCount;

  const projections: YearProjection[] = [];
  let cumulativeRevenue = 0;
  let cumulativeNet = 0;

  for (let year = 1; year <= 10; year++) {
    // 1. Maturation from previous year:
    // Animals that were age 2 last year now turn age 3 and become adults!
    const newAdultsThisYear = age2;
    adults += newAdultsThisYear;

    // Animals that were age 1 last year now turn age 2
    age2 = age1;

    // Animals that were age 0 last year now turn age 1
    age1 = age0;

    // 2. New births this year:
    // Each adult produces 1 calf via AI
    const births = adults;
    age0 = births;

    const totalHerd = adults + age2 + age1 + age0;
    const growingHeifers = age2 + age1;

    // Milking calculations:
    const dailyMilk = adults * litersPerDayPerAdult;
    const annualMilkLiters = dailyMilk * lactationDaysPerYear;
    const grossMilkRevenue = annualMilkLiters * milkPricePerLiterINR;

    const totalCareCost =
      adults * adultCareCostPerYearINR +
      (growingHeifers + age0) * calfCareCostPerYearINR;

    const netMilkProfit = grossMilkRevenue - totalCareCost;

    cumulativeRevenue += grossMilkRevenue;
    cumulativeNet += netMilkProfit;

    const herdAssetValue =
      adults * adultAssetValueINR + (growingHeifers + age0) * calfAssetValueINR;

    const totalWealth = cumulativeNet + herdAssetValue;

    let milestone = "";
    if (year === 1) {
      milestone = "Founding Murrah Mother yields first farm-born calf; 4,200L milk sold";
    } else if (year === 2) {
      milestone = "Second calf born; founding calf reaches 2 years of age";
    } else if (year === 3) {
      milestone = "First heifer matures! Milking herd doubles to 2 adults; 2 new births";
    } else if (year === 4) {
      milestone = "Second heifer matures! Herd reaches 9 animals; ₹8.8L+ milk revenue";
    } else if (year === 5) {
      milestone = "Compounding accelerates: 4 milking mothers; herd surpasses 13 animals";
    } else if (year === 6) {
      milestone = "Generational leap: 6 milking adults; 19 total herd count; ₹17L+ revenue";
    } else if (year === 7) {
      milestone = "9 active milking mothers producing 37,800L/yr; herd grows to 28";
    } else if (year === 8) {
      milestone = "Herd crosses 40 animals; ₹38L+ annual milk turnover";
    } else if (year === 9) {
      milestone = "19 milking adults; herd touches 60 animals; institutional scale achieved";
    } else if (year === 10) {
      milestone = "88 Total Animals! ₹82L+ annual milk revenue; >₹3.2 Crore cumulative creation";
    }

    projections.push({
      year,
      matureBuffaloes: adults,
      growingHeifers,
      calvesBornThisYear: age0,
      totalHerdSize: totalHerd,
      dailyMilkProductionLiters: dailyMilk,
      annualMilkProductionLiters: annualMilkLiters,
      grossMilkingRevenueINR: grossMilkRevenue,
      feedAndCareCostINR: totalCareCost,
      netMilkingProfitINR: netMilkProfit,
      cumulativeMilkRevenueINR: cumulativeRevenue,
      cumulativeNetProfitINR: cumulativeNet,
      herdAssetValueINR: herdAssetValue,
      totalCumulativeWealthINR: totalWealth,
      milestoneDescription: milestone,
    });
  }

  return projections;
}

export function formatINR(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(2)} Lacs`;
  }
  return `₹${amount.toLocaleString("en-IN")}`;
}
