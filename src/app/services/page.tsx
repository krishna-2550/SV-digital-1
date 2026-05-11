import type { Metadata } from "next";
import ServicesView from "./services-view";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SV DIGITAL services: SEO, performance marketing, social media, content, automation, and analytics.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
