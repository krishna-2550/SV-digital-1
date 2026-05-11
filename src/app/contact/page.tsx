import type { Metadata } from "next";
import ContactView from "./contact-view";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SV DIGITAL for a growth strategy consultation and project inquiry.",
};

export default function ContactPage() {
  return <ContactView />;
}
