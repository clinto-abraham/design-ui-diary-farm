import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

// Dynamically import all 50 design components
const DESIGNS_MAP: Record<string, React.ComponentType> = {
  "page-1": dynamic(() => import("@/app/design-1/page")),
  "page-2": dynamic(() => import("@/app/design-2/page")),
  "page-3": dynamic(() => import("@/app/design-3/page")),
  "page-4": dynamic(() => import("@/app/design-4/page")),
  "page-5": dynamic(() => import("@/app/design-5/page")),
  "page-6": dynamic(() => import("@/app/design-6/page")),
  "page-7": dynamic(() => import("@/app/design-7/page")),
  "page-8": dynamic(() => import("@/app/design-8/page")),
  "page-9": dynamic(() => import("@/app/design-9/page")),
  "page-10": dynamic(() => import("@/app/design-10/page")),
  "page-11": dynamic(() => import("@/app/design-11/page")),
  "page-12": dynamic(() => import("@/app/design-12/page")),
  "page-13": dynamic(() => import("@/app/design-13/page")),
  "page-14": dynamic(() => import("@/app/design-14/page")),
  "page-15": dynamic(() => import("@/app/design-15/page")),
  "page-16": dynamic(() => import("@/app/design-16/page")),
  "page-17": dynamic(() => import("@/app/design-17/page")),
  "page-18": dynamic(() => import("@/app/design-18/page")),
  "page-19": dynamic(() => import("@/app/design-19/page")),
  "page-20": dynamic(() => import("@/app/design-20/page")),
  "page-21": dynamic(() => import("@/app/design-21/page")),
  "page-22": dynamic(() => import("@/app/design-22/page")),
  "page-23": dynamic(() => import("@/app/design-23/page")),
  "page-24": dynamic(() => import("@/app/design-24/page")),
  "page-25": dynamic(() => import("@/app/design-25/page")),
  "page-26": dynamic(() => import("@/app/design-26/page")),
  "page-27": dynamic(() => import("@/app/design-27/page")),
  "page-28": dynamic(() => import("@/app/design-28/page")),
  "page-29": dynamic(() => import("@/app/design-29/page")),
  "page-30": dynamic(() => import("@/app/design-30/page")),
  "page-31": dynamic(() => import("@/app/design-31/page")),
  "page-32": dynamic(() => import("@/app/design-32/page")),
  "page-33": dynamic(() => import("@/app/design-33/page")),
  "page-34": dynamic(() => import("@/app/design-34/page")),
  "page-35": dynamic(() => import("@/app/design-35/page")),
  "page-36": dynamic(() => import("@/app/design-36/page")),
  "page-37": dynamic(() => import("@/app/design-37/page")),
  "page-38": dynamic(() => import("@/app/design-38/page")),
  "page-39": dynamic(() => import("@/app/design-39/page")),
  "page-40": dynamic(() => import("@/app/design-40/page")),
  "page-41": dynamic(() => import("@/app/design-41/page")),
  "page-42": dynamic(() => import("@/app/design-42/page")),
  "page-43": dynamic(() => import("@/app/design-43/page")),
  "page-44": dynamic(() => import("@/app/design-44/page")),
  "page-45": dynamic(() => import("@/app/design-45/page")),
  "page-46": dynamic(() => import("@/app/design-46/page")),
  "page-47": dynamic(() => import("@/app/design-47/page")),
  "page-48": dynamic(() => import("@/app/design-48/page")),
  "page-49": dynamic(() => import("@/app/design-49/page")),
  "page-50": dynamic(() => import("@/app/design-50/page")),
};

export function generateStaticParams() {
  return Array.from({ length: 50 }, (_, i) => ({
    page: `page-${i + 1}`,
  }));
}

export default async function DynamicHomePage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const Component = DESIGNS_MAP[page];

  if (!Component) {
    notFound();
  }

  return <Component />;
}
