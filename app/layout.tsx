import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/Toaster";

export const metadata: Metadata = {
  title: "Hira Dairy Farm - 50 Designs & Farm Management System",
  description: "Explore 50 unique UI/UX landing page designs and 10 interactive farm input forms for Hira Dairy Farm's ₹2 Lacs Buffalo & Calf business plan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans bg-[#fbfbf9] text-stone-900 selection:bg-amber-300 selection:text-amber-950">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
