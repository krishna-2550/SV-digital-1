import type { Metadata } from "next";
import AboutView from "./about-view";

export const metadata: Metadata = {
  title: "About",
  description: "Mission, principles, and story behind SV DIGITAL digital marketing agency.",
};

export default function AboutPage() {
  return <AboutView />;
}
