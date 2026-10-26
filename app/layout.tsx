import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hira Dairy Farm - 10-Year Buffalo Compounding & Wealth Model",
  description: "Explore 10 unique UI/UX designs for Hira Dairy Farm's ₹2 Lacs Buffalo & Calf compounding investment plan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
