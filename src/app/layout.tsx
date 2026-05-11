import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import BackToTop from "@/components/back-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displaySans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "SV DIGITAL | Digital Marketing Agency",
    template: "%s | SV DIGITAL",
  },
  description:
    "SV DIGITAL is a modern digital marketing company delivering SEO, paid media, social media marketing, and conversion-focused growth campaigns.",
};

export const viewport: Viewport = {
  themeColor: "#faf8ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${displaySans.variable} h-full antialiased`}
    >
      <body className="min-h-full text-slate-900">
        <div className="page-mesh flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
