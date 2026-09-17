import type { Metadata } from "next";
import { Hind, Roboto_Condensed, Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";

const hind = Hind({ weight: ["300", "400", "500", "600"], subsets: ["latin"], variable: "--font-hind" });
const roboto = Roboto_Condensed({ weight: ["300", "400", "700"], subsets: ["latin"], variable: "--font-roboto-condensed" });
const noto = Noto_Serif({ weight: ["400"], style: ["normal", "italic"], subsets: ["latin"], variable: "--font-noto-serif" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.delamerican.com"),
  title: { default: `${site.name} — ${site.tagline}`, template: `${site.name} — %s` },
  description:
    "Del American's core business is the development of luxury multifamily apartment communities. Over 36 communities and 10,000 residences developed across Florida, Georgia, Texas and Las Vegas.",
  openGraph: { siteName: site.fullName, type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hind.variable} ${roboto.variable} ${noto.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
