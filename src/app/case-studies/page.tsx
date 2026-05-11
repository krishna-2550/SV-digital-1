import type { Metadata } from "next";
import CaseStudiesView from "./case-studies-view";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Campaign outcomes and growth stories from SV DIGITAL clients.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesView />;
}
